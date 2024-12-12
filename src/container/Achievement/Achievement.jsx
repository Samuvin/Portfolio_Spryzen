import React, { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { SiCodechef } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";
import cpp from "../../assets/cpp.png";
import css from "../../assets/css.png";
import { FaJava } from "react-icons/fa";
import git from "../../assets/git.png";
import html from "../../assets/html.png";
import javascript from "../../assets/javascript.png";
import node from "../../assets/node.png";
import graphql from "../../assets/graphql.png";
import { SiThealgorithms } from "react-icons/si";
import { IoCodeSlash } from "react-icons/io5";
import "./Achievement.css";
const achievementsData = [
	{
		imgurl: <SiCodechef size={50} />,
		description:
			"With a peak rating of 1839, achieving a prestigious 4-star rank, I secured impressive global ranks such as 154, 324, 336, and 416 in various contests, demonstrating a consistent mastery of problem-solving on the CodeChef platform",
		title: "CodeChef Achievements",
		organization: "CodeChef",
	},
	{
		imgurl: <SiLeetcode size={50} />,
		description:
			"As a Knight on LeetCode with a max rating of 2078, I earned remarkable global ranks like 626, 709, 1082, and 1180 while maintaining an exceptional streak of 450+ consecutive days of problem-solving.",
		title: "LeetCode Achievements",
		organization: "LeetCode",
	},
	{
		imgurl: <SiGeeksforgeeks size={50} />,
		description:
			"Achieving a 4-star rank with a max rating of 1906, I attained notable global ranks such as 92, 390, 425, and 479, showcasing my aptitude for tackling diverse challenges on GeeksforGeeks.",
		title: "Geeks for Geeks Achievements",
		organization: "Geeks for Geeks",
	},
	{
		imgurl: <IoCodeSlash size={50} />,
		description:
			"Collaborating in a team, we secured an impressive Team Rank 761 during the prestigious ICPC Amritapuri Prelims, highlighting my ability to excel in competitive programming under pressure.",
		title: "ICPC Achievement",
		organization: "ICPC",
	},
	{
		imgurl: <SiThealgorithms size={50} />,
		description:
			"I have solved over 2200 coding problems across various platforms, reflecting a strong foundation in data structures, algorithms, and advanced coding concepts.",
		title: "Codolio Achievement",
		organization: "Codolio",
	},
	{
		imgurl: <FaJava size={50} />,
		description:
			"Excelling in multiple editions of CodeTrack, I secured 1st place in V1.0, 1st place in V3.0, 2nd place in V4.0, and 1st place in V5.0, showcasing consistent performance and dedication to competitive programming.",
		title: "CodeTrack Achievements",
		organization: "CodeTrack",
	},
];

const brandsData = [
	{
		_id: "1",
		imgUrl: cpp,
		name: "Brand A",
	},
	{
		_id: "2",
		imgUrl: html,
		name: "Brand B",
	},
	{
		_id: "2",
		imgUrl: git,
		name: "Brand B",
	},
	{
		_id: "2",
		imgUrl: javascript,
		name: "Brand B",
	},
	{
		_id: "2",
		imgUrl: css,
		name: "Brand B",
	},

	{
		_id: "2",
		imgUrl: node,
		name: "Brand B",
	},
	{
		_id: "2",
		imgUrl: graphql,
		name: "Brand B",
	},
];

const Achievement = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleClick = (index) => {
		setCurrentIndex(index);
	};

	return (
		<>
			{achievementsData.length > 0 && (
				<>
					<div className="app__achievement-item app__flexm Project">
						{achievementsData[currentIndex].imgurl}
						<div className="app__achievement-content">
							<p className="p-text">
								{achievementsData[currentIndex].description}
							</p>
							<div>
								<h4 className="bold-text">
									{achievementsData[currentIndex].title}
								</h4>
								<h5 className="p-text">
									{achievementsData[currentIndex].organization}
								</h5>
							</div>
						</div>
					</div>

					<div className="app__achievement-btns app__flex">
						<div
							className="app__flex"
							onClick={() =>
								handleClick(
									currentIndex === 0
										? achievementsData.length - 1
										: currentIndex - 1
								)
							}>
							<HiChevronLeft />
						</div>

						<div
							className="app__flex"
							onClick={() =>
								handleClick(
									currentIndex === achievementsData.length - 1
										? 0
										: currentIndex + 1
								)
							}>
							<HiChevronRight />
						</div>
					</div>
				</>
			)}

			<div className="app__achievement-brands app__flex1">
				{brandsData.map((brand) => (
					<motion.div
						whileInView={{ opacity: [0, 1] }}
						transition={{ duration: 0.5, type: "tween" }}
						key={brand._id}>
						<img src={brand.imgUrl} alt={brand.name} />
					</motion.div>
				))}
			</div>
		</>
	);
};

export default Achievement;
