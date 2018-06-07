import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import '../styles/globalStyles';

const TemplateWrapper = ({ children }) => (
	<div>
		<Helmet>
			<html lang="en" />
			<meta
				name="description"
				content="Personal Website for Marcel Michau - I just filled this in for better SEO :)"
			/>
			<title>Marcel Michau - I write code & stuff</title>
		</Helmet>
		<div>{children()}</div>
	</div>
);

TemplateWrapper.propTypes = {
	children: PropTypes.func
};

export default TemplateWrapper;
