import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Qualification.css";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const WorkIcon = () => (
	<motion.div
		className="vertical-timeline-element-icon motion"
		animate={{ rotate: [0, 360] }}
		transition={{ repeat: Infinity, duration: 2, ease: "linear" }}>
		fds
	</motion.div>
);

const fix = {
	background: "rgb(33, 150, 243)",
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
	const [isInView, setIsInView] = useState(false);

	const initialY = 20;
	const animateY = 0;

	return (
		<VerticalTimelineElement
			position={position}
			className={className}
			date={date}
			iconStyle={fix}
			icon={icon}>
			<motion.div
				onViewportEnter={() => setIsInView(true)}
				onViewportLeave={() => setIsInView(false)}
				initial={{ opacity: 0, y: initialY }}
				animate={
					isInView ? { opacity: 1, y: animateY } : { opacity: 0, y: initialY }
				}
				transition={{ duration: 0.5 }}
				className="timeline-content-container">
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					animate={
						isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
					}
					transition={{ duration: 0.5 }}
					className="timeline-inner-content">
					<h3 className="vertical-timeline-element-title">{title}</h3>
					<h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
					<p>{content}</p>
				</motion.div>
			</motion.div>
		</VerticalTimelineElement>
	);
};
export default function App() {
	return (
		<div className="App">
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
				<TimelineElement
					className="vertical-timeline-element--education"
					date="April 2013"
					title="Content Marketing for Web, Mobile and Social Media"
					subtitle="Online Course"
					content="Strategy, Social Media"
					icon={<WorkIcon />}
					position="right"
				/>
				<TimelineElement
					className="vertical-timeline-element--education"
					date="November 2012"
					title="Agile Development Scrum Master"
					subtitle="Certification"
					content="Creative Direction, User Experience, Visual Design"
					icon={<WorkIcon />}
					position="left"
				/>
				<TimelineElement
					className="vertical-timeline-element--education"
					date="2002 - 2006"
					title="Bachelor of Science in Interactive Digital Media Visual Imaging"
					subtitle="Bachelor Degree"
					content="Creative Direction, Visual Design"
					icon={<WorkIcon />}
					position="right"
				/>
				<VerticalTimelineElement
					iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
					icon={<WorkIcon />}
				/>
			</VerticalTimeline>
		</div>
	);
}
