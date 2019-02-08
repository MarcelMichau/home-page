import React from 'react';
import Layout from '../components/Layout';
import PageContainer from '../components/PageContainer';
import theme from '../styles/theme';
import { ThemeProvider } from 'styled-components';

const NotFoundPage = () => {
	return (
		<ThemeProvider theme={theme}>
			<Layout>
				<PageContainer
					headerContent={<div>Not Found</div>}
					mainContent={
						<div>
							<p>You just hit a route that doesn't exist... the sadness.</p>
						</div>
					}
				/>
			</Layout>
		</ThemeProvider>
	);
};

export default NotFoundPage;
