const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

//@desc POST register a user
//@Route POST api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
  const {
    username,
    email,
    password,
    companyName,
    phoneNumber,
    address,
    city,
    website,
    interestCategories,
    firstName,
    lastName,
    designation,
    mobileNumber,
    alternativeEmail,
  } = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error('All fields are mandatory');
  }

  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error('User already registered');
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    username,
    email,
    password: hashPassword,
    isAdmin: false,
    // Additional fields
    companyName,
    phoneNumber,
    address,
    city,
    website,
    interestCategories,
    firstName,
    lastName,
    designation,
    mobileNumber,
    alternativeEmail,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      email: user.email,
      isAdmin: user.isAdmin,
      // Return additional fields if needed
    });
  } else {
    res.status(400);
    throw new Error('User data is not valid');
  }
});

//@desc POST login user
//@Route POST api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error('all feilds are mandotory');
  }
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
          isAdmin: user.isAdmin,
        },
      },

      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '30m' }
    );
    res.status(200).json({ accessToken });
  } else {
    res.status(401);
    throw new Error('Email or password not valid');
  }
  res.json({ message: 'login user' });
});

// @desc GET all users
// @Route GET api/users
// @access private
const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find({}).select('-password');
  res.status(200).json(users);
});

//@desc GET current users
//@Route POST api/users/current
//@access public
const currentUser = asyncHandler(async (req, res) => {
  res.json(req.user);
});

module.exports = { registerUser, loginUser, currentUser, getAllUsers };
