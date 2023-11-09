import React, {useEffect} from 'react'
import {ThemeContext} from "../context/ThemeContext";
import {useNavigate} from "react-router-dom";
import '../style.css'
import '../input.css'
import {
	IconBrandFacebook,
	IconBrandInstagram,
	IconBrandLinkedin,
	IconBrandWhatsapp,
	IconMail,
	IconPhoneCall
} from "@tabler/icons-react";
import ScrollToTopButton from "../components/ui/ScrollToTopButton";

const About = () => {
	const navigate = useNavigate();
	const {theme} = React.useContext(ThemeContext);
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
			<section className="flex flex-col p-4 m-8 justify-center items-center" id="intro">
				<div className="text-4xl bulgatti my-6 mb-3">
					About Us
				</div>
				
				<p className="dancing text-2xl text-center mb-6 mt-8">
					Makeup is a Choice, Skincare is Essential.
				</p>
				<div className="text-xl mt-4 prata text-left  text-center">
					luxuriant luxe wont give
					you the false expectations
					from the product your
					natural skin will be
					enhanced and become
					more like what you want.
				</div>
			</section>
			
			<section className="flex flex-col p-2 m-8 justify-center items-center " id="intro">
				<div className="text-4xl bulgatti my-6">
					Only Premium
				</div>
				
				<div className="text-xl mt-4 prata text-left text-center">
					Made with <span className="text-accent prata text-xl"> pure safe-to-use organic </span>
					ingredients. This formula won't harm
					your natural skin, it will only help you
					get rid of those dark spots, tan, open
					pores, and small bumps and will
					make your skin outrageously flawless
					like <span className="text-accent prata text-xl"> you've always dreamt of. </span>
				</div>
			
			</section>
			<section className="flex flex-col p-4 m-8 justify-center items-center text-4xl bulgatti" id="intro">
				Your Box!
				<div className="flex justify-center mt-4">
					<div id={theme === "light" ? "insta_code" : "insta_code_dark"}
					     className="w-screen h-64 bg-center snap-center self-center">
					</div>
				</div>
			
			</section>
			
			<section className="flex flex-col p-4 m-8 justify-center items-center text-4xl bulgatti" id="intro">
				Origins
				<div className="flex justify-center mt-4">
					<div id={theme === "light" ? "insta_code" : "insta_code_dark"}
					     className="w-screen h-64 bg-center snap-center self-center">
					</div>
				</div>
				<div className="text-xl mt-4 prata text-left p-4 text-center">
					
					We are from MITWPU, Pune. We are a group of students who are passionate about skincare and beauty. We strive
					to bring you the best products at the best prices!
				</div>
			</section>
			
			<section className="flex flex-col p-4 m-8 justify-center items-center text-4xl bulgatti" id="intro">
				Founders
				<div className="flex flex-col gap-4">
					<div className="flex justify-center mt-4">
						<div id={theme === "light" ? "insta_code" : "insta_code_dark"}
						     className="w-screen h-64 bg-center snap-center self-center">
						</div>
					</div>
					<div className="flex justify-center mt-4">
						<div id={theme === "light" ? "insta_code" : "insta_code_dark"}
						     className="w-screen h-64 bg-center snap-center self-center">
						</div>
					</div>
					<div className="text-xl mt-4 prata text-left p-4 m-5 text-center">
						
						<span className="text-accent prata text-xl">
						
						Two people who got
						influenced by the ancient
						skincare heritage from the
						1st century and made it time
						travel to 2023 for you.
						</span>
						
						<br></br>
						<br></br>
						We are from MITWPU, Pune. We are a group of students who are passionate about
						skincare and beauty. We strive
						to bring you the best products at the best prices!
					</div>
				
				</div>
			
			</section>
			<section className="flex flex-col p-4 m-8 justify-center items-center text-4xl bulgatti" id="intro">
				Get in Touch!
				
				<div className="text-xl mt-10 prata text-left">
					For any queries, Feel Free to Call, or Whatsapp us anytime! We assure you that we will get back to you in 24
					hours!
				</div>
				<div className="flex flex-row justify-center gap-4 my-5">
					<a
						href="https://wa.me/917666018928?text=Welcome%20to%20Luxuriant%20Luxe!%20How%20can%20we%20help%20you%20today%3F%20"
					>
						<IconBrandWhatsapp className="w-8 h-8"/>
					</a>
					<a
						onClick={
							// open mail client
							() => {
								window.location.href = "mailto:luxeluxuriant@gmail.com";
							}
						}
					>
						<IconMail className="w-8 h-8"/>
					</a>
					<a
						onClick={
							// open phone client
							() => {
								window.location.href = "tel:+917666018928";
							}
						}
					>
						<IconPhoneCall className="w-8 h-8"/>
					</a>
				</div>
				<div className="text-xl mt-10 prata text-left">
					You can Also DM us on our Instagram!
				</div>
				
				<div className="flex justify-center mt-4">
					<div id={theme === "light" ? "insta_code" : "insta_code_dark"}
					     className="w-screen h-96 bg-center snap-center self-center">
					</div>
				</div>
			</section>
			
			
			<footer className="footer footer-center p-10 bg-secondary text-primary-content bottom-0">
				<aside>
					<div id="luxelogo" className="w-20 h-20 bg-center snap-center self-center"
					></div>
					<p className="dancing text-3xl"><span className="text-2xl prata">Luxuriant Luxe</span><br/>Your Skin Our
						Priority</p>
					<p>Copyright © 2023 - All right reserved</p>
					<a className="link">Privacy Policy</a>
				</aside>
				<nav className="">
					<div className="flex flex-wrap justify-center items-center gap-4 w-2/3 lg:w-fit">
						<a
							href="https://wa.me/917666018928?text=Welcome%20to%20Luxuriant%20Luxe!%20How%20can%20we%20help%20you%20today%3F%20"
						>
							<IconBrandWhatsapp className="w-8 h-8"/>
						</a>
						<a href="https://www.instagram.com/luxuriant_luxe"
						>
							<IconBrandInstagram className="w-8 h-8"/>
						</a>
						<a href="https://www.facebook.com/profile.php?id=61551508050876"
						>
							<IconBrandFacebook className="w-8 h-8"/>
						</a>
						{/*<a*/}
						{/*	href=""*/}
						{/*>*/}
						{/*	<IconBrandTelegram className="w-8 h-8"/>*/}
						{/*</a>*/}
						<a
							href="https://www.linkedin.com/in/luxuriant-luxe-1b852a292"
						>
							<IconBrandLinkedin className="w-8 h-8"/>
						</a>
						<a
							onClick={
								// open mail client
								() => {
									window.location.href = "mailto:luxeluxuriant@gmail.com";
								}
							}
						>
							<IconMail className="w-8 h-8"/>
						</a>
						<a
							onClick={
								// open phone client
								() => {
									window.location.href = "tel:+917666018928";
								}
							}
						>
							<IconPhoneCall className="w-8 h-8"/>
						</a>
						<ScrollToTopButton/>
					</div>
				</nav>
			</footer>
		
		</div>
	)
}

export default About
