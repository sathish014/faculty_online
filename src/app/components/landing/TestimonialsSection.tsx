"use client";

import React, { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    id: "t1",
    name: "Aryan Kapoor",
    role: "IIT-JEE Student",
    initials: "AK",
    text: "Faculties Online transformed my JEE prep. Found an amazing Physics tutor within hours. My scores improved by 40 percentile in just 3 months.",
  },
  {
    id: "t2",
    name: "Priya Sharma",
    role: "Mathematics Tutor",
    initials: "PS",
    text: "As a tutor, this platform completely changed my career. I went from 2 students to 15+ regular students in 4 months. The Premium membership paid itself back 10x.",
  },
  {
    id: "t3",
    name: "Sneha Reddy",
    role: "NEET Aspirant",
    initials: "SR",
    text: "The home tuition feature is incredible. My Biology teacher explains concepts in such a clear way. Got 650+ in NEET this year. Couldn't have done it without this.",
  },
  {
    id: "t4",
    name: "Rahul Verma",
    role: "Programming Tutor",
    initials: "RV",
    text: "Students find me based on my skills and ratings. The wallet system makes payments seamless. Earning ₹50K+ per month now consistently.",
  },
];

export default function TestimonialsSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="testimonials"
      ref={ref}
      className="pt-8 pb-16"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="line-divider mb-10" />
      <div className="container-xl">

        {/* Label */}
        <div
          className={`flex items-center gap-3 mb-4 transition-all duration-600 ${visible ? "opacity-100" : "opacity-0"}`}
        >
          <span className="text-[#ff6200] text-xs font-bold uppercase tracking-widest">Testimonials</span>
          <span className="h-px flex-1 max-w-[40px]" style={{ background: "rgba(255,98,0,0.4)" }} />
        </div>

        <h2
          className={`text-3xl md:text-4xl font-black tracking-tight leading-tight mb-14 text-[#1A1A24] transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "100ms", maxWidth: "500px" }}
        >
          Real results from
          <br />
          real learners.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className={`rounded-2xl p-6 flex flex-col h-full transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{
                background: "var(--bg-sidebar)",
                border: "1px solid rgba(26,26,36,0.07)",
                transitionDelay: `${200 + i * 80}ms`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,107,53,0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(26,26,36,0.07)";
              }}
            >
              {/* Large coral quote */}
              <div
                className="text-5xl font-black leading-none mb-4"
                style={{ color: "rgba(255,107,53,0.25)", fontFamily: "Georgia, serif" }}
              >
                "
              </div>

              <p
                className="text-sm leading-relaxed flex-grow italic"
                style={{ color: "rgba(26,26,36,0.65)" }}
              >
                {t.text}
              </p>

              {/* Author */}
              <div
                className="flex items-center gap-3 mt-6 pt-5"
                style={{ borderTop: "1px solid rgba(26,26,36,0.06)" }}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0"
                  style={{
                    background: "rgba(255,98,0,0.15)",
                    border: "1px solid rgba(255,98,0,0.3)",
                    color: "#ff6200",
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1A1A24] leading-tight">{t.name}</p>
                  <p className="text-xs" style={{ color: "rgba(26,26,36,0.5)" }}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
