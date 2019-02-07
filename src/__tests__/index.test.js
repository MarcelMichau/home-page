import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import IndexPage from '../pages/index';

describe('IndexPage', () =>
	it('renders correctly', () => {
		const data = {
			markdownRemark: {
				html:
					'<p>This is my website. No one else\'s.</p>\n<p>Look how minimal it is.</p>\n<p>It is written using:</p>\n<ul>\n<li><a href="https://reactjs.org/">React</a></li>\n</ul>\n<p>Along with:</p>\n<ul>\n<li><a href="https://www.gatsbyjs.org/">Gatsby</a></li>\n</ul>\n<p>With some help from:</p>\n<ul>\n<li><a href="https://www.styled-components.com/">Styled Components</a></li>\n<li><a href="https://fontawesome.com/">Font Awesome</a></li>\n<li><a href="https://www.react-spring.io/">react-spring</a></li>\n</ul>\n<p>With code kept in line by:</p>\n<ul>\n<li><a href="https://codeclimate.com/github/MarcelMichau/home-page">Code Climate</a></li>\n<li><a href="https://prettier.io/">Prettier</a></li>\n</ul>\n<p>Tested using:</p>\n<ul>\n<li><a href="https://jestjs.io/">Jest</a></li>\n<li><a href="https://www.docker.com/">Docker</a></li>\n<li><a href="https://travis-ci.com/MarcelMichau/home-page">Travis CI</a></li>\n</ul>\n<p>Deployed to:</p>\n<ul>\n<li><a href="https://www.netlify.com/">Netlify</a></li>\n</ul>\n<p>And code hosted on:</p>\n<ul>\n<li><a href="https://github.com/MarcelMichau/home-page">GitHub</a></li>\n</ul>\n<p>It is intended to be:</p>\n<ul>\n<li>Fast 🐌</li>\n<li>Agile 🐢</li>\n<li>Scalable ⚖️</li>\n<li>Cloud-native 🌧️</li>\n<li>Enterprise-ready 🏢</li>\n<li>Containerized 📦</li>\n<li>Microservice-based 🔍</li>\n<li>Powered by Machine Learning 🤖</li>\n<li>Blockchain ₿</li>\n<li>Filled with all the buzz words so that search engines pick this up 😁</li>\n</ul>\n<p>This is what I\'m going to use it for:</p>\n<ul>\n<li>To showcase some of the things I\'m working/have worked on ✨</li>\n<li>To play around &#x26; experiment with cool new tech 🎮</li>\n<li>To have some slice of the internet which is my own 🍰</li>\n<li>World domination 🤘</li>\n</ul>\n<p>This is what I might use it for:</p>\n<ul>\n<li>To write blogs ✏️</li>\n<li>To list some of the things I\'m good at 🖥️</li>\n</ul>\n<p>This is what I\'m not going to use it for:</p>\n<ul>\n<li>Sell stuff 💰</li>\n<li>Evil 💀</li>\n</ul>'
			},
			file: {
				childImageSharp: {
					fixed: {
						tracedSVG:
							"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200' version='1'%3e%3cpath d='M1 15a1211 1211 0 0 1 1 79c1 8 1 20-1 22l-1 43v41h75l-3-3-24-23c-3-4-3-4-1-6v-1l-1-1h2l2-1c0-2 6-1 6 1 3 12 7 13 11 5 2-4 6-6 11-3 9 3 36 6 34 4l-2-1h-3c-2 0-6-8-6-9l-2-4-3-4-2-4v-2l2-1c1-1 1-1 2 1 0 2 1 2 4-2l3-3c-1-1 0-1 3-1l16-1h-5l-5-1c-1-2-3-2-12-3-2 0-2 0-1-1l4-2c2-1 3-2 4-1l3-2c1-2 2-3 4-3s4-2 2-3c-3-1-4-5-3-10l1-8c-1-6 0-8 3-8 4-1 5 0 5 3 0 4 4 14 5 13l-2-5v-8l-1-1h3v1l8 2 2-3h1l1 2c0 1 3 1 9-1 2 0 3-1 1-1l-5-2-2-1h5l5 1-1 6c0 4 0 7 1 6l1-1 3-3c2-4 3-2 0 4-2 5-4 7-6 7s-2 0-1 1c0 1 2 1 6-1l5-2 3 1c2-1 3 0 3 1l1 3 1-1 2-2 1 1v1c2 0 6-5 6-7h2v-1l-1-2h1c2 0 2 0 1-1-1-2-1-2 1-2 1 1 2 1 2-1l4-2c2 0 2 0 1-1-2-2-2-3 0-3l1-2v-2l1-3 2-1c1 1 1 1 2-1l1-2 1-3c0-2 0-2 2-2 1 1 1 0 1-3l-1-4c-2 0-2 0 0-2l1-3-1-18V38h-3l-3 1h-5c-1 2-1 2-2 1l-3-1h-3c0 1-3 1-3-1l-2-1-1-1-1-2v2c-1 2-2 2-3 1h-2l-2 1c-2 0-1-2 1-2l1-1c-1-1-5 0-5 2-1 2-3 1-2-1 0-3-1-3-4 0-2 1-2 2-1 3v2l1 4 1 7 1 4 1 2-1 2v2c2 2 2 17 1 17l-1 1c-2 11-3 13-2 14l-1 2c-2 1-12 1-11-1l-6-2c-8-2-15-1-15 2l-2 1c-3 0-11-3-11-4 0-4 0-4-3-3l-5-1-6-3-4-1-4-1c-3 0-4 0-3-1s1-1-1-1v-1c2 0 2-3 1-5-1-1-2-3-1-4l-1-3c-2-4-2-4 0-4l1-1 1-3c1-1 2-2 1-6v-6h3c3 0 5-3 3-6l1-2 1-2c0-3 3-4 10-3h8l6 1 8 1c4 0 6 0 5-1l-3-1h-2 8c3 1 4 0 2-1l-1-3-2-4-2-3h-4c-6 0-6 0-7-4l-2-3v-1c2-2 3-3 1-3h-3l-6 1c-1 2-6 2-6 0 0-1-1-1-2 1l-4 2c-1-1-1 0-2 1l-1 1c0-2-7 3-7 5h-2l-5 2-4 4a59 59 0 0 0-17 47c1 3 1 3-1 3-5-2-6 2-5 13 1 9 6 19 8 19l1 13c0 14-2 20-9 29-4 5-13 11-16 11l-13 6h-2l-1-55-1-55a165 165 0 0 0-2 43l-1 7h-4c0 2-4 5-6 5H7V96L6 38 5 10l2-1c4-2 4-2-2-4L0 3l1 12m74 86c0 4 1 5 4 6 5 3 17 5 21 4l2-1v-7l-1-4c0-3-2-4-4-1l-4 1-2 2c0 4-6 3-11-2-5-4-5-4-5 2m2 9l2 1 1 2 1 3 1 2-1 2c-2 0 1 18 3 19l1 2c0 2 1 3 2 3l1 2c0 2 5 3 5 0v-4c-1-3-1-4 2-4v-2c5 0 6-4 5-11v-6l1-3-1-2-6-1-12-2-5-1m65 43a382 382 0 0 0-3 42l-1 5h21c12 0 20 0 19-1l-4-1-5-1-4-2-1-1v2l-2-1c-3-2-2-3 0-3l2-1h3l2-1 17 3c6 0 7 1 10 3 3 3 5 3 2 0v-3c2-1 2-2 1-2l-1-1 1-1c1 1 1-6 1-18l-1-19-4 2c-7 3-8 3-11 1-4-2-7-1-7 1l-1-1h-13c-1-1-1-1-1 1l-2 2-1-2c1-2 0-2-11-3l-5-1c-1-1-1 0-1 1m-23 25l-4 13c-4 10-5 9 9 9s13 1 11-9c-2-8-6-15-9-15l-2-1c-2-3-3-2-5 3' fill='lightgray' fill-rule='evenodd'/%3e%3c/svg%3e",
						width: 200,
						height: 200,
						src: '/static/ceeab084c21596435216ed7397fb861b/511b7/profile.jpg',
						srcSet:
							'/static/ceeab084c21596435216ed7397fb861b/511b7/profile.jpg 1x,\n/static/ceeab084c21596435216ed7397fb861b/5c0c2/profile.jpg 1.5x,\n/static/ceeab084c21596435216ed7397fb861b/0fa17/profile.jpg 2x,\n/static/ceeab084c21596435216ed7397fb861b/70cc3/profile.jpg 3x'
					}
				}
			}
		};

		const tree = renderer.create(<IndexPage data={data} />).toJSON();
		expect(tree).toMatchSnapshot();
	}));
