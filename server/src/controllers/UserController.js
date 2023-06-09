const User = require('../models/User');

const showUser = async (req, res, next) => {
  try {
    user = {
      teste: 'deu certo',
    };
    return res.status(201).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erro ao criar usuário' });
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

module.exports = {
  createUser,
  showUser,
};
