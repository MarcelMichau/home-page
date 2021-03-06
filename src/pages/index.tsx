import React from 'react';
import { PageProps } from '../types/PageProps';
import Layout from '../components/Layout';
import PageContainer from '../components/PageContainer';
import Profile from '../components/Profile';
import { theme } from '../styles/theme';
import { ThemeProvider } from 'styled-components';
import { graphql } from 'gatsby';

export function IndexPage({ data }: PageProps) {
	return (
		<ThemeProvider theme={theme}>
			<Layout>
				<PageContainer
					headerContent={<Profile />}
					mainContent={
						<div
							dangerouslySetInnerHTML={{ __html: data.markdownContent.html }}
						/>
					}
				/>
			</Layout>
		</ThemeProvider>
	);
}

export default IndexPage;

export const pageQuery = graphql`
	query($path: String!) {
		...PageInformation
	}
`;
