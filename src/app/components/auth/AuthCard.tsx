'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface AuthCardProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

export default function AuthCard({ children, title, description }: AuthCardProps) {
  return (
    <div className="flex-1 flex flex-col justify-center items-center p-6 sm:p-12 z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white dark:bg-slate-900 rounded-[24px] shadow-[0_8px_40px_-12px_rgba(30,58,138,0.1)] dark:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.5)] border border-slate-100 dark:border-slate-800 p-8 sm:p-10"
      >
        <div className="mb-8 text-center sm:text-left">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-2">
            {title}
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
            {description}
          </p>
        </div>
        {children}
      </motion.div>
    </div>
  );
}
