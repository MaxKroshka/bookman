var linksController = require('../links/linkController.js');
var userController = require('../users/userController.js');
var listController = require('../lists/listController.js');
var helpers = require('./helpers.js');

module.exports = function(app, express) {
  app.post('/api/users/signin', userController.signin);
  app.post('/api/users/signup', userController.signup);
  app.get('/api/users/signedin', userController.checkAuth);
  app.use('/api/links', helpers.decode);
  app.get('/api/links/', linksController.allLinks);
  app.post('/api/links/', linksController.newLink);
  app.post('/api/links/event', linksController.toggleEvent);
  app.post('/api/links/remove', linksController.removeLink);
  app.use('/api/lists', helpers.decode);
  app.get('/api/lists/', listController.allLists);
  app.post('/api/lists/', listController.newList);
  app.post('/api/lists/remove', listController.removeList);

  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);
};
