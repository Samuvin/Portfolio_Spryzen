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
import "./CodingProfile.css";

const profiles = [
	{
		title: "Codechef",
		description:
			"Develops problem-solving skills through complex algorithmic challenges.",
		icon: <SiCodechef />,
		link: "https://www.codechef.com/users/samuvinj",
	},
	{
		title: "Leetcode",
		description:
			"Enhances creativity and technical skills for interactive web applications.",
		icon: <SiLeetcode />,
		link: "https://leetcode.com/u/Sun_fyre/",
	},
	{
		title: "Geeksforgeeks",
		description:
			"Produces clear documentation and tutorials to bridge knowledge gaps.",
		icon: <SiGeeksforgeeks />,
		link: "https://www.geeksforgeeks.org/user/samuvin_jenish/",
	},
	{
		title: "Coding Ninjas",
		description:
			"Promotes continuous learning and upskilling for the tech industry.",
		icon: <SiCodingninjas />,
		link: "https://www.naukri.com/code360/profile/Spryzen",
	},
	{
		title: "Codolio",
		description:
			"Promotes continuous learning and upskilling for the tech industry.",
		icon: <SiCodingninjas />,
		link: "https://codolio.com/profile/Sun_Fyre",
	},
];

const CodingProfile = () => {
	return (
		<>
			<h2 className="head-text">
				Crafting Code and Communicating Ideas: <br />
				Where <span>Algorithms Meet Artistry</span>
			</h2>

			<div className="app__profiles">
				{profiles.map((profile, index) => (
					<Link
						to={profile.link}
						style={{ textDecoration: "none", color: "inherit" }}
						key={profile.title + index}>
						<motion.div
							whileInView={{ opacity: 1, y: 10 }}
							whileHover={{ scale: 1.05 }}
							transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
							className="app__profile-item">
							{profile.icon}
							<h2 className="bold-text" style={{ marginTop: 20 }}>
								{profile.title}
							</h2>
							<p className="p-text" style={{ marginTop: 10 }}>
								{profile.description}
							</p>
						</motion.div>
					</Link>
				))}
			</div>
		</>
	);
};

export default CodingProfile;
