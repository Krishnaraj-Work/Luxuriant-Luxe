import React from "react";
import { useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";
import { BaseUrlContext } from "../context/BaseUrlContext";
import ScrollToTopButton from "../components/ui/ScrollToTopButton";

const Customers = () => {
	const { theme } = React.useContext(ThemeContext);
	const { userPassword, setUserPassword } = React.useContext(UserContext);
	const base_url = React.useContext(BaseUrlContext).baseUrl;
	const [customerDetails, setCustomerDetails] = React.useState([]);

	// 	customer_id: 1,
	//    customer_name: "some name",
	//    customer_address: "some address",
	//    customer_email: "some email",
	//    customer_phone: "some phone"

	const get_customer_details = async () => {
		// get customer details by sending the password to the server as part of the body of the request
		// include allow cors headers.
		const response = await fetch("http://localhost:5000/api/customers", {
			method: "POST",
			headers: {
				"Content-type": "application/json",
				"Access-Control-Allow-Origin": "*",
			},
			body: userPassword,
		});
		const data = await response.json();
		setCustomerDetails(data);
	};

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
		<div className="h-screen">
			<h1>Customers</h1>
			<ScrollToTopButton />
		</div>
	);
};

export default Customers;
