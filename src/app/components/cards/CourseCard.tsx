"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Star, Clock, Users, BookOpen, Heart, PlayCircle } from "lucide-react";

export interface CourseCardData {
  id: string;
  slug?: string;
  thumbnail: string;
  title: string;
  instructor: string;
  instructorAvatar?: string;
  rating: number;
  reviewCount: number;
  duration: string;
  studentCount: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  price: string;
  originalPrice?: string;
  category: string;
  isBestseller?: boolean;
  isNew?: boolean;
}

const difficultyColor: Record<string, { bg: string; text: string }> = {
  Beginner: { bg: "rgba(22,163,74,0.1)", text: "#16a34a" },
  Intermediate: { bg: "rgba(245,158,11,0.1)", text: "#d97706" },
  Advanced: { bg: "rgba(239,68,68,0.1)", text: "#dc2626" },
};

export default function CourseCard({ course }: { course: CourseCardData }) {
  const [wishlisted, setWishlisted] = useState(false);
  const diff = difficultyColor[course.difficulty] || difficultyColor.Beginner;

  return (
    <Link
      href={`/courses/${course.slug || course.id}`}
      className="group block rounded-2xl overflow-hidden hover-lift w-full min-w-0 max-w-full"
      style={{
        background: "var(--bg-sidebar)",
        border: "1px solid rgba(26,26,36,0.08)",
        transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,107,53,0.3)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 48px rgba(255,107,53,0.1)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(26,26,36,0.08)";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      {/* Thumbnail */}
      <div className="relative h-44 overflow-hidden bg-[rgba(26,26,36,0.05)]">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay play icon */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <PlayCircle className="w-12 h-12 text-white drop-shadow-lg" />
        </div>
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-1.5">
          {course.isBestseller && (
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-400 text-amber-900">
              Bestseller
            </span>
          )}
          {course.isNew && (
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#4D148C] text-white">
              New
            </span>
          )}
        </div>
        {/* Wishlist */}
        <button
          onClick={(e) => { e.preventDefault(); setWishlisted(!wishlisted); }}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm hover:scale-110 transition-transform"
        >
          <Heart
            className="w-4 h-4 transition-colors"
            style={{ color: wishlisted ? "#ff6200" : "rgba(26,26,36,0.5)", fill: wishlisted ? "#ff6200" : "none" }}
          />
        </button>
      </div>

      {/* Info */}
      <div className="p-4">
        {/* Category & Difficulty */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#ff6200]">
            {course.category}
          </span>
          <span className="w-1 h-1 rounded-full bg-[rgba(26,26,36,0.2)]" />
          <span
            className="text-[10px] font-bold px-2 py-0.5 rounded-full"
            style={{ background: diff.bg, color: diff.text }}
          >
            {course.difficulty}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-bold text-sm text-[#1A1A24] leading-snug mb-1.5 line-clamp-2 group-hover:text-[#ff6200] transition-colors">
          {course.title}
        </h3>

        {/* Instructor */}
        <p className="text-xs text-[rgba(26,26,36,0.55)] mb-3 font-medium">
          by {course.instructor}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-3">
          <span className="text-xs font-bold text-[#1A1A24]">{course.rating}</span>
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star
                key={s}
                className={`w-3 h-3 ${s <= Math.round(course.rating) ? "star-filled" : "star-empty"}`}
              />
            ))}
          </div>
          <span className="text-[10px] text-[rgba(26,26,36,0.45)]">({course.reviewCount.toLocaleString()})</span>
        </div>

        {/* Meta */}
        <div className="flex items-center gap-3 mb-3 text-[rgba(26,26,36,0.5)]">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span className="text-[11px] font-medium">{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-3 h-3" />
            <span className="text-[11px] font-medium">{course.studentCount}</span>
          </div>
        </div>

        {/* Price + Enroll */}
        <div className="flex items-center justify-between pt-3 border-t border-[rgba(26,26,36,0.07)]">
          <div className="flex items-baseline gap-1.5">
            <span className="text-base font-black text-[#1A1A24]">{course.price}</span>
            {course.originalPrice && (
              <span className="text-xs text-[rgba(26,26,36,0.4)] line-through">{course.originalPrice}</span>
            )}
          </div>
          <button
            onClick={(e) => e.preventDefault()}
            className="btn-coral rounded-xl px-3.5 py-2 text-xs font-bold flex items-center gap-1.5"
          >
            <BookOpen className="w-3 h-3" />
            Enroll
          </button>
        </div>
      </div>
    </Link>
  );
}
