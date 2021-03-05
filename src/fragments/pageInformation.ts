import { graphql } from 'gatsby';

export const pageInformationFragment = graphql`
	fragment PageInformation on Query {
		markdownContent: markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
		}
	}
`;
