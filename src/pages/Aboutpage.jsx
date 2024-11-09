import React from "react";
import CodingProfile from "../container/CodingProfile/CodingProfile";
import Achievement from "../container/Achievement/Achievement";

import Profile from "../container/Profile/Profile";
import TransitionEffect from "../Components/TransitionEffect";
import "./AboutPage.css";
const AboutPage = () => {
	return (
		<>
			<div className="About-container">
				<TransitionEffect />
				<Profile />
				<CodingProfile />
				<Achievement />
			</div>
		</>
	);
};

export default AboutPage;
