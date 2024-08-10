import React from "react";
import About from "../container/About/About";
import Testimonial from "../container/Testimonial/Testimonial";
import Works from "../container/Work/Work";
import TransitionEffect from "../Components/TransitionEffect";
const AboutPage = () => {
	return (
		<>
			<TransitionEffect />

			<About />
			<Works />
			<Testimonial />
		</>
	);
};

export default AboutPage;
