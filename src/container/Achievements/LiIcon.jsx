import { motion, useScroll } from "framer-motion";
import "./Lilcon.css"; // Ensure this path is correct

const LiIcon = ({ reference }) => {
	const { scrollYProgress } = useScroll({
		target: reference,
		offset: ["center end", "center center"],
		layoutEffect: false,
	});

	return (
		<figure className="icon-container">
			<svg className="icon-svg" width="75" height="75" viewBox="0 0 100 100">
				<circle
					cx="75"
					cy="50"
					r="20"
					pathLength="1"
					className="icon-circle-bg"
				/>
				<motion.circle
					cx="75"
					cy="50"
					r="20"
					pathLength="1"
					className="icon-circle-fill"
					style={{ pathLength: scrollYProgress }}
				/>
				<circle
					cx="75"
					cy="50"
					r="10"
					pathLength="1"
					className="icon-center-circle"
				/>
			</svg>
		</figure>
	);
};

export default LiIcon;
