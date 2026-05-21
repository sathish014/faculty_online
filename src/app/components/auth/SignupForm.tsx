'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { PasswordInput } from './PasswordInput';
import SocialLoginButtons from './SocialLoginButtons';

const signupSchema = z
  .object({
    fullName: z.string().min(2, 'Full name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string(),
    role: z.enum(['admin', 'faculty', 'student'], {
      message: 'Please select a role',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

type SignupFormValues = z.infer<typeof signupSchema>;

export default function SignupForm() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: undefined,
    },
  });

  const selectedRole = watch('role');

  const onSubmit = async (data: SignupFormValues) => {
    setIsLoading(true);
    // Simulate API call
    console.log('Signup data:', data);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-1.5">
          <Label htmlFor="fullName" className="text-slate-700 dark:text-slate-300">Full Name</Label>
          <Input
            id="fullName"
            placeholder="John Doe"
            {...register('fullName')}
            className={`bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 transition-all focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-transparent ${
              errors.fullName ? 'border-red-500 focus-visible:ring-red-500' : ''
            }`}
          />
          {errors.fullName && (
            <p className="text-sm text-red-500">{errors.fullName.message}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="email" className="text-slate-700 dark:text-slate-300">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="name@example.com"
            {...register('email')}
            className={`bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 transition-all focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-transparent ${
              errors.email ? 'border-red-500 focus-visible:ring-red-500' : ''
            }`}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="role" className="text-slate-700 dark:text-slate-300">Role</Label>
          <Select
            value={selectedRole}
            onValueChange={(value: 'admin' | 'faculty' | 'student') =>
              setValue('role', value, { shouldValidate: true })
            }
          >
            <SelectTrigger
              id="role"
              className={`bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 transition-all focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-transparent ${
                errors.role ? 'border-red-500 focus-visible:ring-red-500' : ''
              }`}
            >
              <SelectValue placeholder="Select your role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="faculty">Faculty</SelectItem>
              <SelectItem value="student">Student</SelectItem>
            </SelectContent>
          </Select>
          {errors.role && (
            <p className="text-sm text-red-500">{errors.role.message}</p>
          )}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="password" className="text-slate-700 dark:text-slate-300">Password</Label>
            <PasswordInput
              id="password"
              placeholder="••••••••"
              {...register('password')}
              className={`bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 transition-all focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-transparent ${
                errors.password ? 'border-red-500 focus-visible:ring-red-500' : ''
              }`}
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="confirmPassword" className="text-slate-700 dark:text-slate-300">Confirm Password</Label>
            <PasswordInput
              id="confirmPassword"
              placeholder="••••••••"
              {...register('confirmPassword')}
              className={`bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 transition-all focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-transparent ${
                errors.confirmPassword ? 'border-red-500 focus-visible:ring-red-500' : ''
              }`}
            />
            {errors.confirmPassword && (
              <p className="text-sm text-red-500">{errors.confirmPassword.message}</p>
            )}
          </div>
        </div>

        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all shadow-lg hover:shadow-blue-500/25 mt-2"
          disabled={isLoading}
        >
          {isLoading ? (
            <svg
              className="mr-2 h-4 w-4 animate-spin text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : null}
          {isLoading ? 'Creating account...' : 'Create Account'}
        </Button>
      </form>

      <div className="mt-6">
        <SocialLoginButtons />
      </div>

      <p className="mt-8 text-center text-sm text-slate-600 dark:text-slate-400">
        Already have an account?{' '}
        <Link
          href="/login"
          className="font-semibold text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
}
