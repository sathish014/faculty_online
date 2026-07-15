"use client";

import React, { useState, useMemo } from "react";
import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";
import { Coins, Search, Briefcase, MapPin, Filter, CheckCircle, Clock, Sparkles, PlusCircle, ArrowRight, X, Send, Award, DollarSign, Building } from "lucide-react";

interface Job {
  id: string;
  title: string;
  category: string;
  description: string;
  rate: string;
  numericRate: number;
  mode: "Online" | "Offline / Home";
  location: string;
  coins: number;
  postedAgo: string;
  requirements: string[];
}

const initialJobs: Job[] = [
  {
    id: "job-1",
    title: "Senior IIT-JEE Advanced Mathematics Tutor Required",
    category: "JEE Prep",
    description: "Seeking an elite mathematics educator with proven track record in JEE Advanced calculus, differential equations, and vector algebra for intensive 1-on-1 coaching.",
    rate: "₹2,500 - ₹3,500/hr",
    numericRate: 3000,
    mode: "Online",
    location: "Delhi NCR / Pan India",
    coins: 215,
    postedAgo: "2 hours ago",
    requirements: [
      "5+ years teaching experience for JEE Mains & Advanced",
      "IIT / NIT degree or equivalent strong academic credentials",
      "Digital pen-pad setup for high-clarity interactive problem solving"
    ],
  },
  {
    id: "job-2",
    title: "Full Stack React 19 & Next.js Mentor for Corporate Training",
    category: "Tech & Coding",
    description: "Looking for an industry software architect to mentor 15 engineering trainees on modern React 19, Next.js App Router, TypeScript, and Tailwind CSS over weekend workshops.",
    rate: "₹2,000 - ₹2,800/hr",
    numericRate: 2400,
    mode: "Online",
    location: "Bangalore / Remote",
    coins: 320,
    postedAgo: "5 hours ago",
    requirements: [
      "Real-world enterprise development experience with React & Next.js",
      "Ability to review live codebases and explain architectural trade-offs",
      "Available on Saturdays & Sundays (4 hours per day)"
    ],
  },
  {
    id: "job-3",
    title: "NEET Biology (Botany & Zoology) Home Tutor",
    category: "Medical / NEET",
    description: "Home tutoring assignment for a Class 12 NEET aspirant residing in South Mumbai. Intensive focus on NCERT line-by-line mastery, PYQ discussions, and diagrammatic recall.",
    rate: "₹1,500 - ₹2,200/hr",
    numericRate: 1850,
    mode: "Offline / Home",
    location: "Worli, South Mumbai, MH",
    coins: 180,
    postedAgo: "1 day ago",
    requirements: [
      "M.B.B.S student/alumni or specialized NEET Biology faculty",
      "In-person travel to student's residence 3 days per week",
      "Proven track record of students scoring 340+ in NEET Biology"
    ],
  },
  {
    id: "job-4",
    title: "AI & Machine Learning (Python, PyTorch) Research Mentor",
    category: "Tech & Coding",
    description: "Postgraduate data science student seeking specialized 1-on-1 mentorship for a Deep Learning thesis project involving LLM fine-tuning, LoRA adapters, and PyTorch pipelines.",
    rate: "₹3,000 - ₹4,500/hr",
    numericRate: 3750,
    mode: "Online",
    location: "Hyderabad / Remote",
    coins: 410,
    postedAgo: "1 day ago",
    requirements: [
      "Deep practical expertise in PyTorch, Transformers, and LLM fine-tuning",
      "Research experience or advanced publication history in ML/AI",
      "2 live problem-solving sessions per week via Zoom/Meet"
    ],
  },
  {
    id: "job-5",
    title: "Spoken English & Corporate Communication Fluency Coach",
    category: "Languages",
    description: "Certified IELTS / Communication trainer required for customized evening fluency sessions for working professionals aiming for international client communication leadership.",
    rate: "₹1,200 - ₹1,800/hr",
    numericRate: 1500,
    mode: "Online",
    location: "Pan India / Remote",
    coins: 150,
    postedAgo: "2 days ago",
    requirements: [
      "CELTA / TESOL / IELTS certified educator preferred",
      "Interactive accent neutralisation and confidence-building methodology",
      "Flexible evening availability (7 PM - 9 PM IST)"
    ],
  },
  {
    id: "job-6",
    title: "Class 10 CBSE Physics & Chemistry Numerical Problem Tutor",
    category: "School Prep",
    description: "Dedicated home tutor needed for Class 10 CBSE board exam preparation. Emphasis on numerical problem solving, chemical reaction balancing, and practical science foundations.",
    rate: "₹1,000 - ₹1,500/hr",
    numericRate: 1250,
    mode: "Offline / Home",
    location: "HSR Layout, Bangalore",
    coins: 120,
    postedAgo: "2 days ago",
    requirements: [
      "B.Sc / M.Sc or B.Tech background with passion for school science teaching",
      "Patience and structured approach to clearing basic numerical concepts",
      "In-person home sessions twice weekly"
    ],
  },
  {
    id: "job-7",
    title: "Chartered Accountancy (CA Foundation) Economics Educator",
    category: "Commerce",
    description: "Immediate opening for an experienced CA/CS educator to conduct structured live batch revisions and doubt-solving for CA Foundation Economics & Business Commercial Knowledge.",
    rate: "₹1,600 - ₹2,400/hr",
    numericRate: 2000,
    mode: "Online",
    location: "Ahmedabad / Remote",
    coins: 200,
    postedAgo: "3 days ago",
    requirements: [
      "Qualified CA / CS or Economics post-graduate faculty",
      "Dynamic presentation skills with quick memory-retention tricks",
      "Experience conducting online batches of 20+ students"
    ],
  },
  {
    id: "job-8",
    title: "ICSE Grade 8 & 9 Foundation Mathematics & Science Educator",
    category: "School Prep",
    description: "Patient and engaging educator needed to build strong analytical concepts in ICSE Grade 8 & 9 Mathematics and Physics. Focus on logical reasoning and school syllabus excellence.",
    rate: "₹800 - ₹1,200/hr",
    numericRate: 1000,
    mode: "Offline / Home",
    location: "Salt Lake, Kolkata, WB",
    coins: 100,
    postedAgo: "4 days ago",
    requirements: [
      "Familiarity with ICSE curriculum rigor and textbook standards",
      "Enthusiastic and child-friendly pedagogy",
      "Available 3 weekday afternoons (4 PM - 6 PM)"
    ],
  },
];

