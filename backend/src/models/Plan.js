const mongoose = require('mongoose');

const planSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true, // e.g., "Gold Membership"
    },
    price: {
      type: Number,
      required: true, // e.g., 50
    },
    durationDays: {
      type: Number,
      required: true, // e.g., 30 for monthly, 365 for yearly
    },
    features: [String], // e.g., ["Access 24/7", "Free Sauna"]
    description: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Plan', planSchema);