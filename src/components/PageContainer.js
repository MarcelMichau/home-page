import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

const Container = styled.div`
	background-color: ${props => props.theme.backgroundColour};
	display: grid;
	min-height: 100vh;
	grid-template-columns: 1fr;
	grid-template-rows: auto 1fr 100px;
	grid-gap: 5px;
	grid-template-areas:
		'h'
		'm'
		'f';
`;

const AlignedHeader = styled(Header)`
	grid-area: h;
`;

const AlignedMain = styled(Main)`
	grid-area: m;
`;

const AlignedFooter = styled(Footer)`
	grid-area: f;
`;

const PageContainer = ({ headerContent, mainContent }) => (
	<Container>
		<AlignedHeader>{headerContent}</AlignedHeader>
		<AlignedMain>{mainContent}</AlignedMain>
		<AlignedFooter />
	</Container>
);

PageContainer.propTypes = {
	headerContent: PropTypes.element,
	mainContent: PropTypes.element
};

export default PageContainer;
