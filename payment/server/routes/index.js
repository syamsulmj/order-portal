const paymentsController = require('../controllers').payments;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Orders API!',
  }));

  app.post('/api/payments/process', paymentsController.processPayment);
};
