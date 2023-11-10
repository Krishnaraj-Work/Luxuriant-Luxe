import React from "react";
import { useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { UserContext } from "../context/UserContext";
import { BaseUrlContext } from "../context/BaseUrlContext";
import ScrollToTopButton from "../components/ui/ScrollToTopButton";
import axios from "axios";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.common["Access-Control-Allow-Methods"] =
	"GET, POST, OPTIONS";
axios.defaults.headers.common["Access-Control-Allow-Headers"] = "Content-Type";
axios.defaults.headers.common["Access-Control-Allow-Credentials"] = "true";

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
		// include allow cors headers using axios

		const data = {
			password: userPassword,
		};

		const response = await axios
			.post(`${base_url}/api/v1/Luxuriant/get_customers`, data, {})
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
		console.log(response.data);

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
