import React, { useState } from "react";
import "./Contest.css";
import { AppWrap, MotionWrap } from "../../wrapper";
import { IoIosCloseCircleOutline } from "react-icons/io";

const services = [
	{
		id: 1,
		icon: "uil-web-grid", // Use the icon class name
		title: "Ui/Ux Designer",
		description: [
			"I develop the user interface",
			"I develop the user interface",
			"Web Page Development",
			"I create interface",
		],
	},
	{
		id: 2,
		icon: "uil-arrow", // Use the icon class name
		title: "Frontend Developer",
		description: [
			"I develop the user interface",
			"I develop the user interface",
			"Web Page Development",
			"I create interface",
		],
	},
	{
		id: 3,
		icon: "uil-pen", // Use the icon class name
		title: "Branding Designer",
		description: [
			"I develop the user interface",
			"I develop the user interface",
			"Web Page Development",
			"I create interface",
		],
	},
	{
		id: 3,
		icon: "uil-pen", // Use the icon class name
		title: "Branding Designer",
		description: [
			"I develop the user interface",
			"I develop the user interface",
			"Web Page Development",
			"I create interface",
		],
	},
	{
		id: 3,
		icon: "uil-pen", // Use the icon class name
		title: "Branding Designer",
		description: [
			"I develop the user interface",
			"I develop the user interface",
			"Web Page Development",
			"I create interface",
		],
	},
	{
		id: 3,
		icon: "uil-pen", // Use the icon class name
		title: "Branding Designer",
		description: [
			"I develop the user interface",
			"I develop the user interface",
			"Web Page Development",
			"I create interface",
		],
	},
	{
		id: 3,
		icon: "uil-pen", // Use the icon class name
		title: "Branding Designer",
		description: [
			"I develop the user interface",
			"I develop the user interface",
			"Web Page Development",
			"I create interface",
		],
	},
];

const Contest = () => {
	const [openService, setOpenService] = useState(null);

	return (
		<section className="services section" id="services">
			<h2 className="section__title">Coding</h2>
			<span className="section__subtitle">Profiles</span>

			<div className="services__container container grid">
				{services.map((service) => (
					<div className="services__content" key={service.id}>
						<div>
							<i className={`uil ${service.icon} services__icon`}></i>
							<h3 className="services__title">
								{service.title.split(" ").map((line, index) => (
									<React.Fragment key={index}>
										{line} <br />
									</React.Fragment>
								))}
							</h3>
						</div>
						<span
							className="button button--flex button--small button--link services__button"
							onClick={() => setOpenService(service.id)}>
							View More
							<i className="uil uil-arrow-right button__icon"></i>
						</span>
						{openService === service.id && (
							<div className="services__modal active-modal">
								<div className="services__modal-content">
									<h4 className="services__modal-title">
										{service.title.split(" ").map((line, index) => (
											<React.Fragment key={index}>
												{line} <br />
											</React.Fragment>
										))}
									</h4>
									<IoIosCloseCircleOutline
										className="uil uil-times services__modal-close"
										onClick={() => setOpenService(null)}
									/>
									<ul className="services__modal-services grid">
										{service.description.map((item, index) => (
											<li className="services__modal-service" key={index}>
												<i className="uil uil-check-circle services__modal-icon"></i>
												<p>{item}</p>
											</li>
										))}
									</ul>
								</div>
							</div>
						)}
					</div>
				))}
			</div>
		</section>
	);
};

export default AppWrap(MotionWrap(Contest, "app__testimonial"), "testimonial");
