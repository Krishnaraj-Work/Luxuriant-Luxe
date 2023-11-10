import React from "react";
import { useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Customers = () => {
	const { theme } = React.useContext(ThemeContext);

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
			<h1>Customers</h1>
		</div>
	);
};

export default Customers;
