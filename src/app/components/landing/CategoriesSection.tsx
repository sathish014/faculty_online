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
    bg: "from-blue-50 to-cyan-50",
    border: "border-blue-100 hover:border-blue-300",
    iconBg: "bg-blue-500",
    popular: true,
  },
  {
    id: "cat-mathematics",
    icon: Calculator,
    title: "Mathematics",
    description: "Algebra, Calculus, Stats",
    skills: "380+ Tutors",
    color: "from-indigo-500 to-violet-500",
    bg: "from-indigo-50 to-violet-50",
    border: "border-indigo-100 hover:border-indigo-300",
    iconBg: "bg-indigo-500",
    popular: true,
  },
  {
    id: "cat-english",
    icon: MessageCircle,
    title: "Spoken English",
    description: "Fluency & Communication",
    skills: "290+ Tutors",
    color: "from-violet-500 to-purple-500",
    bg: "from-violet-50 to-purple-50",
    border: "border-violet-100 hover:border-violet-300",
    iconBg: "bg-violet-500",
    popular: false,
  },
  {
    id: "cat-music",
    icon: Music,
    title: "Music",
    description: "Guitar, Piano, Vocals",
    skills: "150+ Tutors",
    color: "from-pink-500 to-rose-500",
    bg: "from-pink-50 to-rose-50",
    border: "border-pink-100 hover:border-pink-300",
    iconBg: "bg-pink-500",
    popular: false,
  },
  {
    id: "cat-design",
    icon: Palette,
    title: "UI/UX Design",
    description: "Figma, Prototyping, UX",
    skills: "120+ Tutors",
    color: "from-orange-500 to-amber-500",
    bg: "from-orange-50 to-amber-50",
    border: "border-orange-100 hover:border-orange-300",
    iconBg: "bg-orange-500",
    popular: false,
  },
  {
    id: "cat-school",
    icon: School,
    title: "School Tuition",
    description: "Class 1-12, CBSE & ICSE",
    skills: "500+ Tutors",
    color: "from-green-500 to-emerald-500",
    bg: "from-green-50 to-emerald-50",
    border: "border-green-100 hover:border-green-300",
    iconBg: "bg-green-500",
    popular: true,
  },
  {
    id: "cat-competitive",
    icon: Trophy,
    title: "Competitive Exams",
    description: "IIT-JEE, NEET, UPSC",
    skills: "320+ Tutors",
    color: "from-yellow-500 to-amber-600",
    bg: "from-yellow-50 to-amber-50",
    border: "border-yellow-100 hover:border-yellow-300",
    iconBg: "bg-yellow-500",
    popular: true,
  },
  {
    id: "cat-personal-dev",
    icon: Brain,
    title: "Personal Development",
    description: "Leadership, Soft Skills",
    skills: "95+ Tutors",
    color: "from-purple-500 to-fuchsia-500",
    bg: "from-purple-50 to-fuchsia-50",
    border: "border-purple-100 hover:border-purple-300",
    iconBg: "bg-purple-500",
    popular: false,
  },
];

export default function CategoriesSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="categories" className="py-24 bg-white">
      <div className="container-xl">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-50 border border-violet-100 text-violet-600 text-sm font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Explore by Category
          </div>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-heading font-extrabold text-slate-900 mb-4">
            Learn Anything,{" "}
            <span className="gradient-text">Anytime</span>
          </h2>
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
              className={`relative group rounded-2xl p-6 bg-gradient-to-br ${cat.bg} border ${cat.border} cursor-pointer transition-all duration-300 card-hover`}
            >
              {/* Popular Badge */}
              {cat.popular && (
                <div className="absolute -top-2 -right-2 px-2.5 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 text-white text-xs font-bold shadow-lg">
                  Popular
                </div>
              )}

              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl ${cat.iconBg} bg-gradient-to-br ${cat.color} flex items-center justify-center mb-4 shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
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
                <span className="text-xs font-semibold text-slate-400 bg-white/70 px-2.5 py-1 rounded-full border border-white">
                  {cat.skills}
                </span>
                <div
                  className={`flex items-center gap-1 text-xs font-semibold transition-all duration-300 ${
                    hoveredId === cat.id ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                  }`}
                  style={{ color: `var(--color-brand-600)` }}
                >
                  Explore
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300`}
              />
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <button
            id="categories-view-all-btn"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl btn-primary text-white font-semibold text-sm shadow-lg"
          >
            Explore All Categories
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
