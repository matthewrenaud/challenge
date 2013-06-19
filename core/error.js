
var util = require('util');


module.exports = function VError(message) {
  Error.call(this,message);
}

util.inherits(VError, Error);