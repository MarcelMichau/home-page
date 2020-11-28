import { FixedObject } from 'gatsby-image';

export type PageProps = {
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
