import React from 'react';
import Helmet from 'react-helmet';
import { createGlobalStyle } from 'styled-components';
import { darken } from 'polished';
import { primaryColour, secondaryColour } from '../styles/palettes';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
		Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  }

	::-webkit-scrollbar {
		width: 10px;
	}
	
	::-webkit-scrollbar-track {
		background: ${primaryColour}; 
	}

	::-webkit-scrollbar-thumb {
		background: ${darken(0.05, secondaryColour)}; 
	}
	::-webkit-scrollbar-thumb:window-inactive {
		background: ${darken(0.05, secondaryColour)}; 
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
			<meta
				name="google-site-verification"
				content="u17FNJFETGielUaXh6jVCfwAFwN1OM0pnJ6sYC2W2oc"
			/>
			<title>Marcel Michau - I write code & stuff</title>
		</Helmet>
		<div>
			<GlobalStyle />
			{children}
		</div>
	</div>
);
