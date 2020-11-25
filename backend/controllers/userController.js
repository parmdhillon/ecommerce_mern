import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

//@desc     Auth user & get token
//@route    POST /api/user/login
//@access   PUBLIC
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
});

export { authUser };
