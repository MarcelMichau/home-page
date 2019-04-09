import React from 'react';
import ItemList from './ItemList';

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
		<ItemList items={courses} />

		<h3>Books read/busy reading/reference guides</h3>
		<ItemList items={books} />
	</div>
);

export default Accomplishments;
