var CronJob = require('cron').CronJob;
var CronCalc = require('cron-calc');
var Engine = require('./engine.js');
var Settings = require('./settings.js');

var cronCalc = new CronCalc();

var settings = new Settings();
settings.load('settings.yml');

var engine = new Engine(settings);

console.log('starting cron job with interval: ' + settings.interval);
var cron = cronCalc.createCron(settings.interval);
var nextPoll = cronCalc.findFirst(cron, new Date());
console.log('next poll will execute at ' + nextPoll);

new CronJob(settings.interval, function() {

  console.log("running poll");
  engine.turn();

}, null, true);
