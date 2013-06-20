


var Datastore = require('nedb')

module.exports = function Db (config){
  Object.keys(config).forEach(function(collection){
    this[collection] = new Database({filename:process.cwd()+'/'+config[collection]});
    this[collection].loadDatabase();
  });
} ;

Db.prototype.add = function (collection, doc, cb){
  this[collection].insert(doc, cb);
};
Db.prototype.get = function (collection, query, cb){
  this[collection].find(query, cb);
};




