import React, { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import sass from "../../assets/sass.png"; // Replace this with actual image imports
import "./Achievement.css";

const achievementsData = [
	{
		imgurl: sass,
		description: "Won 1st place in National Coding Competition",
		title: "National Coding Championship",
		organization: "Tech Society",
	},
	{
		imgurl: sass,
		description: "Completed AI Course with Distinction",
		title: "AI Excellence Award",
		organization: "AI Academy",
	},
	// Add more achievements as needed
];

const brandsData = [
	{
		_id: "1",
		imgUrl: sass,
		name: "Brand A",
	},
	{
		_id: "2",
		imgUrl: sass,
		name: "Brand B",
	},
	// Add more brands as needed
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
						<img
							src={achievementsData[currentIndex].imgurl}
							alt={achievementsData[currentIndex].title}
						/>
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
