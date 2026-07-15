"use client";

import React, { useState } from "react";
import Navbar from "../../components/landing/Navbar";
import Footer from "../../components/landing/Footer";
import { Star, Clock, Users, BookOpen, PlayCircle, CheckCircle, ChevronDown, Share2, Heart, Award, BarChart3, Globe } from "lucide-react";
import Link from "next/link";

// Mock data for demo
const courseData = {
  id: "c1",
  title: "Complete Web Development Bootcamp 2026",
  subtitle: "Master HTML, CSS, JavaScript, React, Node.js, and Next.js from scratch to production-ready developer.",
  instructor: {
    name: "Amit Patel",
    role: "Senior Full Stack Engineer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=100&auto=format&fit=crop",
    students: "18K+",
    courses: 6,
    rating: 4.8,
    bio: "10+ years of industry experience at Google and Flipkart. Passionate about teaching real-world development.",
  },
  rating: 4.8,
  reviewCount: 3412,
  studentCount: "18,000+",
  duration: "42h",
  lastUpdated: "June 2026",
  language: "Hindi & English",
  level: "Beginner",
  price: "₹1,299",
  originalPrice: "₹4,999",
  thumbnail: "https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?q=80&w=800&auto=format&fit=crop",
  outcomes: [
    "Build real-world websites from scratch",
    "Master HTML5, CSS3, and modern JavaScript",
    "Learn React JS and component-based architecture",
    "Deploy apps with Next.js and Vercel",
    "Integrate databases with Node.js and MongoDB",
    "Get job-ready with a complete portfolio",
  ],
  requirements: [
    "No prior programming experience needed",
    "A computer with internet access",
    "Willingness to learn and practice daily",
  ],
  curriculum: [
    {
      section: "Section 1: Getting Started",
      lessons: [
        { name: "Welcome & Course Overview", duration: "5:30", free: true },
        { name: "Setting Up Your Development Environment", duration: "12:45", free: true },
        { name: "How the Web Works", duration: "8:20", free: false },
      ],
    },
    {
      section: "Section 2: HTML Fundamentals",
      lessons: [
        { name: "HTML Document Structure", duration: "14:00", free: false },
        { name: "Semantic HTML5 Elements", duration: "18:30", free: false },
        { name: "HTML Forms & Validation", duration: "22:10", free: false },
      ],
    },
    {
      section: "Section 3: CSS & Modern Styling",
      lessons: [
        { name: "CSS Selectors & Specificity", duration: "16:45", free: false },
        { name: "Flexbox & CSS Grid", duration: "28:20", free: false },
        { name: "Responsive Design & Media Queries", duration: "20:00", free: false },
        { name: "CSS Animations & Transitions", duration: "15:30", free: false },
      ],
    },
    {
      section: "Section 4: JavaScript",
      lessons: [
        { name: "JS Fundamentals & ES6+", duration: "35:00", free: false },
        { name: "DOM Manipulation", duration: "25:15", free: false },
        { name: "Async JavaScript & Promises", duration: "30:40", free: false },
      ],
    },
  ],
  reviews: [
    { name: "Rahul S.", rating: 5, date: "Jun 2026", text: "Best web dev course I've ever taken! Amit explains everything so clearly. Highly recommended for anyone starting out." },
    { name: "Priya M.", rating: 5, date: "May 2026", text: "Completed this in 6 weeks. Got my first freelance project within a month of finishing. Worth every rupee!" },
    { name: "Karan J.", rating: 4, date: "Apr 2026", text: "Excellent content. The Node.js section could be a bit more detailed, but overall a 10/10 course." },
  ],
};

