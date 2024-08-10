import React, { useState } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import about01 from "../../assets/about01.png";
import "./Work.css";

// Define a local array to replace the backend data
const works = [
	{
		title: "Project 1",
		description: "Description of project 1.",
		imgUrl: about01, // Update with actual image path
		projectLink: "https://project1.com",
		codeLink: "https://github.com/project1",
		tags: ["UI/UX", "Web App"],
	},
	{
		title: "Project 2",
		description: "Description of project 2.",
		imgUrl: about01, // Update with actual image path
		projectLink: "https://project2.com",
		codeLink: "https://github.com/project2",
		tags: ["Mobile App", "React JS"],
	},
	// Add more projects as needed
];

const Work = () => {
	const [filterWork, setFilterWork] = useState(works);
	const [activeFilter, setActiveFilter] = useState("All");
	const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

	const handleWorkFilter = (item) => {
		setActiveFilter(item);
		setAnimateCard({ y: 100, opacity: 0 });

		setTimeout(() => {
			setAnimateCard({ y: 0, opacity: 1 });

			if (item === "All") {
				setFilterWork(works);
			} else {
				setFilterWork(works.filter((work) => work.tags.includes(item)));
			}
		}, 500);
	};

	return (
		<>
			<h2 className="head-text">
				My Creative <span>Portfolio</span> Section
			</h2>

			<div className="app__work-filter">
				{["UI/UX", "Web App", "Mobile App", "React JS", "All"].map(
					(item, index) => (
						<div
							key={index}
							onClick={() => handleWorkFilter(item)}
							className={`app__work-filter-item app__flex p-text ${
								activeFilter === item ? "item-active" : ""
							}`}>
							{item}
						</div>
					)
				)}
			</div>

			<motion.div
				animate={animateCard}
				transition={{ duration: 0.5, delayChildren: 0.5 }}
				className="app__work-portfolio">
				{filterWork.map((work, index) => (
					<div className="app__work-item app__flex" key={index}>
						<div className="app__work-img app__flex">
							<img src={work.imgUrl} alt={work.title} />

							<motion.div
								whileHover={{ opacity: [0, 1] }}
								transition={{
									duration: 0.25,
									ease: "easeInOut",
									staggerChildren: 0.5,
								}}
								className="app__work-hover app__flex">
								<a href={work.projectLink} target="_blank" rel="noreferrer">
									<motion.div
										whileInView={{ scale: [0, 1] }}
										whileHover={{ scale: [1, 0.9] }}
										transition={{ duration: 0.25 }}
										className="app__flex">
										<AiFillEye />
									</motion.div>
								</a>
								<a href={work.codeLink} target="_blank" rel="noreferrer">
									<motion.div
										whileInView={{ scale: [0, 1] }}
										whileHover={{ scale: [1, 0.9] }}
										transition={{ duration: 0.25 }}
										className="app__flex">
										<AiFillGithub />
									</motion.div>
								</a>
							</motion.div>
						</div>

						<div className="app__work-content app__flex">
							<h4 className="bold-text">{work.title}</h4>
							<p className="p-text" style={{ marginTop: 10 }}>
								{work.description}
							</p>

							<div className="app__work-tag app__flex">
								<p className="p-text">{work.tags[0]}</p>
							</div>
						</div>
					</div>
				))}
			</motion.div>
		</>
	);
};

export default AppWrap(
	MotionWrap(Work, "app__works app__flex"),
	"work",
	"app__primarybg"
);
