
module.exports = function(db){
  var Base = require('./base');
  function User(){

  }
  User.prototype = new Base(['username']);

  return User;
};

//var Base = require('./base');
//
//var User = module.exports = function (db){
//  this.db = db;
//}
//
//User.prototype = new Base(['username']);

//mixin "class" methods
