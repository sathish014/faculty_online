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
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">My Requirements</h1>
          <p className="text-slate-500 text-sm mt-1">Manage and track your posted tutor requests.</p>
        </div>
        <Link 
          href="/student-dashboard/post-requirement"
          className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-sm"
        >
          <PlusCircle className="w-4 h-4" />
          Post New
        </Link>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 flex flex-col sm:flex-row gap-4 justify-between items-center">
        <div className="flex gap-2 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0 hide-scrollbar">
          {["All", "Active", "Fulfilled", "Cancelled"].map(f => (
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
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search subject..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
          />
        </div>
      </div>

      {/* List */}
      <div className="space-y-4">
        {filteredReqs.length > 0 ? (
          filteredReqs.map((req) => (
            <div key={req.id} className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-indigo-200 hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 group">
              <div className="flex items-start gap-4 flex-1">
                <div className="hidden sm:flex w-12 h-12 bg-indigo-50 rounded-xl items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-indigo-500" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-semibold text-slate-400">{req.id}</span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                      req.status === 'Active' ? 'bg-green-100 text-green-700' :
                      req.status === 'Fulfilled' ? 'bg-blue-100 text-blue-700' :
                      'bg-slate-100 text-slate-600'
                    }`}>
                      {req.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
                    {req.subject}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 text-sm text-slate-500">
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {req.mode} • {req.location}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> Posted {req.date}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between md:justify-end gap-6 border-t md:border-t-0 pt-4 md:pt-0 mt-2 md:mt-0">
                <div className="text-left md:text-right">
                  <p className="text-sm text-slate-500">Budget</p>
                  <p className="font-semibold text-slate-800">{req.budget}</p>
                </div>
                <div className="text-left md:text-right">
                  <p className="text-sm text-slate-500">Proposals</p>
                  <p className="font-semibold text-indigo-600">{req.proposals}</p>
                </div>
                <button className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">No requirements found</h3>
            <p className="text-slate-500 max-w-sm mx-auto mb-6">
              You don't have any requests matching your current filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
