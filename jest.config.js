module.exports = {
	preset: 'ts-jest',
	transform: {
		'^.+\\.[jt]sx?$': '<rootDir>/jest-preprocess.js',
	},
	moduleNameMapper: {
		'.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
		'.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`,
		'^@reach/router(.*)': '<rootDir>/node_modules/@gatsbyjs/reach-router$1',
	},
	testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
	transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
	globals: {
		__PATH_PREFIX__: ``,
	},
	testURL: `http://localhost`,
	setupFiles: [`<rootDir>/loadershim.js`],
};
