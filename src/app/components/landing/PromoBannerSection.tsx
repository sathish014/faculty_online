"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const features = [
  "10,000+ verified tutors",
  "Learn on your schedule",
  "Online, offline & home sessions",
  "Certificate of completion",
];

export default function PromoBannerSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="pt-8 pb-12"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="line-divider mb-10" />
      <div className="container-xl">
        <div
          className={`relative rounded-2xl overflow-hidden transition-all duration-800 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{
            background: "var(--bg-secondary)",
            border: "1px solid rgba(26,26,36,0.08)",
          }}
        >
          {/* Coral left accent line */}
          <div
            className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
            style={{ background: "linear-gradient(to bottom, #ff6200, rgba(255,98,0,0.1))" }}
          />

          {/* Grid pattern */}
          <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />

          {/* Glow */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: "-100px",
              right: "100px",
              width: "clamp(150px, 40vw, 400px)",
              height: "clamp(150px, 40vw, 400px)",
              background: "radial-gradient(circle, rgba(255,107,53,0.06) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10 p-10 md:p-14 lg:p-20 flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

            {/* Left: Text */}
            <div className="flex-1">
              <span className="inline-block text-[#ff6200] text-xs font-bold uppercase tracking-widest mb-5">
                Personal Plan
              </span>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-6 text-[#1A1A24]"
                style={{ maxWidth: "480px" }}
              >
                Start learning.
                <br />
                <span style={{ color: "rgba(26,26,36,0.45)" }}>No excuses.</span>
              </h2>
              <p className="text-base mb-8" style={{ color: "rgba(26,26,36,0.65)", maxWidth: "380px" }}>
                Get unlimited access to top-rated tutors for a low monthly fee. Your next breakthrough starts here.
              </p>
              <Link
                href="/register"
                className="btn-coral inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white"
              >
                Get started free
                <ArrowRight className="w-4 h-4" />
              </Link>
              <p className="text-xs mt-3" style={{ color: "rgba(26,26,36,0.4)" }}>
                No credit card required
              </p>
            </div>

            {/* Right: Feature list */}
            <div className="flex-1 flex flex-col gap-4">
              {features.map((f, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-4 transition-all duration-600 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
                  style={{ transitionDelay: `${300 + i * 100}ms` }}
                >
                  <div
                    className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(255,107,53,0.12)",
                      border: "1px solid rgba(255,107,53,0.25)",
                    }}
                  >
                    <span className="text-[#ff6200] text-xs font-bold">✓</span>
                  </div>
                  <span className="text-sm font-medium" style={{ color: "rgba(26,26,36,0.75)" }}>
                    {f}
                  </span>
                </div>
              ))}

              {/* Decorative numbers */}
              <div
                className="mt-8 pt-8 grid grid-cols-3 gap-4"
                style={{ borderTop: "1px solid rgba(26,26,36,0.07)" }}
              >
                {[
                  { val: "₹499", sub: "/ month" },
                  { val: "0", sub: "hidden fees" },
                  { val: "∞", sub: "sessions" },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl font-black text-[#1A1A24]">{item.val}</div>
                    <div className="text-xs mt-0.5" style={{ color: "rgba(26,26,36,0.55)" }}>{item.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
