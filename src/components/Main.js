import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledMain = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 1em;
  padding-left: 20px;
  padding-right: 20px;
  max-width: 800px;
  margin: 0 auto;
  line-height: 2em;
  color: #ffffff;
`;

const Main = ({ className, content }) => {
  return (
    <StyledMain className={className}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </StyledMain>
  );
};

Main.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object
};

export default Main;
