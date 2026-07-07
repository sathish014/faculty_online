import React from 'react';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div 
      className="min-h-screen w-full flex font-sans relative overflow-hidden dot-pattern"
      style={{ background: 'var(--bg-primary)' }}
    >
      {/* Decorative blobs — Chalk & Space palette (Coral & Deep Violet glow) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -left-40 rounded-full opacity-[0.12] blur-3xl animate-float-gentle"
          style={{
            background: 'radial-gradient(circle, #ff6200 0%, transparent 70%)',
            width: 'clamp(200px, 60vw, 600px)',
            height: 'clamp(200px, 60vw, 600px)',
          }}
        />
        <div
          className="absolute -bottom-40 -right-40 rounded-full opacity-[0.15] blur-3xl animate-float-gentle"
          style={{
            background: 'radial-gradient(circle, #4D148C 0%, transparent 70%)',
            animationDelay: '2s',
            width: 'clamp(200px, 60vw, 600px)',
            height: 'clamp(200px, 60vw, 600px)',
          }}
        />
      </div>

      {children}
    </div>
  );
}

