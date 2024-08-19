import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // Using loadSlim for a lightweight setup

const ParticleComponent = () => {
	const [init, setInit] = useState(false);
	const [color, setColor] = useState("#cbcce9"); // Initial color

	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadSlim(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);

	useEffect(() => {
		// Function to handle color change on classChange event
		const handleClassChange = () => {
			// Update the color based on some condition
			const newColor = document.body.classList.contains("dark-mode")
				? "#fff"
				: "#43459d";
			setColor(newColor);
		};

		// Listen for the classChange event
		document.body.addEventListener("classChange", handleClassChange);

		// Cleanup event listener on unmount
		return () => {
			document.body.removeEventListener("classChange", handleClassChange);
		};
	}, []);
	console.log(color);
	const options = useMemo(
		() => ({
			fpsLimit: 60,
			interactivity: {
				events: {
					onClick: {
						enable: true,
						mode: "push",
					},
					onHover: {
						enable: true,
						mode: "attract",
						parallax: {
							enable: false,
							force: 60,
							smooth: 10,
						},
					},
				},
				modes: {
					push: {
						quantity: 4,
					},
					attract: {
						distance: 200,
						duration: 0.4,
						factor: 5,
					},
				},
			},
			particles: {
				color: {
					value: color,
				},
				links: {
					color: color,
					distance: 150,
					enable: true,
					opacity: 0.4,
					width: 2,
				},
				move: {
					direction: "none",
					enable: true,
					outModes: {
						default: "out",
					},
					random: false,
					speed: 2,
					straight: false,
				},
				number: {
					density: {
						enable: true,
						value_area: 800,
					},
					value: 150,
				},
				opacity: {
					value: 0.5,
					animation: {
						enable: false,
					},
				},
				shape: {
					type: "circle",
				},
				size: {
					value: { min: 1, max: 5 },
					animation: {
						enable: false,
					},
				},
			},
			detectRetina: true,
		}),
		[color]
	);

	if (!init) return null;

	return <Particles id="tsparticles" options={options} />;
};

export default ParticleComponent;
