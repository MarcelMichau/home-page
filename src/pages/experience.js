import React from 'react';
import Layout from '../components/Layout';
import PageContainer from '../components/PageContainer';

const Experience = () => {
	return (
		<Layout>
			<PageContainer
				headerContent={<div>Some header</div>}
				mainContent={<div>Some experience content</div>}
			/>
		</Layout>
	);
};

export default Experience;
