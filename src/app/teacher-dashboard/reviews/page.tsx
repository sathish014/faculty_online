"use client";

import React, { useState } from "react";
import { Star, Search, Filter } from "lucide-react";

// Mock data
const mockReviews = [
  {
    id: 1,
    studentName: "Amit Kumar",
    subject: "Class 10 Mathematics CBSE",
    rating: 5,
    date: "15 May 2026",
    comment: "Excellent tutor! Explains complex concepts very clearly. Highly recommended for math. My grades have improved significantly since starting these sessions."
  },
  {
    id: 2,
    studentName: "Priya Menon",
    subject: "Python Programming",
    rating: 4,
    date: "02 May 2026",
    comment: "Good teaching style, helped me improve my programming basics significantly. Would have given 5 stars but sometimes the schedule was a bit inflexible."
  },
  {
    id: 3,
    studentName: "Karan Desai",
    subject: "IELTS Prep",
    rating: 5,
    date: "20 Apr 2026",
    comment: "Very patient and thorough. The mock speaking tests were extremely helpful for my confidence."
  }
];

export default function ReviewsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredReviews = mockReviews.filter(review => 
    review.studentName.toLowerCase().includes(searchTerm.toLowerCase()) || 
    review.comment.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const averageRating = mockReviews.reduce((acc, curr) => acc + curr.rating, 0) / mockReviews.length;

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header & Stats */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Student Reviews</h1>
          <p className="text-slate-500 text-sm mt-1">See what your students are saying about you.</p>
        </div>
        
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-6">
          <div className="text-center px-4 border-r border-slate-100">
            <div className="text-3xl font-bold text-slate-900">{averageRating.toFixed(1)}</div>
            <div className="flex items-center justify-center text-yellow-400 my-1">
              {[1,2,3,4,5].map(i => (
                <Star key={i} className={`w-4 h-4 ${i <= Math.round(averageRating) ? 'fill-current' : 'text-slate-200 fill-current'}`} />
              ))}
            </div>
            <div className="text-xs text-slate-500">Average Rating</div>
          </div>
          <div className="text-center px-4">
            <div className="text-3xl font-bold text-indigo-600">{mockReviews.length}</div>
            <div className="text-xs text-slate-500 mt-2">Total Reviews</div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative w-full max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input 
          type="text" 
          placeholder="Search reviews by name or keyword..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all shadow-sm"
        />
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {filteredReviews.length > 0 ? (
          filteredReviews.map((review) => (
            <div key={review.id} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-100 to-violet-100 flex items-center justify-center text-indigo-700 font-bold text-sm">
                    {review.studentName.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">{review.studentName}</h4>
                    <p className="text-xs text-slate-500">{review.subject} • {review.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 bg-yellow-50 px-2.5 py-1 rounded-lg border border-yellow-100">
                  <span className="font-bold text-yellow-700 text-sm">{review.rating}.0</span>
                  <Star className="w-3.5 h-3.5 text-yellow-500 fill-current" />
                </div>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">
                "{review.comment}"
              </p>
            </div>
          ))
        ) : (
          <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center shadow-sm">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-slate-300" />
            </div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">No reviews found</h3>
            <p className="text-slate-500 max-w-sm mx-auto">
              We couldn't find any reviews matching your search criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
