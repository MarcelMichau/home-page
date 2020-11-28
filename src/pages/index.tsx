import React from 'react';
import { graphql } from 'gatsby';
import { PageProps } from '../types/PageProps';
import Layout from '../components/Layout';
import PageContainer from '../components/PageContainer';
import Profile from '../components/Profile';
import { theme } from '../styles/theme';
import { ThemeProvider } from 'styled-components';

export function IndexPage({ data }: PageProps) {
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

export const pageQuery = graphql`
	query($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
		}
		file(relativePath: { eq: "profile.jpg" }) {
			childImageSharp {
				fixed(width: 300, height: 300) {
					...GatsbyImageSharpFixed_withWebp_tracedSVG
				}
			}
		}
	}
`;
