"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";
import { Calendar, Clock, Users, ArrowRight, Video, Wrench, Trophy, Filter } from "lucide-react";
import Link from "next/link";

const events = [
  {
    id: "e1",
    type: "Webinar",
    typeIcon: Video,
    title: "Cracking JEE 2025: Strategy from IITians",
    speaker: "Priya Sharma",
    speakerRole: "IIT Bombay Alumni",
    date: "2026-07-15T18:00:00",
    duration: "2 hours",
    seats: 340,
    seatsLeft: 47,
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600&auto=format&fit=crop",
    isFree: true,
    theme: {
      primary: "#7c3aed",
      dark: "#4D148C",
      light: "rgba(124, 58, 237, 0.1)",
      border: "rgba(124, 58, 237, 0.25)",
      hoverBorder: "rgba(124, 58, 237, 0.6)",
      gradient: "linear-gradient(135deg, #4D148C, #7c3aed)",
      shadow: "rgba(124, 58, 237, 0.15)",
      timerBg: "rgba(124, 58, 237, 0.07)",
      timerBorder: "rgba(124, 58, 237, 0.22)",
      btnClass: "from-[#4D148C] to-[#7c3aed] hover:from-[#3b0f6e] hover:to-[#6d28d9] shadow-purple-500/25",
    },
  },
  {
    id: "e2",
    type: "Workshop",
    typeIcon: Wrench,
    title: "Build a Full-Stack App in 3 Hours",
    speaker: "Amit Patel",
    speakerRole: "Senior Full Stack Engineer",
    date: "2026-07-18T10:00:00",
    duration: "3 hours",
    seats: 120,
    seatsLeft: 12,
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop",
    isFree: false,
    theme: {
      primary: "#ff6200",
      dark: "#d94e00",
      light: "rgba(255, 98, 0, 0.1)",
      border: "rgba(255, 98, 0, 0.25)",
      hoverBorder: "rgba(255, 98, 0, 0.6)",
      gradient: "linear-gradient(135deg, #ff6200, #ff8c42)",
      shadow: "rgba(255, 98, 0, 0.15)",
      timerBg: "rgba(255, 98, 0, 0.07)",
      timerBorder: "rgba(255, 98, 0, 0.22)",
      btnClass: "from-[#ff6200] to-[#ff8c42] hover:from-[#e05500] hover:to-[#f77f00] shadow-orange-500/25",
    },
  },
  {
    id: "e3",
    type: "Hackathon",
    typeIcon: Trophy,
    title: "EdTech Hack 2026 — Win ₹5 Lakh",
    speaker: "Multiple Mentors",
    speakerRole: "Industry Leaders",
    date: "2026-07-25T09:00:00",
    duration: "48 hours",
    seats: 500,
    seatsLeft: 234,
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop",
    isFree: true,
    theme: {
      primary: "#059669",
      dark: "#047857",
      light: "rgba(5, 150, 105, 0.1)",
      border: "rgba(5, 150, 105, 0.25)",
      hoverBorder: "rgba(5, 150, 105, 0.6)",
      gradient: "linear-gradient(135deg, #059669, #10b981)",
      shadow: "rgba(5, 150, 105, 0.15)",
      timerBg: "rgba(5, 150, 105, 0.07)",
      timerBorder: "rgba(5, 150, 105, 0.22)",
      btnClass: "from-[#059669] to-[#10b981] hover:from-[#047857] hover:to-[#059669] shadow-emerald-500/25",
    },
  },
  {
    id: "e4",
    type: "Webinar",
    typeIcon: Video,
    title: "NEET 2026 Biology: Last Mile Preparation",
    speaker: "Sneha Reddy",
    speakerRole: "NEET Biology Expert",
    date: "2026-07-20T17:00:00",
    duration: "90 minutes",
    seats: 200,
    seatsLeft: 78,
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=600&auto=format&fit=crop",
    isFree: true,
    theme: {
      primary: "#0284c7",
      dark: "#0369a1",
      light: "rgba(2, 132, 199, 0.1)",
      border: "rgba(2, 132, 199, 0.25)",
      hoverBorder: "rgba(2, 132, 199, 0.6)",
      gradient: "linear-gradient(135deg, #0284c7, #38bdf8)",
      shadow: "rgba(2, 132, 199, 0.15)",
      timerBg: "rgba(2, 132, 199, 0.07)",
      timerBorder: "rgba(2, 132, 199, 0.22)",
      btnClass: "from-[#0284c7] to-[#0ea5e9] hover:from-[#0369a1] hover:to-[#0284c7] shadow-blue-500/25",
    },
  },
  {
    id: "e5",
    type: "Workshop",
    typeIcon: Wrench,
    title: "React Performance Optimization Workshop",
    speaker: "Vikram Malhotra",
    speakerRole: "Principal Engineer at Flipkart",
    date: "2026-07-28T14:00:00",
    duration: "4 hours",
    seats: 80,
    seatsLeft: 5,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=600&auto=format&fit=crop",
    isFree: false,
    theme: {
      primary: "#d97706",
      dark: "#b45309",
      light: "rgba(217, 119, 6, 0.1)",
      border: "rgba(217, 119, 6, 0.25)",
      hoverBorder: "rgba(217, 119, 6, 0.6)",
      gradient: "linear-gradient(135deg, #d97706, #f59e0b)",
      shadow: "rgba(217, 119, 6, 0.15)",
      timerBg: "rgba(217, 119, 6, 0.07)",
      timerBorder: "rgba(217, 119, 6, 0.22)",
      btnClass: "from-[#d97706] to-[#f59e0b] hover:from-[#b45309] hover:to-[#d97706] shadow-amber-500/25",
    },
  },
];

