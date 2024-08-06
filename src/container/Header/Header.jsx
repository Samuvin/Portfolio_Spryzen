// import React, { useState } from "react";
// import { motion } from "framer-motion";

// import { AppWrap } from "../../wrapper";
// import { images } from "../../constants";
// import "./Header.css";

// const scaleVariants = {
// 	whileInView: {
// 		scale: [0, 1],
// 		opacity: [0, 1],
// 		transition: {
// 			duration: 1,
// 			ease: "easeInOut",
// 		},
// 	},
// };

// const pageVariants = {
// 	initial: {
// 		opacity: 0,
// 		y: "-100vh",
// 	},
// 	in: {
// 		opacity: 1,
// 		y: 0,
// 	},
// 	out: {
// 		opacity: 0,
// 		y: "-100vh",
// 	},
// };

// const pageTransition = {
// 	type: "tween",
// 	ease: "easeInOut",
// 	duration: 0.5,
// };

// const Header = () => {
// 	const [click, setClick] = useState(false);
// 	const handleClick = () => setClick(!click);
// 	return (
// 		<>
// 			<div>
// 				<button
// 					style={{ zIndex: 2000 }}
// 					className={`center-button ${click ? "clicked" : ""}`}
// 					onClick={handleClick}>
// 					<YinYang
// 						width={click ? 120 : 200}
// 						height={click ? 120 : 200}
// 						fill="currentColor"
// 					/>
// 				</button>
// 				<motion.div
// 					className="app__header app__flex"
// 					initial="initial"
// 					animate={click ? "in" : "out"}
// 					exit="out"
// 					variants={pageVariants}
// 					transition={pageTransition}>
// 					<div className={`dark-div ${click ? "clicked" : ""}`} />

// 					<div className="app__header app__flex">
// 						<motion.div
// 							className="new-page"
// 							initial="initial"
// 							animate="in"
// 							exit="out"
// 							variants={pageVariants}
// 							transition={pageTransition}>
// 							<motion.div
// 								whileInView={{ x: [-100, 0], opacity: [0, 1] }}
// 								transition={{ duration: 0.5 }}
// 								className="app__header-info">
// 								<div className="app__header-badge">
// 									<div className="badge-cmp app__flex">
// 										<span>👋</span>
// 										<div style={{ marginLeft: 20 }}>
// 											<p className="p-text">Hello, I am</p>
// 											<h1 className="head-text">Samuvin Jenish</h1>
// 										</div>
// 									</div>

// 									<div className="tag-cmp app__flex">
// 										<p className="p-text">Web Developer</p>
// 										<p className="p-text">Freelancer</p>
// 									</div>
// 								</div>
// 							</motion.div>

// 							<motion.div
// 								whileInView={{ opacity: [0, 1] }}
// 								transition={{ duration: 0.5, delayChildren: 0.5 }}
// 								className="app__header-img">
// 								<img src={images.profile} alt="profile_bg" />
// 								<motion.img
// 									whileInView={{ scale: [0, 1] }}
// 									transition={{ duration: 1, ease: "easeInOut" }}
// 									src={images.circle}
// 									alt="profile_circle"
// 									className="overlay_circle"
// 								/>
// 							</motion.div>
// 						</motion.div>

// 						{/* <motion.div
// 							variants={scaleVariants}
// 							whileInView={scaleVariants.whileInView}
// 							className="app__header-circles">
// 							{[images.flutter, images.redux, images.sass].map(
// 								(circle, index) => (
// 									<div className="circle-cmp app__flex" key={`circle-${index}`}>
// 										<img src={circle} alt="profile_bg" />
// 									</div>
// 								)
// 							)}
// 						</motion.div> */}
// 					</div>
// 				</motion.div>
// 			</div>
// 		</>
// 	);
// };

