var assert = require('chai');
var expect = assert.expect;

var Notifier = require('../notifier.js');

describe('Notifier', function() {

  beforeEach(function() {
    var transport = 'direct:?name=localhost';
    this.notifier = new Notifier('changedetection@mailinator.com', transport);
  });

  it('can send change email @email', function() {
    var state = {
      name: 'Testpage',
      old: 'old contents',
      new: 'new contents'
    };
    this.notifier.notify(state);
  });

});
