"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import {
  Search,
  ChevronDown,
  Star,
  Users,
  CheckCircle,
  Sparkles,
  ArrowRight,
  Zap,
  GraduationCap,
  BookOpen,
  Monitor,
  Laptop,
  School,
  Home,
  RefreshCw,
} from "lucide-react";

const modeOptions = [
  { label: "Any Mode", icon: Search, desc: "All teaching modes" },
  { label: "Online", icon: Laptop, desc: "Virtual sessions" },
  { label: "Offline", icon: School, desc: "In-person classes" },
  { label: "Online & Offline", icon: RefreshCw, desc: "Flexible mode" },
  { label: "Home Tuition", icon: Home, desc: "Tutor comes to you" },
];

const subjectTags = ["Mathematics", "Physics", "Python", "English", "Chemistry", "IELTS", "Data Science", "CAT Prep"];

export default function HeroSection() {
  const [subject, setSubject] = useState("");
  const [mode, setMode] = useState(modeOptions[0]);
  const [modeOpen, setModeOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [dropdownStyle, setDropdownStyle] = useState<React.CSSProperties>({});
  const modeRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const portalRef = useRef<HTMLDivElement>(null);

  const recalcDropdown = useCallback(() => {
    if (!btnRef.current) return;
    const r = btnRef.current.getBoundingClientRect();
    setDropdownStyle({
      position: "fixed",
      top: r.bottom + 8,
      left: r.left,
      width: 272,
      zIndex: 9999,
    });
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;
      const insideBtn = modeRef.current?.contains(target);
      const insidePortal = portalRef.current?.contains(target);
      if (!insideBtn && !insidePortal) setModeOpen(false);
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
      id="hero"
      className="relative min-h-screen flex flex-col"
      style={{ paddingTop: "72px" }}
    >
      {/* ── BACKGROUND ── */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/hero-bg.png')" }} />
      {/* gradient overlay — dark at edges, lighter in center so text pops */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(to bottom, rgba(10,8,30,0.72) 0%, rgba(10,8,30,0.55) 50%, rgba(10,8,30,0.80) 100%)"
      }} />
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/25 via-transparent to-violet-900/15" />

      {/* subtle dot grid */}
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
        backgroundSize: "36px 36px",
      }} />

      {/* ── CONTENT ── */}
      <div className={`relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 text-center transition-all duration-700 pb-28 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 text-white/90 text-xs font-semibold mb-7 tracking-wide"
          style={{ background: "rgba(99,102,241,0.25)", backdropFilter: "blur(12px)" }}>
          <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
          India&apos;s #1 Tutor Marketplace Platform
          <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-heading font-extrabold text-white leading-[1.1] tracking-tight mb-4 max-w-3xl">
          Upgrade Your Skills with{" "}
          <span className="bg-clip-text text-transparent" style={{
            backgroundImage: "linear-gradient(90deg, #a5b4fc, #c084fc, #f0abfc)"
          }}>
            Faculties Online
          </span>
        </h1>

        <p className="text-white/65 text-base sm:text-lg max-w-lg mx-auto mb-10 leading-relaxed">
          Connect with verified tutors for online, offline &amp; home tuition.
          Learn at your pace, from India&apos;s best educators.
        </p>

        {/* ── SEARCH BAR ── */}
        <div className="w-full max-w-2xl mx-auto mb-6">
          <div
            className="flex flex-col sm:flex-row items-stretch rounded-2xl overflow-visible"
            style={{ background: "rgba(255,255,255,0.97)", boxShadow: "0 12px 48px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.15)" }}
          >
            {/* Search Input */}
            <div className="flex-1 flex items-center gap-3 px-5 border-b sm:border-b-0 sm:border-r border-slate-200/70">
              <Search className="w-4.5 h-4.5 text-indigo-400 flex-shrink-0" style={{ width: "18px", height: "18px" }} />
              <input
                id="hero-search-subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Search tutors, subjects, or skills..."
                className="flex-1 py-4 text-sm text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none font-medium"
              />
            </div>

            {/* Mode Picker */}
            <div className="relative flex-shrink-0" ref={modeRef} style={{ minWidth: "180px" }}>
              <button
                id="hero-mode-btn"
                ref={btnRef}
                onClick={() => {
                  recalcDropdown();
                  setModeOpen((o) => !o);
                }}
                className="w-full h-full flex items-center gap-2 px-4 py-4 text-sm font-medium text-slate-700 hover:bg-indigo-50/60 transition-colors border-b sm:border-b-0 border-slate-200/70 cursor-pointer"
              >
                <mode.icon className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                <span className="flex-1 text-left whitespace-nowrap">{mode.label}</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 flex-shrink-0 ${modeOpen ? "rotate-180 text-indigo-600" : ""}`} />
              </button>

              {/* Portal dropdown — fixed position on body, escapes ALL parent overflow */}
              {modeOpen && mounted && createPortal(
                <div
                  ref={portalRef}
                  style={{
                    ...dropdownStyle,
                    background: "rgba(255,255,255,0.99)",
                    backdropFilter: "blur(24px)",
                    borderRadius: "16px",
                    border: "1px solid rgba(226,232,240,0.9)",
                    boxShadow: "0 24px 64px rgba(0,0,0,0.22), 0 4px 20px rgba(99,102,241,0.15)",
                    overflow: "hidden",
                    padding: "8px",
                  }}
                >
                  {modeOptions.map((m) => {
                    const active = mode.label === m.label;
                    return (
                      <button
                        key={m.label}
                        onMouseDown={(e) => {
                          e.preventDefault(); // prevent blur/outside-click firing first
                          setMode(m);
                          setModeOpen(false);
                        }}
                        className={`w-full flex cursor-pointer items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${active ? "bg-indigo-600" : "hover:bg-indigo-50"}`}
                      >
                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 cursor-pointer ${active ? "bg-white/20" : "bg-indigo-50"}`}>
                          <m.icon className={`w-4 h-4 ${active ? "text-white" : "text-indigo-600"}`} />
                        </div>
                        <div className="flex-1 text-left">
                          <p className={`font-semibold text-sm leading-tight ${active ? "text-white" : "text-slate-800"}`}>{m.label}</p>
                          <p className={`text-xs mt-0.5 ${active ? "text-white/70" : "text-slate-400"}`}>{m.desc}</p>
                        </div>
                        {active && <CheckCircle className="w-4 h-4 text-white/80 flex-shrink-0" />}
                      </button>
                    );
                  })}
                </div>,
                document.body
              )}
            </div>

            {/* Find Button */}
            <div className="p-2 flex-shrink-0">
              <button
                id="hero-search-submit"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-white text-sm tracking-wide whitespace-nowrap transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5 cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, #312e81 0%, #4338ca 50%, #6366f1 100%)",
                  boxShadow: "0 4px 20px rgba(67,56,202,0.5)",
                }}
              >
                FIND TUTOR
              </button>
            </div>
          </div>
        </div>

        {/* Popular Tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <span className="text-white/45 text-xs font-medium mr-1">Popular:</span>
          {subjectTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSubject(tag)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 ${subject === tag
                ? "bg-indigo-500/40 border-indigo-400/60 text-white"
                : "bg-white/8 border-white/15 text-white/60 hover:bg-white/15 hover:text-white hover:border-white/30"
                }`}
              style={{ background: subject === tag ? "rgba(99,102,241,0.35)" : "rgba(255,255,255,0.07)" }}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8">
          {[
            { icon: CheckCircle, label: "Verified Tutors", color: "#4ade80" },
            { icon: Star, label: "4.9/5 Rating", color: "#fbbf24" },
            { icon: Users, label: "10K+ Students", color: "#60a5fa" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <item.icon className="w-4 h-4" style={{ color: item.color }} />
              <span className="text-white/70 text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── BOTTOM STATS STRIP ── */}
      <div className={`absolute bottom-0 left-0 right-0 z-20 transition-all duration-700 delay-300 ${mounted ? "opacity-100" : "opacity-0"}`}>
        <div style={{ background: "rgba(10,8,30,0.75)", backdropFilter: "blur(20px)", borderTop: "1px solid rgba(255,255,255,0.10)" }}>
          <div className="max-w-5xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-6 sm:gap-10">
              {[
                { icon: GraduationCap, value: "5,000+", label: "Expert Tutors" },
                { icon: BookOpen, value: "200+", label: "Subjects" },
                { icon: Monitor, value: "Online · Offline · Home", label: "Teaching Modes" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: "rgba(99,102,241,0.25)" }}>
                    <s.icon className="w-4 h-4 text-indigo-300" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm leading-none">{s.value}</p>
                    <p className="text-white/45 text-xs mt-0.5">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <Link href="#tutors" id="hero-find-tutor-btn"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-white font-semibold text-sm transition-all hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)", boxShadow: "0 4px 15px rgba(99,102,241,0.4)" }}>
                <Search className="w-4 h-4" />
                Find a Tutor
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link href="#post-requirement" id="hero-post-requirement-btn"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl border text-white font-semibold text-sm hover:bg-white/10 transition-all"
                style={{ borderColor: "rgba(255,255,255,0.2)" }}>
                <Zap className="w-4 h-4 text-yellow-400" />
                Post Requirement
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
