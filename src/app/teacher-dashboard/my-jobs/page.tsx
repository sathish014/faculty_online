"use client";

import React, { useState } from "react";
import { 
  Briefcase,
  Search,
  MapPin,
  Clock,
  MoreVertical,
  CheckCircle,
  Users
} from "lucide-react";

// Mock data
const mockJobs = [
  {
    id: "JOB-101",
    studentName: "Rahul Sharma",
    subject: "Class 10 Mathematics CBSE",
    mode: "Online",
    location: "Any",
    startDate: "12 May 2026",
    status: "Active", // Active, Pending, Completed
    payout: "₹500/hr",
    hoursPerWeek: 4
  },
  {
    id: "JOB-102",
    studentName: "Sneha Gupta",
    subject: "Python Programming for Beginners",
    mode: "Home Tuition",
    location: "Andheri West, Mumbai",
    startDate: "01 Apr 2026",
    status: "Completed",
    payout: "₹800/hr",
    hoursPerWeek: 6
  },
  {
    id: "JOB-103",
    studentName: "Vikram Singh",
    subject: "IELTS Speaking Preparation",
    mode: "Online",
    location: "Any",
    startDate: "Pending Approval",
    status: "Pending",
    payout: "₹1000/hr",
    hoursPerWeek: 3
  }
];

export default function MyJobsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredJobs = mockJobs.filter(job => {
    const matchesSearch = job.studentName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          job.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === "All" || job.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="max-w-6xl mx-auto space-y-6 animate-fade-up">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-[#1A1A24]">My Jobs</h1>
          <p className="text-[#1A1A24]/65 text-sm mt-1">Manage your active tutoring assignments and applications.</p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white/80 p-4 rounded-2xl border border-[#1A1A24]/10 flex flex-col sm:flex-row gap-4 justify-between items-center shadow-sm">
        <div className="flex gap-2 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0 custom-scrollbar">
          {["All", "Active", "Pending", "Completed"].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                filter === f 
                  ? "bg-[#4D148C] text-white shadow-md shadow-[#4D148C]/20" 
                  : "bg-[#1A1A24]/5 text-[#1A1A24]/70 hover:bg-[#1A1A24]/10 hover:text-[#1A1A24]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1A1A24]/40" />
          <input 
            type="text" 
            placeholder="Search by student or subject..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-[#1A1A24]/5 border border-[#1A1A24]/10 rounded-xl text-sm focus:outline-none focus:border-[#ff6200] focus:ring-2 focus:ring-[#ff6200]/20 transition-all font-medium text-[#1A1A24]"
          />
        </div>
      </div>

      {/* List */}
      <div className="space-y-4">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div key={job.id} className="card-minimal rounded-2xl p-6 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 group bg-white/80">
              <div className="flex items-start gap-4 flex-1">
                <div className="hidden sm:flex w-12 h-12 bg-[#4D148C]/10 rounded-xl items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110">
                  <Briefcase className="w-6 h-6 text-[#4D148C]" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-bold text-[#1A1A24]/40">{job.id}</span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${
                      job.status === 'Active' ? 'bg-[#ff6200]/15 text-[#ff6200] border border-[#ff6200]/30' :
                      job.status === 'Completed' ? 'bg-[#4D148C]/15 text-[#4D148C] border border-[#4D148C]/30' :
                      'bg-amber-500/15 text-amber-600 border border-amber-500/30'
                    }`}>
                      {job.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-extrabold text-[#1A1A24] group-hover:text-[#ff6200] transition-colors">
                    {job.subject}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 text-xs font-medium text-[#1A1A24]/65">
                    <span className="flex items-center gap-1.5 font-bold text-[#1A1A24]"><Users className="w-3.5 h-3.5 text-[#ff6200]" /> {job.studentName}</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-[#4D148C]" /> {job.mode}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-[#1A1A24]/40" /> Start: {job.startDate}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between md:justify-end gap-6 border-t border-[#1A1A24]/10 md:border-t-0 pt-4 md:pt-0 mt-2 md:mt-0">
                <div className="text-left md:text-right">
                  <p className="text-xs font-bold text-[#1A1A24]/50 uppercase tracking-wider">Payout</p>
                  <p className="font-extrabold text-[#1A1A24] text-base">{job.payout}</p>
                </div>
                <div className="text-left md:text-right">
                  <p className="text-xs font-bold text-[#1A1A24]/50 uppercase tracking-wider">Time</p>
                  <p className="font-extrabold text-[#ff6200] text-base">{job.hoursPerWeek} hrs/wk</p>
                </div>
                <button className="p-2 text-[#1A1A24]/40 hover:text-[#1A1A24] hover:bg-[#1A1A24]/5 rounded-xl transition-colors">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="bg-white/80 border border-[#1A1A24]/10 rounded-2xl p-12 text-center shadow-sm">
            <div className="w-16 h-16 bg-[#1A1A24]/5 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-[#1A1A24]/10">
              <Briefcase className="w-8 h-8 text-[#ff6200]" />
            </div>
            <h3 className="text-lg font-bold text-[#1A1A24] mb-2">No jobs found</h3>
            <p className="text-[#1A1A24]/65 max-w-sm mx-auto mb-6 text-sm">
              You don&apos;t have any tutoring jobs matching your current filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

