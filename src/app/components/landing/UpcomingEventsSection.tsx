"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import ScrollReveal from "../common/ScrollReveal";
import { Calendar, Users, Clock, ArrowRight, Video, Wrench, Trophy } from "lucide-react";

const events = [
  {
    id: "e1",
    type: "Webinar",
    typeIcon: Video,
    title: "Cracking JEE 2025: Strategy from IITians",
    speaker: "Priya Sharma, IIT Bombay",
    speakerRole: "Mathematics Expert",
    date: "2026-07-15T18:00:00",
    duration: "2 hours",
    seats: 340,
    seatsLeft: 47,
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=400&auto=format&fit=crop",
    isFree: true,
    theme: {
      primary: "#7c3aed", // Bright Purple
      dark: "#4D148C", // Deep Violet
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
    speaker: "Amit Patel, Senior Dev",
    speakerRole: "Full Stack Engineer",
    date: "2026-07-18T10:00:00",
    duration: "3 hours",
    seats: 120,
    seatsLeft: 12,
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=400&auto=format&fit=crop",
    isFree: false,
    theme: {
      primary: "#ff6200", // Coral
      dark: "#d94e00", // Deep Orange
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
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=400&auto=format&fit=crop",
    isFree: true,
    theme: {
      primary: "#059669", // Emerald Green
      dark: "#047857", // Deep Emerald
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
];

function CountdownTimer({
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
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setTimeLeft({ d, h, m, s });
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

export default function UpcomingEventsSection() {
  return (
    <section className="pt-8 pb-16" style={{ background: "var(--bg-secondary)" }}>
      <div className="line-divider mb-10" />
      <div className="container-xl">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#ff6200] text-xs font-bold uppercase tracking-widest">Events</span>
            <span className="h-px flex-1 max-w-[40px]" style={{ background: "rgba(255,98,0,0.4)" }} />
          </div>
        </ScrollReveal>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <ScrollReveal delay={100}>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight text-[#1A1A24]">
              Upcoming Events
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <Link href="/events" className="btn-ghost rounded-xl px-5 py-2.5 flex items-center gap-2 text-sm font-semibold">
              All events <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((ev, i) => {
            const Icon = ev.typeIcon;
            const seatsPercent = Math.round(((ev.seats - ev.seatsLeft) / ev.seats) * 100);

            return (
              <ScrollReveal key={ev.id} delay={i * 100}>
                <div
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

                  {/* Image */}
                  <div className="h-44 overflow-hidden relative">
                    <img
                      src={ev.image}
                      alt={ev.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    {/* Type badge */}
                    <div
                      className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold shadow-md backdrop-blur-md"
                      style={{ background: "rgba(255,255,255,0.95)", color: ev.theme.primary }}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      {ev.type}
                    </div>
                    {/* Free badge */}
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

                      {/* Meta */}
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
                          <span className={ev.seatsLeft < 30 ? "text-red-500 font-bold" : "font-semibold text-[#1A1A24]"}>
                            {ev.seatsLeft} left
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      {/* Countdown */}
                      <div className="mb-4">
                        <p className="text-[10px] font-bold uppercase tracking-wider mb-1.5 text-[rgba(26,26,36,0.45)]">
                          Starts in
                        </p>
                        <CountdownTimer targetDate={ev.date} theme={ev.theme} />
                      </div>

                      {/* Seats progress */}
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
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