const types = ["All", "Webinar", "Workshop", "Hackathon"];

function Countdown({
  targetDate,
  theme,
}: {
  targetDate: string;
  theme: { primary: string; timerBg: string; timerBorder: string };
}) {
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const calc = () => {
      const diff = new Date(targetDate).getTime() - Date.now();
      if (diff <= 0) return setTimeLeft({ d: 0, h: 0, m: 0, s: 0 });
      setTimeLeft({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };
    calc();
    const t = setInterval(calc, 1000);
    return () => clearInterval(t);
  }, [targetDate]);

  return (
    <div className="grid grid-cols-4 gap-2">
      {[
        { v: timeLeft.d, l: "Days" },
        { v: timeLeft.h, l: "Hours" },
        { v: timeLeft.m, l: "Mins" },
        { v: timeLeft.s, l: "Secs" },
      ].map(({ v, l }) => (
        <div
          key={l}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl transition-all"
          style={{
            background: theme.timerBg,
            border: `1px solid ${theme.timerBorder}`,
          }}
        >
          <span
            className="text-base sm:text-lg font-black leading-none tracking-tight"
            style={{ color: theme.primary }}
          >
            {String(v).padStart(2, "0")}
          </span>
          <span className="text-[9px] text-[rgba(26,26,36,0.55)] font-bold uppercase tracking-wider mt-1">{l}</span>
        </div>
      ))}
    </div>
  );
}

