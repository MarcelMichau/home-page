import React from 'react';
import { graphql } from 'gatsby';
import { useSpring, animated } from 'react-spring';
import Layout from '../components/Layout';
import PageContainer from '../components/PageContainer';
import ProfileImage from '../components/ProfileImage';

export function IndexPage({ data }) {
	const headerProps = useSpring({ from: { opacity: 0 }, to: { opacity: 1 } });
	const contentProps = useSpring({
		from: { opacity: 0, y: '40px' },
		to: { opacity: 1, y: '0px' },
		delay: 1000
	});

	return (
		<Layout>
			<PageContainer
				headerContent={
					<animated.div style={headerProps}>
						<h2>Marcel Michau</h2>
						<ProfileImage fixed={data.file.childImageSharp.fixed} />
						<p>I write code & stuff</p>
					</animated.div>
				}
				mainContent={
					<animated.div
						style={{
							opacity: contentProps.opacity,
							transform: `translate3d(0, ${contentProps.y}, 0)`
						}}
						dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
					/>
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
