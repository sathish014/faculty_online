'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

interface AuthCardProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

export default function AuthCard({ children, title, description }: AuthCardProps) {
  return (
    <div className="flex-1 flex flex-col justify-center items-center p-6 sm:p-10 z-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="w-full max-w-md"
      >
        {/* Logo */}
        <div className="flex items-center gap-2.5 mb-8">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center shadow-lg shadow-indigo-200">
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          <span className="font-extrabold text-lg text-slate-800 tracking-tight">FacultyOnline</span>
        </div>

        {/* Card */}
        <div
          className="rounded-3xl p-8 sm:p-10"
          style={{
            background: 'rgba(255,255,255,0.85)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            boxShadow: '0 8px 48px -8px rgba(99,102,241,0.15), 0 2px 12px -2px rgba(0,0,0,0.06)',
            border: '1px solid rgba(255,255,255,0.9)',
          }}
        >
          <div className="mb-7">
            <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 mb-1.5">
              {title}
            </h1>
            <p className="text-sm text-slate-500 font-medium">{description}</p>
          </div>
          {children}
        </div>
      </motion.div>
    </div>
  );
}
