import React, {useEffect} from 'react'
import {ThemeContext} from "../context/ThemeContext";
import {CartContext} from "../context/CartContext";
// import { useNavigate } from "react-router-dom";
import '../style.css'
import '../input.css'
import {
	IconBrandFacebook,
	IconBrandInstagram,
	IconBrandLinkedin,
	IconBrandWhatsapp,
	IconDiscountCheckFilled,
	IconExclamationCircle,
	IconHome,
	IconMail,
	IconMinus,
	IconPhoneCall,
	IconPlus,
	IconShoppingCartHeart
} from "@tabler/icons-react";
import ScrollToTopButton from "../components/ui/ScrollToTopButton";

const Cart = () => {
	// const navigate = useNavigate();
	const {theme} = React.useContext(ThemeContext);
	
	let {
		addToCart,
		removeFromCart,
		clearCart,
		productInfo,
		IncreaseProductQuantity,
		DecreaseProductQuantity,
		getCart
	} = React.useContext(CartContext);
	
	const [cart, setCart] = React.useState([]);
	
	useEffect(() => {
		setCart(getCart())
		if (theme === "light") {
			const light_button = document.getElementById("light_button");
			light_button.click();
		} else {
			const dark_button = document.getElementById("dark_button");
			dark_button.click();
		}
	}, []);
	
	const IncreaseProductQuantityHere = (product_id) => {
		for (let i = 0; i < cart.length; i++) {
			if (cart[i].product_id === product_id) {
				cart[i].quantity += 1;
				break;
			}
		}
		// set the cart in the local storage
		IncreaseProductQuantity(product_id);
		setCart(getCart())
	}
	
	return (
		<div>
			<section className="flex flex-col p-4 m-8 justify-center items-center text-5xl bulgatti" id="intro">
				Cart
			</section>
			
			{cart.length !== 0 ? (
					<section className="flex flex-col justify-center items-center m-4 rounded-2xl gap-6 p-2" id="intro">
						{cart.map((item) => {
							return (
								<div className="flex justify-between items-center gap-4 w-full px-4 pt-4 bg-base-200 rounded-2xl">
									<div className="">
										<div className="text-2xl prata my-1">
											{productInfo.filter((product) => {
													return product.product_id === item.product_id
												}
											)[0].product_name}
										</div>
										<div className="text-sm prata my-1">
											Cost: &#8377; {" "}{productInfo.filter((product) => {
												return product.product_id === item.product_id
											}
										)[0].product_cost}
										</div>
										<div className="text-sm prata my-1">
											Quantity: {item.quantity}
										</div>
										
										<div className="flex flex-row items-center gap-4 my-4 mx-0">
											<button className="btn btn-sm btn-accent text-accent-content" onClick={() => {
												IncreaseProductQuantityHere(item.product_id)
											}}>
												<IconPlus className="w-4 h-4"/>
											</button>
											<button className="btn btn-sm btn-accent text-accent-content" onClick={() => {
												DecreaseProductQuantity(item.product_id)
											}}>
												<IconMinus className="w-4 h-4"/>
											</button>
										</div>
									</div>
									<div className="">
										<img src={
											productInfo.filter((product) => {
													return product.product_id === item.product_id
												}
											)[0].product_image
										} alt={item.name} className="w-32 rounded-2xl"/>
									
									
									</div>
								</div>
							)
						})
						}
					</section>
				) :
				<div className="text-center flex flex-col justify-center items-center m-8 text-accent"><IconShoppingCartHeart
					className="w-24 h-24"/>
					<div className="text-2xl prata my-2">
						Your cart is empty.
					</div>
				</div>}
			{cart.length !== 0 ? (
				<section className="flex flex-col p-4 justify-center items-center" id="intro">
					<div className="flex flex-col p-4 m-8 justify-center items-center text-3xl bulgatti" id="intro">
						Invoice
					</div>
					<div className="overflow-x-auto">
						<table className="table">
							{/* head */}
							<thead>
							<tr>
								<th>No.</th>
								<th>Name</th>
								<th>Quantity</th>
								<th>Cost</th>
							</tr>
							</thead>
							<tbody>
							{
								cart.map((item) => {
										return (
											<tr className="text-md">
												<td>
													{/*	serial number*/}
													{cart.indexOf(item) + 1}
												</td>
												<td>
													{productInfo.filter((product) => {
															return product.product_id === item.product_id
														}
													)[0].product_name}
												</td>
												<td>
													{item.quantity}
												</td>
												<td>
													&#8377;{productInfo.filter((product) => {
														return product.product_id === item.product_id
													}
												)[0].product_cost}
												</td>
											</tr>
										)
									}
								)
							}
							{/* display total. */}
							<tr>
								<td></td>
								<td></td>
								<td>Total</td>
								<td>
									&#8377;{cart.reduce((total, item) => {
									return total + productInfo.filter((product) => {
											return product.product_id === item.product_id
										}
									)[0].product_cost * item.quantity
								}, 0)}
								</td>
							</tr>
							</tbody>
						</table>
					</div>
				</section>
			) : <div></div>}
			{cart.length !== 0 ? (
				<section className="flex flex-col p-4 justify-center items-center" id="intro">
					<div className="flex flex-col p-4 m-8 justify-center items-center text-3xl bulgatti" id="intro">
						Details
					</div>
					<div className="alert alert-warning m-6 mt-0 max-w-5xl text-center flex flex-col justify-center">
						<IconExclamationCircle className="w-8 h-8 "/>
						
						<span className="text-center">Please ensure that the details are you enter are accurate. We will send you an email confirming your order
					within 24 hours.</span>
					</div>
					<div className="">
						
						<div className="form-control">
							<label className="label">
								<span className="label-text">Your Email</span>
							</label>
							<label className="input-group">
								<span><IconMail className="w-4 h-4"/></span>
								<input type="text" placeholder="info@site.com" className="input input-bordered"/>
							</label>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Your Phone Number</span>
							</label>
							<label className="input-group">
								<span><IconPhoneCall className="w-4 h-4"/> </span>
								<input type="tel" placeholder="+91 XXXXXXXXXX" className="input input-bordered"/>
							</label>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Your Address</span>
							</label>
							<label className="input-group">
								<span><IconHome className="w-4 h-4"/> </span>
								{/*<input type="tel" placeholder=""*/}
								{/*       className="input input-bordered"/>*/}
								<textarea className="textarea textarea-bordered w-full"
								          placeholder="Flat, Building, Street, City, State"></textarea>
							</label>
						</div>
					</div>
				
				</section>
			) : <div></div>}
			{cart.length !== 0 ? (
				<section className="flex flex-col p-4 justify-center items-center" id="intro">
					<button className="btn btn-sm btn-primary" id="buy_now_button" onClick={
						() => {
							console.log("buy not clicked. send some api calls. ")
							// 	unhide the qr code
							const qr_code = document.getElementById("qr_payment");
							qr_code.style.display = "flex";
							// hide the buy now button
							const buy_now_button = document.getElementById("buy_now_button");
							buy_now_button.style.display = "none";
						}
					}>
						Buy Now.
					</button>
				</section>) : <div></div>}
			
			<section className="flex flex-col items-center p-4 justify-center items-center hidden" id="qr_payment">
				<div className="alert alert-success max-w-5xl text-center flex flex-col justify-center">
					<IconDiscountCheckFilled className="w-8 h-8"/>
					<span className="text-center">Pay this Number below or Scan the UPI QR Code, and you will receive an email confirming your order within 24 hours. </span>
				</div>
				<div className="flex justify-center">
					
					<div id="qr_code" className="w-screen h-96 bg-center snap-center self-center">
					</div>
				</div>
			
			</section>
			
			<footer className="footer footer-center p-10 bg-secondary text-primary-content bottom-0">
				<aside>
					<div id="luxelogo" className="w-20 h-20 bg-center snap-center self-center"
					></div>
					<p className="dancing text-3xl"><span className="text-2xl prata">Luxuriant Luxe</span><br/>Your Skin Our
						Priority</p>
					<p>Copyright © 2023 - All right reserved</p>
					<a className="link">Privacy Policy</a>
				</aside>
				<nav className="">
					<div className="flex flex-wrap justify-center items-center gap-4 w-2/3 lg:w-fit">
						<a
							href="https://wa.me/917666018928?text=Welcome%20to%20Luxuriant%20Luxe!%20How%20can%20we%20help%20you%20today%3F%20"
						>
							<IconBrandWhatsapp className="w-8 h-8"/>
						</a>
						<a href="https://www.instagram.com/luxuriant_luxe"
						>
							<IconBrandInstagram className="w-8 h-8"/>
						</a>
						<a href="https://www.facebook.com/profile.php?id=61551508050876"
						>
							<IconBrandFacebook className="w-8 h-8"/>
						</a>
						{/*<a*/}
						{/*	href=""*/}
						{/*>*/}
						{/*	<IconBrandTelegram className="w-8 h-8"/>*/}
						{/*</a>*/}
						<a
							href="https://www.linkedin.com/in/luxuriant-luxe-1b852a292"
						>
							<IconBrandLinkedin className="w-8 h-8"/>
						</a>
						<a
							onClick={
								// open mail client
								() => {
									window.location.href = "mailto:luxeluxuriant@gmail.com";
								}
							}
						>
							<IconMail className="w-8 h-8"/>
						</a>
						<a
							onClick={
								// open phone client
								() => {
									window.location.href = "tel:+917666018928";
								}
							}
						>
							<IconPhoneCall className="w-8 h-8"/>
						</a>
						<ScrollToTopButton/>
					</div>
				</nav>
			</footer>
		</div>
	)
}

export default Cart
