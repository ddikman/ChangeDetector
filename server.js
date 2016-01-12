var CronJob = require('cron').CronJob;
var Engine = require('./engine.js');
var Settings = require('./settings.js');

var settings = new Settings();
settings.load('settings.yml');

var engine = new Engine(settings);

console.log('starting cron job with interval: ' + settings.interval);
new CronJob(settings.interval, function() {

  console.log("running poll");
  engine.turn();

}, null, true);
