
var commander = require('commander');

function Context(app){
  this.app = app;
}

var App = module.exports = function (config, db) {
  this.db = db;
  var controllers = config.controllers || [];
  var controllerMap = this.controllerMap = {};
  controllers.forEach(function(controller){
    var path = '../controllers/'+controller;
    controllerMap[controller] = require(path);
  });
}

App.prototype.route = function (commandString , cb ) {
  var spaceIndex = commandString.indexOf(' ');
  if (spaceIndex < 1) {
    return cb(new Error('invalid input'));
  }
  var command = commandString.substring(0,spaceIndex);
  var controller = this.controllerMap[command];
  if (!controller) {
    return cb(new Error('invalid command: '+ command));
  }
  controller(new Context(this), commandString.substring(spaceIndex + 1), cb );
}

App.prototype.start = function (){
  var _this = this;
  function prompt() { //recursive function that prompts the user, routes the request, prints the result, and then calls itself
    commander.prompt('> ', function(command){
      _this.route(command,function(err,result){
        if (err instanceof Error){
          console.log('ERROR: '+ err.message);
        } else if (err){
          console.log('ERROR: unknown error');
        } else {
          console.log(result);
        }
        process.nextTick(function(){  // flatten the call stack
          prompt();
        });
      })
    });
  }
  prompt(); //starts the prompt cycle
};


//App.prototype.responseHandler = function(err,result,cb){
//  if (err instanceof Error){
//    console.log('ERROR: '+ err.message);
//  } else if (err){
//    console.log('ERROR: unknown error');
//  } else {
//    console.log(result);
//  }
//  cb();
//};


