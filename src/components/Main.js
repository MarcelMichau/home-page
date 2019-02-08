import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { lighten } from 'polished';
import { fontColour, secondaryColour } from '../styles/palettes';

const StyledMain = styled.main`
	display: flex;
	align-items: center;
	flex-direction: column;
	padding-top: 1em;
	padding-left: 20px;
	padding-right: 20px;
	max-width: 800px;
	margin: 0 auto;
	line-height: 2em;
	color: ${fontColour};

	a {
		color: ${lighten(0.45, secondaryColour)};
		text-decoration: none;

		:hover {
			text-decoration: underline;
		}
	}
`;

const Main = ({ className, children }) => {
	return <StyledMain className={className}>{children}</StyledMain>;
};

Main.propTypes = {
	className: PropTypes.string,
	data: PropTypes.object
};

export default Main;
