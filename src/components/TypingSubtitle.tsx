import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js';
import styled from 'styled-components';

const StyledSubtitle = styled.div`
	font-family: 'Fira Mono', 'Consolas', monospace;
	font-size: 16px;
	min-height: 20px;

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
	const inputEl = useRef<HTMLSpanElement>(null);

	useEffect(() => {
		const options = {
			strings: [
				'<span class="console">console</span><span class="punctuation">.</span><span class="log">log</span>(<span class="text"><span class="punctuation">"</span>I write code &amp; stuff<span class="punctuation">"</span></span>)<span class="punctuation">;</span>',
			],
			typeSpeed: 55,
			backSpeed: 55,
		};

		// @ts-ignore
		const typed = new Typed(inputEl.current, options);
		// This is the approach recommended by Typed.js docs, but throws error:
		// Argument of type 'HTMLSpanElement | null' is not assignable to parameter of type 'string'. Type 'null' is not assignable to type 'string'.
		// But the code still works ¯\_(ツ)_/¯

		return function cleanup() {
			typed.destroy();
		};
	}, []);

	return (
		<StyledSubtitle>
			<span ref={inputEl}></span>
		</StyledSubtitle>
	);
};

export default TypingSubtitle;
