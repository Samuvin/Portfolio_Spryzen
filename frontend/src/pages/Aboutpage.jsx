import React from "react";
import About from "../container/About/About";

import Achievements from "../container/Achievements/Achievements";
import Qualification from "../container/Qualification/Qualification";
import Works from "../container/Work/Work";
import TransitionEffect from "../Components/TransitionEffect";
const AboutPage = () => {
	return (
		<>
			<TransitionEffect />
			<About />
			<Works />
			<Qualification />
		</>
	);
};

export default AboutPage;
// export default AppWrap(
// 	MotionWrap(About, "app__about app__flex"),
// 	"about",
// 	"app__whitebg"
// );
