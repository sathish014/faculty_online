import React from "react";
import Navbar from "../../components/landing/Navbar";
import Footer from "../../components/landing/Footer";
import { Search, MapPin, Star, Heart, MessageSquare, BookOpen, User, CheckCircle2 } from "lucide-react";

export default function SearchTutorsPage() {
  const tutors = [
    {
      name: "Sahil Laskar",
      isVerified: true,
      subjects: "OPOHYO OFOHV NONCVHF BHOYH HOHFOH",
      description: "Hi I am prachi currently doing my Ba. Spanish from Dseu and B.com hons from DU. I loved to explore myteaching journey with you. I am a quick learner and a very good communicator. Very smooth going withchilders as they prefer. I know how a childern can get the things easily. I prefer to have fun during classes through which a student ca...",
      experience: "3-5 years yrs - Ind...",
      rate: "₹1,000/hour",
      rating: 5,
      reviews: 0,
      image: "https://i.pravatar.cc/150?u=1",
    },
    {
      name: "Santanu Nandi",
      isVerified: false,
      subjects: "English",
      description: "Hi. I am Santanu Nandi currently doing my Ba. Spanish from Dseu and B.com hons from DU. I loved to explore myteaching journey with you. I am a quick learner and a very good communicator. Very smooth going withchilders as they prefer. I know how a childern can get the things easily. I prefer to have fun during classes through which a student ca...",
      experience: "5-10 years yrs - in...",
      rate: "₹1,000/hour",
      rating: 5,
      reviews: 2,
      image: "https://i.pravatar.cc/150?u=2",
    }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-[#f8f9fc]">
      <Navbar />

      {/* Hero Section */}
      <div
        className="relative pt-32 pb-24 px-4 flex flex-col items-center justify-center bg-slate-900"
        style={{
          backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
          Search Faculties Here
        </h1>

        {/* Search Bar in Hero */}
        <div className="w-full max-w-4xl bg-white p-2 rounded-full shadow-2xl flex flex-col md:flex-row gap-2">
          <div className="flex-1 flex items-center px-4 py-2 border-b md:border-b-0 md:border-r border-slate-200">
            <Search className="w-5 h-5 text-slate-400 mr-3" />
            <input
              type="text"
              placeholder="Search course here..."
              className="w-full focus:outline-none text-sm text-slate-700"
            />
          </div>
          <div className="flex-1 flex items-center px-4 py-2">
            <BookOpen className="w-5 h-5 text-slate-400 mr-3" />
            <select className="w-full focus:outline-none text-sm text-slate-700 bg-transparent cursor-pointer">
              <option>Select Category...</option>
              <option>Language</option>
              <option>Science</option>
              <option>Mathematics</option>
            </select>
          </div>
          <button className="bg-[#0a0f2c] text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-slate-800 transition-colors whitespace-nowrap">
            Find Tutor
          </button>
        </div>
      </div>

      <div className="flex-grow container-xl max-w-7xl mx-auto w-full px-4 pt-12 pb-24">
        <div className="flex flex-col lg:flex-row gap-8 pt-12">

          {/* Left Column - Main Content */}
          <div className="flex-1">

            {/* Top Header & Filters */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
              <h2 className="text-2xl font-bold text-slate-800">Available Mentors</h2>

              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-slate-50 font-medium">
                  <span className="w-4 h-3 bg-orange-500 rounded-[2px] block"></span> Location <span className="text-[10px]">▼</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-slate-50 font-medium">
                  Experience - All <span className="text-[10px]">▼</span>
                </button>
                <button className="px-4 py-2 bg-slate-100 text-slate-600 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors">
                  Reset Filters
                </button>
              </div>
            </div>

            {/* Secondary Filter Bar */}
            <div className="flex items-center gap-4 bg-slate-50 p-3 rounded-xl border border-slate-100 mb-8 overflow-x-auto whitespace-nowrap">
              <div className="flex items-center gap-2 text-slate-400 text-xs font-bold px-2 tracking-wider">
                <Search className="w-3.5 h-3.5" /> FILTER
              </div>
              <button className="flex items-center gap-2 px-4 py-1.5 bg-white border border-slate-200 rounded-md text-xs font-medium text-slate-700">
                India <span className="text-[10px] text-slate-400">▼</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-1.5 bg-white border border-slate-200 rounded-md text-xs font-medium text-slate-700">
                3+ Years <span className="text-[10px] text-slate-400">▼</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-1.5 bg-white border border-slate-200 rounded-md text-xs font-medium text-slate-700">
                Rates - All <span className="text-[10px] text-slate-400">▼</span>
              </button>
            </div>

            {/* Tutors List */}
            <div className="flex flex-col gap-6">
              {tutors.map((tutor, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-col md:flex-row gap-6 hover:shadow-md transition-shadow">

                  {/* Left: Avatar & Badges */}
                  <div className="flex flex-col items-center w-full md:w-40 flex-shrink-0">
                    <img src={tutor.image} alt={tutor.name} className="w-24 h-24 rounded-2xl object-cover mb-4 border border-slate-100 shadow-sm" />
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-md text-[11px] font-medium text-slate-600 w-full justify-center mb-3">
                      <span className="w-3 h-2 bg-orange-500 rounded-sm block"></span> {tutor.experience}
                    </div>
                    <button className="flex items-center justify-center gap-1.5 w-full py-1.5 border border-slate-200 rounded-md text-xs font-medium text-slate-600 hover:bg-slate-50 transition-colors">
                      <Search className="w-3 h-3" /> Resources
                    </button>
                  </div>

                  {/* Middle: Details */}
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold text-slate-900">{tutor.name}</h3>
                        {tutor.isVerified && (
                          <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded uppercase tracking-wider">
                            <CheckCircle2 className="w-3 h-3" /> Verified
                          </span>
                        )}
                      </div>

                      {/* Mobile view rate (hidden on desktop) */}
                      <div className="md:hidden text-right">
                        <div className="text-lg font-bold text-slate-900">{tutor.rate}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">
                      <span className="w-3 h-2 bg-orange-500 rounded-sm block"></span> {tutor.subjects}
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-6">
                      {tutor.description}
                    </p>

                    <div className="mt-auto">
                      <button className="flex items-center gap-2 px-4 py-2 bg-slate-50 text-slate-700 text-xs font-bold rounded-lg border border-slate-200 hover:bg-slate-100 transition-colors">
                        <User className="w-3.5 h-3.5" /> Book Trial Lesson
                      </button>
                    </div>
                  </div>

                  {/* Right: Rate & Actions (hidden on mobile, visible on md+) */}
                  <div className="hidden md:flex flex-col items-end justify-between border-l border-slate-100 pl-6 w-48">
                    <div className="text-right">
                      <div className="text-xl font-bold text-slate-900">{tutor.rate}</div>
                      <div className="flex items-center justify-end gap-1 mt-1 text-sm">
                        <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                        <span className="font-bold text-slate-700">{tutor.rating}</span>
                        <span className="text-slate-400">({tutor.reviews} reviews)</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 w-full mt-6">
                      <button className="flex-1 flex items-center justify-center gap-2 py-1.5 px-1.5 bg-red-500 text-white rounded-lg text-sm font-bold hover:bg-red-600 transition-colors shadow-sm shadow-red-500/20">
                        <MessageSquare className="w-4 h-4" /> Send Message
                      </button>
                      <button className="w-10 h-10 flex items-center justify-center bg-slate-50 border border-slate-200 text-slate-400 rounded-lg hover:text-red-500 hover:bg-red-50 transition-colors">
                        <Heart className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Mobile Actions */}
                  <div className="md:hidden flex items-center gap-2 w-full pt-4 border-t border-slate-100">
                    <button className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-red-500 text-white rounded-lg text-sm font-bold hover:bg-red-600 transition-colors shadow-sm shadow-red-500/20">
                      <MessageSquare className="w-4 h-4" /> Send Message
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center bg-slate-50 border border-slate-200 text-slate-400 rounded-lg hover:text-red-500 hover:bg-red-50 transition-colors">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>

                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-10">
              <button className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-slate-700">Prev</button>
              <button className="w-8 h-8 flex items-center justify-center rounded bg-[#0a0f2c] text-white text-sm font-bold shadow-md">1</button>
              <button className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-slate-700">Next</button>
            </div>

          </div>

          {/* Right Column - Sidebar Widgets */}
          <div className="w-full lg:w-80 flex-shrink-0 flex flex-col gap-6">

            {/* Ad Widget 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 relative group cursor-pointer">
              <div className="aspect-[4/3] bg-slate-900 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 to-slate-900/80 z-10"></div>
                <div className="absolute inset-0 z-20 p-6 flex flex-col items-center justify-center text-center">
                  <h3 className="text-white font-bold text-2xl mb-1">Get Your</h3>
                  <h3 className="text-red-500 font-black text-3xl mb-1">WEBSITE</h3>
                  <p className="text-white/80 text-xs mb-4">at affordable price</p>
                  <button className="bg-red-500 text-white text-xs font-bold px-4 py-1.5 rounded-full mt-auto">CONTACT US</button>
                </div>
              </div>
            </div>

            {/* Ad Widget 2 */}
            <div className="bg-blue-600 rounded-2xl overflow-hidden shadow-sm border border-slate-200 relative group cursor-pointer">
              <div className="aspect-[4/3] relative">
                <div className="absolute inset-0 z-20 p-6 flex flex-col items-center justify-center text-center">
                  <p className="text-white/90 text-xs font-medium uppercase tracking-wider mb-2">For 21 days Manifest</p>
                  <h3 className="text-white font-black text-2xl mb-2 leading-tight">INSPIRATION<br /><span className="text-yellow-400">FOR JOYFUL LIVING</span></h3>
                  <button className="bg-red-500 text-white text-xs font-bold px-6 py-2 rounded-full mt-auto shadow-lg shadow-red-500/30">JOIN NOW</button>
                </div>
              </div>
            </div>

            {/* Ad Widget 3 */}
            <div className="bg-[#0a0f2c] rounded-2xl overflow-hidden shadow-sm border border-slate-200 relative group cursor-pointer">
              <div className="aspect-[4/3] relative">
                <div className="absolute inset-0 z-20 p-6 flex flex-col justify-start">
                  <div className="bg-yellow-400 text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded inline-block mb-3 w-max">Faculties Online</div>
                  <h3 className="text-white font-black text-xl mb-4 leading-snug">GROW YOUR SKILL WITH<br />OUR TOP EXPERTS</h3>
                  <button className="bg-white text-slate-900 text-[10px] font-bold px-4 py-1.5 rounded-full w-max">ENROLL NOW</button>
                </div>
              </div>
            </div>

            {/* Join As Faculty Widget */}
            <div className="bg-indigo-50/50 rounded-2xl p-6 shadow-sm border border-indigo-100 flex flex-col items-start mt-4 mb-4">
              <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-2">Join As Faculty</h3>
              <p className="text-xs text-slate-500 font-medium leading-relaxed mb-6">
                SHARE YOUR KNOWLEDGE WITH THOUSANDS OF STUDENTS WORLD-WIDE.
              </p>
              <button className="bg-[#0a0f2c] text-white text-xs font-bold px-6 py-2.5 rounded-lg hover:bg-slate-800 transition-colors w-full">
                APPLY NOW
              </button>
            </div>

          </div>

        </div>
      </div>
      <Footer />
    </main>
  );
}
