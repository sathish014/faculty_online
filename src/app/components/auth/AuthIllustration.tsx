'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Laptop, Award, Users } from 'lucide-react';

export default function AuthIllustration() {
  const floatingIcons = [
    { Icon: GraduationCap, delay: 0, x: -80, y: -60, size: 'w-10 h-10', color: 'text-blue-400' },
    { Icon: BookOpen, delay: 0.2, x: 100, y: -100, size: 'w-8 h-8', color: 'text-blue-300' },
    { Icon: Laptop, delay: 0.4, x: -120, y: 80, size: 'w-12 h-12', color: 'text-blue-200' },
    { Icon: Award, delay: 0.6, x: 90, y: 120, size: 'w-10 h-10', color: 'text-blue-400' },
    { Icon: Users, delay: 0.8, x: -20, y: 160, size: 'w-8 h-8', color: 'text-blue-300' },
  ];

  return (
    <div className="hidden lg:flex flex-1 flex-col justify-center items-center relative z-10 p-12 bg-slate-900 overflow-hidden">
      {/* Background Gradient & Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900 via-slate-900 to-slate-900"></div>
        {/* Soft glowing background patterns */}
        <div className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] bg-blue-600/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-[0%] -right-[20%] w-[60%] h-[60%] bg-blue-800/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              y: [item.y, item.y - 15, item.y],
              x: [item.x, item.x + 10, item.x],
            }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: item.delay,
            }}
            className={`absolute ${item.color}`}
            style={{ x: item.x, y: item.y }}
          >
            <item.Icon className={item.size} />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-20 w-full max-w-xl flex flex-col items-center"
      >
        <div className="mb-6 inline-flex items-center justify-center p-3 bg-blue-600/20 rounded-2xl border border-blue-500/30 backdrop-blur-md">
          <GraduationCap className="w-10 h-10 text-blue-400" />
        </div>
        
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl text-center mb-6 drop-shadow-sm">
          Welcome to Faculty Portal
        </h1>
        <p className="text-lg leading-7 text-blue-100/80 text-center mb-12 max-w-lg">
          Manage classes, assignments, attendance, progress tracking, and student collaboration seamlessly.
        </p>

        {/* Modern Illustration: Virtual Classroom Dashboard Graphic */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full relative group"
        >
          <div className="absolute inset-0 bg-blue-500/10 blur-2xl rounded-[2rem] transform group-hover:scale-105 transition-transform duration-700" />
          <div className="relative w-full aspect-[16/9] bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden p-6 flex flex-col">
            {/* Fake Dashboard Header */}
            <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="w-1/3 h-2 bg-white/10 rounded-full" />
            </div>
            
            {/* Fake Dashboard Content */}
            <div className="flex-1 grid grid-cols-3 gap-4">
              <div className="col-span-2 space-y-4">
                <div className="w-full h-24 bg-gradient-to-r from-blue-600/30 to-blue-400/10 rounded-2xl border border-white/5" />
                <div className="w-3/4 h-12 bg-white/5 rounded-xl border border-white/5" />
                <div className="w-1/2 h-8 bg-white/5 rounded-xl border border-white/5" />
              </div>
              <div className="col-span-1 space-y-4">
                <div className="w-full h-full bg-slate-800/50 rounded-2xl border border-white/5 flex flex-col p-4 gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-blue-400/20" />
                    <div className="w-16 h-2 bg-white/10 rounded" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-purple-400/20" />
                    <div className="w-12 h-2 bg-white/10 rounded" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-green-400/20" />
                    <div className="w-20 h-2 bg-white/10 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
