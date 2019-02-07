import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';

const StyledHeader = styled.header`
	position: relative;
	text-align: center;
	background-color: #282c34;
	color: #ffffff;
	font-size: 24px;
`;

const StyledGradient = styled(animated.div)`
	position: absolute;
	width: 100%;
	height: 100%;
`;

const StyledIntro = styled.div`
	position: relative;
	z-index: 1;
`;

const Header = ({ className, children }) => {
	const props = useSpring({
		backgroundImage: 'linear-gradient(20deg, #282c34 50%, #660909 50%)',
		from: {
			backgroundImage: 'linear-gradient(0deg, #282c34 50%, #282c34 50%)'
		},
		delay: 2000
	});

	return (
		<StyledHeader className={className}>
			<StyledGradient style={props} />
			<StyledIntro>{children}</StyledIntro>
		</StyledHeader>
	);
};

Header.propTypes = {
	className: PropTypes.string
};

export default Header;
