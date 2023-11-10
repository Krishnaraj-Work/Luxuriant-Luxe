import React, { useCallback, useLayoutEffect } from "react";
import { useState } from "react";
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

const Orders = () => {
	const { theme } = React.useContext(ThemeContext);
	const { userPassword, setUserPassword } = React.useContext(UserContext);
	const base_url = React.useContext(BaseUrlContext).baseUrl;
	const [customerDetails, setCustomerDetails] = React.useState(null);
	const [apiCallMade, setApiCallMade] = useState(false);
	let iSentOnce = false;

	const get_order_details = async () => {
		// get customer details by sending the password to the server as part of the body of the request
		// include allow cors headers using axios
		const data = {
			password: userPassword,
		};

		const response = await axios
			.post(`${base_url}/api/v1/Luxuriant/get_orders`, data, {
				headers: {
					"Content-Type": "application/json",
				},
			})
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
		iSentOnce = true;
		if (response.data.message === "simulation") {
			const data = [
				{
					customer_id: 1,
					customer_name: "some name",
					customer_address: "some address",
					customer_email: "some email",
					customer_phone: "some phone",
				},
				{
					customer_id: 2,
					customer_name: "some name",
					customer_address: "some address",
					customer_email: "some email",
					customer_phone: "some phone",
				},
				{
					customer_id: 3,
					customer_name: "some name",
					customer_address: "some address",
					customer_email: "some email",
					customer_phone: "some phone",
				},
				{
					customer_id: 4,
					customer_name: "some name",
					customer_address: "some address",
					customer_email: "some email",
					customer_phone: "some phone",
				},
				{
					customer_id: 5,
					customer_name: "some name",
					customer_address: "some address",
					customer_email: "some email",
					customer_phone: "some phone",
				},
				{
					customer_id: 6,
					customer_name: "some name",
					customer_address: "some address",
					customer_email: "some email",
					customer_phone: "some phone",
				},
				{
					customer_id: 7,
					customer_name: "some name",
					customer_address: "some address",
					customer_email: "some email",
					customer_phone: "some phone",
				},
			];
			setCustomerDetails(data);
		} else if (response.data.message === "Success") {
			const data = response.data.data;
			console.log(data);
			setCustomerDetails(data);
		} else if (response.data.message === "No Orders found") {
			setCustomerDetails([]);
		}
	};

	useEffect(() => {
		if (theme === "light") {
			const light_button = document.getElementById("light_button");
			light_button.click();
		} else {
			const dark_button = document.getElementById("dark_button");
			dark_button.click();
		}
		if (apiCallMade === false) {
			if (customerDetails === null) {
				if (iSentOnce === false) {
					get_order_details();
					setApiCallMade(true);
					iSentOnce = true;
				}
			}
		}
	}, []);

	return (
		<div className="h-screen">
			<h1>Orders</h1>
			<ScrollToTopButton />
		</div>
	);
};

export default Orders;
