// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Set the path to the views
app.set('views', './views');

// Parse the body
app.use(express.urlencoded({extended: true}));