const mongoose = require("mongoose");

const userScheema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please add the user name"],
    },
    email: {
      type: String,
      require: [true, "Please add the email"],
      unique: [true, "This email already taken"],
    },
    password: {
      type: String,
      require: [true, "please add the password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userScheema);
