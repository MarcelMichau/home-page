import React from 'react';

type ItemListProps = {
	items: (string | JSX.Element)[];
};

const ItemList = ({ items }: ItemListProps) => {
	return (
		<ul>
			{items.map((item: string | JSX.Element, index: number) => (
				<li key={index}>{item}</li>
			))}
		</ul>
	);
};

export default ItemList;
