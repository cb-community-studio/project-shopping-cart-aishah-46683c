const { Productlist } = require('./productlist.class');
const createModel = require('../../models/productlist.model');
const hooks = require('./productlist.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/productlist', new Productlist(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('productlist');

  service.hooks(hooks);
};