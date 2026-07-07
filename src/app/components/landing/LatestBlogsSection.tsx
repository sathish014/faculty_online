"use client";

import React from "react";
import Link from "next/link";
import ScrollReveal from "../common/ScrollReveal";
import BlogCard, { type BlogCardData } from "../cards/BlogCard";
import { ArrowRight } from "lucide-react";

const blogs: BlogCardData[] = [
  {
    id: "b1",
    slug: "how-to-crack-jee-2025",
    thumbnail: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=400&auto=format&fit=crop",
    category: "Exam Prep",
    title: "How to Crack JEE 2025: A Complete 6-Month Strategy",
    excerpt: "Discover the proven study plan, time management techniques, and resource recommendations that helped 500+ students crack JEE last year.",
    author: "Priya Sharma",
    readTime: "8 min read",
    date: "Jun 28, 2026",
    featured: true,
  },
  {
    id: "b2",
    slug: "python-for-beginners-2025",
    thumbnail: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=400&auto=format&fit=crop",
    category: "Programming",
    title: "Python for Beginners: Start Your Data Science Journey Today",
    excerpt: "Learn why Python is the most in-demand skill of 2026 and how absolute beginners can go from zero to job-ready in just 3 months.",
    author: "Amit Patel",
    readTime: "6 min read",
    date: "Jun 24, 2026",
  },
  {
    id: "b3",
    slug: "online-tutoring-vs-offline",
    thumbnail: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=400&auto=format&fit=crop",
    category: "Learning Tips",
    title: "Online vs. Offline Tutoring: Which Is Right for You in 2026?",
    excerpt: "A deep comparison of online and offline tutoring modes — cost, effectiveness, flexibility, and which learning style fits each approach.",
    author: "Sneha Reddy",
    readTime: "5 min read",
    date: "Jun 19, 2026",
  },
];

export default function LatestBlogsSection() {
  return (
    <section className="pt-8 pb-12" style={{ background: "var(--bg-primary)" }}>
      <div className="line-divider mb-10" />
      <div className="container-xl">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#ff6200] text-xs font-bold uppercase tracking-widest">Blog</span>
            <span className="h-px flex-1 max-w-[40px]" style={{ background: "rgba(255,98,0,0.4)" }} />
          </div>
        </ScrollReveal>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <ScrollReveal delay={100}>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight text-[#1A1A24]">
              Fresh from the blog
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <Link href="/blog" className="btn-ghost rounded-xl px-5 py-2.5 flex items-center gap-2 text-sm font-semibold">
              All articles <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full min-w-0 max-w-full">
          {blogs.map((blog, i) => (
            <ScrollReveal key={blog.id} delay={i * 80}>
              <BlogCard blog={blog} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