const categories = ["All", "JEE Prep", "Medical / NEET", "Tech & Coding", "Languages", "School Prep", "Commerce"];

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>(initialJobs);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedMode, setSelectedMode] = useState("All");
  const [priceSort, setPriceSort] = useState("default");

  // Apply to Job Modal State
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [applicationForm, setApplicationForm] = useState({ proposedRate: "", availability: "", coverNote: "" });
  const [applicationSuccess, setApplicationSuccess] = useState(false);

  // Post a Job Modal State
  const [showPostModal, setShowPostModal] = useState(false);
  const [postForm, setPostForm] = useState({
    title: "",
    category: "JEE Prep",
    rate: "₹1,500 - ₹2,000/hr",
    numericRate: 1750,
    mode: "Online" as "Online" | "Offline / Home",
    location: "Remote / Pan India",
    coins: 150,
    description: "",
    requirement1: "Proven teaching experience in relevant subject area",
    requirement2: "Good communication and structured problem solving setup",
  });
  const [postSuccess, setPostSuccess] = useState(false);

  // Filter & Sort Jobs
  const filteredJobs = useMemo(() => {
    return jobs
      .filter((job) => {
        const matchesSearch =
          job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.category.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === "All" || job.category === selectedCategory;
        const matchesMode = selectedMode === "All" || job.mode === selectedMode;
        return matchesSearch && matchesCategory && matchesMode;
      })
      .sort((a, b) => {
        if (priceSort === "high-to-low") return b.numericRate - a.numericRate;
        if (priceSort === "low-to-high") return a.numericRate - b.numericRate;
        return 0;
      });
  }, [jobs, searchQuery, selectedCategory, selectedMode, priceSort]);

  // Handle Apply Submission
  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicationForm.proposedRate || !applicationForm.coverNote) {
      alert("Please provide your proposed hourly rate and cover note.");
      return;
    }
    setApplicationSuccess(true);
  };

  // Handle Post Job Submission
  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!postForm.title || !postForm.description) {
      alert("Please provide a job title and detailed description.");
      return;
    }
    const newJob: Job = {
      id: `job-${Date.now()}`,
      title: postForm.title,
      category: postForm.category,
      description: postForm.description,
      rate: postForm.rate,
      numericRate: postForm.numericRate,
      mode: postForm.mode,
      location: postForm.location,
      coins: postForm.coins,
      postedAgo: "Just now",
      requirements: [postForm.requirement1, postForm.requirement2].filter(Boolean),
    };
    setJobs([newJob, ...jobs]);
    setPostSuccess(true);
  };

  return (
    <main className="min-h-screen flex flex-col font-sans" style={{ background: "var(--bg-primary)" }}>
      <Navbar />

      {/* Hero Banner */}
      <div
        className="relative pt-28 pb-16 px-4 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1a0630 0%, #2e0854 50%, #4D148C 100%)" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#ff6200]/15 via-transparent to-transparent pointer-events-none" />
        <div className="container-xl relative z-10 text-center space-y-5 max-w-4xl mx-auto animate-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black bg-white/10 text-[#ff6200] border border-white/15 tracking-wider uppercase shadow-sm">
            <Briefcase className="w-3.5 h-3.5 text-[#ff6200]" /> High-Paying Tutoring Opportunities
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Explore Faculty <span className="text-[#ff6200]">Jobs & Assignments</span>
          </h1>
          <p className="text-base sm:text-lg font-semibold text-white/80 max-w-2xl mx-auto leading-relaxed">
            Connect directly with verified students, coaching institutes, and parents seeking specialized 1-on-1 tutors and batch mentors across India.
          </p>
          <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => {
                setPostSuccess(false);
                setShowPostModal(true);
              }}
              className="btn-coral rounded-2xl px-8 py-4 font-black text-sm shadow-xl flex items-center justify-center gap-2 active:scale-95 transition-all cursor-pointer"
              style={{ boxShadow: "0 8px 24px rgba(255,98,0,0.35)" }}
            >
              <PlusCircle className="w-5 h-5" /> Post a Tutoring Requirement
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow container-xl px-4 pt-10 pb-24">
        {/* Category Pills Bar */}
        <div className="flex items-center gap-2.5 overflow-x-auto custom-scrollbar pt-2 pb-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold whitespace-nowrap transition-all cursor-pointer shadow-sm ${
                selectedCategory === cat
                  ? "bg-[#ff6200] text-white shadow-md shadow-[#ff6200]/25"
                  : "bg-white dark:bg-[#1A1A24] text-[#1A1A24] dark:text-white/80 hover:bg-[#ff6200]/10 hover:text-[#ff6200] hover:border-[#ff6200]/40 border border-[#1A1A24]/10 dark:border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white/95 dark:bg-[#1A1A24]/95 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-[#1A1A24]/10 dark:border-white/10 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
            {/* Keyword Search */}
            <div className="md:col-span-5 space-y-2">
              <label className="block text-xs font-black uppercase tracking-wider text-[#1A1A24] dark:text-white">
                Search Keyword or Location
              </label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-[rgba(26,26,36,0.45)] dark:text-white/45" />
                <input
                  type="text"
                  placeholder="e.g. JEE Mathematics, Bangalore, React..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-[#1A1A24]/5 dark:bg-white/5 border border-[#1A1A24]/15 dark:border-white/15 focus:outline-none focus:border-[#ff6200] focus:ring-2 focus:ring-[#ff6200]/20 text-sm font-semibold text-[#1A1A24] dark:text-white transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-[rgba(26,26,36,0.5)] hover:text-[#ff6200] px-1.5 py-0.5"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* Job Mode Filter */}
            <div className="md:col-span-3 space-y-2">
              <label className="block text-xs font-black uppercase tracking-wider text-[#1A1A24] dark:text-white">
                Tutoring Mode
              </label>
              <select
                value={selectedMode}
                onChange={(e) => setSelectedMode(e.target.value)}
                className="w-full px-4 py-3.5 rounded-2xl bg-[#1A1A24]/5 dark:bg-white/5 border border-[#1A1A24]/15 dark:border-white/15 focus:outline-none focus:border-[#ff6200] text-sm font-bold text-[#1A1A24] dark:text-white cursor-pointer"
              >
                <option value="All">All Modes (Online & Home)</option>
                <option value="Online">Online Sessions Only</option>
                <option value="Offline / Home">Offline / Home Tutoring</option>
              </select>
            </div>

            {/* Price Sorting */}
            <div className="md:col-span-4 space-y-2">
              <label className="block text-xs font-black uppercase tracking-wider text-[#1A1A24] dark:text-white">
                Sort by Hourly Rate
              </label>
              <select
                value={priceSort}
                onChange={(e) => setPriceSort(e.target.value)}
                className="w-full px-4 py-3.5 rounded-2xl bg-[#1A1A24]/5 dark:bg-white/5 border border-[#1A1A24]/15 dark:border-white/15 focus:outline-none focus:border-[#ff6200] text-sm font-bold text-[#1A1A24] dark:text-white cursor-pointer"
              >
                <option value="default">Default Recommendation</option>
                <option value="high-to-low">Rate: High to Low</option>
                <option value="low-to-high">Rate: Low to High</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count Header */}
        <div className="flex items-center justify-between pb-6 border-b border-[#1A1A24]/10 dark:border-white/10 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1A1A24] dark:text-white tracking-tight">
              {selectedCategory === "All" ? "All Tutoring Opportunities" : `${selectedCategory} Jobs`}
            </h2>
            <p className="text-xs sm:text-sm font-semibold text-[rgba(26,26,36,0.65)] dark:text-white/65 mt-1">
              Showing <strong className="text-[#ff6200]">{filteredJobs.length}</strong> active job postings
            </p>
          </div>
          {(searchQuery || selectedCategory !== "All" || selectedMode !== "All" || priceSort !== "default") && (
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
                setSelectedMode("All");
                setPriceSort("default");
              }}
              className="text-xs font-extrabold text-[#ff6200] hover:underline flex items-center gap-1 bg-[#ff6200]/10 px-3.5 py-2 rounded-xl"
            >
              Reset All Filters
            </button>
          )}
        </div>

        {/* Jobs Grid */}
        {filteredJobs.length === 0 ? (
          <div className="bg-white/80 dark:bg-[#1A1A24]/80 rounded-3xl p-12 text-center border border-[#1A1A24]/10 dark:border-white/10 max-w-xl mx-auto my-12 space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-[#ff6200]/15 text-[#ff6200] flex items-center justify-center mx-auto">
              <Briefcase className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-black text-[#1A1A24] dark:text-white">No Jobs Found Matching Your Criteria</h3>
            <p className="text-sm font-medium text-[rgba(26,26,36,0.7)] dark:text-white/70 leading-relaxed">
              Try broadening your keyword search or selecting <strong className="text-[#ff6200]">All Categories</strong> and <strong className="text-[#ff6200]">All Modes</strong> to see available positions.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
                setSelectedMode("All");
              }}
              className="btn-coral rounded-xl px-6 py-3 font-extrabold text-sm shadow-md"
            >
              Clear Search Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white/90 dark:bg-[#1A1A24]/90 p-6 sm:p-7 rounded-3xl border border-[#1A1A24]/10 dark:border-white/10 hover:border-[#ff6200] hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full group"
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider flex items-center gap-1.5 ${
                        job.mode === "Online"
                          ? "bg-[#4D148C]/15 text-[#4D148C] dark:text-[#c48bff] border border-[#4D148C]/30"
                          : "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30"
                      }`}
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      {job.mode}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-[#1A1A24]/5 dark:bg-white/10 text-[rgba(26,26,36,0.7)] dark:text-white/70 border border-[#1A1A24]/10 dark:border-white/10 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#ff6200]" /> {job.postedAgo}
                    </span>
                  </div>

                  {/* Category & Title */}
                  <div className="mb-3">
                    <span className="text-xs font-black text-[#ff6200] tracking-wider uppercase">{job.category}</span>
                    <h3 className="text-lg sm:text-xl font-black text-[#1A1A24] dark:text-white mt-1 group-hover:text-[#ff6200] transition-colors leading-snug">
                      {job.title}
                    </h3>
                  </div>

                  {/* Rate Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#ff6200]/10 dark:bg-[#ff6200]/15 text-[#ff6200] border border-[#ff6200]/25 font-black text-sm sm:text-base mb-4 shadow-sm">
                    <DollarSign className="w-4.5 h-4.5 -mr-1" />
                    <span>{job.rate}</span>
                  </div>

                  {/* Location & Description */}
                  <p className="text-xs font-extrabold text-[rgba(26,26,36,0.6)] dark:text-white/60 mb-3 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-[#ff6200]" /> Location: {job.location}
                  </p>
                  <p className="text-sm font-semibold text-[rgba(26,26,36,0.75)] dark:text-white/75 leading-relaxed line-clamp-3 mb-6">
                    {job.description}
                  </p>
                </div>

                {/* Bottom Action Footer */}
                <div className="pt-4 border-t border-[#1A1A24]/10 dark:border-white/10 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 px-3.5 py-1.5 bg-amber-500/15 text-amber-600 dark:text-amber-400 rounded-xl border border-amber-500/30 text-xs font-black shadow-sm" title="Coins Required to Apply">
                    <Coins className="w-3.5 h-3.5 text-amber-500" />
                    <span>{job.coins} Coins</span>
                  </div>
                  <button
                    onClick={() => {
                      setApplicationSuccess(false);
                      setApplicationForm({ proposedRate: job.rate, availability: "Immediate joining / Weekends", coverNote: "" });
                      setSelectedJob(job);
                    }}
                    className="btn-coral rounded-xl px-5 py-2.5 text-xs sm:text-sm font-black shadow-md flex items-center gap-1.5 active:scale-95 transition-all cursor-pointer"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Apply to Job Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white dark:bg-[#1A1A24] rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#1A1A24]/15 dark:border-white/15 relative overflow-hidden max-h-[90vh] overflow-y-auto custom-scrollbar">
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#1A1A24]/5 dark:bg-white/10 flex items-center justify-center text-[#1A1A24] dark:text-white hover:bg-[#ff6200] hover:text-white transition-colors cursor-pointer z-10"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {applicationSuccess ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/15 text-emerald-500 flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-[#1A1A24] dark:text-white">Application Submitted!</h3>
                <p className="text-sm font-semibold text-[rgba(26,26,36,0.7)] dark:text-white/70 max-w-sm mx-auto leading-relaxed">
                  You have applied for <strong className="text-[#1A1A24] dark:text-white">{selectedJob.title}</strong>. <strong className="text-amber-500">{selectedJob.coins} Coins</strong> have been reserved for priority application delivery.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSelectedJob(null)}
                    className="btn-coral rounded-xl px-8 py-3.5 font-extrabold text-sm shadow-lg w-full sm:w-auto"
                  >
                    Back to Jobs List
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="space-y-5">
                <div>
                  <span className="text-xs font-extrabold text-[#ff6200] uppercase tracking-wider">{selectedJob.category} Opportunity</span>
                  <h3 className="text-xl font-black text-[#1A1A24] dark:text-white mt-1 pr-8 leading-snug">{selectedJob.title}</h3>
                  <div className="flex flex-wrap items-center gap-3 mt-3">
                    <span className="px-3 py-1 rounded-lg bg-[#4D148C]/10 dark:bg-white/10 text-xs font-extrabold text-[#4D148C] dark:text-white">
                      Budget: {selectedJob.rate}
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-emerald-500/10 text-xs font-extrabold text-emerald-600 dark:text-emerald-400">
                      Mode: {selectedJob.mode} ({selectedJob.location})
                    </span>
                  </div>
                </div>

                <div className="bg-[#1A1A24]/5 dark:bg-white/5 p-4 rounded-2xl border border-[#1A1A24]/10 dark:border-white/10 space-y-2">
                  <h4 className="text-xs font-black uppercase tracking-wider text-[#1A1A24] dark:text-white flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-[#ff6200]" /> Key Requirements & Preferences:
                  </h4>
                  <ul className="space-y-1.5 pl-5 list-disc text-xs sm:text-sm font-semibold text-[rgba(26,26,36,0.75)] dark:text-white/75">
                    {selectedJob.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-[#1A1A24] dark:text-white mb-2">
                      Your Proposed Rate (₹/hr)
                    </label>
                    <input
                      type="text"
                      required
                      value={applicationForm.proposedRate}
                      onChange={(e) => setApplicationForm({ ...applicationForm, proposedRate: e.target.value })}
                      className="w-full rounded-xl px-4 py-3 bg-[#1A1A24]/5 dark:bg-white/5 border border-[#1A1A24]/15 dark:border-white/15 text-sm font-bold text-[#1A1A24] dark:text-white focus:outline-none focus:border-[#ff6200]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-[#1A1A24] dark:text-white mb-2">
                      Available Schedule / Joining
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Immediate / Weekends"
                      value={applicationForm.availability}
                      onChange={(e) => setApplicationForm({ ...applicationForm, availability: e.target.value })}
                      className="w-full rounded-xl px-4 py-3 bg-[#1A1A24]/5 dark:bg-white/5 border border-[#1A1A24]/15 dark:border-white/15 text-sm font-bold text-[#1A1A24] dark:text-white focus:outline-none focus:border-[#ff6200]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-[#1A1A24] dark:text-white mb-2">
                    Cover Note / Teaching Pitch
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Briefly introduce your teaching experience, methodology, and why you are the ideal tutor for this assignment..."
                    value={applicationForm.coverNote}
                    onChange={(e) => setApplicationForm({ ...applicationForm, coverNote: e.target.value })}
                    className="w-full rounded-xl p-4 bg-[#1A1A24]/5 dark:bg-white/5 border border-[#1A1A24]/15 dark:border-white/15 text-sm font-semibold text-[#1A1A24] dark:text-white focus:outline-none focus:border-[#ff6200] resize-none"
                  />
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-[#1A1A24]/10 dark:border-white/10">
                  <div className="text-xs font-extrabold text-[rgba(26,26,36,0.6)] dark:text-white/60">
                    Required: <strong className="text-amber-500">{selectedJob.coins} Coins</strong>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedJob(null)}
                      className="px-4 py-2.5 rounded-xl text-sm font-bold text-[rgba(26,26,36,0.65)] dark:text-white/65 hover:bg-[#1A1A24]/5 dark:hover:bg-white/10 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="btn-coral rounded-xl px-6 py-3 text-sm font-black shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-all"
                    >
                      <Send className="w-4 h-4" /> Submit Application
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Post a Job Modal */}
      {showPostModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white dark:bg-[#1A1A24] rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#1A1A24]/15 dark:border-white/15 relative overflow-hidden max-h-[90vh] overflow-y-auto custom-scrollbar">
            <button
              onClick={() => setShowPostModal(false)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#1A1A24]/5 dark:bg-white/10 flex items-center justify-center text-[#1A1A24] dark:text-white hover:bg-[#ff6200] hover:text-white transition-colors cursor-pointer z-10"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {postSuccess ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/15 text-emerald-500 flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-[#1A1A24] dark:text-white">Job Posted Successfully!</h3>
                <p className="text-sm font-semibold text-[rgba(26,26,36,0.7)] dark:text-white/70 max-w-sm mx-auto leading-relaxed">
                  Your tutoring requirement <strong className="text-[#1A1A24] dark:text-white">{postForm.title}</strong> is now live on our platform and visible to verified educators across India.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setShowPostModal(false)}
                    className="btn-coral rounded-xl px-8 py-3.5 font-extrabold text-sm shadow-lg w-full sm:w-auto"
                  >
                    View Live Job Board
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handlePostSubmit} className="space-y-4">
                <div>
                  <span className="text-xs font-extrabold text-[#ff6200] uppercase tracking-wider">For Students & Institutions</span>
                  <h3 className="text-xl font-black text-[#1A1A24] dark:text-white mt-1 leading-snug">Post a Tutoring Requirement</h3>
                  <p className="text-xs font-semibold text-[rgba(26,26,36,0.65)] dark:text-white/65 mt-1">
                    Connect with expert tutors within 24 hours. Free posting for verified accounts.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-[#1A1A24] dark:text-white mb-1.5">
                    Job Title / Requirement
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Class 12 CBSE Physics Home Tutor Needed"
                    value={postForm.title}
                    onChange={(e) => setPostForm({ ...postForm, title: e.target.value })}
                    className="w-full rounded-xl px-4 py-3 bg-[#1A1A24]/5 dark:bg-white/5 border border-[#1A1A24]/15 dark:border-white/15 text-sm font-bold text-[#1A1A24] dark:text-white focus:outline-none focus:border-[#ff6200]"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-[#1A1A24] dark:text-white mb-1.5">
                      Subject Category
                    </label>
                    <select
                      value={postForm.category}
                      onChange={(e) => setPostForm({ ...postForm, category: e.target.value })}
                      className="w-full rounded-xl px-4 py-3 bg-[#1A1A24]/5 dark:bg-white/5 border border-[#1A1A24]/15 dark:border-white/15 text-sm font-bold text-[#1A1A24] dark:text-white focus:outline-none focus:border-[#ff6200]"
                    >
                      {categories.filter(c => c !== "All").map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-[#1A1A24] dark:text-white mb-1.5">
                      Tutoring Mode
                    </label>
                    <select
                      value={postForm.mode}
                      onChange={(e) => setPostForm({ ...postForm, mode: e.target.value as any })}
                      className="w-full rounded-xl px-4 py-3 bg-[#1A1A24]/5 dark:bg-white/5 border border-[#1A1A24]/15 dark:border-white/15 text-sm font-bold text-[#1A1A24] dark:text-white focus:outline-none focus:border-[#ff6200]"
                    >
                      <option value="Online">Online Sessions Only</option>
                      <option value="Offline / Home">Offline / Home Tutoring</option>
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-[#1A1A24] dark:text-white mb-1.5">
                      Budget Rate Range
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. ₹1,500 - ₹2,000/hr"
                      value={postForm.rate}
                      onChange={(e) => setPostForm({ ...postForm, rate: e.target.value })}
                      className="w-full rounded-xl px-4 py-3 bg-[#1A1A24]/5 dark:bg-white/5 border border-[#1A1A24]/15 dark:border-white/15 text-sm font-bold text-[#1A1A24] dark:text-white focus:outline-none focus:border-[#ff6200]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-[#1A1A24] dark:text-white mb-1.5">
                      Location / City
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. South Delhi / Remote"
                      value={postForm.location}
                      onChange={(e) => setPostForm({ ...postForm, location: e.target.value })}
                      className="w-full rounded-xl px-4 py-3 bg-[#1A1A24]/5 dark:bg-white/5 border border-[#1A1A24]/15 dark:border-white/15 text-sm font-bold text-[#1A1A24] dark:text-white focus:outline-none focus:border-[#ff6200]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-[#1A1A24] dark:text-white mb-1.5">
                    Detailed Description
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Describe syllabus topics, frequency of classes, grade level, and specific expectations..."
                    value={postForm.description}
                    onChange={(e) => setPostForm({ ...postForm, description: e.target.value })}
                    className="w-full rounded-xl p-3.5 bg-[#1A1A24]/5 dark:bg-white/5 border border-[#1A1A24]/15 dark:border-white/15 text-sm font-semibold text-[#1A1A24] dark:text-white focus:outline-none focus:border-[#ff6200] resize-none"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-[#1A1A24] dark:text-white mb-1.5">
                      Requirement Bullet 1
                    </label>
                    <input
                      type="text"
                      value={postForm.requirement1}
                      onChange={(e) => setPostForm({ ...postForm, requirement1: e.target.value })}
                      className="w-full rounded-xl px-4 py-2.5 bg-[#1A1A24]/5 dark:bg-white/5 border border-[#1A1A24]/15 dark:border-white/15 text-xs sm:text-sm font-semibold text-[#1A1A24] dark:text-white focus:outline-none focus:border-[#ff6200]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-[#1A1A24] dark:text-white mb-1.5">
                      Requirement Bullet 2
                    </label>
                    <input
                      type="text"
                      value={postForm.requirement2}
                      onChange={(e) => setPostForm({ ...postForm, requirement2: e.target.value })}
                      className="w-full rounded-xl px-4 py-2.5 bg-[#1A1A24]/5 dark:bg-white/5 border border-[#1A1A24]/15 dark:border-white/15 text-xs sm:text-sm font-semibold text-[#1A1A24] dark:text-white focus:outline-none focus:border-[#ff6200]"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#1A1A24]/10 dark:border-white/10">
                  <button
                    type="button"
                    onClick={() => setShowPostModal(false)}
                    className="px-5 py-3 rounded-xl text-sm font-bold text-[rgba(26,26,36,0.65)] dark:text-white/65 hover:bg-[#1A1A24]/5 dark:hover:bg-white/10 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn-coral rounded-xl px-6 py-3 text-sm font-black shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-all"
                  >
                    <CheckCircle className="w-4 h-4" /> Publish Job Posting
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
