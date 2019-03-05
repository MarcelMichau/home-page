import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js';
import styled from 'styled-components';
import { lighten } from 'polished';

const strings = [
	'I am a compulsive tinkerer',
	'I am a compulsive learner',
	'I am a compulsive GitHub user',
	'I am a professional Stack Overflow copy-paster',
	'I build amazing software',
	'Sometimes',
	'Mostly I just fiddle around with stuff',
	'Mostly I just fiddle until I learn something',
	'I write code &amp; stuff...',
	'I used this typing effect cause it looks cool',
	'How long have you been staring at this?',
	`There's content below too, you know...`,
	'How long do you think this goes on for?',
	`Maybe you'll stay here forever`,
	`Or not`,
	`But you're curious`,
	`I know you`,
	`You want to see how long this goes on for`,
	`Or you can just open up the developer tools and check for yourself`,
	`But that's no fun`,
	`But seriously`,
	`What are you waiting for?`,
	`Some sort of Easter <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">egg</a>?`,
	`Did you miss it?`,
	`Oops :)`,
	'I write code &amp; stuff...'
];

const StyledSubtitle = styled.span`
	font-family: 'Inconsolata', 'Consolas', monospace;

	a {
		color: ${props => lighten(0.45, props.theme.accentColour)};
		text-decoration: none;

		:hover {
			text-decoration: underline;
		}
	}
`;

const TypingSubtitle = () => {
	const inputEl = useRef(null);

	useEffect(() => {
		const options = {
			strings,
			typeSpeed: 55,
			backSpeed: 55
		};

		const typed = new Typed(inputEl.current, options);

		return function cleanup() {
			typed.destroy();
		};
	});

	return (
		<p>
			<StyledSubtitle ref={inputEl} />
		</p>
	);
};

export default TypingSubtitle;
