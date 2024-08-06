// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
// 	About,
// 	Footer,
// 	Header,
// 	Skills,
// 	Testimonial,
// 	Works,
// 	Contest,
// 	Skillset,
// 	Qualification,
// 	Nav,
// } from "./container";
// import { Navbar } from "./Components";
// import "./App.scss";

// const App = () => {
// 	const [isOpen, setIsOpen] = useState(false);

// 	return (
// 		<div className="App">
// 			<Nav />
// 			<AnimatePresence>
// 				<Header key="new-page" />
// 				<Skillset />
// 				<Contest />
// 				<Qualification />
// 				<About />
// 				<Works />
// 				<Skills />
// 				<Testimonial />
// 				<Footer />
// 			</AnimatePresence>
// 		</div>
// 	);
// };

// export default App;

import React, { useState } from "react";
import TransitionEffect from "./Components/TransitionEffect";
import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import AboutPage from "./pages/Aboutpage";
import Projectspage from "./pages/Projectspage";
import Skillspage from "./pages/Skillspage";
import { Footer, Header, Nav } from "./container";
import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";
const App = () => {
	const location = useLocation(); // Get the current location

	return (
		<div className="App">
			{/* <Navbar /> */}
			<Nav />
			<AnimatePresence initial={false} mode="wait">
				<Routes location={location} key={location.pathname}>
					<Route path="/" element={<Header key="new-page" />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/skills" element={<Skillspage />} />
					<Route path="/projects" element={<Projectspage />} />
					<Route path="/contact" element={<Footer />} />
				</Routes>
				<TransitionEffect />
			</AnimatePresence>
		</div>
	);
};

export default App;
