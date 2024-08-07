import React from "react";
import TransitionEffect from "./Components/TransitionEffect";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AboutPage from "./pages/Aboutpage";
import Projectspage from "./pages/Projectspage";
import Skillspage from "./pages/Skillspage";
import { Footer, Header, Nav } from "./container";
import "./App.scss";

import { lazy, Suspense } from "react";
import Loading from "./container/Main/subComponents/Loading";

//Components
const Main = lazy(() => import("./container/Main/components/Main"));

const App = () => {
	const location = useLocation(); // Get the current location

	return (
		<Suspense fallback={<Loading />}>
			{location.pathname !== "/" && <Nav />}
			<div className="App">
				<AnimatePresence mode="wait">
					<Routes location={location} key={location.pathname}>
						<Route path="/" element={<Main />} />
						<Route path="/about" element={<AboutPage />} />
						<Route path="/skills" element={<Skillspage />} />
						<Route path="/projects" element={<Projectspage />} />
						<Route path="/contact" element={<Footer />} />
					</Routes>
				</AnimatePresence>
			</div>
		</Suspense>
	);
};

export default App;
