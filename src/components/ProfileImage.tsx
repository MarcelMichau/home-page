import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { lighten } from 'polished';
import { theme } from '../styles/theme';

const ProfileImage = () => {
	const imageSize = 250;
	const padding = 5;

	return (
		<StaticImage
			imgStyle={{
				background: `${lighten(0.15, theme.accentColour)}`,
				borderRadius: '50%',
				width: `${imageSize - padding * 2}px`,
				height: `${imageSize - padding * 2}px`,
				padding: `${padding}px`,
				boxShadow: '0px 0px 15px 0px rgba(0,0,0,0.75)',
			}}
			style={{
				borderRadius: '50%',
			}}
			src="../images/profile.jpg"
			alt="Profile Picture of Marcel Michau"
			placeholder="tracedSVG"
			width={imageSize}
			height={imageSize}
		/>
	);
};

export default ProfileImage;
