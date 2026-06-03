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
    <section className="pt-24 pb-12 bg-white">
      <div className="container-xl px-4 md:px-8 max-w-[1340px] mx-auto">
        <div className="relative w-full overflow-hidden" style={{ minHeight: "450px" }}>
          
          {/* Background Image Banner */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
              alt="Students learning"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Box */}
          <div className="relative z-10 p-6 md:p-12 lg:p-14 md:my-16 md:ml-16 bg-white shadow-2xl max-w-xl flex flex-col justify-center h-full">
            <h1 className="text-3xl md:text-[2.5rem] font-bold text-slate-900 leading-tight mb-4 font-serif" style={{ fontFamily: "Georgia, serif" }}>
              Upgrade Your Skills with Faculties Online
            </h1>
            <p className="text-base text-slate-700 mb-8 leading-relaxed">
              Connect with verified tutors for online, offline & home tuition. Learn at your pace, from India&apos;s best educators in any subject you desire.
            </p>

            {/* Search Form inside Box */}
            <div className="w-full flex flex-col gap-3">
              <div className="flex items-center border border-slate-900 px-4 py-3 bg-white">
                <Search className="w-5 h-5 text-slate-500 mr-3" />
                <input 
                  type="text" 
                  placeholder="What do you want to learn?"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full focus:outline-none text-slate-800 placeholder-slate-500"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1" ref={modeRef}>
                  <button
                    ref={btnRef}
                    onClick={() => {
                      recalcDropdown();
                      setModeOpen((o) => !o);
                    }}
                    className="w-full flex items-center justify-between border border-slate-900 px-4 py-3 bg-white hover:bg-slate-50 transition-colors text-slate-700"
                  >
                    <div className="flex items-center gap-2">
                      <mode.icon className="w-4 h-4 text-slate-600" />
                      <span className="text-sm font-bold">{mode.label}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-slate-600 transition-transform ${modeOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Mode Dropdown Portal */}
                  {modeOpen && mounted && createPortal(
                    <div
                      ref={portalRef}
                      style={{
                        ...dropdownStyle,
                        background: "#fff",
                        border: "1px solid #1e293b",
                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                        padding: "8px",
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
                            className={`w-full flex cursor-pointer items-center gap-3 px-3 py-2 text-sm transition-all hover:bg-slate-100 ${active ? 'bg-slate-100' : ''}`}
                          >
                            <m.icon className="w-4 h-4 text-slate-700" />
                            <div className="flex-1 text-left">
                              <p className="font-bold text-slate-900">{m.label}</p>
                              <p className="text-xs text-slate-500">{m.desc}</p>
                            </div>
                            {active && <CheckCircle className="w-4 h-4 text-slate-900" />}
                          </button>
                        );
                      })}
                    </div>,
                    document.body
                  )}
                </div>
                
                <button className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-8 transition-colors whitespace-nowrap">
                  Find Tutor
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
