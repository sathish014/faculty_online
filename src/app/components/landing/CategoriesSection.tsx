"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const categories = [
  { emoji: "📐", name: "Mathematics", count: "2.5M learners" },
  { emoji: "⚛️", name: "Physics", count: "1.8M learners" },
  { emoji: "🧪", name: "Chemistry", count: "1.5M learners" },
  { emoji: "💻", name: "Python", count: "3.2M learners" },
  { emoji: "🌐", name: "Web Dev", count: "1.1M learners" },
  { emoji: "🗣️", name: "Spoken English", count: "4M learners" },
  { emoji: "📊", name: "Data Science", count: "900K learners" },
  { emoji: "🎓", name: "JEE Mains", count: "2M learners" },
  { emoji: "🔬", name: "NEET", count: "1.9M learners" },
  { emoji: "🏛️", name: "UPSC", count: "3.5M learners" },
  { emoji: "🇪🇸", name: "Spanish", count: "1.2M learners" },
  { emoji: "☕", name: "Java", count: "900K learners" },
];

const trendingGroups = [
  {
    label: "01",
    category: "Programming",
    topics: ["Python", "Web Development", "Java", "React", "Node.js"],
  },
  {
    label: "02",
    category: "Academics",
    topics: ["Mathematics", "Physics", "Chemistry", "Biology", "Statistics"],
  },
  {
    label: "03",
    category: "Languages",
    topics: ["Spoken English", "Spanish", "French", "Hindi", "German"],
  },
  {
    label: "04",
    category: "Competitive",
    topics: ["JEE Mains", "NEET", "UPSC", "CAT", "GMAT"],
  },
];

export default function CategoriesSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="categories"
      ref={ref}
      className="pt-8 pb-16"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="line-divider mb-10" />
      <div className="container-xl">

        {/* Section label */}
        <div
          className={`flex items-center gap-3 mb-4 transition-all duration-600 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <span className="text-[#ff6200] text-xs font-bold uppercase tracking-widest">Explore</span>
          <span className="h-px flex-1 max-w-[40px]" style={{ background: "rgba(255,98,0,0.4)" }} />
        </div>

        {/* Headline */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <h2
            className={`text-3xl md:text-4xl font-black tracking-tight leading-tight transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ color: "#1A1A24", maxWidth: "480px", transitionDelay: "100ms" }}
          >
            Every subject.<br />Every level.
          </h2>
          <button
            className={`btn-ghost rounded-lg px-5 py-2.5 flex items-center gap-2 text-sm font-semibold transition-all duration-700 self-start lg:self-auto ${visible ? "opacity-100" : "opacity-0"}`}
            style={{ transitionDelay: "200ms" }}
          >
            Browse all subjects
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Category Pills Grid */}
        <div
          className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-20 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "250ms" }}
        >
          {categories.map((cat, i) => (
            <button
              key={i}
              className="card-minimal rounded-xl p-4 flex flex-col items-start gap-2 text-left group cursor-pointer"
            >
              <span className="text-2xl">{cat.emoji}</span>
              <div>
                <p className="text-sm font-semibold text-[#1A1A24] leading-tight">{cat.name}</p>
                <p className="text-[11px] mt-0.5" style={{ color: "rgba(26,26,36,0.55)" }}>{cat.count}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Trending Topics Block */}
        <div
          className={`rounded-2xl p-8 md:p-10 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{
            background: "var(--bg-secondary)",
            border: "1px solid rgba(26,26,36,0.08)",
            transitionDelay: "400ms",
          }}
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-[#1A1A24]">Trending topics</h3>
            <div className="h-px flex-1 mx-6" style={{ background: "rgba(26,26,36,0.07)" }} />
            <span className="text-xs text-[#ff6200] font-semibold uppercase tracking-wider">This week</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trendingGroups.map((block) => (
              <div key={block.label}>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-bold text-[#ff6200] font-mono">{block.label}</span>
                  <span className="text-sm font-bold text-[#1A1A24]">{block.category}</span>
                </div>
                <ul className="space-y-3">
                  {block.topics.map((topic, tIdx) => (
                    <li key={tIdx}>
                      <a
                        href="#"
                        className="group flex items-center gap-2 text-sm transition-all duration-200"
                        style={{ color: "rgba(26,26,36,0.65)" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#ff6200")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(26,26,36,0.65)")}
                      >
                        <span
                          className="w-1 h-1 rounded-full flex-shrink-0"
                          style={{ background: "rgba(255,98,0,0.4)" }}
                        />
                        {topic}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
