module.exports = {
	siteMetadata: {
		title: `Gatsby Default Starter`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/markdown`,
				name: 'markdown-pages'
			}
		},
		`gatsby-transformer-remark`,
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-preact`,
		{
			resolve: `gatsby-plugin-netlify`,
			options: {
				headers: {
					'/*': [
						'Referrer-Policy: strict-origin-when-cross-origin',
						`Content-Security-Policy: default-src 'none'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; connect-src 'self'; manifest-src 'self'; font-src 'self' data:; img-src 'self' https://avatars1.githubusercontent.com; object-src 'none'; block-all-mixed-content; frame-ancestors 'none'; base-uri 'none'; form-action 'none'; report-to https://b7ca037389ec9bb8220abf11b8d6540c.report-uri.com/r/d/csp/enforce; report-uri https://b7ca037389ec9bb8220abf11b8d6540c.report-uri.com/r/d/csp/enforce;`,
						`Expect-CT: max-age=0, report-uri="https://b7ca037389ec9bb8220abf11b8d6540c.report-uri.com/r/d/ct/reportOnly"`
					]
				}, // option to add more headers. `Link` headers are transformed by the below criteria
				allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
				mergeSecurityHeaders: true, // boolean to turn off the default security headers
				mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
				mergeCachingHeaders: true, // boolean to turn off the default caching headers
				transformHeaders: (headers, path) => headers // optional transform for manipulating headers under each path (e.g.sorting), etc.
			}
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
				icon: 'src/favicon.png' // This path is relative to the root of the site.
			}
		}
	]
};
