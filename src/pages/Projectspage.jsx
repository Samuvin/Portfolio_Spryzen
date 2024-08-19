import React from "react";

import TransitionEffect from "../Components/TransitionEffect";
import Qualification from "../container/Qualification/Qualification";
import "./ProjectPage.css";
const Projectspage = () => {
	return (
		<>
			<div className="project-container">
				<TransitionEffect />
				<Qualification />
			</div>
		</>
	);
};

export default Projectspage;
