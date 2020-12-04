import { FixedObject } from 'gatsby-image';

export type PageProps = {
	data: {
		markdownContent: {
			html: string;
		};
		profileImage: {
			childImageSharp: {
				fixed: FixedObject | FixedObject[];
			};
		};
		logoImage: {
			childImageSharp: {
				fixed: FixedObject | FixedObject[];
			};
		};
	};
};
