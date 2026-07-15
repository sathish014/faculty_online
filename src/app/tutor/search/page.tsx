"use client";

import React, { useState, useMemo } from "react";
import Navbar from "../../components/landing/Navbar";
import Footer from "../../components/landing/Footer";
import { 
  Search, MapPin, Star, Heart, MessageSquare, BookOpen, User, 
  CheckCircle2, Sparkles, X, Calendar, Clock, Send, Check, 
  Filter, ArrowRight, ChevronDown, Award, ShieldCheck, 
  Briefcase, DollarSign, Video, Home, Globe, ThumbsUp, CheckCircle, RefreshCw 
} from "lucide-react";

export interface Tutor {
  id: number;
  name: string;
  isVerified: boolean;
  subjects: string;
  description: string;
  experience: string;
  rate: string;
  rateNumber: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  onlineAvailable: boolean;
  homeTuition: boolean;
  location: string;
}

export default function SearchTutorsPage() {
  // --- Tutors Dataset ---
  const initialTutors: Tutor[] = [
    {
      id: 1,
      name: "Sahil Laskar",
      isVerified: true,
      subjects: "English, Spanish, Business Communication",
      description: "Hi I am currently doing my Ba. Spanish from Dseu and B.com hons from DU. I love to explore my teaching journey with you. I am a quick learner and a very good communicator. Very smooth going with children as they prefer...",
      experience: "3-5 years exp",
      rate: "₹1,000/hr",
      rateNumber: 1000,
      rating: 5.0,
      reviews: 14,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=250&auto=format&fit=crop",
      category: "Languages",
      onlineAvailable: true,
      homeTuition: false,
      location: "Delhi",
    },
    {
      id: 2,
      name: "Santanu Nandi",
      isVerified: true,
      subjects: "Mathematics, Physics, JEE Prep",
      description: "Passionate educator with over 7 years of experience guiding students toward top competitive exams. I focus on conceptual clarity and problem-solving strategies tailored to each student's pace and learning goals...",
      experience: "5-10 years exp",
      rate: "₹1,200/hr",
      rateNumber: 1200,
      rating: 4.9,
      reviews: 28,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250&auto=format&fit=crop",
      category: "Mathematics",
      onlineAvailable: true,
      homeTuition: true,
      location: "Kolkata",
    },
    {
      id: 3,
      name: "Ananya Sharma",
      isVerified: true,
      subjects: "React, Node.js, Python & Fullstack Coding",
      description: "Senior Software Engineer turned full-time coding mentor. I teach practical software development, data structures, algorithms, and web mastery with hands-on live coding projects and real-world mentorship...",
      experience: "5-10 years exp",
      rate: "₹1,400/hr",
      rateNumber: 1400,
      rating: 5.0,
      reviews: 42,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=250&auto=format&fit=crop",
      category: "Science & Tech",
      onlineAvailable: true,
      homeTuition: false,
      location: "Bengaluru",
    },
    {
      id: 4,
      name: "Dr. Vikram Verma",
      isVerified: true,
      subjects: "Organic Chemistry, NEET Biology, Science",
      description: "Ph.D in Biochemical Sciences from IIT Delhi with 12+ years preparing medical aspirants. Interactive diagrams, custom mnemonics, and weekly diagnostic testing to guarantee 99th percentile score jumps...",
      experience: "10+ years exp",
      rate: "₹1,500/hr",
      rateNumber: 1500,
      rating: 4.8,
      reviews: 65,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=250&auto=format&fit=crop",
      category: "Science & Tech",
      onlineAvailable: true,
      homeTuition: true,
      location: "Delhi",
    },
    {
      id: 5,
      name: "Priya Mukherjee",
      isVerified: true,
      subjects: "French, German & International IELTS Mastery",
      description: "Certified Polyglot and Goethe-Institut certified tutor. I make language acquisition effortless and conversational through immersive storytelling, phonetic drills, and cultural immersion exercises...",
      experience: "1-3 years exp",
      rate: "₹800/hr",
      rateNumber: 800,
      rating: 4.9,
      reviews: 19,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=250&auto=format&fit=crop",
      category: "Languages",
      onlineAvailable: true,
      homeTuition: true,
      location: "Mumbai",
    },
    {
      id: 6,
      name: "Rohan Kapoor",
      isVerified: true,
      subjects: "Economics, Financial Accounting & CA Inter",
      description: "Chartered Accountant and high school gold medalist specializing in CBSE/ICSE Economics, Accounts, and Corporate Finance. I simplify complex balance sheets and economic theories with daily real-life examples...",
      experience: "3-5 years exp",
      rate: "₹900/hr",
      rateNumber: 900,
      rating: 4.7,
      reviews: 21,
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=250&auto=format&fit=crop",
      category: "Mathematics",
      onlineAvailable: false,
      homeTuition: true,
      location: "Hyderabad",
    }
  ];

  // --- Filter & Search States ---
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [quickSort, setQuickSort] = useState("Highest Rated");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState("Experience: All");
  const [showExperienceDropdown, setShowExperienceDropdown] = useState(false);
  const [showOnlyLiked, setShowOnlyLiked] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const tutorsPerPage = 4;

  // --- Liked / Saved Tutors State ---
  const [likedTutors, setLikedTutors] = useState<Record<number, boolean>>({
    1: false,
    2: true, // Example pre-saved
  });

  // --- Toast Notification State ---
  const [toast, setToast] = useState<string | null>(null);
  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(null), 3500);
  };

  const toggleLike = (tutor: Tutor, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setLikedTutors((prev) => {
      const isLiked = !prev[tutor.id];
      if (isLiked) {
        showToast(`❤️ Added ${tutor.name} to your Saved Tutors!`);
      } else {
        showToast(`Removed ${tutor.name} from Saved Tutors`);
      }
      return { ...prev, [tutor.id]: isLiked };
    });
  };

  // --- Modal States ---
  // 1. Book Trial Lesson Modal
  const [activeBookingTutor, setActiveBookingTutor] = useState<Tutor | null>(null);
  const [bookingStep, setBookingStep] = useState(1);
  const [bookingSubject, setBookingSubject] = useState("");
  const [bookingDate, setBookingDate] = useState("Today");
  const [bookingTime, setBookingTime] = useState("05:00 PM - 06:00 PM");
  const [bookingName, setBookingName] = useState("");
  const [bookingPhone, setBookingPhone] = useState("");
  const [bookingNotes, setBookingNotes] = useState("");
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleOpenBooking = (tutor: Tutor) => {
    setActiveBookingTutor(tutor);
    setBookingStep(1);
    const subjectsList = tutor.subjects.split(",").map((s) => s.trim());
    setBookingSubject(subjectsList[0] || tutor.subjects);
    setBookingSuccess(false);
  };

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
    showToast(`🎉 Trial Lesson successfully booked with ${activeBookingTutor?.name}!`);
  };

  // 2. Live Message / Chat Modal
  const [activeChatTutor, setActiveChatTutor] = useState<Tutor | null>(null);
  const [chatMessages, setChatMessages] = useState<{ sender: "user" | "tutor"; text: string; time: string }[]>([]);
  const [chatInput, setChatInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleOpenChat = (tutor: Tutor) => {
    setActiveChatTutor(tutor);
    setChatMessages([
      {
        sender: "tutor",
        text: `Hello! 👋 I am ${tutor.name}. Thank you for viewing my profile! How can I assist you with your ${tutor.subjects.split(",")[0]?.trim() || "studies"} preparation?`,
        time: "Just now",
      },
    ]);
    setChatInput("");
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || chatInput;
    if (!text.trim() || !activeChatTutor) return;

    const userMsg = { sender: "user" as const, text, time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) };
    setChatMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setChatInput("");

    setIsTyping(true);
    setTimeout(() => {
      const tutorReplies = [
        `That sounds great! I have slot openings this week for live 1-on-1 sessions. Would you like to schedule a free 30-min diagnostic trial?`,
        `I tailor my curriculum exactly to each student's current level. I can share comprehensive study notes and practice problem sets for this topic!`,
        `Absolutely! I offer both online HD video sessions and home tuition depending on location. Let's make sure you hit top grades this semester!`,
      ];
      const randomReply = tutorReplies[Math.floor(Math.random() * tutorReplies.length)];
      setChatMessages((prev) => [
        ...prev,
        {
          sender: "tutor",
          text: randomReply,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
      setIsTyping(false);
    }, 1200);
  };

  // 3. Upgrade Today Modal
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("annual");
  const [upgradeSuccess, setUpgradeSuccess] = useState(false);

  const handleConfirmUpgrade = () => {
    setUpgradeSuccess(true);
    showToast("✨ Congratulations! Your Pro Faculty Custom Profile is now live & verified.");
  };

  // 4. Join As Faculty Application Modal
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [joinStep, setJoinStep] = useState(1);
  const [joinName, setJoinName] = useState("");
  const [joinEmail, setJoinEmail] = useState("");
  const [joinQual, setJoinQual] = useState("Master's Degree / Ph.D");
  const [joinSubjects, setJoinSubjects] = useState("Mathematics & Physics");
  const [joinRate, setJoinRate] = useState("1200");
  const [joinMode, setJoinMode] = useState("Online & Home Tuition");
  const [joinSuccess, setJoinSuccess] = useState(false);

  const handleConfirmJoin = (e: React.FormEvent) => {
    e.preventDefault();
    setJoinSuccess(true);
    showToast("🚀 Faculty application submitted! Fast-track review is underway.");
  };

  // --- Filtering & Sorting Logic ---
  const filteredTutors = useMemo(() => {
    return initialTutors
      .filter((tutor) => {
        // Search filter
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchName = tutor.name.toLowerCase().includes(q);
          const matchSub = tutor.subjects.toLowerCase().includes(q);
          const matchDesc = tutor.description.toLowerCase().includes(q);
          const matchLoc = tutor.location.toLowerCase().includes(q);
          if (!matchName && !matchSub && !matchDesc && !matchLoc) return false;
        }

        // Category filter
        if (selectedCategory !== "All Categories" && tutor.category !== selectedCategory) {
          return false;
        }

        // Location filter
        if (selectedLocation !== "All Locations" && tutor.location !== selectedLocation) {
          return false;
        }

        // Experience filter
        if (selectedExperience !== "Experience: All" && tutor.experience !== selectedExperience) {
          return false;
        }

        // Quick Sort filters (when used as filter)
        if (quickSort === "Online Available" && !tutor.onlineAvailable) {
          return false;
        }
        if (quickSort === "Home Tuition" && !tutor.homeTuition) {
          return false;
        }
        if (quickSort === "₹500 - ₹1500/hr" && (tutor.rateNumber < 500 || tutor.rateNumber > 1500)) {
          return false;
        }

        // Saved / Liked filter
        if (showOnlyLiked && !likedTutors[tutor.id]) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (quickSort === "Highest Rated") {
          return b.rating - a.rating || b.reviews - a.reviews;
        }
        return 0;
      });
  }, [searchQuery, selectedCategory, selectedLocation, selectedExperience, quickSort, showOnlyLiked, likedTutors]);

  const totalTutorPages = Math.ceil(filteredTutors.length / tutorsPerPage);
  const paginatedTutors = useMemo(() => {
    return filteredTutors.slice((currentPage - 1) * tutorsPerPage, currentPage * tutorsPerPage);
  }, [filteredTutors, currentPage, tutorsPerPage]);

  const handleTutorPageChange = (newPage: number) => {
    setCurrentPage(newPage);
    const el = document.getElementById("available-mentors-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 380, behavior: "smooth" });
    }
  };

  const handleResetAll = () => {
    setSearchQuery("");
    setSelectedCategory("All Categories");
    setQuickSort("Highest Rated");
    setSelectedLocation("All Locations");
    setSelectedExperience("Experience: All");
    setShowOnlyLiked(false);
    setCurrentPage(1);
    showToast("🔄 Reset all search filters to default");
  };

  const handleHeroSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const section = document.getElementById("available-mentors-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-white relative">
      <Navbar />

      {/* Floating Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 animate-fade-up bg-[#1A1A24] text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-white/10 flex items-center gap-3">
          <Sparkles className="w-4 h-4 text-[#ff6200] flex-shrink-0" />
          <span className="text-xs font-bold">{toast}</span>
          <button onClick={() => setToast(null)} className="text-white/60 hover:text-white ml-2">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

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
          <form onSubmit={handleHeroSearchSubmit} className="w-full max-w-3xl mx-auto bg-white/90 p-2.5 rounded-3xl shadow-xl border border-[#1A1A24]/10 flex flex-col md:flex-row gap-2.5">
            <div className="flex-1 flex items-center px-4 py-2 border-b md:border-b-0 md:border-r border-[#1A1A24]/10">
              <Search className="w-5 h-5 text-[#1A1A24]/40 mr-3 flex-shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search subject, grade, or tutor name..."
                className="w-full focus:outline-none text-sm font-medium text-[#1A1A24] bg-transparent"
              />
              {searchQuery && (
                <button type="button" onClick={() => setSearchQuery("")} className="text-[#1A1A24]/40 hover:text-[#1A1A24]">
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            <div className="flex-1 flex items-center px-4 py-2">
              <BookOpen className="w-5 h-5 text-[#1A1A24]/40 mr-3 flex-shrink-0" />
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full focus:outline-none text-sm font-bold text-[#1A1A24] bg-transparent cursor-pointer"
              >
                <option value="All Categories">All Categories</option>
                <option value="Languages">Languages</option>
                <option value="Science & Tech">Science & Tech</option>
                <option value="Mathematics">Mathematics</option>
              </select>
            </div>
            <button type="submit" className="btn-coral px-8 py-3.5 rounded-2xl text-sm font-bold shadow-lg transition-all active:scale-95 whitespace-nowrap">
              Find Tutors
            </button>
          </form>
        </div>
      </div>

      {/* Main Content Section */}
      <div id="available-mentors-section" className="flex-grow max-w-7xl mx-auto w-full px-4 pt-8 pb-24">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Left Column - Main Content */}
          <div className="flex-1">

            {/* Top Header & Filters */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
              <div>
                <h2 className="text-2xl font-black text-[#1A1A24] flex items-center gap-2">
                  Available Mentors
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#4D148C]/10 text-[#4D148C] font-extrabold">
                    {filteredTutors.length} Found
                  </span>
                </h2>
                <p className="text-xs font-bold text-[#1A1A24]/60 mt-0.5">Showing verified educators available for booking</p>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                {/* Location Filter Dropdown */}
                <div className="relative">
                  <button 
                    onClick={() => { setShowLocationDropdown(!showLocationDropdown); setShowExperienceDropdown(false); }}
                    className={`flex items-center gap-2 px-4 py-2 bg-white/80 border rounded-xl text-xs font-bold transition-colors ${
                      selectedLocation !== "All Locations" ? "border-[#ff6200] text-[#ff6200] bg-[#ff6200]/5" : "border-[#1A1A24]/10 text-[#1A1A24] hover:border-[#ff6200]"
                    }`}
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#ff6200]" /> 
                    {selectedLocation === "All Locations" ? "Location" : selectedLocation}
                    <ChevronDown className="w-3 h-3 ml-1" />
                  </button>
                  {showLocationDropdown && (
                    <div className="absolute right-0 mt-2 w-44 bg-white rounded-2xl shadow-2xl border border-[#1A1A24]/10 py-2 z-30 animate-fade-up">
                      {["All Locations", "Delhi", "Mumbai", "Bengaluru", "Kolkata", "Hyderabad"].map((loc) => (
                        <button
                          key={loc}
                          onClick={() => { setSelectedLocation(loc); setShowLocationDropdown(false); }}
                          className={`w-full text-left px-4 py-2 text-xs font-bold hover:bg-[#1A1A24]/5 transition-colors ${selectedLocation === loc ? "text-[#ff6200] bg-[#ff6200]/5" : "text-[#1A1A24]"}`}
                        >
                          {loc}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Experience Filter Dropdown */}
                <div className="relative">
                  <button 
                    onClick={() => { setShowExperienceDropdown(!showExperienceDropdown); setShowLocationDropdown(false); }}
                    className={`flex items-center gap-2 px-4 py-2 bg-white/80 border rounded-xl text-xs font-bold transition-colors ${
                      selectedExperience !== "Experience: All" ? "border-[#4D148C] text-[#4D148C] bg-[#4D148C]/5" : "border-[#1A1A24]/10 text-[#1A1A24] hover:border-[#4D148C]"
                    }`}
                  >
                    <Award className="w-3.5 h-3.5 text-[#4D148C]" /> 
                    {selectedExperience}
                    <ChevronDown className="w-3 h-3 ml-1" />
                  </button>
                  {showExperienceDropdown && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-2xl border border-[#1A1A24]/10 py-2 z-30 animate-fade-up">
                      {["Experience: All", "1-3 years exp", "3-5 years exp", "5-10 years exp", "10+ years exp"].map((exp) => (
                        <button
                          key={exp}
                          onClick={() => { setSelectedExperience(exp); setShowExperienceDropdown(false); }}
                          className={`w-full text-left px-4 py-2 text-xs font-bold hover:bg-[#1A1A24]/5 transition-colors ${selectedExperience === exp ? "text-[#4D148C] bg-[#4D148C]/5" : "text-[#1A1A24]"}`}
                        >
                          {exp}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Saved Tutors Toggle Button */}
                <button 
                  onClick={() => setShowOnlyLiked(!showOnlyLiked)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-extrabold border transition-all ${
                    showOnlyLiked 
                      ? "bg-red-500 text-white border-red-500 shadow-md" 
                      : "bg-white/80 border-[#1A1A24]/10 text-[#1A1A24]/80 hover:border-red-400"
                  }`}
                >
                  <Heart className={`w-3.5 h-3.5 ${showOnlyLiked ? "fill-white text-white" : "text-red-500"}`} />
                  Saved ({Object.values(likedTutors).filter(Boolean).length})
                </button>

                {/* Reset Button */}
                <button 
                  onClick={handleResetAll}
                  className="flex items-center gap-1.5 px-3.5 py-2 bg-[#1A1A24]/5 text-[#1A1A24]/70 rounded-xl text-xs font-extrabold hover:bg-[#1A1A24]/10 hover:text-[#1A1A24] transition-colors"
                  title="Reset all filters"
                >
                  <RefreshCw className="w-3.5 h-3.5" /> Reset
                </button>
              </div>
            </div>

            {/* Secondary Filter Bar - Quick Sort */}
            <div className="flex items-center gap-2.5 bg-white/60 p-3 rounded-2xl border border-[#1A1A24]/10 mb-8 overflow-x-auto custom-scrollbar">
              <span className="flex items-center gap-1.5 text-[#1A1A24] text-xs font-black px-2 tracking-wider uppercase flex-shrink-0">
                Quick Sort:
              </span>
              {["Highest Rated", "Online Available", "Home Tuition", "₹500 - ₹1500/hr"].map((tag, i) => {
                const isActive = quickSort === tag;
                return (
                  <button 
                    key={i} 
                    onClick={() => {
                      setQuickSort(isActive ? "All" : tag);
                      showToast(`Sorted by: ${isActive ? "All" : tag}`);
                    }}
                    className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                      isActive 
                        ? "bg-[#4D148C] text-white shadow-md scale-[1.02]" 
                        : "bg-white/80 border border-[#1A1A24]/10 text-[#1A1A24]/80 hover:border-[#ff6200] hover:bg-white"
                    }`}
                  >
                    {tag === "Highest Rated" && <Star className={`w-3.5 h-3.5 ${isActive ? "fill-white text-white" : "text-amber-500 fill-amber-500"}`} />}
                    {tag === "Online Available" && <Video className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-emerald-500"}`} />}
                    {tag === "Home Tuition" && <Home className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-[#4D148C]"}`} />}
                    {tag === "₹500 - ₹1500/hr" && <DollarSign className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-[#ff6200]"}`} />}
                    {tag}
                  </button>
                );
              })}
            </div>

            {/* Tutors List */}
            {filteredTutors.length === 0 ? (
              <div className="card-minimal bg-white/80 rounded-3xl p-12 border border-[#1A1A24]/10 text-center space-y-4 my-6">
                <div className="w-16 h-16 bg-[#ff6200]/10 rounded-2xl flex items-center justify-center mx-auto text-[#ff6200]">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-[#1A1A24]">No Mentors Found matching your filters</h3>
                <p className="text-sm font-medium text-[#1A1A24]/60 max-w-md mx-auto">
                  We couldn&apos;t find any educators matching your exact criteria. Try resetting your search filters or exploring all categories.
                </p>
                <button 
                  onClick={handleResetAll}
                  className="btn-coral px-6 py-2.5 rounded-xl text-xs font-bold shadow-md inline-flex items-center gap-2"
                >
                  <RefreshCw className="w-4 h-4" /> Reset All Filters
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                {paginatedTutors.map((tutor) => {
                  const isLiked = likedTutors[tutor.id] || false;
                  return (
                    <div key={tutor.id} className="card-minimal bg-white/80 rounded-3xl p-6 border border-[#1A1A24]/10 flex flex-col md:flex-row gap-6 hover:border-[#4D148C]/30 hover:shadow-lg transition-all group">

                      {/* Left: Avatar & Badges */}
                      <div className="flex flex-col items-center w-full md:w-44 flex-shrink-0">
                        <div className="relative w-28 h-28 mb-4">
                          <img src={tutor.image} alt={tutor.name} className="w-full h-full rounded-2xl object-cover border-2 border-[#ff6200]/20 shadow-md group-hover:scale-105 transition-transform" />
                          {tutor.onlineAvailable && (
                            <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full" title="Online right now" />
                          )}
                        </div>
                        <div className="flex items-center justify-center gap-1.5 px-3 py-1.5 bg-[#ff6200]/10 border border-[#ff6200]/20 rounded-xl text-xs font-extrabold text-[#ff6200] w-full mb-2">
                          {tutor.experience}
                        </div>
                        <div className="text-[11px] font-bold text-[#1A1A24]/60 flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[#1A1A24]/40" /> {tutor.location}
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

                        <div className="text-xs font-extrabold text-[#ff6200] uppercase tracking-wide mb-2">
                          {tutor.subjects}
                        </div>

                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          {tutor.onlineAvailable && (
                            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#4D148C] bg-[#4D148C]/10 px-2.5 py-0.5 rounded-lg">
                              <Video className="w-3 h-3" /> Online Available
                            </span>
                          )}
                          {tutor.homeTuition && (
                            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-800 bg-amber-100/80 px-2.5 py-0.5 rounded-lg">
                              <Home className="w-3 h-3" /> Home Tuition
                            </span>
                          )}
                        </div>

                        <p className="text-sm font-medium text-[#1A1A24]/70 leading-relaxed line-clamp-3 mb-6">
                          {tutor.description}
                        </p>

                        <div className="mt-auto flex flex-wrap items-center gap-3 pt-4 border-t border-[#1A1A24]/10">
                          <button 
                            onClick={() => handleOpenBooking(tutor)}
                            className="flex items-center gap-2 px-4 py-2.5 bg-[#4D148C]/10 text-[#4D148C] text-xs font-extrabold rounded-xl hover:bg-[#4D148C] hover:text-white transition-all active:scale-95 shadow-sm"
                          >
                            <Calendar className="w-3.5 h-3.5" /> Book Trial Lesson
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
                          <button 
                            onClick={() => handleOpenChat(tutor)}
                            className="flex-1 flex items-center justify-center gap-2 py-2.5 px-2 btn-coral rounded-xl text-xs font-bold shadow-md active:scale-95"
                          >
                            <MessageSquare className="w-3.5 h-3.5" /> Message
                          </button>
                          <button 
                            onClick={(e) => toggleLike(tutor, e)}
                            className={`w-10 h-10 flex items-center justify-center border rounded-xl transition-all active:scale-90 ${
                              isLiked 
                                ? "bg-red-500/10 border-red-500/40 text-red-500 scale-105 shadow-sm" 
                                : "bg-[#1A1A24]/5 border-[#1A1A24]/10 text-[#1A1A24]/60 hover:text-red-500 hover:border-red-500/30 hover:bg-red-500/5"
                            }`}
                            title={isLiked ? "Remove from Saved" : "Save Tutor"}
                          >
                            <Heart className={`w-4 h-4 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
                          </button>
                        </div>
                      </div>

                      {/* Mobile Actions */}
                      <div className="md:hidden flex items-center gap-2 w-full pt-4 border-t border-[#1A1A24]/10">
                        <button 
                          onClick={() => handleOpenChat(tutor)}
                          className="flex-1 flex items-center justify-center gap-2 py-3 btn-coral rounded-xl text-xs font-bold shadow-md active:scale-95"
                        >
                          <MessageSquare className="w-4 h-4" /> Send Message
                        </button>
                        <button 
                          onClick={(e) => toggleLike(tutor, e)}
                          className={`w-11 h-11 flex items-center justify-center border rounded-xl transition-colors ${
                            isLiked ? "bg-red-500/10 border-red-500/40 text-red-500" : "bg-[#1A1A24]/5 border-[#1A1A24]/10 text-[#1A1A24]/60"
                          }`}
                        >
                          <Heart className={`w-4 h-4 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
                        </button>
                      </div>

                    </div>
                  );
                })}
              </div>
            )}

            {/* Pagination */}
            {totalTutorPages > 1 && (
              <div className="flex items-center justify-center gap-2.5 mt-12 mb-16 pb-8">
                <button
                  onClick={() => handleTutorPageChange(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold bg-white border border-[#1A1A24]/15 text-[#1A1A24] hover:border-[#ff6200] hover:text-[#ff6200] shadow-sm disabled:opacity-40 disabled:pointer-events-none transition-all active:scale-95"
                >
                  Previous
                </button>
                {Array.from({ length: totalTutorPages }, (_, i) => i + 1).map((p) => (
                  <button
                    key={p}
                    onClick={() => handleTutorPageChange(p)}
                    className={`w-10 h-10 rounded-xl text-xs font-black transition-all flex items-center justify-center shadow-sm ${
                      p === currentPage
                        ? "bg-[#4D148C] text-white border border-[#4D148C] scale-105 shadow-md shadow-[#4D148C]/25"
                        : "bg-white text-[#1A1A24]/80 border border-[#1A1A24]/15 hover:border-[#ff6200] hover:text-[#ff6200]"
                    }`}
                  >
                    {p}
                  </button>
                ))}
                <button
                  onClick={() => handleTutorPageChange(Math.min(totalTutorPages, currentPage + 1))}
                  disabled={currentPage === totalTutorPages}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold bg-white border border-[#1A1A24]/15 text-[#1A1A24] hover:border-[#ff6200] hover:text-[#ff6200] shadow-sm disabled:opacity-40 disabled:pointer-events-none transition-all active:scale-95"
                >
                  Next
                </button>
              </div>
            )}

          </div>

          {/* Right Column - Sidebar Widgets */}
          <div className="w-full lg:w-80 flex-shrink-0 flex flex-col gap-6">

            {/* Promo Widget 1 - Upgrade Today */}
            <div 
              className="rounded-3xl p-6 text-white shadow-xl relative overflow-hidden group transition-all hover:shadow-2xl"
              style={{ background: "linear-gradient(135deg, #4D148C 0%, #2e0854 100%)" }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff6200]/20 rounded-full blur-2xl -mr-10 -mt-10 group-hover:scale-125 transition-transform"></div>
              <div className="relative z-10 text-center space-y-3">
                <span className="inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#ff6200] text-white shadow-sm">
                  Exclusive Offer
                </span>
                <h3 className="font-black text-2xl leading-tight">Build Your Custom Profile Page</h3>
                <p className="text-white/80 text-xs font-medium leading-relaxed">Stand out to top tier students with verified credentials & intro videos.</p>
                <button 
                  onClick={() => { setShowUpgradeModal(true); setUpgradeSuccess(false); }}
                  className="w-full py-3 bg-white text-[#4D148C] font-extrabold rounded-xl text-xs hover:bg-gray-100 transition-all shadow-md active:scale-95"
                >
                  Upgrade Today
                </button>
              </div>
            </div>

            {/* Join As Faculty Widget */}
            <div className="card-minimal bg-white/80 rounded-3xl p-6 border border-[#1A1A24]/10 space-y-3 hover:border-[#ff6200]/30 transition-all">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-black text-[#1A1A24] uppercase tracking-wider flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4 text-[#ff6200]" /> Join As Faculty
                </h3>
                <span className="text-[10px] font-black bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-md">Hiring</span>
              </div>
              <p className="text-xs text-[#1A1A24]/70 font-medium leading-relaxed">
                Share your knowledge with thousands of eager students worldwide and set your own teaching rates.
              </p>
              <button 
                onClick={() => { setShowJoinModal(true); setJoinSuccess(false); }}
                className="w-full py-3 btn-coral rounded-xl text-xs font-bold shadow-md active:scale-95"
              >
                Apply Now &rarr;
              </button>
            </div>

            {/* Quick Benefits Sidebar Card */}
            <div className="bg-[#1A1A24]/5 rounded-3xl p-5 border border-[#1A1A24]/10 space-y-3">
              <h4 className="text-xs font-black text-[#1A1A24] uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#4D148C]" /> Why Book With Us?
              </h4>
              <ul className="space-y-2 text-xs font-medium text-[#1A1A24]/70">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" /> 100% Background Verified Faculty
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" /> Free 30-Minute Replacement Guarantee
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" /> Instant Direct Chat & Scheduling
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>

      {/* ============================================================== */}
      {/* MODAL 1: BOOK TRIAL LESSON */}
      {/* ============================================================== */}
      {activeBookingTutor && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#1A1A24]/10 relative animate-fade-up max-h-[90vh] overflow-y-auto custom-scrollbar">
            <button 
              onClick={() => setActiveBookingTutor(null)} 
              className="absolute top-6 right-6 w-8 h-8 rounded-full bg-[#1A1A24]/5 flex items-center justify-center text-[#1A1A24]/60 hover:text-[#1A1A24] hover:bg-[#1A1A24]/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {bookingSuccess ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-[#1A1A24]">Trial Lesson Confirmed!</h3>
                <p className="text-sm font-medium text-[#1A1A24]/70 max-w-sm mx-auto">
                  We have notified <strong className="text-[#1A1A24] font-black">{activeBookingTutor.name}</strong>. Your session confirmation and meet link have been sent to your email.
                </p>
                <div className="bg-[#1A1A24]/5 rounded-2xl p-4 text-left space-y-2 text-xs font-bold text-[#1A1A24]">
                  <div className="flex justify-between border-b border-[#1A1A24]/10 pb-1.5">
                    <span className="text-[#1A1A24]/60">Booking ID</span>
                    <span className="font-mono text-[#4D148C]">#TRL-{(Math.random() * 90000 + 10000).toFixed(0)}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#1A1A24]/10 pb-1.5">
                    <span className="text-[#1A1A24]/60">Subject</span>
                    <span>{bookingSubject}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#1A1A24]/60">Schedule</span>
                    <span>{bookingDate} ({bookingTime})</span>
                  </div>
                </div>
                <button 
                  onClick={() => setActiveBookingTutor(null)}
                  className="btn-coral w-full py-3.5 rounded-xl text-xs font-bold shadow-md mt-4"
                >
                  Done & Return to Tutors
                </button>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-4 border-b border-[#1A1A24]/10 pb-4 mb-6">
                  <img src={activeBookingTutor.image} alt={activeBookingTutor.name} className="w-14 h-14 rounded-2xl object-cover border border-[#ff6200]/30" />
                  <div>
                    <span className="text-[10px] font-black text-[#ff6200] uppercase tracking-wider">Schedule 1-on-1 Trial</span>
                    <h3 className="text-lg font-black text-[#1A1A24]">{activeBookingTutor.name}</h3>
                    <div className="text-xs font-bold text-[#1A1A24]/60 flex items-center gap-2 mt-0.5">
                      <span>{activeBookingTutor.rate}</span> • 
                      <span className="flex items-center gap-0.5 text-amber-500"><Star className="w-3 h-3 fill-amber-500" /> {activeBookingTutor.rating}</span>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleConfirmBooking} className="space-y-5">
                  {/* Subject Picker */}
                  <div>
                    <label className="block text-xs font-black text-[#1A1A24] uppercase tracking-wider mb-2">1. Select Subject</label>
                    <div className="flex flex-wrap gap-2">
                      {activeBookingTutor.subjects.split(",").map((sub, i) => {
                        const trimmed = sub.trim();
                        const selected = bookingSubject === trimmed;
                        return (
                          <button
                            type="button"
                            key={i}
                            onClick={() => setBookingSubject(trimmed)}
                            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                              selected ? "bg-[#4D148C] text-white shadow-md" : "bg-[#1A1A24]/5 text-[#1A1A24]/80 hover:bg-[#1A1A24]/10"
                            }`}
                          >
                            {trimmed}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Date Picker */}
                  <div>
                    <label className="block text-xs font-black text-[#1A1A24] uppercase tracking-wider mb-2">2. Select Date</label>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                      {["Today", "Tomorrow", "Sat, Jul 19", "Sun, Jul 20"].map((d) => (
                        <button
                          type="button"
                          key={d}
                          onClick={() => setBookingDate(d)}
                          className={`py-2 px-2 text-center rounded-xl text-xs font-bold transition-all ${
                            bookingDate === d ? "bg-[#ff6200] text-white shadow-md" : "bg-[#1A1A24]/5 text-[#1A1A24]/80 hover:bg-[#1A1A24]/10"
                          }`}
                        >
                          {d}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time Picker */}
                  <div>
                    <label className="block text-xs font-black text-[#1A1A24] uppercase tracking-wider mb-2">3. Select Time Slot</label>
                    <div className="grid grid-cols-2 gap-2">
                      {["10:00 AM - 11:00 AM", "02:00 PM - 03:00 PM", "05:00 PM - 06:00 PM", "07:00 PM - 08:00 PM"].map((t) => (
                        <button
                          type="button"
                          key={t}
                          onClick={() => setBookingTime(t)}
                          className={`py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                            bookingTime === t ? "bg-[#4D148C] text-white shadow-md" : "bg-[#1A1A24]/5 text-[#1A1A24]/80 hover:bg-[#1A1A24]/10"
                          }`}
                        >
                          <Clock className="w-3 h-3" /> {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Student Details */}
                  <div className="space-y-3 pt-2 border-t border-[#1A1A24]/10">
                    <div>
                      <label className="block text-xs font-bold text-[#1A1A24]/80 mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={bookingName}
                        onChange={(e) => setBookingName(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#1A1A24]/20 text-xs font-medium focus:border-[#4D148C] bg-[#1A1A24]/[0.02]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#1A1A24]/80 mb-1">Email or Mobile Number</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. rahul@example.com / +91 9876543210"
                        value={bookingPhone}
                        onChange={(e) => setBookingPhone(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#1A1A24]/20 text-xs font-medium focus:border-[#4D148C] bg-[#1A1A24]/[0.02]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#1A1A24]/80 mb-1">Specific Topics or Learning Goals (Optional)</label>
                      <textarea
                        rows={2}
                        placeholder="Let the tutor know what specific chapters or exam goals you have..."
                        value={bookingNotes}
                        onChange={(e) => setBookingNotes(e.target.value)}
                        className="w-full px-4 py-2 rounded-xl border border-[#1A1A24]/20 text-xs font-medium focus:border-[#4D148C] bg-[#1A1A24]/[0.02] resize-none"
                      />
                    </div>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-3.5 btn-coral rounded-2xl text-xs font-black shadow-lg hover:shadow-xl transition-all active:scale-95"
                  >
                    Confirm Free Trial Lesson
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* MODAL 2: LIVE MESSAGE / CHAT */}
      {/* ============================================================== */}
      {activeChatTutor && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-[#1A1A24]/10 flex flex-col h-[520px] animate-fade-up overflow-hidden">
            
            {/* Chat Header */}
            <div className="bg-[#1A1A24] text-white p-4 sm:p-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img src={activeChatTutor.image} alt={activeChatTutor.name} className="w-11 h-11 rounded-full object-cover border-2 border-[#ff6200]" />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-[#1A1A24] rounded-full" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-white flex items-center gap-1.5">
                    {activeChatTutor.name}
                    {activeChatTutor.isVerified && <CheckCircle2 className="w-3.5 h-3.5 text-[#ff6200]" />}
                  </h3>
                  <div className="text-[11px] font-bold text-emerald-400 flex items-center gap-1">
                    🟢 Online & responding instantly
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setActiveChatTutor(null)} 
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Messages Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#1A1A24]/[0.03] custom-scrollbar flex flex-col">
              <div className="text-center my-1">
                <span className="px-3 py-1 bg-[#1A1A24]/10 rounded-full text-[10px] font-bold text-[#1A1A24]/60">
                  Direct encrypted session with {activeChatTutor.name}
                </span>
              </div>

              {chatMessages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`flex flex-col max-w-[82%] ${msg.sender === "user" ? "self-end items-end" : "self-start items-start"}`}
                >
                  <div 
                    className={`px-4 py-2.5 rounded-2xl text-xs font-medium leading-relaxed ${
                      msg.sender === "user" 
                        ? "bg-[#4D148C] text-white rounded-br-xs shadow-sm" 
                        : "bg-white text-[#1A1A24] border border-[#1A1A24]/10 rounded-bl-xs shadow-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                  <span className="text-[9px] font-bold text-[#1A1A24]/40 mt-1 px-1">{msg.time}</span>
                </div>
              ))}

              {isTyping && (
                <div className="self-start bg-white border border-[#1A1A24]/10 px-4 py-2 rounded-2xl rounded-bl-xs shadow-sm flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#4D148C] rounded-full animate-bounce" />
                  <span className="w-1.5 h-1.5 bg-[#ff6200] rounded-full animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 bg-[#4D148C] rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              )}
            </div>

            {/* Quick Prompt Chips */}
            <div className="px-3 py-2 bg-white border-t border-[#1A1A24]/5 flex gap-1.5 overflow-x-auto custom-scrollbar">
              {[
                "Can we schedule a trial class?",
                "Do you offer weekend morning slots?",
                "What is your study material plan?",
              ].map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => handleSendMessage(prompt)}
                  className="px-2.5 py-1 bg-[#4D148C]/5 hover:bg-[#4D148C]/15 text-[#4D148C] text-[11px] font-bold rounded-lg whitespace-nowrap transition-colors"
                >
                  ⚡ {prompt}
                </button>
              ))}
            </div>

            {/* Chat Input Bar */}
            <div className="p-3 bg-white border-t border-[#1A1A24]/10 flex items-center gap-2">
              <input
                type="text"
                placeholder="Type your message to tutor..."
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-1 px-4 py-2.5 rounded-xl border border-[#1A1A24]/20 text-xs font-medium focus:border-[#4D148C] bg-[#1A1A24]/[0.02]"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!chatInput.trim()}
                className="w-10 h-10 rounded-xl bg-[#ff6200] text-white flex items-center justify-center disabled:opacity-40 hover:bg-[#e05600] transition-all shadow-md active:scale-95 flex-shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* MODAL 3: UPGRADE TODAY (CUSTOM PROFILE & PRIORITY RANKING) */}
      {/* ============================================================== */}
      {showUpgradeModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#1A1A24]/10 relative animate-fade-up max-h-[90vh] overflow-y-auto custom-scrollbar">
            <button 
              onClick={() => setShowUpgradeModal(false)} 
              className="absolute top-6 right-6 w-8 h-8 rounded-full bg-[#1A1A24]/5 flex items-center justify-center text-[#1A1A24]/60 hover:text-[#1A1A24] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {upgradeSuccess ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-[#4D148C] text-white rounded-2xl flex items-center justify-center mx-auto shadow-lg animate-bounce">
                  <Award className="w-10 h-10 text-[#ff6200]" />
                </div>
                <h3 className="text-2xl font-black text-[#1A1A24]">Pro Faculty Membership Activated!</h3>
                <p className="text-sm font-medium text-[#1A1A24]/70 max-w-md mx-auto leading-relaxed">
                  Your custom profile builder is unlocked and priority verified ranking is applied across the Faculty Directory.
                </p>
                <div className="max-w-xs mx-auto p-4 bg-[#4D148C]/5 rounded-2xl border border-[#4D148C]/20 text-xs font-bold text-[#4D148C]">
                  ✨ Active Plan: <span className="font-black">Pro Faculty ({billingCycle === "annual" ? "Annual - ₹799/mo" : "Monthly - ₹999/mo"})</span>
                </div>
                <button 
                  onClick={() => setShowUpgradeModal(false)}
                  className="btn-coral px-8 py-3.5 rounded-xl text-xs font-bold shadow-md mt-4"
                >
                  Go to Faculty Dashboard
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <span className="px-3 py-1 bg-[#ff6200]/10 text-[#ff6200] font-black text-[10px] uppercase tracking-wider rounded-full border border-[#ff6200]/20">
                    Faculty Growth Suite
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#1A1A24]">Build Your Custom Profile Page</h3>
                  <p className="text-xs font-medium text-[#1A1A24]/60 max-w-md mx-auto">
                    Stand out to top-tier students with intro videos, priority verified credentials, and zero platform commission.
                  </p>

                  {/* Billing Toggle */}
                  <div className="inline-flex items-center bg-[#1A1A24]/5 p-1 rounded-xl mt-3">
                    <button 
                      onClick={() => setBillingCycle("monthly")}
                      className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${billingCycle === "monthly" ? "bg-white text-[#1A1A24] shadow-sm" : "text-[#1A1A24]/60"}`}
                    >
                      Monthly Billing
                    </button>
                    <button 
                      onClick={() => setBillingCycle("annual")}
                      className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${billingCycle === "annual" ? "bg-[#4D148C] text-white shadow-sm" : "text-[#1A1A24]/60"}`}
                    >
                      Annual <span className="text-[9px] bg-[#ff6200] text-white px-1.5 py-0.5 rounded">Save 20%</span>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  {/* Pro Plan */}
                  <div className="bg-[#4D148C] text-white rounded-3xl p-6 shadow-xl border-2 border-[#ff6200] relative flex flex-col justify-between">
                    <span className="absolute -top-3 right-6 bg-[#ff6200] text-white text-[10px] font-black px-3 py-1 rounded-full shadow-md">
                      MOST POPULAR
                    </span>
                    <div>
                      <h4 className="text-lg font-black">Pro Faculty</h4>
                      <div className="text-3xl font-black mt-2 mb-4">
                        {billingCycle === "annual" ? "₹799" : "₹999"}
                        <span className="text-xs font-normal text-white/70"> / month</span>
                      </div>
                      <ul className="space-y-2.5 text-xs font-medium text-white/90">
                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#ff6200]" /> Verified priority ranking badge</li>
                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#ff6200]" /> HD intro video upload on profile</li>
                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#ff6200]" /> Unlimited direct messages & bookings</li>
                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#ff6200]" /> 0% commission on your earnings</li>
                      </ul>
                    </div>
                    <button 
                      onClick={handleConfirmUpgrade}
                      className="w-full py-3 bg-[#ff6200] hover:bg-[#e05600] text-white font-extrabold rounded-xl text-xs mt-6 shadow-lg transition-all active:scale-95"
                    >
                      Upgrade Now
                    </button>
                  </div>

                  {/* Elite Plan */}
                  <div className="bg-white rounded-3xl p-6 border border-[#1A1A24]/10 flex flex-col justify-between">
                    <div>
                      <h4 className="text-lg font-black text-[#1A1A24]">Elite Institution</h4>
                      <div className="text-3xl font-black text-[#1A1A24] mt-2 mb-4">
                        {billingCycle === "annual" ? "₹1,999" : "₹2,499"}
                        <span className="text-xs font-normal text-[#1A1A24]/60"> / month</span>
                      </div>
                      <ul className="space-y-2.5 text-xs font-medium text-[#1A1A24]/70">
                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#4D148C]" /> Everything in Pro Faculty</li>
                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#4D148C]" /> Dedicated custom SEO profile page</li>
                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#4D148C]" /> Multi-tutor batch management</li>
                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#4D148C]" /> Priority lead matching notifications</li>
                      </ul>
                    </div>
                    <button 
                      onClick={handleConfirmUpgrade}
                      className="w-full py-3 bg-[#1A1A24] hover:bg-black text-white font-extrabold rounded-xl text-xs mt-6 transition-all active:scale-95"
                    >
                      Select Elite Suite
                    </button>
                  </div>
                </div>

              </div>
            )}
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* MODAL 4: JOIN AS FACULTY / APPLY NOW */}
      {/* ============================================================== */}
      {showJoinModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#1A1A24]/10 relative animate-fade-up max-h-[90vh] overflow-y-auto custom-scrollbar">
            <button 
              onClick={() => setShowJoinModal(false)} 
              className="absolute top-6 right-6 w-8 h-8 rounded-full bg-[#1A1A24]/5 flex items-center justify-center text-[#1A1A24]/60 hover:text-[#1A1A24] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {joinSuccess ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 bg-[#ff6200]/10 text-[#ff6200] rounded-2xl flex items-center justify-center mx-auto shadow-inner animate-bounce">
                  <Briefcase className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-[#1A1A24]">Application Submitted Successfully!</h3>
                <p className="text-sm font-medium text-[#1A1A24]/70 max-w-sm mx-auto">
                  Thank you for applying to join the verified faculty directory. Our academic credential team is reviewing your details.
                </p>
                <div className="bg-[#1A1A24]/5 rounded-2xl p-4 text-left space-y-2 text-xs font-bold text-[#1A1A24]">
                  <div className="flex justify-between border-b border-[#1A1A24]/10 pb-1.5">
                    <span className="text-[#1A1A24]/60">Application ID</span>
                    <span className="font-mono text-[#4D148C]">#APP-2026-{(Math.random() * 900 + 100).toFixed(0)}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#1A1A24]/10 pb-1.5">
                    <span className="text-[#1A1A24]/60">Primary Subjects</span>
                    <span>{joinSubjects}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#1A1A24]/60">Desired Rate</span>
                    <span className="text-[#ff6200]">₹{joinRate}/hr</span>
                  </div>
                </div>
                <button 
                  onClick={() => setShowJoinModal(false)}
                  className="btn-coral w-full py-3.5 rounded-xl text-xs font-bold shadow-md mt-4"
                >
                  Return to Directory
                </button>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-3 border-b border-[#1A1A24]/10 pb-4 mb-6">
                  <div className="w-12 h-12 bg-[#4D148C]/10 text-[#4D148C] rounded-2xl flex items-center justify-center font-black text-xl">
                    🎓
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-[#ff6200] uppercase tracking-wider">Fast-Track Onboarding</span>
                    <h3 className="text-lg font-black text-[#1A1A24]">Join As Faculty Member</h3>
                  </div>
                </div>

                <form onSubmit={handleConfirmJoin} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-[#1A1A24]/80 mb-1">Full Legal Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Dr. / Prof. / Mr. / Ms. Full Name"
                      value={joinName}
                      onChange={(e) => setJoinName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#1A1A24]/20 text-xs font-medium focus:border-[#4D148C] bg-[#1A1A24]/[0.02]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-[#1A1A24]/80 mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="you@university.edu"
                        value={joinEmail}
                        onChange={(e) => setJoinEmail(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#1A1A24]/20 text-xs font-medium focus:border-[#4D148C] bg-[#1A1A24]/[0.02]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#1A1A24]/80 mb-1">Highest Qualification</label>
                      <select
                        value={joinQual}
                        onChange={(e) => setJoinQual(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl border border-[#1A1A24]/20 text-xs font-bold focus:border-[#4D148C] bg-white"
                      >
                        <option>Master&apos;s Degree / Ph.D</option>
                        <option>Bachelor&apos;s Degree (B.Tech / B.Sc / B.Com)</option>
                        <option>B.Ed / Certified Teacher</option>
                        <option>Industry Professional / CA / IITian</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1A1A24]/80 mb-1">Primary Teaching Subjects</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mathematics, Physics, JEE Prep, English"
                      value={joinSubjects}
                      onChange={(e) => setJoinSubjects(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#1A1A24]/20 text-xs font-medium focus:border-[#4D148C] bg-[#1A1A24]/[0.02]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-[#1A1A24]/80 mb-1">Desired Hourly Rate (₹/hr)</label>
                      <input
                        type="number"
                        required
                        placeholder="1000"
                        value={joinRate}
                        onChange={(e) => setJoinRate(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#1A1A24]/20 text-xs font-medium focus:border-[#4D148C] bg-[#1A1A24]/[0.02]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#1A1A24]/80 mb-1">Teaching Mode</label>
                      <select
                        value={joinMode}
                        onChange={(e) => setJoinMode(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl border border-[#1A1A24]/20 text-xs font-bold focus:border-[#4D148C] bg-white"
                      >
                        <option>Online & Home Tuition</option>
                        <option>Online Classes Only</option>
                        <option>Home Tuition Only</option>
                      </select>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#4D148C]/5 border border-[#4D148C]/15 text-[11px] font-medium text-[#1A1A24]/80 leading-relaxed">
                    By applying, your profile will undergo our verified credential check. Verified tutors receive <strong className="text-[#4D148C]">4x more student inquiries</strong> on average.
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-3.5 btn-coral rounded-2xl text-xs font-black shadow-lg hover:shadow-xl transition-all active:scale-95 mt-2"
                  >
                    Submit Faculty Application &rarr;
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}

