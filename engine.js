var Detector = require('./detector.js');
var Retriever = require('./retriever.js');
var Notifier = require('./notifier.js');

var engine = function(settings) {

  this.notifier = new Notifier(settings.email, settings.transport);
  this.retriever = new Retriever(settings.sites);
  this.detector = new Detector();
  this.state = this.retriever.getState();

  this.turn = function() {
    var currentState = this.retriever.getState();
    var changes = this.detector.diffState(this.state, currentState);

    changes.forEach(this.notifier.notify, this.notifier);
    this.state = currentState;
  };

};

module.exports = engine;
