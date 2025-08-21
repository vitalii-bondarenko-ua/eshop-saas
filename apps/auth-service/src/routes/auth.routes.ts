import express, { Router } from 'express';
import {
  loginUser,
  userRegistration,
  verifyUser,
} from '../controllers/auth.controller';

export const authRouter: Router = express.Router();

authRouter.post('/user-registration', userRegistration);
authRouter.post('/verify-user', verifyUser);
authRouter.post('/login-user', loginUser);
