import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { animated } from 'react-spring';
import Layout from '../../components/Layout';
import PageContainer from '../../components/PageContainer';
import About from '../../components/About';
import theme from '../../styles/theme';
import { ThemeProvider } from 'styled-components';
import Profile from '../../components/Profile';
import fadeInAnimation from '../../utilities/fadeInAnimation';

export function CVPage({ data, currentDate = new Date() }) {
	theme.accentColour = theme.accentColourPalette[5];
	return (
		<ThemeProvider theme={theme}>
			<Layout>
				<PageContainer
					headerContent={
						<Profile fixedResolutions={data.file.childImageSharp.fixed} />
					}
					mainContent={
						<animated.div style={fadeInAnimation}>
							<About />
						</animated.div>
					}
				/>
			</Layout>
		</ThemeProvider>
	);
}

export default CVPage;

CVPage.propTypes = {
	data: PropTypes.object.isRequired,
	currentDate: PropTypes.object
};

export const pageQuery = graphql`
	query($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
		}
		file(relativePath: { eq: "profile.jpg" }) {
			childImageSharp {
				fixed(width: 250, height: 250) {
					...GatsbyImageSharpFixed_withWebp_tracedSVG
				}
			}
		}
	}
`;
