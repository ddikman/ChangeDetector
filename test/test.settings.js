var assert = require('chai');
var expect = assert.expect;

var Settings = require('../settings.js');

describe('Settings', function() {

  beforeEach(function() {
    this.settings = new Settings();
  });

  it('loads settings yaml', function() {
    this.settings.load('settings.yml');
    expect(this.settings.email).to.equal('ddikman@gmail.com');
    expect(this.settings.sites.length).to.be.above(0);
  });

});
