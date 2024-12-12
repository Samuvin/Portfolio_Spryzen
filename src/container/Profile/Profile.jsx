import React, { useEffect, useRef } from "react";
import profile from "../../assets/profile.jpg";
import { useInView, useMotionValue, useSpring, motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
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
						Hi, I&apos;m <strong className="highlighted-text">Samuvin</strong>,
						a passionate web developer dedicated to creating stunning,
						functional, and user-centered digital experiences. My unique
						combination of skills sets me apart in the tech industry.
					</p>
					<p className="bio-text">
						My primary focus lies in{" "}
						<strong className="highlighted-text">
							competitive programming
						</strong>
						, where I thrive on solving complex challenges and refining my
						coding abilities. This rigorous discipline not only sharpens my
						technical skills but also enhances my analytical thinking—an
						invaluable asset in any development environment.
					</p>
					<p className="bio-text">
						In addition to my programming expertise, I actively engage in{" "}
						<strong className="highlighted-text">
							public speaking as a Toastmaster
						</strong>
						. This experience has equipped me with the confidence and clarity to
						communicate ideas effectively, ensuring that I can collaborate
						seamlessly with teams and present concepts in a compelling manner.
					</p>
					<p className="bio-text">
						I excel in the{" "}
						<strong className="highlighted-text">MERN stack</strong>, crafting
						digital experiences that are both visually appealing and highly
						functional. While I am a recent college graduate with no
						professional experience, my commitment to continuous learning and
						growth has armed me with the skills and mindset needed to make a
						meaningful impact.
					</p>
					<p className="bio-text">
						I am eager to bring my unique blend of problem-solving,
						communication, and technical expertise to your team. With a strong
						desire to contribute and innovate, I am ready to take on new
						challenges and help drive success in your organization.
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
							<AnimatedNumberFramerMotion value={2200} />+
						</span>
						<h2 className="stat-title">Problems Solved</h2>
					</motion.div>

					<motion.div
						className="stats-item"
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.6 }}>
						<span className="stat-number">
							<AnimatedNumberFramerMotion value={200} />+
						</span>
						<h2 className="stat-title">Contest Attended</h2>
					</motion.div>

					<motion.div
						className="stats-item"
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.9 }}>
						<span className="stat-number">
							<AnimatedNumberFramerMotion value={5} />+
						</span>
						<h2 className="stat-title">Coading Hackathons</h2>
					</motion.div>
				</div>
			</div>
		</main>
	);
}

export default About;
