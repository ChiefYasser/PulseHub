const express = require('express');
const router = express.Router();
const { getAllPlans, createPlan } = require('../controllers/planController');
const { protect } = require('../middleware/authMiddleware');

// Anyone can see plans
router.get('/', getAllPlans);
router.post('/', protect, createPlan);
module.exports = router;