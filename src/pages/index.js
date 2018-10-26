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
						<ProfileImage
							profileImageResolutions={data.file.childImageSharp.resolutions}
						/>
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
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				path
				title
			}
		}
		file(relativePath: { regex: "/profile.jpg/" }) {
			childImageSharp {
				resolutions(width: 120) {
					...GatsbyImageSharpResolutions_tracedSVG
				}
			}
		}
	}
`;
