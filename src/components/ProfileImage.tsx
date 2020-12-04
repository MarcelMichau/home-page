import React from 'react';
import Img, { FixedObject } from 'gatsby-image';
import { lighten } from 'polished';
import { theme } from '../styles/theme';

type ProfileImageProps = {
	fixed: FixedObject | FixedObject[];
};

const ProfileImage = ({ fixed }: ProfileImageProps) => {
	return (
		<Img
			imgStyle={{
				borderRadius: '50%',
				height: '250px',
				width: '250px',
				margin: '20px',
				border: `5px solid ${lighten(0.2, theme.accentColour)}`,
				boxShadow: '0px 0px 15px 0px rgba(0,0,0,0.75)',
			}}
			fixed={fixed}
			alt="Profile Picture of Marcel Michau"
		/>
	);
};

export default ProfileImage;
