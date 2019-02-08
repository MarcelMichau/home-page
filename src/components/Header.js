import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { useSpring, animated } from 'react-spring';
import Centered from './Centered';

const StyledHeader = styled.header`
	position: relative;
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

const Header = ({ className, children, theme }) => {
	const props = useSpring({
		backgroundImage: `linear-gradient(20deg, ${theme.primaryColour} 50%, ${
			theme.accentColour
		} 50%)`,
		from: {
			backgroundImage: `linear-gradient(0deg, ${theme.primaryColour} 50%, ${
				theme.primaryColour
			} 50%)`
		},
		delay: 2000
	});

	return (
		<Centered className={className}>
			<StyledHeader>
				<StyledGradient style={props} />
				<StyledIntro>{children}</StyledIntro>
			</StyledHeader>
		</Centered>
	);
};

Header.propTypes = {
	className: PropTypes.string,
	children: PropTypes.object,
	theme: PropTypes.object
};

export default withTheme(Header);
