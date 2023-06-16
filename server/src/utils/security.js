const bcrypt = require('bcrypt');

async function hashPassword(password) {
  try {
    const saltRounds = 10; // Número de rounds de hashing
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.error(error);
    throw new Error('Erro ao encriptar a senha');
  }
}

async function comparePassword(password, hashedPassword) {
  try {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    return isMatch;
  } catch (error) {
    console.error(error);
    throw new Error('Erro ao comparar as senhas');
  }
}

module.exports = {
  hashPassword,
  comparePassword,
};
