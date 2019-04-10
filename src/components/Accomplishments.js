import React from 'react';
import ItemList from './ItemList';

const courses = [
	<span>
		45+ <a href="https://www.pluralsight.com">Pluralsight</a> courses
	</span>,
	<span>
		240+ <a href="https://egghead.io/">egghead.io</a> lessons
	</span>,
	'Docker and Kubernetes: The Complete Guide - Udemy',
	'Mongo University: MongoDB for .NET Developers'
];

const books = [
	<a href="https://www.oreilly.com/library/view/building-microservices/9781491950340/">
		Building Microservices - Sam Newman
	</a>,
	<a href="https://docs.microsoft.com/en-us/dotnet/standard/microservices-architecture/">
		.NET Microservices Architecture for Containerized .NET Applications - Cesar
		de la Torre, Bill Wagner, Mike Rousos
	</a>,
	<a href="https://www.oreilly.com/library/view/clean-code/9780136083238/">
		Clean Code - Robert C. Martin
	</a>,
	<a href="https://www.oreilly.com/library/view/the-clean-coder/9780132542913/">
		The Clean Coder - Robert C. Martin
	</a>,
	<a href="https://www.oreilly.com/library/view/the-software-craftsman/9780134052625/">
		The Software Craftsman: Professionalism, Pragmatism, Pride
	</a>,
	<a href="https://www.oreilly.com/library/view/domain-driven-design-tackling/0321125215/">
		Domain Driven Design - Eric Evans
	</a>,
	<a href="https://eloquentjavascript.net/">
		Eloquent JavaScript - Marijn Haverbeke
	</a>,
	<a href="https://www.oreilly.com/library/view/javascript-the-good/9780596517748/">
		JavaScript: The Good Parts - Douglas Crockford
	</a>,
	<a href="https://github.com/getify/You-Dont-Know-JS">
		You Don't Know JS - Kyle Simpson
	</a>,
	<a href="https://www.oreilly.com/library/view/concurrency-in-c/9781491906675/">
		Concurrency in C# Cookbook - Stephen Cleary
	</a>,
	<a href="https://github.com/MostlyAdequate/mostly-adequate-guide">
		Professor Frisby's Mostly Adequate Guide to Functional Programming - Brian
		Lonsdorf
	</a>,
	<a href="https://www.oreilly.com/library/view/the-ux-book/9780123852410/">
		The UX Book - Rex Hartson, Pardha S. Pyla
	</a>
];

const booksTodo = [
	<a href="https://www.oreilly.com/library/view/infrastructure-as-code/9781491924334/">
		Infrastructure as Code - Kief Morris
	</a>,
	<a href="https://landing.google.com/sre/sre-book/toc/index.html">
		Site Reliability Engineering - Betsy Beyer, Chris Jones, Jennifer Petoff,
		Niall Richard Murphy
	</a>,
	<a href="https://www.oreilly.com/library/view/effective-devops/9781491926291/">
		Effective DevOps - Ryn Daniels, Jennifer Davis
	</a>,
	<a href="https://www.oreilly.com/library/view/the-devops-handbook/9781457191381/">
		The DevOps Handbook - John Willis, Patrick Debois, Jez Humble, Gene Kim
	</a>,
	<a href="https://www.manning.com/books/irresistible-apis">
		Irresistible APIs - Kirsten L. Hunter
	</a>
];

const Accomplishments = () => (
	<div>
		<h2>Accomplishments</h2>

		<h3>Courses Completed</h3>
		<ItemList items={courses} />

		<h3>Books read / busy reading / guides I use as reference</h3>
		<ItemList items={books} />

		<h3>Books I still want to read</h3>
		<ItemList items={booksTodo} />
	</div>
);

export default Accomplishments;
