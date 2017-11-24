var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');
var apiRouter = require('./app.router.js');

let app = express();
app.set('port', process.env.PORT || 9090);
app.set('host', (process.env.HOST || '10.0.1.82'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', apiRouter);

app.listen(app.get('port'), () => {
	console.log(`Express server listening at http://${app.get('host')}:${app.get('port')}`);
});