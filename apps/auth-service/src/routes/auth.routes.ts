import express, { Router } from 'express';
import { userRegistration } from '../controllers/auth.controller';

export const authRouter: Router = express.Router();

authRouter.post('/user-registration', userRegistration);
