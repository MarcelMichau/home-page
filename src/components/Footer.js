import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

const StyledFooter = styled.footer`
	text-align: center;
	background-color: #282c34;
	color: #ffffff;
`;

const StyledSocialIcons = styled.div`
	display: flex;
	justify-content: space-evenly;
	margin: 0 auto;
	max-width: 200px;

	a {
		color: #ff5d5d;

		:hover {
			color: grey;
		}
	}
`;

const Footer = ({ className }) => {
	return (
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
};

Footer.propTypes = {
	className: PropTypes.string
};

export default Footer;
