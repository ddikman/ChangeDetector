var request = require('sync-request');
var cheerio = require('cheerio');

var retriever = function(sites) {

  if(sites === null || sites === undefined)
    throw new Exception("No sites given!");

  this.sites = sites;

  this.getSite = function(url) {
    return request('GET', url).getBody();
  };

  this.getState = function() {
    return this.sites.map(this.examineSite, this);
  };

  this.examineSite = function(site) {
    console.log('getting state for ' + site.name + ' from: ' + site.url);
    var html = this.getSite(site.url);
    var dom = cheerio.load(html);
    var element = dom(site.examine);
    var innerText = element.text();
    console.log('detected state for %s', site.name);
    return {
      name: site.name,
      contents: innerText,
    };
  };

};

module.exports = retriever;
