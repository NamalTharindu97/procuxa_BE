const express = require('express');
const {
  registerUser,
  loginUser,
  currentUser,
  getAllUsers,
} = require('../Controllers/userController');
const validateToken = require('../middleware/validateTokenHandler');
const router = express.Router();

router.route('/register').post(registerUser);
router.post('/login', loginUser);
router.get('/current', validateToken, currentUser);
router.get('/', getAllUsers);

module.exports = router;
