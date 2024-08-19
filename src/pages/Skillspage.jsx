import React from "react";
import Skills from "../container/Skills/Skills";
import TransitionEffect from "../Components/TransitionEffect";
import "./SkillsPage.css";
import Works from "../container/Work/Work";
const Skillspage = () => {
	return (
		<>
			{" "}
			<TransitionEffect />
			<div className="skills-container">
				<Skills />
				<Works />
			</div>
		</>
	);
};

export default Skillspage;
