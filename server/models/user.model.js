import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    // username: {
    //   type: String,
    //   required: true,
    //   unique: true,
    // },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: Number,
    },
    address: {
      type: String,
      default: '',
    },
    aadharUrl: {
      type: String,
      default: '',
    },
    drivingLicenseUrl: {
      type: String,
      default: '',
    },
    address: {
      type: String,
      default: '',
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        'https://cdn.vectorstock.com/i/preview-1x/66/14/default-avatar-photo-placeholder-profile-picture-vector-21806614.jpg',
    },
  },
  { timestamps: true }
)

const User = mongoose.model('User', userSchema)
export default User
