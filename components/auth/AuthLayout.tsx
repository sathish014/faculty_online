import React from 'react';
import { motion } from 'framer-motion';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full flex bg-slate-50 dark:bg-slate-950 font-sans selection:bg-blue-500/30">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-blue-500/10 blur-[120px] rounded-full mix-blend-multiply opacity-50 dark:opacity-20 animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-slate-500/10 blur-[120px] rounded-full mix-blend-multiply opacity-50 dark:opacity-20" />
      </div>

      {children}
    </div>
  );
}
