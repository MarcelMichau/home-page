import React from 'react';
import styled from 'styled-components';

const StyledSubtitleWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const StyledSubtitle = styled.span`
	font-family: 'Fira Mono', 'Consolas', monospace;
	font-size: 16px;
	min-height: 20px;
	animation: typing 2s steps(36), blink 0.5s step-end infinite alternate;
	white-space: nowrap;
	border-right: 2px solid;

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

const StyledConsole = styled.span`
	color: white;
`;

const StyledPunctuation = styled.span`
	color: lightblue;
`;

const StyledLog = styled.span`
	color: lightpink;
`;

const StyledText = styled.span`
	color: lightgreen;
`;

const TypingSubtitle = () => {
	return (
		<StyledSubtitleWrapper>
			<StyledSubtitle>
				<StyledConsole>console</StyledConsole>
				<StyledPunctuation>.</StyledPunctuation>
				<StyledLog>log</StyledLog>(
				<StyledText>
					<StyledPunctuation>"</StyledPunctuation>I write code & stuff
					<StyledPunctuation>"</StyledPunctuation>
				</StyledText>
				)<StyledPunctuation>;</StyledPunctuation>
			</StyledSubtitle>
		</StyledSubtitleWrapper>
	);
};

export default TypingSubtitle;
