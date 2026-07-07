"use client";

import React from "react";
import Link from "next/link";
import { Star, BookOpen, Users, CheckCircle } from "lucide-react";

export interface FacultyCardData {
  id: string;
  name: string;
  image: string;
  specialty: string;
  subject: string;
  rating: number;
  reviewCount: string;
  students: string;
  courses: number;
  price: string;
  badge?: string;
  isVerified?: boolean;
}

export default function FacultyCard({ faculty }: { faculty: FacultyCardData }) {
  return (
    <Link
      href={`/faculty/${faculty.id}`}
      className="group block rounded-2xl overflow-hidden w-full min-w-0 max-w-full"
      style={{
        background: "var(--bg-sidebar)",
        border: "1px solid rgba(26,26,36,0.08)",
        transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,107,53,0.35)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 48px rgba(255,107,53,0.12)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(26,26,36,0.08)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      {/* Avatar */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={faculty.image}
          alt={faculty.name}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Badge */}
        {faculty.badge && (
          <div
            className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold shadow-sm"
            style={{
              background: "rgba(255,255,255,0.95)",
              border: "1px solid rgba(255,98,0,0.3)",
              color: "#ff6200",
              backdropFilter: "blur(4px)",
            }}
          >
            {faculty.badge}
          </div>
        )}

        {/* Verified */}
        {faculty.isVerified && (
          <div className="absolute top-3 right-3">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center"
              style={{
                background: "rgba(77,20,140,0.9)",
                backdropFilter: "blur(4px)",
              }}
            >
              <CheckCircle className="w-4 h-4 text-white" />
            </div>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <p className="text-[11px] font-bold uppercase tracking-wider mb-1 text-[#ff6200]">
          {faculty.specialty}
        </p>
        <h3 className="font-bold text-sm leading-tight mb-0.5 text-[#1A1A24] line-clamp-1 group-hover:text-[#ff6200] transition-colors">
          {faculty.name}
        </h3>
        <p className="text-xs mb-3" style={{ color: "rgba(26,26,36,0.55)" }}>
          {faculty.subject}
        </p>

        {/* Stats */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5">
            <Star className="w-3.5 h-3.5 star-filled" />
            <span className="text-xs font-bold text-[#1A1A24]">{faculty.rating}</span>
            <span className="text-[10px]" style={{ color: "rgba(26,26,36,0.5)" }}>
              ({faculty.reviewCount})
            </span>
          </div>
          <div className="flex items-center gap-1" style={{ color: "rgba(26,26,36,0.5)" }}>
            <Users className="w-3 h-3" />
            <span className="text-[10px] font-medium">{faculty.students}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-[rgba(26,26,36,0.07)]">
          <div className="flex items-center gap-1 text-[rgba(26,26,36,0.5)]">
            <BookOpen className="w-3 h-3" />
            <span className="text-[11px] font-medium">{faculty.courses} courses</span>
          </div>
          <span className="text-sm font-black text-[#1A1A24]">{faculty.price}</span>
        </div>
      </div>
    </Link>
  );
}
