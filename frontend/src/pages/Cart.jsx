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
	IconMail,
	IconPhoneCall
} from "@tabler/icons-react";
import ScrollToTopButton from "../components/ui/ScrollToTopButton";

const Cart = () => {
	// const navigate = useNavigate();
	const {
		cart,
		addToCart,
		removeFromCart,
		clearCart,
		productInfo,
		IncreaseProductQuantity,
		DecreaseProductQuantity
	} = React.useContext(CartContext);
	const {theme} = React.useContext(ThemeContext);
	useEffect(() => {
		if (theme === "light") {
			const light_button = document.getElementById("light_button");
			light_button.click();
		} else {
			const dark_button = document.getElementById("dark_button");
			dark_button.click();
		}
		console.log("product iamges", productInfo)
		// clearCart();
	});
	return (
		<div>
			<section className="flex flex-col p-4 m-8 justify-center items-center text-5xl bulgatti" id="intro">
				Cart
			</section>
			
			<section className="flex flex-col p-4 justify-center items-center bg-base-200 m-4 rounded-2xl" id="intro">
				{cart.map((item) => {
					return (
						<div className="flex flex-row justify-center items-center gap-4" key={item.product_id}>
							<div className="flex flex-col justify-center items-center gap-4">
								<div>
									{productInfo.filter((product) => {
											return product.product_id === item.product_id
										}
									)[0].product_name}
								</div>
								<div>
									{productInfo.filter((product) => {
											return product.product_id === item.product_id
										}
									)[0].product_cost}
								</div>
								<div>
									{item.quantity}
								</div>
								<img src={
									productInfo.filter((product) => {
											return product.product_id === item.product_id
										}
									)[0].product_image
								} alt={item.name} className="w-32 rounded-2xl"/>
								<div className="flex flex-row justify-center items-center gap-4">
									<button className="btn btn-sm btn-primary" onClick={() => {
										addToCart(item)
									}}>+
									</button>
									<button className="btn btn-sm btn-primary" onClick={() => {
										removeFromCart(item)
									}}>-
									</button>
								</div>
							</div>
							<div className="flex flex-col justify-center items-center gap-4">
								<p>{item.name}</p>
								<p>{item.product_cost}</p>
							</div>
						</div>
					)
				})
				}
			</section>
			
			<section className="flex flex-col p-4 justify-center items-center" id="intro">
				invoice.
				give total amount here.
			</section>
			<section className="flex flex-col p-4 justify-center items-center" id="intro">
				ask for email and phone number
			</section>
			<section className="flex flex-col p-4 justify-center items-center" id="intro">
				<button className="btn btn-sm btn-primary" onClick={
					() => {
						console.log("buy not clicked. send some api calls. ")
					}
				}>
					Buy Now.
				</button>
			</section>
			
			<section className="flex flex-col p-4 justify-center items-center" id="intro">
				now display qr code for payment. tell them that they will receive a confirmation email shortly.
			</section>
			
			<footer className="footer footer-center p-10 bg-secondary text-primary-content bottom-0">
				<aside>
					<div id="luxelogo" className="w-12 h-12 bg-center snap-center self-center"
					></div>
					<p><span className="text-lg">Luxuriant Luxe</span><br/>Your Skin, Our Priority</p>
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
