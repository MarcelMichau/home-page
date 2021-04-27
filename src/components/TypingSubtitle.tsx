import React from 'react';
import styled from 'styled-components';

const StyledSubtitle = styled.div`
	font-family: 'Fira Mono', 'Consolas', monospace;
	font-size: 16px;
	min-height: 20px;
	width: 36ch;
	animation: typing 2s steps(36), blink 0.5s step-end infinite alternate;
	white-space: nowrap;
	overflow: hidden;
	border-right: 3px solid;

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

	@keyframes typing {
		from {
			width: 0;
		}
	}

	@keyframes blink {
		50% {
			border-color: transparent;
		}
	}
`;

const TypingSubtitle = () => {
	return (
		<StyledSubtitle>
			<span className="console">console</span>
			<span className="punctuation">.</span>
			<span className="log">log</span>(
			<span className="text">
				<span className="punctuation">"</span>I write code & stuff
				<span className="punctuation">"</span>
			</span>
			)<span className="punctuation">;</span>
		</StyledSubtitle>
	);
};

export default TypingSubtitle;
