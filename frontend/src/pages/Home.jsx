import React from 'react'
import {ThemeContext} from "../context/ThemeContext";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import '../style.css'
import '../input.css'
import '../css/Home.css'

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
		<div>
			<h1 className="bg-background text-text">Home</h1>
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
		</div>
	)
}

export default Home
