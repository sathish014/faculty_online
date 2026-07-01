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
  Users,
  Search
} from "lucide-react";

export default function TeacherDashboardHome() {
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
              Faculty Portal
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">Welcome back, Expert! 🎓</h1>
            <p className="text-white/80 mt-2 text-base sm:text-lg max-w-xl">Here&apos;s an overview of your tutoring business, student leads, and reviews today.</p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link 
              href="/teacher-dashboard/profile"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white/10 border border-white/20 text-white rounded-xl font-bold text-sm hover:bg-white/20 transition-all shadow-sm backdrop-blur-xs"
            >
              Edit Profile
            </Link>
            <Link 
              href="/#post-requirement"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 btn-coral rounded-xl font-bold text-sm shadow-lg"
            >
              <Search className="w-4 h-4" />
              Browse New Jobs
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Earnings Card */}
        <div className="card-minimal rounded-2xl p-6 relative overflow-hidden group bg-white/80">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 bg-[#ff6200]/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Wallet className="w-6 h-6 text-[#ff6200]" />
            </div>
            <span className="flex items-center gap-1 text-xs font-bold text-[#ff6200] bg-[#ff6200]/10 border border-[#ff6200]/20 px-2.5 py-1 rounded-full">
              <TrendingUp className="w-3.5 h-3.5" /> +12%
            </span>
          </div>
          <p className="text-xs font-bold text-[#1A1A24]/50 uppercase tracking-wider">Total Earnings (This Month)</p>
          <h3 className="text-3xl font-black text-[#1A1A24] mt-1">₹45,200</h3>
        </div>

        {/* Active Jobs Card */}
        <div className="card-minimal rounded-2xl p-6 relative overflow-hidden group bg-white/80">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 bg-[#4D148C]/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Briefcase className="w-6 h-6 text-[#4D148C]" />
            </div>
          </div>
          <p className="text-xs font-bold text-[#1A1A24]/50 uppercase tracking-wider">Active Students / Jobs</p>
          <h3 className="text-3xl font-black text-[#1A1A24] mt-1">8</h3>
        </div>

        {/* Rating Card */}
        <div className="card-minimal rounded-2xl p-6 relative overflow-hidden group bg-white/80">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Star className="w-6 h-6 text-amber-500 fill-amber-500" />
            </div>
            <span className="flex items-center gap-1 text-xs font-bold text-[#1A1A24]/60 bg-[#1A1A24]/5 border border-[#1A1A24]/10 px-2.5 py-1 rounded-full">
              42 reviews
            </span>
          </div>
          <p className="text-xs font-bold text-[#1A1A24]/50 uppercase tracking-wider">Average Rating</p>
          <h3 className="text-3xl font-black text-[#1A1A24] mt-1 flex items-baseline gap-1">
            4.9 <span className="text-base text-[#1A1A24]/40 font-bold">/ 5.0</span>
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Jobs/Students */}
        <section className="bg-white/80 rounded-2xl border border-[#1A1A24]/10 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-[#1A1A24]/10 flex items-center justify-between">
            <h2 className="text-lg font-extrabold text-[#1A1A24] flex items-center gap-2">
              <Users className="w-5 h-5 text-[#4D148C]" />
              Recent Jobs
            </h2>
            <Link href="/teacher-dashboard/my-jobs" className="text-sm font-bold text-[#ff6200] hover:text-[#e55800] flex items-center gap-1 transition-colors">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="p-0">
            {[
              { name: "Rahul Sharma", subject: "Mathematics CBSE 10th", mode: "Online", status: "Active" },
              { name: "Sneha Gupta", subject: "Python Programming", mode: "Home Tuition", status: "Completed" },
            ].map((job, i) => (
              <div key={i} className="flex items-center justify-between p-5 border-b border-[#1A1A24]/5 last:border-0 hover:bg-[#1A1A24]/2 transition-colors">
                <div>
                  <h4 className="font-extrabold text-[#1A1A24] text-base">{job.name}</h4>
                  <p className="text-xs font-medium text-[#1A1A24]/60 mt-0.5">{job.subject} • {job.mode}</p>
                </div>
                <div>
                  {job.status === 'Active' ? (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-[#ff6200]/15 text-[#ff6200] border border-[#ff6200]/30">
                      <Clock className="w-3.5 h-3.5" /> {job.status}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-[#4D148C]/15 text-[#4D148C] border border-[#4D148C]/30">
                      <CheckCircle2 className="w-3.5 h-3.5" /> {job.status}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Reviews */}
        <section className="bg-white/80 rounded-2xl border border-[#1A1A24]/10 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-[#1A1A24]/10 flex items-center justify-between">
            <h2 className="text-lg font-extrabold text-[#1A1A24] flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
              Recent Reviews
            </h2>
            <Link href="/teacher-dashboard/reviews" className="text-sm font-bold text-[#ff6200] hover:text-[#e55800] flex items-center gap-1 transition-colors">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="p-6 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-extrabold text-[#1A1A24] text-sm">Amit K.</span>
                <div className="flex items-center text-amber-500">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                </div>
              </div>
              <p className="text-sm text-[#1A1A24]/75 italic font-medium">&quot;Excellent tutor! Explains complex concepts very clearly. Highly recommended for math.&quot;</p>
            </div>
            <div className="space-y-2 pt-4 border-t border-[#1A1A24]/10">
              <div className="flex items-center justify-between">
                <span className="font-extrabold text-[#1A1A24] text-sm">Priya M.</span>
                <div className="flex items-center text-amber-500">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 text-[#1A1A24]/20 fill-current" />
                </div>
              </div>
              <p className="text-sm text-[#1A1A24]/75 italic font-medium">&quot;Good teaching style, helped me improve my programming basics significantly.&quot;</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

