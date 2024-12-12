import React from "react";
import Skills from "../container/Skills/Skills";
import TransitionEffect from "../Components/TransitionEffect";
import "./SkillsPage.css";
import Certificates from "../container/Certificates/Certificates";
const Skillspage = () => {
	return (
		<>
			{" "}
			<TransitionEffect />
			<div className="skills-container">
				<Skills />
				{/* <Certificates /> */}
			</div>
		</>
	);
};

export default Skillspage;
