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

const Products = () => {
	const {theme} = React.useContext(ThemeContext);
	const {userPassword, setUserPassword} = React.useContext(UserContext);
	const base_url = React.useContext(BaseUrlContext).baseUrl;
	const [productDetails, setProductDetails] = React.useState(null);
	const {
		productInfo, setProductInfo,
	} = React.useContext(DBInfoContext);
	
	// this is how product details looks like
	// [
	// 	{
	// 		"_id": "654cd992ae6a271afeed6b4c",
	// 		"product_name": "Blue Jar",
	// 		"product_cost": 100
	// 	},
	// 	{
	// 		"_id": "654cd992ae6a271afeed6b4d",
	// 		"product_name": "Purple Jar",
	// 		"product_cost": 200
	// 	},
	// 	{
	// 		"_id": "654cd992ae6a271afeed6b4e",
	// 		"product_name": "Pink Jar",
	// 		"product_cost": 300
	// 	}
	// ]
	
	const [apiCallMade, setApiCallMade] = useState(false);
	let iSentOnce = false;
	
	const get_product_details = () => {
		// get product details from the context.
		setProductDetails(productInfo);
		
		if (productInfo.length === 0) {
			console.log("productInfo is empty");
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
			if (productDetails === null) {
				if (iSentOnce === false) {
					get_product_details();
					setApiCallMade(true);
					iSentOnce = true;
				}
			}
		}
	}, []);
	
	return (
		<div className="h-screen">
			<div className="flex justify-center m-4">
				<div className="text-4xl bulgatti my-6">Our Products</div>
				{" "}
			</div>
			<div className="overflow-x-auto">
				{productDetails === null ||
				productDetails.length === 0 ? (
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
							<th>Name</th>
							<th>Cost</th>
						</tr>
						</thead>
						<tbody>
						{
							productDetails.map((product, index) => {
									return (
										<tr key={index}>
											<td>{index + 1}</td>
											<td>{product.product_name}</td>
											<td>{product.product_cost}</td>
										</tr>
									);
								}
							)}
						</tbody>
					</table>
				)
				}
			</div>
			<ScrollToTopButton/>
		</div>
	);
};

export default Products;
