import React, { useState, useEffect } from 'react';

const Details = ({ match }) => {
	useEffect(() => {
		fetchItem();
	}, []);

	const [ item, setItem ] = useState(null);

	const fetchItem = async () => {
		const fetchItem = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`);
		const singleItem = await fetchItem.json();
		const entries = singleItem.data;
		setItem(entries);
	};

	return (
		<div>
			{item && (
				<React.Fragment>
					<h1>Item Details</h1>
					<h3> {item.item.name} </h3>
					<p> {item.item.description} </p>
					<img src={item.item.images.background } alt="" />
				</React.Fragment>
			)}
		</div>
	);
};

export default Details;