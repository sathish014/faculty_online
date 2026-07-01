"use client";

import React from "react";
import Link from "next/link";
import { 
  Search, 
  PlusCircle, 
  Clock,
  ArrowRight,
  Monitor,
  School,
  Home
} from "lucide-react";

export default function StudentDashboardHome() {
  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-up">
      {/* Welcome Banner */}
      <div 
        className="rounded-3xl p-8 text-white relative overflow-hidden shadow-xl"
        style={{ background: "linear-gradient(135deg, #4D148C 0%, #2e0854 100%)" }}
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#ff6200]/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#ff6200] text-xs font-bold mb-3 tracking-wide uppercase">
              Student Portal
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">Welcome back, Student! 👋</h1>
            <p className="text-white/80 mt-2 text-base sm:text-lg max-w-xl">Find top-rated faculty, manage your study requirements, and track learning progress all in one place.</p>
          </div>
          <Link 
            href="/student-dashboard/post-requirement"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 btn-coral rounded-xl font-bold text-sm shadow-lg shrink-0"
          >
            <PlusCircle className="w-5 h-5" />
            Post a Requirement
          </Link>
        </div>
      </div>

      {/* Quick Actions (Find Tutors) */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-extrabold text-[#1A1A24]">Find Tutors</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: "Online Tutors", icon: Monitor, color: "text-[#ff6200]", bg: "bg-[#ff6200]/10" },
            { title: "Offline Tutors", icon: School, color: "text-[#4D148C]", bg: "bg-[#4D148C]/10" },
            { title: "Home Tutors", icon: Home, color: "text-[#ff8c42]", bg: "bg-[#ff8c42]/15" },
          ].map((mode, i) => (
            <Link 
              href={`/tutor/search`} 
              key={i}
              className="flex items-center gap-4 p-5 rounded-2xl card-minimal transition-all group bg-white/80"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${mode.bg} transition-transform group-hover:scale-110`}>
                <mode.icon className={`w-6 h-6 ${mode.color}`} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-[#1A1A24] group-hover:text-[#ff6200] transition-colors">{mode.title}</h3>
                <p className="text-xs text-[#1A1A24]/60 mt-0.5">Explore verified instructors</p>
              </div>
              <ArrowRight className="w-5 h-5 text-[#1A1A24]/30 group-hover:text-[#ff6200] group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
        </div>
      </section>

      {/* Recent Requirements Summary */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-extrabold text-[#1A1A24]">Recent Requirements</h2>
          <Link href="/student-dashboard/my-requirements" className="text-sm font-bold text-[#ff6200] hover:text-[#e55800] flex items-center gap-1 transition-colors">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="bg-white/80 border border-[#1A1A24]/10 rounded-2xl p-8 shadow-sm">
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <div className="w-16 h-16 bg-[#1A1A24]/5 rounded-2xl flex items-center justify-center mb-4 border border-[#1A1A24]/10">
              <Clock className="w-8 h-8 text-[#ff6200]" />
            </div>
            <h3 className="text-lg font-bold text-[#1A1A24] mb-2">No recent requirements</h3>
            <p className="text-[#1A1A24]/65 max-w-sm mb-6 text-sm">
              You haven&apos;t posted any tutor requirements yet. Post one to start getting proposals from expert tutors.
            </p>
            <Link 
              href="/student-dashboard/post-requirement"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-[#4D148C] text-white hover:bg-[#380d66] transition-all shadow-md"
            >
              Post your first requirement
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

