"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { Search, ChevronDown, CheckCircle, Laptop, School, Home, RefreshCw, ArrowRight, Users, BookOpen, Star, TrendingUp, Shield } from "lucide-react";
import CounterAnimation from "../common/CounterAnimation";
import Link from "next/link";

const modeOptions = [
  { label: "Any Mode", icon: Search, desc: "All teaching modes" },
  { label: "Online", icon: Laptop, desc: "Virtual sessions" },
  { label: "Offline", icon: School, desc: "In-person classes" },
  { label: "Online & Offline", icon: RefreshCw, desc: "Flexible mode" },
  { label: "Home Tuition", icon: Home, desc: "Tutor comes to you" },
];

const statsData = [
  { value: 50, suffix: "K+", label: "Active Tutors", icon: Users },
  { value: 200, suffix: "+", label: "Subjects", icon: BookOpen },
  { value: 4.9, suffix: "", label: "Avg Rating", icon: Star, decimals: 1 },
  { value: 98, suffix: "%", label: "Success Rate", icon: TrendingUp },
];

const floatingTags = [
  "Mathematics", "Python", "JEE Prep", "Spoken English",
  "NEET", "Physics", "Web Dev", "UPSC", "Chemistry", "Java"
];

const typewriterSubjects = [
  "Mathematics", "Physics", "Python", "Spoken English",
  "Chemistry", "Data Science", "JEE Preparation", "Web Development",
];

