
// server.js: composition root

var dbConfig = require('./config/db.json');
var Db = require('./core/db');
var db = new Db(dbConfig);

var App = require('./core/app');
var app = new App(['add','feed','pay','user'],db);

app.start();

