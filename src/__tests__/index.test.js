import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import IndexPage from '../pages/index';

const data = {
	markdownRemark: {
		html:
			'<p>This is my website. No one else\'s.</p>\n<p>Look how minimal it is.</p>\n<p>It is written using:</p>\n<ul>\n<li><a href="https://reactjs.org/">React</a></li>\n</ul>\n<p>Along with:</p>\n<ul>\n<li><a href="https://www.gatsbyjs.org/">Gatsby</a></li>\n</ul>\n<p>With some help from:</p>\n<ul>\n<li><a href="https://www.styled-components.com/">Styled Components</a></li>\n<li><a href="https://fontawesome.com/">Font Awesome</a></li>\n<li><a href="https://www.react-spring.io/">react-spring</a></li>\n</ul>\n<p>With code kept in line by:</p>\n<ul>\n<li><a href="https://codeclimate.com/github/MarcelMichau/home-page">Code Climate</a></li>\n<li><a href="https://prettier.io/">Prettier</a></li>\n</ul>\n<p>Tested using:</p>\n<ul>\n<li><a href="https://jestjs.io/">Jest</a></li>\n<li><a href="https://www.docker.com/">Docker</a></li>\n<li><a href="https://travis-ci.com/MarcelMichau/home-page">Travis CI</a></li>\n</ul>\n<p>Deployed to:</p>\n<ul>\n<li><a href="https://www.netlify.com/">Netlify</a></li>\n</ul>\n<p>And code hosted on:</p>\n<ul>\n<li><a href="https://github.com/MarcelMichau/home-page">GitHub</a></li>\n</ul>\n<p>It is intended to be:</p>\n<ul>\n<li>Fast 🐌</li>\n<li>Agile 🐢</li>\n<li>Scalable ⚖️</li>\n<li>Cloud-native 🌧️</li>\n<li>Enterprise-ready 🏢</li>\n<li>Containerized 📦</li>\n<li>Microservice-based 🔍</li>\n<li>Powered by Machine Learning 🤖</li>\n<li>Blockchain ₿</li>\n<li>Filled with all the buzz words so that search engines pick this up 😁</li>\n</ul>\n<p>This is what I\'m going to use it for:</p>\n<ul>\n<li>To showcase some of the things I\'m working/have worked on ✨</li>\n<li>To play around &#x26; experiment with cool new tech 🎮</li>\n<li>To have some slice of the internet which is my own 🍰</li>\n<li>World domination 🤘</li>\n</ul>\n<p>This is what I might use it for:</p>\n<ul>\n<li>To write blogs ✏️</li>\n<li>To list some of the things I\'m good at 🖥️</li>\n</ul>\n<p>This is what I\'m not going to use it for:</p>\n<ul>\n<li>Sell stuff 💰</li>\n<li>Evil 💀</li>\n</ul>',
	},
	file: {
		childImageSharp: {
			fixed: {
				tracedSVG:
					"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='250' height='250' viewBox='0 0 250 250' version='1'%3e%3cpath d='M0 19l2 18-1 5v2l1 10-1 9H0l1 3v43c2 7 2 36 0 37-2 2-1 7 1 7v1c-2 0-2 3-2 48v48h47l46-1-5-4-29-28c-4-5-5-9-1-9h4l1-1h3l2-2 4 8 1 3 2 3c1 3 1 3 3 2l2-5c0-3 2-6 4-4 1 0 4-2 4-4s0-2 13 2l10 3 5 1 2 1 2-1 13 2c9 0 10 0 5-1-9-2-10-3-10-13l-2-2-2-1-1-3-3-6v-6h4l4-1 2-1 2-2c0-1 2-2 12-3 8 0 10-1 6-1l-9-2-8-2c-3 0-5-1-5-2 0-2 1-2 4-2 4 0 5-1 3-2-1-1 0-1 1-1l3-1 2-2 4-2c2-2 2-2 1-3-2-2-2-4-2-22 0-12 0-12 6-12 4 0 5 1 5 6l1 6 2 5 3 4-1-4c-2-4-3-17 0-14 1 3 11 4 13 1 2-1 2-1 5 1 2 3 6 4 6 1h2c2 0 2 0 1-1v-2l-3-2c-5-2-3-2 3-1 6 0 7 2 3 3-2 1-2 1 0 1s2 0 1 1v1c2-1 2-1 2 1-2 7-2 9 0 8 3-1 4-2 5-5 3-5 2-1 0 5-3 9-5 10-17 10l-13-1h1c5 3 22 2 28 0l6-2c0 2 4 2 6 0 1-1 1-1 1 2l1 4 1-1 2-2h1c-1 2 1 2 4 1 3-2 4-3 3-4l1-2c2-2 2-2 2 0h1v-3l-2-3h1l7-3c0-4 0-5 2-5 1 0 2 0 1-1l-1-2c0-2 0-2 1-1 2 1 2 1 3-1l2-3v-1c-2-1-2-1-1-2v-2l4-3c4-2 5-2 4-5 0-2 0-2 2-2 3 0 3-8 0-9-2-1-2-1-1-2 2-2 3-13 2-40 0-6-2-9-6-7-2 1-2 3 1 2 3 0 2 1 0 3-3 1-3 0-4-3l-2-4-2 2c-2 1-3 4-3 5-1 1-1 0-1-2 0-3 0-5-1-4l-1 1c1 1-2 2-4 1 0-1-1-1-3 1l-1 3v-4l-1-1-1-2-1 1-1 1-2-1-1-1h-3c-1-2-2-1-3 2s-3 2-2-2c0-4-2-4-3 0 0 3-2 3-3 0-1-4-5-6-5-2l2 1h1l-5 1 1 5 1 5c-1 1 0 2 1 3l1 9 1 9 1 2 1 1v10l-1 8c-3 7-5 18-3 19v2l-3 1c-1 3-11 1-11-1s0-2-3-2h-4c-4-4-20-3-20 1 0 2 0 2-5 2-6-1-8-2-8-6l-2-2v1l-1 1-4-1-1-1c1-1-9-4-16-6-7-1-16-4-16-5l4-1c3 0 3 0 2-1l-2-1-2-8c-3-8-2-18 2-18l1 3c-1 2-1 2 1 1l2-4c1-17 2-24 4-21 1 1 1 1 1-1l1-2 3-2 3-2h3l4-1 11 1c4 0 6 1 6 2l2 1 2-1h3c4 0 6-2 5-5 0-1 1-1 3 1l4 1 6 2c3 2 4 2 2-1-2-2 0-3 2-1h2c0-1 5 0 7 2h1c1-1-5-8-6-8l-1 1c0 3-2 3-4 2h-3l-1 1v-2c0-1 0-2-2-2-2-1-3-3-1-3l1-1h-1c-1 1-2 0-3-2-2-1-3-2-4-1l-2-1h-1c-2 1-5 1-5-1l-2-1c-2-1-3-3-1-3l1-2v-5c1-1 0-2-3-2l-5 2h-1l-4-1h-2l2 1 1 1-2 1h-6l2-3v-1l-4 3c-2 2-3 3-5 3l-4 1c-2 2-5 2-5 1h-1v2c1 1 0 1-1 2-2 1-3 2-2 3 0 2-2 2-3 1-1-2-1-2-4 0l-5 5-6 6-5 8c-8 10-14 36-12 46 2 4 1 7 0 4-1-2-5-1-6 1-2 2-2 17 0 24l3 7 4 5c3 3 3 4 3 12 2 25-5 41-21 53-6 3-8 5-10 4l-5 2-5 2-5 3-3 3-1-4-1-62c-1-77-1-71-2-67l-1 12-1 9v7c1 22 1 31-3 29-2-1-2-3-2-29a376 376 0 0 0-3 31l-4 2-3 1c-2 3-3-1-3-29L7 68a327 327 0 0 1 1-55l3-3c3-2 2-2-6-4L0 4v15m184 33l2 2 1 2-2-2c-4-3-2 2 3 6l2 6 4 7 2 4v-6c1-5 1-7-1-10l-3-4v-3c0-2-8-4-8-2m-62 69c-2 2-3 3-6 3s-3 0-3 2c1 2-1 3-5 2h-4c-1 0-3-1-4-4-4-5-6-4-6 4 0 4 1 5 4 6 6 3 28 6 27 4-1-1 0-1 1-1s2-1 2-3c1-9 0-9-1-10-3 0-3 0-2-1 2 0 2-1 0-2-1-2-1-2-3 0m-26 15l3 2c2 1 2 2 1 3-2 1-2 1 1 2 2 0 3 0 2 1-3 0-2 21 1 28l3 7 1 3 3 3h4c2 0 2 0 1-1l-1-1c2 0 2 0 2-3-2-6-2-7 1-8 2 0 2-1 1-2 0-2 0-2 2-1h4v-26l-2-1-3-1-21-4-3-1m87 52c0 2-2 3-2 1h-3a3401 3401 0 0 1-5 52v9h19l20-1h1l6 1 5-1-4-1-4-1h-1l-2-1-3-1-3-1-2 1v2c-1 0-4-4-4-7 0-2 0-2-1-1h-1l2-2 2 1h1c1-1 4 0 4 2l1 1v-1c0-2 0-2 2-2 4 0 6 1 5 2l1 1h1c0-2 1-2 10-1l7 3 2 1 1-1c-2-2 4-1 6 2l3 2v-2l2-3v-5l1-3c0-3 0-3-2-3h-2l2-1c2 0 2-1 2-4l-1-4v-23l1-4-1-5-8 4-2 1-1-2-1 4c1 3 0 4-1 1-1-2-2-3-3-2l-1-2h-1l-4-1h-9c-1-1-1-1-1 1v3l-1-3c-1-2-4-3-4-1l-3 1h-3l-2 1c-1-1-2 0-3 1h-2c-1-1-1-1 1-2l3-1h-3l-14-2c-1 0-2-1-2-3-1-2-1-2-1 0m-35 35a414 414 0 0 1-9 27 169 169 0 0 0 32-2l-3-8c-2-12-5-16-12-21-5-4-5-4-8 4' fill='lightgray' fill-rule='evenodd'/%3e%3c/svg%3e",
				width: 250,
				height: 250,
				src: '/static/ceeab084c21596435216ed7397fb861b/75e7f/profile.jpg',
				srcSet:
					'/static/ceeab084c21596435216ed7397fb861b/75e7f/profile.jpg 1x,\n/static/ceeab084c21596435216ed7397fb861b/26c40/profile.jpg 1.5x,\n/static/ceeab084c21596435216ed7397fb861b/97df0/profile.jpg 2x,\n/static/ceeab084c21596435216ed7397fb861b/684ec/profile.jpg 3x',
			},
		},
	},
};

