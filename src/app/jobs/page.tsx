import React from "react";
import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";
import { Coins, Search, Briefcase, MapPin } from "lucide-react";

export default function JobsPage() {
  const jobs = [
    {
      title: "JavaScript Programming (DOM, ES6, React)",
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words...",
      rate: "₹3000/hr",
      mode: "Online",
      coins: 215,
    },
    {
      title: "PHP Programming (Web Development, MVC)",
      description: "Learn PHP programming for web development, including working with databases, understanding MVC architecture, building robust backend web applications...",
      rate: "₹2800/hr",
      mode: "Offline",
      coins: 418,
    }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-[#fff9f0]">
      <Navbar />
      
      {/* Hero Banner */}
      <div className="relative pt-36 pb-16 px-4 bg-gradient-to-b from-[#fdf4ea] to-[#fff9f0] border-b border-[#1A1A24]/5">
        <div className="max-w-7xl mx-auto text-center space-y-4 animate-fade-up">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-[#ff6200]/15 text-[#ff6200] border border-[#ff6200]/30 uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" /> Tutoring Opportunities
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-[#1A1A24] tracking-tight">
            Available Faculty <span className="text-[#ff6200]">Jobs</span>
          </h1>
          <p className="text-base md:text-lg font-medium text-[#1A1A24]/70 max-w-2xl mx-auto">
            Browse high-paying online and home tutoring assignments posted by students and institutions across India.
          </p>
        </div>
      </div>

      <div className="flex-grow max-w-7xl mx-auto w-full px-4 pt-8 pb-24">

        {/* Search Bar Section */}
        <div className="bg-white/80 p-5 rounded-3xl shadow-sm border border-[#1A1A24]/10 mb-12 animate-fade-up">
          <div className="flex flex-col md:flex-row items-end gap-4">

            <div className="flex-1 w-full space-y-1.5">
              <label className="block text-xs font-extrabold uppercase tracking-wider text-[#1A1A24]/70">Search Keyword</label>
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1A1A24]/40" />
                <input
                  type="text"
                  placeholder="Job title, subject, or skill..."
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#1A1A24]/5 border border-[#1A1A24]/10 focus:outline-none focus:border-[#ff6200] focus:ring-2 focus:ring-[#ff6200]/20 text-sm font-medium text-[#1A1A24] transition-all"
                />
              </div>
            </div>

            <div className="w-full md:w-48 space-y-1.5">
              <label className="block text-xs font-extrabold uppercase tracking-wider text-[#1A1A24]/70">Job Mode</label>
              <select className="w-full px-4 py-3 rounded-xl bg-[#1A1A24]/5 border border-[#1A1A24]/10 focus:outline-none focus:border-[#ff6200] focus:ring-2 focus:ring-[#ff6200]/20 text-sm font-bold text-[#1A1A24]">
                <option>All Types</option>
                <option>Online</option>
                <option>Offline / Home</option>
              </select>
            </div>

            <div className="w-full md:w-48 space-y-1.5">
              <label className="block text-xs font-extrabold uppercase tracking-wider text-[#1A1A24]/70">Price Sort</label>
              <select className="w-full px-4 py-3 rounded-xl bg-[#1A1A24]/5 border border-[#1A1A24]/10 focus:outline-none focus:border-[#ff6200] focus:ring-2 focus:ring-[#ff6200]/20 text-sm font-bold text-[#1A1A24]">
                <option>Any Price</option>
                <option>High to Low</option>
                <option>Low to High</option>
              </select>
            </div>

            <button className="w-full md:w-auto px-8 py-3 bg-[#4D148C] text-white font-bold rounded-xl hover:bg-[#3d0f6f] shadow-lg shadow-[#4D148C]/20 transition-all text-sm active:scale-95 flex items-center justify-center gap-2">
              <Search className="w-4 h-4" /> Search
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-black text-[#1A1A24] tracking-tight">Latest Job Listings</h2>
          <span className="text-sm font-bold text-[#1A1A24]/60">{jobs.length} open positions</span>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {jobs.map((job, index) => (
            <div key={index} className="card-minimal bg-white/80 p-6 rounded-3xl border border-[#1A1A24]/10 hover:border-[#ff6200]/40 hover:shadow-lg transition-all flex flex-col h-full group">

              <div className="flex items-start justify-between gap-3 mb-3">
                <span className={`px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider ${
                  job.mode === "Online" 
                    ? "bg-[#4D148C]/15 text-[#4D148C] border border-[#4D148C]/30" 
                    : "bg-[#ff6200]/15 text-[#ff6200] border border-[#ff6200]/30"
                }`}>
                  <MapPin className="w-3 h-3 inline mr-1 -mt-0.5" />{job.mode}
                </span>
                <span className="text-lg font-black text-[#1A1A24] bg-[#fdf4ea] px-3 py-0.5 rounded-xl border border-[#1A1A24]/5">
                  {job.rate}
                </span>
              </div>

              <h3 className="text-lg font-extrabold text-[#1A1A24] mb-3 group-hover:text-[#ff6200] transition-colors leading-snug">
                {job.title}
              </h3>

              <p className="text-sm font-medium text-[#1A1A24]/70 mb-6 leading-relaxed line-clamp-3">
                {job.description}
              </p>

              <div className="mt-auto pt-4 border-t border-[#1A1A24]/10 flex items-center justify-between">
                <div className="flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 text-amber-700 rounded-xl border border-amber-500/20 text-xs font-extrabold">
                  <Coins className="w-3.5 h-3.5 text-amber-500" />
                  <span>{job.coins} Coins</span>
                </div>
                <button className="text-sm font-extrabold text-[#4D148C] hover:text-[#ff6200] transition-colors flex items-center gap-1">
                  Apply Now &rarr;
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
