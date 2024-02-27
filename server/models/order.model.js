import mongoose from 'mongoose'

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    amount: {
      type: Number,
    },
    order_id: {
      type: String,
    },
    vehicleType: {
      type: String,
    },
    vehicleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Vehicle',
      default: null,
    },
    razorpay_payment_id: {
      type: String,
      default: null,
    },
    razorpay_order_id: {
      type: String,
      default: null,
    },
    razorpay_signature: {
      type: String,
      default: null,
    },
    sDate: {
      type: String,
      default: null,
    },
    eDate: {
      type: String,
      default: null,
    },
    sTime: {
      type: String,
      default: null,
    },
    eTime: {
      type: String,
      default: null,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null }, // Reference to User model
  },
  {
    timestamps: true,
  }
)

const OrderModel = mongoose.model('order', schema)

export default OrderModel
