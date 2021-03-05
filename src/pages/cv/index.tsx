import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/Layout';
import PageContainer from '../../components/PageContainer';
import About from '../../components/About';
import { theme } from '../../styles/theme';
import { ThemeProvider } from 'styled-components';
import Profile from '../../components/Profile';

export function CVPage() {
	return (
		<ThemeProvider theme={theme}>
			<Layout>
				<PageContainer
					headerContent={<Profile />}
					mainContent={
						<div>
							<About />
							<Link to="/">{'<'} Go to Main Page</Link>
						</div>
					}
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
