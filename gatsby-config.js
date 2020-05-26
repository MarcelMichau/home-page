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
			resolve: `gatsby-plugin-netlify`,
			options: {
				headers: {
					'/*': [
						'Referrer-Policy: strict-origin-when-cross-origin',
						`Content-Security-Policy: default-src 'none'; script-src 'self' 'unsafe-inline' https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; connect-src 'self'; manifest-src 'self'; font-src https://fonts.gstatic.com 'self' data:; img-src 'self' https://www.google-analytics.com data:; object-src 'none'; block-all-mixed-content; frame-ancestors 'none'; base-uri 'none'; form-action 'none'; report-to https://b7ca037389ec9bb8220abf11b8d6540c.report-uri.com/r/d/csp/enforce; report-uri https://b7ca037389ec9bb8220abf11b8d6540c.report-uri.com/r/d/csp/enforce;`,
						`Expect-CT: max-age=0, report-uri="https://b7ca037389ec9bb8220abf11b8d6540c.report-uri.com/r/d/ct/reportOnly"`,
						`Feature-Policy: camera 'none'; microphone 'none'; battery 'none'; geolocation 'none'; accelerometer 'none'; notifications 'none'; gyroscope 'none'; autoplay 'none';`,
					],
				}, // option to add more headers. `Link` headers are transformed by the below criteria
				allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
				mergeSecurityHeaders: true, // boolean to turn off the default security headers
				mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
				mergeCachingHeaders: true, // boolean to turn off the default caching headers
				transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
			},
		},
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
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-135978961-1',
			},
		},
	],
};
