import React from "react";
import "./Logo.css";

const LogoComponent = (props) => {
	const theme = props.theme === "dark" ? "dark" : "light";

	return (
		<h1 className="logo" data-theme={theme}>
			SJ
		</h1>
	);
};

export default LogoComponent;
