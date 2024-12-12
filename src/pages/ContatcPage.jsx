import React from "react";
import TransitionEffect from "../Components/TransitionEffect";
import Contact from "../container/Contact/Contact";
import "./ContactPage.css";
import SocialIcons from "../container/Main/SocialIcons";
const ContatcPage = () => {
	return (
		<>
			<div className="contact-container">
				<TransitionEffect />
				<Contact />
				<SocialIcons />
			</div>
		</>
	);
};

export default ContatcPage;
