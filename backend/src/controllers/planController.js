const Plan = require('../models/Plan');

//   GET /api/plans
exports.getAllPlans = async (req, res) => {
  try {
    const plans = await Plan.find();
    res.json(plans);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// @route   POST /api/plans
exports.createPlan = async (req, res) => {
  try {
    const { name, price, durationDays, features, description } = req.body;
    
    const plan = await Plan.create({
      name,
      price,
      durationDays,
      features,
      description
    });

    res.status(201).json(plan);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};