import React from 'react';
import { graphql, Link } from 'gatsby';
import { FixedObject } from 'gatsby-image';
import Layout from '../../components/Layout';
import PageContainer from '../../components/PageContainer';
import About from '../../components/About';
import { theme } from '../../styles/theme';
import { ThemeProvider } from 'styled-components';
import Profile from '../../components/Profile';

type CVPageProps = {
	data: {
		markdownRemark: {
			html: string;
		};
		file: {
			childImageSharp: {
				fixed: FixedObject[];
			};
		};
	};
};

export function CVPage({ data }: CVPageProps) {
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
