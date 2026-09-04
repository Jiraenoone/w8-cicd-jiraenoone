const test = require('node:test');
const assert = require('node:assert/strict');
const { createMessage } = require('./index');

test('intentional failure for troubleshooting', () => {
  assert.equal(1, 2);
});