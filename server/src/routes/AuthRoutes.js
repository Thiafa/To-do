const authMiddleware = require('../middlewares/authMiddleware');
const {
  createUser,
  showUser,
  loginUser,
} = require('../controllers/UserController');
const router = require('express').Router();

router.get('/', authMiddleware, showUser);
router.get('/:id', showUser);
router.post('/store', createUser);

router.post('/login', loginUser);

module.exports = router;
