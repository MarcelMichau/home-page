import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const ProfileImage = ({ fixed }) => {
	return (
		<Img
			imgStyle={{ borderRadius: '50%' }}
			fixed={fixed}
			alt="Profile Picture of Marcel Michau"
		/>
	);
};

ProfileImage.propTypes = {
	src: PropTypes.string
};

export default ProfileImage;
