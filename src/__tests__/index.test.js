import React from 'react';
import { render } from 'react-testing-library';
import renderer from 'react-test-renderer';
import IndexPage from '../pages/index';

describe('IndexPage', () =>
	it('renders correctly', () => {
		const data = {
			markdownRemark: {
				html:
					'<p>This is my website. No one else\'s.</p>\n<p>Look how minimal it is.</p>\n<p>It is written using:</p>\n<ul>\n<li><a href="https://reactjs.org/">React</a></li>\n</ul>\n<p>With:</p>\n<ul>\n<li><a href="https://www.gatsbyjs.org/">Gatsby</a></li>\n</ul>\n<p>Using:</p>\n<ul>\n<li><a href="https://www.styled-components.com/">Styled Components</a></li>\n<li><a href="https://fontawesome.com/">Font Awesome</a></li>\n</ul>\n<p>And also:</p>\n<ul>\n<li><a href="https://sarcadass.github.io/granim.js/">Granim.js</a></li>\n</ul>\n<p>With some help from:</p>\n<ul>\n<li><a href="https://prettier.io/">Prettier</a></li>\n</ul>\n<p>Hosted on:</p>\n<ul>\n<li><a href="https://www.netlify.com/">Netlify</a></li>\n</ul>\n<p>It is intended to be:</p>\n<ul>\n<li>Fast 🐌</li>\n<li>Agile 🐢</li>\n<li>Scalable ⚖️</li>\n<li>Cloud-native 🌧️</li>\n<li>Enterprise-ready 🏢</li>\n<li>Containerized 📦</li>\n<li>Microservice-based 🔍</li>\n<li>Powered by Machine Learning 🤖</li>\n<li>Blockchain ₿</li>\n<li>Filled with all the buzz words so that search engines pick this up 😁</li>\n</ul>\n<p>This is what I\'m going to use it for:</p>\n<ul>\n<li>To showcase some of the things I\'m working/have worked on ✨</li>\n<li>To play around &#x26; experiment with cool new tech 🎮</li>\n<li>To have some slice of the internet which is my own 🍰</li>\n<li>World domination 🤘</li>\n</ul>\n<p>This is what I might use it for:</p>\n<ul>\n<li>To write blogs ✏️</li>\n<li>To list some of the things I\'m good at 🖥️</li>\n</ul>\n<p>This is what I\'m not going to use it for:</p>\n<ul>\n<li>Sell stuff 💰</li>\n<li>Evil 💀</li>\n</ul>'
			},
			file: {
				childImageSharp: {
					fixed: {
						tracedSVG:
							"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120' version='1'%3e%3cpath d='M0 25a601 601 0 0 0 1 41c-2 7-2 32 1 32l14-2c14-1 15-1 19-5l2-3-2-5c-3-5-3-7-3-17V54h-3c-4 0-5 0-5-12l-1-8 3-1h5c2 1 2 8 1 8v2c2 2 3 0 3-4l1-4 1-2 7-8c3-2 7-5 8-8h2l2 1h8c1-2 9-1 11 2l1 3 1 1c3 0 6 4 4 6v2l2 2 2 2c3 0 7 5 6 7-1 8-2 8-16 7-5-1-7 2-7 12 0 5 0 6-3 8l-3 4c0 2 3 7 5 7 1 1 0 1-1 1l-3-1h-4c-4 0-5 0-4 2l4 1 3 1-1 1c-1 0 0 4 2 4 2 1 1 4-1 5l-3 2c0 3-5 5-9 5l-4-1 11 5c3 0 11-4 14-6 1-2 2-3 3-2v3c-4 4 1 7 5 3h4c1 1 1 1 1-2l1-4c2 0 2-1 4-7l1-3c2 0 21 7 26 10 5 2 5 1 5-16l-1-12-1 3v-3l-10-16c-4-2-4-3-1-12 2-6 1-12-1-14l-1-5c0-2-1-5-3-7-4-7-5-8-13-8l-4-1V4l2-1V2H64c-1-1-4 0-14 4l-2 1-4 1c-4 1-8 4-8 5l-1 3c-1 0-2 1-2 3-1 1-1-1-1-5a81 81 0 0 0-1-11V0H0v25m76 37l-1 2c-1-1-1 0-1 1l-1 4v13c1 3 2 3 4 2l2-3v-1l1-1 1-3 3-5 2-4c2-3 2-4-1-2-1 1-2 1-5-2-3-4-4-4-4-1M35 94l-2 6-4 8c-2 3-3 1-1-2 1-1 1-2-1-2-3-1-4 0-3 4l1 5c0 3 2 3 6 1l4-2 1-9c0-9 0-12-1-9m17 16l-8 4-3 1c1 2-3 3-8 3h-4c1 3 11 2 22-2l12-4c1 0 2-1 1-2-1-4-6-4-12 0' fill='lightgray' fill-rule='evenodd'/%3e%3c/svg%3e",
						width: 120,
						height: 120,
						src: '/static/525fd6c64db28cac17692d7950b481f7/f09d3/profile.jpg',
						srcSet:
							'/static/525fd6c64db28cac17692d7950b481f7/f09d3/profile.jpg 1x,\n/static/525fd6c64db28cac17692d7950b481f7/75efe/profile.jpg 1.5x,\n/static/525fd6c64db28cac17692d7950b481f7/7af24/profile.jpg 2x,\n/static/525fd6c64db28cac17692d7950b481f7/fa917/profile.jpg 3x'
					}
				}
			}
		};

		const tree = renderer.create(<IndexPage data={data} />).toJSON();
		expect(tree).toMatchSnapshot();
	}));