const renderIndexPageToJSON = (date) => {
	return renderer.create(<IndexPage data={data} currentDate={date} />).toJSON();
};

describe('IndexPage', () => {
	it('renders correctly on a Sunday', () => {
		expect(renderIndexPageToJSON(new Date(2019, 1, 6))).toMatchSnapshot();
	});

	it('renders correctly on a Monday', () => {
		expect(renderIndexPageToJSON(new Date(2019, 1, 7))).toMatchSnapshot();
	});

	it('renders correctly on a Tuesday', () => {
		expect(renderIndexPageToJSON(new Date(2019, 1, 8))).toMatchSnapshot();
	});

	it('renders correctly on a Wednesday', () => {
		expect(renderIndexPageToJSON(new Date(2019, 1, 9))).toMatchSnapshot();
	});

	it('renders correctly on a Thursday', () => {
		expect(renderIndexPageToJSON(new Date(2019, 1, 10))).toMatchSnapshot();
	});

	it('renders correctly on a Friday', () => {
		expect(renderIndexPageToJSON(new Date(2019, 1, 11))).toMatchSnapshot();
	});

	it('renders correctly on a Saturday', () => {
		expect(renderIndexPageToJSON(new Date(2019, 1, 12))).toMatchSnapshot();
	});

	it('renders correctly for no date', () => {
		expect(renderIndexPageToJSON()).toMatchSnapshot();
	});
});
