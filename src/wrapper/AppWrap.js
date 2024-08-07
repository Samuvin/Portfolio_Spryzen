import React, { lazy } from "react";
const SocialIcons = lazy(() =>
	import("../container/Main/subComponents/SocialIcons")
);
const LogoComponent = lazy(() =>
	import("../container/Main/subComponents/LogoComponent")
);

const AppWrap = (Component, idName, classNames) =>
	function HOC() {
		return (
			<div id={idName} className={`app__container ${classNames}`}>
				<SocialIcons />
				<LogoComponent />
				<Component />
			</div>
		);
	};

export default AppWrap;
