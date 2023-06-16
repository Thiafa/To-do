const jwt = require('jsonwebtoken');
const { secretKey } = require('../config/env.config');

const authMiddleware = (req, res, next) => {
  token = req.headers.authorization;
  token = token.substring(7);
  if (token) {
    try {
      const decoded = jwt.verify(token, secretKey);
      req.user = decoded;
      next();
    } catch (error) {
      res.status(401).json({ message: 'Token inválido' });
    }
  }
};

module.exports = authMiddleware;
