const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Please add the username'],
    },
    email: {
      type: String,
      required: [true, 'Please add the email'],
      unique: [true, 'This email is already taken'],
    },
    password: {
      type: String,
      required: [true, 'Please add the password'],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    // Additional fields
    companyName: String,
    phoneNumber: String,
    address: String,
    city: String,
    website: String,
    interestCategories: [String],
    firstName: String,
    lastName: String,
    designation: String,
    mobileNumber: String,
    alternativeEmail: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
