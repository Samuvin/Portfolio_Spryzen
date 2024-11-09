import React, { lazy, Suspense, useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
import Intro from "./Intro";
import Loading from "./Loading";
import "./Main.css";
import AboutPage from "../../pages/Aboutpage";
import Projectspage from "../../pages/Projectspage";
import Skillspage from "../../pages/Skillspage";
import Contact from "../Contact/Contact";
import TransitionEffect from "../../Components/TransitionEffect";
import ParticleComponent from "./Particle";
const SocialIcons = lazy(() => import("./SocialIcons"));
const LogoComponent = lazy(() => import("./LogoComponent"));

const Main = () => {
	const [click, setClick] = useState(false);
	const [path, setPath] = useState("");

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
		<Route path="/contact" element={<Contact />} />
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
				<ParticleComponent backgroundColor="#000000" particleColor="#ff0000" />

				<div className="container">
					<LogoComponent theme={click ? "dark" : "dark"} />

					{mq ? <SocialIcons /> : <SocialIcons />}
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

				<Intro />
			</motion.div>
		</Suspense>
	);
};

export default Main;
