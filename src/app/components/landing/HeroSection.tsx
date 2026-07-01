"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { Search, ChevronDown, CheckCircle, Laptop, School, Home, RefreshCw, ArrowRight, Users, BookOpen, Star } from "lucide-react";

const modeOptions = [
  { label: "Any Mode", icon: Search, desc: "All teaching modes" },
  { label: "Online", icon: Laptop, desc: "Virtual sessions" },
  { label: "Offline", icon: School, desc: "In-person classes" },
  { label: "Online & Offline", icon: RefreshCw, desc: "Flexible mode" },
  { label: "Home Tuition", icon: Home, desc: "Tutor comes to you" },
];

const stats = [
  { value: "50K+", label: "Active Tutors", icon: Users },
  { value: "200+", label: "Subjects", icon: BookOpen },
  { value: "4.9", label: "Avg Rating", icon: Star },
];

const floatingTags = [
  "Mathematics", "Python", "JEE Prep", "Spoken English",
  "NEET", "Physics", "Web Dev", "UPSC", "Chemistry", "Java"
];

export default function HeroSection() {
  const [subject, setSubject] = useState("");
  const [mode, setMode] = useState(modeOptions[0]);
  const [modeOpen, setModeOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [dropdownStyle, setDropdownStyle] = useState<React.CSSProperties>({});
  const [visible, setVisible] = useState(false);
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

      {/* Radial glow — coral */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "20%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(255,107,53,0.07) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      <div className="container-xl relative z-10 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">

          {/* Headline */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.08] tracking-tight mb-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{
              color: "#1A1A24",
              transitionDelay: "100ms",
            }}
          >
            Learn from the{" "}
            <span
              style={{
                color: "#ff6200",
                display: "inline-block",
              }}
            >
              best
            </span>
            <br />
            tutors in India.
          </h1>

          {/* Subheading */}
          <p
            className={`text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{
              color: "rgba(26,26,36,0.65)",
              transitionDelay: "200ms",
            }}
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
            <div
              className="flex items-center gap-3 px-4 py-3.5 rounded-lg input-dark"
            >
              <Search className="w-4 h-4 flex-shrink-0" style={{ color: "rgba(26,26,36,0.4)" }} />
              <input
                type="text"
                placeholder="What do you want to learn?"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full bg-transparent focus:outline-none text-sm"
                style={{ color: "#1A1A24" }}
              />
            </div>

            {/* Mode + CTA row */}
            <div className="flex gap-3">
              <div className="flex-1 relative" ref={modeRef}>
                <button
                  ref={btnRef}
                  onClick={() => { recalcDropdown(); setModeOpen((o) => !o); }}
                  className="w-full flex items-center justify-between px-4 py-3.5 rounded-lg input-dark text-sm"
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
                      borderRadius: "10px",
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
                          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm transition-colors cursor-pointer"
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

              <button
                className="btn-coral rounded-lg px-6 flex items-center gap-2 text-sm whitespace-nowrap"
              >
                Find Tutor
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Stats row */}
          <div
            className={`flex items-center justify-center gap-8 mt-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "500ms" }}
          >
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <span className="text-2xl font-black tracking-tight text-[#1A1A24]">{stat.value}</span>
                <span className="text-xs font-medium" style={{ color: "rgba(26,26,36,0.55)" }}>{stat.label}</span>
              </div>
            ))}
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
              {floatingTags.map((tag, i) => (
                <button
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-medium transition-all duration-200"
                  style={{
                    background: "rgba(26,26,36,0.05)",
                    border: "1px solid rgba(26,26,36,0.1)",
                    color: "rgba(26,26,36,0.65)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,98,0,0.4)";
                    e.currentTarget.style.color = "#ff6200";
                    e.currentTarget.style.background = "rgba(255,98,0,0.07)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(26,26,36,0.1)";
                    e.currentTarget.style.color = "rgba(26,26,36,0.65)";
                    e.currentTarget.style.background = "rgba(26,26,36,0.05)";
                  }}
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
