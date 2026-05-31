"use client";

import { Users, BookOpen, Star, Award, TrendingUp } from "lucide-react";

const stats = [
  {
    id: "stat-students",
    icon: Users,
    value: "10K+",
    label: "Active Students",
    description: "Learning every day through our network",
    iconColor: "#6366f1",
    iconBg: "rgba(99,102,241,0.1)",
  },
  {
    id: "stat-tutors",
    icon: Award,
    value: "5K+",
    label: "Expert Tutors",
    description: "Verified & certified professional educators",
    iconColor: "#7c3aed",
    iconBg: "rgba(124,58,237,0.1)",
  },
  {
    id: "stat-subjects",
    icon: BookOpen,
    value: "100+",
    label: "Skills & Subjects",
    description: "Comprehensive range across all domains",
    iconColor: "#0ea5e9",
    iconBg: "rgba(14,165,233,0.1)",
  },
  {
    id: "stat-rating",
    icon: Star,
    value: "4.9★",
    label: "Average Rating",
    description: "High level of student satisfaction",
    iconColor: "#f59e0b",
    iconBg: "rgba(245,158,11,0.1)",
  },
];

export default function StatsSection() {
  return (
    <section id="stats" className="py-20 bg-white">
      <div className="container-xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-5"
            style={{
              background: "rgba(99,102,241,0.07)",
              border: "1px solid rgba(99,102,241,0.15)",
              color: "#6366f1",
              letterSpacing: "0.08em",
            }}
          >
            <TrendingUp className="w-3 h-3" />
            Trusted by Thousands
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-slate-900">
            Numbers That Speak for Themselves
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              id={stat.id}
              className="group relative bg-white rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 cursor-default"
              style={{
                border: "1.5px solid #f1f5f9",
                boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                animationDelay: `${index * 0.1}s`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 12px 32px rgba(99,102,241,0.14)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(99,102,241,0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.05)";
                (e.currentTarget as HTMLElement).style.borderColor = "#f1f5f9";
              }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ background: stat.iconBg }}
              >
                <stat.icon className="w-6 h-6" style={{ color: stat.iconColor }} />
              </div>

              {/* Value */}
              <p className="text-3xl font-heading font-extrabold text-slate-900 leading-none mb-2">
                {stat.value}
              </p>

              {/* Label */}
              <p className="text-sm font-bold text-slate-700 mb-1">{stat.label}</p>

              {/* Description */}
              <p className="text-xs text-slate-400 leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Ticker */}
        <div className="mt-14 relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <div className="flex ticker-wrap">
            <div className="flex items-center gap-4 animate-ticker pr-4 shrink-0">
              {["Mathematics", "Physics", "Chemistry", "Python Programming", "Spoken English", "IIT-JEE Prep", "NEET Coaching", "Data Science", "Competitive Exams", "School Tuition", "French Language"].map((skill, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-1.5 rounded-full text-slate-500 text-sm font-medium whitespace-nowrap"
                  style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }} />
                  {skill}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-4 animate-ticker pr-4 shrink-0" aria-hidden="true">
              {["Mathematics", "Physics", "Chemistry", "Python Programming", "Spoken English", "IIT-JEE Prep", "NEET Coaching", "Data Science", "Competitive Exams", "School Tuition", "French Language"].map((skill, i) => (
                <div
                  key={`dup-${i}`}
                  className="flex items-center gap-2 px-4 py-1.5 rounded-full text-slate-500 text-sm font-medium whitespace-nowrap"
                  style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }} />
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
