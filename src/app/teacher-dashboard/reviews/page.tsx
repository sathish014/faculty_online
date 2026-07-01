"use client";

import React, { useState } from "react";
import { Star, Search } from "lucide-react";

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
    <div className="max-w-5xl mx-auto space-y-6 animate-fade-up">
      {/* Header & Stats */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
        <div>
          <h1 className="text-2xl font-extrabold text-[#1A1A24]">Student Reviews</h1>
          <p className="text-[#1A1A24]/65 text-sm mt-1">See what your students are saying about you.</p>
        </div>
        
        <div className="card-minimal rounded-2xl p-4 shadow-sm flex items-center gap-6 bg-white/80">
          <div className="text-center px-4 border-r border-[#1A1A24]/10">
            <div className="text-3xl font-black text-[#1A1A24]">{averageRating.toFixed(1)}</div>
            <div className="flex items-center justify-center text-amber-500 my-1">
              {[1,2,3,4,5].map(i => (
                <Star key={i} className={`w-4 h-4 ${i <= Math.round(averageRating) ? 'fill-current' : 'text-[#1A1A24]/20 fill-current'}`} />
              ))}
            </div>
            <div className="text-xs font-bold text-[#1A1A24]/50 uppercase">Average Rating</div>
          </div>
          <div className="text-center px-4">
            <div className="text-3xl font-black text-[#ff6200]">{mockReviews.length}</div>
            <div className="text-xs font-bold text-[#1A1A24]/50 mt-2 uppercase">Total Reviews</div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative w-full max-w-md">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1A1A24]/40" />
        <input 
          type="text" 
          placeholder="Search reviews by name or keyword..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 bg-white/80 border border-[#1A1A24]/10 rounded-xl text-sm focus:outline-none focus:border-[#ff6200] focus:ring-2 focus:ring-[#ff6200]/20 transition-all shadow-sm font-medium text-[#1A1A24]"
        />
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {filteredReviews.length > 0 ? (
          filteredReviews.map((review) => (
            <div key={review.id} className="card-minimal rounded-2xl p-6 shadow-sm transition-all bg-white/80">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#4D148C]/10 flex items-center justify-center text-[#4D148C] font-black text-sm">
                    {review.studentName.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-[#1A1A24]">{review.studentName}</h4>
                    <p className="text-xs font-medium text-[#1A1A24]/60">{review.subject} • {review.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                  <span className="font-extrabold text-amber-600 text-sm">{review.rating}.0</span>
                  <Star className="w-3.5 h-3.5 text-amber-500 fill-current" />
                </div>
              </div>
              <p className="text-[#1A1A24]/80 text-sm leading-relaxed font-medium italic">
                &quot;{review.comment}&quot;
              </p>
            </div>
          ))
        ) : (
          <div className="bg-white/80 border border-[#1A1A24]/10 rounded-2xl p-12 text-center shadow-sm">
            <div className="w-16 h-16 bg-[#1A1A24]/5 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-[#1A1A24]/10">
              <Star className="w-8 h-8 text-[#ff6200]" />
            </div>
            <h3 className="text-lg font-bold text-[#1A1A24] mb-2">No reviews found</h3>
            <p className="text-[#1A1A24]/65 max-w-sm mx-auto text-sm">
              We couldn&apos;t find any reviews matching your search criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

