import React, { lazy, Suspense, useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
import Intro from "./Intro";
import Loading from "../subComponents/Loading";
import "./Main.scss";
import AtomModel from "../Atommodel";
import AboutPage from "../../../pages/Aboutpage";
import Projectspage from "../../../pages/Projectspage";
import Skillspage from "../../../pages/Skillspage";
import Footer from "../../footer/Footer";
import { images } from "../../../constants";
import TransitionEffect from "../../../Components/TransitionEffect";

const SocialIcons = lazy(() => import("./../subComponents/SocialIcons"));
const LogoComponent = lazy(() => import("./../subComponents/LogoComponent"));

const Main = () => {
	const [click, setClick] = useState(false);
	const [path, setPath] = useState("");

	const handleClick = () => setClick(!click);
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

	const pageTransition = {
		type: "tween",
		ease: "easeInOut",
		duration: 0.5,
	};
	const moveY = {
		y: "-100%",
	};
	const moveX = {
		x: `${path === "work" ? "100%" : "-100%"}`,
	};
	const mq = window.matchMedia("(max-width: 50em)").matches;
	<Routes>
		<Route path="/about" element={<AboutPage />} />
		<Route path="/skills" element={<Skillspage />} />
		<Route path="/projects" element={<Projectspage />} />
		<Route path="/contact" element={<Footer />} />
	</Routes>;
	return (
		<Suspense fallback={<Loading />}>
			<TransitionEffect />
			<motion.div
				className="main-container"
				key="modal"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={path === "about" || path === "skills" ? moveY : moveX}
				transition={{ duration: 0.5 }}>
				<div className={`darkdiv ${click ? "click" : ""}`} />
				<div className="container">
					<LogoComponent theme={click ? "dark" : "light"} />

					{mq ? (
						<SocialIcons theme="light" />
					) : (
						<SocialIcons theme={click ? "dark" : "light"} />
					)}

					<div className="header-container">
						{!click && (
							<motion.div
								variants={scaleVariants}
								whileInView={scaleVariants.whileInView}
								className="app__header-circles left">
								{[images.flutter, images.redux, images.sass].map(
									(circle, index) => (
										<div
											className="circle-cmp1 app__flex"
											key={`circle-${index}`}>
											<img src={circle} alt={`circle-${index}`} />
										</div>
									)
								)}
							</motion.div>
						)}

						<button
							className={`center-button ${click ? "clicked" : ""}`}
							onClick={handleClick}>
							<AtomModel
								width={click ? 80 : 150}
								height={click ? 80 : 150}
								onClick={handleClick}
							/>
						</button>

						{!click && (
							<motion.div
								variants={scaleVariants}
								whileInView={scaleVariants.whileInView}
								className="app__header-circles right">
								{[images.flutter, images.redux, images.sass].map(
									(circle, index) => (
										<div
											className="circle-cmp app__flex"
											key={`circle-${index}`}>
											<img src={circle} alt={`circle-${index}`} />
										</div>
									)
								)}
							</motion.div>
						)}
					</div>
					<a
						className={`contact ${click ? "click" : ""}`}
						target="_blank"
						href="mailto:samuvin.j@gmail.com">
						<motion.h3
							initial={{
								y: -200,
								transition: { type: "spring", duration: 1.5, delay: 1 },
							}}
							animate={{
								y: 0,
								transition: { type: "spring", duration: 1.5, delay: 1 },
							}}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}>
							Say hi..
						</motion.h3>
					</a>

					<NavLink
						className={`blog ${click ? "click" : ""}`}
						onClick={() => setPath("about")}
						to="/about">
						<motion.h2
							initial={{
								y: -200,
								transition: { type: "spring", duration: 1.5, delay: 1 },
							}}
							animate={{
								y: 0,
								transition: { type: "spring", duration: 1.5, delay: 1 },
							}}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}>
							About
						</motion.h2>
					</NavLink>

					<NavLink
						className={`work ${click ? "click" : ""}`}
						onClick={() => setPath("about")}
						to="/contact">
						<motion.h2
							onClick={() => setPath("work")}
							initial={{
								y: -200,
								transition: { type: "spring", duration: 1.5, delay: 1 },
							}}
							animate={{
								y: 0,
								transition: { type: "spring", duration: 1.5, delay: 1 },
							}}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}>
							Contact
						</motion.h2>
					</NavLink>

					<div className="bottombar">
						<NavLink
							className={`skills ${mq ? "" : click ? "click" : ""}`}
							onClick={() => setClick(false)}
							to="/skills">
							<motion.h2
								onClick={() => setPath("about")}
								initial={{
									y: 200,
									transition: { type: "spring", duration: 1.5, delay: 1 },
								}}
								animate={{
									y: 0,
									transition: { type: "spring", duration: 1.5, delay: 1 },
								}}
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}>
								Skills.
							</motion.h2>
						</NavLink>

						<NavLink
							className={`skills ${mq ? "" : click ? "click" : ""}`}
							onClick={() => setClick(false)}
							to="/projects">
							<motion.h2
								onClick={() => setPath("skills")}
								initial={{
									y: 200,
									transition: { type: "spring", duration: 1.5, delay: 1 },
								}}
								animate={{
									y: 0,
									transition: { type: "spring", duration: 1.5, delay: 1 },
								}}
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}>
								Project.
							</motion.h2>
						</NavLink>
					</div>
				</div>

				{click ? <Intro click={click} /> : null}
			</motion.div>
		</Suspense>
	);
};

export default Main;
