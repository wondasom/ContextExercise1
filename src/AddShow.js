import React, { useState, useContext } from "react";
import { ShowContext } from "./ShowContext";

const AddShow = () => {
	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	const [shows, setShows] = useContext(ShowContext);

	const updateName = (e) => {
		setName(e.target.value);
	};

	const updatePrice = (e) => {
		setPrice(e.target.value);
	};

	const addShow = (e) => {
		e.preventDefault();
		setShows((prevShows) => [...prevShows, { name: name, price: price }]);
	};

	return (
		<form onSubmit={addShow}>
			<label for="name">Title of the show:</label>
			<input type='text' name='name' onChange={updateName}></input>
            <label for="price">Price:</label>
			<input type='text' name='price' onChange={updatePrice}></input>
			<button>SUBMIT</button>
		</form>
	);
};

export default AddShow;
