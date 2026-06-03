"use client";

import React from "react";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function CategoriesSection() {
  const trendingTopics = [
    {
      category: "Programming",
      topics: [
        { name: "Python", tutors: "3.2M+ learners" },
        { name: "Web Development", tutors: "1.1M+ learners" },
        { name: "Java", tutors: "900K+ learners" },
      ]
    },
    {
      category: "Academics",
      topics: [
        { name: "Mathematics", tutors: "2.5M+ learners" },
        { name: "Physics", tutors: "1.8M+ learners" },
        { name: "Chemistry", tutors: "1.5M+ learners" },
      ]
    },
    {
      category: "Language",
      topics: [
        { name: "Spoken English", tutors: "4M+ learners" },
        { name: "Spanish", tutors: "1.2M+ learners" },
        { name: "French", tutors: "800K+ learners" },
      ]
    },
    {
      category: "Competitive Exams",
      topics: [
        { name: "JEE Mains", tutors: "2M+ learners" },
        { name: "NEET", tutors: "1.9M+ learners" },
        { name: "UPSC", tutors: "3.5M+ learners" },
      ]
    }
  ];

  return (
    <section id="categories" className="py-12 bg-white">
      <div className="container-xl px-4 md:px-8 max-w-[1340px] mx-auto">
        
        {/* Features Block (Learn essential career skills) */}
        <div className="flex flex-col lg:flex-row gap-8 mb-20 items-center">
          <div className="lg:w-1/3">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-serif" style={{ fontFamily: "Georgia, serif" }}>
              Learn essential career and life skills
            </h2>
            <p className="text-slate-600 mb-4">
              Explore online and offline classes tailored to help you succeed in exams, interviews, and real-world challenges.
            </p>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop", title: "Tech & Coding" },
              { img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop", title: "Academics" },
              { img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop", title: "Communication" },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200 rounded-lg overflow-hidden flex flex-col group cursor-pointer hover:shadow-lg transition-shadow">
                <div className="h-40 overflow-hidden bg-slate-200">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-4 flex items-center justify-between font-bold text-slate-900">
                  {item.title}
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trending Topics Block */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 md:p-12 mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 font-serif" style={{ fontFamily: "Georgia, serif" }}>
            Trending topics
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trendingTopics.map((block, idx) => (
              <div key={idx}>
                <h3 className="font-bold text-slate-900 text-lg mb-4">{block.category}</h3>
                <ul className="space-y-4">
                  {block.topics.map((topic, tIdx) => (
                    <li key={tIdx}>
                      <a href="#" className="group inline-flex flex-col">
                        <span className="font-bold text-[#5624d0] group-hover:text-[#401b9c] underline decoration-transparent group-hover:decoration-[#401b9c] underline-offset-4 transition-all">
                          {topic.name} <ChevronRight className="inline w-3 h-3 ml-1" />
                        </span>
                        <span className="text-sm text-slate-500 mt-1">{topic.tutors}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <button className="mt-10 border border-slate-900 text-slate-900 font-bold px-4 py-2 hover:bg-slate-100 transition-colors">
            Explore more topics
          </button>
        </div>

      </div>
    </section>
  );
}
