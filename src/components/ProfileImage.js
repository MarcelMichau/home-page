import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledImage = styled.img`
	border-radius: 50%;
	width: 100px;
`;

const ProfileImage = ({ src }) => {
	return <StyledImage src={src} alt="Profile Picture of Marcel Michau" />;
};

ProfileImage.propTypes = {
	src: PropTypes.string
};

export default ProfileImage;
