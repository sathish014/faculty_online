"use client";

import React from "react";
import Link from "next/link";
import { 
  Briefcase, 
  Wallet,
  Star,
  TrendingUp,
  ArrowRight,
  Clock,
  CheckCircle2,
  Users
} from "lucide-react";

export default function TeacherDashboardHome() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Welcome back, Expert! 🎓</h1>
          <p className="text-slate-500 mt-2 text-lg">Here's an overview of your tutoring business today.</p>
        </div>
        <div className="flex gap-3">
          <Link 
            href="/teacher-dashboard/profile"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl font-medium hover:bg-slate-50 transition-colors shadow-sm"
          >
            Edit Profile
          </Link>
          <Link 
            href="/#post-requirement" // Placeholder for 'Browse Jobs'
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-colors shadow-sm shadow-indigo-200"
          >
            <SearchIcon className="w-5 h-5" />
            Browse New Jobs
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Earnings Card */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center group-hover:bg-green-100 transition-colors">
              <Wallet className="w-6 h-6 text-green-600" />
            </div>
            <span className="flex items-center gap-1 text-sm font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-lg">
              <TrendingUp className="w-4 h-4" /> +12%
            </span>
          </div>
          <p className="text-sm font-medium text-slate-500">Total Earnings (This Month)</p>
          <h3 className="text-3xl font-bold text-slate-900 mt-1">₹45,200</h3>
        </div>

        {/* Active Jobs Card */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors">
              <Briefcase className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <p className="text-sm font-medium text-slate-500">Active Students / Jobs</p>
          <h3 className="text-3xl font-bold text-slate-900 mt-1">8</h3>
        </div>

        {/* Rating Card */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center group-hover:bg-yellow-100 transition-colors">
              <Star className="w-6 h-6 text-yellow-500" />
            </div>
            <span className="flex items-center gap-1 text-sm font-semibold text-slate-600 bg-slate-50 px-2 py-1 rounded-lg">
              Based on 42 reviews
            </span>
          </div>
          <p className="text-sm font-medium text-slate-500">Average Rating</p>
          <h3 className="text-3xl font-bold text-slate-900 mt-1 flex items-baseline gap-1">
            4.9 <span className="text-lg text-slate-400 font-medium">/ 5.0</span>
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Jobs/Students */}
        <section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <Users className="w-5 h-5 text-indigo-500" />
              Recent Jobs
            </h2>
            <Link href="/teacher-dashboard/my-jobs" className="text-sm font-medium text-indigo-600 hover:text-indigo-700 flex items-center gap-1">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="p-0">
            {[
              { name: "Rahul Sharma", subject: "Mathematics CBSE 10th", mode: "Online", status: "Active" },
              { name: "Sneha Gupta", subject: "Python Programming", mode: "Home Tuition", status: "Completed" },
            ].map((job, i) => (
              <div key={i} className="flex items-center justify-between p-4 sm:px-6 border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors">
                <div>
                  <h4 className="font-semibold text-slate-800">{job.name}</h4>
                  <p className="text-sm text-slate-500">{job.subject} • {job.mode}</p>
                </div>
                <div>
                  {job.status === 'Active' ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-green-50 text-green-700 border border-green-100">
                      <Clock className="w-3.5 h-3.5" /> {job.status}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5" /> {job.status}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Reviews */}
        <section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500" />
              Recent Reviews
            </h2>
            <Link href="/teacher-dashboard/reviews" className="text-sm font-medium text-indigo-600 hover:text-indigo-700 flex items-center gap-1">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="p-6 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-800 text-sm">Amit K.</span>
                <div className="flex items-center text-yellow-400">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                </div>
              </div>
              <p className="text-sm text-slate-600 italic">"Excellent tutor! Explains complex concepts very clearly. Highly recommended for math."</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-800 text-sm">Priya M.</span>
                <div className="flex items-center text-yellow-400">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 text-slate-200 fill-current" />
                </div>
              </div>
              <p className="text-sm text-slate-600 italic">"Good teaching style, helped me improve my programming basics significantly."</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
