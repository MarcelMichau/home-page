import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledHeader = styled.header`
	position: relative;
	text-align: center;
	background-color: #282c34;
	color: #ffffff;
	font-size: 24px;
`;

const StyledGradient = styled.div`
	position: absolute;
	display: block;
	width: 100%;
	height: 100%;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;

	background-image: linear-gradient(to right, black, gray);
`;

const StyledIntro = styled.div`
	position: relative;
	z-index: 1;
`;

const Header = ({ className, children }) => (
	<StyledHeader className={className}>
		<StyledGradient />
		<StyledIntro>{children}</StyledIntro>
	</StyledHeader>
);

Header.propTypes = {
	className: PropTypes.string
};

export default Header;
