import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { lighten } from 'polished';

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
	color: ${props => props.theme.fontColour};

	a {
		color: ${props => lighten(0.45, props.theme.accentColour)};
		text-decoration: none;

		:hover {
			text-decoration: underline;
		}
	}
`;

const Main = ({ className, children }) => (
	<StyledMain className={className}>{children}</StyledMain>
);

Main.propTypes = {
	className: PropTypes.string,
	children: PropTypes.object
};

export default Main;
