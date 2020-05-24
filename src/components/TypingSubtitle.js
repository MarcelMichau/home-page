import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js';
import styled from 'styled-components';

const StyledSubtitle = styled.span`
	font-family: 'Fira Mono', 'Consolas', monospace;
	font-size: 16px;

	.console {
		color: white;
	}

	.punctuation {
		color: lightblue;
	}

	.log {
		color: lightpink;
	}

	.text {
		color: lightgreen;
	}
`;

const TypingSubtitle = () => {
	const inputEl = useRef(null);

	useEffect(() => {
		const options = {
			strings: [
				'<span class="console">console</span><span class="punctuation">.</span><span class="log">log</span>(<span class="text"><span class="punctuation">"</span>I write code &amp; stuff<span class="punctuation">"</span></span>)<span class="punctuation">;</span>',
			],
			typeSpeed: 55,
			backSpeed: 55,
		};

		const typed = new Typed(inputEl.current, options);

		return function cleanup() {
			typed.destroy();
		};
	}, []);

	return (
		<p>
			<StyledSubtitle ref={inputEl} />
		</p>
	);
};

export default TypingSubtitle;
