import React from 'react';
import PropTypes from 'prop-types';

const ItemList = ({ items }) => {
	return (
		<ul>
			{items.map((item, index) => (
				<li key={index}>{item}</li>
			))}
		</ul>
	);
};

ProfileImage.propTypes = {
	items: PropTypes.array.isRequired
};

export default ItemList;
