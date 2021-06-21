import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import IndexPage from '../pages/index';
import { PageProps } from '../types/PageProps';

const pageProps: PageProps = {
	data: {
		markdownContent: {
			html: `<p>This is my website. No one else's.</p>\n<p>Look how minimal it is.</p>\n<p>It's built using:</p>\n<ul>\n<li><a href=\"https://www.typescriptlang.org/\">TypeScript</a></li>\n<li><a href=\"https://reactjs.org/\">React</a></li>\n</ul>\n<p>Along with:</p>\n<ul>\n<li><a href=\"https://www.gatsbyjs.com/\">Gatsby</a></li>\n</ul>\n<p>With some help from:</p>\n<ul>\n<li><a href=\"https://styled-components.com/\">Styled Components</a></li>\n<li><a href=\"https://fontawesome.com/\">Font Awesome</a></li>\n<li><a href=\"https://getwaves.io/\">getwaves.io</a></li>\n</ul>\n<p>With code kept in line by:</p>\n<ul>\n<li><a href=\"https://codeclimate.com/github/MarcelMichau/home-page\">Code Climate</a></li>\n<li><a href=\"https://prettier.io/\">Prettier</a></li>\n</ul>\n<p>Tested using:</p>\n<ul>\n<li><a href=\"https://jestjs.io/\">Jest</a></li>\n<li><a href=\"https://www.docker.com/\">Docker</a></li>\n<li><a href=\"https://github.com/features/actions\">GitHub Actions</a></li>\n</ul>\n<p>Deployed to:</p>\n<ul>\n<li><a href=\"https://pages.cloudflare.com/\">Cloudflare Pages</a></li>\n<li><a href=\"https://workers.cloudflare.com/\">Cloudflare Workers</a></li>\n</ul>\n<p>And code hosted on:</p>\n<ul>\n<li><a href=\"https://github.com/MarcelMichau/home-page\">GitHub</a></li>\n</ul>\n<p>It is intended to be:</p>\n<ul>\n<li>Fast 🐌</li>\n<li>Agile 🐢</li>\n<li>Scalable ⚖️</li>\n<li>Cloud-native 🌧️</li>\n<li>Distributed 🎊</li>\n<li>Resilient 🔨</li>\n<li>Asynchronous ⏲</li>\n<li>Sustainable 🌲</li>\n<li>Privacy-focused 🔒</li>\n<li>Enterprise-ready 🏢</li>\n<li>Containerized 📦</li>\n<li>Built on Microservices 🔍</li>\n<li>Powered by Machine Learning 🤖</li>\n<li>Blockchain ₿</li>\n<li>Something about Artificial Intelligence 💡</li>\n<li>Gluten-free 🍕</li>\n<li>Filled with buzz words so that search engines pick this up 😁</li>\n</ul>`,
		},
	},
};

const renderIndexPageToJSON = () => {
	var json = renderer.create(<IndexPage data={pageProps.data} />).toJSON();
	return json;
};

describe('IndexPage', () => {
	it('renders correctly', () => {
		expect(renderIndexPageToJSON()).toMatchSnapshot();
	});
});
