// Definir servidor e lógica principal
const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const { port, mongodb } = require('./src/config/env.config');

app.use(express.json());

const connectDatabase = async () => {
  try {
    await mongoose.connect(mongodb);
    console.log('Banco de dados conectado');
  } catch (error) {
    console.error('Erro ao conectar ao banco de dado', error);
  }
};

connectDatabase();

const userRoutes = require('./src/routes/AuthRoutes');

app.use('/api/user', userRoutes);

app.listen(port || 3000, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
