import React from 'react';

const courses = [
	'45+ Pluralsight courses',
	'240+ egghead.io lessons',
	'Docker and Kubernetes: The Complete Guide - Udemy',
	'Mongo University: MongoDB for .NET Developers'
];

const books = [
	'Building Microservices - Sam Newman',
	'.NET Microservices Architecture for Containerized .NET Applications - Cesar de la Torre, Bill Wagner, Mike Rousos',
	'Clean Code - Robert C. Martin',
	'The Clean Coder - Robert C. Martin',
	'Domain Driven Design - Eric Evans',
	'Eloquent JavaScript - Marijn Haverbeke',
	'JavaScript: The Good Parts - Douglas Crockford',
	`You Don't Know JS - Kyle Simpson`,
	'Concurrency in C# Cookbook - Stephen Cleary',
	`Professor Frisby's Mostly Adequate Guide to Functional Programming - Brian Lonsdorf`,
	'The UX Book - Rex Hartson, Pardha Pyla'
];

const Accomplishments = () => (
	<div>
		<h2>Accomplishments</h2>

		<h3>Courses Completed</h3>
		<ul>
			{courses.map((course, index) => (
				<li key={index}>{course}</li>
			))}
		</ul>

		<h3>Books read/busy reading/reference guides</h3>
		<ul>
			{books.map((book, index) => (
				<li key={index}>{book}</li>
			))}
		</ul>
	</div>
);

export default Accomplishments;
