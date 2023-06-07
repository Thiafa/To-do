const User = require('../models/User');

const createUser = async () => {
  try {
    const user = new User();
    user.create({
      nome: 'Thiago',
      email: 'thiafa.vos@gmail.com',
    });
    console.log(user);
  } catch (error) {
    console.error('Erro ao tentar salvar');
  }
};

module.exports = {
  createUser,
};
