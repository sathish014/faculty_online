"use client";

import React from "react";
import { ChevronRight } from "lucide-react";

const featuredCategories = [
  {
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
    title: "Tech & Coding",
    count: "320+ Tutors",
  },
  {
    img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop",
    title: "Academics",
    count: "510+ Tutors",
  },
  {
    img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop",
    title: "Communication",
    count: "180+ Tutors",
  },
];

const trendingTopics = [
  {
    category: "Programming",
    topics: [
      { name: "Python", learners: "3.2M+ learners" },
      { name: "Web Development", learners: "1.1M+ learners" },
      { name: "Java", learners: "900K+ learners" },
    ],
  },
  {
    category: "Academics",
    topics: [
      { name: "Mathematics", learners: "2.5M+ learners" },
      { name: "Physics", learners: "1.8M+ learners" },
      { name: "Chemistry", learners: "1.5M+ learners" },
    ],
  },
  {
    category: "Language",
    topics: [
      { name: "Spoken English", learners: "4M+ learners" },
      { name: "Spanish", learners: "1.2M+ learners" },
      { name: "French", learners: "800K+ learners" },
    ],
  },
  {
    category: "Competitive Exams",
    topics: [
      { name: "JEE Mains", learners: "2M+ learners" },
      { name: "NEET", learners: "1.9M+ learners" },
      { name: "UPSC", learners: "3.5M+ learners" },
    ],
  },
];

export default function CategoriesSection() {
  return (
    <section id="categories" className="py-12 bg-white">
      <div className="container-xl">

        {/* Explore Categories row */}
        <div className="flex flex-col lg:flex-row gap-10 mb-16 items-start">
          <div className="lg:w-1/3">
            <h2 className="font-heading font-bold text-slate-900 text-2xl md:text-3xl mb-3">
              Learn essential career and life skills
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Explore online and offline classes tailored to help you succeed in exams, interviews, and real-world challenges.
            </p>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-4">
            {featuredCategories.map((item, i) => (
              <div
                key={i}
                className="group cursor-pointer overflow-hidden border border-slate-200 bg-white hover:shadow-md transition-shadow"
              >
                <div className="h-36 overflow-hidden bg-slate-200">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">{item.title}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{item.count}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-slate-700 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trending Topics */}
        <div className="bg-slate-50 border border-slate-200 p-8 md:p-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <h2 className="font-heading font-bold text-slate-900 text-xl">
              Trending topics
            </h2>
            <button
              className="text-sm font-semibold px-4 py-2 border border-slate-900 text-slate-900 hover:bg-slate-100 transition-colors"
            >
              Explore more topics
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trendingTopics.map((block, idx) => (
              <div key={idx}>
                <h3 className="font-bold text-slate-900 text-sm mb-4">{block.category}</h3>
                <ul className="space-y-4">
                  {block.topics.map((topic, tIdx) => (
                    <li key={tIdx}>
                      <a href="#" className="group inline-flex flex-col">
                        <span
                          className="font-semibold text-sm hover:underline underline-offset-2"
                          style={{ color: "#0d9488" }}
                        >
                          {topic.name}
                        </span>
                        <span className="text-xs text-slate-500 mt-0.5">{topic.learners}</span>
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
