import React, { useState, useEffect } from 'react';
import { differenceInSeconds, distanceInWordsToNow } from 'date-fns';

const sinceDate = new Date(2014, 1, 15, 8, 0, 0);

const About = () => {
	//const elapsed = new Date() - sinceDate;
	const [now, updateNow] = useState(differenceInSeconds(new Date(), sinceDate));

	useEffect(() => {
		const timerID = setInterval(() => tick(), 1000);

		return function cleanup() {
			clearInterval(timerID);
		};
	});

	function tick() {
		updateNow(differenceInSeconds(new Date(), sinceDate));
	}

	return (
		<div>
			<h1>About Me</h1>

			<p>I have been a professional software developer for approximately:</p>
			<p>{now} seconds</p>

			<p>But who's counting. ;)</p>

			<p>I am passionate about:</p>

			<ul>
				<li>Writing code</li>
				<li>Building things which people find useful</li>
				<li>Learning about new concepts, techniques & tools</li>
				<li>Teaching & helping others</li>
			</ul>

			<h2>Skills</h2>

			<h2>Work Experience</h2>

			<h3 />

			<h2>Education</h2>
		</div>
	);
};

export default About;
