import React from 'react';
import styled from 'styled-components';
import Centered from './Centered';

const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: center;
`;

type HeaderProps = {
	className?: string;
	children: React.ReactNode;
};

const Header = ({ className, children }: HeaderProps) => {
	return (
		<Centered className={className}>
			<StyledHeader>{children}</StyledHeader>
		</Centered>
	);
};

export default Header;
