import React from 'react';
import Timer from './Timer';

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

			<h2>Education</h2>

			<h3>North West University, Potchefstroom, South Africa (2010-2013)</h3>

			<h4>Bachelor of Science in Computer Science and Information Systems</h4>
			<ul>
				<li>
					Coursework included: Graphical User Interface Programming in C#,
					Programming in Java, Systems Analysis, Decision Support Systems, Data
					Structures, Operating Systems, Networks, Databases, Expert Systems,
					Artificial Intelligence, Communication Skills, IT Developments, Basic
					Mathematical Techniques, Discrete Mathematics, Statistics and
					Inference Techniques, Accounting, and Business Management
				</li>
				<li>75% Course Average</li>
			</ul>

			<h4>Honours B.Sc in Computer Science and Information Systems</h4>
			<ul>
				<li>
					Coursework included: Database Management Systems, Computer Security,
					Project Management, System Development Methodologies and Image
					Processing
				</li>
				<li>
					Research Project on the effect of pair programming on students'
					perceptions and processes in an introductory programming course
				</li>
			</ul>

			<h3>Ben Vorster High School, Tzaneen, South Africa (2007-2009)</h3>
			<ul>
				<li>
					Subjects: English, Afrikaans, Mathematics, Physical Sciences, Life
					Sciences, Information Technology and Life Orientation
				</li>
				<li>Consistent Top-30 in academics</li>
			</ul>

			<h3>Hoogenhout High School, Bethal, South Africa (2005-2006)</h3>
			<ul>
				<li>
					Subjects: English, Afrikaans, Mathematics, Technology, Economic
					Management Science, Natural Science & Biology, Typing, Technical
					Drawing
				</li>
			</ul>

			<h2>Work Experience</h2>
			<h3>Full Stack Web/Application Developer, Investec</h3>
			<p>2014-present (Full-time)</p>
			<ul>
				<li>
					Web developer building financial/client-related systems predominantly
					oriented around the Microsoft .NET stack.
				</li>
				<li>
					Developer in a team of two developing a payment automation system to
					facilitate the transfer of funds from a client's trading account to
					their personal bank account.
				</li>
				<li>
					Developer in a team of two developing a messaging service to
					centralise the sending of emails & SMSs from internal systems.
				</li>
				<li>
					Developer in a team of two developing a debtors system in order to
					allow administrators to streamline the process of managing large
					clients & corporates' overdraft facilities.
				</li>
				<li>
					Developer in a team of two tasked with developing a service to
					consolidate trading account balances from various systems for
					up-to-date intra-day balances.
				</li>
				<li>
					Sole developer in a project to develop a user interface for an
					internal system used to calculate & manage clients' Capital Gains Tax.
				</li>
				<li>
					Started and drove an initiative to shift all internal systems from
					using a manual deployment process to a Continuous Integration solution
					by leveraging Microsoft Team Foundation Server with Release
					Management.
				</li>
				<li>
					Developer in a team of three tasked to develop a MEAN stack
					application to automate the booking of car washes for staff as part of
					the Investec IT Graduate programme year project.
				</li>
				<li>
					Participated in four hackathons where apps built included a web-based
					incentivised rewards system for clients, an iPad app for wealth
					managers to engage with clients, an internal React Native application
					for managing IT operations away from the desk, as well as a
					marketplace for clients to advertise & exchange goods with others.
				</li>
				<li>
					Developed a Node.js API based on the LoopBack framework as the
					platform for a hackathon aimed at third-year university students for
					Investec IT Explore.
				</li>
				<li>
					Sole developer tasked with a project to develop an automated process
					to transfer funds between trading accounts to prevent clients going
					into debit and being charged interest.
				</li>
				<li>
					Sole developer tasked with developing a deposit automation system to
					allow clients to initiate a deposit into their trading account via
					Electronic Fund Transfer.
				</li>
				<li>
					Sole developer tasked with developing a deal allocation system to
					process deals into the JSE in near real-time to replace an overnight
					batch process.
				</li>
				<li>
					Developer in a team of two tasked with developing a client-centric
					dashboard for an online support team to consolidate information from
					various disjoint systems on a single dashboard.
				</li>
				<li>
					Developer in a team of two tasked with developing a debit order
					automation system to allow clients to initiate recurring deposits into
					their trading accounts.
				</li>
				<li>
					Built a foundational framework for the Wealth & Investment API to
					expose capabilities to other divisions within the group.
				</li>

				<li>
					Member of the Architecture Working Group for the Wealth & Investment
					IT division, heading up the cloud focus area.
				</li>
				<li>
					Started a weekly informal forum for IT staff, titled Tell Me Something
					I Don't Know, to present & share interesting/useful/time-saving tips &
					tricks to the rest of the floor for knowledge-sharing.
				</li>
				<li>
					Started the adoption of a rotating DRI (Directly Responsible
					Individual) role within our team. This individual is tasked with all
					DevOps-related tasks for the duration of a sprint to free up other
					developers' time.
				</li>
				<li>
					Currently developing a digital client on-boarding solution to
					eliminate paper-based forms and streamline the on-boarding process for
					both clients and internal administrators.
				</li>
			</ul>

			<h3>Side Projects</h3>
			<p>January 2015 – April 2015 (Part-time)</p>
			<ul>
				<li>
					Developed a personality categorization web-app for a client targeted
					at corporates to allow them to place employees with similar traits
					together for increased productivity & happiness in the workplace.
				</li>
			</ul>

			<h3>Supplemental Instruction Leader, North West University</h3>
			<p>February 2012 – October 2013 (Part-time)</p>
			<ul>
				<li>
					Volunteered to assist 1st & 2nd year C# and 1st year C++ students.
				</li>
				<li>
					Involved in helping students with coursework during practical
					programming sessions.
				</li>
			</ul>

			<h3>Computer Technician, Scadco</h3>
			<p>June 2011 (Part-time)</p>
			<ul>
				<li>Installed computer systems for Buccleuch Primary School.</li>
				<li>
					Installation required laying of network cables, hard drive cloning,
					operating system installation and basic network configuration.
				</li>
			</ul>

			<h3>DJ, Simpsons Mobile Disco</h3>
			<p>February 2011 – March 2012 (Part-time)</p>
			<ul>
				<li>
					DJ for various formal & informal events and functions including
					weddings, banquets, balls and sporting events.
				</li>
			</ul>

			<h2>Skills</h2>
			<ul>
				<li>C#</li>
				<li>JavaScript</li>
				<li>TypeScript</li>
				<li>CSS</li>
				<li>HTML</li>
				<li>.NET Framework</li>
				<li>.NET Core</li>
				<li>ASP.NET Core</li>
				<li>WCF Services</li>
				<li>Windows Services</li>
				<li>SQL Server</li>
				<li>Entity Framework</li>
				<li>Asynchronous Messaging</li>
				<li>IBM MQ</li>
				<li>RabbitMQ</li>
				<li>Microsoft Azure</li>
				<li>Amazon Web Services</li>
				<li>Azure DevOps</li>
				<li>Continuous Integration</li>
				<li>Testing</li>
				<li>Docker</li>
				<li>Kubernetes</li>
				<li>Node.JS</li>
				<li>MongoDB</li>
				<li>React.JS</li>
				<li>Angular</li>
				<li>Express</li>
				<li>Mongoose</li>
				<li>Bootstrap</li>
				<li>Semantic UI</li>
				<li>The art of Googling</li>
			</ul>

			<h2>Hobbies/Spare Time Activities</h2>
			<ul>
				<li>Reading</li>
				<li>Music</li>
				<li>PC gaming</li>
				<li>Coding / Contributing to open-source</li>
				<li>Watching online courses</li>
				<li>Jogging</li>
				<li>Watching TV shows</li>
			</ul>

			<h2>Accomplishments</h2>

			<h3>Courses Completed</h3>
			<ul>
				<li>45+ Pluralsight courses</li>
				<li>240+ egghead.io lessons</li>
				<li>Docker and Kubernetes: The Complete Guide - Udemy</li>
				<li>Mongo University: MongoDB for .NET Developers</li>
			</ul>

			<h3>Books read/busy reading/reference guides</h3>
			<ul>
				<li>Building Microservices - Sam Newman</li>
				<li>
					.NET Microservices Architecture for Containerized .NET Applications -
					Cesar de la Torre, Bill Wagner, Mike Rousos
				</li>
				<li>Clean Code - Robert C. Martin</li>
				<li>The Clean Coder - Robert C. Martin</li>
				<li>Domain Driven Design - Eric Evans</li>
				<li>Eloquent JavaScript - Marijn Haverbeke</li>
				<li>JavaScript: The Good Parts - Douglas Crockford</li>
				<li>You Don't Know JS - Kyle Simpson</li>
				<li>Concurrency in C# Cookbook - Stephen Cleary</li>
				<li>
					Profesor Frisby's Mostly Adequate Guide to Functional Programming -
					Brian Lonsdorf
				</li>
				<li>The UX Book - Rex Hartson, Pardha Pyla</li>
			</ul>
		</div>
	);
};

export default About;
