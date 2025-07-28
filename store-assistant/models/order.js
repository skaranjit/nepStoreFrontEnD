const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  store: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Store',
    required: true,
  },
  products: [{
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    },
    quantity: {
      type: Number,
      default: 1,
    },
  }],
  totalPrice: {
    type: Number,
    required: true,
  },
  deliveryAddress: {
    type: String,
    trim: true,
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'preparing', 'out-for-delivery', 'delivered', 'cancelled'],
    default: 'pending',
  },
  driver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
}, {
  timestamps: true,
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
