'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { GraduationCap, BookOpen, Mail, Lock, Eye, EyeOff } from 'lucide-react';

const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(1, 'Password is required'),
  rememberMe: z.boolean().optional(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const roles = [
  {
    value: 'tutor' as const,
    label: 'Tutor',
    icon: GraduationCap,
    gradient: 'from-indigo-500 to-blue-600',
    activeBg: 'bg-gradient-to-r from-indigo-500 to-blue-600',
    dashboard: '/teacher-dashboard',
  },
  {
    value: 'student' as const,
    label: 'Student',
    icon: BookOpen,
    gradient: 'from-violet-500 to-purple-600',
    activeBg: 'bg-gradient-to-r from-violet-500 to-purple-600',
    dashboard: '/student-dashboard',
  },
];

export default function LoginForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedRole, setSelectedRole] = useState<'tutor' | 'student'>('student');
  const [showPassword, setShowPassword] = useState(false);

  const currentRole = roles.find((r) => r.value === selectedRole)!;

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '', rememberMe: false },
  });

  const rememberMe = watch('rememberMe');

  const onSubmit = async (data: LoginFormValues) => {
    setIsLoading(true);
    console.log('Login data:', { ...data, role: selectedRole });
    await new Promise((r) => setTimeout(r, 1500));
    
    // Simulate setting auth state
    localStorage.setItem('userRole', selectedRole);
    localStorage.setItem('isLoggedIn', 'true');
    
    setIsLoading(false);
    router.push(currentRole.dashboard);
  };

  return (
    <div className="w-full">
      {/* Role Toggle */}
      <div className="mb-6">
        <p className="text-sm font-bold text-[#1A1A24] mb-3 text-center">Sign in as</p>
        <div className="relative flex bg-[#1A1A24]/5 border border-[#1A1A24]/10 rounded-2xl p-1">
          {/* Sliding indicator */}
          <div
            className={`absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-xl shadow-md transition-all duration-300 ease-in-out
              ${selectedRole === 'tutor'
                ? 'left-1 bg-[#4D148C]'
                : 'left-[calc(50%+2px)] bg-[#ff6200]'
              }`}
          />
          {roles.map((role) => {
            const Icon = role.icon;
            const isActive = selectedRole === role.value;
            return (
              <button
                key={role.value}
                type="button"
                onClick={() => setSelectedRole(role.value)}
                className={`relative z-10 flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-sm transition-colors duration-200
                  ${isActive ? 'text-white' : 'text-[#1A1A24]/65 hover:text-[#1A1A24]'}`}
              >
                <Icon className="w-4 h-4" />
                {role.label}
              </button>
            );
          })}
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Email */}
        <div className="space-y-1.5">
          <label htmlFor="login-email" className="block text-sm font-bold text-[#1A1A24]">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1A1A24]/40" />
            <input
              id="login-email"
              type="email"
              placeholder="name@example.com"
              {...register('email')}
              className={`w-full pl-10 pr-4 py-2.5 rounded-xl border bg-white/80 text-[#1A1A24] text-sm transition-all outline-none focus:ring-2 placeholder:text-[#1A1A24]/40
                ${errors.email ? 'border-red-400 focus:ring-red-200' : 'border-[#1A1A24]/15 focus:ring-[#ff6200]/20 focus:border-[#ff6200]'}`}
            />
          </div>
          {errors.email && <p className="text-xs text-red-500 font-medium">{errors.email.message}</p>}
        </div>

        {/* Password */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label htmlFor="login-password" className="block text-sm font-bold text-[#1A1A24]">
              Password
            </label>
            <Link href="/forgot-password" className="text-xs font-bold text-[#ff6200] hover:text-[#e55800] transition-colors">
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1A1A24]/40" />
            <input
              id="login-password"
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••"
              {...register('password')}
              className={`w-full pl-10 pr-10 py-2.5 rounded-xl border bg-white/80 text-[#1A1A24] text-sm transition-all outline-none focus:ring-2 placeholder:text-[#1A1A24]/40
                ${errors.password ? 'border-red-400 focus:ring-red-200' : 'border-[#1A1A24]/15 focus:ring-[#ff6200]/20 focus:border-[#ff6200]'}`}
            />
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#1A1A24]/40 hover:text-[#1A1A24] transition-colors"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
          {errors.password && <p className="text-xs text-red-500 font-medium">{errors.password.message}</p>}
        </div>

        {/* Remember Me */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            role="checkbox"
            aria-checked={rememberMe}
            id="rememberMe"
            onClick={() => setValue('rememberMe', !rememberMe)}
            className={`w-4 h-4 rounded flex items-center justify-center border-2 transition-all
              ${rememberMe ? 'bg-[#ff6200] border-[#ff6200]' : 'bg-white border-[#1A1A24]/30 hover:border-[#ff6200]'}`}
          >
            {rememberMe && (
              <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            )}
          </button>
          <label htmlFor="rememberMe" className="text-sm font-medium text-[#1A1A24]/80 cursor-pointer select-none" onClick={() => setValue('rememberMe', !rememberMe)}>
            Remember me
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3 px-6 rounded-xl font-bold text-sm text-white bg-[#ff6200] hover:bg-[#e55800] transition-all duration-200 shadow-lg shadow-[#ff6200]/20 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Signing in...
            </span>
          ) : (
            `Sign In as ${selectedRole === 'tutor' ? 'Tutor' : 'Student'}`
          )}
        </button>
      </form>

      {/* Social Login */}
      <div className="mt-6">
        <div className="relative mb-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#1A1A24]/15" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-[#fdf8f2] px-3 text-xs font-bold text-[#1A1A24]/50 uppercase tracking-wider">
              Or continue with
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-[#1A1A24]/15 bg-white/80 hover:bg-white transition-all text-sm font-bold text-[#1A1A24] shadow-sm hover:shadow-md hover:border-[#ff6200]/40"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#EA4335" d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115Z"/>
              <path fill="#34A853" d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 0 1-6.723-4.777L1.24 17.35C3.198 21.302 7.27 24 12 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987Z"/>
              <path fill="#4A90D9" d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21Z"/>
              <path fill="#FBBC05" d="M5.277 14.314c-.394-1.108-.604-2.295-.604-3.314s.21-2.206.604-3.314L1.24 6.65a11.934 11.934 0 0 0 0 10.699l4.037-3.035Z"/>
            </svg>
            Google
          </button>
          <button
            type="button"
            className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-[#1A1A24]/15 bg-white/80 hover:bg-white transition-all text-sm font-bold text-[#1A1A24] shadow-sm hover:shadow-md hover:border-[#ff6200]/40"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#00A4EF">
              <path d="M0 0h11.5v11.5H0zm12.5 0H24v11.5H12.5zM0 12.5h11.5V24H0zm12.5 0H24V24H12.5z"/>
            </svg>
            Microsoft
          </button>
        </div>
      </div>

      <p className="mt-6 text-center text-sm font-medium text-[#1A1A24]/70">
        Don&apos;t have an account?{' '}
        <Link href="/register" className="font-bold text-[#ff6200] hover:text-[#e55800] transition-colors">
          Create account
        </Link>
      </p>
    </div>
  );
}
