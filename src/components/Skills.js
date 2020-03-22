import React from 'react';
import Table from './Table';

const skills = [
	['C#', 'Advanced'],
	['JavaScript', 'Advanced'],
	['TypeScript', 'Intermediate'],
	['CSS', 'Basic'],
	['HTML', 'Intermediate'],
	['SQL', 'Intermediate'],
	['.NET Framework', 'Intermediate'],
	['.NET Core', 'Intermediate'],
	['ASP.NET Core', 'Intermediate'],
	['WCF Services', 'Intermediate'],
	['Windows Services', 'Intermediate'],
	['SQL Server', 'Intermediate'],
	['Entity Framework', 'Intermediate'],
	['Redis', 'Basic'],
	['Asynchronous Messaging', 'Intermediate'],
	['IBM MQ', 'Intermediate'],
	['RabbitMQ', 'Basic'],
	['gRPC', 'Basic'],
	['Microsoft Azure', 'Basic'],
	['Amazon Web Services', 'Basic'],
	['Azure DevOps', 'Advanced'],
	['Continuous Integration', 'Advanced'],
	['Git', 'Intermediate'],
	['Docker', 'Intermediate'],
	['Kubernetes', 'Intermediate'],
	['Node.JS', 'Intermediate'],
	['GraphQL', 'Basic'],
	['MongoDB', 'Basic'],
	['React.JS', 'Advanced'],
	['React Native', 'Basic'],
	['Angular', 'Basic'],
	['Express', 'Basic'],
	['Mongoose', 'Basic'],
	['Bootstrap', 'Intermediate'],
	['Semantic UI', 'Intermediate'],
	['The art of Googling', 'Advanced'],
];

const Skills = () => (
	<div>
		<h2>Skills</h2>

		<h4>Legend</h4>

		<ul>
			<li>
				Basic - I have played around with it, read about it, but have not used
				it very often.
			</li>
			<li>
				Intermediate - I have decent knowledge about it, used it in a few
				projects and am comfortable with it.
			</li>
			<li>
				Advanced - I have extensive knowledge about it, used it in numerous
				projects and am comfortable enough to give a talk about it.
			</li>
		</ul>

		<Table headers={['Area', 'Proficiency']} rows={skills} />
	</div>
);

export default Skills;
