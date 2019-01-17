import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import PageContainer from '../components/PageContainer';
import ProfileImage from '../components/ProfileImage';

export function IndexPage({ data }) {
	return (
		<Layout>
			<PageContainer
				headerContent={
					<div>
						<h2>Marcel Michau</h2>
						<ProfileImage fixed={data.file.childImageSharp.fixed} />
						<p>I write code & stuff</p>
					</div>
				}
				mainContent={
					<div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
				}
			/>
		</Layout>
	);
}

export default IndexPage;

export const pageQuery = graphql`
	query MainContent($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
		}
		file(relativePath: { eq: "profile.jpg" }) {
			childImageSharp {
				fixed(width: 200, height: 200) {
					...GatsbyImageSharpFixed_tracedSVG
				}
			}
		}
	}
`;
