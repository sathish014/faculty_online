'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import Link from 'next/link';

import Image from 'next/image';

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
        <Link href="/" className="flex items-center gap-[12px] mb-8 group w-fit">
          <Image 
            src="/logo.png" 
            alt="Faculties Online Logo" 
            width={150} 
            height={40} 
            className="h-10 w-auto object-contain transition-transform group-hover:scale-105" 
          />
          <span className="font-extrabold text-xl text-[#1A1A24] tracking-tight">
            Faculties<span className="text-[#ff6200]">.</span><span className="font-normal text-[#1A1A24]/75">Online</span>
          </span>
        </Link>

        {/* Card */}
        <div
          className="rounded-3xl p-8 sm:p-10 transition-all duration-300"
          style={{
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            boxShadow: '0 8px 48px -8px rgba(77, 20, 140, 0.12), 0 2px 12px -2px rgba(26, 26, 36, 0.05)',
            border: '1px solid rgba(26, 26, 36, 0.12)',
          }}
        >
          <div className="mb-7">
            <h1 className="text-2xl font-extrabold tracking-tight text-[#1A1A24] mb-1.5">
              {title}
            </h1>
            <p className="text-sm text-[#1A1A24]/65 font-medium">{description}</p>
          </div>
          {children}
        </div>
      </motion.div>
    </div>
  );
}

