const mongoose = require('mongoose');

const gymClassSchema = mongoose.Schema(
  {
    name: { type: String, required: true }, 
    trainer: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User',
      required: true 
    },
    startTime: { type: Date, required: true },
    durationMinutes: { type: Number, default: 60 },
    capacity: { type: Number, default: 20 },
    attendees: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model('GymClass', gymClassSchema);