import React, { useState, useEffect } from "react";
import "./App.css";

import ShowList from "./ShowList";
import Nav from "./Nav";
import { ShowProvider } from "./ShowContext";
import AddShow from "./AddShow";

function App() {
	const [darkMode, setDarkMode] = useState(getInitialMode());

	useEffect(() => {
		localStorage.setItem("dark", JSON.stringify(darkMode));
	}, [darkMode]);

	// Question regarding 'getInitialMode' function; when I declare the function using arrow function, it causes an error.
	function getInitialMode() {
		const isReturningUser = "dark" in localStorage;
		const savedMode = JSON.parse(localStorage.getItem("dark"));
		const userPrefersDark = getPrefColorScheme();
		// if the mode was saved => dark / light
		if (isReturningUser) {
			return savedMode;
		// if prefered color scheme is dark => dark
		} else if (userPrefersDark) {
			return true;
		// otherwise, light
		} else {
			return false;
		}
	}

	function getPrefColorScheme() {
		if (!window.matchMedia) return;
		return window.matchMedia("(prefers-color-scheme: dark)").matches;
	}

	return (
		<ShowProvider>
			<div className='App'>
				<div className={darkMode ? "dark-mode" : "light-mode"}>
					<Nav />
					<div className='toggle-container'>
						<button onClick={() => setDarkMode((prevMode) => !prevMode)}>
							Toggle
						</button>
					</div>
					<p>{darkMode ? "Dark Mode" : "Light Mode"}</p>
					<AddShow />
					<ShowList />
				</div>
			</div>
		</ShowProvider>
	);
}

export default App;
