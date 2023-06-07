const { createUser } = require('../models/User');
const router = require('express').Router();

router.post('/', createUser);

module.exports = {};
