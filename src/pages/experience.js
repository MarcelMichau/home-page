import React from 'react';
import Layout from '../components/Layout';
import PageContainer from '../components/PageContainer';
import theme from '../styles/theme';
import { ThemeProvider } from 'styled-components';

const Experience = () => {
	return (
		<ThemeProvider theme={theme}>
			<Layout>
				<PageContainer
					headerContent={<div>Some header</div>}
					mainContent={<div>Some experience content</div>}
				/>
			</Layout>
		</ThemeProvider>
	);
};

export default Experience;
