import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faDev } from '@fortawesome/free-brands-svg-icons';
import { lighten } from 'polished';

const StyledProfileIcons = styled.div`
	display: flex;
	justify-content: space-evenly;
	margin: 0 auto;
	max-width: 200px;
	padding: 2em;

	a {
		color: ${(props) => lighten(0.45, props.theme.accentColour)};

		:hover {
			color: ${(props) => lighten(0.3, props.theme.accentColour)};
		}
	}
`;

const ProfileIcons = () => (
	<StyledProfileIcons>
		<a
			href="https://github.com/MarcelMichau"
			title="GitHub Profile"
			aria-label="GitHub Profile"
		>
			<FontAwesomeIcon icon={faGithub} size="2x" />
		</a>

		<a
			href="https://dev.to/marcelmichau"
			title="DEV Community Profile"
			aria-label="DEV Community Profile"
		>
			<FontAwesomeIcon icon={faDev} size="2x" />
		</a>

		<a
			href="https://twitter.com/MarcelMichau"
			title="Twitter Profile"
			aria-label="Twitter Profile"
		>
			<FontAwesomeIcon icon={faTwitter} size="2x" />
		</a>
	</StyledProfileIcons>
);

export default ProfileIcons;