// export const YinYang = (props) => {
// 	return (
// 		<svg
// 			aria-hidden="true"
// 			data-prefix="fas"
// 			data-icon="yin-yang"
// 			className="prefix__svg-inline--fa prefix__fa-yin-yang prefix__fa-w-16"
// 			xmlns="http://www.w3.org/2000/svg"
// 			viewBox="0 0 496 512"
// 			{...props}>
// 			<path
// 				fill={props.fill}
// 				d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 376c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm0-128c-53.02 0-96 42.98-96 96s42.98 96 96 96c-106.04 0-192-85.96-192-192S141.96 64 248 64c53.02 0 96 42.98 96 96s-42.98 96-96 96zm0-128c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32z"
// 			/>
// 		</svg>
// 	);
// };

// export default AppWrap(Header, "home");
import React, { useState } from "react";
import { motion } from "framer-motion";
import TransitionEffect from "../../Components/TransitionEffect";
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.css";

const scaleVariants = {
	whileInView: {
		scale: [0, 1],
		opacity: [0, 1],
		transition: {
			duration: 1,
			ease: "easeInOut",
		},
	},
};

const pageVariants = {
	initial: {
		opacity: 0,
		y: "-100vh",
	},
	in: {
		opacity: 1,
		y: 0,
	},
	out: {
		opacity: 0,
		y: "-100vh",
	},
};

const pageTransition = {
	type: "tween",
	ease: "easeInOut",
	duration: 0.5,
};

const Header = () => {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);

	return (
		<>
			<div>
				<TransitionEffect />
				<button
					style={{ zIndex: 100 }}
					className={`center-button ${click ? "clicked" : ""}`}
					onClick={handleClick}>
					<YinYang
						width={click ? 120 : 200}
						height={click ? 120 : 200}
						fill="currentColor"
					/>
				</button>
				<motion.div
					className="app__header app__flex"
					initial="initial"
					animate={click ? "in" : "out"}
					exit="out"
					variants={pageVariants}
					transition={pageTransition}>
					<div className={`dark-div ${click ? "clicked" : ""}`} />

					<div className="app__header app__flex">
						<motion.div
							className="new-page"
							initial="initial"
							animate="in"
							exit="out"
							variants={pageVariants}
							transition={pageTransition}>
							<motion.div
								whileInView={{ x: [-100, 0], opacity: [0, 1] }}
								transition={{ duration: 0.5 }}
								className="app__header-info">
								<div className="app__header-badge">
									<div className="badge-cmp app__flex">
										<span>👋</span>
										<div style={{ marginLeft: 20 }}>
											<p className="p-text">Hello, I am</p>
											<h1 className="head-text">Samuvin Jenish</h1>
										</div>
									</div>

									<div className="tag-cmp app__flex">
										<p className="p-text">Web Developer</p>
										<p className="p-text">Freelancer</p>
									</div>
								</div>
							</motion.div>

							<motion.div
								whileInView={{ opacity: [0, 1] }}
								transition={{ duration: 0.5, delayChildren: 0.5 }}
								className="app__header-img">
								<img src={images.profile} alt="profile_bg" />
								<motion.img
									whileInView={{ scale: [0, 1] }}
									transition={{ duration: 1, ease: "easeInOut" }}
									src={images.circle}
									alt="profile_circle"
									className="overlay_circle"
								/>
							</motion.div>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</>
	);
};

export const YinYang = (props) => {
	return (
		<svg
			aria-hidden="true"
			data-prefix="fas"
			data-icon="yin-yang"
			className="prefix__svg-inline--fa prefix__fa-yin-yang prefix__fa-w-16"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 496 512"
			{...props}>
			<path
				fill={props.fill}
				d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 376c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm0-128c-53.02 0-96 42.98-96 96s42.98 96 96 96c-106.04 0-192-85.96-192-192S141.96 64 248 64c53.02 0 96 42.98 96 96s-42.98 96-96 96zm0-128c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32z"
			/>
		</svg>
	);
};

export default AppWrap(Header, "home");
