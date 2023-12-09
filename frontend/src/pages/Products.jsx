import React, { useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
// import {useNavigate} from "react-router-dom";
import "../style.css";
import "../input.css";
import {
	IconBrandFacebook,
	IconBrandInstagram,
	IconBrandLinkedin,
	IconBrandWhatsapp,
	IconMail,
	IconPhoneCall,
	IconShoppingCartPlus,
} from "@tabler/icons-react";
import ScrollToTopButton from "../components/ui/ScrollToTopButton";
import { CartContext } from "../context/CartContext";
// import { FancyButton } from "../components/ui/FancyButton";

let images = [
	`https://www.rollingstone.com/wp-content/uploads/2023/01/taylor-swift-1975.jpg`,
	"https://media.cnn.com/api/v1/images/stellar/prod/230318120009-01-taylor-swift-eras-tour-0317.jpg?c=4x3",
	"https://hips.hearstapps.com/hmg-prod/images/taylor-swift-performs-onstage-as-taylor-swift-dua-lipa-sza-news-photo-1587245373.jpg",
	"https://d.newsweek.com/en/full/2143867/taylor-swift-performs-stage.jpg",
	"https://assets.teenvogue.com/photos/641b2a23912ddccbabf80f80/16:9/w_2560%2Cc_limit/GettyImages-1474459622.jpg",
	"https://people.com/thmb/uuPGxQDpQeh35iKyxDnWuzCuldg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(701x0:703x2)/taylor-swift-performs-nashville-songwriter-awards-1-92122-512828fbf94347b39dfe985a758a4c69.jpg",
	"https://www.reviewjournal.com/wp-content/uploads/2023/03/17584261_web1_AP23077144507236.jpg?crop=1",
	"https://www.refinery29.com/images/8833407.jpg",
	"https://media.pitchfork.com/photos/5f62c6f6b2d5b619cfead49d/1:1/w_1500,h_1500,c_limit/Taylor%20Swift.jpg",
];
const Products = () => {
	// const navigate = useNavigate();
	const { theme } = React.useContext(ThemeContext);
	let { addToCart, productInfo } = React.useContext(CartContext);

	useEffect(() => {
		if (theme === "light") {
			const light_button = document.getElementById("light_button");
			light_button.click();
		} else {
			const dark_button = document.getElementById("dark_button");
			dark_button.click();
		}
	});
	return (
		<div id="products_div">
			<section
				className="flex flex-col p-4 m-8 justify-center items-center text-5xl bulgatti"
				id="intro"
			>
				Our Products
			</section>

			<section
				className="flex flex-col p-4 justify-center items-center"
				id="intro"
			>
				<div className="text-xl mt-4 prata text-center">
					Tired of trying to find a product for your skin which is
					organic beneficial and chemical free? Dont worry! We have
					got you covered!
				</div>
			</section>
			<section
				className="flex flex-col p-4 justify-center items-center bg-base-200 m-6 pb-10 rounded-2xl"
				id="intro"
			>
				<div className="text-5xl dancing my-6 mb-3">Oily Skin</div>
				<div className="flex justify-center mt-4">
					<div
						id={theme === "light" ? "blue_1" : "blue_1"}
						className="w-screen h-64 bg-center snap-center self-center my-4"
					></div>
				</div>
				<div className="text-xl mt-4 prata text-left  text-center">
					Tired of trying to find a product for your skin which is
					organic beneficial and chemical free? Don't worry! We have
					got you covered! Reduces Oiliness, makes skin bouncy,
					reduces dullness and dead skin cells, bringing out fairer
					and healthier skin. Stimulates glands and helping drainage
					reduce of sebaceous bumps and sebum accumulation.
				</div>
				<button
					className="btn btn-sm btn-primary my-6"
					onClick={() => {
						// navigate("/cart");
						addToCart({
							product_id: productInfo[0].product_id,
							cost: productInfo[0].product_cost,
							quantity: 1,
						});
						// display the alert for 1 second
						const alert = document.getElementById("added_order");
						alert.classList.remove("hidden");
						setTimeout(() => {
							alert.classList.add("hidden");
						}, 3000);
					}}
				>
					Add to Cart <IconShoppingCartPlus className="w-4 h-4" />
				</button>
			</section>

			<section
				className="flex flex-col p-4 justify-center items-center bg-base-200 m-6 pb-10 rounded-2xl"
				id="intro"
			>
				<div className="text-5xl dancing my-6 mb-3">Dry Skin</div>
				<div className="flex justify-center mt-4">
					<div
						id={theme === "light" ? "pink_1" : "pink_1"}
						className="w-screen h-64 bg-center snap-center self-center my-4"
					></div>
				</div>
				<div className="text-xl mt-4 prata text-left  text-center">
					Our body cleanser is dedicated to rejuvenate and make your
					dry skin soft, bouncy and supple again. Our cleanser
					contains essential nature sources oils which are easy to
					absorb by your skin which softens by penetration into the
					dermis and making it softer and smoother.
				</div>
				<button
					className="btn btn-sm btn-primary my-6"
					onClick={() => {
						// navigate("/cart");
						addToCart({
							product_id: productInfo[1].product_id,
							cost: productInfo[1].product_cost,
							quantity: 1,
						});
						const alert = document.getElementById("added_order");
						alert.classList.remove("hidden");
						setTimeout(() => {
							alert.classList.add("hidden");
						}, 3000);
					}}
				>
					Add to Cart <IconShoppingCartPlus className="w-4 h-4" />
				</button>
			</section>

			<section
				className="flex flex-col p-4 justify-center items-center bg-base-200 m-6 pb-10 rounded-2xl"
				id="intro"
			>
				<div className="text-5xl dancing my-6 mb-3">Normal Skin</div>
				<div className="flex justify-center mt-4">
					<div
						id={theme === "light" ? "purple_1" : "purple_1"}
						className="w-screen h-64 bg-center snap-center self-center my-4"
					></div>
				</div>
				<div className="text-xl mt-4 prata text-left  text-center">
					A perfect balance of essential oils and natural smoothness
					helping you in simplifying and making your bathing and
					skincare experience organic and fun.
				</div>
				<button
					className="btn btn-sm btn-primary my-6"
					onClick={() => {
						// navigate("/cart");
						addToCart({
							product_id: productInfo[2].product_id,
							cost: productInfo[2].product_cost,
							quantity: 1,
						});
						const alert = document.getElementById("added_order");
						alert.classList.remove("hidden");
						setTimeout(() => {
							alert.classList.add("hidden");
						}, 3000);
					}}
				>
					Add to Cart <IconShoppingCartPlus className="w-4 h-4" />
				</button>
			</section>

			{/* <footer className="footer footer-center p-10 bg-secondary text-primary-content bottom-0">
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
							href="https://wa.me/917666018928?text=Welcome%20to%20Luxuriant%20Luxe!%20How%20can%20we%20assist%20you%20today%3F%20"
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
			</footer> */}

			<div className="flex justify-center toast-center toast">
				<div
					className="alert alert-success hidden transform-gpu transition-all duration-300 flex gap-4"
					id="added_order"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="stroke-current shrink-0 h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
					<span>Added to Cart!</span>
				</div>
			</div>

			<div className="flex justify-center toast-center toast">
				<div
					className="alert alert-success hidden transform-gpu transition-all duration-300 flex gap-4"
					id="added_order_failed"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="stroke-current shrink-0 h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
					<span>Could not Add Order! Please Contact Us!</span>
				</div>
			</div>
		</div>
	);
};

export default Products;
