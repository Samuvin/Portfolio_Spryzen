import React, { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import sass from "../../assets/sass.png"; // Replace this with actual image imports
import "./Testimonial.css";

const testimonialsData = [
	{
		imgurl: sass,
		feedback: "Great service!",
		name: "John Doe",
		company: "Company A",
	},
	{
		imgurl: sass,
		feedback: "Highly recommended!",
		name: "Jane Smith",
		company: "Company B",
	},
	// Add more testimonials as needed
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

const Testimonial = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleClick = (index) => {
		setCurrentIndex(index);
	};

	return (
		<>
			{testimonialsData.length > 0 && (
				<>
					<div className="app__testimonial-item app__flexm Project">
						<img
							src={testimonialsData[currentIndex].imgurl}
							alt={testimonialsData[currentIndex].name}
						/>
						<div className="app__testimonial-content">
							<p className="p-text">
								{testimonialsData[currentIndex].feedback}
							</p>
							<div>
								<h4 className="bold-text">
									{testimonialsData[currentIndex].name}
								</h4>
								<h5 className="p-text">
									{testimonialsData[currentIndex].company}
								</h5>
							</div>
						</div>
					</div>

					<div className="app__testimonial-btns app__flex">
						<div
							className="app__flex"
							onClick={() =>
								handleClick(
									currentIndex === 0
										? testimonialsData.length - 1
										: currentIndex - 1
								)
							}>
							<HiChevronLeft />
						</div>

						<div
							className="app__flex"
							onClick={() =>
								handleClick(
									currentIndex === testimonialsData.length - 1
										? 0
										: currentIndex + 1
								)
							}>
							<HiChevronRight />
						</div>
					</div>
				</>
			)}

			<div className="app__testimonial-brands app__flex1">
				{brandsData.map((brand) => (
					<motion.div
						whileInView={{ opacity: [0, 1] }}
						transition={{ duration: 0.5, type: "tween" }}
						key={brand._id}>
						<img src={brand.imgUrl} alt={brand.name} />
					</motion.div>
				))}
				{brandsData.map((brand) => (
					<motion.div
						whileInView={{ opacity: [0, 1] }}
						transition={{ duration: 0.5, type: "tween" }}
						key={brand._id}>
						<img src={brand.imgUrl} alt={brand.name} />
					</motion.div>
				))}
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

export default MotionWrap(Testimonial, "app__testimonial");
