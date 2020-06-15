const Order = require('../models').Order;
const axios = require('axios');

const index = (req, res) => {
  return Order
    .findAll()
    .then(order => res.status(201).send(order))
    .catch(error => res.status(400).send(error));
}

const create = (req, res) => {

  return axios.post('http://localhost:3075/api/payments/process', {userId: req.body.userId})
    .then(payment => {
      let { status, paymentId } = payment.data;

      return Order
        .create({
          name: req.body.name,
          content: req.body.content,
          userId: req.body.userId,
          paymentId: paymentId,
          status: status
        })
        .then(order => {
          if (order.status === "confirmed") {
            setTimeout(() => {
              order
              .update({
                status: "delivered"
              });
            }, 10000);
          }

          res.status(201).send(order);
        })
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
};

module.exports = { create, index };
