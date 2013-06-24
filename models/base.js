
module.exports = function Base(persistentProps){
  this.persistentProps = persistentProps;
}

Base.prototype.save = function(cb){

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

