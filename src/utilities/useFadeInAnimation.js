import React from 'react';
import { useSpring } from 'react-spring';

const useFadeInAnimation = () => {
	const animation = useSpring({
		from: { opacity: 0, transform: 'translateY(40px)' },
		to: { opacity: 1, transform: 'translateY(0px)' },
		delay: 1000
	});

	return animation;
};

export default useFadeInAnimation;
