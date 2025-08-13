import { Request, Response } from 'express';
import { AppError } from './app-error';

export const errorMiddleware = (err: unknown, req: Request, res: Response) => {
  if (err instanceof AppError) {
    console.log(`Error ${req.method} ${req.url} - ${err.message}`);

    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
      ...(err?.details ? { details: err.details } : {}),
    });
  }

  console.log('Unhandled error: ', err);

  return res.status(500).json({
    error: 'Something went wrong, please try again',
  });
};
