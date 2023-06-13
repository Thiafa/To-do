const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { secretKey } = require('../config/env.config');

const showUser = async (req, res, next) => {
  try {
    id = req.params.id;
    if (id) {
      user = await User.findById(id);
    } else {
      user = await User.find({});
    }
    return res.status(201).json(user);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: 'Erro ao tentar recuperar os dados ' });
  }
};

const createUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.create({ name, email, password });
    return res.status(201).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro ao criar usuário' });
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    [user] = await User.find({
      email: email,
    });
    if (user) {
      const payload = { id: user.id, nome: user.name };
      const token = jwt.sign(payload, secretKey);
      return res.status(201).json({
        token,
      });
    } else {
      throw new Error('Credenciais Incorretas');
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Credenciais Incorretas' });
  }
};

module.exports = {
  createUser,
  showUser,
  loginUser,
};
