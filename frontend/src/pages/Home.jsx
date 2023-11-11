import React, {useEffect} from 'react'
import {ThemeContext} from "../context/ThemeContext";
import {useNavigate} from "react-router-dom";
import '../style.css'
import '../input.css'
import '../css/Home.css'
import {
	IconArrowUpRight,
	IconBrandFacebook,
	IconBrandInstagram,
	IconBrandLinkedin,
	IconBrandWhatsapp,
	IconMail,
	IconPhoneCall
} from "@tabler/icons-react";
import ScrollToTopButton from "../components/ui/ScrollToTopButton";

const Home = () => {
	
	const navigate = useNavigate();
	const {theme} = React.useContext(ThemeContext);
	useEffect(() => {
		if (theme === "light") {
			const light_button = document.getElementById("light_button");
			light_button.click();
		} else {
			const dark_button = document.getElementById("dark_button");
			dark_button.click();
		}
		
		// let images = [
		// 	`https://www.rollingstone.com/wp-content/uploads/2023/01/taylor-swift-1975.jpg`,
		// 	"https://media.cnn.com/api/v1/images/stellar/prod/230318120009-01-taylor-swift-eras-tour-0317.jpg?c=4x3",
		// 	"https://hips.hearstapps.com/hmg-prod/images/taylor-swift-performs-onstage-as-taylor-swift-dua-lipa-sza-news-photo-1587245373.jpg",
		// 	"https://d.newsweek.com/en/full/2143867/taylor-swift-performs-stage.jpg",
		// 	"https://assets.teenvogue.com/photos/641b2a23912ddccbabf80f80/16:9/w_2560%2Cc_limit/GettyImages-1474459622.jpg",
		// 	"https://people.com/thmb/uuPGxQDpQeh35iKyxDnWuzCuldg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(701x0:703x2)/taylor-swift-performs-nashville-songwriter-awards-1-92122-512828fbf94347b39dfe985a758a4c69.jpg",
		// 	"https://www.reviewjournal.com/wp-content/uploads/2023/03/17584261_web1_AP23077144507236.jpg?crop=1",
		// 	"https://www.refinery29.com/images/8833407.jpg",
		// 	"https://media.pitchfork.com/photos/5f62c6f6b2d5b619cfead49d/1:1/w_1500,h_1500,c_limit/Taylor%20Swift.jpg",
		// ];
		// const carousal_div = document.getElementById("car-div");
		// console.log(carousal_div);
		// const carousals = carousal_div.querySelectorAll("div");
		// for (let i = 0; i < carousals.length; i++) {
		// 	// add images from results.images
		// 	carousals[i].style.backgroundImage = `url(${images[i]})`;
		// 	// carousals[i].classList.add("hidden");
		// }
	});
	return (
		<div className="">
			{/*<div className="untitled">*/}
			{/*	<div className="untitled__slides">*/}
			{/*		<div className="untitled__slide">*/}
			{/*			<div className="untitled__slideBg"></div>*/}
			{/*			<div className="untitled__slideContent">*/}
			{/*				<span>London</span>*/}
			{/*				<span>Scout</span>*/}
			{/*				<a className="button" href="https://unsplash.com/@scoutthecity" target="/black">Unsplash Profile</a>*/}
			{/*			</div>*/}
			{/*		</div>*/}
			{/*		<div className="untitled__slide">*/}
			{/*			<div className="untitled__slideBg"></div>*/}
			{/*			<div className="untitled__slideContent">*/}
			{/*				*/}
			{/*				<span>Vladimir</span>*/}
			{/*				<span>Kudinov</span>*/}
			{/*				<a className="button" href="https://unsplash.com/@madbyte" target="/black">Unsplash Profile</a>*/}
			{/*			</div>*/}
			{/*		</div>*/}
			{/*		<div className="untitled__slide">*/}
			{/*			<div className="untitled__slideBg"></div>*/}
			{/*			<div className="untitled__slideContent">*/}
			{/*				<span>Macio</span>*/}
			{/*				<span>Amorim</span>*/}
			{/*				<a className="button" href="https://unsplash.com/@maicoamorim" target="/black">Unsplash Profile</a>*/}
			{/*			</div>*/}
			{/*		</div>*/}
			{/*		<div className="untitled__slide">*/}
			{/*			<div className="untitled__slideBg"></div>*/}
			{/*			<div className="untitled__slideContent">*/}
			{/*				<span>Mario</span>*/}
			{/*				<span>Calvo</span>*/}
			{/*				<a className="button" href="https://unsplash.com/@mariocalvo" target="/black">Unsplash Profile</a>*/}
			{/*			</div>*/}
			{/*		</div>*/}
			{/*	</div>*/}
			{/*	<div className="untitled__shutters"></div>*/}
			{/*</div>*/}
			{/*<div className="container_div">*/}
			{/*	<div className="carousel" id="car-div">*/}
			{/*		<div className="carousel__face"><span></span></div>*/}
			{/*		<div className="carousel__face"><span></span></div>*/}
			{/*		<div className="carousel__face"><span></span></div>*/}
			{/*		<div className="carousel__face"><span></span></div>*/}
			{/*		<div className="carousel__face"><span></span></div>*/}
			{/*		<div className="carousel__face"><span></span></div>*/}
			{/*		<div className="carousel__face"><span></span></div>*/}
			{/*		<div className="carousel__face"><span></span></div>*/}
			{/*		<div className="carousel__face"><span></span></div>*/}
			{/*	</div>*/}
			{/*</div>*/}
			<section className="flex flex-col p-4 justify-center items-center" id="intro">
				<div className="text-6xl bulgatti my-12">
					Luxuriant Luxe
				</div>
				
				{/*<div className="patterns">*/}
				{/*	<svg width="100%" height="100%">*/}
				{/*		<defs>*/}
				{/*			<pattern*/}
				{/*				id="polka-dots"*/}
				{/*				x="0"*/}
				{/*				y="0"*/}
				{/*				width="100"*/}
				{/*				height="100"*/}
				{/*				patternUnits="userSpaceOnUse"*/}
				{/*			>*/}
				{/*				<circle fill="#be9ddf" cx="25" cy="25" r="3"></circle>*/}
				{/*			</pattern>*/}
				{/*			<style>*/}
				{/*				@import url("https://fonts.googleapis.com/css? family=Lora:400,400i,700,700i");*/}
				{/*			</style>*/}
				{/*		</defs>*/}
				{/*		*/}
				{/*		<!-- <rect x="0" y="0" width="100%" height="75%" fill="url(#polka-dots)"> </rect> -->*/}
				{/*		<text x="50%" y="60%" text-anchor="middle" id="artist-text"></text>*/}
				{/*	</svg>*/}
				{/*</div>*/}
			
			</section>
			
			<section className="flex flex-col p-2 m-8 justify-center items-center " id="intro">
				<div className="text-4xl bulgatti my-6">
					Our Products
				</div>
				
				<div className="text-xl mt-4 prata text-left text-center">
					From <span className="text-accent prata text-xl"> Oily or Dry skin, </span>
					to <span className="text-accent prata text-xl"> Acne or Pigmentation, </span> We have something special for
					everyone!
					<br></br>
					<br></br>
					Explore a wide range of products that will help you get rid of all your skin problems and give you a
					flawless and glowing skin!
				</div>
				
				<button className="btn btn-sm btn-primary my-6" onClick={
					() => {
						navigate("/products");
					}
				}>
					Explore More! <IconArrowUpRight className="w-4 h-4"/>
				</button>
			</section>
			
			
			<section className="flex flex-col p-2 m-8 justify-center items-center " id="intro">
				<div className="text-4xl bulgatti my-6">
					Why are we special?
				</div>
				
				<div className="text-xl mt-4 prata text-left text-center">
					Made with <span className="text-accent prata text-xl"> pure safe-to-use organic </span>
					ingredients. This formula won't harm
					your natural skin, it will only help you
					get rid of those dark spots, tan, open
					pores, and small bumps and will
					make your skin outrageously flawless
					like <span className="text-accent prata text-xl"> you've always dreamt of. </span>
				</div>
				<button className="btn btn-sm btn-primary my-6" onClick={
					() => {
						navigate("/about");
					}
				}>
					Learn More <IconArrowUpRight className="w-4 h-4"/>
				</button>
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

export default Home
