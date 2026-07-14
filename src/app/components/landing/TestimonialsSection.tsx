"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import ScrollReveal from "../common/ScrollReveal";

const testimonials = [
  {
    id: "t1",
    name: "Aryan Kapoor",
    role: "Software Engineer",
    company: "Google",
    initials: "AK",
    outcome: "₹32 LPA package",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
    rating: 5,
    text: "Faculties Online transformed my JEE prep. Found an amazing Physics tutor within hours. My scores improved by 40 percentile in just 3 months. Now placed at Google!",
    subject: "IIT-JEE Physics",
  },
  {
    id: "t2",
    name: "Priya Sharma",
    role: "Mathematics Tutor",
    company: "Faculties Online",
    initials: "PS",
    outcome: "₹50K+/month income",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop",
    rating: 5,
    text: "As a tutor, this platform completely changed my career. I went from 2 students to 15+ regular students in 4 months. The Premium membership paid itself back 10x.",
    subject: "Mathematics",
  },
  {
    id: "t3",
    name: "Sneha Reddy",
    role: "Medical Student",
    company: "AIIMS Delhi",
    initials: "SR",
    outcome: "NEET 650+ score",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=100&auto=format&fit=crop",
    rating: 5,
    text: "The home tuition feature is incredible. My Biology teacher explains concepts in such a clear way. Got 650+ in NEET this year. Couldn't have done it without this platform.",
    subject: "NEET Biology",
  },
  {
    id: "t4",
    name: "Rahul Verma",
    role: "Data Scientist",
    company: "Amazon",
    initials: "RV",
    outcome: "₹28 LPA package",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&auto=format&fit=crop",
    rating: 5,
    text: "Learned Python and Machine Learning from scratch through Faculties Online. The mentor was exceptional — practical examples, real projects, and always available. Dream job achieved!",
    subject: "Python & ML",
  },
  {
    id: "t5",
    name: "Ananya Singh",
    role: "IAS Officer (Probationer)",
    company: "Government of India",
    initials: "AS",
    outcome: "UPSC AIR 47",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop",
    rating: 5,
    text: "My UPSC mentor on Faculties Online helped me structure my preparation perfectly. The personalized study plan, weekly tests, and detailed feedback made all the difference.",
    subject: "UPSC Preparation",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const total = testimonials.length;

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(next, 5000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [next]);

  const pauseAuto = () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  const resumeAuto = () => { intervalRef.current = setInterval(next, 5000); };

  const t = testimonials[current];

  return (
    <section
      id="testimonials"
      ref={ref}
      className="pt-8"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="line-divider mb-10" />
      <div className="container-xl">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#ff6200] text-xs font-bold uppercase tracking-widest">Testimonials</span>
            <span className="h-px flex-1 max-w-[40px]" style={{ background: "rgba(255,98,0,0.4)" }} />
          </div>
        </ScrollReveal>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-12">
          <ScrollReveal delay={100}>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight text-[#1A1A24]">
              Real results from<br />
              <span style={{ color: "#ff6200" }}>real learners.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="flex items-center gap-2">
              <button
                onClick={() => { prev(); pauseAuto(); setTimeout(resumeAuto, 3000); }}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
                style={{ background: "var(--bg-primary)", border: "1px solid rgba(26,26,36,0.12)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#ff6200";
                  (e.currentTarget as HTMLElement).style.color = "#fff";
                  (e.currentTarget as HTMLElement).style.borderColor = "#ff6200";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--bg-primary)";
                  (e.currentTarget as HTMLElement).style.color = "";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(26,26,36,0.12)";
                }}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => { next(); pauseAuto(); setTimeout(resumeAuto, 3000); }}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
                style={{ background: "var(--bg-primary)", border: "1px solid rgba(26,26,36,0.12)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#ff6200";
                  (e.currentTarget as HTMLElement).style.color = "#fff";
                  (e.currentTarget as HTMLElement).style.borderColor = "#ff6200";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--bg-primary)";
                  (e.currentTarget as HTMLElement).style.color = "";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(26,26,36,0.12)";
                }}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <span className="text-xs text-[rgba(26,26,36,0.45)] ml-1 font-medium">
                {current + 1} / {total}
              </span>
            </div>
          </ScrollReveal>
        </div>

        {/* Featured testimonial */}
        <div
          className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          onMouseEnter={pauseAuto}
          onMouseLeave={resumeAuto}
        >
          <div
            className="relative rounded-2xl p-5 md:p-8 mb-8"
            style={{
              background: "var(--bg-sidebar)",
              border: "1px solid rgba(26,26,36,0.08)",
              minHeight: 240,
            }}
          >
            {/* Quote icon */}
            <Quote className="absolute top-6 right-8 w-12 h-12 opacity-[0.06]" style={{ color: "#ff6200" }} />

            <div className="grid md:grid-cols-[auto,1fr] gap-6 items-start">
              {/* Avatar */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-[rgba(255,98,0,0.3)]">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover object-top" />
                </div>
                {/* Stars */}
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-3.5 h-3.5 star-filled" />
                  ))}
                </div>
              </div>

              {/* Content */}
              <div>
                <p className="text-base md:text-lg text-[rgba(26,26,36,0.75)] leading-relaxed italic mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <div>
                    <p className="font-bold text-[#1A1A24]">{t.name}</p>
                    <p className="text-xs text-[rgba(26,26,36,0.55)]">
                      {t.role} at {t.company}
                    </p>
                  </div>
                  <div
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold"
                    style={{
                      background: "rgba(255,98,0,0.1)",
                      border: "1px solid rgba(255,98,0,0.25)",
                      color: "#ff6200",
                    }}
                  >
                    🎯 {t.outcome}
                  </div>
                  <div
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      background: "rgba(77,20,140,0.08)",
                      border: "1px solid rgba(77,20,140,0.15)",
                      color: "#4D148C",
                    }}
                  >
                    📚 {t.subject}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dot indicators */}
          {/* <div className="flex items-center justify-center gap-2 mb-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setCurrent(i); pauseAuto(); setTimeout(resumeAuto, 3000); }}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === current ? "24px" : "8px",
                  height: "8px",
                  background: i === current ? "#ff6200" : "rgba(26,26,36,0.15)",
                }}
              />
            ))}
          </div> */}

          {/* Grid of all testimonials */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
            {testimonials.map((item, i) => (
              <button
                key={item.id}
                onClick={() => { setCurrent(i); pauseAuto(); setTimeout(resumeAuto, 3000); }}
                className="p-4 rounded-xl text-left transition-all duration-300"
                style={{
                  background: i === current ? "rgba(255,98,0,0.08)" : "var(--bg-sidebar)",
                  border: i === current ? "1px solid rgba(255,98,0,0.3)" : "1px solid rgba(26,26,36,0.07)",
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-black flex-shrink-0"
                    style={{
                      background: i === current ? "rgba(255,98,0,0.2)" : "rgba(26,26,36,0.07)",
                      color: i === current ? "#ff6200" : "rgba(26,26,36,0.5)",
                    }}
                  >
                    {item.initials}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-[#1A1A24] truncate">{item.name}</p>
                    <p className="text-[10px] text-[rgba(26,26,36,0.45)] truncate">{item.company}</p>
                  </div>
                </div>
                <p className="text-[11px] text-[rgba(26,26,36,0.6)] line-clamp-2 italic">&ldquo;{item.text.slice(0, 70)}…&rdquo;</p>
              </button>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}
