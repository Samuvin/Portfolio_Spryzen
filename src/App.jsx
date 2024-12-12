import React from "react";
import TransitionEffect from "./Components/TransitionEffect";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AboutPage from "./pages/Aboutpage";
import Projectspage from "./pages/Projectspage";
import Skillspage from "./pages/Skillspage";
import { Navbar } from "./container";
import "./App.css";
import ContatcPage from "./pages/ContatcPage";
import { lazy, Suspense } from "react";
import Loading from "./container/Main/Loading";

const Main = lazy(() => import("./container/Main/Main"));

const App = () => {
	const location = useLocation();

	return (
		<Suspense fallback={<Loading />}>
			{location.pathname !== "/" && <Navbar />}
			<div className="App">
				<AnimatePresence mode="wait">
					<Routes location={location} key={location.pathname}>
						<Route path="/" element={<Main />} />
						<Route path="/about" element={<AboutPage />} />
						<Route path="/skills" element={<Skillspage />} />
						<Route path="/projects" element={<Projectspage />} />
						<Route path="/contact" element={<ContatcPage />} />
					</Routes>
				</AnimatePresence>
			</div>
		</Suspense>
	);
};

export default App;
