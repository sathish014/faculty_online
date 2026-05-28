"use client";

import { useState } from "react";
import {
  Code2,
  Calculator,
  MessageCircle,
  Music,
  Palette,
  School,
  Trophy,
  Brain,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const categories = [
  {
    id: "cat-programming",
    icon: Code2,
    title: "Programming",
    description: "Python, JS, React & more",
    skills: "240+ Tutors",
    color: "from-blue-500 to-cyan-500",
    iconBg: "bg-gradient-to-br from-blue-500 to-cyan-500",
    popular: true,
  },
  {
    id: "cat-mathematics",
    icon: Calculator,
    title: "Mathematics",
    description: "Algebra, Calculus, Stats",
    skills: "380+ Tutors",
    color: "from-indigo-500 to-violet-500",
    iconBg: "bg-gradient-to-br from-indigo-500 to-violet-500",
    popular: true,
  },
  {
    id: "cat-english",
    icon: MessageCircle,
    title: "Spoken English",
    description: "Fluency & Communication",
    skills: "290+ Tutors",
    color: "from-violet-500 to-purple-500",
    iconBg: "bg-gradient-to-br from-violet-500 to-purple-500",
    popular: false,
  },
  {
    id: "cat-school",
    icon: School,
    title: "School Tuition",
    description: "Class 1-12, CBSE & ICSE",
    skills: "500+ Tutors",
    color: "from-green-500 to-emerald-500",
    iconBg: "bg-gradient-to-br from-green-500 to-emerald-500",
    popular: true,
  },
  {
    id: "cat-competitive",
    icon: Trophy,
    title: "Competitive Exams",
    description: "IIT-JEE, NEET, UPSC",
    skills: "320+ Tutors",
    color: "from-amber-500 to-orange-500",
    iconBg: "bg-gradient-to-br from-amber-500 to-orange-500",
    popular: true,
  },
  {
    id: "cat-personal-dev",
    icon: Brain,
    title: "Personal Development",
    description: "Leadership, Soft Skills",
    skills: "95+ Tutors",
    color: "from-purple-500 to-fuchsia-500",
    iconBg: "bg-gradient-to-br from-purple-500 to-fuchsia-500",
    popular: false,
  },
  {
    id: "cat-science",
    icon: Sparkles,
    title: "Science",
    description: "Physics, Chemistry, Biology",
    skills: "180+ Tutors",
    color: "from-sky-500 to-blue-500",
    iconBg: "bg-gradient-to-br from-sky-500 to-blue-500",
    popular: false,
  },
  {
    id: "cat-biology",
    icon: Sparkles,
    title: "Biology",
    description: "Life Science",
    skills: "150+ Tutors",
    color: "from-green-500 to-emerald-500",
    iconBg: "bg-gradient-to-br from-green-500 to-emerald-500",
    popular: false,
  },

];

export default function CategoriesSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="categories" className="py-24 bg-white">
      <div className="container-xl">
        {/* Section Header */}
        <div className="text-center mb-10">

          <h2 className="text-3xl md:text-4xl xl:text-5xl font-heading font-extrabold text-slate-900 mb-4">
            Learn Anything,Anytime
            {/* <span className="gradient-text"></span> */}
          </h2>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-50 border border-violet-100 text-violet-600 text-sm font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Explore by Category
          </div>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            From school basics to advanced professional skills — find the perfect tutor
            in your area of interest.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {categories.map((cat) => (
            <div
              key={cat.id}
              id={cat.id}
              onMouseEnter={() => setHoveredId(cat.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="relative group rounded-2xl p-6 bg-white border border-slate-100 hover:border-indigo-200 cursor-pointer transition-all duration-300 card-hover shadow-sm hover:shadow-lg"
            >
              {/* Popular Badge */}
              {cat.popular && (
                <div className="absolute -top-2 -right-2 px-2.5 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 text-white text-xs font-bold shadow-lg">
                  Popular
                </div>
              )}

              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl ${cat.iconBg} flex items-center justify-center mb-4 shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
              >
                <cat.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="font-heading font-bold text-slate-900 text-lg mb-1.5">
                {cat.title}
              </h3>
              <p className="text-slate-500 text-sm mb-4 leading-relaxed">
                {cat.description}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-100">
                  {cat.skills}
                </span>
                <div
                  className={`flex items-center gap-1 text-xs font-semibold transition-all duration-300 ${hoveredId === cat.id ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                    }`}
                  style={{ color: `var(--color-brand-600)` }}
                >
                  Explore
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Subtle color tint on hover */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300`}
              />
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <button
            id="categories-view-all-btn"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl btn-primary text-white font-semibold text-sm shadow-lg"
            suppressHydrationWarning
          >
            Explore All Categories
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
