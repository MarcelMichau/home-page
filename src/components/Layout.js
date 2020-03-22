import React from 'react';
import Helmet from 'react-helmet';
import { createGlobalStyle } from 'styled-components';
import { darken } from 'polished';

export default ({ children }) => {
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
				background: ${(props) => props.theme.primaryColour}; 
			}

			::-webkit-scrollbar-thumb {
				background: ${(props) => darken(0.05, props.theme.accentColour)}; 
			}
			::-webkit-scrollbar-thumb:window-inactive {
				background: ${(props) => darken(0.05, props.theme.accentColour)}; 
			}
		`;

	return (
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
};
