const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true,
  },
  currentLocation: {
    type: {
      type: String,
      enum: ['Point'],
    },
    coordinates: {
      type: [Number],
    },
  },
}, {
  timestamps: true,
});

driverSchema.index({ currentLocation: '2dsphere' });

const Driver = mongoose.model('Driver', driverSchema);

module.exports = Driver;
