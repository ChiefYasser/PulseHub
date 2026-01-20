const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ['member', 'admin', 'trainer'],
      default: 'member',
    },
    subscription: {
      planId: { type: mongoose.Schema.Types.ObjectId, ref: 'Plan' },
      startDate: Date,
      endDate: Date,
      status: { type: String, enum: ['active', 'expired', 'none'], default: 'none' },
    },
    profile: {
      phone: String,
      emergencyContact: String,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);