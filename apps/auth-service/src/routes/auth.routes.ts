import express, { Router } from 'express';
import { userRegistration, verifyUser } from '../controllers/auth.controller';

export const authRouter: Router = express.Router();

authRouter.post('/user-registration', userRegistration);
authRouter.post('/verify-user', verifyUser);
