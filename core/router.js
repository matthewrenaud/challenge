
var VError = require('./error');

module.exports = function Router (controllers) {
  var controllerMap = this.controllerMap = {};
  controllers.forEach(function(controller){
      controllerMap[controller] = require('../controllers/'+controller);
  });
}

Router.prototype.process = function (commandString , cb ) {
  var spaceIndex = commandString.indexOf(' ');
  if (spaceIndex < 1) {
    return cb(new VError('invalid input'));
  }
  var command = commandString.substring(0,spaceIndex);
  var controller = this.controllerMap[command];
  if (!controller) {
    return cb(new VError('invalid command: '+ command));
  }

  controller(commandString.substring(spaceIndex),cb );

}