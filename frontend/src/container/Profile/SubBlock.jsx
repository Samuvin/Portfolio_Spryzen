import React, { useEffect, useState } from "react";
import Me from "./profile-img.png";
import { motion } from "framer-motion";
import "./SubBlock.css"; // Import the stylesheet

const SubBlock = () => {
	const [height, setHeight] = useState(0);
	const [opacity, setOpacity] = useState(0);

	useEffect(() => {
		setHeight("50vh");
		setTimeout(() => setOpacity(1), 2000); // delay for opacity transition
	}, []);

	return (
		<motion.div
			className={`box`}
			initial={{ height: 0 }}
			animate={{ height: "55vh" }}
			transition={{ type: "spring", duration: 2, delay: 1 }}
			style={{
				background: `linear-gradient(to right, #ffffff 50%, #000000 50%) 50% bottom,
                     linear-gradient(to right, #ffffff 50%, #000000 50%) top`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "100% 2px",
				borderLeft: "2px solid #ffffff",
				borderRight: "2px solid #000000",
			}}>
			<div className="sub-box">
				<div className="text" style={{ color: "#ffffff" }}>
					<h1>fds</h1>
					<h2>fds</h2>
					<h3>fds</h3>
				</div>
			</div>
			<div className="sub-box">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 2 }}>
					<img
						className={`pic ${opacity ? "img-visible" : ""}`}
						src={Me}
						alt=""
					/>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default SubBlock;
