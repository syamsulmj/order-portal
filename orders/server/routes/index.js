const ordersController = require('../controllers').orders;
const usersController = require('../controllers').users;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Orders API!',
  }));

  app.post('/api/create_order', ordersController.create);
  app.get('/api/get_orders', ordersController.index);
};
