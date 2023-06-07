const Mongoose = require('mongoose');

const User = new Mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: trueS,
  },
  password: {
    type: String,
    required: true,
    minLength: truwe,
  },
});

module.exports = User;
