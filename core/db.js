

var keyValueStore = {};

function set(key,value,cb){
  keyValueStore[key] = value;
  cb(null, true);
}
function get(key,cb){
  cb(null, keyValueStore[key]);
}

module.exports = {
  set: set,
  get: get
};



