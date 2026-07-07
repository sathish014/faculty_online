"use client";

import { Users, BookOpen, Star, Award } from "lucide-react";

const stats = [
  {
    id: "stat-students",
    icon: Users,
    value: "10K+",
    label: "Active Students",
    description: "Learning every day through our network",
    iconColor: "#0d9488",
  },
  {
    id: "stat-tutors",
    icon: Award,
    value: "5K+",
    label: "Expert Tutors",
    description: "Verified & certified professional educators",
    iconColor: "#6366f1",
  },
  {
    id: "stat-subjects",
    icon: BookOpen,
    value: "100+",
    label: "Skills & Subjects",
    description: "Comprehensive range across all domains",
    iconColor: "#0ea5e9",
  },
  {
    id: "stat-rating",
    icon: Star,
    value: "4.9★",
    label: "Average Rating",
    description: "High level of student satisfaction",
    iconColor: "#f59e0b",
  },
];

const skills = [
  "Mathematics", "Physics", "Chemistry", "Python Programming",
  "Spoken English", "IIT-JEE Prep", "NEET Coaching", "Data Science",
  "Competitive Exams", "School Tuition", "French Language",
];

export default function StatsSection() {
  return (
    <section id="stats" className="py-14 bg-white border-t border-slate-200">
      <div className="container-xl">

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat) => (
            <div
              key={stat.id}
              id={stat.id}
              className="flex flex-col items-start p-5 border border-slate-200 bg-white hover:shadow-md transition-shadow"
            >
              <div
                className="w-10 h-10 rounded flex items-center justify-center mb-4"
                style={{ background: `${stat.iconColor}15` }}
              >
                <stat.icon className="w-5 h-5" style={{ color: stat.iconColor }} />
              </div>
              <p className="font-heading font-extrabold text-slate-900 text-2xl leading-none mb-1">
                {stat.value}
              </p>
              <p className="text-sm font-semibold text-slate-700 mb-1">{stat.label}</p>
              <p className="text-xs text-slate-400 leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Skills ticker */}
        <div className="relative overflow-hidden border-t border-b border-slate-200 py-3">
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <div className="flex ticker-wrap">
            <div className="flex items-center gap-3 animate-ticker shrink-0">
              {skills.map((skill, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-3 py-1 text-slate-600 text-sm font-medium whitespace-nowrap border border-slate-200 bg-slate-50"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0" />
                  {skill}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3 animate-ticker shrink-0" aria-hidden="true">
              {skills.map((skill, i) => (
                <div
                  key={`dup-${i}`}
                  className="flex items-center gap-2 px-3 py-1 text-slate-600 text-sm font-medium whitespace-nowrap border border-slate-200 bg-slate-50"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0" />
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
