module.exports = {
	siteMetadata: {
		title: `Marcel Michau - I write code & stuff`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/markdown`,
				name: 'markdown-pages',
			},
		},
		`gatsby-transformer-remark`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `img`,
				path: `${__dirname}/src/images/`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-styled-components`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'Marcel Michau - I write code & stuff',
				short_name: 'Marcel Michau',
				start_url: '/',
				background_color: '#272932',
				theme_color: '#30333c',
				display: 'minimal-ui',
				icon: 'src/images/favicon.png', // This path is relative to the root of the site.
			},
		},
		{
			resolve: `gatsby-plugin-favicon`,
			options: {
				logo: './src/images/favicon.png',
				injectHTML: true,
				icons: {
					android: true,
					appleIcon: true,
					appleStartup: true,
					coast: false,
					favicons: true,
					firefox: true,
					twitter: true,
					yandex: false,
					windows: true,
				},
			},
		},
	],
};