export default function HeroSection() {
  const [subject, setSubject] = useState("");
  const [mode, setMode] = useState(modeOptions[0]);
  const [modeOpen, setModeOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [dropdownStyle, setDropdownStyle] = useState<React.CSSProperties>({});
  const [visible, setVisible] = useState(false);
  const [placeholder, setPlaceholder] = useState("");
  const modeRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const portalRef = useRef<HTMLDivElement>(null);
  const pwRef = useRef({ index: 0, charIndex: 0, deleting: false, timeout: null as NodeJS.Timeout | null });

  const recalcDropdown = useCallback(() => {
    if (!btnRef.current) return;
    const r = btnRef.current.getBoundingClientRect();
    setDropdownStyle({
      position: "fixed",
      top: r.bottom + 6,
      left: r.left,
      width: 240,
      zIndex: 9999,
    });
  }, []);

  // Typewriter effect for placeholder
  useEffect(() => {
    const pw = pwRef.current;
    const type = () => {
      const word = typewriterSubjects[pw.index % typewriterSubjects.length];
      if (!pw.deleting) {
        setPlaceholder("Search: " + word.slice(0, pw.charIndex + 1) + "|");
        pw.charIndex++;
        if (pw.charIndex === word.length) {
          pw.deleting = true;
          pw.timeout = setTimeout(type, 1800);
        } else {
          pw.timeout = setTimeout(type, 80);
        }
      } else {
        setPlaceholder("Search: " + word.slice(0, pw.charIndex - 1) + "|");
        pw.charIndex--;
        if (pw.charIndex === 0) {
          pw.deleting = false;
          pw.index++;
          pw.timeout = setTimeout(type, 400);
        } else {
          pw.timeout = setTimeout(type, 40);
        }
      }
    };
    pw.timeout = setTimeout(type, 600);
    return () => { if (pw.timeout) clearTimeout(pw.timeout); };
  }, []);

  useEffect(() => {
    const t = setTimeout(() => { setMounted(true); setVisible(true); }, 80);
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;
      if (!modeRef.current?.contains(target) && !portalRef.current?.contains(target)) {
        setModeOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    const closeOnScroll = () => setModeOpen(false);
    window.addEventListener("scroll", closeOnScroll);
    window.addEventListener("resize", closeOnScroll);
    return () => {
      clearTimeout(t);
      document.removeEventListener("mousedown", handler);
      window.removeEventListener("scroll", closeOnScroll);
      window.removeEventListener("resize", closeOnScroll);
    };
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "var(--bg-primary)", paddingTop: "80px" }}
    >
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern opacity-60 pointer-events-none" />

      {/* Animated coral orb */}
      <div
        className="absolute pointer-events-none animate-orb-drift"
        style={{
          top: "15%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "clamp(300px, 70vw, 700px)",
          height: "clamp(300px, 70vw, 700px)",
          background: "radial-gradient(circle, rgba(255,107,53,0.06) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      {/* Purple orb top-right */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "10%",
          right: "5%",
          width: "clamp(150px, 40vw, 400px)",
          height: "clamp(150px, 40vw, 400px)",
          background: "radial-gradient(circle, rgba(77,20,140,0.07) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      <div className="container-xl relative z-10 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">

          {/* Trust badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{
              background: "rgba(77,20,140,0.08)",
              border: "1px solid rgba(77,20,140,0.2)",
              transitionDelay: "50ms",
            }}
          >
            <Shield className="w-3.5 h-3.5 text-[#4D148C]" />
            <span className="text-xs font-bold text-[#4D148C] uppercase tracking-wider">
              Trusted by 2 Lakh+ Learners across India
            </span>
          </div>

          {/* Headline */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ color: "#1A1A24", transitionDelay: "100ms" }}
          >
            Learn from the{" "}
            <span
              style={{
                color: "#ff6200",
                display: "inline-block",
                position: "relative",
              }}
            >
              best
              <span
                className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                style={{ background: "linear-gradient(90deg, #ff6200, rgba(255,98,0,0.3))" }}
              />
            </span>
            <br />
            tutors in India.
          </h1>

          {/* Subheading */}
          <p
            className={`text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ color: "rgba(26,26,36,0.65)", transitionDelay: "200ms" }}
          >
            Connect with verified tutors for online, offline & home tuition.
            Any subject. Any schedule. Any city in India.
          </p>

          {/* Search Form */}
          <div
            className={`w-full max-w-xl mx-auto flex flex-col gap-3 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: "300ms" }}
          >
            {/* Subject input */}
            <div className="flex items-center gap-3 px-4 py-3.5 rounded-xl input-dark shadow-sm">
              <Search className="w-4 h-4 flex-shrink-0" style={{ color: "rgba(26,26,36,0.4)" }} />
              <input
                type="text"
                placeholder={subject ? "" : placeholder}
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full bg-transparent focus:outline-none text-sm"
                style={{ color: "#1A1A24" }}
                id="hero-search-input"
              />
            </div>

            {/* Mode + CTA row */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative" ref={modeRef}>
                <button
                  ref={btnRef}
                  onClick={() => { recalcDropdown(); setModeOpen((o) => !o); }}
                  className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl input-dark text-sm"
                >
                  <div className="flex items-center gap-2">
                    <mode.icon className="w-4 h-4" style={{ color: "rgba(26,26,36,0.5)" }} />
                    <span className="font-medium" style={{ color: "rgba(26,26,36,0.85)" }}>{mode.label}</span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${modeOpen ? "rotate-180" : ""}`}
                    style={{ color: "rgba(26,26,36,0.4)" }}
                  />
                </button>

                {modeOpen && mounted && createPortal(
                  <div
                    ref={portalRef}
                    style={{
                      ...dropdownStyle,
                      background: "var(--bg-secondary)",
                      border: "1px solid rgba(26,26,36,0.1)",
                      borderRadius: "12px",
                      boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                      padding: "6px",
                    }}
                  >
                    {modeOptions.map((m) => {
                      const active = mode.label === m.label;
                      return (
                        <button
                          key={m.label}
                          onMouseDown={(e) => { e.preventDefault(); setMode(m); setModeOpen(false); }}
                          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors cursor-pointer"
                          style={{
                            background: active ? "rgba(255,98,0,0.1)" : "transparent",
                            color: active ? "#ff6200" : "rgba(26,26,36,0.75)",
                          }}
                        >
                          <m.icon className="w-4 h-4 flex-shrink-0" />
                          <div className="flex-1 text-left">
                            <p className="font-semibold text-[13px]">{m.label}</p>
                            <p className="text-[11px] opacity-60">{m.desc}</p>
                          </div>
                          {active && <CheckCircle className="w-3.5 h-3.5 text-[#ff6200]" />}
                        </button>
                      );
                    })}
                  </div>,
                  document.body
                )}
              </div>

              <Link
                href="/tutor/search"
                className="btn-coral rounded-xl py-3.5 px-6 flex items-center justify-center gap-2 text-sm whitespace-nowrap font-bold w-full sm:w-auto"
                style={{ boxShadow: "0 8px 24px rgba(255,98,0,0.35)" }}
              >
                Find Tutor
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Stats row */}
          <div
            className={`flex flex-wrap items-center justify-center gap-6 sm:gap-10 mt-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "500ms" }}
          >
            {statsData.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="flex flex-col items-center gap-1">
                  <div className="flex items-center gap-1">
                    <Icon className="w-3.5 h-3.5 text-[#ff6200]" />
                    <span className="text-2xl font-black tracking-tight text-[#1A1A24]">
                      <CounterAnimation end={stat.value} suffix={stat.suffix} decimals={stat.decimals || 0} />
                    </span>
                  </div>
                  <span className="text-xs font-medium" style={{ color: "rgba(26,26,36,0.55)" }}>
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Popular tag pills */}
          <div
            className={`mt-10 transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`}
            style={{ transitionDelay: "650ms" }}
          >
            <p className="text-[11px] uppercase tracking-widest font-semibold mb-3" style={{ color: "rgba(26,26,36,0.4)" }}>
              Popular Searches
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {floatingTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSubject(tag)}
                  className="tag"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to top, var(--bg-primary), transparent)" }}
      />
    </section>
  );
}
