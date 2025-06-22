const express = require('express');
const router = express.Router();
const { login, changeCredentials } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

router.post('/login', login);
router.post('/change-credentials', protect, changeCredentials);

module.exports = router;
