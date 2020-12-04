import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import IndexPage from '../pages/index';
import { PageProps } from '../types/PageProps';

const pageProps: PageProps = {
	data: {
		markdownContent: {
			html:
				'<p>This is my website. No one else\'s.</p>\n<p>Look how minimal it is.</p>\n<p>It\'s built using:</p>\n<ul>\n<li><a href="https://www.typescriptlang.org/">TypeScript</a></li>\n<li><a href="https://reactjs.org/">React</a></li>\n</ul>\n<p>Along with:</p>\n<ul>\n<li><a href="https://www.gatsbyjs.org/">Gatsby</a></li>\n</ul>\n<p>With some help from:</p>\n<ul>\n<li><a href="https://www.styled-components.com/">Styled Components</a></li>\n<li><a href="https://fontawesome.com/">Font Awesome</a></li>\n<li><a href="https://mattboldt.com/demos/typed-js/">Typed.js</a></li>\n<li><a href="https://getwaves.io/">getwaves.io</a></li>\n</ul>\n<p>With code kept in line by:</p>\n<ul>\n<li><a href="https://codeclimate.com/github/MarcelMichau/home-page">Code Climate</a></li>\n<li><a href="https://prettier.io/">Prettier</a></li>\n</ul>\n<p>Tested using:</p>\n<ul>\n<li><a href="https://jestjs.io/">Jest</a></li>\n<li><a href="https://www.docker.com/">Docker</a></li>\n<li><a href="https://travis-ci.com/MarcelMichau/home-page">Travis CI</a></li>\n</ul>\n<p>Deployed to:</p>\n<ul>\n<li><a href="https://vercel.com/">Vercel</a></li>\n</ul>\n<p>And code hosted on:</p>\n<ul>\n<li><a href="https://github.com/MarcelMichau/home-page">GitHub</a></li>\n</ul>\n<p>It is intended to be:</p>\n<ul>\n<li>Fast 🐌</li>\n<li>Agile 🐢</li>\n<li>Scalable ⚖️</li>\n<li>Cloud-native 🌧️</li>\n<li>Enterprise-ready 🏢</li>\n<li>Containerized 📦</li>\n<li>Microservice-based 🔍</li>\n<li>Powered by Machine Learning 🤖</li>\n<li>Blockchain ₿</li>\n<li>Filled with all the buzz words so that search engines pick this up 😁</li>\n</ul>',
		},
		profileImage: {
			childImageSharp: {
				fixed: {
					base64:
						'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAMEBQEC/8QAFwEBAQEBAAAAAAAAAAAAAAAAAgEAA//aAAwDAQACEAMQAAABn7XkD8JV55GmZVwZ/8QAHRAAAgEEAwAAAAAAAAAAAAAAAQIDAAQRIRITFP/aAAgBAQABBQIthED49RrIa3QaRI1WFz2z6PGv/8QAFhEBAQEAAAAAAAAAAAAAAAAAEAFB/9oACAEDAQE/AYYf/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEQETH/2gAIAQIBAT8BKHsf/8QAHRAAAgIBBQAAAAAAAAAAAAAAAAEREmEQITEycf/aAAgBAQAGPwK2C1jqbjctL0iUxZKLhrT/xAAbEAEBAQADAQEAAAAAAAAAAAABEQAhMVFBcf/aAAgBAQABPyG2eYJvuLLE4whgy+usR5Jy6M9dCrRRHrA6CxD90n13/9oADAMBAAIAAwAAABDwwMD/xAAYEQEBAAMAAAAAAAAAAAAAAAABABEhMf/aAAgBAwEBPxAiK247sF//xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAIAQIBAT8QrSDI/8QAHRABAAICAwEBAAAAAAAAAAAAAQARIUExUdFhsf/aAAgBAQABPxAhFgB20BFpPjJl0dQ40vfMBMAx+hqDbYRBkr9h+1FUMx9e3RF61BR60M08lhrPnNeT/9k=',
					width: 300,
					height: 300,
					src: '/static/ceeab084c21596435216ed7397fb861b/25e3f/profile.jpg',
					srcSet:
						'/static/ceeab084c21596435216ed7397fb861b/25e3f/profile.jpg 1x,\n/static/ceeab084c21596435216ed7397fb861b/f11e0/profile.jpg 1.5x,\n/static/ceeab084c21596435216ed7397fb861b/7b2a1/profile.jpg 2x',
					srcWebp:
						'/static/ceeab084c21596435216ed7397fb861b/50ead/profile.webp',
					srcSetWebp:
						'/static/ceeab084c21596435216ed7397fb861b/50ead/profile.webp 1x,\n/static/ceeab084c21596435216ed7397fb861b/27933/profile.webp 1.5x,\n/static/ceeab084c21596435216ed7397fb861b/ab687/profile.webp 2x',
				},
			},
		},
		logoImage: {
			childImageSharp: {
				fixed: {
					base64:
						'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsTAAALEwEAmpwYAAACZElEQVQ4y8WUz2saQRTHPYVADmm0uqu7sz90191xZhQtiPEo9GBAS6jk0pOXQI/NIYEaGtt4qC2lIE1haXsQzCEQoamB0oQmJ4WYi0EpFCxtLRaaU/6BYsdNmkRMeukhj4GZfXw/8x7vzVuL7z/McqUwNNc/TL8Mphjx+QIQUgW6SEEFQf1i3CIhFITwEQDDPPb5ZIQSXu+8KNIDHoYFhCizxTDLAIBzCmTGVCHcdDqfcRyPEDn2IwRNO4lM97cs+9lmSyqK+y+PIZQIuQ/hr/HxhwAIpp+SmqaFQiFCCOX7MJWWnc6vVut7hgnoumZWQSZkGoAv2ey3ycllm02g8n4B+gENwwiHw/QWi2im/YFhXrlcuw7HC46TzVxuYLw1OvqzVDra2XlgtYoYBwjhOC6fz3c6HZqCrut9mIbaZZglAJKq+t1qTbvdDoyLAFTGxoqG0ev1CouLgih6PJ5UKtXtdpvNpt/vP4M/MsxTjrtGSAGAqt2eEcVPdnuMZV+urh6urHT39pKplK5p9Xo9l8vVarVgMDgAP+F5J80NwncsezgxMS9J1wWhWC7/mJ2tzsxs7+9vbmwUCoVoNNpqtQKBwBm8zTCPeZ62SkFoWlUNlwsiJArC67W1o4WFexbLm/X11sGBJEnxeLzRaAzAVYfjOce5zGbqZocRxiLPlyqV35lMdmQERqM3YzH6FBKJRLvdPoFVs7Z3Zfk2LQhCpy+MHlVFuZNOL01N3QLAA6Hm9VIgEonMzc1hjPt9PlbTbp8nT3m3LPOKomCMzM/+kOi6IAgDI4kvmQoaAQ9dSn1X/TP4A2wFC55ksmlIAAAAAElFTkSuQmCC',
					width: 30,
					height: 30,
					src: '/static/c00cc6c3bc3f72f0b02f48f021e7ba06/91664/mm-logo.png',
					srcSet:
						'/static/c00cc6c3bc3f72f0b02f48f021e7ba06/91664/mm-logo.png 1x,\n/static/c00cc6c3bc3f72f0b02f48f021e7ba06/ad39b/mm-logo.png 1.5x,\n/static/c00cc6c3bc3f72f0b02f48f021e7ba06/183c2/mm-logo.png 2x',
					srcWebp:
						'/static/c00cc6c3bc3f72f0b02f48f021e7ba06/e711a/mm-logo.webp',
					srcSetWebp:
						'/static/c00cc6c3bc3f72f0b02f48f021e7ba06/e711a/mm-logo.webp 1x,\n/static/c00cc6c3bc3f72f0b02f48f021e7ba06/a1b10/mm-logo.webp 1.5x,\n/static/c00cc6c3bc3f72f0b02f48f021e7ba06/ca41d/mm-logo.webp 2x',
				},
			},
		},
	},
};

jest.mock('../components/TypingSubtitle', () => () => <></>);

const renderIndexPageToJSON = () => {
	return renderer.create(<IndexPage data={pageProps.data} />).toJSON();
};

describe('IndexPage', () => {
	it('renders correctly', () => {
		expect(renderIndexPageToJSON()).toMatchSnapshot();
	});
});
