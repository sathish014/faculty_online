"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { Search, ChevronDown, CheckCircle, Laptop, School, Home, RefreshCw } from "lucide-react";

const modeOptions = [
  { label: "Any Mode", icon: Search, desc: "All teaching modes" },
  { label: "Online", icon: Laptop, desc: "Virtual sessions" },
  { label: "Offline", icon: School, desc: "In-person classes" },
  { label: "Online & Offline", icon: RefreshCw, desc: "Flexible mode" },
  { label: "Home Tuition", icon: Home, desc: "Tutor comes to you" },
];

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
      top: r.bottom + 4,
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

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (subject) params.set("subject", subject);
    if (mode.label !== "Any Mode") params.set("mode", mode.label);
    window.location.href = `/tutor/search${params.toString() ? "?" + params.toString() : ""}`;
  };

  return (
    <section className="pt-16">
      {/* Photo Banner */}
      <div className="relative w-full overflow-hidden" style={{ minHeight: "420px" }}>
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
            alt="Students learning together"
            className="w-full h-full object-cover"
          />
          {/* Simple dark overlay */}
          <div className="absolute inset-0" style={{ background: "rgba(15,23,42,0.55)" }} />
        </div>

        {/* Content box — left-aligned floating panel */}
        <div className="relative z-10 container-xl h-full flex items-center" style={{ minHeight: "420px" }}>
          <div
            className="bg-white p-8 md:p-10 max-w-lg w-full"
            style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.15)" }}
          >
            <h1 className="font-heading font-bold text-slate-900 text-3xl md:text-[2.2rem] leading-tight mb-3">
              Find the perfect tutor for your goals
            </h1>
            <p className="text-slate-600 text-base mb-6 leading-relaxed">
              Connect with verified tutors for online, offline &amp; home tuition across India.
            </p>

            {/* Search inputs */}
            <div className="flex flex-col gap-2">
              {/* Subject input */}
              <div className="flex items-center border border-slate-900 px-3 py-3 bg-white">
                <Search className="w-4 h-4 text-slate-500 mr-2.5 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="What do you want to learn?"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  className="w-full focus:outline-none text-slate-800 placeholder-slate-400 text-sm"
                />
              </div>

              {/* Mode selector + Search button row */}
              <div className="flex gap-2">
                {/* Mode dropdown */}
                <div className="relative flex-1" ref={modeRef}>
                  <button
                    ref={btnRef}
                    onClick={() => { recalcDropdown(); setModeOpen((o) => !o); }}
                    className="w-full flex items-center justify-between border border-slate-900 px-3 py-3 bg-white hover:bg-slate-50 transition-colors text-slate-700"
                  >
                    <div className="flex items-center gap-2">
                      <mode.icon className="w-4 h-4 text-slate-500" />
                      <span className="text-sm font-medium">{mode.label}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${modeOpen ? "rotate-180" : ""}`} />
                  </button>

                  {modeOpen && mounted && createPortal(
                    <div
                      ref={portalRef}
                      style={{
                        ...dropdownStyle,
                        background: "#fff",
                        border: "1px solid #e2e8f0",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                        padding: "6px",
                      }}
                    >
                      {modeOptions.map((m) => {
                        const active = mode.label === m.label;
                        return (
                          <button
                            key={m.label}
                            onMouseDown={(e) => { e.preventDefault(); setMode(m); setModeOpen(false); }}
                            className={`w-full flex items-center gap-3 px-3 py-2 text-sm transition-colors hover:bg-slate-100 ${active ? "bg-slate-100" : ""}`}
                          >
                            <m.icon className="w-4 h-4 text-slate-500" />
                            <div className="flex-1 text-left">
                              <p className="font-semibold text-slate-900">{m.label}</p>
                              <p className="text-xs text-slate-400">{m.desc}</p>
                            </div>
                            {active && <CheckCircle className="w-4 h-4" style={{ color: "#0d9488" }} />}
                          </button>
                        );
                      })}
                    </div>,
                    document.body
                  )}
                </div>

                {/* Search button */}
                <button
                  onClick={handleSearch}
                  className="px-6 py-3 font-bold text-white text-sm transition-colors whitespace-nowrap"
                  style={{ background: "#0d9488" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#0f766e")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#0d9488")}
                >
                  Search
                </button>
              </div>
            </div>

            {/* Trust line */}
            <p className="text-slate-500 text-xs mt-4">
              Trusted by <strong className="text-slate-700">10,000+</strong> students across India
            </p>
          </div>
        </div>
      </div>

      {/* Stats bar below hero */}
      <div className="bg-white border-b border-slate-200">
        <div className="container-xl">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-8 gap-y-3 py-4">
            {[
              { value: "10K+", label: "Active Students" },
              { value: "5K+", label: "Expert Tutors" },
              { value: "100+", label: "Subjects" },
              { value: "4.9★", label: "Avg. Rating" },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-2">
                <span className="font-heading font-bold text-slate-900 text-base">{s.value}</span>
                <span className="text-slate-500 text-sm">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
