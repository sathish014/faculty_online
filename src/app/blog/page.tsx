"use client";

import React, { useState } from "react";
import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";
import BlogCard, { type BlogCardData } from "../components/cards/BlogCard";
import { Search, X, BookOpen } from "lucide-react";

const blogs: BlogCardData[] = [
  { id: "b1", slug: "crack-jee-2025", thumbnail: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=400&auto=format&fit=crop", category: "Exam Prep", title: "How to Crack JEE 2025: A Complete 6-Month Strategy", excerpt: "Proven study plan, time management tips, and resource recommendations from top rankers.", author: "Priya Sharma", readTime: "8 min read", date: "Jun 28, 2026", featured: true },
  { id: "b2", slug: "python-beginners", thumbnail: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=400&auto=format&fit=crop", category: "Programming", title: "Python for Beginners: Start Your Data Science Journey Today", excerpt: "Learn why Python is the most in-demand skill of 2026 and how to get started fast.", author: "Amit Patel", readTime: "6 min read", date: "Jun 24, 2026" },
  { id: "b3", slug: "online-vs-offline", thumbnail: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=400&auto=format&fit=crop", category: "Learning Tips", title: "Online vs. Offline Tutoring: Which Is Right for You in 2026?", excerpt: "Deep comparison of cost, effectiveness, flexibility, and learning styles.", author: "Sneha Reddy", readTime: "5 min read", date: "Jun 19, 2026" },
  { id: "b4", slug: "upsc-preparation-guide", thumbnail: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?q=80&w=400&auto=format&fit=crop", category: "Exam Prep", title: "UPSC 2026 Preparation: Where to Start and What to Read", excerpt: "A comprehensive guide to UPSC syllabus, recommended books, and daily routine from an IAS topper.", author: "Rahul Verma", readTime: "10 min read", date: "Jun 15, 2026" },
  { id: "b5", slug: "spoken-english-tips", thumbnail: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=400&auto=format&fit=crop", category: "Learning Tips", title: "10 Proven Tips to Improve Your Spoken English in 30 Days", excerpt: "From daily habits to pronunciation exercises — practical techniques that actually work.", author: "Anjali Mehta", readTime: "7 min read", date: "Jun 10, 2026" },
  { id: "b6", slug: "react-vs-angular-2026", thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=400&auto=format&fit=crop", category: "Programming", title: "React vs Angular in 2026: Which One Should You Learn?", excerpt: "An honest comparison of two industry giants for web developers at every level.", author: "Vikram Malhotra", readTime: "9 min read", date: "Jun 5, 2026" },
];

const categories = ["All", "Exam Prep", "Programming", "Learning Tips", "Career", "EdTech"];

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = blogs.filter((b) => {
    const matchSearch = b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchCat = category === "All" || b.category === category;
    return matchSearch && matchCat;
  });

  const [featured, ...rest] = filtered;

  return (
    <main className="min-h-screen flex flex-col" style={{ background: "var(--bg-primary)" }}>
      <Navbar />

      {/* Hero */}
      <div className="pt-28 pb-12 px-4" style={{ background: "#f7f8fc" }}>
        <div className="container-xl">
          <div className="max-w-2xl animate-fade-up">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-4 h-4 text-[#ff6200]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#ff6200]">Blog & Articles</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-[#1A1A24] tracking-tight mb-3">
              Learn, grow, <span className="text-[#ff6200]">succeed</span>
            </h1>
            <p className="text-base text-[rgba(26,26,36,0.65)] mb-6">
              Expert articles on study strategies, career tips, and EdTech insights.
            </p>
            <div className="flex items-center gap-3 bg-white/80 border border-[rgba(26,26,36,0.1)] rounded-xl px-4 py-3 max-w-lg focus-within:border-[#ff6200] focus-within:ring-2 focus-within:ring-[rgba(255,98,0,0.15)] transition-all">
              <Search className="w-4 h-4 text-[rgba(26,26,36,0.4)] flex-shrink-0" />
              <input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 bg-transparent focus:outline-none text-sm font-medium text-[#1A1A24] placeholder:text-[rgba(26,26,36,0.4)]"
                id="blog-search-input"
              />
              {search && <button onClick={() => setSearch("")}><X className="w-3.5 h-3.5 text-[rgba(26,26,36,0.4)]" /></button>}
            </div>
          </div>
        </div>
      </div>

      <div className="container-xl py-8 flex-1 w-full min-w-0 max-w-full">
        {/* Category pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 custom-scrollbar mb-8 w-full min-w-0 max-w-full">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className="flex-shrink-0 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200"
              style={{
                background: category === cat ? "#ff6200" : "rgba(26,26,36,0.06)",
                color: category === cat ? "#fff" : "rgba(26,26,36,0.7)",
                border: category === cat ? "1px solid #ff6200" : "1px solid rgba(26,26,36,0.1)",
                boxShadow: category === cat ? "0 4px 16px rgba(255,98,0,0.25)" : "none",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">📝</div>
            <h3 className="text-xl font-bold text-[#1A1A24] mb-2">No articles found</h3>
            <p className="text-[rgba(26,26,36,0.6)] text-sm">Try a different search term or category</p>
          </div>
        ) : (
          <>
            {/* Featured article */}
            {featured && category === "All" && !search && (
              <div className="mb-10">
                <p className="text-xs font-bold uppercase tracking-widest text-[#ff6200] mb-4">Featured Article</p>
                <div className="rounded-2xl overflow-hidden group cursor-pointer card-premium">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="h-56 md:h-auto overflow-hidden">
                      <img
                        src={featured.thumbnail}
                        alt={featured.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <span
                        className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-3"
                        style={{ background: "rgba(255,98,0,0.1)", color: "#ff6200", border: "1px solid rgba(255,98,0,0.2)" }}
                      >
                        {featured.category}
                      </span>
                      <h2 className="text-xl font-black text-[#1A1A24] mb-3 leading-snug group-hover:text-[#ff6200] transition-colors">
                        {featured.title}
                      </h2>
                      <p className="text-sm text-[rgba(26,26,36,0.6)] leading-relaxed mb-5">{featured.excerpt}</p>
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full bg-[rgba(77,20,140,0.1)] flex items-center justify-center text-[#4D148C] font-bold text-xs">
                          {featured.author.charAt(0)}
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-[#1A1A24]">{featured.author}</p>
                          <p className="text-[10px] text-[rgba(26,26,36,0.45)]">{featured.date} · {featured.readTime}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Rest of articles */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full min-w-0 max-w-full">
              {(category === "All" && !search ? rest : filtered).map((b) => (
                <BlogCard key={b.id} blog={b} />
              ))}
            </div>
          </>
        )}
      </div>

      <Footer />
    </main>
  );
}
