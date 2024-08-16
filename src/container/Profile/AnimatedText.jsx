import React from "react";
import { motion } from "framer-motion";
import "./AnimatedText.css";
const quote = {
	hidden: { opacity: 1 },
	visible: {
		opacity: 1,
		transition: {
			delay: 0.5,
			staggerChildren: 0.08,
		},
	},
};

const singleWord = {
	hidden: { opacity: 0, y: 50 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 1 },
	},
};

const AnimatedText = ({ text, className = "" }) => {
	return (
		<div className={`animated-text-container ${className}`}>
			<motion.h1
				className="animated-text-heading"
				variants={quote}
				initial="hidden"
				animate="visible">
				{text.split(" ").map((char, index) => (
					<motion.span
						className="animated-text-span"
						key={char + "-" + index}
						variants={singleWord}>
						{char}&nbsp;
					</motion.span>
				))}
			</motion.h1>
		</div>
	);
};

export default AnimatedText;
