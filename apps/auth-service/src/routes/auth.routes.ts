import express, { Router } from 'express';
import {
  loginUser,
  resetUserPassword,
  userForgotPassword,
  userRegistration,
  verifyUser,
  verifyUserForgotPassword,
} from '../controllers/auth.controller';

export const authRouter: Router = express.Router();

authRouter.post('/user-registration', userRegistration);
authRouter.post('/verify-user', verifyUser);
authRouter.post('/login-user', loginUser);
authRouter.post('/forgot-password-user', userForgotPassword);
authRouter.post('/reset-password-user', resetUserPassword);
authRouter.post('/verify-forgot-password-user', verifyUserForgotPassword);
