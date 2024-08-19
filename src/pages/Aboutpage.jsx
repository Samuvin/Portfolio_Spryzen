import React from "react";
import About from "../container/About/About";
import Testimonial from "../container/Testimonial/Testimonial";

import Profile from "../container/Profile/Profile";
import TransitionEffect from "../Components/TransitionEffect";
import "./AboutPage.css";
const AboutPage = () => {
	return (
		<>
			<div className="About-container">
				<TransitionEffect />
				<Profile />
				<About />

				<Testimonial />
			</div>
		</>
	);
};

export default AboutPage;
