import React from 'react';
import styled from 'styled-components';
import ProfileImage from './ProfileImage';
import TypingSubtitle from '../components/TypingSubtitle';
import ProfileIcons from './ProfileIcons';

const StyledNameTitle = styled.h2`
	font-family: 'Fira Sans', sans-serif;
	font-size: calc(32px + (48 - 32) * ((100vw - 300px) / (1600 - 300)));
`;

const Profile = ({ fixedResolutions }) => {
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
