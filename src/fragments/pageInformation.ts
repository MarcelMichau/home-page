import { graphql } from 'gatsby';

export const pageInformationFragment = graphql`
	fragment PageInformation on Query {
		markdownContent: markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
		}
		profileImage: file(relativePath: { eq: "profile.jpg" }) {
			childImageSharp {
				fixed(width: 300, height: 300) {
					...GatsbyImageSharpFixed_withWebp_tracedSVG
				}
			}
		}
		logoImage: file(relativePath: { eq: "mm-logo.png" }) {
			childImageSharp {
				fixed(width: 30, height: 30) {
					...GatsbyImageSharpFixed_tracedSVG
				}
			}
		}
	}
`;
