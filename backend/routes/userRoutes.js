import express from 'express';
import {
  authUser,
  getUserProfile,
  resgisterUser,
} from '../controllers/userController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', resgisterUser);

router.route('/login').post(authUser);

router.route('/profile').get(protect, getUserProfile);

export default router;
