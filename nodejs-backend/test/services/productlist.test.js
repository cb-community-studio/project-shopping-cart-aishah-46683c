const assert = require('assert');
const app = require('../../src/app');

describe('\'productlist\' service', () => {
  it('registered the service', () => {
    const service = app.service('productlist');

    assert.ok(service, 'Registered the service (productlist)');
  });
});
