import React from 'react';
import styled from 'styled-components';
import { FixedObject } from 'gatsby-image';
import ProfileImage from './ProfileImage';
import TypingSubtitle from './TypingSubtitle';
import ProfileIcons from './ProfileIcons';

const StyledNameTitle = styled.h2`
	font-family: 'Fira Sans', sans-serif;
	font-size: calc(32px + (48 - 32) * ((100vw - 300px) / (1600 - 300)));
`;

type ProfileProps = {
	fixedResolutions: FixedObject | FixedObject[];
};

const Profile = ({ fixedResolutions }: ProfileProps) => {
	return (
		<div>
			<ProfileImage fixed={fixedResolutions} />
			<StyledNameTitle>Marcel Michau</StyledNameTitle>
			<TypingSubtitle />
			<ProfileIcons />
		</div>
	);
};

export default Profile;
