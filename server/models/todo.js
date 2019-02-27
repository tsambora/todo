'use strict';

module.exports = function(Todo) {
  Todo.greet = function(msg, cb) {
    cb(null, 'Greetings... ' + msg);
  };

  Todo.remoteMethod('greet', {
    accepts: {arg: 'msg', type: 'string'},
    returns: {arg: 'greeting', type: 'string'},
  });
};
