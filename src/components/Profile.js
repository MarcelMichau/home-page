import React from 'react';
import styled from 'styled-components';
import ProfileImage from './ProfileImage';
import TypingSubtitle from '../components/TypingSubtitle';
import SocialIcons from '../components/SocialIcons';

const StyledNameTitle = styled.h2`
	font-family: 'Fira Sans', sans-serif;
	font-size: 48px;
`;

const Profile = ({ fixedResolutions }) => {
	return (
		<div>
			<ProfileImage fixed={fixedResolutions} />
			<StyledNameTitle>Marcel Michau</StyledNameTitle>
			<TypingSubtitle />
			<SocialIcons />
		</div>
	);
};

export default Profile;
