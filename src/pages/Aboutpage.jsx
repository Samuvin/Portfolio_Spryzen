import React from "react";
import CodingProfile from "../container/CodingProfile/CodingProfile";
import Achievement from "../container/Achievement/Achievement";

import Profile from "../container/Profile/Profile";
import TransitionEffect from "../Components/TransitionEffect";
import "./AboutPage.css";
import SocialIcons from "../container/Main/SocialIcons";
const AboutPage = () => {
	return (
		<>
			<div className="About-container">
				<TransitionEffect />
				<Profile />
				<CodingProfile />
				<Achievement />
				<SocialIcons />
			</div>
		</>
	);
};

export default AboutPage;
