import React from 'react'
import {ThemeContext} from "../context/ThemeContext";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import '../style.css'
import '../input.css'

const Products = () => {
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
			<h1 className="bg-background text-text">products</h1>
		</div>
	)
}

export default Products
