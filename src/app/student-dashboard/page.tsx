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
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Welcome back, Student! 👋</h1>
          <p className="text-slate-500 mt-2 text-lg">What would you like to learn today?</p>
        </div>
        <Link 
          href="/student-dashboard/post-requirement"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-colors shadow-sm shadow-indigo-200"
        >
          <PlusCircle className="w-5 h-5" />
          Post a Requirement
        </Link>
      </div>

      {/* Quick Actions (Find Tutors) */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-slate-800">Find Tutors</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: "Online Tutors", icon: Monitor, color: "text-blue-600", bg: "bg-blue-50" },
            { title: "Offline Tutors", icon: School, color: "text-purple-600", bg: "bg-purple-50" },
            { title: "Home Tutors", icon: Home, color: "text-emerald-600", bg: "bg-emerald-50" },
          ].map((mode, i) => (
            <Link 
              href={`/#tutors`} 
              key={i}
              className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all group"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${mode.bg}`}>
                <mode.icon className={`w-6 h-6 ${mode.color}`} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">{mode.title}</h3>
                <p className="text-sm text-slate-500 mt-0.5">Explore instructors</p>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-indigo-600 transition-colors" />
            </Link>
          ))}
        </div>
      </section>

      {/* Recent Requirements Summary */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-slate-800">Recent Requirements</h2>
          <Link href="/student-dashboard/my-requirements" className="text-sm font-medium text-indigo-600 hover:text-indigo-700 flex items-center gap-1">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
              <Clock className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">No recent requirements</h3>
            <p className="text-slate-500 max-w-sm mb-6">
              You haven't posted any tutor requirements yet. Post one to start getting proposals from expert tutors.
            </p>
            <Link 
              href="/student-dashboard/post-requirement"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-xl font-medium hover:bg-indigo-100 transition-colors"
            >
              Post your first requirement
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
