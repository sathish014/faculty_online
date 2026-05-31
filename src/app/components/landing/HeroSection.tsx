"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import {
  Search,
  ChevronDown,
  CheckCircle,
  Users,
  Star,
  Laptop,
  School,
  Home,
  RefreshCw,
  Zap,
} from "lucide-react";

const modeOptions = [
  { label: "Any Mode", icon: Search, desc: "All teaching modes" },
  { label: "Online", icon: Laptop, desc: "Virtual sessions" },
  { label: "Offline", icon: School, desc: "In-person classes" },
  { label: "Online & Offline", icon: RefreshCw, desc: "Flexible mode" },
  { label: "Home Tuition", icon: Home, desc: "Tutor comes to you" },
];

const popularTags = ["Mathematics", "Physics", "Python", "English"];

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
      top: r.bottom + 6,
      left: r.left,
      width: 240,
      zIndex: 9999,
    });
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
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
      id="hero"
      className="relative bg-white overflow-hidden"
      style={{ paddingTop: "64px", minHeight: "560px" }}
    >
      {/* Subtle top background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 0% 50%, rgba(238,242,255,0.8) 0%, transparent 60%), radial-gradient(ellipse at 100% 0%, rgba(245,243,255,0.5) 0%, transparent 55%)",
        }}
      />

      <div className="container-xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center py-14 lg:py-20">
          {/* ── LEFT CONTENT ── */}
          <div
            className={`transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6">
              <div
                className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold"
                style={{
                  background: "rgba(99,102,241,0.08)",
                  border: "1px solid rgba(99,102,241,0.2)",
                  color: "#4f46e5",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ background: "#4ade80" }}
                />
                Powered by 100+ Active Students
              </div>
            </div>

            {/* Heading */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.1rem] font-extrabold leading-[1.12] tracking-tight text-slate-900 mb-5">
              Upgrade Your Skills with{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Faculties Online
              </span>
            </h1>

            {/* Description */}
            <p className="text-slate-500 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
              Connect with verified tutors for online, offline &amp; home tuition. Learn at your
              pace, from India&apos;s best educators in any subject you desire.
            </p>

            {/* Search Bar */}
            <div className="w-full mb-5">
              <div
                className="flex flex-col sm:flex-row items-stretch rounded-2xl overflow-visible"
                style={{
                  background: "#fff",
                  border: "1.5px solid #e2e8f0",
                  boxShadow: "0 4px 24px rgba(79,70,229,0.10)",
                }}
              >
                {/* Search Input */}
                <div className="flex-1 flex items-center gap-3 px-4 border-b sm:border-b-0 sm:border-r border-slate-200">
                  <Search className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  <input
                    id="hero-search-subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Search tutors, subjects, or skills..."
                    className="flex-1 py-3.5 text-sm text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none"
                    suppressHydrationWarning
                  />
                </div>

                {/* Mode Picker */}
                <div
                  className="relative flex-shrink-0"
                  ref={modeRef}
                  style={{ minWidth: "160px" }}
                >
                  <button
                    id="hero-mode-btn"
                    ref={btnRef}
                    onClick={() => {
                      recalcDropdown();
                      setModeOpen((o) => !o);
                    }}
                    className="w-full h-full flex items-center gap-2 px-4 py-3.5 text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer border-b sm:border-b-0 border-slate-200"
                    suppressHydrationWarning
                  >
                    <mode.icon className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                    <span className="flex-1 text-left whitespace-nowrap">{mode.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform duration-300 flex-shrink-0 ${
                        modeOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {modeOpen &&
                    mounted &&
                    createPortal(
                      <div
                        ref={portalRef}
                        style={{
                          ...dropdownStyle,
                          background: "#fff",
                          borderRadius: "14px",
                          border: "1px solid #e2e8f0",
                          boxShadow: "0 16px 48px rgba(0,0,0,0.14)",
                          overflow: "hidden",
                          padding: "6px",
                        }}
                      >
                        {modeOptions.map((m) => {
                          const active = mode.label === m.label;
                          return (
                            <button
                              key={m.label}
                              onMouseDown={(e) => {
                                e.preventDefault();
                                setMode(m);
                                setModeOpen(false);
                              }}
                              className={`w-full flex cursor-pointer items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${
                                active ? "bg-indigo-600" : "hover:bg-indigo-50"
                              }`}
                            >
                              <div
                                className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${
                                  active ? "bg-white/20" : "bg-indigo-50"
                                }`}
                              >
                                <m.icon
                                  className={`w-3.5 h-3.5 ${active ? "text-white" : "text-indigo-600"}`}
                                />
                              </div>
                              <div className="flex-1 text-left">
                                <p
                                  className={`font-semibold text-sm leading-tight ${
                                    active ? "text-white" : "text-slate-800"
                                  }`}
                                >
                                  {m.label}
                                </p>
                                <p
                                  className={`text-xs mt-0.5 ${
                                    active ? "text-white/70" : "text-slate-400"
                                  }`}
                                >
                                  {m.desc}
                                </p>
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
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-bold text-white text-sm tracking-wide whitespace-nowrap transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5 cursor-pointer"
                    style={{
                      background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
                      boxShadow: "0 4px 16px rgba(79,70,229,0.45)",
                    }}
                    suppressHydrationWarning
                  >
                    Find Tutor
                  </button>
                </div>
              </div>
            </div>

            {/* Popular Tags */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-slate-400 text-xs font-semibold">Popular:</span>
              {popularTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSubject(tag)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
                    subject === tag
                      ? "text-white"
                      : "text-slate-600 hover:text-indigo-600 hover:border-indigo-300"
                  }`}
                  style={{
                    background: subject === tag ? "linear-gradient(135deg,#4f46e5,#7c3aed)" : "transparent",
                    border: subject === tag ? "1px solid transparent" : "1px solid #d1d5db",
                  }}
                  suppressHydrationWarning
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* ── RIGHT IMAGE ── */}
          <div
            className={`relative hidden lg:block transition-all duration-700 delay-200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Decorative blob behind image */}
            <div
              className="absolute -top-8 -right-8 w-80 h-80 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(139,92,246,0.08) 60%, transparent 80%)",
                filter: "blur(30px)",
              }}
            />
            <div
              className="absolute -bottom-6 -left-6 w-60 h-60 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(167,139,250,0.12) 0%, transparent 70%)",
                filter: "blur(20px)",
              }}
            />

            {/* Hero Image */}
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                boxShadow: "0 24px 64px rgba(79,70,229,0.18), 0 4px 16px rgba(0,0,0,0.10)",
              }}
            >
              <img
                src="/hero-banner-new.png"
                alt="Students learning online with Faculties Online"
                className="w-full h-full object-cover"
                style={{ maxHeight: "420px", minHeight: "320px" }}
              />

              {/* Floating trust card */}
              <div
                className="absolute bottom-5 left-5 rounded-xl px-4 py-3 flex items-center gap-3"
                style={{
                  background: "rgba(255,255,255,0.95)",
                  backdropFilter: "blur(16px)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.14)",
                  border: "1px solid rgba(255,255,255,0.8)",
                }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(99,102,241,0.1)" }}
                >
                  <Users className="w-4.5 h-4.5 text-indigo-600" style={{ width: "18px", height: "18px" }} />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm leading-none">10,000+</p>
                  <p className="text-slate-500 text-xs mt-0.5">Active Students</p>
                </div>
              </div>

              {/* Floating rating card */}
              <div
                className="absolute top-5 right-5 rounded-xl px-4 py-3 flex items-center gap-2"
                style={{
                  background: "rgba(255,255,255,0.95)",
                  backdropFilter: "blur(16px)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.14)",
                  border: "1px solid rgba(255,255,255,0.8)",
                }}
              >
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <div>
                  <p className="font-bold text-slate-900 text-sm leading-none">4.9/5</p>
                  <p className="text-slate-500 text-xs mt-0.5">Avg Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Verified badge strip */}
      <div
        className="border-t border-slate-100"
        style={{ background: "rgba(248,250,252,0.8)" }}
      >
        <div className="container-xl py-4">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-6 sm:gap-10">
            {[
              { icon: CheckCircle, label: "Verified Tutors", color: "#22c55e" },
              { icon: Star, label: "4.9/5 Rating", color: "#f59e0b" },
              { icon: Users, label: "10K+ Students", color: "#6366f1" },
              { icon: Zap, label: "Instant Matching", color: "#a855f7" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <item.icon className="w-4 h-4" style={{ color: item.color }} />
                <span className="text-slate-500 text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
