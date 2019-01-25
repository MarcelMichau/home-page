import React from 'react';
import { graphql } from 'gatsby';
import { Spring } from 'react-spring';
import Layout from '../components/Layout';
import PageContainer from '../components/PageContainer';
import ProfileImage from '../components/ProfileImage';

export function IndexPage({ data }) {
	return (
		<Layout>
			<PageContainer
				headerContent={
					<Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
						{({ opacity }) => (
							<div style={{ opacity }}>
								<h2>Marcel Michau</h2>
								<ProfileImage fixed={data.file.childImageSharp.fixed} />
								<p>I write code & stuff</p>
							</div>
						)}
					</Spring>
				}
				mainContent={
					<Spring
						delay={1000}
						from={{ opacity: 0, y: '40px' }}
						to={{ opacity: 1, y: '0px' }}
					>
						{({ opacity, y }) => (
							<div
								style={{
									opacity,
									transform: `translate3d(0, ${y}, 0)`
								}}
								dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
							/>
						)}
					</Spring>
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
