import React, { useState } from "react";
import "./Profile.css"; // Import the stylesheet
import SubBlock from "./SubBlock"; // Your Intro component

function Profile() {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	return (
		<div className={click ? "dark-theme" : "light-theme"}>
			<div className={`dark-div ${click ? "clicked" : ""}`} />
			<button
				className={`center-button ${click ? "clicked" : ""}`}
				onClick={handleClick}>
				<span>Click</span>
			</button>
			{click ? <SubBlock /> : null}
		</div>
	);
}

export default Profile;
