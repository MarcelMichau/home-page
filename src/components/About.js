import React from 'react';
import Timer from './Timer';
import Education from './Education';
import WorkExperience from './WorkExperience';
import Skills from './Skills';
import Hobbies from './Hobbies';
import Accomplishments from './Accomplishments';

const sinceDate = new Date(2014, 1, 15, 8, 0, 0);

const About = () => {
	return (
		<div>
			<h1>About Me</h1>

			<p>I have been a professional software developer for approximately:</p>
			<p>
				<Timer sinceDate={sinceDate} /> seconds
			</p>

			<p>But who's counting. ;)</p>

			<p>I am passionate about:</p>

			<ul>
				<li>Writing code</li>
				<li>Building things which people find useful</li>
				<li>Learning about new concepts, techniques & tools</li>
				<li>Teaching & helping others</li>
			</ul>

			<Education />

			<WorkExperience />

			<Skills />

			<Hobbies />

			<Accomplishments />
		</div>
	);
};

export default About;
