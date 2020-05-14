import React, { useState, createContext } from "react";

export const ShowContext = createContext();

export const ShowProvider = (props) => {
	const [shows, setShows] = useState([
		{ name: "One Day at A Time", price: "$10", id: 23124 },
		{ name: "Unbreakable Kimmy Schmidt", price: "$12", id: 23125 },
		{ name: "Brooklyn Nine-Nine", price: "$8", id: 23126 },
		{ name: "Crazy Ex-Girlfriend", price: "$11", id: 23127 }
	]);

	return (
		<ShowContext.Provider value={[shows, setShows]}>
			{props.children}
		</ShowContext.Provider>
	);
};
