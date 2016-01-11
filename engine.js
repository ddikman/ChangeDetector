var Detector = require('./detector.js');
var Retriever = require('./retriever.js');
var Notifier = require('./notifier.js');
var Settings = require('./settings.js');

var settings = new Settings();
var detector = new Detector();
var retriever = new Retriever(settings.sites);
var notifier = new Notifier();
var state = [];

var engine = function() {

  state = retriever.getState();

  this.turn = function() {
    var currentState = retriever.getState();
    var changes = detector.diffState(state, currentState);

    changes.forEach(notifier.notify);
    state = currentState;
  };

};

module.exports = engine;
