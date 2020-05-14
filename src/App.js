import React from "react";
import "./App.css";

import ShowList from "./ShowList";
import Nav from "./Nav";
import { ShowProvider } from "./ShowContext";
import AddShow from './AddShow';

function App() {
	return (
		<ShowProvider>
			<div className='App'>
				<Nav />
        <AddShow />
				<ShowList />
			</div>
		</ShowProvider>
	);
}

export default App;
