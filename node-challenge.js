
// server.js: composition root

//var dbConfig = require('./config/db.json');
var Db = require('./core/db');
var db = new Db();


var App = require('./core/app');
var app = new App(appConfig,db);

app.start();

