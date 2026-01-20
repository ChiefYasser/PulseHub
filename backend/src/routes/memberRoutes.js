const express = require('express');
const router = express.Router();
const { getProfile, subscribeToPlan } = require('../controllers/memberController');
const { protect } = require('../middleware/authMiddleware');


router.get('/profile', protect, getProfile);

router.post('/subscribe', protect, subscribeToPlan);

module.exports = router;