"use client";

import React, { useState } from "react";
import { 
  BookOpen, 
  MapPin, 
  Phone, 
  AlignLeft, 
  User, 
  Languages, 
  Wallet,
  CheckCircle2,
  Send
} from "lucide-react";

export default function PostRequirementPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto mt-12 bg-white/80 rounded-3xl p-8 sm:p-12 shadow-sm border border-[#1A1A24]/10 text-center animate-fade-up">
        <div className="w-20 h-20 bg-[#ff6200]/15 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#ff6200]/30">
          <CheckCircle2 className="w-10 h-10 text-[#ff6200]" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A1A24] mb-4">Requirement Posted Successfully!</h2>
        <p className="text-[#1A1A24]/65 mb-8 text-base">
          Your requirement has been sent to our verified tutors. You will start receiving proposals soon.
        </p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="inline-flex items-center justify-center px-6 py-3.5 btn-coral rounded-xl font-bold shadow-md"
        >
          Post Another Requirement
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto animate-fade-up">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-[#1A1A24] tracking-tight">Post a Requirement</h1>
        <p className="text-[#1A1A24]/65 mt-1.5 text-base">Fill in the details below to find the perfect tutor for your needs.</p>
      </div>

      <div className="bg-white/80 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm border border-[#1A1A24]/10">
        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Personal & Contact Details */}
          <div>
            <h2 className="text-lg font-bold text-[#1A1A24] mb-4 flex items-center gap-2 border-b border-[#1A1A24]/10 pb-3">
              <User className="w-5 h-5 text-[#ff6200]" />
              Contact Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-[#1A1A24]">Student/Parent Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1A1A24]/40" />
                  <input required type="text" placeholder="John Doe" className="w-full pl-12 pr-4 py-3 rounded-xl border border-[#1A1A24]/15 focus:border-[#ff6200] focus:ring-2 focus:ring-[#ff6200]/20 outline-none transition-all bg-white font-medium text-[#1A1A24]" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-[#1A1A24]">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1A1A24]/40" />
                  <input required type="tel" placeholder="+91 9876543210" className="w-full pl-12 pr-4 py-3 rounded-xl border border-[#1A1A24]/15 focus:border-[#ff6200] focus:ring-2 focus:ring-[#ff6200]/20 outline-none transition-all bg-white font-medium text-[#1A1A24]" />
                </div>
              </div>
            </div>
          </div>

          {/* Requirement Details */}
          <div>
            <h2 className="text-lg font-bold text-[#1A1A24] mb-4 flex items-center gap-2 border-b border-[#1A1A24]/10 pb-3">
              <BookOpen className="w-5 h-5 text-[#4D148C]" />
              Tuition Requirements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-[#1A1A24]">Subject / Skill</label>
                <div className="relative">
                  <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1A1A24]/40" />
                  <input required type="text" placeholder="e.g. Mathematics, Python, IELTS" className="w-full pl-12 pr-4 py-3 rounded-xl border border-[#1A1A24]/15 focus:border-[#ff6200] focus:ring-2 focus:ring-[#ff6200]/20 outline-none transition-all bg-white font-medium text-[#1A1A24]" />
                </div>
              </div>
              
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-[#1A1A24]">Mode of Teaching</label>
                <select required className="w-full px-4 py-3 rounded-xl border border-[#1A1A24]/15 focus:border-[#ff6200] focus:ring-2 focus:ring-[#ff6200]/20 outline-none transition-all bg-white font-medium text-[#1A1A24]">
                  <option value="">Select Mode...</option>
                  <option value="online">Online</option>
                  <option value="offline">Offline (Student travels to Tutor)</option>
                  <option value="home">Home Tutor (Tutor travels to Student)</option>
                </select>
              </div>

              <div className="space-y-1.5 md:col-span-2">
                <label className="text-sm font-bold text-[#1A1A24]">Location</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1A1A24]/40" />
                  <input type="text" placeholder="City, Area, or Pincode" className="w-full pl-12 pr-4 py-3 rounded-xl border border-[#1A1A24]/15 focus:border-[#ff6200] focus:ring-2 focus:ring-[#ff6200]/20 outline-none transition-all bg-white font-medium text-[#1A1A24]" />
                </div>
              </div>

              <div className="space-y-1.5 md:col-span-2">
                <label className="text-sm font-bold text-[#1A1A24]">Detailed Requirement</label>
                <div className="relative">
                  <AlignLeft className="absolute left-4 top-4 w-5 h-5 text-[#1A1A24]/40" />
                  <textarea 
                    required 
                    rows={4} 
                    placeholder="Describe what you are looking for. E.g. 'Looking for an experienced math tutor for 10th CBSE board exams...'" 
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-[#1A1A24]/15 focus:border-[#ff6200] focus:ring-2 focus:ring-[#ff6200]/20 outline-none transition-all bg-white font-medium text-[#1A1A24] resize-y" 
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Preferences */}
          <div>
            <h2 className="text-lg font-bold text-[#1A1A24] mb-4 flex items-center gap-2 border-b border-[#1A1A24]/10 pb-3">
              <CheckCircle2 className="w-5 h-5 text-[#ff6200]" />
              Preferences
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-[#1A1A24]">Budget (per hr / monthly)</label>
                <div className="relative">
                  <Wallet className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1A1A24]/40" />
                  <input type="text" placeholder="e.g. ₹500/hr" className="w-full pl-12 pr-4 py-3 rounded-xl border border-[#1A1A24]/15 focus:border-[#ff6200] focus:ring-2 focus:ring-[#ff6200]/20 outline-none transition-all bg-white font-medium text-[#1A1A24]" />
                </div>
              </div>
              
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-[#1A1A24]">Languages Known</label>
                <div className="relative">
                  <Languages className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1A1A24]/40" />
                  <input type="text" placeholder="English, Hindi" className="w-full pl-12 pr-4 py-3 rounded-xl border border-[#1A1A24]/15 focus:border-[#ff6200] focus:ring-2 focus:ring-[#ff6200]/20 outline-none transition-all bg-white font-medium text-[#1A1A24]" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-bold text-[#1A1A24]">Gender Preference</label>
                <select className="w-full px-4 py-3 rounded-xl border border-[#1A1A24]/15 focus:border-[#ff6200] focus:ring-2 focus:ring-[#ff6200]/20 outline-none transition-all bg-white font-medium text-[#1A1A24]">
                  <option value="any">Any</option>
                  <option value="male">Male Tutor</option>
                  <option value="female">Female Tutor</option>
                </select>
              </div>
            </div>
          </div>

          {/* Submit Action */}
          <div className="pt-6 border-t border-[#1A1A24]/10 flex justify-end">
            <button 
              type="submit"
              className="inline-flex items-center gap-2 px-8 py-3.5 btn-coral rounded-xl font-bold shadow-lg active:scale-95"
            >
              Post Requirement
              <Send className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
