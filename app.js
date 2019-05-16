/* jshint esversion: 6 */

const express = require('express');//initialize express
const app = express();//initialize a instance of expres

const mainRoutes = require('./routes/');//set the main routes path

app.set('view engine', 'pug');//set the express view engine to pug
app.use('/static', express.static('public'));
app.use(mainRoutes);//use the main routes

app.use((req, res, next) => {
	'use strict';
	const err = new Error('Page Not Found');//create a new error with the message 'Page Not Found'
	err.status = 404;//set the status to a 404
	next(err);//call next passing the new error
});

app.use((err, req, res, next) => {
	'use strict';
	res.locals.error = err;
	res.status(err.status);
	res.render('error');
});

app.listen(3000, () => {//start the server on port 3000
	'use strict';
	console.log('server is now running on localhost:3000');//log out a message letting you know the server has started and on what port
});