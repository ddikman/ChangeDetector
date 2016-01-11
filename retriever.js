var request = require('sync-request');
var cheerio = require('cheerio');

var retriever = function(sites) {

  this.sites = sites;

  this.getSite = function(url) {
    return request('GET', url).getBody();
  };

  this.getState = function() {
    return this.sites.map(this.examineSite, this);
  };

  this.examineSite = function(site) {
    var html = this.getSite(site.url);
    var dom = cheerio.load(html);
    var innerText = dom(site.examine).text();
    return {
      name: site.name,
      contents: innerText,
    };
  };

};

module.exports = retriever;
