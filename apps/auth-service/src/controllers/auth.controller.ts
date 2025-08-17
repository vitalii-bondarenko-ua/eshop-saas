import prisma from '@eshop-saas/libs/prisma';
import { ValidationError } from '@eshop-saas/middleware/error-handler';
import bcrypt from 'bcryptjs';
import { NextFunction, Request, Response } from 'express';
import {
  checkOtpRestrictions,
  sendOtp,
  trackOtpRequests,
  validateRegistrationData,
  verifyOtp,
} from '../utils/auth.helper';

export const userRegistration = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    validateRegistrationData(req.body, 'user');
    const { name, email } = req.body;

    const existingUser = await prisma.users.findUnique({ where: { email } });

    if (existingUser) {
      return next(new ValidationError('User already exists with this email!'));
    }

    await checkOtpRestrictions(email);
    await trackOtpRequests(email);
    await sendOtp(name, email, 'user-activation-mail');

    res.status(200).json({
      message: 'OTP sent to email. Please verify your account.',
    });
  } catch (error) {
    return next(error);
  }
};

export const verifyUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, otp, password, name } = req.body;

    if (!email || !otp || !name) {
      throw new ValidationError('All fields are requeired!');
    }

    const existingUser = await prisma.users.findUnique({ where: { email } });

    if (existingUser) {
      throw new ValidationError('User already exists with this email!');
    }

    await verifyOtp(email, otp);
    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.users.create({
      data: { name, email, password: hashedPassword },
    });

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
    });
  } catch (error) {
    return next(error);
  }
};
