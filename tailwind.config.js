/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		extend: {
			animation: {
				typing: 'typing 2s steps(36), blink 0.5s step-end infinite alternate',
			},
			keyframes: {
				typing: {
					from: {
						width: 0,
					},
					to: {
						width: '100%',
					},
				},
				blink: {
					'50%': {
						'border-color': 'transparent',
					},
				},
			},
		},
	},
	plugins: [],
};
