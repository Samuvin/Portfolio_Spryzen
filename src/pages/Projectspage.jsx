import React from "react";

import TransitionEffect from "../Components/TransitionEffect";
import Projects from "../container/Projects/Projects";
import "./ProjectPage.css";
const Projectspage = () => {
	return (
		<>
			<div className="project-container">
				<TransitionEffect />
				<Projects />
			</div>
		</>
	);
};

export default Projectspage;
