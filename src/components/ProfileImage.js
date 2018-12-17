import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const StyledImage = styled(Img)`
  border-radius: 50%;
  width: 100px;
`;

const ProfileImage = ({ fixed }) => {
  return (
    <StyledImage
      fixed={fixed}
      alt="Profile Picture of Marcel Michau"
    />
  );
};

ProfileImage.propTypes = {
  src: PropTypes.string
};

export default ProfileImage;
