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
	width: 100%;
	height: 100%;
	background-image: linear-gradient(20deg, #282c34 50%, #660909 50%);
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
