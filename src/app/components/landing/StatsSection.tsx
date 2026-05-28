"use client";

import { Users, BookOpen, Star, TrendingUp, Award } from "lucide-react";

const stats = [
  {
    id: "stat-students",
    icon: Users,
    value: "10K+",
    label: "Active Students",
    description: "Learning every day",
    iconGradient: "from-indigo-500 to-blue-500",
  },
  {
    id: "stat-tutors",
    icon: Award,
    value: "5K+",
    label: "Expert Tutors",
    description: "Verified & certified",
    iconGradient: "from-violet-500 to-purple-500",
  },
  {
    id: "stat-skills",
    icon: BookOpen,
    value: "100+",
    label: "Skills & Subjects",
    description: "Across all domains",
    iconGradient: "from-cyan-500 to-teal-500",
  },
  {
    id: "stat-rating",
    icon: Star,
    value: "4.9★",
    label: "Average Rating",
    description: "Student satisfaction",
    iconGradient: "from-amber-400 to-orange-500",
  },
];

export default function StatsSection() {
  return (
    <section id="stats" className="relative bg-white pt-28 pb-20">
      {/* Subtle background */}
      <div className="absolute inset-0 gradient-section opacity-60" />

      <div className="container-xl relative z-10">
        {/* Section Label */}
        <div className="text-center mb-10">

          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-slate-800">
            Numbers That Speak for Themselves

          </h2>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-semibold mt-6">
            <TrendingUp className="w-3.5 h-3.5" />
            Trusted by thousands
          </div>
        </div>

        {/* Stats Grid — 4 cards, bigger size */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              id={stat.id}
              className="relative group bg-white rounded-2xl p-8 border border-slate-100 border-l-4 border-l-indigo-300 shadow-sm hover:shadow-lg hover:border-indigo-200 transition-all duration-300 hover:-translate-y-1 cursor-default"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon badge */}
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.iconGradient} flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300`}
              >
                <stat.icon className="w-7 h-7 text-white" />
              </div>

              {/* Value */}
              <p className="text-4xl font-heading font-extrabold leading-none text-slate-900">
                {stat.value}
              </p>

              {/* Label */}
              <p className="text-base font-bold text-slate-700 mt-2">{stat.label}</p>
              <p className="text-sm text-slate-500 mt-1">{stat.description}</p>
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
                "Data Science",
                "Competitive Exams",
                "School Tuition",
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
