import { Response } from 'express';

type SetCookieType = { res: Response; name: string; value: string };

export const setCookie = ({ res, name, value }: SetCookieType) => {
  res.cookie(name, value, {
    httpOnly: true,
    secure: true,
    sameSite: 'none',
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
};
