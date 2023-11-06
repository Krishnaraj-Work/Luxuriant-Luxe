import React, {useEffect} from "react";
import "../input.css";
import "../style.css";
import {themeChange} from "theme-change";
import {ThemeContext} from "../context/ThemeContext";

import {
	SunIcon,
	MoonIcon,
	InformationCircleIcon,
	Bars3Icon,
	AcademicCapIcon,
	HashtagIcon,
	QuestionMarkCircleIcon,
} from "@heroicons/react/24/solid";
import {NavLink, useNavigate} from "react-router-dom";
import {
	IconBrush, IconGardenCart, IconHanger2,
	IconHome,
	IconKey,
	IconLogout,
	IconPalette,
	IconUserBolt,
	IconUserCircle,
} from "@tabler/icons-react";
import "../css/Navbar.css";

export function Navbar(props) {
	useEffect(() => {
		themeChange(false);
	}, []);
	const {theme, setTheme} = React.useContext(ThemeContext);
	const navigate = useNavigate();
	useEffect(() => {
		if (theme === "light") {
			const light_button = document.getElementById("light_button");
			light_button.click();
		} else {
			const dark_button = document.getElementById("dark_button");
			dark_button.click();
		}
	});
	
	function handleLogout() {
		props.setisNavbarPresent(false);
		navigate("/");
	}
	
	return (
		<div className="z-50">
			<div
				className={`navbar bg-primary text-primary-content flex-row-reverse justify-between
			md:flex-row`}
			>
				{/* name */}
				<div
					className="flex-row-reverse px-2 gap-0
			md:flex-row"
				>
					<NavLink to={"/"} className="flex flex-row">
						<div
							id="luxelogo"
							className="w-9 h-9 bg-center snap-center self-center"
						></div>
						<div className="md:btn md:btn-ghost md:normal-case md:text-lg md:text-xl hidden md:display">
							Luxuriant Luxe
						</div>
					</NavLink>
				</div>
				{/* maincontents */}
				<div
					className="hidden
			   md:flex"
				>
					<ul className="menu menu-horizontal px-1">
						<li className="text-lg md:text-xl">
							<NavLink
								to={"/products"}
								id="contact_element"
								className="hover:text-black"
							>
								<IconHanger2 className="w-8 h-8"/>
								Our Products
							</NavLink>
						</li>
						<li className="text-lg md:text-xl">
							<NavLink
								to={"/about"}
								id="contact_element"
								className="hover:text-black"
							>
								<InformationCircleIcon className="w-8 h-8"/>
								About Us
							</NavLink>
						</li>
					</ul>
				</div>
				{/* Theme */}
				<div>
					<div className="hidden md:flex">
						<ul className="menu menu-horizontal px-1">
							<li>
								<details>
									<summary className="text-lg md:text-xl hover:text-black">
										<IconPalette className="w-8 h-8"/>
										Theme
									</summary>
									<ul className="p-2 bg-base-100 text-base-content">
										<li
											// data-set-theme="cupcake"
											className="text-lg"
											onClick={() => setTheme("light")}
										>
											<div>
												<SunIcon className="w-8 h-8"/>
												Light
											</div>
										</li>
										<li
											className="text-lg"
											// data-set-theme="dracula"
											onClick={() => setTheme("dark")}
										>
											<div>
												<MoonIcon className="w-8 h-6"/>
												Dark
											</div>
										</li>
									</ul>
								</details>
							</li>
						</ul>
					</div>
					{/* Profile */}
					<div className="hidden md:flex">
						<ul className="menu menu-horizontal  px-1">
							<li>
								<details>
									<summary>
										<IconUserBolt className="w-8 h-8"/>
									</summary>
									<ul className="p-2 bg-base-100 text-base-content">
										<li className="text-lg">
											<NavLink
												to={"/cart"}
												id="contact_element"
												className="hover:text-black"
											>
												<IconGardenCart className="w-8 h-8"/>
												Cart
											</NavLink>
										</li>
										<li
											className="text-lg hover:text-black"
											onClick={() => {
												handleLogout();
											}}
										>
											<a>Logout</a>
										</li>
									</ul>
								</details>
							</li>
						</ul>
					</div>
				</div>
				
				{/* hamburger */}
				<div className="md:hidden w-fit">
					<ul className="menu menu-horizontal px-1 w-fit">
						<li>
							<details className="w-fit">
								<summary className="text-md md:text-xl hover:text-black">
									<Bars3Icon className="w-6 h-6"/>
								</summary>
								<ul className="p-2 bg-base-100 text-base-content z-50 flex flex-wrap flex-col w-fit gap-2">
									<li className="text-md md:text-xl whitespace-nowrap flex-nowrap w-36">
										<NavLink
											to={"/products"}
											id="contact_element"
											className="hover:text-black"
										>
											<IconHanger2 className="w-6 h-6"/>
											Products
										</NavLink>
									</li>
									<li className="text-md md:text-xl">
										<NavLink
											to={"/about"}
											id="contact_element"
											className="hover:text-black"
										>
											<InformationCircleIcon className="w-6 h-6"/>
											About Us
										</NavLink>
									</li>
									<li className="menu menu-horizontal px-1 py-0 ">
										<details>
											<summary className="text-md md:text-xl hover:text-black">
												<IconBrush className="w-6 h-6"/>
												Theme
											</summary>
											<ul className="p-2 bg-base-100 text-base-content">
												<li
													// data-set-theme="cupcake"
													className="text-md"
													onClick={() => setTheme("light")}
												>
													<a>
														<SunIcon className="w-6 h-6"/>
														Light
													</a>
												</li>
												<li
													className="text-md"
													// data-set-theme="dracula"
													onClick={() => setTheme("dark")}
												>
													<a>
														<MoonIcon className="w-6 h-6"/>
														Dark
													</a>
												</li>
											</ul>
										</details>
									</li>
									<li className="menu menu-horizontal px-1 py-0">
										<details>
											<summary className="text-md md:text-xl hover:text-black">
												<IconUserBolt className="w-6 h-6"/>
												Account
											</summary>
											<ul className="p-2 bg-base-100 text-base-content">
												<li className="text-md">
													<NavLink
														to={"/cart"}
														id="contact_element"
														className="hover:text-black"
													>
														<IconGardenCart className="w-6 h-6"/>
														Cart
													</NavLink>
												</li>
												<li className="text-md">
													<NavLink
														to={"/"}
														id="contact_element"
														className="hover:text-black"
													>
														<IconLogout className="w-6 h-6"/>
														Logout
													</NavLink>
												</li>
											
											</ul>
										</details>
									</li>
								</ul>
							</details>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
