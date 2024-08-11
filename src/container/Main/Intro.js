import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Me from "./profile-img.png";
import "./Intro.css";

const Intro = () => {
	const [height, setHeight] = useState("55vh");

	useEffect(() => {
		if (window.matchMedia("(max-width: 50em)").matches) {
			setHeight("70vh");
		}
		if (window.matchMedia("(max-width: 20em)").matches) {
			setHeight("60vh");
		}
	}, []);

	return (
		<motion.div
			className="box"
			initial={{ height: 0 }}
			animate={{ height: height }}
			transition={{ type: "spring", duration: 2, delay: 1 }}>
			<div className="sub-box">
				<motion.div
					className="text"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 2 }}>
					<h1 className="Intro_Text">Hi,</h1>
					<h3 className="Intro_Text">I'm Spryzen.</h3>
					<h4 className="Intro_Text">
						I design and Code simple yet beautiful websites.
					</h4>
				</motion.div>
			</div>
			<div className="sub-box">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 2 }}>
					<img className="pic" src={Me} alt="My Pic" />
				</motion.div>
			</div>
		</motion.div>
	);
};

export default Intro;
