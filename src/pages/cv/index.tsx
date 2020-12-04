import React from 'react';
import { Link, graphql } from 'gatsby';
import { PageProps } from '../../types/PageProps';
import Layout from '../../components/Layout';
import PageContainer from '../../components/PageContainer';
import About from '../../components/About';
import { theme } from '../../styles/theme';
import { ThemeProvider } from 'styled-components';
import Profile from '../../components/Profile';

export function CVPage({ data }: PageProps) {
	return (
		<ThemeProvider theme={theme}>
			<Layout>
				<PageContainer
					headerContent={
						<Profile
							fixedResolutions={data.profileImage.childImageSharp.fixed}
						/>
					}
					mainContent={
						<div>
							<About />
							<Link to="/">{'<'} Go to Main Page</Link>
						</div>
					}
					logoImageResolutions={data.logoImage.childImageSharp.fixed}
				/>
			</Layout>
		</ThemeProvider>
	);
}

export default CVPage;

export const pageQuery = graphql`
	query($path: String!) {
		...PageInformation
	}
`;
