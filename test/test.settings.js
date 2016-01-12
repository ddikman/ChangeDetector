var assert = require('chai');
var expect = assert.expect;

var Settings = require('../settings.js');

describe('Settings', function() {

  beforeEach(function() {
    this.settings = new Settings();
  });

  it('loads settings yaml', function() {
    this.settings.load('test/test.settings.yml');
    expect(this.settings.email).to.equal('changedetection@mailinator.com');
    expect(this.settings.transport).to.equal('direct:?name=localhost');
    expect(this.settings.sites.length).to.be.above(0);
  });

});
