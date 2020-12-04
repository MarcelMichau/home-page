import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { FixedObject } from 'gatsby-image';

const Container = styled.div`
	background-color: ${(props) => props.theme.backgroundColour};
	display: grid;
	min-height: 100vh;
	grid-template-columns: 1fr;
	grid-template-rows: auto 1fr;
	grid-gap: 5px;
	grid-template-areas:
		'h'
		'm'
		'f';
`;

const AlignedHeader = styled(Header)`
	grid-area: h;
	height: 100vh;
`;

const AlignedMain = styled(Main)`
	grid-area: m;
`;

const AlignedFooter = styled(Footer)`
	grid-area: f;
`;

type PageContainerProps = {
	headerContent: React.ReactNode;
	mainContent: React.ReactNode;
	logoImageResolutions: FixedObject | FixedObject[];
};

const PageContainer = ({
	headerContent,
	mainContent,
	logoImageResolutions,
}: PageContainerProps) => (
	<Container>
		<AlignedHeader>{headerContent}</AlignedHeader>
		<AlignedMain>{mainContent}</AlignedMain>
		<AlignedFooter logoImageResolutions={logoImageResolutions} />
	</Container>
);

export default PageContainer;
