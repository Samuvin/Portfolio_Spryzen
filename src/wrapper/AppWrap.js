import React from "react";
import { SocialMedia } from "../Components";

const AppWrap = (Component, idName, classNames) =>
	function HOC() {
		return (
			<div id={idName} className={`app__container ${classNames}`}>
				<SocialMedia />
				<Component />
			</div>
		);
	};

export default AppWrap;
