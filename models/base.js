
var db = require('../core/db');

module.exports = function Base(persistentProps){
  var _this = this;
  _this.persistentProps = persistentProps;
  _this.save = function(cb){

  }
  //mixin "class" methods
  Object.getOwnPropertyNames(Base).forEach(function(prop){
    _this[prop] = Base[prop];
  });
}

Base.fetch= function(key, cb){
  var _this = this;
  db.get(key,function(err,result){
    var inst = new _this();
    if (result instanceof Object) {
      _this.persistentProps.forEach(function(prop){
        inst[prop] = result[prop];
      });
    }
    cb(null,inst);
  });
};

