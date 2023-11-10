// this is app.js
// Author: krishnaraj Thadesar
// made for luxuriant luxe.

// react imports
import {Route, Routes} from "react-router-dom";
import {useEffect, useState} from "react";

// import components
import {Navbar} from "./components/Navbar";

// import contexts
import ThemeContextProvider from "./context/ThemeContext";
import CartContextProvider from "./context/CartContext";
import {UserContextProvider} from "./context/UserContext.jsx";
// import pages
import Home from "./pages/Home";

function App() {
	const [isNavbarPresent, setisNavbarPresent] = useState(true);
	
	useEffect(() => {
		console.log(isNavbarPresent)
	}, [isNavbarPresent]);
	
	return (
		<ThemeContextProvider>
			<CartContextProvider>
				<UserContextProvider>
					<div className="">
						{isNavbarPresent ? (
							<Navbar setisNavbarPresent={setisNavbarPresent}/>
						) : null}
						<Routes>
							<Route path="/" element={<Home/>}/>
						</Routes>
					</div>
				</UserContextProvider>
			</CartContextProvider>
		</ThemeContextProvider>
	);
}


export default App;
