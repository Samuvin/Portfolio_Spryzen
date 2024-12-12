import React, { useRef, useEffect } from "react";
import "./Projects.css"; // Change file name accordingly
import { LiaAtomSolid } from "react-icons/lia";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { LuCodesandbox } from "react-icons/lu";
import { MdWebhook } from "react-icons/md";
import { motion, useInView, useAnimation } from "framer-motion";

const WorkIcon = () => (
	<div
		style={{
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			width: "50px",
			height: "50px",
		}}>
		<LiaAtomSolid
			style={{
				width: "80%",
				height: "80%",
				animation: "rotate 2s linear infinite",
			}}
		/>
	</div>
);

const fix = {
	background: "#6B6CBF",
	color: "#fff",
};

const TimelineElement = ({
	className,
	date,
	title,
	subtitle,
	content,
	icon,
	position,
}) => {
	const ref = useRef(null);
	const controls = useAnimation();

	const inView = useInView(ref, { triggerOnce: false, threshold: 0.5 });

	const slideUpContentVariants = {
		initial: { opacity: 0, y: "100%" }, // Start below the container
		animate: { opacity: 1, y: 0 }, // Move to the center of the container
		exit: { opacity: 0, y: "-100%" }, // Move above the container when exiting
	};

	// Update animation based on inView
	useEffect(() => {
		if (inView) {
			controls.start("animate");
		} else {
			controls.start("exit");
		}
	}, [inView, controls]);

	return (
		<VerticalTimelineElement
			position={position}
			className={className}
			date={date}
			iconStyle={fix}
			icon={icon}>
			<div
				className="timeline-content-container"
				style={{ overflow: "hidden" }}>
				<motion.div
					ref={ref}
					className="timeline-inner-content"
					variants={slideUpContentVariants} // Apply the defined animation variants to the content
					initial="initial"
					animate={controls} // Control animation based on view state
					transition={{ duration: 0.5, ease: "easeOut" }}>
					<h3 className="vertical-timeline-element-title">{title}</h3>
					<h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
					<p className="Element-content">{content}</p>
				</motion.div>
			</div>
		</VerticalTimelineElement>
	);
};

