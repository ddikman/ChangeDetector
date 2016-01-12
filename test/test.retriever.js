var assert = require('chai');
var expect = assert.expect;

var Retriever = require('../retriever.js');

describe('Retriever', function() {

  beforeEach(function() {
    var sites = [
      {
        name: 'google',
        url: 'http://google.com',
        examine: '#namedDiv'
      }
    ];

    this.retriever = new Retriever(sites);
  });

  it('can retrieve inspect element from url', function() {
    // Given requesting a url, return some random html
    var fakeHtml = '<div id="namedDiv">contents</div><div>Another div</div>';
    this.retriever.getSite = function(url) { return fakeHtml; };

    var state = this.retriever.getState();
    expect(state.length).to.equal(1);
    expect(state[0].contents).to.equal('contents');
  });

  it('can retrieve url @online', function() {
    var state = this.retriever.getState();
    expect(state.length).to.equal(1);
    expect(state[0].name).to.equal('google');
  });

});
