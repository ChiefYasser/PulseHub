const GymClass = require('../models/GymClass');

// @route   POST /api/classes
exports.createClass = async (req, res) => {
  try {
    const { name, startTime, durationMinutes, capacity } = req.body;

    const newClass = await GymClass.create({
      name,
      startTime,
      durationMinutes,
      capacity,
      trainer: req.user.id 
    });

    res.status(201).json(newClass);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @route   GET /api/classes
exports.getClasses = async (req, res) => {
  try {
    const classes = await GymClass.find()
      .populate('trainer', 'username') 
      .sort({ startTime: 1 }); 
    res.json(classes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @route   POST /api/classes/:id/book
exports.bookClass = async (req, res) => {
  try {
    const classId = req.params.id;
    const userId = req.user.id;

    const gymClass = await GymClass.findById(classId);

    if (!gymClass) {
      return res.status(404).json({ message: 'Class not found' });
    }

    if (gymClass.attendees.length >= gymClass.capacity) {
      return res.status(400).json({ message: 'Class is full' });
    }

    if (gymClass.attendees.includes(userId)) {
      return res.status(400).json({ message: 'You are already booked' });
    }

    gymClass.attendees.push(userId);
    await gymClass.save();

    res.json({ message: 'Class booked successfully!' });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};