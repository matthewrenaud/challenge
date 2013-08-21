


var Db = module.exports = function (params){


} ;

Db.prototype.add = function (collection, doc, cb){
  this.conn.insert(doc, cb);
};
Db.prototype.get = function (collection, query, cb){
  this.conn.find(query, cb);
};




