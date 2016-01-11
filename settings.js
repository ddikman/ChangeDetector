YAML = require('js-yaml');
fs = require('fs');

var settings = function() {
  this.load = function(filename) {
    var fileContents = fs.readFileSync(filename, 'utf8');
    var yaml = YAML.safeLoad(fileContents);
    this.email = yaml.settings.email;
    this.sites = [];
    yaml.sites.forEach(function(site) {
      this.sites.push(site);
    }, this);
  };
};

module.exports = settings;
