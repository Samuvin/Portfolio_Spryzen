import { motion } from "framer-motion";
import React from "react";
// import { a } from 'react-router-dom'
import { FaGithub } from "react-icons/fa";
import styled from "styled-components";
import { ImLinkedin } from "react-icons/im";
import { DarkTheme } from "./Themes";
import { TiSocialInstagram } from "react-icons/ti";
import { TfiTwitterAlt } from "react-icons/tfi";
const Icons = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	position: fixed;
	bottom: 0;
	left: 2rem;

	z-index: 3;

	& > *:not(:last-child) {
		margin: 0.5rem 0;
	}
`;

const Line = styled(motion.span)`
	width: 2px;
	height: 8rem;
	background-color: ${(props) =>
		props.color === "dark" ? DarkTheme.text : DarkTheme.body};
`;

const SocialIcons = (props) => {
	return (
		<Icons>
			<motion.div
				initial={{ scale: 0 }}
				animate={{ scale: [0, 1, 1.5, 1] }}
				transition={{ type: "spring", duration: 1, delay: 1 }}>
				<a
					style={{ color: "inherit" }}
					target="_blank"
					href={"https://github.com/codebucks27"}>
					<FaGithub
						size={25}
						color={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
					/>
				</a>
			</motion.div>
			<motion.div
				initial={{ scale: 0 }}
				animate={{ scale: [0, 1, 1.5, 1] }}
				transition={{ type: "spring", duration: 1, delay: 1.2 }}>
				<a
					style={{ color: "inherit" }}
					target="_blank"
					href={"https://twitter.com/code_bucks"}>
					<ImLinkedin
						size={25}
						color={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
					/>
				</a>
			</motion.div>
			<motion.div
				initial={{ scale: 0 }}
				animate={{ scale: [0, 1, 1.5, 1] }}
				transition={{ type: "spring", duration: 1, delay: 1.4 }}>
				<a
					style={{ color: "inherit" }}
					target="_blank"
					href={"https://facebook.com/codebucks27"}>
					<TiSocialInstagram
						size={30}
						color={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
					/>
				</a>
			</motion.div>
			<motion.div
				initial={{ scale: 0 }}
				animate={{ scale: [0, 1, 1.5, 1] }}
				transition={{ type: "spring", duration: 1, delay: 1.6 }}>
				<a
					style={{ color: "inherit" }}
					target="_blank"
					href={"https://youtube.com"}>
					<TfiTwitterAlt
						size={25}
						color={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
					/>
				</a>
			</motion.div>

			<Line
				color={props.theme}
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
		</Icons>
	);
};

export default SocialIcons;
