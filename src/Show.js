import React from "react";

const Show = ({ name, price }) => {
	return (
		<div className='showList'>
			<h3>{name}</h3>
			<p>{price}</p>
		</div>
	);
};

export default Show;
