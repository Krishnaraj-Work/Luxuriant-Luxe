import React, {useEffect, useState} from "react";
import {ThemeContext} from "../context/ThemeContext";
import {UserContext} from "../context/UserContext";
import {BaseUrlContext} from "../context/BaseUrlContext";
import ScrollToTopButton from "../components/ui/ScrollToTopButton";
import {DBInfoContext} from "../context/DBInfoContext.jsx";

import axios from "axios";

axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.common["Access-Control-Allow-Methods"] =
	"GET, POST, OPTIONS";
axios.defaults.headers.common["Access-Control-Allow-Headers"] = "Content-Type";
axios.defaults.headers.common["Access-Control-Allow-Credentials"] = "true";

const Orders = () => {
	const {theme} = React.useContext(ThemeContext);
	const {userPassword, setUserPassword} = React.useContext(UserContext);
	const base_url = React.useContext(BaseUrlContext).baseUrl;
	const [orderDetails, setOrderDetails] = React.useState(null);
	const [apiCallMade, setApiCallMade] = useState(false);
	const {
		orderInfo, setOrderInfo
	} = React.useContext(DBInfoContext);
	
	let iSentOnce = false;
	
	// how orders are returned from the server, in a list of objects
	// {
	// 	"_id": "654ce193fa0a952c5deaca44",
	// 	"order_date": "2023-11-09T13:41:39.649Z",
	// 	"order_cost": "400",
	// 	"payment_status": "paid",
	// 	"customer_id": "654ce0a73c1e87c8a25ef2ea",
	//  "customer_name" : "John Doe",
	// 	"order_details": [
	// 	{
	// 		"product_id": "654cd992ae6a271afeed6b4c",
	// 		"quantity": "654cd992ae6a271afeed6b4d",
	// 		"price": 100
	// 	},
	// 	{
	// 		"product_id": "00000002fa0a952c5deaca43",
	// 		"quantity": 1,
	// 		"price": 200
	// 	}
	// ]
	// }
	const get_order_details = () => {
		// get customer details by sending the password to the server as part of the body of the request
		// include allow cors headers using axios
		setOrderDetails(orderInfo)
		console.log("order details")
		console.log(orderInfo)
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
			if (orderDetails === null) {
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
			<div className="flex justify-center m-4">
				<div className="text-4xl bulgatti my-6">Our Orders</div>
				{" "}
			</div>
			<div className="overflow-x-auto">
				{orderDetails === null ||
				orderDetails.length === 0 ? (
					<div className="flex justify-center">
						{/*<div> Loading Products</div>*/}
						<div className="flex justify-center">
							<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
								<path fill="currentColor"
								      d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
								      opacity=".25"/>
								<path fill="currentColor"
								      d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z">
									<animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate"
									                  values="0 12 12;360 12 12"/>
								</path>
							</svg>
						</div>
					</div>
				) : (
					<table className="table">
						<thead>
						<tr>
							<th></th>
							<th>Order Date</th>
							<th>Order Cost</th>
							<th>Payment Status</th>
							<th>Customer ID</th>
							<th>Order Details</th>
							<th>Products</th>
						</tr>
						</thead>
						<tbody>
						{
							orderDetails.map((order, index) => {
								return (
									<tr key={index}>
										<td>{index + 1}</td>
										<td>{order.order_date}</td>
										<td>{order.order_cost}</td>
										<td>{order.payment_status}</td>
										<td>{order.customer_id}</td>
										{/*<td>{order.order_details}</td>*/}
										<td>
											{
												order.order_details.map((order_detail, index) => {
													return (
														<div key={index}>
															<div>Product ID: {order_detail.product_id}</div>
															<div>Quantity: {order_detail.quantity}</div>
															<div>Price: {order_detail.price}</div>
														</div>
													);
												})
											}
										</td>
									</tr>
								);
							})
						}
						
						</tbody>
					</table>
				)
				}
			</div>
			<ScrollToTopButton/>
		</div>
	);
};

export default Orders;
