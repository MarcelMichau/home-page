import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import IndexPage from '../pages/index';

const data = {
	markdownRemark: {
		html:
			'<p>This is my website. No one else\'s.</p>\n<p>Look how minimal it is.</p>\n<p>It\'s built using:</p>\n<ul>\n<li><a href="https://www.typescriptlang.org/">TypeScript</a></li>\n<li><a href="https://reactjs.org/">React</a></li>\n</ul>\n<p>Along with:</p>\n<ul>\n<li><a href="https://www.gatsbyjs.org/">Gatsby</a></li>\n</ul>\n<p>With some help from:</p>\n<ul>\n<li><a href="https://www.styled-components.com/">Styled Components</a></li>\n<li><a href="https://fontawesome.com/">Font Awesome</a></li>\n<li><a href="https://mattboldt.com/demos/typed-js/">Typed.js</a></li>\n<li><a href="https://getwaves.io/">getwaves.io</a></li>\n</ul>\n<p>With code kept in line by:</p>\n<ul>\n<li><a href="https://codeclimate.com/github/MarcelMichau/home-page">Code Climate</a></li>\n<li><a href="https://prettier.io/">Prettier</a></li>\n</ul>\n<p>Tested using:</p>\n<ul>\n<li><a href="https://jestjs.io/">Jest</a></li>\n<li><a href="https://www.docker.com/">Docker</a></li>\n<li><a href="https://travis-ci.com/MarcelMichau/home-page">Travis CI</a></li>\n</ul>\n<p>Deployed to:</p>\n<ul>\n<li><a href="https://vercel.com/">Vercel</a></li>\n</ul>\n<p>And code hosted on:</p>\n<ul>\n<li><a href="https://github.com/MarcelMichau/home-page">GitHub</a></li>\n</ul>\n<p>It is intended to be:</p>\n<ul>\n<li>Fast 🐌</li>\n<li>Agile 🐢</li>\n<li>Scalable ⚖️</li>\n<li>Cloud-native 🌧️</li>\n<li>Enterprise-ready 🏢</li>\n<li>Containerized 📦</li>\n<li>Microservice-based 🔍</li>\n<li>Powered by Machine Learning 🤖</li>\n<li>Blockchain ₿</li>\n<li>Filled with all the buzz words so that search engines pick this up 😁</li>\n</ul>',
	},
	file: {
		childImageSharp: {
			fixed: {
				base64:
					'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAMEBQEC/8QAFwEBAAMAAAAAAAAAAAAAAAAAAgABA//aAAwDAQACEAMQAAABn7XkD8JV55GmRVQD/8QAHRAAAgIBBQAAAAAAAAAAAAAAAQIAAyEEERITFP/aAAgBAQABBQInZEDz1QENp0GEqrVaXPbdicZ//8QAFhEBAQEAAAAAAAAAAAAAAAAAEAFB/9oACAEDAQE/AYYf/8QAFhEBAQEAAAAAAAAAAAAAAAAAEAEx/9oACAECAQE/AS6f/8QAHxAAAgECBwAAAAAAAAAAAAAAAAESESECEDFRYXGB/9oACAEBAAY/ApcEpeGg6jdWl2XaZh2ZBWTWX//EABsQAQACAwEBAAAAAAAAAAAAAAEAESFBUTFx/9oACAEBAAE/IR36EaWu+4Yg6lQwLlQNTFQQ7EgtpSahOxEPsw2z/9oADAMBAAIAAwAAABCzCP8A/8QAGBEBAQEBAQAAAAAAAAAAAAAAAQAhETH/2gAIAQMBAT8QIm2x7uF//8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oACAECAQE/EKyoMf/EAB0QAQACAgMBAQAAAAAAAAAAAAEAESFRMUFh0aH/2gAIAQEAAT8QUksYHtoD9lbDmSttETkb4csBoBAX2JCGZVxBx77ATWqpCU1pTs63HAbfYU+RDQqc5r5P/9k=',
				width: 300,
				height: 300,
				src: '/static/ceeab084c21596435216ed7397fb861b/25e3f/profile.jpg',
				srcSet:
					'/static/ceeab084c21596435216ed7397fb861b/25e3f/profile.jpg 1x,\n/static/ceeab084c21596435216ed7397fb861b/f11e0/profile.jpg 1.5x,\n/static/ceeab084c21596435216ed7397fb861b/7b2a1/profile.jpg 2x',
				srcWebp: '/static/ceeab084c21596435216ed7397fb861b/50ead/profile.webp',
				srcSetWebp:
					'/static/ceeab084c21596435216ed7397fb861b/50ead/profile.webp 1x,\n/static/ceeab084c21596435216ed7397fb861b/27933/profile.webp 1.5x,\n/static/ceeab084c21596435216ed7397fb861b/ab687/profile.webp 2x',
			},
		},
	},
};

jest.mock('../components/TypingSubtitle', () => () => <></>);

const renderIndexPageToJSON = () => {
	return renderer.create(<IndexPage data={data} />).toJSON();
};

describe('IndexPage', () => {
	it('renders correctly', () => {
		expect(renderIndexPageToJSON()).toMatchSnapshot();
	});
});
