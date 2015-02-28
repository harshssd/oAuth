// set up ======================================================================
// get all the tools we need
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var mongoose = require('mongoose');
var passport = require('passport');

var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var configDB = require('./config/database.js');
// configuration ===============================================================
mongoose.connect(configDB.url); // connect to our database

require('./config/passport')(passport); // pass passport for configuration

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(express.static(__dirname + '/public'));
app.use(bodyParser()); // get information from html forms

// required for passport
app.use(session({ secret: 'harsharsharsharsharsha' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

app.get('/', function(req, res) {
    res.sendFile('./public/index.html');
});

// routes ======================================================================
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// launch ======================================================================
app.listen(port, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});