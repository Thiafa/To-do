const mongoose = require('mongoose');
const { hashPassword } = require('../utils/security');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre('save', async function (next) {
  try {
    const encryptedPassword = await hashPassword(this.password);
    this.password = encryptedPassword;
    next();
  } catch (error) {
    return next(error);
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
