// Definir servidor e lógica principal
const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const { port, mongodb } = require('./src/config/env.config');

const main = async () => {
  try {
    await mongoose.connect(mongodb);
    console.log('Banco de dados conectado');
  } catch (error) {
    console.error('Erro ao conectar ao banco de dado', error);
  }
};

main();

app.get('/', (req, res, next) => {
  res.status(200).json({
    succeess: true,
    msg: 'Olá mundo',
    data: null,
  });
});

app.listen(port || 3000, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
