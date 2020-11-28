import React from 'react';
import styled, { withTheme, DefaultTheme } from 'styled-components';
import Centered from './Centered';

const StyledFooter = styled.footer`
	background-color: ${(props) => props.theme.accentColour};
	padding-top: 1em;
	padding-bottom: 2em;
`;

const StyledWave = styled.svg`
	margin-bottom: -10px;
`;

type FooterProps = {
	className?: string;
	theme: DefaultTheme;
};

let Footer = ({ className, theme }: FooterProps) => (
	<>
		<StyledWave xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
			<path
				fill={theme.accentColour}
				fillOpacity="1"
				d="M0,192L48,192C96,192,192,192,288,160C384,128,480,64,576,80C672,96,768,192,864,208C960,224,1056,160,1152,154.7C1248,149,1344,203,1392,229.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
			></path>
		</StyledWave>
		<div>
			<Centered className={className}>
				<StyledFooter>
					Marcel Michau &copy; {new Date().getFullYear()}
				</StyledFooter>
			</Centered>
		</div>
	</>
);

export default withTheme(Footer);
