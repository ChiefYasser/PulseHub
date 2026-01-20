const User = require('../models/User');
const Plan = require('../models/Plan');

// @route   GET /api/members/profile
exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate('subscription.planId');
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @route   POST /api/members/subscribe
exports.subscribeToPlan = async (req, res) => {
  try {
    const { planId } = req.body;
    const userId = req.user.id; 

    const plan = await Plan.findById(planId);
    if (!plan) {
      return res.status(404).json({ message: 'Plan not found' });
    }

    const startDate = new Date();
    const endDate = new Date();
    endDate.setDate(startDate.getDate() + plan.durationDays);

    const user = await User.findByIdAndUpdate(
      userId,
      {
        subscription: {
          planId: plan._id,
          startDate: startDate,
          endDate: endDate,
          status: 'active',
        },
      },
      { new: true } 
    ).populate('subscription.planId');

    res.json({
      message: `Successfully subscribed to ${plan.name}`,
      subscription: user.subscription,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};