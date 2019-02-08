import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { lighten, darken } from 'polished';

const StyledFooter = styled.footer`
	text-align: center;
	background-color: ${props => props.theme.primaryColour};
	color: ${props => props.theme.fontColour};
`;

const StyledSocialIcons = styled.div`
	display: flex;
	justify-content: space-evenly;
	margin: 0 auto;
	max-width: 200px;

	a {
		color: ${props => lighten(0.45, props.theme.accentColour)};

		:hover {
			color: ${props => darken(0.5, props.theme.fontColour)};
		}
	}
`;

const Footer = ({ className }) => (
	<StyledFooter className={className}>
		<div>
			<p>Marcel Michau &copy; {new Date().getFullYear()}</p>
			<StyledSocialIcons>
				<a href="https://github.com/MarcelMichau">
					<FontAwesomeIcon icon={faGithub} size="lg" />
				</a>

				<a href="https://twitter.com/MarcelMichau">
					<FontAwesomeIcon icon={faTwitter} size="lg" />
				</a>
			</StyledSocialIcons>
		</div>
	</StyledFooter>
);

Footer.propTypes = {
	className: PropTypes.string
};

export default Footer;
