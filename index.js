var CronJob = require('cron').CronJob;
var Engine = require('engine');
var engine = new Engine();

new CronJob('*/10 * * * * *', function(){

  console.log("running poll");
  engine.turn();

}, null, true);
