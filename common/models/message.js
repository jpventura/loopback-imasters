'use strict';

module.exports = function(Message) {
  Message.greet = function(msg, cb) {
    process.nextTick(function() {
      msg = msg || 'hello';
      cb(null, 'iMasters thank ' + msg + ' for watching this event');
    });
  };
};
