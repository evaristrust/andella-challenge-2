var express = require("express");

var bodyParser = require('body-parser');

var path = require('path');

var app = express();

const port = process.env.PORT || 8000;

import router from './api/routes';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));  // to support encoded bodies

app.use('/api', router);

//get the html file 
app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '/api/index.html'));
})

app.listen(port, function(err, res){

	if(err){ console.log('Error: ', err)}
		else {

			console.log(`server started on port ${port}... `)
		}
	});


module.exports = app; // for unit testing