function Project() {
	return (
		<div className="Project_Container">
			<h1 className="timeline-heading">Projects</h1>
			<VerticalTimeline>
				<TimelineElement
					className="vertical-timeline-element--work"
					date={
						<>
							<span style={{ marginRight: "10px" }}>
								<a
									href="https://auro-connect-r9mk.onrender.com"
									target="_blank"
									rel="noopener noreferrer"
									style={{
										textDecoration: "none",
										color: "inherit",
										transition: "color 0.3s ease",
									}}>
									<LuCodesandbox
										size={25}
										style={{ cursor: "pointer" }}
										onMouseEnter={(e) =>
											(e.currentTarget.style.color = "#6B6CBF")
										}
										onMouseLeave={(e) =>
											(e.currentTarget.style.color = "inherit")
										}
									/>
								</a>
							</span>
							<span>
								<a
									href="https://github.com/Samuvin/Auro_Connect"
									target="_blank"
									rel="noopener noreferrer"
									style={{
										textDecoration: "none",
										color: "inherit",
										transition: "color 0.3s ease",
									}}>
									<MdWebhook
										size={25}
										style={{ cursor: "pointer" }}
										onMouseEnter={(e) =>
											(e.currentTarget.style.color = "#6B6CBF")
										}
										onMouseLeave={(e) =>
											(e.currentTarget.style.color = "inherit")
										}
									/>
								</a>
							</span>
						</>
					}
					title="Auro_Connect"
					subtitle="Dynamic social media platform"
					content={
						<div
							style={{
								maxHeight: "100px", // Adjust the height as needed
								overflowY: "scroll", // Enable vertical scrolling
								paddingRight: "10px",
								scrollbarWidth: "none", // For Firefox
								msOverflowStyle: "none", // For Internet Explorer
							}}>
							<ul>
								<li>
									<strong>Dynamic Social Platform for Programmers:</strong>
									Auro_Connect is a dedicated platform designed for programmers,
									fostering collaboration, focus, and consistency while
									minimizing distractions.
								</li>
								<li>
									<strong>Robust API Integration:</strong>
									Developed RESTful APIs to support seamless user interactions,
									enabling features such as posting updates, commenting, and
									tracking progress within a collaborative environment.
								</li>
								<li>
									<strong>Contest Wishlist & Reminders:</strong>
									Provides a contest wishlist feature where users can mark their
									favorite upcoming contests. Automated reminders ensure they
									stay informed and never miss important events.
								</li>
								<li>
									<strong>Interactive User Engagement:</strong>
									Allows programmers to share updates, engage with peers through
									comments, and build a supportive coding community.
								</li>
								<li>
									<strong>Focus on Productivity:</strong>
									The platform’s design prioritizes reducing distractions,
									helping users maintain a consistent focus on their goals and
									projects.
								</li>
							</ul>
						</div>
					}
					icon={<WorkIcon />}
					position="right"
				/>
				<TimelineElement
					className="vertical-timeline-element--work"
					date={
						<>
							<span style={{ marginRight: "10px" }}>
								<a
									href="https://devnexus-rare.onrender.com"
									target="_blank"
									rel="noopener noreferrer"
									style={{
										textDecoration: "none",
										color: "inherit",
										transition: "color 0.3s ease",
									}}>
									<LuCodesandbox
										size={25}
										style={{ cursor: "pointer" }}
										onMouseEnter={(e) =>
											(e.currentTarget.style.color = "#6B6CBF")
										}
										onMouseLeave={(e) =>
											(e.currentTarget.style.color = "inherit")
										}
									/>
								</a>
							</span>
							<span>
								<a
									href="https://github.com/Samuvin/DevNexus"
									target="_blank"
									rel="noopener noreferrer"
									style={{
										textDecoration: "none",
										color: "inherit",
										transition: "color 0.3s ease",
									}}>
									<MdWebhook
										size={25}
										style={{ cursor: "pointer" }}
										onMouseEnter={(e) =>
											(e.currentTarget.style.color = "#6B6CBF")
										}
										onMouseLeave={(e) =>
											(e.currentTarget.style.color = "inherit")
										}
									/>
								</a>
							</span>
						</>
					}
					title="Dev_Nexus"
					subtitle="Building Connections, Ensuring Integrity"
					content={
						<div
							style={{
								maxHeight: "100px", // Adjust the height as needed
								overflowY: "scroll", // Enable vertical scrolling
								paddingRight: "10px",
								scrollbarWidth: "none", // For Firefox
								msOverflowStyle: "none", // For Internet Explorer
							}}>
							<ul>
								<li>
									<strong>User Accounts & Profile Interaction:</strong>
									Users can create an account, explore profiles through
									interactive cards, and show interest or ignore other users.
								</li>
								<li>
									<strong>Reporting System:</strong>
									Users can report violations, view detailed reports on other
									users' rule violations, and track actions taken against them.
								</li>
								<li>
									<strong>Request Management:</strong>A page that shows incoming
									connection requests where users can accept or decline them,
									managing their network easily.
								</li>
							</ul>
						</div>
					}
					icon={<WorkIcon />}
					position="left"
				/>
				<TimelineElement
					className="vertical-timeline-element--work"
					date={
						<>
							<span style={{ marginRight: "10px" }}>
								<a
									href="https://contact-search-list.vercel.app"
									target="_blank"
									rel="noopener noreferrer"
									style={{
										textDecoration: "none",
										color: "inherit",
										transition: "color 0.3s ease",
									}}>
									<LuCodesandbox
										size={25}
										style={{ cursor: "pointer" }}
										onMouseEnter={(e) =>
											(e.currentTarget.style.color = "#6B6CBF")
										}
										onMouseLeave={(e) =>
											(e.currentTarget.style.color = "inherit")
										}
									/>
								</a>
							</span>
							<span>
								<a
									href="https://github.com/Samuvin/Contact_Search_List"
									target="_blank"
									rel="noopener noreferrer"
									style={{
										textDecoration: "none",
										color: "inherit",
										transition: "color 0.3s ease",
									}}>
									<MdWebhook
										size={25}
										style={{ cursor: "pointer" }}
										onMouseEnter={(e) =>
											(e.currentTarget.style.color = "#6B6CBF")
										}
										onMouseLeave={(e) =>
											(e.currentTarget.style.color = "inherit")
										}
									/>
								</a>
							</span>
						</>
					}
					title="AutoSuggest Contact"
					subtitle="Trie Data Structure"
					content={
						<div
							style={{
								maxHeight: "100px",
								overflowY: "scroll",
								paddingRight: "10px",
								scrollbarWidth: "none",
								msOverflowStyle: "none",
							}}>
							<ul>
								<li>
									<strong>Efficient Storage:</strong> Uses a Trie to store
									contact names, ensuring fast lookups and auto-suggestions.
								</li>
								<li>
									<strong>Real-Time Suggestions:</strong> As the user types,
									suggestions are displayed in real-time, making it easier to
									find contacts quickly.
								</li>
								<li>
									<strong>Contact Management:</strong> Supports adding and
									removing contacts dynamically.
								</li>
								<li>
									<strong>Scalable:</strong> The Trie data structure scales well
									with an increasing number of contacts, maintaining fast
									performance.
								</li>
							</ul>
						</div>
					}
					icon={<WorkIcon />}
					position="right"
				/>
				<VerticalTimelineElement
					className="vertical-timeline-element--empty"
					icon={<WorkIcon />}
					position="right"
				/>
			</VerticalTimeline>
		</div>
	);
}

export default Project;
