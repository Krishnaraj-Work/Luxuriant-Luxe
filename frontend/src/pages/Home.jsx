import React, {useEffect} from 'react'
import {ThemeContext} from "../context/ThemeContext";
import {useNavigate} from "react-router-dom";
import '../style.css'
import '../input.css'
import '../css/Home.css'
import {
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
			
			<section className="flex flex-col p-4 justify-center items-center" id="intro">
				intro
				<button className="btn btn-sm btn-primary" onClick={
					() => {
						navigate("#our_products");
					}
				}>
					View more
				</button>
			</section>
			
			<section className="flex flex-col p-4 justify-center items-center" id="our_products">
				our products
				<button className="btn btn-sm btn-primary" onClick={
					() => {
						navigate("/products");
					}
				}>
					Visit Store
				</button>
			</section>
			
			<section className="flex flex-col p-4 justify-center items-center" id="special_about_us">
				special about us
				<button className="btn btn-sm btn-primary" onClick={
					() => {
						navigate("/about");
					}
				}>
					Learn More
				</button>
			</section>
			
			<section className="flex flex-col p-4 justify-center items-center" id="contact">
				<div className="text-3xl">
					Contact
				</div>
				
				<button className="btn btn-sm btn-primary" onClick={
					() => {
						navigate("/about");
					}
				}>
					Learn More
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

export default Home
