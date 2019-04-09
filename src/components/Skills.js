import React from 'react';
import Table from './Table';

const skills = [
	['C#', 'Advanced'],
	['JavaScript', 'Advanced'],
	['TypeScript', 'Intermediate'],
	['CSS', 'Basic'],
	['HTML', 'Intermediate'],
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
	['Microsoft Azure', 'Basic'],
	['Amazon Web Services', 'Basic'],
	['Azure DevOps', 'Advanced'],
	['Continuous Integration', 'Advanced'],
	['Git', 'Intermediate'],
	['Docker', 'Intermediate'],
	['Kubernetes', 'Intermediate'],
	['Node.JS', 'Intermediate'],
	['MongoDB', 'Basic'],
	['React.JS', 'Advanced'],
	['Angular', 'Basic'],
	['Express', 'Basic'],
	['Mongoose', 'Basic'],
	['Bootstrap', 'Intermediate'],
	['Semantic UI', 'Intermediate'],
	['The art of Googling', 'Advanced']
];

const Skills = () => (
	<div>
		<h2>Skills</h2>

		<Table headers={['Area', 'Proficiency']} rows={skills} />
	</div>
);

export default Skills;
