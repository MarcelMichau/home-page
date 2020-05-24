import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import PageContainer from '../components/PageContainer';
import Profile from '../components/Profile';
import theme from '../styles/theme';
import { ThemeProvider } from 'styled-components';

export function IndexPage({ data }) {
	return (
		<ThemeProvider theme={theme}>
			<Layout>
				<PageContainer
					headerContent={
						<Profile fixedResolutions={data.file.childImageSharp.fixed} />
					}
					mainContent={
						<div
							dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
						/>
					}
				/>
			</Layout>
		</ThemeProvider>
	);
}

export default IndexPage;

IndexPage.propTypes = {
	data: PropTypes.object.isRequired,
	currentDate: PropTypes.object,
};

export const pageQuery = graphql`
	query($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
		}
		file(relativePath: { eq: "profile.jpg" }) {
			childImageSharp {
				fixed(width: 350, height: 350) {
					...GatsbyImageSharpFixed_withWebp_tracedSVG
				}
			}
		}
	}
`;
