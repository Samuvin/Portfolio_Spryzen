import React, { useEffect, useRef } from "react";
import profile from "./img.jpg";
import { useInView, useMotionValue, useSpring, motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Profile.css";

function AnimatedNumberFramerMotion({ value }) {
	const ref = useRef(null);
	const motionValue = useMotionValue(0);
	const springValue = useSpring(motionValue, { duration: 3000 });
	const isInView = useInView(ref, { once: true });

	useEffect(() => {
		if (isInView) {
			motionValue.set(value);
		}
	}, [motionValue, value, isInView]);

	useEffect(() => {
		return springValue.on("change", (latest) => {
			if (ref.current && latest.toFixed(0) <= value) {
				ref.current.textContent = latest.toFixed(0);
			}
		});
	}, [springValue, value]);

	return <span ref={ref} className="animated-number" />;
}

function About() {
	return (
		<main className="about-container">
			<AnimatedText text="Passion Fuels Purpose!" className="animated-text" />

			<div className="grid-container">
				<motion.div
					className="biography-section"
					initial={{ opacity: 0, x: -100 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 1 }}>
					<h2 className="bio-heading">BIOGRAPHY</h2>
					<p className="bio-text">
						Hi, I&apos;m <strong className="highlighted-text">CodeBucks</strong>
						, a web developer and UI/UX designer with a passion for creating
						stunning, functional, and user-centered digital experiences.
					</p>
					<p className="bio-text">
						With{" "}
						<strong className="highlighted-text">4 years of experience</strong>{" "}
						in the industry, I am always eager to find new and innovative
						solutions to bring my clients&apos; visions to life.
					</p>
					<p className="bio-text">
						Design, to me, is not just about aesthetics; it&apos;s about
						crafting intuitive, problem-solving experiences that users enjoy.
					</p>
					<p className="bio-text">
						Whether working on a website, mobile app, or other digital product,
						I bring my dedication to design excellence and user-centric thinking
						to every project. I am excited to bring my skills and passion to
						your next project.
					</p>
				</motion.div>

				<motion.article
					className="image-section"
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1.5 }}>
					<motion.img
						className="profile-image"
						src={profile}
						alt="Codebucks"
						initial={{ opacity: 0, x: 100 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 1.2 }}
					/>
				</motion.article>

				<div className="stats-section">
					<motion.div
						className="stats-item"
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.3 }}>
						<span className="stat-number">
							<AnimatedNumberFramerMotion value={40} />+
						</span>
						<h2 className="stat-title">Satisfied Clients</h2>
					</motion.div>

					<motion.div
						className="stats-item"
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.6 }}>
						<span className="stat-number">
							<AnimatedNumberFramerMotion value={50} />+
						</span>
						<h2 className="stat-title">Projects Completed</h2>
					</motion.div>

					<motion.div
						className="stats-item"
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.9 }}>
						<span className="stat-number">
							<AnimatedNumberFramerMotion value={4} />+
						</span>
						<h2 className="stat-title">Years of Experience</h2>
					</motion.div>
				</div>
			</div>
		</main>
	);
}

export default AppWrap(MotionWrap(About, "app__about app__flex"), "about");
