import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import FirebaseAuth from "./firebaseAuth/FirebaseAuth";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<FirebaseAuth>
			<App />
		</FirebaseAuth>
	</React.StrictMode>
);
