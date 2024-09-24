import React from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { Link } from "react-router-dom";
import {
	SiLeetcode,
	SiCodechef,
	SiCodeforces,
	SiGeeksforgeeks,
	SiCodingninjas,
} from "react-icons/si";
import "./About.scss";

const abouts = [
	{
		title: "Codechef",
		description:
			"Develops problem-solving skills through complex algorithmic challenges.",
		icon: <SiCodechef />, // Icon representing competitive programming
		link: "https://www.codechef.com/users/samuvinj",
	},
	{
		title: "Leetcode",
		description:
			"Enhances creativity and technical skills for interactive web applications.",
		icon: <SiLeetcode />, // Icon representing coding challenges
		link: "https://leetcode.com/u/Sun_fyre/",
	},
	{
		title: "Codeforces",
		description:
			"Strengthens logical thinking with efficient algorithms for problem-solving.",
		icon: <SiCodeforces />, // Icon representing codeforces and competitive coding
		link: "https://codeforces.com/profile/samuvin.j",
	},
	{
		title: "Geeksforgeeks",
		description:
			"Produces clear documentation and tutorials to bridge knowledge gaps.",
		icon: <SiGeeksforgeeks />, // Icon representing educational content
		link: "https://www.geeksforgeeks.org/user/samuvin_jenish/",
	},
	{
		title: "Coding Ninjas",
		description:
			"Promotes continuous learning and upskilling for the tech industry.",
		icon: <SiCodingninjas />, // Icon representing coding skills and training
		link: "https://www.naukri.com/code360/profile/Spryzen",
	},
];

const About = () => {
	return (
		<>
			<h2 className="head-text">
				Crafting Code and Communicating Ideas: <br />
				Where <span>Algorithms Meet Artistry</span>
			</h2>

			<div className="app__profiles">
				{abouts.map((about, index) => (
					<Link
						to={about.link}
						style={{ textDecoration: "none", color: "inherit" }}>
						<motion.div
							whileInView={{ opacity: 1, y: 10 }} // Added vertical slide in
							whileHover={{ scale: 1.05 }}
							transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
							className="app__profile-item"
							key={about.title + index}>
							{about.icon}
							<h2 className="bold-text" style={{ marginTop: 20 }}>
								{about.title}
							</h2>
							<p className="p-text" style={{ marginTop: 10 }}>
								{about.description}
							</p>
						</motion.div>
					</Link>
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
