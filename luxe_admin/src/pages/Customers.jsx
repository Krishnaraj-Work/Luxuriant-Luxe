import React, {useEffect, useState} from "react";
import {ThemeContext} from "../context/ThemeContext";
import {UserContext} from "../context/UserContext";
import {BaseUrlContext} from "../context/BaseUrlContext";
import ScrollToTopButton from "../components/ui/ScrollToTopButton";
import axios from "axios";
import {DBInfoContext} from "../context/DBInfoContext.jsx";

axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.common["Access-Control-Allow-Methods"] =
	"GET, POST, OPTIONS";
axios.defaults.headers.common["Access-Control-Allow-Headers"] = "Content-Type";
axios.defaults.headers.common["Access-Control-Allow-Credentials"] = "true";

const Customers = () => {
	const {theme} = React.useContext(ThemeContext);
	const {userPassword, setUserPassword} = React.useContext(UserContext);
	const base_url = React.useContext(BaseUrlContext).baseUrl;
	const [customerDetails, setCustomerDetails] = React.useState(null);
	const [apiCallMade, setApiCallMade] = useState(false);
	let iSentOnce = false;
	
	const {
		customerInfo, setCustomerInfo,
	} = React.useContext(DBInfoContext);
	
	
	// customer details is a list of such objects
	// 	customer_id: 1,
	//    customer_name: "some name",
	//    customer_address: "some address",
	//    customer_email: "some email",
	//    customer_phone: "some phone"
	const get_customer_details = async () => {
		setCustomerDetails(customerInfo);
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
					get_customer_details();
					setApiCallMade(true);
					iSentOnce = true;
				}
			}
		}
	}, []);
	
	return (
		<div className="min-h-screen">
			<div className="flex justify-center m-4">
				<div className="text-4xl bulgatti my-6">Our Customers</div>
			</div>
			<div className="overflow-x-auto p-8">
				{customerDetails === null ||
				customerDetails.length === 0 ? (
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
					<table className="table text-xl outline outline-1 ">
						<thead className="text-xl">
						<tr className="border-neutral border-b-1 bg-base-300 text-base-content">
							<th></th>
							<th>Customer Name</th>
							<th>Customer Email</th>
							<th>Customer Address</th>
							<th>Customer Phone</th>
							<th>Customer Id</th>
						</tr>
						</thead>
						<tbody>
						{
							customerDetails.map((customer, index) => {
								return (
									<tr key={index} className="hover border-accent border-t-1">
										<td>{index + 1}</td>
										<td>{customer.customer_name}</td>
										<td>{customer.customer_email}</td>
										<td className="w-64">{customer.customer_address}</td>
										<td>{customer.customer_phone}</td>
										<td>{customer._id}</td>
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

export default Customers;
