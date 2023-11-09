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
import {BaseUrlContext} from "../context/BaseUrlContext";
import axios from "axios";

axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:5173';
axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS';
axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Content-Type';
axios.defaults.headers.common['Access-Control-Allow-Credentials'] = 'true';

const Cart = () => {
	// const navigate = useNavigate();
	const {theme} = React.useContext(ThemeContext);
	const [change, setChange] = React.useState(0);
	const base_url = React.useContext(BaseUrlContext).baseUrl
	
	let {
		addToCart,
		removeFromCart,
		clearCart,
		getCartTotal,
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
	
	
	const [customerEmail, setCustomerEmail] = React.useState("");
	const [customerPhone, setCustomerPhone] = React.useState("");
	const [customerAddress, setCustomerAddress] = React.useState("");
	const [customerName, setCustomerName] = React.useState("");
	
	const SendOrderToBackend = async () => {
		
		// check that none of the things are null
		// if (customerEmail === "" || customerPhone === "" || customerAddress === "" || customerName === "") {
		// 	alert("Please fill all the fields!");
		// 	return;
		// }
		
		// do a regex check for phone number ( +91 1234567890 )
		// const phone_regex = new RegExp("^\\+91[0-9]{10}$");
		// if (!phone_regex.test(customerPhone)) {
		// 	alert("Please enter a valid phone number!");
		// 	return;
		// }
		
		// do a regex check for email
		// const email_regex = new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");
		// if (!email_regex.test(customerEmail)) {
		// 	alert("Please enter a valid email!");
		// 	return;
		// }
		//
		// // make sure xss scripts are not present in address using regex
		// const xss_regex = new RegExp("<script>");
		// if (xss_regex.test(customerAddress)) {
		// 	alert("Please enter a valid address!");
		// 	return;
		// }
		
		// print everything
		console.log(customerEmail);
		console.log(customerPhone);
		console.log(customerAddress);
		console.log(customerName);
		console.log(getCart());
		console.log(getCartTotal());
		
		let latest_cart = getCart();
		const response = await axios
			.post(
				`${base_url}/api/v1/Luxuriant/add_order`,
				{},
				{
					params: {
						customer_email: customerEmail,
						customer_phone: customerPhone,
						customer_address: customerAddress,
						customer_name: customerName,
						customer_order: JSON.stringify(latest_cart),
						order_cost: getCartTotal(),
					},
				},
			)
			.then((response) => {
				return response;
			})
			.catch((error) => {
				console.error(error);
				alert("server not running! a simulated response is being sent");
				return {
					data: {
						message: "simulation",
					},
				};
			});
		if (response.data.message === "simulation") {
			alert("Simulation Response, Added order");
		} else if (response.data.message === "success") {
			const alert = document.getElementById("added_order");
			alert.classList.remove("hidden");
			setTimeout(() => {
				alert.classList.add("hidden");
			}, 3000);
		} else if (response.data.message === "failure") {
			const alert = document.getElementById("added_order_failed");
			alert.classList.remove("hidden");
			setTimeout(() => {
				alert.classList.add("hidden");
			}, 3000);
		}
	}
	
	
	return (
		<div>
			<section className="flex flex-col p-4 m-8 justify-center items-center text-5xl bulgatti" id="intro">
				Cart
			</section>
			
			{cart.length !== 0 ? (
					<section className="flex flex-col justify-center items-center m-4 rounded-2xl gap-6 p-2" id="intro"
					         key={change}>
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
												IncreaseProductQuantity(item.product_id);
												setCart(getCart())
												setChange((change) => change + 1);
											}}>
												<IconPlus className="w-4 h-4"/>
											</button>
											<button className="btn btn-sm btn-accent text-accent-content" onClick={() => {
												DecreaseProductQuantity(item.product_id)
												setCart(getCart())
												setChange((change) => change - 1);
											}}>
												<IconMinus className="w-4 h-4"/>
											</button>
										</div>
									</div>
									<div className="flex justify-center items-center align-middle">
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
								<span className="label-text">Your Name</span>
							</label>
							<label className="input-group">
								<span><IconMail className="w-4 h-4"/></span>
								<input type="text" placeholder="John Doe" className="input input-bordered" value={customerName}
								       onChange={
									       (event) => {
										       setCustomerName(event.target.value)
									       }
								       }/>
							</label>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Your Email</span>
							</label>
							<label className="input-group">
								<span><IconMail className="w-4 h-4"/></span>
								<input type="text" placeholder="info@site.com" className="input input-bordered" value={customerEmail}
								       onChange={
									       (event) => {
										       setCustomerEmail(event.target.value)
									       }
								       }/>
							</label>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Your Phone Number</span>
							</label>
							<label className="input-group">
								<span><IconPhoneCall className="w-4 h-4"/> </span>
								<input type="tel" placeholder="+91 XXXXXXXXXX" className="input input-bordered" value={customerPhone}
								       onChange={
									       (event) => {
										       setCustomerPhone(event.target.value)
									       }
								       }/>
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
								          placeholder="Flat, Building, Street, City, State" value={customerAddress} onChange={
									(event) => {
										setCustomerAddress(event.target.value)
									}
								}></textarea>
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
							SendOrderToBackend();
							// // hide the buy now button
							// const buy_now_button = document.getElementById("buy_now_button");
							// buy_now_button.style.display = "none";
							// clearCart();
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
