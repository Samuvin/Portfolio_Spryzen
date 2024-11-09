import React, { useState } from "react";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Contact.css";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);

	const { name, email, message } = formData;

	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = () => {
		setLoading(true);

		// Simulate an API call or other logic
		setTimeout(() => {
			setLoading(false);
			setIsFormSubmitted(true);
		}, 1000); // Simulate a delay (e.g., 1 second)
	};

	return (
		<>
			<h2 className="head-text">Contact Me</h2>

			<div className="app__contact-cards">
				<div className="app__contact-card">
					<img src={images.email} alt="email" />
					<a href="mailto:samuvin.j@gmail.com" className="Intro-text">
						samuvin.j@gmail.com
					</a>
				</div>
				<div className="app__contact-card">
					<img src={images.mobile} alt="phone" />
					<a href="tel:+91 9876543210" className="Intro-text">
						+91 9876543210
					</a>
				</div>
			</div>

			{!isFormSubmitted ? (
				<div className="app__contact-form app__flex">
					<div className="app__flex">
						<input
							className="Name-text"
							type="text"
							placeholder="Your Name"
							name="name"
							value={name}
							onChange={handleChangeInput}
						/>
					</div>
					<div className="app__flex">
						<input
							className="p-text"
							type="email"
							placeholder="Your Email"
							name="email"
							value={email}
							onChange={handleChangeInput}
						/>
					</div>
					<div>
						<textarea
							className="p-text"
							placeholder="Your Message"
							value={message}
							name="message"
							onChange={handleChangeInput}
						/>
					</div>
					<button type="button" className="p-text" onClick={handleSubmit}>
						{!loading ? "Send Message" : "Sending..."}
					</button>
				</div>
			) : (
				<div>
					<h3 className="head-text">Thank you for getting in touch!</h3>
				</div>
			)}
		</>
	);
};

export default AppWrap(
	MotionWrap(Contact, "app__contact app__flex"),
	"contact",
	"app__whitebg"
);
