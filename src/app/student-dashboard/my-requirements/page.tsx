"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  FileText,
  Search,
  PlusCircle,
  MapPin,
  Clock,
  MoreVertical,
  CheckCircle,
  XCircle,
  BookOpen
} from "lucide-react";

// Mock data
const mockRequirements = [
  {
    id: "REQ-001",
    subject: "Class 10 Mathematics CBSE",
    mode: "Home Tutor",
    location: "Andheri West, Mumbai",
    date: "10 May 2026",
    status: "Active", // Active, Fulfilled, Cancelled
    proposals: 4,
    budget: "₹500/hr"
  },
  {
    id: "REQ-002",
    subject: "Python Programming for Beginners",
    mode: "Online",
    location: "Any",
    date: "28 Apr 2026",
    status: "Fulfilled",
    proposals: 12,
    budget: "₹800/hr"
  },
  {
    id: "REQ-003",
    subject: "IELTS Speaking Preparation",
    mode: "Online",
    location: "Any",
    date: "15 Mar 2026",
    status: "Cancelled",
    proposals: 0,
    budget: "₹1000/hr"
  }
];

export default function MyRequirementsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredReqs = mockRequirements.filter(req => {
    const matchesSearch = req.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === "All" || req.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="max-w-6xl mx-auto space-y-6 animate-fade-up">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-[#1A1A24]">My Requirements</h1>
          <p className="text-[#1A1A24]/65 text-sm mt-1">Manage and track your posted tutor requests.</p>
        </div>
        <Link 
          href="/student-dashboard/post-requirement"
          className="inline-flex items-center gap-2 px-5 py-2.5 btn-coral rounded-xl font-bold text-sm shadow-md"
        >
          <PlusCircle className="w-4 h-4" />
          Post New
        </Link>
      </div>

      {/* Filters and Search */}
      <div className="bg-white/80 p-4 rounded-2xl border border-[#1A1A24]/10 flex flex-col sm:flex-row gap-4 justify-between items-center shadow-sm">
        <div className="flex gap-2 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0 custom-scrollbar">
          {["All", "Active", "Fulfilled", "Cancelled"].map(f => (
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
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1A1A24]/40" />
          <input 
            type="text" 
            placeholder="Search subject..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-[#1A1A24]/5 border border-[#1A1A24]/10 rounded-xl text-sm focus:outline-none focus:border-[#ff6200] focus:ring-2 focus:ring-[#ff6200]/20 transition-all font-medium text-[#1A1A24]"
          />
        </div>
      </div>

      {/* List */}
      <div className="space-y-4">
        {filteredReqs.length > 0 ? (
          filteredReqs.map((req) => (
            <div key={req.id} className="card-minimal rounded-2xl p-6 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 group bg-white/80">
              <div className="flex items-start gap-4 flex-1">
                <div className="hidden sm:flex w-12 h-12 bg-[#4D148C]/10 rounded-xl items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110">
                  <BookOpen className="w-6 h-6 text-[#4D148C]" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-bold text-[#1A1A24]/40">{req.id}</span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${
                      req.status === 'Active' ? 'bg-[#ff6200]/15 text-[#ff6200] border border-[#ff6200]/30' :
                      req.status === 'Fulfilled' ? 'bg-[#4D148C]/15 text-[#4D148C] border border-[#4D148C]/30' :
                      'bg-[#1A1A24]/10 text-[#1A1A24]/60'
                    }`}>
                      {req.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-extrabold text-[#1A1A24] group-hover:text-[#ff6200] transition-colors">
                    {req.subject}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 text-xs font-medium text-[#1A1A24]/65">
                    <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-[#ff6200]" /> {req.mode} • {req.location}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-[#4D148C]" /> Posted {req.date}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between md:justify-end gap-6 border-t border-[#1A1A24]/10 md:border-t-0 pt-4 md:pt-0 mt-2 md:mt-0">
                <div className="text-left md:text-right">
                  <p className="text-xs font-bold text-[#1A1A24]/50 uppercase tracking-wider">Budget</p>
                  <p className="font-extrabold text-[#1A1A24] text-base">{req.budget}</p>
                </div>
                <div className="text-left md:text-right">
                  <p className="text-xs font-bold text-[#1A1A24]/50 uppercase tracking-wider">Proposals</p>
                  <p className="font-extrabold text-[#ff6200] text-base">{req.proposals}</p>
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
              <FileText className="w-8 h-8 text-[#ff6200]" />
            </div>
            <h3 className="text-lg font-bold text-[#1A1A24] mb-2">No requirements found</h3>
            <p className="text-[#1A1A24]/65 max-w-sm mx-auto mb-6 text-sm">
              You don&apos;t have any requests matching your current filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
