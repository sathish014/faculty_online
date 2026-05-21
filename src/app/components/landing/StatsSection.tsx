"use client";

import { Users, BookOpen, Star, Headphones, TrendingUp, Award } from "lucide-react";

const stats = [
  {
    id: "stat-students",
    icon: Users,
    value: "10K+",
    label: "Active Students",
    description: "Learning every day",
    color: "from-indigo-500 to-blue-600",
    bg: "from-indigo-50 to-blue-50",
    border: "border-indigo-100",
  },
  {
    id: "stat-tutors",
    icon: Award,
    value: "5K+",
    label: "Expert Tutors",
    description: "Verified & certified",
    color: "from-violet-500 to-purple-600",
    bg: "from-violet-50 to-purple-50",
    border: "border-violet-100",
  },
  {
    id: "stat-skills",
    icon: BookOpen,
    value: "100+",
    label: "Skills & Subjects",
    description: "Across all domains",
    color: "from-blue-500 to-cyan-600",
    bg: "from-blue-50 to-cyan-50",
    border: "border-blue-100",
  },
  {
    id: "stat-rating",
    icon: Star,
    value: "4.9★",
    label: "Average Rating",
    description: "Student satisfaction",
    color: "from-amber-500 to-orange-500",
    bg: "from-amber-50 to-orange-50",
    border: "border-amber-100",
  },
  {
    id: "stat-support",
    icon: Headphones,
    value: "24/7",
    label: "Support",
    description: "Always here for you",
    color: "from-green-500 to-emerald-600",
    bg: "from-green-50 to-emerald-50",
    border: "border-green-100",
  },
  {
    id: "stat-sessions",
    icon: TrendingUp,
    value: "50K+",
    label: "Sessions Done",
    description: "Successful learnings",
    color: "from-pink-500 to-rose-600",
    bg: "from-pink-50 to-rose-50",
    border: "border-pink-100",
  },
];

export default function StatsSection() {
  return (
    <section id="stats" className="relative bg-white pt-28 pb-20">
      {/* Subtle background */}
      <div className="absolute inset-0 gradient-section opacity-60" />

      <div className="container-xl relative z-10">
        {/* Section Label */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-semibold mb-4">
            <TrendingUp className="w-3.5 h-3.5" />
            Trusted by thousands
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-slate-900">
            Numbers That{" "}
            <span className="gradient-text">Speak for Themselves</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              id={stat.id}
              className={`relative group rounded-2xl p-5 border ${stat.border} bg-gradient-to-br ${stat.bg} card-glow cursor-default`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div
                className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3 shadow-md group-hover:scale-110 transition-transform duration-300`}
              >
                <stat.icon className="w-5 h-5 text-white" />
              </div>

              {/* Value */}
              <p className="text-2xl font-heading font-extrabold text-slate-900 leading-none">
                {stat.value}
              </p>

              {/* Label */}
              <p className="text-sm font-semibold text-slate-700 mt-1">{stat.label}</p>
              <p className="text-xs text-slate-400 mt-0.5">{stat.description}</p>

              {/* Decorative corner */}
              <div
                className={`absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${stat.color} opacity-60`}
              />
            </div>
          ))}
        </div>

        {/* Ticker / Marquee */}
        <div className="mt-16 relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />
          <div className="flex ticker-wrap">
            <div className="flex items-center gap-8 animate-ticker pr-8 shrink-0">
              {[
                "Mathematics",
                "Physics",
                "Chemistry",
                "Python Programming",
                "Spoken English",
                "IIT-JEE Prep",
                "NEET Coaching",
                "Music",
                "UI/UX Design",
                "Data Science",
                "Competitive Exams",
                "School Tuition",
                "Guitar Lessons",
                "Drawing & Art",
                "French Language",
              ].map((skill, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-sm font-medium whitespace-nowrap hover:bg-indigo-50 hover:border-indigo-200 hover:text-indigo-600 transition-colors cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-violet-400" />
                  {skill}
                </div>
              ))}
            </div>
            {/* Duplicate for seamless loop */}
            <div className="flex items-center gap-8 animate-ticker pr-8 shrink-0" aria-hidden="true">
              {[
                "Mathematics",
                "Physics",
                "Chemistry",
                "Python Programming",
                "Spoken English",
                "IIT-JEE Prep",
                "NEET Coaching",
                "Music",
                "UI/UX Design",
                "Data Science",
                "Competitive Exams",
                "School Tuition",
                "Guitar Lessons",
                "Drawing & Art",
                "French Language",
              ].map((skill, i) => (
                <div
                  key={`dup-${i}`}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-sm font-medium whitespace-nowrap"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-violet-400" />
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
