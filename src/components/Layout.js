import React from 'react';
import Helmet from 'react-helmet';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
		Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  }
`;

export default ({ children }) => (
	<div>
		<Helmet>
			<html lang="en" />
			<meta
				name="description"
				content="Personal Website for Marcel Michau - I just filled this in for better SEO :)"
			/>
			<title>Marcel Michau - I write code & stuff</title>
		</Helmet>
		<div>
			<GlobalStyle />
			{children}
		</div>
	</div>
);
