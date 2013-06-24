
// server.js: composition root

var dbConfig = require('./config/db.json');
var Db = require('./core/db');
var db = new Db(dbConfig);

var appConfig = require('./config/app.json');
var App = require('./core/app');
var app = new App(appConfig,db);

app.start();

