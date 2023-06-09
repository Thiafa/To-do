const { createUser, showUser } = require('../controllers/UserController');
const router = require('express').Router();

router.get('/', showUser);
router.post('/store', createUser);

module.exports = router;
