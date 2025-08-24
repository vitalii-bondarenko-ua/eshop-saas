'use client';

import { Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AppLink, emailRegex } from '../../config/constants';
import { GoogleButton } from '../GoogleButton';

type FormData = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(setServerError, router, data);
  };

  return (
    <div className="min-h-[85vh] w-full bg-gray-100 py-10">
      <h1 className="text-center font-Poppins text-4xl font-semibold text-black">
        Login
      </h1>
      <p className="py-3 text-center text-lg font-medium text-gray-400">
        Home . Login
      </p>
      <div className="flex justify-center">
        <div className="rounded-lg bg-white p-8 shadow md:w-[480px]">
          <h3 className="mb-2 text-center text-3xl font-semibold">
            Login to Eshop
          </h3>
          <p className="mb-4 flex justify-center gap-1 text-center text-gray-500">
            <span>Don&apos;t have an account</span>
            <Link href={AppLink.Signup} className="text-blue-500">
              Sign Up
            </Link>
          </p>
          <GoogleButton />
          <div className="my-5 flex items-center text-sm text-gray-400">
            <div className="flex-1 border-t border-gray-300" />
            <span className="px-3">or Sign in with Email</span>
            <div className="flex-1 border-t border-gray-300" />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-2">
              <label htmlFor="email" className="mb-1 block text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="eshop.saas@gmail.com"
                className="mb-1 w-full !rounded border border-gray-300 p-2 outline-none"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: emailRegex,
                    message: 'Invalid email address',
                  },
                })}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="mb-2">
              <label htmlFor="password" className="mb-1 block text-gray-600">
                Password
              </label>
              <div className="relative">
                <input
                  type={isVisiblePassword ? 'text' : 'password'}
                  id="password"
                  placeholder="Min. 6 characters"
                  className="mb-1 w-full !rounded border border-gray-300 p-2 outline-none"
                  {...register('password', {
                    required: 'Password is required',
                    minLength: {
                      value: 6,
                      message: 'Password must be at least 6 characters',
                    },
                  })}
                />
                <button
                  type="button"
                  onClick={() => setIsVisiblePassword((prev) => !prev)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-400"
                >
                  {isVisiblePassword ? <Eye /> : <EyeOff />}
                </button>
              </div>
              {errors.password && (
                <p className="text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="mb-2 flex items-center justify-between">
              <label htmlFor="remember-me" className="mb-1 block text-gray-600">
                <input
                  type="checkbox"
                  id="remember-me"
                  className="mr-2"
                  checked={rememberMe}
                  onChange={() => setRememberMe((prev) => !prev)}
                />
                Remember me
              </label>
              <Link
                href={AppLink.ForgotPassword}
                className="text-sm text-blue-500"
              >
                Forgot password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full cursor-pointer rounded-lg bg-black py-2 text-lg text-white"
            >
              Login
            </button>
            {serverError && (
              <p className="mt-2 text-sm text-red-500">{serverError}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
