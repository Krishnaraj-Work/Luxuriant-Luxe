import React, {useEffect} from 'react'
import {ThemeContext} from "../context/ThemeContext";
import {useNavigate} from "react-router-dom";
import '../style.css'
import '../input.css'
import '../css/Home.css'
import {IconBrandFacebook, IconBrandInstagram, IconBrandTelegram, IconBrandWhatsapp} from "@tabler/icons-react";

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
				<button className="btn btn-sm btn-primary">
					View more
				</button>
			</section>
			
			<section className="flex flex-col p-4 justify-center items-center" id="our_products">
				our products
				<button className="btn btn-sm btn-primary">
					Visit Store
				</button>
			</section>
			
			<section className="flex flex-col p-4 justify-center items-center" id="special_about_us">
				special about us
				<button className="btn btn-sm btn-primary">
					Learn More
				</button>
			</section>
			
			<section className="flex flex-col p-4 justify-center items-center" id="contact">
				contact us
			</section>
			
			<footer className="footer footer-center p-10 bg-primary text-primary-content bottom">
				<aside>
					<div id="luxelogo" className="w-12 h-12 bg-center snap-center self-center"
					></div>
					<p><span className="text-lg">Luxuriant Luxe</span><br/>Your Skin, Our Priority</p>
					<p>Copyright © 2023 - All right reserved</p>
				</aside>
				<nav>
					<div className="grid grid-flow-col gap-4">
						<a>
							<IconBrandWhatsapp className="w-8 h-8"/>
						</a>
						<a>
							<IconBrandInstagram className="w-8 h-8"/>
						</a>
						<a>
							<IconBrandFacebook className="w-8 h-8"/>
						</a>
						<a>
							<IconBrandTelegram className="w-8 h-8"/>
						</a>
					</div>
				</nav>
			</footer>
		</div>
	)
}

export default Home
