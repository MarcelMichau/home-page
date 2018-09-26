import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import PageContainer from '../components/PageContainer';
import ProfileImage from '../components/ProfileImage';
import Main from '../components/Main';

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
					<Main>
						<div
							dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
						/>
					</Main>
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
