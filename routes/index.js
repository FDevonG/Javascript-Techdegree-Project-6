/* jshint esversion: 6 */

const express = require('express');//initialize express
const router = express.Router();//create a new router varibable useing the express Router function

const { data } = require('../data.json');//set the project array in the object to an instance of a new array called projects
const { projects } = data;//create a new array out of the array of objects in the data var

router.get('/', (req, res) => {
	'use strict';
	res.locals.data = projects;//set the local data to projects
	res.render('index');//render the index page
});

router.get('/about', (req, res) => {//the about page route
	'use strict';
	res.locals.data = projects;
	res.render('about');//render the about page
});

router.get('/project/:id', (req, res) => {
	'use strict';
	const { id } = req.params;//the id of the project to be shown
	let projectObject = {};
	//loop through the projects array to match the project with the id
	for (let i = 0; i < projects.length; i++) {
		if (projects[i].id === id) {//if the sent id matches the project id
			projectObject = projects[i];//set the projectObject to the matching id
			break;
		}
	}
	res.render('project', projectObject);//render the projects page with the projectObject
});

module.exports = router;//export the router module