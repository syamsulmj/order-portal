const User = require('../models').User;

const getUserById = (userId) => {
  return User
    .findById(userId)
    .then(user => { return user; })
    .catch(error => { return error; });
}

module.exports = { getUserById };
