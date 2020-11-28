import React from 'react';
import { graphql, Link } from 'gatsby';
import { PageProps } from '../PageProps';
import Layout from '../../components/Layout';
import PageContainer from '../../components/PageContainer';
import About from '../../components/About';
import { theme } from '../../styles/theme';
import { ThemeProvider } from 'styled-components';
import Profile from '../../components/Profile';

export function CVPage({ data }: PageProps) {
	return (
		<ThemeProvider theme={theme}>
			<Layout>
				<PageContainer
					headerContent={
						<Profile fixedResolutions={data.file.childImageSharp.fixed} />
					}
					mainContent={
						<div>
							<About />
							<Link to="/">{'<'} Go to Main Page</Link>
						</div>
					}
				/>
			</Layout>
		</ThemeProvider>
	);
}

export default CVPage;

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
