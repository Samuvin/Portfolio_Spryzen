import React from "react";
import { motion } from "framer-motion";
import about01 from "../../assets/about01.png";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";

// Define a local array to replace the backend data
const abouts = [
	{
		title: "Design",
		description: "Creating beautiful and functional designs.",
		imgUrl: about01,
	},
	{
		title: "Development",
		description: "Building and maintaining websites and applications.",
		imgUrl: about01,
	},
	{
		title: "Marketing",
		description: "Strategizing and executing effective marketing campaigns.",
		imgUrl: about01,
	},
];

const About = () => {
	return (
		<>
			<h2 className="head-text">
				I Know that <span>Good Design</span> <br />
				means <span>Good Business</span>
			</h2>

			<div className="app__profiles">
				{abouts.map((about, index) => (
					<motion.div
						whileInView={{ opacity: 1 }}
						whileHover={{ scale: 1.1 }}
						transition={{ duration: 0.5, type: "tween" }}
						className="app__profile-item"
						key={about.title + index}>
						<img src={about.imgUrl} alt={about.title} />
						<h2 className="bold-text" style={{ marginTop: 20 }}>
							{about.title}
						</h2>
						<p className="p-text" style={{ marginTop: 10 }}>
							{about.description}
						</p>
					</motion.div>
				))}
			</div>
		</>
	);
};

export default AppWrap(
	MotionWrap(About, "app__about app__flex"),
	"about",
	"app__whitebg"
);
