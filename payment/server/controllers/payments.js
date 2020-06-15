const Payment = require('../models').Payment;
const User = require('../models').User;
const lib = require('../lib');

const processPayment = (req, res) => {
  const { userId } = req.body;
  const randomState = parseInt(Math.random() * (5 - 1) + 1) % 2;

  return Payment
    .create({
      paymentType: "Visa"
    })
    .then(payment => res.status(201).send({paymentId: payment.id, status: randomState ? "confirmed" : "declined"}))
    .catch(error => res.status(400).send(error));

  // return User
  //   .findByPk(userId, {
  //     attributes: [
  //       'paymentStatus'
  //     ]
  //   })
  //   .then(user => {
  //     if (user.paymentStatus) {
  //       return Payment
  //         .create({
  //           paymentType: "Visa"
  //         })
  //         .then(payment => res.status(201).send({paymentId: payment.id, status: "confirmed"}))
  //         .catch(error => res.status(400).send(error));
  //     }
  //     else {
  //       return Payment
  //         .create({
  //           paymentType: "Visa"
  //         })
  //         .then(payment => res.status(201).send({paymentId: payment.id, status: "declined"}))
  //         .catch(error => res.status(400).send(error));
  //     }
  //   })
  //   .catch(error => res.status(400).send(error))
}

module.exports = { processPayment };
