import React, {useContext} from "react";
import {ShowContext} from './ShowContext';


const Nav = () => {
    const [shows, setShows] = useContext(ShowContext);

	return (
		<div className="navBar">
            <h3>Your Name</h3>
            <p>List of Shows on Netflix: {shows.length}</p>
		</div>
	);
};

export default Nav;
