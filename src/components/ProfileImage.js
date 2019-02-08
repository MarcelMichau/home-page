import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { fontColour } from '../styles/palettes';

const ProfileImage = ({ fixed }) => {
	return (
		<Img
			imgStyle={{
				borderRadius: '50%',
				height: '200px',
				width: '200px',
				margin: '20px',
				border: `5px solid ${fontColour}`,
				boxShadow: '0px 0px 15px 0px rgba(0,0,0,0.75)'
			}}
			fixed={fixed}
			alt="Profile Picture of Marcel Michau"
		/>
	);
};

ProfileImage.propTypes = {
	src: PropTypes.string
};

export default ProfileImage;
