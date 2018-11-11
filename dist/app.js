'use strict';

var _routes = require('./api/routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require("express");

var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // to support encoded bodies

app.use('/api', _routes2.default);

app.listen(3000, function (err, res) {

	if (err) {
		console.log('Error: ', err);
	} else {

		console.log('server started on port 3000... ');
	}
});

module.exports = app; // for unit testing