

var TingoDb = require('tingodb')().Db;

var Db = module.exports = function (config){

  var file = process.cwd()+'/data';
  this.conn = new TingoDb(file, {});

} ;

Db.prototype.add = function (collection, doc, cb){
  this.conn.insert(doc, cb);
};
Db.prototype.get = function (collection, query, cb){
  this.conn.find(query, cb);
};




