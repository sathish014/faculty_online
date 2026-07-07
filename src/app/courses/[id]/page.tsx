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

  const c = courseData;

  return (
    <main className="min-h-screen" style={{ background: "var(--bg-primary)" }}>
      <Navbar />

      {/* Hero banner */}
      <div
        className="pt-16 pb-0"
        style={{ background: "linear-gradient(135deg, #1a0630 0%, #2e0854 50%, #4D148C 100%)" }}
      >
        <div className="container-xl py-10">
          <div className="grid lg:grid-cols-[1fr,380px] gap-10 items-start">
            {/* Left */}
            <div>
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-white/50 text-xs mb-4">
                <Link href="/courses" className="hover:text-white transition-colors">Courses</Link>
                <span>/</span>
                <span className="text-white/80">{c.level}</span>
              </div>

              <h1 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3">
                {c.title}
              </h1>
              <p className="text-white/70 text-base mb-5 leading-relaxed">{c.subtitle}</p>

              {/* Rating row */}
              <div className="flex flex-wrap items-center gap-4 mb-6 text-sm">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-[#f59e0b]">{c.rating}</span>
                  <div className="flex">
                    {[1,2,3,4,5].map((s) => <Star key={s} className="w-4 h-4 star-filled" />)}
                  </div>
                  <span className="text-white/50">({c.reviewCount.toLocaleString()} reviews)</span>
                </div>
                <div className="flex items-center gap-1 text-white/70">
                  <Users className="w-4 h-4" />
                  <span>{c.studentCount} students</span>
                </div>
              </div>

              {/* Instructor */}
              <div className="flex items-center gap-3 mb-6">
                <img src={c.instructor.image} alt={c.instructor.name}
                  className="w-8 h-8 rounded-full object-cover border border-white/30" />
                <div className="text-sm">
                  <span className="text-white/60">Created by </span>
                  <span className="font-semibold text-white">{c.instructor.name}</span>
                </div>
              </div>

              {/* Meta badges */}
              <div className="flex flex-wrap gap-3 text-xs text-white/70">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> {c.duration} total
                </div>
                <div className="flex items-center gap-1.5">
                  <BarChart3 className="w-3.5 h-3.5" /> {c.level}
                </div>
                <div className="flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5" /> {c.language}
                </div>
                <div className="flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" /> Certificate included
                </div>
              </div>
            </div>

            {/* Right: Enroll card (desktop) */}
            <div
              className="hidden lg:block rounded-2xl overflow-hidden shadow-2xl sticky top-24"
              style={{ background: "var(--bg-sidebar)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <div className="relative h-48 overflow-hidden">
                <img src={c.thumbnail} alt={c.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                    <PlayCircle className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div
                  className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold text-white"
                  style={{ background: "rgba(77,20,140,0.9)" }}
                >
                  Preview Available
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-black text-[#1A1A24]">{c.price}</span>
                  <span className="text-base text-[rgba(26,26,36,0.4)] line-through">{c.originalPrice}</span>
                  <span className="text-sm font-bold text-[#16a34a]">74% off</span>
                </div>
                <button
                  id="course-enroll-btn"
                  className="w-full btn-coral rounded-xl py-3.5 font-bold text-base mb-3"
                  style={{ boxShadow: "0 8px 24px rgba(255,98,0,0.35)" }}
                >
                  Enroll Now
                </button>
                <button
                  id="course-cart-btn"
                  className="w-full btn-ghost rounded-xl py-3 font-semibold text-sm mb-4"
                >
                  Add to Cart
                </button>
                <p className="text-center text-xs text-[rgba(26,26,36,0.5)] mb-4">30-day money-back guarantee</p>
                <div className="flex gap-3">
                  <button
                    onClick={() => setWishlisted(!wishlisted)}
                    className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-sm font-medium border border-[rgba(26,26,36,0.12)] hover:bg-[rgba(26,26,36,0.04)] transition-colors"
                  >
                    <Heart className="w-4 h-4" style={{ color: wishlisted ? "#ff6200" : undefined, fill: wishlisted ? "#ff6200" : "none" }} />
                    {wishlisted ? "Wishlisted" : "Wishlist"}
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-sm font-medium border border-[rgba(26,26,36,0.12)] hover:bg-[rgba(26,26,36,0.04)] transition-colors">
                    <Share2 className="w-4 h-4" />
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content tabs */}
      <div className="container-xl py-10 grid lg:grid-cols-[1fr,380px] gap-10">
        <div>
          {/* Tabs */}
          <div className="flex gap-0 border-b border-[rgba(26,26,36,0.1)] mb-8 overflow-x-auto">
            {["overview", "curriculum", "instructor", "reviews"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="px-5 py-3 text-sm font-semibold capitalize flex-shrink-0 transition-all border-b-2"
                style={{
                  borderColor: activeTab === tab ? "#ff6200" : "transparent",
                  color: activeTab === tab ? "#ff6200" : "rgba(26,26,36,0.6)",
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Overview */}
          {activeTab === "overview" && (
            <div className="space-y-8">
              {/* Outcomes */}
              <div>
                <h2 className="text-xl font-black text-[#1A1A24] mb-4">What you&apos;ll learn</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {c.outcomes.map((o, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-[#16a34a] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[rgba(26,26,36,0.75)]">{o}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Requirements */}
              <div>
                <h2 className="text-xl font-black text-[#1A1A24] mb-4">Requirements</h2>
                <ul className="space-y-2">
                  {c.requirements.map((r, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-[rgba(26,26,36,0.7)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff6200] mt-2 flex-shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Curriculum */}
          {activeTab === "curriculum" && (
            <div className="space-y-3">
              <h2 className="text-xl font-black text-[#1A1A24] mb-6">Course Curriculum</h2>
              {c.curriculum.map((section, si) => (
                <div
                  key={si}
                  className="rounded-xl overflow-hidden"
                  style={{ border: "1px solid rgba(26,26,36,0.1)" }}
                >
                  <button
                    onClick={() => setOpenSection(openSection === si ? null : si)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold text-sm"
                    style={{ background: "var(--bg-secondary)" }}
                  >
                    <span className="text-[#1A1A24]">{section.section}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-[rgba(26,26,36,0.5)]">{section.lessons.length} lessons</span>
                      <ChevronDown
                        className="w-4 h-4 transition-transform"
                        style={{
                          color: "rgba(26,26,36,0.5)",
                          transform: openSection === si ? "rotate(180deg)" : "rotate(0deg)",
                        }}
                      />
                    </div>
                  </button>
                  {openSection === si && (
                    <div className="divide-y divide-[rgba(26,26,36,0.06)]">
                      {section.lessons.map((lesson, li) => (
                        <div key={li} className="flex items-center justify-between px-5 py-3">
                          <div className="flex items-center gap-3">
                            <PlayCircle className="w-4 h-4 text-[rgba(26,26,36,0.4)]" />
                            <span className="text-sm text-[rgba(26,26,36,0.75)]">{lesson.name}</span>
                            {lesson.free && (
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[rgba(22,163,74,0.1)] text-[#16a34a] border border-[rgba(22,163,74,0.2)]">
                                Free
                              </span>
                            )}
                          </div>
                          <span className="text-xs text-[rgba(26,26,36,0.45)]">{lesson.duration}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Instructor */}
          {activeTab === "instructor" && (
            <div>
              <h2 className="text-xl font-black text-[#1A1A24] mb-6">Your Instructor</h2>
              <div className="flex items-start gap-4 mb-4">
                <img src={c.instructor.image} alt={c.instructor.name}
                  className="w-16 h-16 rounded-2xl object-cover" />
                <div>
                  <h3 className="font-bold text-[#1A1A24] text-lg">{c.instructor.name}</h3>
                  <p className="text-sm text-[rgba(26,26,36,0.6)]">{c.instructor.role}</p>
                  <div className="flex items-center gap-4 mt-2 text-xs text-[rgba(26,26,36,0.55)]">
                    <div className="flex items-center gap-1"><Star className="w-3.5 h-3.5 star-filled" /> {c.instructor.rating} Rating</div>
                    <div className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> {c.instructor.students} Students</div>
                    <div className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5" /> {c.instructor.courses} Courses</div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-[rgba(26,26,36,0.7)] leading-relaxed">{c.instructor.bio}</p>
            </div>
          )}

          {/* Reviews */}
          {activeTab === "reviews" && (
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="text-center">
                  <div className="text-5xl font-black text-[#1A1A24]">{c.rating}</div>
                  <div className="flex justify-center mt-1">
                    {[1,2,3,4,5].map((s) => <Star key={s} className="w-4 h-4 star-filled" />)}
                  </div>
                  <p className="text-xs text-[rgba(26,26,36,0.5)] mt-1">Course Rating</p>
                </div>
              </div>
              <div className="space-y-4">
                {c.reviews.map((r, i) => (
                  <div key={i} className="p-5 rounded-xl" style={{ background: "var(--bg-sidebar)", border: "1px solid rgba(26,26,36,0.08)" }}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-[rgba(77,20,140,0.1)] flex items-center justify-center text-[#4D148C] font-bold text-sm">
                          {r.name.charAt(0)}
                        </div>
                        <span className="font-semibold text-sm text-[#1A1A24]">{r.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[1,2,3,4,5].map((s) => (
                            <Star key={s} className={`w-3.5 h-3.5 ${s <= r.rating ? "star-filled" : "star-empty"}`} />
                          ))}
                        </div>
                        <span className="text-xs text-[rgba(26,26,36,0.45)]">{r.date}</span>
                      </div>
                    </div>
                    <p className="text-sm text-[rgba(26,26,36,0.7)] leading-relaxed">{r.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Mobile enroll card - inline (below content, before footer) */}
        <div
          className="lg:hidden rounded-2xl overflow-hidden shadow-lg mt-6"
          style={{ background: "var(--bg-sidebar)", border: "1px solid rgba(26,26,36,0.1)" }}
        >
          <div className="p-5">
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-2xl font-black text-[#1A1A24]">{c.price}</span>
              <span className="text-sm text-[rgba(26,26,36,0.4)] line-through">{c.originalPrice}</span>
              <span className="text-sm font-bold text-[#16a34a]">74% off</span>
            </div>
            <button id="course-mobile-enroll-btn" className="w-full btn-coral rounded-xl py-3.5 font-bold text-base mb-2">
              Enroll Now
            </button>
            <p className="text-center text-xs text-[rgba(26,26,36,0.45)]">30-day money-back guarantee</p>
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
          className="flex-1 btn-coral rounded-xl py-3 font-bold text-sm"
          style={{ boxShadow: "0 4px 16px rgba(255,98,0,0.3)" }}
        >
          Enroll Now
        </button>
      </div>

      {/* Add bottom padding on mobile to avoid sticky bar overlap */}
      <div className="lg:hidden h-20" />

      <Footer />
    </main>
  );
}
