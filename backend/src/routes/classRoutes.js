const express = require('express');
const router = express.Router();
const { createClass, getClasses, bookClass } = require('../controllers/classController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', getClasses);

router.post('/:id/book', protect, bookClass);

router.post('/', protect, createClass);

module.exports = router;