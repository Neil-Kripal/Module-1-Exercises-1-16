const assert = require('assert');
const addNumbers = require('./add');

describe('addNumbers', function() {
  it('should return the sum of two numbers', function() {
    assert.strictEqual(addNumbers(2, 3), 5);
    assert.strictEqual(addNumbers(-1, 1), 0);
  });

  it('should throw an error if either argument is not a number', function() {
    assert.throws(() => addNumbers('2', 3), TypeError);
    assert.throws(() => addNumbers(2, '3'), TypeError);
  });
});
