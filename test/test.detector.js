var assert = require('chai');
var expect = assert.expect;

var Detector = require('../detector.js');

describe('Detector', function() {

  beforeEach(function() {
    this.detector = new Detector();
  });

  it('can get changes in state', function() {

    var oldState = [
      {
        name: 'blocket',
        contents: 'some text'
      },
      {
        name: 'google',
        contents: 'search result 1'
      }
    ];

    var newState = [
      {
        name: 'blocket',
        contents: 'some text'
      },
      {
        name: 'google',
        contents: 'search result 2'
      }
    ];

    var changes = this.detector.diffState(oldState, newState);

    expect(changes.length).to.equal(1);
    expect(changes[0].name).to.equal('google');
    expect(changes[0].new).to.equal('search result 2');

  });

});
