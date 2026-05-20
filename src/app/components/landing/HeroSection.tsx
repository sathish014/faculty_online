"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Search,
  MapPin,
  Monitor,
  ChevronDown,
  ArrowRight,
  BookOpen,
  Star,
  Users,
  CheckCircle,
  Play,
  Sparkles,
  Zap,
} from "lucide-react";

const floatingCards = [
  {
    id: "fc1",
    name: "Priya Sharma",
    subject: "Mathematics",
    rating: "4.9",
    reviews: "128 reviews",
    avatar: "PS",
    color: "from-violet-500 to-purple-600",
    position: "top-16 right-8",
    delay: "0s",
  },
  {
    id: "fc2",
    name: "Rahul Verma",
    subject: "Physics & Chemistry",
    rating: "4.8",
    reviews: "96 reviews",
    avatar: "RV",
    color: "from-blue-500 to-indigo-600",
    position: "bottom-32 right-4",
    delay: "2s",
  },
];

const statsCards = [
  { label: "Students Enrolled", value: "12,400+", icon: "👨‍🎓", delay: "1s" },
  { label: "Avg. Session Rating", value: "4.9 ★", icon: "⭐", delay: "3s" },
];

export default function HeroSection() {
  const [subject, setSubject] = useState("");
  const [location, setLocation] = useState("");
  const [mode, setMode] = useState("Any Mode");
  const [modeOpen, setModeOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const modeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const handleClickOutside = (e: MouseEvent) => {
      if (modeRef.current && !modeRef.current.contains(e.target as Node)) {
        setModeOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const modes = ["Any Mode", "Online", "Offline", "Home Tuition"];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden hero-bg pt-20"
    >
      {/* Noise texture overlay */}
      <div className="noise-overlay" />

      {/* Floating background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-violet-600/15 rounded-full blur-3xl animate-blob-delay-1" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl animate-blob-delay-2" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container-xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh] py-16">
          {/* LEFT CONTENT */}
          <div className={`${mounted ? "animate-slide-up" : "opacity-0"} space-y-8`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/20 text-white/90 text-sm font-medium">
              <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
              <span>India's #1 Tutor Marketplace Platform</span>
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-heading font-extrabold text-white leading-[1.05] tracking-tight">
                Upgrade Your
                <br />
                <span className="relative">
                  <span className="bg-gradient-to-r from-indigo-300 via-violet-300 to-purple-300 bg-clip-text text-transparent">
                    Skills
                  </span>
                </span>{" "}
                with{" "}
                <br />
                <span className="text-white">Expert Mentors</span>
              </h1>

              <p className="text-lg text-white/65 max-w-lg leading-relaxed font-sans">
                Connect with verified tutors for online, offline & home tuition.
                Learn at your pace, on your schedule, from India's best educators.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#tutors"
                id="hero-find-tutor-btn"
                className="btn-primary flex items-center gap-2.5 px-8 py-4 rounded-2xl font-semibold text-white text-base shadow-lg"
              >
                <Search className="w-5 h-5" />
                Find a Tutor
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="#post-requirement"
                id="hero-post-requirement-btn"
                className="flex items-center gap-2.5 px-8 py-4 rounded-2xl font-semibold text-white border border-white/25 hover:bg-white/10 hover:border-white/40 transition-all duration-300 text-base"
              >
                <Zap className="w-5 h-5 text-yellow-400" />
                Post Requirement
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-2">
              {[
                { icon: CheckCircle, text: "Verified Tutors" },
                { icon: Star, text: "4.9/5 Rating" },
                { icon: Users, text: "10K+ Students" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-white/60 text-sm">
                  <item.icon className="w-4 h-4 text-green-400" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE - Dashboard Mockup */}
          <div className="relative hidden lg:block h-[600px]">
            {/* Main Dashboard Card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px]">
              <div className="glass rounded-3xl p-6 shadow-2xl border border-white/20 animate-float-slow">
                {/* Card Header */}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-white/50 text-xs font-medium uppercase tracking-wider">
                      Your Dashboard
                    </p>
                    <h3 className="text-white font-heading font-bold text-lg mt-0.5">
                      Welcome back! 👋
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {[
                    { label: "Sessions", value: "24", color: "text-indigo-300" },
                    { label: "Hours", value: "48h", color: "text-violet-300" },
                    { label: "Skills", value: "6", color: "text-blue-300" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-white/5 rounded-xl p-3 text-center border border-white/10"
                    >
                      <p className={`text-xl font-bold ${stat.color}`}>{stat.value}</p>
                      <p className="text-white/40 text-xs mt-0.5">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Progress */}
                <div className="space-y-3 mb-5">
                  <p className="text-white/60 text-xs font-medium uppercase tracking-wider">
                    Learning Progress
                  </p>
                  {[
                    { subject: "Mathematics", progress: 78, color: "from-indigo-400 to-violet-500" },
                    { subject: "Physics", progress: 55, color: "from-blue-400 to-cyan-500" },
                    { subject: "English", progress: 90, color: "from-violet-400 to-purple-500" },
                  ].map((item) => (
                    <div key={item.subject}>
                      <div className="flex justify-between text-xs text-white/60 mb-1.5">
                        <span>{item.subject}</span>
                        <span>{item.progress}%</span>
                      </div>
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                          style={{ width: `${item.progress}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Upcoming Session */}
                <div className="bg-gradient-to-r from-indigo-500/20 to-violet-500/20 rounded-xl p-3 border border-indigo-500/30">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-400 to-violet-500 flex items-center justify-center flex-shrink-0">
                      <Play className="w-3.5 h-3.5 text-white fill-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-semibold truncate">
                        Calculus with Priya
                      </p>
                      <p className="text-white/50 text-xs">Today, 5:00 PM</p>
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full bg-green-400/20 text-green-300 border border-green-400/30 font-medium">
                      Live Soon
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Tutor Cards */}
            {floatingCards.map((card, i) => (
              <div
                key={card.id}
                className={`absolute ${card.position} animate-float`}
                style={{ animationDelay: card.delay }}
              >
                <div className="glass-light rounded-2xl p-4 shadow-xl w-52 border border-white/40">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                    >
                      {card.avatar}
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-slate-900 text-sm truncate">
                        {card.name}
                      </p>
                      <p className="text-indigo-600 text-xs truncate">{card.subject}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <span className="flex items-center gap-1 text-xs text-amber-600 font-semibold">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      {card.rating}
                    </span>
                    <span className="text-xs text-slate-500">{card.reviews}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Stats floating cards */}
            {statsCards.map((stat) => (
              <div
                key={stat.label}
                className="absolute bottom-20 left-0 animate-float"
                style={{ animationDelay: stat.delay }}
              >
                <div className="glass rounded-xl p-3 border border-white/20 shadow-lg">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl">{stat.icon}</span>
                    <div>
                      <p className="text-white font-bold text-lg leading-none">{stat.value}</p>
                      <p className="text-white/50 text-xs mt-0.5">{stat.label}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SMART SEARCH BAR */}
        <div className="relative -mb-16 z-20">
          <div className="glass-light rounded-2xl border border-white/40 shadow-2xl p-2 md:p-3">
            <div className="flex flex-col md:flex-row gap-2">
              {/* Subject */}
              <div className="flex-1 relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <BookOpen className="w-5 h-5 text-indigo-400" />
                </div>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Subject or Skill (e.g., Maths, Python)"
                  id="hero-search-subject"
                  className="w-full pl-12 pr-4 py-4 bg-white/70 rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-indigo-200 transition-all"
                />
              </div>

              {/* Location */}
              <div className="flex-1 relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <MapPin className="w-5 h-5 text-violet-400" />
                </div>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Location (City or Online)"
                  id="hero-search-location"
                  className="w-full pl-12 pr-4 py-4 bg-white/70 rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-violet-200 transition-all"
                />
              </div>

              {/* Mode Dropdown */}
              <div className="relative md:w-52" ref={modeRef}>
                <button
                  id="hero-search-mode-btn"
                  onClick={() => setModeOpen(!modeOpen)}
                  className="w-full flex items-center gap-3 px-4 py-4 bg-white/70 rounded-xl text-sm text-slate-700 hover:bg-white transition-all"
                >
                  <Monitor className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                  <span className="flex-1 text-left">{mode}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${modeOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {modeOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden z-50 animate-slide-up">
                    {modes.map((m) => (
                      <button
                        key={m}
                        onClick={() => {
                          setMode(m);
                          setModeOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 text-sm transition-colors ${
                          mode === m
                            ? "bg-indigo-50 text-indigo-600 font-medium"
                            : "text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Search Button */}
              <button
                id="hero-search-submit"
                className="btn-primary flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-white text-sm whitespace-nowrap shadow-lg"
              >
                <Search className="w-5 h-5" />
                Find Tutors
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
