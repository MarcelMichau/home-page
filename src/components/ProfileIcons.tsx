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
		color: ${(props) => lighten(0.55, props.theme.accentColour)};

		:hover {
			color: ${(props) => lighten(0.4, props.theme.accentColour)};
		}
	}
`;

const profiles = [
	{
		link: 'https://github.com/MarcelMichau',
		name: 'GitHub Profile',
		icon: faGithub,
	},
	{
		link: 'https://dev.to/marcelmichau',
		name: 'DEV Community Profile',
		icon: faDev,
	},
	{
		link: 'https://twitter.com/MarcelMichau',
		name: 'Twitter Profile',
		icon: faTwitter,
	},
];

const ProfileIcons = () => (
	<StyledProfileIcons>
		{profiles.map((profile, index) => (
			<a
				key={index}
				href={profile.link}
				title={profile.name}
				aria-label={profile.name}
			>
				<FontAwesomeIcon icon={profile.icon} size="2x" />
			</a>
		))}
	</StyledProfileIcons>
);

export default ProfileIcons;
