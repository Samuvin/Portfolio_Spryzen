import React from "react";
import { motion } from "framer-motion";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Skills.scss";
import TransitionEffect from "../../Components/TransitionEffect";
import node from "../../assets/node.png";
// Sample data for skills and experiences
const experiences = [
	{
		year: "2021",
		works: [
			{
				name: "Frontend Developer",
				company: "ABC Corp",
				desc: "Developed user interfaces using React and Redux.",
			},
		],
	},
	{
		year: "2020",
		works: [
			{
				name: "Backend Developer",
				company: "XYZ Ltd",
				desc: "Built RESTful APIs using Node.js and Express.",
			},
		],
	},
];

const skills = [
	{
		_id: "1",
		name: "React",
		bgColor: "#61dafb",
		icon: node,
	},
	{
		_id: "2",
		name: "Node.js",
		bgColor: "#339933",
		icon: node,
	},
];

const Skills = () => {
	return (
		<>
			<TransitionEffect />
			<h2 className="head-text">Skills & Experiences</h2>

			<div className="app__skills-container">
				<motion.div className="app__skills-list">
					{skills.map((skill) => (
						<motion.div
							key={skill._id}
							whileInView={{ opacity: [0, 1] }}
							transition={{ duration: 0.5 }}
							className="app__skills-item app__flex">
							<div
								className="app__flex"
								style={{ backgroundColor: skill.bgColor }}>
								<img src={skill.icon} alt={skill.name} />
							</div>
							<p className="p-text">{skill.name}</p>
						</motion.div>
					))}
				</motion.div>

				<div className="app__skills-exp">
					{experiences.map((experience) => (
						<motion.div className="app__skills-exp-item" key={experience.year}>
							<div className="app__skills-exp-year">
								<p className="bold-text">{experience.year}</p>
							</div>
							<motion.div className="app__skills-exp-works">
								{experience.works.map((work, index) => (
									<motion.div
										key={work.name + index}
										whileInView={{ opacity: [0, 1] }}
										transition={{ duration: 0.5 }}
										className="app__skills-exp-work"
										data-tip
										data-for={work.name}>
										<h4 className="bold-text">{work.name}</h4>
										<p className="p-text">{work.company}</p>
									</motion.div>
								))}
							</motion.div>
							<ReactTooltip
								id={experience.year}
								effect="solid"
								arrowColor="#fff"
								className="skills-tooltip">
								{experience.works.map((work) => (
									<div key={work.name}>
										<h4 className="bold-text">{work.name}</h4>
										<p className="p-text">{work.desc}</p>
									</div>
								))}
							</ReactTooltip>
						</motion.div>
					))}
				</div>
			</div>
		</>
	);
};

export default AppWrap(
	MotionWrap(Skills, "app__skills app__flex"),
	"skills",
	"app__whitebg"
);
