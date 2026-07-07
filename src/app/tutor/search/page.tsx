import React from "react";
import Navbar from "../../components/landing/Navbar";
import Footer from "../../components/landing/Footer";
import { Search, MapPin, Star, Heart, MessageSquare, BookOpen, User, CheckCircle2, Sparkles } from "lucide-react";

export default function SearchTutorsPage() {
  const tutors = [
    {
      name: "Sahil Laskar",
      isVerified: true,
      subjects: "English, Spanish, Business Communication",
      description: "Hi I am currently doing my Ba. Spanish from Dseu and B.com hons from DU. I love to explore my teaching journey with you. I am a quick learner and a very good communicator. Very smooth going with children as they prefer...",
      experience: "3-5 years exp",
      rate: "₹1,000/hr",
      rating: 5.0,
      reviews: 14,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=250&auto=format&fit=crop",
    },
    {
      name: "Santanu Nandi",
      isVerified: true,
      subjects: "Mathematics, Physics, JEE Prep",
      description: "Passionate educator with over 7 years of experience guiding students toward top competitive exams. I focus on conceptual clarity and problem-solving strategies tailored to each student's pace...",
      experience: "5-10 years exp",
      rate: "₹1,200/hr",
      rating: 4.9,
      reviews: 28,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250&auto=format&fit=crop",
    }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative pt-36 pb-20 px-4 bg-white border-b border-[#1A1A24]/5">
        <div className="max-w-5xl mx-auto text-center space-y-6 animate-fade-up">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-[#4D148C]/15 text-[#4D148C] border border-[#4D148C]/30 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Verified Faculty Directory
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-[#1A1A24] tracking-tight">
            Find Your Perfect <span className="text-[#ff6200]">Tutor</span>
          </h1>

          {/* Search Bar in Hero */}
          <div className="w-full max-w-3xl mx-auto bg-white/90 p-2.5 rounded-3xl shadow-xl border border-[#1A1A24]/10 flex flex-col md:flex-row gap-2.5">
            <div className="flex-1 flex items-center px-4 py-2 border-b md:border-b-0 md:border-r border-[#1A1A24]/10">
              <Search className="w-5 h-5 text-[#1A1A24]/40 mr-3 flex-shrink-0" />
              <input
                type="text"
                placeholder="Search subject, grade, or tutor name..."
                className="w-full focus:outline-none text-sm font-medium text-[#1A1A24] bg-transparent"
              />
            </div>
            <div className="flex-1 flex items-center px-4 py-2">
              <BookOpen className="w-5 h-5 text-[#1A1A24]/40 mr-3 flex-shrink-0" />
              <select className="w-full focus:outline-none text-sm font-bold text-[#1A1A24] bg-transparent cursor-pointer">
                <option>All Categories</option>
                <option>Languages</option>
                <option>Science & Tech</option>
                <option>Mathematics</option>
              </select>
            </div>
            <button className="btn-coral px-8 py-3.5 rounded-2xl text-sm font-bold shadow-lg transition-all active:scale-95 whitespace-nowrap">
              Find Tutors
            </button>
          </div>
        </div>
      </div>

      <div className="flex-grow max-w-7xl mx-auto w-full px-4 pt-8 pb-24">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Left Column - Main Content */}
          <div className="flex-1">

            {/* Top Header & Filters */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
              <div>
                <h2 className="text-2xl font-black text-[#1A1A24]">Available Mentors</h2>
                <p className="text-xs font-bold text-[#1A1A24]/60 mt-0.5">Showing verified educators available for booking</p>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                <button className="flex items-center gap-2 px-4 py-2 bg-white/80 border border-[#1A1A24]/10 rounded-xl text-xs font-bold text-[#1A1A24] hover:border-[#ff6200] transition-colors">
                  <MapPin className="w-3.5 h-3.5 text-[#ff6200]" /> Location
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-white/80 border border-[#1A1A24]/10 rounded-xl text-xs font-bold text-[#1A1A24] hover:border-[#4D148C] transition-colors">
                  Experience: All
                </button>
                <button className="px-3.5 py-2 bg-[#1A1A24]/5 text-[#1A1A24]/70 rounded-xl text-xs font-extrabold hover:bg-[#1A1A24]/10 hover:text-[#1A1A24] transition-colors">
                  Reset
                </button>
              </div>
            </div>

            {/* Secondary Filter Bar */}
            <div className="flex items-center gap-3 bg-white/60 p-3 rounded-2xl border border-[#1A1A24]/10 mb-8 overflow-x-auto custom-scrollbar">
              <span className="flex items-center gap-1.5 text-[#1A1A24] text-xs font-black px-2 tracking-wider uppercase">
                Quick Sort:
              </span>
              {["Highest Rated", "Online Available", "Home Tuition", "₹500 - ₹1500/hr"].map((tag, i) => (
                <button key={i} className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  i === 0 ? "bg-[#4D148C] text-white shadow-sm" : "bg-white/80 border border-[#1A1A24]/10 text-[#1A1A24]/80 hover:border-[#ff6200]"
                }`}>
                  {tag}
                </button>
              ))}
            </div>

            {/* Tutors List */}
            <div className="flex flex-col gap-6">
              {tutors.map((tutor, idx) => (
                <div key={idx} className="card-minimal bg-white/80 rounded-3xl p-6 border border-[#1A1A24]/10 flex flex-col md:flex-row gap-6 hover:border-[#4D148C]/30 hover:shadow-lg transition-all group">

                  {/* Left: Avatar & Badges */}
                  <div className="flex flex-col items-center w-full md:w-44 flex-shrink-0">
                    <img src={tutor.image} alt={tutor.name} className="w-28 h-28 rounded-2xl object-cover mb-4 border-2 border-[#ff6200]/20 shadow-md group-hover:scale-105 transition-transform" />
                    <div className="flex items-center justify-center gap-1.5 px-3 py-1.5 bg-[#ff6200]/10 border border-[#ff6200]/20 rounded-xl text-xs font-extrabold text-[#ff6200] w-full mb-2">
                      {tutor.experience}
                    </div>
                  </div>

                  {/* Middle: Details */}
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-black text-[#1A1A24] group-hover:text-[#4D148C] transition-colors">{tutor.name}</h3>
                        {tutor.isVerified && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-extrabold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-full uppercase tracking-wider border border-emerald-300/50">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Verified
                          </span>
                        )}
                      </div>

                      {/* Mobile view rate */}
                      <div className="md:hidden text-right">
                        <div className="text-lg font-black text-[#1A1A24]">{tutor.rate}</div>
                      </div>
                    </div>

                    <div className="text-xs font-extrabold text-[#ff6200] uppercase tracking-wide mb-3">
                      {tutor.subjects}
                    </div>

                    <p className="text-sm font-medium text-[#1A1A24]/70 leading-relaxed line-clamp-3 mb-6">
                      {tutor.description}
                    </p>

                    <div className="mt-auto flex flex-wrap items-center gap-3 pt-4 border-t border-[#1A1A24]/10">
                      <button className="flex items-center gap-2 px-4 py-2.5 bg-[#4D148C]/10 text-[#4D148C] text-xs font-extrabold rounded-xl hover:bg-[#4D148C] hover:text-white transition-all">
                        <User className="w-3.5 h-3.5" /> Book Trial Lesson
                      </button>
                    </div>
                  </div>

                  {/* Right: Rate & Actions */}
                  <div className="hidden md:flex flex-col items-end justify-between border-l border-[#1A1A24]/10 pl-6 w-52">
                    <div className="text-right">
                      <div className="text-2xl font-black text-[#1A1A24]">{tutor.rate}</div>
                      <div className="flex items-center justify-end gap-1 mt-1 text-sm">
                        <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                        <span className="font-extrabold text-[#1A1A24]">{tutor.rating.toFixed(1)}</span>
                        <span className="text-[#1A1A24]/50 text-xs font-bold">({tutor.reviews})</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 w-full mt-6">
                      <button className="flex-1 flex items-center justify-center gap-2 py-2.5 px-2 btn-coral rounded-xl text-xs font-bold shadow-md active:scale-95">
                        <MessageSquare className="w-3.5 h-3.5" /> Message
                      </button>
                      <button className="w-10 h-10 flex items-center justify-center bg-[#1A1A24]/5 border border-[#1A1A24]/10 text-[#1A1A24]/60 rounded-xl hover:text-[#ff6200] hover:border-[#ff6200]/30 hover:bg-[#ff6200]/10 transition-colors">
                        <Heart className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Mobile Actions */}
                  <div className="md:hidden flex items-center gap-2 w-full pt-4 border-t border-[#1A1A24]/10">
                    <button className="flex-1 flex items-center justify-center gap-2 py-3 btn-coral rounded-xl text-xs font-bold shadow-md">
                      <MessageSquare className="w-4 h-4" /> Send Message
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center bg-[#1A1A24]/5 border border-[#1A1A24]/10 text-[#1A1A24]/60 rounded-xl hover:text-[#ff6200]">
                      <Heart className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-12">
              <button className="px-4 py-2 text-sm font-bold text-[#1A1A24]/40 hover:text-[#1A1A24]">Prev</button>
              <button className="w-9 h-9 flex items-center justify-center rounded-xl bg-[#4D148C] text-white text-sm font-black shadow-md shadow-[#4D148C]/20">1</button>
              <button className="px-4 py-2 text-sm font-bold text-[#1A1A24]/40 hover:text-[#1A1A24]">Next</button>
            </div>

          </div>

          {/* Right Column - Sidebar Widgets */}
          <div className="w-full lg:w-80 flex-shrink-0 flex flex-col gap-6">

            {/* Promo Widget 1 */}
            <div 
              className="rounded-3xl p-6 text-white shadow-xl relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, #4D148C 0%, #2e0854 100%)" }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff6200]/20 rounded-full blur-2xl -mr-10 -mt-10"></div>
              <div className="relative z-10 text-center space-y-3">
                <span className="inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#ff6200] text-white">
                  Exclusive Offer
                </span>
                <h3 className="font-black text-2xl leading-tight">Build Your Custom Profile Page</h3>
                <p className="text-white/80 text-xs font-medium leading-relaxed">Stand out to top tier students with verified credentials & intro videos.</p>
                <button className="w-full py-3 bg-white text-[#4D148C] font-extrabold rounded-xl text-xs hover:bg-gray-100 transition-colors shadow-md">
                  Upgrade Today
                </button>
              </div>
            </div>

            {/* Join As Faculty Widget */}
            <div className="card-minimal bg-white/80 rounded-3xl p-6 border border-[#1A1A24]/10 space-y-3">
              <h3 className="text-sm font-black text-[#1A1A24] uppercase tracking-wider">Join As Faculty</h3>
              <p className="text-xs text-[#1A1A24]/70 font-medium leading-relaxed">
                Share your knowledge with thousands of eager students worldwide and set your own teaching rates.
              </p>
              <button className="w-full py-3 btn-coral rounded-xl text-xs font-bold shadow-md active:scale-95">
                Apply Now &rarr;
              </button>
            </div>

          </div>

        </div>
      </div>
      <Footer />
    </main>
  );
}
