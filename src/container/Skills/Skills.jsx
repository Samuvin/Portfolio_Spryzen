import React from "react";
import { motion } from "framer-motion";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "./Skills.css";
import TransitionEffect from "../../Components/TransitionEffect";
import {
	SiC,
	SiCplusplus,
	SiJavascript,
	SiMysql,
	SiThealgorithms,
	SiPostman,
	SiDatabricks,
} from "react-icons/si";
import { FaJava, FaHtml5, FaCss3Alt, FaReact, FaNode } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";

const experiences = [
	{
		year: "2021",
		works: [
			{
				name: "Mentor Batch",
				company: "KIT - Kalaignar Karunanidhi Institute of Technology",
				desc: "Improve problem-solving skills, algorithmic thinking",
			},
		],
	},
	{
		year: "2020",
		works: [
			{
				name: "Toastmasters",
				company: "KIT - Kalaignar Karunanidhi Institute of Technology",
				desc: "Improving public speaking, Communication, and Leadership skills",
			},
		],
	},
];

const skills = [
	{
		_id: "1",
		name: "C",
		icon: <SiC size={35} color="black" />,
		bgColor: "#DFF6FF",
	},
	{
		_id: "2",
		name: "C++",
		icon: <SiCplusplus size={35} color="black" />,
		bgColor: "#B5EAEA",
	},
	{
		_id: "3",
		name: "Java",
		icon: <FaJava size={35} color="black" />,
		bgColor: "#FFE5D9",
	},
	{
		_id: "4",
		name: "HTML",
		icon: <FaHtml5 size={35} color="black" />,
		bgColor: "#FFDDC1",
	},
	{
		_id: "5",
		name: "CSS",
		icon: <FaCss3Alt size={35} color="black" />,
		bgColor: "#D6EAF8",
	},
	{
		_id: "6",
		name: "JavaScript",
		icon: <SiJavascript size={35} color="black" />,
		bgColor: "#FFF9C4",
	},
	{
		_id: "7",
		name: "SQL",
		icon: <SiMysql size={35} color="black" />,
		bgColor: "#E0F7FA",
	},
	{
		_id: "8",
		name: "STL",
		icon: <SiCplusplus size={35} color="black" />,
		bgColor: "#F0F4C3",
	},
	{
		_id: "9",
		name: "ReactJS",
		icon: <FaReact size={35} color="black" />,
		bgColor: "#F1F8E9",
	},
	{
		_id: "10",
		name: "Node.js",
		icon: <FaNode size={35} color="black" />,
		bgColor: "#DCEDC8",
	},
	{
		_id: "11",
		name: "MongoDB",
		icon: <DiMongodb size={35} color="black" />,
		bgColor: "#E8F5E9",
	},
	{
		_id: "12",
		name: "Postman",
		icon: <SiPostman size={35} color="black" />,
		bgColor: "#FFF3E0",
	},
	{
		_id: "13",
		name: "DSA",
		icon: <SiThealgorithms size={35} color="black" />,
		bgColor: "#E3F2FD",
	},
	{
		_id: "14",
		name: "OOP",
		icon: <SiThealgorithms size={35} color="black" />,
		bgColor: "#FFEBEE",
	},
	{
		_id: "15",
		name: "DBMS",
		icon: <SiDatabricks size={35} color="black" />,
		bgColor: "#FFF8E1",
	},
];

const Skills = () => (
	<>
		<TransitionEffect />
		<h2 className="head-text">Skills & Education</h2>

		<div className="app__skills-container">
			<motion.div className="app__skills-list">
				{skills.map((skill) => (
					<motion.div
						key={skill._id}
						whileInView={{ opacity: [0, 1] }}
						transition={{ duration: 0.5 }}
						className="app__skills-item app__flex"
						data-tooltip-id={`tooltip-${skill._id}`}>
						<div
							className="app__flex"
							style={{ backgroundColor: skill.bgColor }}>
							{skill.icon}
						</div>
						<p className="p-text">{skill.name}</p>
						<ReactTooltip
							id={`tooltip-${skill._id}`}
							effect="solid"
							arrowColor="#fff"
						/>
					</motion.div>
				))}
			</motion.div>

			{/* Experiences Section */}
			<div className="app__skills-exp">
				{experiences.map((experience) => (
					<motion.div key={experience.year} className="app__skills-exp-item">
						<div className="app__skills-exp-year">
							<p className="bold-text">{experience.year}</p>
						</div>
						<motion.div className="app__skills-exp-works">
							{experience.works.map((work, index) => (
								<motion.div
									key={`${work.name}-${index}`}
									whileInView={{ opacity: [0, 1] }}
									transition={{ duration: 0.5 }}
									className="app__skills-exp-work"
									data-tooltip-id={`work-${experience.year}-${index}`}>
									<h4 className="bold-text">{work.name}</h4>
									<p className="p-text">{work.company}</p>
									<p>{work.desc}</p>
								</motion.div>
							))}
						</motion.div>
					</motion.div>
				))}
			</div>
		</div>
	</>
);

export default Skills;
