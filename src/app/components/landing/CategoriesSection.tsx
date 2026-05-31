"use client";

import { ArrowRight, Sparkles } from "lucide-react";

const categories = [
  {
    id: "cat-programming",
    title: "Programming",
    description: "Python, JS, React & more",
    tutors: "240+ Tutors",
    popular: true,
    bgColor: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #2563eb 100%)",
    emoji: "💻",
  },
  {
    id: "cat-mathematics",
    title: "Mathematics",
    description: "Algebra, Calculus, Stats",
    tutors: "380+ Tutors",
    popular: true,
    bgColor: "linear-gradient(135deg, #14532d 0%, #166534 50%, #15803d 100%)",
    emoji: "📐",
  },
  {
    id: "cat-english",
    title: "Spoken English",
    description: "Fluency & Communication",
    tutors: "290+ Tutors",
    popular: false,
    bgColor: "linear-gradient(135deg, #7c2d12 0%, #9a3412 50%, #c2410c 100%)",
    emoji: "🗣️",
  },
  {
    id: "cat-school",
    title: "School Tuition",
    description: "Class 1-12, CBSE & ICSE",
    tutors: "500+ Tutors",
    popular: true,
    bgColor: "linear-gradient(135deg, #312e81 0%, #3730a3 50%, #4338ca 100%)",
    emoji: "📚",
  },
];

export default function CategoriesSection() {
  return (
    <section id="categories" className="py-20" style={{ background: "#f8faff" }}>
      <div className="container-xl">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
              style={{
                background: "rgba(124,58,237,0.08)",
                border: "1px solid rgba(124,58,237,0.15)",
                color: "#7c3aed",
                letterSpacing: "0.08em",
              }}
            >
              <Sparkles className="w-3 h-3" />
              Explore by Category
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-slate-900">
              Learn Anything, Anytime
            </h2>
          </div>

          <button
            id="categories-view-all-btn"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
            style={{
              border: "1.5px solid #e2e8f0",
              color: "#4f46e5",
              background: "#fff",
            }}
            suppressHydrationWarning
          >
            Explore All Categories
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat) => (
            <div
              key={cat.id}
              id={cat.id}
              className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2"
              style={{
                background: cat.bgColor,
                minHeight: "200px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 16px 40px rgba(0,0,0,0.25)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 4px 20px rgba(0,0,0,0.15)";
              }}
            >
              {/* Dark overlay for readability */}
              <div
                className="absolute inset-0 opacity-40 group-hover:opacity-50 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.5) 100%)",
                }}
              />

              {/* Popular Badge */}
              {cat.popular && (
                <div
                  className="absolute top-4 left-4 px-2.5 py-1 rounded-full text-xs font-bold z-10"
                  style={{
                    background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                    color: "#fff",
                  }}
                >
                  Popular
                </div>
              )}

              {/* Emoji floating in background */}
              <div
                className="absolute top-4 right-4 text-4xl opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-300 select-none"
                style={{ fontSize: "48px" }}
              >
                {cat.emoji}
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 flex flex-col justify-end h-full" style={{ minHeight: "200px" }}>
                <div className="mt-auto">
                  <h3 className="font-heading font-bold text-white text-xl mb-1 leading-tight">
                    {cat.title}
                  </h3>
                  <p className="text-white/70 text-sm mb-3">{cat.description}</p>

                  <div className="flex items-center justify-between">
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{
                        background: "rgba(255,255,255,0.15)",
                        color: "rgba(255,255,255,0.9)",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      {cat.tutors}
                    </span>
                    <div
                      className="flex items-center gap-1 text-xs font-semibold text-white opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                    >
                      Explore
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
