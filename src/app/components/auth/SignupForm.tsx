'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { GraduationCap, BookOpen, User, Mail, Lock, CheckCircle2, Eye, EyeOff } from 'lucide-react';

const signupSchema = z
  .object({
    fullName: z.string().min(2, 'Full name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string(),
    role: z.enum(['tutor', 'student'], { message: 'Please select your role' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

type SignupFormValues = z.infer<typeof signupSchema>;

const roles = [
  {
    value: 'tutor' as const,
    label: 'Tutor',
    description: 'Teach & mentor students',
    icon: GraduationCap,
    gradient: 'from-[#6b21a8] to-[#4D148C]',
    lightBg: 'bg-[#4D148C]/10',
    border: 'border-[#4D148C]',
    ring: 'ring-[#4D148C]',
    iconColor: 'text-[#4D148C]',
  },
  {
    value: 'student' as const,
    label: 'Student',
    description: 'Learn from expert tutors',
    icon: BookOpen,
    gradient: 'from-[#ff8c42] to-[#ff6200]',
    lightBg: 'bg-[#ff6200]/10',
    border: 'border-[#ff6200]',
    ring: 'ring-[#ff6200]',
    iconColor: 'text-[#ff6200]',
  },
];

function PasswordField({
  id,
  placeholder,
  registration,
  error,
  label,
}: {
  id: string;
  placeholder: string;
  registration: object;
  error?: string;
  label: string;
}) {
  const [show, setShow] = useState(false);
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm font-bold text-[#1A1A24]">
        {label}
      </label>
      <div className="relative">
        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1A1A24]/40" />
        <input
          id={id}
          type={show ? 'text' : 'password'}
          placeholder={placeholder}
          {...registration}
          className={`w-full pl-10 pr-10 py-2.5 rounded-xl border bg-white/80 text-[#1A1A24] text-sm transition-all outline-none focus:ring-2 placeholder:text-[#1A1A24]/40
            ${error ? 'border-red-400 focus:ring-red-200' : 'border-[#1A1A24]/15 focus:ring-[#ff6200]/20 focus:border-[#ff6200]'}`}
        />
        <button
          type="button"
          onClick={() => setShow((s) => !s)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-[#1A1A24]/40 hover:text-[#1A1A24] transition-colors"
        >
          {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
        </button>
      </div>
      {error && <p className="text-xs text-red-500 font-medium">{error}</p>}
    </div>
  );
}

export default function SignupForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: { fullName: '', email: '', password: '', confirmPassword: '', role: undefined },
  });

  const selectedRole = watch('role');

  const onSubmit = async (data: SignupFormValues) => {
    setIsLoading(true);
    console.log('Signup data:', data);
    await new Promise((r) => setTimeout(r, 1500));
    
    // Simulate setting auth state
    if (data.role) {
      localStorage.setItem('userRole', data.role);
      localStorage.setItem('isLoggedIn', 'true');
    }

    setIsLoading(false);
    if (data.role === 'tutor') {
      router.push('/teacher-dashboard');
    } else {
      router.push('/student-dashboard');
    }
  };

  return (
    <div className="w-full">
      {/* Role Selector */}
      <div className="mb-5">
        <p className="text-sm font-bold text-[#1A1A24] mb-3">I want to join as</p>
        <div className="grid grid-cols-2 gap-3">
          {roles.map((role) => {
            const isSelected = selectedRole === role.value;
            const Icon = role.icon;
            return (
              <button
                key={role.value}
                type="button"
                onClick={() => setValue('role', role.value, { shouldValidate: true })}
                className={`relative group flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all duration-200 cursor-pointer select-none
                  ${isSelected
                    ? `${role.border} ${role.lightBg} shadow-sm`
                    : 'border-[#1A1A24]/15 bg-white/80 hover:border-[#1A1A24]/30 hover:bg-white'
                  }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200
                  ${isSelected ? `bg-gradient-to-br ${role.gradient} shadow-lg` : 'bg-[#1A1A24]/5'}`}
                >
                  <Icon className={`w-6 h-6 ${isSelected ? 'text-white' : 'text-[#1A1A24]/40'}`} />
                </div>
                <div className="text-center">
                  <p className={`font-bold text-sm ${isSelected ? role.iconColor : 'text-[#1A1A24]'}`}>
                    {role.label}
                  </p>
                  <p className="text-[11px] text-[#1A1A24]/60 leading-tight mt-0.5">{role.description}</p>
                </div>
                {isSelected && (
                  <CheckCircle2 className={`absolute top-2 right-2 w-4 h-4 ${role.iconColor}`} />
                )}
              </button>
            );
          })}
        </div>
        {errors.role && <p className="text-xs text-red-500 font-medium mt-2">{errors.role.message}</p>}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Full Name */}
        <div className="space-y-1.5">
          <label htmlFor="fullName" className="block text-sm font-bold text-[#1A1A24]">
            Full Name
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1A1A24]/40" />
            <input
              id="fullName"
              placeholder="John Doe"
              {...register('fullName')}
              className={`w-full pl-10 pr-4 py-2.5 rounded-xl border bg-white/80 text-[#1A1A24] text-sm transition-all outline-none placeholder:text-[#1A1A24]/40
                ${errors.fullName ? 'border-red-400' : 'border-[#1A1A24]/15 focus:border-[#ff6200]'}`}
            />
          </div>
          {errors.fullName && <p className="text-xs text-red-500 font-medium">{errors.fullName.message}</p>}
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label htmlFor="signup-email" className="block text-sm font-bold text-[#1A1A24]">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1A1A24]/40" />
            <input
              id="signup-email"
              type="email"
              placeholder="name@example.com"
              {...register('email')}
              className={`w-full pl-10 pr-4 py-2.5 rounded-xl border bg-white/80 text-[#1A1A24] text-sm transition-all outline-none placeholder:text-[#1A1A24]/40
                ${errors.email ? 'border-red-400' : 'border-[#1A1A24]/15 focus:border-[#ff6200]'}`}
            />
          </div>
          {errors.email && <p className="text-xs text-red-500 font-medium">{errors.email.message}</p>}
        </div>

        {/* Passwords */}
        <div className="grid grid-cols-2 gap-3">
          <PasswordField
            id="password"
            label="Password"
            placeholder="Min 8 chars"
            registration={register('password')}
            error={errors.password?.message}
          />
          <PasswordField
            id="confirmPassword"
            label="Confirm"
            placeholder="Repeat password"
            registration={register('confirmPassword')}
            error={errors.confirmPassword?.message}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full mt-1 py-3 px-6 rounded-xl font-bold text-sm text-white bg-[#ff6200] hover:bg-[#e55800] transition-all duration-200 shadow-lg shadow-[#ff6200]/20 disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.98]"
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Creating account...
            </span>
          ) : (
            `Create ${selectedRole === 'tutor' ? 'Tutor' : selectedRole === 'student' ? 'Student' : ''} Account`
          )}
        </button>
      </form>

      <p className="mt-6 text-center text-sm font-medium text-[#1A1A24]/70">
        Already have an account?{' '}
        <Link href="/login" className="font-bold text-[#ff6200] hover:text-[#e55800] transition-colors">
          Sign in
        </Link>
      </p>
    </div>
  );
}
