import React from "react";
import TransitionEffect from "../Components/TransitionEffect";
import Contact from "../container/Contact/Contact";
import "./ContactPage.css";
const ContatcPage = () => {
	return (
		<>
			<div className="contact-container">
				<TransitionEffect />
				<Contact />
			</div>
		</>
	);
};

export default ContatcPage;
