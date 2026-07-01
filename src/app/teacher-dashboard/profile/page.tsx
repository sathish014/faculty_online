"use client";

import React, { useState } from "react";
import { 
  User, 
  MapPin, 
  Phone, 
  AlignLeft, 
  Languages, 
  Wallet,
  CheckCircle2,
  BookOpen,
  Save,
  Camera
} from "lucide-react";

export default function TeacherProfilePage() {
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fade-up">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-extrabold text-[#1A1A24]">My Profile</h1>
          <p className="text-[#1A1A24]/65 text-sm mt-1">Manage your public tutor profile and teaching preferences.</p>
        </div>
      </div>

      <div className="bg-white/80 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm border border-[#1A1A24]/10">
        <form onSubmit={handleSave} className="space-y-8">
          
          {/* Profile Picture */}
          <div className="flex flex-col items-center sm:flex-row sm:items-start gap-6 border-b border-[#1A1A24]/10 pb-8">
            <div className="relative group cursor-pointer">
              <div className="w-28 h-28 rounded-full bg-[#4D148C] flex items-center justify-center shadow-lg shadow-[#4D148C]/20 transition-transform group-hover:scale-105">
                <span className="text-[#ff6200] text-3xl font-black">T</span>
              </div>
              <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Camera className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="text-center sm:text-left flex-1">
              <h2 className="text-xl font-extrabold text-[#1A1A24]">Expert Tutor</h2>
              <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#ff6200]/15 text-[#ff6200] border border-[#ff6200]/30 mt-1">
                Premium Member
              </span>
              <div className="mt-4 flex flex-wrap justify-center sm:justify-start gap-3">
                <button type="button" className="px-4 py-2 bg-[#4D148C]/10 text-[#4D148C] font-bold rounded-xl text-sm hover:bg-[#4D148C]/20 transition-colors">
                  Change Picture
                </button>
                <button type="button" className="px-4 py-2 border border-[#1A1A24]/15 text-[#1A1A24]/70 font-bold rounded-xl text-sm hover:bg-[#1A1A24]/5 hover:text-[#1A1A24] transition-colors">
                  Remove
                </button>
              </div>
            </div>
          </div>

          {/* Personal Details */}
          <div>
            <h2 className="text-lg font-bold text-[#1A1A24] mb-4 flex items-center gap-2 border-b border-[#1A1A24]/10 pb-3">
              <User className="w-5 h-5 text-[#ff6200]" />
              Personal Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-[#1A1A24]">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1A1A24]/40" />
                  <input type="text" defaultValue="Expert Tutor" className="w-full pl-12 pr-4 py-3 rounded-xl border border-[#1A1A24]/15 focus:border-[#ff6200] focus:ring-2 focus:ring-[#ff6200]/20 outline-none transition-all bg-white font-medium text-[#1A1A24]" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-[#1A1A24]">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1A1A24]/40" />
                  <input type="tel" defaultValue="+91 9876543210" className="w-full pl-12 pr-4 py-3 rounded-xl border border-[#1A1A24]/15 focus:border-[#ff6200] focus:ring-2 focus:ring-[#ff6200]/20 outline-none transition-all bg-white font-medium text-[#1A1A24]" />
                </div>
              </div>
              <div className="space-y-1.5 md:col-span-2">
                <label className="text-sm font-bold text-[#1A1A24]">Bio / About Me</label>
                <div className="relative">
                  <AlignLeft className="absolute left-4 top-4 w-5 h-5 text-[#1A1A24]/40" />
                  <textarea 
                    rows={4} 
                    defaultValue="Passionate mathematics and computer science educator with 5+ years of experience helping students achieve top grades."
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-[#1A1A24]/15 focus:border-[#ff6200] focus:ring-2 focus:ring-[#ff6200]/20 outline-none transition-all bg-white font-medium text-[#1A1A24] resize-y" 
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Teaching Profile */}
          <div>
            <h2 className="text-lg font-bold text-[#1A1A24] mb-4 flex items-center gap-2 border-b border-[#1A1A24]/10 pb-3">
              <BookOpen className="w-5 h-5 text-[#4D148C]" />
              Teaching Profile
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5 md:col-span-2">
                <label className="text-sm font-bold text-[#1A1A24]">Subjects / Skills (Comma separated)</label>
                <div className="relative">
                  <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1A1A24]/40" />
                  <input type="text" defaultValue="Mathematics, Python, Data Science" className="w-full pl-12 pr-4 py-3 rounded-xl border border-[#1A1A24]/15 focus:border-[#ff6200] focus:ring-2 focus:ring-[#ff6200]/20 outline-none transition-all bg-white font-medium text-[#1A1A24]" />
                </div>
              </div>
              
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-[#1A1A24]">Languages Known</label>
                <div className="relative">
                  <Languages className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1A1A24]/40" />
                  <input type="text" defaultValue="English, Hindi, Marathi" className="w-full pl-12 pr-4 py-3 rounded-xl border border-[#1A1A24]/15 focus:border-[#ff6200] focus:ring-2 focus:ring-[#ff6200]/20 outline-none transition-all bg-white font-medium text-[#1A1A24]" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-bold text-[#1A1A24]">Hourly Rate (₹)</label>
                <div className="relative">
                  <Wallet className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1A1A24]/40" />
                  <input type="number" defaultValue="800" className="w-full pl-12 pr-4 py-3 rounded-xl border border-[#1A1A24]/15 focus:border-[#ff6200] focus:ring-2 focus:ring-[#ff6200]/20 outline-none transition-all bg-white font-medium text-[#1A1A24]" />
                </div>
              </div>

              <div className="space-y-1.5 md:col-span-2">
                <label className="text-sm font-bold text-[#1A1A24]">Location / Area</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1A1A24]/40" />
                  <input type="text" defaultValue="Andheri West, Mumbai" className="w-full pl-12 pr-4 py-3 rounded-xl border border-[#1A1A24]/15 focus:border-[#ff6200] focus:ring-2 focus:ring-[#ff6200]/20 outline-none transition-all bg-white font-medium text-[#1A1A24]" />
                </div>
              </div>
            </div>
          </div>

          {/* Submit Action */}
          <div className="pt-6 border-t border-[#1A1A24]/10 flex items-center justify-between">
            {isSaved ? (
              <div className="flex items-center gap-2 text-[#ff6200] font-bold text-sm">
                <CheckCircle2 className="w-5 h-5" />
                Profile saved successfully!
              </div>
            ) : <div></div>}
            
            <button 
              type="submit"
              className="inline-flex items-center gap-2 px-8 py-3.5 btn-coral rounded-xl font-bold shadow-lg active:scale-95"
            >
              <Save className="w-4 h-4" />
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
