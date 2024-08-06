import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { StrictMode } from "react";
import App from "./App.jsx";
import "./index.css";
import "./styles/globals.css";

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
	<StrictMode>
		<Router>
			<App />
		</Router>
	</StrictMode>
);
