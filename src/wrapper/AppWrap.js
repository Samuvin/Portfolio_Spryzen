import React, { lazy } from "react";
const SocialIcons = lazy(() => import("../container/Main/SocialIcons"));
const LogoComponent = lazy(() => import("../container/Main/LogoComponent"));

const AppWrap = (Component, idName, classNames) =>
	function HOC() {
		return (
			<div id={idName} className={`app__container ${classNames}`}>
				<SocialIcons />

				<Component />
			</div>
		);
	};

export default AppWrap;
