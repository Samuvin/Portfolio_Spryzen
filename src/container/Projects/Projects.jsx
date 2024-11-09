import React, { useRef, useEffect } from "react";
import "./Projects.css"; // Change file name accordingly
import { LiaAtomSolid } from "react-icons/lia";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { AppWrap, MotionWrap } from "../../wrapper";
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
				animation: "rotate 2s linear infinite", // Apply the rotation animation
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
	// Ref for the element
	const ref = useRef(null);
	// Animation controls
	const controls = useAnimation();
	// Check if the element is in view with a threshold of 50%
	const inView = useInView(ref, { triggerOnce: false, threshold: 0.5 });

	// Slide up and out variants for content
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
					date="2011 - present"
					title="Creative Director"
					subtitle="Miami, FL"
					content="Creative Direction, User Experience, Visual Design, Project Management, Team Leading"
					icon={<WorkIcon />}
					position="right"
				/>
				<TimelineElement
					className="vertical-timeline-element--work"
					date="2010 - 2011"
					title="Art Director"
					subtitle="San Francisco, CA"
					content="Creative Direction, User Experience, Visual Design, SEO, Online Marketing"
					icon={<WorkIcon />}
					position="left"
				/>
				<TimelineElement
					className="vertical-timeline-element--work"
					date="2008 - 2010"
					title="Web Designer"
					subtitle="Los Angeles, CA"
					content="User Experience, Visual Design"
					icon={<WorkIcon />}
					position="right"
				/>
				<TimelineElement
					className="vertical-timeline-element--work"
					date="2006 - 2008"
					title="Web Designer"
					subtitle="San Francisco, CA"
					content="User Experience, Visual Design"
					icon={<WorkIcon />}
					position="left"
				/>
			</VerticalTimeline>
		</div>
	);
}

export default Project;
