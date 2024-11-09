import React, { useState } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import about01 from "../../assets/about01.png";
import "./Certificates.css";

// Define a local array to replace the backend data
const certificates = [
	{
		title: "Certificate 1",
		description: "Description of certificate 1.",
		imgUrl: about01, // Update with actual image path
		certificateLink: "https://certificate1.com",
		codeLink: "https://github.com/certificate1",
		tags: ["UI/UX", "Web App"],
	},
	{
		title: "Certificate 2",
		description: "Description of certificate 2.",
		imgUrl: about01, // Update with actual image path
		certificateLink: "https://certificate2.com",
		codeLink: "https://github.com/certificate2",
		tags: ["Mobile App", "React JS"],
	},
	// Add more certificates as needed
];

const Certificates = () => {
	const [filterCertificates, setFilterCertificates] = useState(certificates);
	const [activeFilter, setActiveFilter] = useState("All");
	const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

	const handleCertificateFilter = (item) => {
		setActiveFilter(item);
		setAnimateCard({ y: 100, opacity: 0 });

		setTimeout(() => {
			setAnimateCard({ y: 0, opacity: 1 });

			if (item === "All") {
				setFilterCertificates(certificates);
			} else {
				setFilterCertificates(
					certificates.filter((cert) => cert.tags.includes(item))
				);
			}
		}, 500);
	};

	return (
		<>
			<h2 className="head-text">
				My Achievements <span>Certificates</span> Section
			</h2>

			<div className="app__certificate-filter">
				{["UI/UX", "Web App", "Mobile App", "React JS", "All"].map(
					(item, index) => (
						<div
							key={index}
							onClick={() => handleCertificateFilter(item)}
							className={`app__certificate-filter-item app__flex p-text ${
								activeFilter === item ? "item-active" : ""
							}`}>
							{item}
						</div>
					)
				)}
			</div>

			<motion.div
				animate={animateCard}
				transition={{ duration: 0.5, delayChildren: 0.5 }}
				className="app__certificate-portfolio">
				{filterCertificates.map((cert, index) => (
					<div className="app__certificate-item app__flex" key={index}>
						<div className="app__certificate-img app__flex">
							<img src={cert.imgUrl} alt={cert.title} />

							<motion.div
								whileHover={{ opacity: [0, 1] }}
								transition={{
									duration: 0.25,
									ease: "easeInOut",
									staggerChildren: 0.5,
								}}
								className="app__certificate-hover app__flex">
								<a href={cert.certificateLink} target="_blank" rel="noreferrer">
									<motion.div
										whileInView={{ scale: [0, 1] }}
										whileHover={{ scale: [1, 0.9] }}
										transition={{ duration: 0.25 }}
										className="app__flex">
										<AiFillEye />
									</motion.div>
								</a>
								<a href={cert.codeLink} target="_blank" rel="noreferrer">
									<motion.div
										whileInView={{ scale: [0, 1] }}
										whileHover={{ scale: [1, 0.9] }}
										transition={{ duration: 0.25 }}
										className="app__flex">
										<AiFillGithub />
									</motion.div>
								</a>
							</motion.div>
						</div>

						<div className="app__certificate-content app__flex">
							<h4 className="bold-text">{cert.title}</h4>
							<p className="p-text" style={{ marginTop: 10 }}>
								{cert.description}
							</p>
						</div>
					</div>
				))}
			</motion.div>
		</>
	);
};

export default AppWrap(
	MotionWrap(Certificates, "app__certificates app__flex"),
	"certificates",
	"app__primarybg"
);
