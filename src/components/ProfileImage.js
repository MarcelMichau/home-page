import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import theme from '../styles/theme';

const ProfileImage = ({ fixed }) => {
	return (
		<Img
			imgStyle={{
				borderRadius: '50%',
				height: '250px',
				width: '250px',
				margin: '20px',
				border: `5px solid ${theme.fontColour}`,
				boxShadow: '0px 0px 15px 0px rgba(0,0,0,0.75)',
			}}
			fixed={fixed}
			alt="Profile Picture of Marcel Michau"
		/>
	);
};

ProfileImage.propTypes = {
	fixed: PropTypes.object.isRequired,
};

export default ProfileImage;