export default function CourseDetailsPage() {
  const [openSection, setOpenSection] = useState<number | null>(0);
  const [wishlisted, setWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [showEnrollModal, setShowEnrollModal] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false);

  const c = courseData;

  return (
    <main className="min-h-screen" style={{ background: "var(--bg-primary)" }}>
      <Navbar />

      {/* Hero banner */}
      <div
        className="pt-24 sm:pb-14 px-4 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1a0630 0%, #2e0854 50%, #4D148C 100%)" }}
      >
        <div className="container-xl relative z-10">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-white/60 text-xs font-semibold mb-4">
              <Link href="/courses" className="hover:text-white transition-colors">Courses</Link>
              <span>/</span>
              <span className="text-white/90">{c.level}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight mb-4">
              {c.title}
            </h1>
            <p className="text-white/80 text-base sm:text-lg mb-6 leading-relaxed max-w-2xl">{c.subtitle}</p>

            {/* Rating row */}
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm">
              <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
                <span className="font-extrabold text-[#f59e0b]">{c.rating}</span>
                <div className="flex">
                  {[1,2,3,4,5].map((s) => <Star key={s} className="w-4 h-4 star-filled" />)}
                </div>
                <span className="text-white/70 font-medium">({c.reviewCount.toLocaleString()} reviews)</span>
              </div>
              <div className="flex items-center gap-1.5 text-white/90 font-medium bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
                <Users className="w-4 h-4 text-emerald-400" />
                <span>{c.studentCount} students</span>
              </div>
            </div>

            {/* Instructor */}
            <div className="flex items-center gap-3 mb-6">
              <img src={c.instructor.image} alt={c.instructor.name}
                className="w-11 h-11 rounded-full object-cover border-2 border-[#ff6200] shadow-md" />
              <div className="text-sm">
                <span className="text-white/60 font-medium">Created by </span>
                <button onClick={() => setActiveTab("instructor")} className="font-bold text-white hover:text-[#ff6200] transition-colors underline-offset-4 hover:underline">{c.instructor.name}</button>
              </div>
            </div>

            {/* Meta badges */}
            <div className="flex flex-wrap gap-3 text-xs font-semibold text-white/85">
              <div className="flex items-center gap-1.5 bg-black/25 backdrop-blur-sm px-3.5 py-2 rounded-xl border border-white/10 shadow-sm">
                <Clock className="w-4 h-4 text-[#ff6200]" /> {c.duration} total
              </div>
              <div className="flex items-center gap-1.5 bg-black/25 backdrop-blur-sm px-3.5 py-2 rounded-xl border border-white/10 shadow-sm">
                <BarChart3 className="w-4 h-4 text-amber-400" /> {c.level}
              </div>
              <div className="flex items-center gap-1.5 bg-black/25 backdrop-blur-sm px-3.5 py-2 rounded-xl border border-white/10 shadow-sm">
                <Globe className="w-4 h-4 text-cyan-400" /> {c.language}
              </div>
              <div className="flex items-center gap-1.5 bg-black/25 backdrop-blur-sm px-3.5 py-2 rounded-xl border border-white/10 shadow-sm">
                <Award className="w-4 h-4 text-emerald-400" /> Certificate included
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content & Enroll Card Grid */}
      <div className="container-xl px-4 py-10 pb-20 lg:pb-32 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,380px] gap-10 items-start">
          
          {/* Right Column (Enroll Card) - Placed order-1 on mobile/tablet right at top, order-2 on desktop */}
          <div className="w-full lg:col-start-2 lg:row-start-1 order-1 lg:order-2 sticky top-28 mt-3 mb-3 z-30">
            <div
              className="rounded-3xl overflow-hidden shadow-2xl border border-[#1A1A24]/12 transition-all bg-white dark:bg-[#1A1A24]"
              style={{ background: "var(--bg-sidebar)" }}
            >
              <div className="relative h-52 sm:h-56 overflow-hidden bg-black/20 group cursor-pointer">
                <img src={c.thumbnail} alt={c.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-xl group-hover:scale-110 transition-transform">
                    <PlayCircle className="w-9 h-9 text-white drop-shadow-md" />
                  </div>
                </div>
                <div
                  className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-xs font-bold text-white shadow-md"
                  style={{ background: "rgba(77,20,140,0.95)" }}
                >
                  Preview Available
                </div>
              </div>
              <div className="p-6 sm:p-7 space-y-5">
                <div className="flex items-baseline gap-2.5">
                  <span className="text-3xl font-black text-[#1A1A24]">{c.price}</span>
                  <span className="text-base text-[rgba(26,26,36,0.4)] line-through font-semibold">{c.originalPrice}</span>
                  <span className="text-xs font-extrabold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">74% off</span>
                </div>
                <button
                  id="course-enroll-btn"
                  onClick={() => { setShowEnrollModal(true); setIsEnrolled(true); }}
                  className="w-full btn-coral rounded-2xl py-4 font-black text-base shadow-xl flex items-center justify-center gap-2 active:scale-95 transition-all"
                  style={{ boxShadow: "0 8px 24px rgba(255,98,0,0.35)" }}
                >
                  <BookOpen className="w-5 h-5" /> Enroll Now
                </button>
                <button
                  id="course-cart-btn"
                  onClick={() => { setShowEnrollModal(true); setIsEnrolled(true); }}
                  className="w-full py-3.5 rounded-2xl font-bold text-sm bg-[#1A1A24]/5 text-[#1A1A24] hover:bg-[#1A1A24]/10 transition-colors active:scale-95"
                >
                  Add to Cart
                </button>
                <p className="text-center text-xs text-[rgba(26,26,36,0.55)] font-semibold flex items-center justify-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500" /> 30-day money-back guarantee
                </p>
                <div className="flex gap-3 pt-2 border-t border-[#1A1A24]/10">
                  <button
                    onClick={() => setWishlisted(!wishlisted)}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold border border-[#1A1A24]/12 hover:bg-[#1A1A24]/5 transition-colors"
                  >
                    <Heart className="w-4 h-4" style={{ color: wishlisted ? "#ff6200" : undefined, fill: wishlisted ? "#ff6200" : "none" }} />
                    {wishlisted ? "Saved" : "Wishlist"}
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold border border-[#1A1A24]/12 hover:bg-[#1A1A24]/5 transition-colors">
                    <Share2 className="w-4 h-4 text-[#1A1A24]/60" />
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Left Column (Content Tabs & Details) */}
          <div className="w-full min-w-0 max-w-full order-2 lg:order-1 lg:col-start-1 lg:row-start-1">
            {/* Tabs */}
            <div className="flex gap-2 border-b border-[rgba(26,26,36,0.1)] pt-2 pb-3 mb-8 overflow-x-auto custom-scrollbar">
              {["overview", "curriculum", "instructor", "reviews"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-xl text-sm font-bold capitalize flex-shrink-0 transition-all ${
                    activeTab === tab
                      ? "bg-[#ff6200] text-white shadow-md shadow-[#ff6200]/25"
                      : "text-[rgba(26,26,36,0.65)] hover:text-[#1A1A24] hover:bg-[#1A1A24]/5"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Overview */}
            {activeTab === "overview" && (
              <div className="space-y-8">
                {/* Outcomes */}
                <div className="bg-white/80 p-6 sm:p-8 ">
                  <h2 className="text-xl font-black text-[#1A1A24] mb-4">What you&apos;ll learn</h2>
                  <div className="grid sm:grid-cols-2 gap-3.5">
                    {c.outcomes.map((o, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-[rgba(26,26,36,0.75)]">{o}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Requirements */}
                <div className="bg-white/80 rounded-3xl p-6 sm:p-8 border border-[#1A1A24]/10 shadow-sm">
                  <h2 className="text-xl font-black text-[#1A1A24] mb-4">Requirements</h2>
                  <ul className="space-y-2.5">
                    {c.requirements.map((r, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm font-medium text-[rgba(26,26,36,0.75)]">
                        <span className="w-2 h-2 rounded-full bg-[#ff6200] mt-1.5 flex-shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Curriculum */}
            {activeTab === "curriculum" && (
              <div className="space-y-4  p-6 sm:p-8 ">
                <h2 className="text-xl font-black text-[#1A1A24] mb-4">Course Curriculum</h2>
                <div className="space-y-3">
                  {c.curriculum.map((section, si) => (
                    <div
                      key={si}
                      className="rounded-2xl overflow-hidden border border-[#1A1A24]/10 transition-all"
                    >
                      <button
                        onClick={() => setOpenSection(openSection === si ? null : si)}
                        className="w-full flex items-center justify-between px-5 py-4 text-left font-bold text-sm bg-[rgba(26,26,36,0.03)] hover:bg-[rgba(26,26,36,0.06)] transition-colors"
                      >
                        <span className="text-[#1A1A24]">{section.section}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold text-[rgba(26,26,36,0.5)]">{section.lessons.length} lessons</span>
                          <ChevronDown
                            className="w-4 h-4 text-[rgba(26,26,36,0.5)] transition-transform duration-300"
                            style={{ transform: openSection === si ? "rotate(180deg)" : "rotate(0deg)" }}
                          />
                        </div>
                      </button>
                      {openSection === si && (
                        <div className="divide-y divide-[rgba(26,26,36,0.06)] bg-white">
                          {section.lessons.map((lesson, li) => (
                            <div key={li} className="flex items-center justify-between px-5 py-3.5 hover:bg-[#ff6200]/5 transition-colors">
                              <div className="flex items-center gap-3">
                                <PlayCircle className="w-4 h-4 text-[#ff6200] flex-shrink-0" />
                                <span className="text-sm font-medium text-[rgba(26,26,36,0.8)]">{lesson.name}</span>
                                {lesson.free && (
                                  <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
                                    Free Preview
                                  </span>
                                )}
                              </div>
                              <span className="text-xs font-semibold text-[rgba(26,26,36,0.45)]">{lesson.duration}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Instructor */}
            {activeTab === "instructor" && (
              <div className="bg-white/80 rounded-3xl p-6 sm:p-8 border border-[#1A1A24]/10 shadow-sm space-y-6">
                <h2 className="text-xl font-black text-[#1A1A24]">Your Instructor</h2>
                <div className="flex flex-col sm:flex-row items-start gap-5">
                  <img src={c.instructor.image} alt={c.instructor.name}
                    className="w-20 h-20 rounded-2xl object-cover border-2 border-[#ff6200] shadow-md" />
                  <div>
                    <h3 className="font-black text-[#1A1A24] text-xl">{c.instructor.name}</h3>
                    <p className="text-sm font-semibold text-[#ff6200] mt-0.5">{c.instructor.role}</p>
                    <div className="flex flex-wrap items-center gap-4 mt-3 text-xs font-bold text-[rgba(26,26,36,0.65)]">
                      <div className="flex items-center gap-1 bg-[#1A1A24]/5 px-3 py-1.5 rounded-xl"><Star className="w-3.5 h-3.5 star-filled" /> {c.instructor.rating} Rating</div>
                      <div className="flex items-center gap-1 bg-[#1A1A24]/5 px-3 py-1.5 rounded-xl"><Users className="w-3.5 h-3.5 text-emerald-600" /> {c.instructor.students} Students</div>
                      <div className="flex items-center gap-1 bg-[#1A1A24]/5 px-3 py-1.5 rounded-xl"><BookOpen className="w-3.5 h-3.5 text-[#4D148C]" /> {c.instructor.courses} Courses</div>
                    </div>
                  </div>
                </div>
                <p className="text-sm font-medium text-[rgba(26,26,36,0.75)] leading-relaxed pt-3 border-t border-[#1A1A24]/10">{c.instructor.bio}</p>
              </div>
            )}

            {/* Reviews */}
            {activeTab === "reviews" && (
              <div className="bg-white/80  p-6 sm:p-8  space-y-8">
                <div className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-2xl bg-[#ff6200]/5 border border-[#ff6200]/20">
                  <div className="text-center sm:text-left">
                    <div className="text-5xl font-black text-[#1A1A24]">{c.rating}</div>
                    <div className="flex justify-center sm:justify-start mt-1.5">
                      {[1,2,3,4,5].map((s) => <Star key={s} className="w-5 h-5 star-filled" />)}
                    </div>
                    <p className="text-xs font-bold text-[rgba(26,26,36,0.6)] mt-1">Overall Course Rating</p>
                  </div>
                  <div className="flex-1 text-sm font-medium text-[rgba(26,26,36,0.7)] text-center sm:text-left">
                    Students consistently rate this course `4.8 out of 5 stars` across over `{c.reviewCount.toLocaleString()} reviews`, highlighting the hands-on project approach and clear explanations.
                  </div>
                </div>
                <div className="space-y-4">
                  {c.reviews.map((r, i) => (
                    <div key={i} className="p-5 rounded-2xl border border-[#1A1A24]/10 hover:border-[#ff6200]/30 transition-all" style={{ background: "var(--bg-sidebar)" }}>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-[rgba(77,20,140,0.1)] flex items-center justify-center text-[#4D148C] font-black text-sm">
                            {r.name.charAt(0)}
                          </div>
                          <span className="font-bold text-sm text-[#1A1A24]">{r.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex">
                            {[1,2,3,4,5].map((s) => (
                              <Star key={s} className={`w-3.5 h-3.5 ${s <= r.rating ? "star-filled" : "star-empty"}`} />
                            ))}
                          </div>
                          <span className="text-xs font-medium text-[rgba(26,26,36,0.45)]">{r.date}</span>
                        </div>
                      </div>
                      <p className="text-sm font-medium text-[rgba(26,26,36,0.75)] leading-relaxed">{r.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile sticky bottom enroll bar */}
      <div
        className="lg:hidden fixed bottom-0 left-0 right-0 z-40 px-4 py-3 flex items-center gap-3"
        style={{
          background: "rgba(255, 255, 255, 0.97)",
          backdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(26, 26, 36, 0.1)",
          boxShadow: "0 -4px 20px rgba(0,0,0,0.08)",
        }}
      >
        <div>
          <div className="text-lg font-black text-[#1A1A24]">{c.price}</div>
          <div className="text-xs text-[rgba(26,26,36,0.5)] line-through">{c.originalPrice}</div>
        </div>
        <button
          onClick={() => { setShowEnrollModal(true); setIsEnrolled(true); }}
          className="flex-1 btn-coral rounded-xl py-3 font-bold text-sm"
          style={{ boxShadow: "0 4px 16px rgba(255,98,0,0.3)" }}
        >
          Enroll Now
        </button>
      </div>

      {/* Add bottom padding on mobile to avoid sticky bar overlap */}
      <div className="lg:hidden h-20" />

      {/* Enrollment Confirmation Modal */}
      {showEnrollModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-[#1A1A24]/10 relative animate-fade-up text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner animate-bounce">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-[#1A1A24]">Enrollment Confirmed!</h3>
            <p className="text-sm font-medium text-[#1A1A24]/70 max-w-xs mx-auto leading-relaxed">
              You are successfully enrolled in <strong className="text-[#1A1A24] font-black">{c.title}</strong>. Welcome aboard!
            </p>
            <div className="bg-[#1A1A24]/5 rounded-2xl p-4 text-left space-y-2 text-xs font-bold text-[#1A1A24]">
              <div className="flex justify-between border-b border-[#1A1A24]/10 pb-1.5">
                <span className="text-[#1A1A24]/60">Enrollment ID</span>
                <span className="font-mono text-[#4D148C]">#ENR-{(Math.random() * 90000 + 10000).toFixed(0)}</span>
              </div>
              <div className="flex justify-between border-b border-[#1A1A24]/10 pb-1.5">
                <span className="text-[#1A1A24]/60">Amount Paid</span>
                <span className="text-emerald-600">{c.price}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#1A1A24]/60">Access Type</span>
                <span>Lifetime Unlimited</span>
              </div>
            </div>
            <div className="flex flex-col gap-2 pt-2">
              <Link
                href="/student-dashboard"
                className="btn-coral w-full py-3.5 rounded-xl text-xs font-bold shadow-md block text-center"
              >
                Go to Student Dashboard &rarr;
              </Link>
              <button
                onClick={() => setShowEnrollModal(false)}
                className="w-full py-2.5 rounded-xl text-xs font-bold text-[#1A1A24]/60 hover:text-[#1A1A24] transition-colors"
              >
                Continue Browsing Course
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
