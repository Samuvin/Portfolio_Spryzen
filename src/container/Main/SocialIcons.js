import { motion } from "framer-motion";
import React from "react";
// import { a } from 'react-router-dom'
import { FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { TiSocialInstagram } from "react-icons/ti";
import { TfiTwitterAlt } from "react-icons/tfi";

import "./SocialIcons.css";

const SocialIcons = () => {
	return (
		<div className="icons">
			<motion.div
				initial={{ scale: 0 }}
				animate={{ scale: [0, 1, 1.5, 1] }}
				transition={{ type: "spring", duration: 1, delay: 1 }}>
				<a
					style={{ color: "inherit" }}
					target="_blank"
					rel="noopener noreferrer"
					href={"https://github.com/codebucks27"}>
					<div className="Social_Icons">
						<FaGithub size={25} />
					</div>
				</a>
			</motion.div>
			<motion.div
				initial={{ scale: 0 }}
				animate={{ scale: [0, 1, 1.5, 1] }}
				transition={{ type: "spring", duration: 1, delay: 1.2 }}>
				<a
					style={{ color: "inherit" }}
					target="_blank"
					rel="noopener noreferrer"
					href={"https://twitter.com/code_bucks"}>
					<div className="Social_Icons">
						<ImLinkedin size={25} />
					</div>
				</a>
			</motion.div>
			<motion.div
				initial={{ scale: 0 }}
				animate={{ scale: [0, 1, 1.5, 1] }}
				transition={{ type: "spring", duration: 1, delay: 1.4 }}>
				<a
					style={{ color: "inherit" }}
					target="_blank"
					rel="noopener noreferrer"
					href={"https://facebook.com/codebucks27"}>
					<div className="Social_Icons">
						<TiSocialInstagram size={30} />
					</div>
				</a>
			</motion.div>
			<motion.div
				initial={{ scale: 0 }}
				animate={{ scale: [0, 1, 1.5, 1] }}
				transition={{ type: "spring", duration: 1, delay: 1.6 }}>
				<a
					style={{ color: "inherit" }}
					target="_blank"
					rel="noopener noreferrer"
					href={"https://youtube.com"}>
					<div className="Social_Icons">
						<TfiTwitterAlt size={25} />
					</div>
				</a>
			</motion.div>

			<motion.span
				className="line"
				initial={{
					height: 0,
				}}
				animate={{
					height: "8rem",
				}}
				transition={{
					type: "spring",
					duration: 1,
					delay: 0.8,
				}}
			/>
		</div>
	);
};

export default SocialIcons;
