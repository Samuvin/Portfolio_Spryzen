import React from "react";
import "./Qualification.css";
import { LiaAtomSolid } from "react-icons/lia";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { AppWrap, MotionWrap } from "../../wrapper";

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
	return (
		<VerticalTimelineElement
			position={position}
			className={className}
			date={date}
			iconStyle={fix}
			icon={icon}>
			<div className="timeline-content-container">
				<div className="timeline-inner-content">
					<h3 className="vertical-timeline-element-title">{title}</h3>
					<h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
					<p className="Element-content">{content}</p>
				</div>
			</div>
		</VerticalTimelineElement>
	);
};

function App() {
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
				<VerticalTimelineElement
					iconStyle={{ background: "#343579", color: "#fff" }}
					icon={<WorkIcon />}
				/>
			</VerticalTimeline>
		</div>
	);
}

export default AppWrap(MotionWrap(App, "app__works"));
