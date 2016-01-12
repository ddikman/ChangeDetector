var Detector = require('./detector.js');
var Retriever = require('./retriever.js');
var Notifier = require('./notifier.js');

var detector = new Detector();
var retriever = new Retriever(settings.sites);
var notifier = new Notifier(settings.email, settings.transport);
var state = [];

var engine = function(settings) {

  state = retriever.getState();

  this.turn = function() {
    var currentState = retriever.getState();
    var changes = detector.diffState(state, currentState);

    changes.forEach(notifier.notify, notifier);
    state = currentState;
  };

};

module.exports = engine;
