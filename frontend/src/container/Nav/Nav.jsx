import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import { MoonIcon, SunIcon } from "./Icons";
import { RiAppsLine } from "react-icons/ri";
import "./Nav.css";
import { BiHome } from "react-icons/bi";
import { TbUserHexagon } from "react-icons/tb";
import { GrTechnology } from "react-icons/gr";
import { VscGitPullRequest, VscLiveShare } from "react-icons/vsc";
import { GiPerpendicularRings } from "react-icons/gi";
const MotionLink = motion(Link);

const Nav = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isDarkTheme, setIsDarkTheme] = useState(false);
	const location = useLocation(); // Get the current location

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme === "dark") {
			document.body.classList.add("dark-theme");
			setIsDarkTheme(true);
		}
	}, []);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	const changeTheme = () => {
		setIsDarkTheme(!isDarkTheme);
		if (!isDarkTheme) {
			document.body.classList.add("dark-theme");
			localStorage.setItem("theme", "dark");
		} else {
			document.body.classList.remove("dark-theme");
			localStorage.setItem("theme", "light");
		}
	};

	// Determine active link
	const getNavLinkClass = (path) => {
		return location.pathname === path ? "nav__link active-link" : "nav__link";
	};

	return (
		<header className="header nav_main" id="header">
			<nav className="nav container">
				<a href="#" className="nav__logo">
					Spryzen
				</a>

				<div
					className={`nav__menu ${isMenuOpen ? "show-menu" : ""}`}
					id="nav-menu">
					<ul className="nav__list grid">
						<li className="nav__item">
							<MotionLink
								to="/"
								className={getNavLinkClass("/")}
								onClick={closeMenu}
								initial={{ opacity: 0, y: -10 }} // Initial state
								animate={{ opacity: 1, y: 0 }} // Animated state
								transition={{ duration: 0.3 }} // Transition duration
							>
								<BiHome className="nav__icon" /> Home
							</MotionLink>
						</li>
						<li className="nav__item">
							<MotionLink
								to="/about"
								className={getNavLinkClass("/about")}
								onClick={closeMenu}
								initial={{ opacity: 0, y: -10 }} // Initial state
								animate={{ opacity: 1, y: 0 }} // Animated state
								transition={{ duration: 0.3 }} // Transition duration
							>
								<TbUserHexagon className="nav__icon" /> About
							</MotionLink>
						</li>
						<li className="nav__item">
							<MotionLink
								to="/skills"
								className={getNavLinkClass("/skills")}
								onClick={closeMenu}
								initial={{ opacity: 0, y: -10 }} // Initial state
								animate={{ opacity: 1, y: 0 }} // Animated state
								transition={{ duration: 0.3 }} // Transition duration
							>
								<GrTechnology className="nav__icon" /> Skills
							</MotionLink>
						</li>
						<li className="nav__item">
							<MotionLink
								to="/projects"
								className={getNavLinkClass("/projects")}
								onClick={closeMenu}
								initial={{ opacity: 0, y: -10 }} // Initial state
								animate={{ opacity: 1, y: 0 }} // Animated state
								transition={{ duration: 0.3 }} // Transition duration
							>
								<VscGitPullRequest className="nav__icon" /> Projects
							</MotionLink>
						</li>
						<li className="nav__item">
							<MotionLink
								to="/contact"
								className={getNavLinkClass("/contact")}
								onClick={closeMenu}
								initial={{ opacity: 0, y: -10 }} // Initial state
								animate={{ opacity: 1, y: 0 }} // Animated state
								transition={{ duration: 0.3 }} // Transition duration
							>
								<VscLiveShare className="nav__icon" /> Contact
							</MotionLink>
						</li>
					</ul>
					<GiPerpendicularRings
						className="nav__close"
						id="nav-close"
						onClick={toggleMenu}
					/>
				</div>

				<div className="nav__btns">
					<button
						onClick={changeTheme}
						className="theme-switcher-button"
						aria-label="theme-switcher">
						{isDarkTheme ? (
							<SunIcon className="fill-dark w-full h-auto" />
						) : (
							<MoonIcon className="fill-dark w-full h-auto" />
						)}
					</button>

					<div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
						<RiAppsLine size={24} />
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Nav;
