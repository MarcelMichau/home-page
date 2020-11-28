import React from 'react';
import styled from 'styled-components';

const Centered = styled(({ children, ...props }) =>
	React.cloneElement(children, props)
)`
	text-align: center;
	background-color: ${(props) => props.theme.primaryColour};
	color: ${(props) => props.theme.fontColour};
`;

export default Centered;
