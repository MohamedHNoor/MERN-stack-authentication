import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';
import User from '../models/userModel.js';

// @desc auth user / set token
// route POST /api/users/auth
// @access public
const authUser = asyncHandler(async (req, res) => {
  return res.status(200).json({ message: 'auth user' });
});

// @desc register new user
// route POST /api/users
// @access public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  // check if user exist
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('User already exist');
  }

  // create new user
  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// @desc logout user
// route POST /api/users/logout
// @access public
const logoutUser = asyncHandler(async (req, res) => {
  return res.status(200).json({ message: 'logout user' });
});

// @desc get user profile
// route Get /api/users/profile
// @access private
const getUserProfile = asyncHandler(async (req, res) => {
  return res.status(200).json({ message: 'get user profile' });
});

// @desc update user profile
// route PUT /api/users/profile
// @access private
const updateUserProfile = asyncHandler(async (req, res) => {
  return res.status(200).json({ message: 'Update user profile' });
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
