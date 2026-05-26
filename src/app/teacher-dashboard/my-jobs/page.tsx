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
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">My Jobs</h1>
          <p className="text-slate-500 text-sm mt-1">Manage your active tutoring assignments and applications.</p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 flex flex-col sm:flex-row gap-4 justify-between items-center shadow-sm">
        <div className="flex gap-2 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0 hide-scrollbar">
          {["All", "Active", "Pending", "Completed"].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                filter === f 
                  ? "bg-indigo-100 text-indigo-700" 
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search by student or subject..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
          />
        </div>
      </div>

      {/* List */}
      <div className="space-y-4">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div key={job.id} className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-indigo-200 hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 group">
              <div className="flex items-start gap-4 flex-1">
                <div className="hidden sm:flex w-12 h-12 bg-indigo-50 rounded-xl items-center justify-center flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-indigo-500" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-semibold text-slate-400">{job.id}</span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                      job.status === 'Active' ? 'bg-green-100 text-green-700' :
                      job.status === 'Completed' ? 'bg-blue-100 text-blue-700' :
                      'bg-amber-100 text-amber-700'
                    }`}>
                      {job.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
                    {job.subject}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 text-sm text-slate-500">
                    <span className="flex items-center gap-1.5 font-medium text-slate-700"><Users className="w-4 h-4" /> {job.studentName}</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {job.mode}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> Start: {job.startDate}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between md:justify-end gap-6 border-t md:border-t-0 pt-4 md:pt-0 mt-2 md:mt-0">
                <div className="text-left md:text-right">
                  <p className="text-sm text-slate-500">Payout</p>
                  <p className="font-bold text-slate-800">{job.payout}</p>
                </div>
                <div className="text-left md:text-right">
                  <p className="text-sm text-slate-500">Time</p>
                  <p className="font-semibold text-indigo-600">{job.hoursPerWeek} hrs/wk</p>
                </div>
                <button className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center shadow-sm">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Briefcase className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">No jobs found</h3>
            <p className="text-slate-500 max-w-sm mx-auto mb-6">
              You don't have any tutoring jobs matching your current filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
