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

const Products = () => {
	const { theme } = React.useContext(ThemeContext);
	const { userPassword, setUserPassword } = React.useContext(UserContext);
	const base_url = React.useContext(BaseUrlContext).baseUrl;
	const [productDetails, setProductDetails] = React.useState(null);
	const [apiCallMade, setApiCallMade] = useState(false);
	let iSentOnce = false;

	const get_product_details = async () => {
		// get customer details by sending the password to the server as part of the body of the request
		// include allow cors headers using axios
		const data = {
			password: userPassword,
		};

		const response = await axios
			.post(`${base_url}/api/v1/Luxuriant/get_Products`, data, {
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
			setProductDetails(data);
		} else if (response.data.message === "Success") {
			const data = response.data.data;
			console.log(data);
			setProductDetails(data);
		} else if (response.data.message === "No Products found") {
			setProductDetails([]);
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
				<div className="text-4xl bulgatti my-6">Our Products</div>{" "}
			</div>
			<div className="overflow-x-auto">
				<table className="table">
					{/* head */}
					<thead>
						<tr>
							<th></th>
							<th>Name</th>
							<th>Cost</th>
						</tr>
					</thead>
					<tbody>
						{/* body */}
						{productDetails === null ||
						productDetails.length === 0 ? (
							<div></div>
						) : (
							<div className="flex justify-center">
								<div> Loading Products </div>
								<div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="32"
										height="32"
										viewBox="0 0 24 24"
									>
										<rect
											width="10"
											height="10"
											x="1"
											y="1"
											fill="currentColor"
											rx="1"
										>
											<animate
												id="svgSpinnersBlocksShuffle30"
												fill="freeze"
												attributeName="x"
												begin="0;svgSpinnersBlocksShuffle3b.end"
												dur="0.2s"
												values="1;13"
											/>
											<animate
												id="svgSpinnersBlocksShuffle31"
												fill="freeze"
												attributeName="y"
												begin="svgSpinnersBlocksShuffle38.end"
												dur="0.2s"
												values="1;13"
											/>
											<animate
												id="svgSpinnersBlocksShuffle32"
												fill="freeze"
												attributeName="x"
												begin="svgSpinnersBlocksShuffle39.end"
												dur="0.2s"
												values="13;1"
											/>
											<animate
												id="svgSpinnersBlocksShuffle33"
												fill="freeze"
												attributeName="y"
												begin="svgSpinnersBlocksShuffle3a.end"
												dur="0.2s"
												values="13;1"
											/>
										</rect>
										<rect
											width="10"
											height="10"
											x="1"
											y="13"
											fill="currentColor"
											rx="1"
										>
											<animate
												id="svgSpinnersBlocksShuffle34"
												fill="freeze"
												attributeName="y"
												begin="svgSpinnersBlocksShuffle30.end"
												dur="0.2s"
												values="13;1"
											/>
											<animate
												id="svgSpinnersBlocksShuffle35"
												fill="freeze"
												attributeName="x"
												begin="svgSpinnersBlocksShuffle31.end"
												dur="0.2s"
												values="1;13"
											/>
											<animate
												id="svgSpinnersBlocksShuffle36"
												fill="freeze"
												attributeName="y"
												begin="svgSpinnersBlocksShuffle32.end"
												dur="0.2s"
												values="1;13"
											/>
											<animate
												id="svgSpinnersBlocksShuffle37"
												fill="freeze"
												attributeName="x"
												begin="svgSpinnersBlocksShuffle33.end"
												dur="0.2s"
												values="13;1"
											/>
										</rect>
										<rect
											width="10"
											height="10"
											x="13"
											y="13"
											fill="currentColor"
											rx="1"
										>
											<animate
												id="svgSpinnersBlocksShuffle38"
												fill="freeze"
												attributeName="x"
												begin="svgSpinnersBlocksShuffle34.end"
												dur="0.2s"
												values="13;1"
											/>
											<animate
												id="svgSpinnersBlocksShuffle39"
												fill="freeze"
												attributeName="y"
												begin="svgSpinnersBlocksShuffle35.end"
												dur="0.2s"
												values="13;1"
											/>
											<animate
												id="svgSpinnersBlocksShuffle3a"
												fill="freeze"
												attributeName="x"
												begin="svgSpinnersBlocksShuffle36.end"
												dur="0.2s"
												values="1;13"
											/>
											<animate
												id="svgSpinnersBlocksShuffle3b"
												fill="freeze"
												attributeName="y"
												begin="svgSpinnersBlocksShuffle37.end"
												dur="0.2s"
												values="1;13"
											/>
										</rect>
									</svg>
								</div>
							</div>
						)}
					</tbody>
				</table>
			</div>
			<ScrollToTopButton />
		</div>
	);
};

export default Products;
