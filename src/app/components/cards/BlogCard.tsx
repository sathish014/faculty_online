"use client";

import React from "react";
import Link from "next/link";
import { Clock, ArrowRight, BookOpen } from "lucide-react";

export interface BlogCardData {
  id: string;
  slug: string;
  thumbnail: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  authorAvatar?: string;
  readTime: string;
  date: string;
  featured?: boolean;
}

export default function BlogCard({ blog }: { blog: BlogCardData }) {
  return (
    <Link
      href={`/blog/${blog.slug}`}
      className="group block rounded-2xl overflow-hidden w-full min-w-0 max-w-full"
      style={{
        background: "var(--bg-sidebar)",
        border: "1px solid rgba(26,26,36,0.08)",
        transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,107,53,0.3)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 48px rgba(255,107,53,0.1)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(26,26,36,0.08)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      {/* Thumbnail */}
      <div className="blog-card-img h-48 overflow-hidden">
        <img
          src={blog.thumbnail}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category */}
        <div className="flex items-center gap-2 mb-3">
          <span
            className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider"
            style={{
              background: "rgba(255,98,0,0.1)",
              color: "#ff6200",
              border: "1px solid rgba(255,98,0,0.2)",
            }}
          >
            {blog.category}
          </span>
          <div className="flex items-center gap-1" style={{ color: "rgba(26,26,36,0.45)" }}>
            <Clock className="w-3 h-3" />
            <span className="text-[10px] font-medium">{blog.readTime}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-bold text-base text-[#1A1A24] leading-snug mb-2 line-clamp-2 group-hover:text-[#ff6200] transition-colors">
          {blog.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-[rgba(26,26,36,0.6)] leading-relaxed line-clamp-2 mb-4">
          {blog.excerpt}
        </p>

        {/* Author + Read */}
        <div className="flex items-center justify-between pt-3 border-t border-[rgba(26,26,36,0.07)]">
          <div className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
              style={{
                background: "rgba(77,20,140,0.1)",
                border: "1px solid rgba(77,20,140,0.2)",
                color: "#4D148C",
              }}
            >
              {blog.author.charAt(0)}
            </div>
            <div>
              <p className="text-xs font-semibold text-[#1A1A24]">{blog.author}</p>
              <p className="text-[10px] text-[rgba(26,26,36,0.45)]">{blog.date}</p>
            </div>
          </div>
          <div className="flex items-center gap-1 text-[#ff6200] text-xs font-bold group-hover:gap-2 transition-all">
            <span>Read</span>
            <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
}
