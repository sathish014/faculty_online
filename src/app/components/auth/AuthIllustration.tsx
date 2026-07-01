'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Users, BarChart2, Star, Clock, Award } from 'lucide-react';

const stats = [
  { label: 'Active Students', value: '12,500+', icon: Users, color: 'from-[#ff6200] to-[#e55800]' },
  { label: 'Expert Tutors', value: '480+', icon: GraduationCap, color: 'from-[#6b21a8] to-[#4D148C]' },
  { label: 'Courses Available', value: '2,300+', icon: BookOpen, color: 'from-[#ff8c42] to-[#ff6200]' },
];

const testimonial = {
  quote: 'FacultyOnline transformed the way I teach — my students are more engaged than ever.',
  name: 'Dr. Priya Sharma',
  title: 'Senior Educator',
  initials: 'PS',
};

const floatingBadges = [
  { icon: Star, label: '4.9 Rating', color: 'bg-[#fff9f0] text-[#1A1A24] border-[#ff6200]/30 shadow-md', x: '10%', y: '15%', delay: 0 },
  { icon: Award, label: 'Top Tutor', color: 'bg-[#ff6200] text-white border-[#ff6200] shadow-md', x: '65%', y: '8%', delay: 0.3 },
  { icon: Clock, label: '24/7 Access', color: 'bg-[#fff9f0] text-[#1A1A24] border-white/40 shadow-md', x: '5%', y: '75%', delay: 0.6 },
  { icon: BarChart2, label: 'Live Analytics', color: 'bg-[#4D148C] text-white border-white/20 shadow-md', x: '60%', y: '82%', delay: 0.9 },
];

export default function AuthIllustration() {
  return (
    <div
      className="hidden lg:flex flex-1 flex-col justify-center items-center relative z-10 p-12 overflow-hidden"
      style={{ background: 'linear-gradient(145deg, #380d66 0%, #4D148C 50%, #20053e 100%)' }}
    >
      {/* Glow effects */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-30 blur-3xl" style={{ background: '#ff6200' }} />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full opacity-30 blur-3xl" style={{ background: '#8b5cf6' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-15 blur-3xl" style={{ background: '#ff6200' }} />

      {/* Floating Badges */}
      {floatingBadges.map((badge, i) => {
        const Icon = badge.icon;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
            transition={{ delay: badge.delay, duration: 3, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
            className={`absolute flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border text-xs font-bold ${badge.color}`}
            style={{ left: badge.x, top: badge.y }}
          >
            <Icon className="w-3.5 h-3.5 text-[#ff6200]" />
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
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white/95 text-xs font-bold px-4 py-1.5 rounded-full mb-6 shadow">
          <GraduationCap className="w-3.5 h-3.5 text-[#ff6200]" />
          Trusted by 12,500+ learners
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white text-center leading-tight mb-4 tracking-tight drop-shadow-md">
          Learn. Teach.{' '}
          <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg, #ff8c42, #ff6200)' }}>
            Grow Together.
          </span>
        </h2>
        <p className="text-base text-white/80 text-center mb-10 max-w-sm leading-relaxed">
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
                className="flex flex-col items-center gap-2 p-4 rounded-2xl transition-all duration-300 hover:border-[#ff6200]/50"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}
              >
                <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <p className="text-lg font-extrabold text-white leading-none">{stat.value}</p>
                <p className="text-[10px] text-white/75 text-center leading-tight font-medium">{stat.label}</p>
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
          style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}
        >
          <div className="flex gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 text-[#ff6200]" fill="#ff6200" />
            ))}
          </div>
          <p className="text-sm text-white/90 italic leading-relaxed mb-4">
            &quot;{testimonial.quote}&quot;
          </p>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#ff6200] flex items-center justify-center text-xs font-bold text-white shadow">
              {testimonial.initials}
            </div>
            <div>
              <p className="text-sm font-bold text-white">{testimonial.name}</p>
              <p className="text-xs text-white/70">{testimonial.title}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

