import React, { useState, useContext } from "react";
import Show from './Show';
import {ShowContext} from './ShowContext';

const ShowList = () => {
	
	const [shows, setShows] = useContext(ShowContext);

	return (
		<div className='showList'>
			{shows.map((show) => (
				<Show name={show.name} price={show.price} key={show.id}/>
			))}
		</div>
	);
};

export default ShowList;
