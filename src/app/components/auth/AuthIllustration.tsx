'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Users, BarChart2, Star, Clock, Award } from 'lucide-react';

const stats = [
  { label: 'Active Students', value: '12,500+', icon: Users, color: 'from-blue-400 to-indigo-500' },
  { label: 'Expert Tutors', value: '480+', icon: GraduationCap, color: 'from-violet-400 to-purple-500' },
  { label: 'Courses Available', value: '2,300+', icon: BookOpen, color: 'from-sky-400 to-blue-500' },
];

const testimonial = {
  quote: 'FacultyOnline transformed the way I teach — my students are more engaged than ever.',
  name: 'Dr. Priya Sharma',
  title: 'Senior Educator',
  initials: 'PS',
};

const floatingBadges = [
  { icon: Star, label: '4.9 Rating', color: 'bg-amber-50 text-amber-700 border-amber-200', x: '10%', y: '15%', delay: 0 },
  { icon: Award, label: 'Top Tutor', color: 'bg-indigo-50 text-indigo-700 border-indigo-200', x: '65%', y: '8%', delay: 0.3 },
  { icon: Clock, label: '24/7 Access', color: 'bg-green-50 text-green-700 border-green-200', x: '5%', y: '75%', delay: 0.6 },
  { icon: BarChart2, label: 'Live Analytics', color: 'bg-violet-50 text-violet-700 border-violet-200', x: '60%', y: '82%', delay: 0.9 },
];

export default function AuthIllustration() {
  return (
    <div
      className="hidden lg:flex flex-1 flex-col justify-center items-center relative z-10 p-12 overflow-hidden"
      style={{ background: 'linear-gradient(145deg, #1e1b4b 0%, #312e81 40%, #1d4ed8 100%)' }}
    >
      {/* Glow effects */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{ background: '#818cf8' }} />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{ background: '#60a5fa' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-10 blur-3xl" style={{ background: '#a78bfa' }} />

      {/* Floating Badges */}
      {floatingBadges.map((badge, i) => {
        const Icon = badge.icon;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
            transition={{ delay: badge.delay, duration: 3, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
            className={`absolute flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold shadow-lg ${badge.color}`}
            style={{ left: badge.x, top: badge.y }}
          >
            <Icon className="w-3 h-3" />
            {badge.label}
          </motion.div>
        );
      })}

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-md flex flex-col items-center"
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 shadow">
          <GraduationCap className="w-3.5 h-3.5 text-indigo-300" />
          Trusted by 12,500+ learners
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white text-center leading-tight mb-4 tracking-tight drop-shadow-md">
          Learn. Teach.{' '}
          <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg, #a5b4fc, #93c5fd)' }}>
            Grow Together.
          </span>
        </h2>
        <p className="text-base text-indigo-200/80 text-center mb-10 max-w-sm leading-relaxed">
          Join the most powerful faculty management & e-learning platform designed for modern educators and students.
        </p>

        {/* Stats Cards */}
        <div className="w-full grid grid-cols-3 gap-3 mb-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
                className="flex flex-col items-center gap-2 p-4 rounded-2xl"
                style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.15)' }}
              >
                <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <p className="text-lg font-extrabold text-white leading-none">{stat.value}</p>
                <p className="text-[10px] text-indigo-200/70 text-center leading-tight font-medium">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="w-full rounded-2xl p-5"
          style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}
        >
          <div className="flex gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 text-amber-400" fill="#fbbf24" />
            ))}
          </div>
          <p className="text-sm text-white/85 italic leading-relaxed mb-4">
            &quot;{testimonial.quote}&quot;
          </p>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-400 to-blue-500 flex items-center justify-center text-xs font-bold text-white shadow">
              {testimonial.initials}
            </div>
            <div>
              <p className="text-sm font-bold text-white">{testimonial.name}</p>
              <p className="text-xs text-indigo-300">{testimonial.title}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
