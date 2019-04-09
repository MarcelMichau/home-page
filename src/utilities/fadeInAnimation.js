import { useSpring } from 'react-spring';

const fadeInAnimation = useSpring({
	from: { opacity: 0, transform: 'translateY(40px)' },
	to: { opacity: 1, transform: 'translateY(0px)' },
	delay: 1000
});

export default fadeInAnimation;
