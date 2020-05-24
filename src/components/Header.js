import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Centered from './Centered';

const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Header = ({ className, children }) => {
	return (
		<Centered className={className}>
			<StyledHeader>{children}</StyledHeader>
		</Centered>
	);
};

Header.propTypes = {
	className: PropTypes.string,
	children: PropTypes.object,
	theme: PropTypes.object,
};

export default Header;
