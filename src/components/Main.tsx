import React from 'react';
import styled from 'styled-components';
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
	color: ${(props) => props.theme.fontColour};
	text-align: center;

	a {
		color: ${(props) => lighten(0.55, props.theme.accentColour)};
		text-decoration: none;

		:hover {
			text-decoration: underline;
		}
	}

	ul {
		list-style: none;
		padding-inline-start: 0px;
	}
`;

type MainProps = {
	className?: string;
	children: React.ReactNode;
};

const Main = ({ className, children }: MainProps) => (
	<StyledMain className={className}>{children}</StyledMain>
);

export default Main;