export default function EventsPage() {
  const [type, setType] = useState("All");

  const filtered = events.filter((e) => type === "All" || e.type === type);

  return (
    <main className="min-h-screen flex flex-col" style={{ background: "var(--bg-primary)" }}>
      <Navbar />

      {/* Hero */}
      <div className="pt-28 pb-12 px-4" style={{ background: "#f7f8fc" }}>
        <div className="container-xl">
          <div className="max-w-2xl animate-fade-up">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-4 h-4 text-[#ff6200]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#ff6200]">Events</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-[#1A1A24] tracking-tight mb-3">
              Upcoming <span className="text-[#ff6200]">events</span>
            </h1>
            <p className="text-base text-[rgba(26,26,36,0.65)]">
              Join live webinars, workshops, and hackathons led by India&apos;s top educators and industry experts.
            </p>
          </div>
        </div>
      </div>

      <div className="container-xl py-8 flex-1">
        {/* Type filter */}
        <div className="flex items-center gap-2 mb-8">
          {types.map((t) => (
            <button
              key={t}
              onClick={() => setType(t)}
              className="flex-shrink-0 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200"
              style={{
                background: type === t ? "#ff6200" : "rgba(26,26,36,0.06)",
                color: type === t ? "#fff" : "rgba(26,26,36,0.7)",
                border: type === t ? "1px solid #ff6200" : "1px solid rgba(26,26,36,0.1)",
                boxShadow: type === t ? "0 4px 16px rgba(255,98,0,0.25)" : "none",
              }}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((ev) => {
            const Icon = ev.typeIcon;
            const seatsPercent = Math.round(((ev.seats - ev.seatsLeft) / ev.seats) * 100);

            return (
              <div
                key={ev.id}
                className="rounded-2xl overflow-hidden group transition-all duration-300 flex flex-col h-full relative"
                style={{
                  background: "var(--bg-sidebar)",
                  border: `1px solid ${ev.theme.border}`,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = ev.theme.hoverBorder;
                  e.currentTarget.style.boxShadow = `0 16px 36px ${ev.theme.shadow}`;
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = ev.theme.border;
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.03)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {/* Top Color Accent Banner */}
                <div className="h-1.5 w-full" style={{ background: ev.theme.gradient }} />

                <div className="h-44 overflow-hidden relative">
                  <img
                    src={ev.image}
                    alt={ev.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div
                    className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold shadow-md backdrop-blur-md"
                    style={{ background: "rgba(255,255,255,0.95)", color: ev.theme.primary }}
                  >
                    <Icon className="w-3.5 h-3.5" /> {ev.type}
                  </div>
                  {ev.isFree ? (
                    <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#16a34a] text-white shadow-sm">
                      FREE
                    </div>
                  ) : (
                    <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#1A1A24] text-white shadow-sm">
                      PAID
                    </div>
                  )}
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3
                      className="font-bold text-base text-[#1A1A24] leading-snug mb-3.5 transition-colors line-clamp-2"
                      style={{ transition: "color 0.2s ease" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = ev.theme.primary)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#1A1A24")}
                    >
                      {ev.title}
                    </h3>

                    <div className="flex items-center gap-2.5 mb-4">
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0 shadow-sm"
                        style={{
                          background: ev.theme.light,
                          color: ev.theme.primary,
                          border: `1px solid ${ev.theme.border}`,
                        }}
                      >
                        {ev.speaker.charAt(0)}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#1A1A24]">{ev.speaker}</p>
                        <p className="text-[10px] text-[rgba(26,26,36,0.55)] font-medium">{ev.speakerRole}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 mb-5 text-[rgba(26,26,36,0.65)] text-xs font-medium">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" style={{ color: ev.theme.primary }} />
                        <span>
                          {new Date(ev.date).toLocaleDateString("en-IN", { day: "numeric", month: "short" })}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" style={{ color: ev.theme.primary }} />
                        <span>{ev.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5 ml-auto">
                        <Users className="w-3.5 h-3.5" style={{ color: ev.theme.primary }} />
                        <span className={ev.seatsLeft < 20 ? "text-red-500 font-bold" : "font-semibold text-[#1A1A24]"}>
                          {ev.seatsLeft} left
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="mb-4">
                      <p className="text-[10px] font-bold uppercase tracking-wider mb-1.5 text-[rgba(26,26,36,0.45)]">
                        Starts in
                      </p>
                      <Countdown targetDate={ev.date} theme={ev.theme} />
                    </div>

                    <div className="mb-5">
                      <div className="h-2 w-full rounded-full overflow-hidden" style={{ background: "rgba(26,26,36,0.08)" }}>
                        <div
                          className="h-full rounded-full transition-all duration-1000"
                          style={{
                            width: `${seatsPercent}%`,
                            background: ev.theme.gradient,
                          }}
                        />
                      </div>
                      <div className="flex items-center justify-between text-[11px] font-semibold mt-1.5">
                        <span style={{ color: ev.theme.primary }}>{seatsPercent}% seats filled</span>
                        <span className="text-[rgba(26,26,36,0.45)]">{ev.seats} total seats</span>
                      </div>
                    </div>

                    <Link
                      href={`/events/${ev.id}`}
                      className={`w-full rounded-xl py-3 flex items-center justify-center gap-2 text-sm font-bold text-white shadow-md hover:shadow-lg transition-all duration-300 bg-gradient-to-r ${ev.theme.btnClass} active:scale-[0.98]`}
                    >
                      Register Now <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </main>
  );
}
