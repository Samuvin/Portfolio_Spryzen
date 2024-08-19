import React from "react";
import Skills from "../container/Skills/Skills";
import TransitionEffect from "../Components/TransitionEffect";
import "./SkillsPage.css";
const Skillspage = () => {
	return (
		<>
			{" "}
			<TransitionEffect />
			<div className="skills-container">
				<Skills />
			</div>
		</>
	);
};

export default Skillspage;
