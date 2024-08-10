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
		setIsDarkTheme(!isDarkTheme);
		if (!isDarkTheme) {
			document.body.classList.add("dark-theme");
			localStorage.setItem("theme", "dark");
		} else {
			document.body.classList.remove("dark-theme");
			localStorage.setItem("theme", "light");
		}
	};
	return (
		<h1 className="logo" onClick={changeTheme}>
			SJ
		</h1>
	);
};

export default LogoComponent;
