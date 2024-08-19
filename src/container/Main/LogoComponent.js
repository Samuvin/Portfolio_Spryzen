import React, { useState, useEffect } from "react";
import "./Logo.css";

const LogoComponent = () => {
	const [isDarkTheme, setIsDarkTheme] = useState(false);

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme === "dark") {
			document.body.classList.add("dark-theme");
			setIsDarkTheme(true);
		}
	}, []);

	const changeTheme = () => {
		const newTheme = !isDarkTheme ? "dark" : "light";
		setIsDarkTheme(!isDarkTheme);

		// Toggle theme on body
		if (newTheme === "dark") {
			document.body.classList.add("dark-theme");
			localStorage.setItem("theme", "dark");
			localStorage.setItem("particleColor", "#fff"); // Set particle color for dark theme
		} else {
			document.body.classList.remove("dark-theme");
			localStorage.setItem("theme", "light");
			localStorage.setItem("particleColor", "#43459d"); // Set particle color for light theme
		}

		// Trigger the storage event manually to update components in the same tab
		window.dispatchEvent(new Event("storage"));
	};

	return (
		<div>
			<h1 className="logo" onClick={changeTheme}>
				SJ
			</h1>
		</div>
	);
};

export default LogoComponent;
