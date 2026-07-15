"use client";

import React, { useState } from "react";
import Navbar from "../../components/landing/Navbar";
import Footer from "../../components/landing/Footer";
import { Star, Users, BookOpen, CheckCircle, ExternalLink, Globe, Award, ShieldCheck, Sparkles, Clock, Calendar, MessageSquare, Heart, Share2, X, Send } from "lucide-react";
import Link from "next/link";
import CourseCard, { type CourseCardData } from "../../components/cards/CourseCard";

const facultyData = {
  id: "f1",
  name: "Priya Sharma",
  coverImage: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1600&auto=format&fit=crop",
  profileImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
  specialty: "IIT-JEE Mathematics Expert",
  title: "Associate Professor | IIT Bombay Alumni",
  bio: "With over 12 years of teaching experience and an M.Sc in Mathematics from IIT Bombay, I've helped 18,000+ students crack JEE Mains & Advanced. My teaching philosophy is built on visual problem-solving and pattern recognition. I make even the hardest concepts feel intuitive and natural.",
  rating: 4.9,
  reviewCount: 1284,
  students: "18,000+",
  coursesCount: 5,
  experience: "12 Years",
  isVerified: true,
  skills: ["Calculus", "Algebra", "Coordinate Geometry", "Trigonometry", "Differential Equations", "Probability"],
  education: [
    { degree: "M.Sc Mathematics", institute: "IIT Bombay", year: "2012" },
    { degree: "B.Sc Mathematics (Hons)", institute: "Delhi University", year: "2010" },
  ],
  certifications: [
    { name: "National Best Teacher Award 2024", issuer: "Ministry of Education" },
    { name: "JEE Expert Certification", issuer: "Allen Career Institute" },
  ],
  social: {
    website: "https://priyasharma.in",
    twitter: "https://twitter.com/priyasharma",
    linkedin: "https://linkedin.com/in/priyasharma",
  },
  reviews: [
    { name: "Aryan K.", rating: 5, date: "Jun 2026", text: "Priya ma'am is exceptional! Her way of explaining complex integration concepts is unmatched. Improved my JEE score by 30 percentile." },
    { name: "Sneha M.", rating: 5, date: "May 2026", text: "Best mathematics tutor I ever had. Patient, clear, and always available for doubts. Highly recommend!" },
    { name: "Raj T.", rating: 5, date: "Apr 2026", text: "Got AIR 847 in JEE Advanced this year! Priya ma'am's guidance was crucial. Thank you so much!" },
  ],
};

const publishedCourses: CourseCardData[] = [
  {
    id: "c3", slug: "jee-mathematics-masterclass",
    thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=400&auto=format&fit=crop",
    title: "JEE Mathematics Masterclass – All Topics",
    instructor: "Priya Sharma", rating: 4.9, reviewCount: 1824,
    duration: "60h", studentCount: "22K+", difficulty: "Advanced",
    price: "₹1,999", originalPrice: "₹7,999", category: "JEE Prep",
  },
];

export default function FacultyProfilePage() {
  const f = facultyData;
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [messageForm, setMessageForm] = useState({ subject: "1-on-1 Tutoring Inquiry", email: "", text: "" });
  const [messageSent, setMessageSent] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageForm.email.trim() || !messageForm.text.trim()) {
      alert("Please provide your email and message details.");
      return;
    }
    setMessageSent(true);
  };

  return (
    <main className="min-h-screen font-sans" style={{ background: "var(--bg-primary)" }}>
      <Navbar />

      {/* Cover Banner */}
      <div
        className="pt-20 relative h-64 sm:h-72 lg:h-80 overflow-hidden group"
        style={{ background: "linear-gradient(135deg, #1a0630 0%, #2e0854 50%, #4D148C 100%)" }}
      >
        <img
          src={f.coverImage}
          alt="cover"
          className="w-full h-full object-cover opacity-85 transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A24] via-[#1A1A24]/50 to-transparent" />
        <div className="absolute top-24 left-0 right-0 z-10 px-4">
          <div className="container-xl">
            <div className="flex items-center gap-2 text-white/70 text-xs font-semibold backdrop-blur-md bg-black/25 px-4 py-2 rounded-full w-fit border border-white/10 shadow-sm">
              <Link href="/courses" className="hover:text-white transition-colors">Courses</Link>
              <span>/</span>
              <Link href="/faculty" className="hover:text-white transition-colors">Faculty</Link>
              <span>/</span>
              <span className="text-white font-bold">{f.name}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container-xl px-4 relative z-20">
        {/* Glassmorphic Profile Header Card */}
        <div className="relative -mt-20 sm:-mt-24 bg-white/95 dark:bg-[#1A1A24]/95 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-[#1A1A24]/12 dark:border-white/10 shadow-2xl mb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="relative flex-shrink-0">
                <img
                  src={f.profileImage}
                  alt={f.name}
                  className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-cover border-4 border-white dark:border-[#1A1A24] shadow-2xl"
                />
                {f.isVerified && (
                  <div
                    className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center shadow-lg border-2 border-white dark:border-[#1A1A24]"
                    style={{ background: "#4D148C" }}
                    title="Verified Faculty"
                  >
                    <CheckCircle className="w-4.5 h-4.5 text-white" />
                  </div>
                )}
              </div>
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-3">
                  <h1 className="text-2xl sm:text-3xl font-black text-[#1A1A24] dark:text-white tracking-tight">{f.name}</h1>
                  <span className="px-3.5 py-1 rounded-full text-xs font-extrabold bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 flex items-center gap-1.5 shadow-sm">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-500" /> Top Mentor
                  </span>
                </div>
                <p className="text-sm sm:text-base font-semibold text-[rgba(26,26,36,0.7)] dark:text-white/70 max-w-xl leading-relaxed">
                  {f.title}
                </p>
                <div className="flex items-center gap-2 pt-1">
                  <span
                    className="px-3.5 py-1.5 rounded-xl text-xs font-black uppercase tracking-wider text-white shadow-md flex items-center gap-1.5"
                    style={{ background: "linear-gradient(135deg, #4D148C, #2e0854)" }}
                  >
                    <Award className="w-3.5 h-3.5 text-[#ff6200]" /> {f.specialty}
                  </span>
                </div>
              </div>
            </div>

            {/* Contact Action */}
            <div className="flex items-center justify-end pt-4 md:pt-0 border-t md:border-t-0 border-[#1A1A24]/10 dark:border-white/10">
              <button
                onClick={() => {
                  setMessageSent(false);
                  setShowMessageModal(true);
                }}
                className="btn-coral rounded-xl px-7 py-3.5 text-sm font-black shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-all w-full sm:w-auto cursor-pointer"
                style={{ boxShadow: "0 6px 20px rgba(255,98,0,0.3)" }}
              >
                <MessageSquare className="w-4 h-4" /> Send Message
              </button>
            </div>
          </div>
        </div>

        {/* Elevated Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {[
            { icon: Star, label: "Rating", value: f.rating.toString(), sub: `${f.reviewCount} verified reviews`, color: "#f59e0b", bg: "rgba(245,158,11,0.1)" },
            { icon: Users, label: "Students", value: f.students, sub: "Active mentees globally", color: "#10b981", bg: "rgba(16,185,129,0.1)" },
            { icon: BookOpen, label: "Courses", value: f.coursesCount.toString(), sub: "Published masterclasses", color: "#4D148C", bg: "rgba(77,20,140,0.1)" },
            { icon: Award, label: "Experience", value: f.experience, sub: "Teaching excellence", color: "#ff6200", bg: "rgba(255,98,0,0.1)" },
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="bg-white/90 dark:bg-[#1A1A24]/90 rounded-3xl p-6 border border-[#1A1A24]/10 dark:border-white/10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col items-center text-center group"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3.5 transition-transform duration-300 group-hover:scale-110 shadow-sm"
                  style={{ background: stat.bg, color: stat.color }}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-[#1A1A24] dark:text-white tracking-tight">{stat.value}</div>
                <div className="text-xs font-bold text-[rgba(26,26,36,0.6)] dark:text-white/60 mt-1 uppercase tracking-wider">{stat.label}</div>
                <div className="text-xs text-[rgba(26,26,36,0.45)] dark:text-white/45 font-medium mt-1">{stat.sub}</div>
              </div>
            );
          })}
        </div>

        {/* Main 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,360px] gap-10 pb-24 items-start">
          <div className="space-y-10">
            {/* Bio Section */}
            <section className="bg-white/80 dark:bg-[#1A1A24]/80 rounded-3xl p-6 sm:p-8 border border-[#1A1A24]/10 dark:border-white/10 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-black text-[#1A1A24] dark:text-white mb-4 flex items-center gap-2.5">
                <span className="w-2.5 h-6 rounded-full bg-[#ff6200]" /> About {f.name.split(" ")[0]}
              </h2>
              <p className="text-sm sm:text-base font-medium text-[rgba(26,26,36,0.75)] dark:text-white/75 leading-relaxed">
                {f.bio}
              </p>
            </section>

            {/* Skills & Expertise Section */}
            <section className="bg-white/80 dark:bg-[#1A1A24]/80 rounded-3xl p-6 sm:p-8 border border-[#1A1A24]/10 dark:border-white/10 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-black text-[#1A1A24] dark:text-white mb-5 flex items-center gap-2.5">
                <span className="w-2.5 h-6 rounded-full bg-[#4D148C]" /> Skills & Core Expertise
              </h2>
              <div className="flex flex-wrap gap-2.5">
                {f.skills.map((s) => (
                  <span
                    key={s}
                    className="px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold bg-[#1A1A24]/5 dark:bg-white/10 text-[#1A1A24] dark:text-white border border-[#1A1A24]/10 dark:border-white/10 hover:border-[#ff6200] hover:bg-[#ff6200]/10 hover:text-[#ff6200] transition-all cursor-pointer shadow-sm flex items-center gap-2"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-[#ff6200] flex-shrink-0" />
                    {s}
                  </span>
                ))}
              </div>
            </section>

            {/* Published Courses Section */}
            <section className="bg-white/80 dark:bg-[#1A1A24]/80 rounded-3xl p-6 sm:p-8 border border-[#1A1A24]/10 dark:border-white/10 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl sm:text-2xl font-black text-[#1A1A24] dark:text-white flex items-center gap-2.5">
                  <span className="w-2.5 h-6 rounded-full bg-emerald-500" /> Published Courses ({publishedCourses.length})
                </h2>
                <Link href="/courses" className="text-xs font-extrabold text-[#ff6200] hover:underline flex items-center gap-1">
                  View All Courses <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full min-w-0 max-w-full items-stretch">
                {publishedCourses.map((c) => (
                  <CourseCard key={c.id} course={c} />
                ))}
              </div>
            </section>

            {/* Student Reviews Section */}
            <section className="bg-white/80 dark:bg-[#1A1A24]/80 rounded-3xl p-6 sm:p-8 border border-[#1A1A24]/10 dark:border-white/10 shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-[#1A1A24]/10 dark:border-white/10 pb-5">
                <h2 className="text-xl sm:text-2xl font-black text-[#1A1A24] dark:text-white flex items-center gap-2.5">
                  <span className="w-2.5 h-6 rounded-full bg-amber-500" /> Student Feedback
                </h2>
                <div className="flex items-center gap-2 font-bold text-sm text-[#1A1A24] dark:text-white bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                  <Star className="w-4 h-4 star-filled" /> {f.rating} ({f.reviewCount})
                </div>
              </div>
              <div className="space-y-4">
                {f.reviews.map((r, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-2xl bg-white dark:bg-[#1A1A24] border border-[#1A1A24]/10 dark:border-white/10 shadow-sm space-y-3 transition-colors hover:border-[#ff6200]/30"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4D148C] to-[#2e0854] text-white font-extrabold text-base flex items-center justify-center shadow-md">
                          {r.name.charAt(0)}
                        </div>
                        <div>
                          <span className="font-bold text-sm sm:text-base text-[#1A1A24] dark:text-white block">{r.name}</span>
                          <span className="text-xs font-semibold text-[rgba(26,26,36,0.5)] dark:text-white/50">Verified Mentee</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex gap-0.5">
                          {[1,2,3,4,5].map((s) => (
                            <Star key={s} className={`w-4 h-4 ${s <= r.rating ? "star-filled" : "star-empty"}`} />
                          ))}
                        </div>
                        <span className="text-xs font-semibold text-[rgba(26,26,36,0.45)] dark:text-white/45 ml-1">{r.date}</span>
                      </div>
                    </div>
                    <p className="text-sm sm:text-base font-medium text-[rgba(26,26,36,0.75)] dark:text-white/75 leading-relaxed pl-1 sm:pl-13">
                      &quot;{r.text}&quot;
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sticky Right Sidebar */}
          <div className="space-y-8 sticky top-28 z-30">
            {/* Book Session CTA Card */}
            <div
              className="rounded-3xl p-7 sm:p-8 shadow-2xl relative overflow-hidden border border-white/15"
              style={{ background: "linear-gradient(135deg, #1a0630 0%, #2e0854 50%, #4D148C 100%)" }}
            >
              <div className="absolute top-0 right-0 w-44 h-44 rounded-full bg-[#ff6200]/15 blur-3xl -mr-10 -mt-10 pointer-events-none" />
              
              <div className="relative z-10 space-y-6">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-[#ff6200] text-white shadow-md">
                  <Sparkles className="w-3.5 h-3.5" /> 1-on-1 Mentorship & Tutoring
                </div>
                
                <div>
                  <h3 className="text-2xl font-black text-white leading-tight">Book a Live Session</h3>
                  <p className="text-white/80 text-sm font-medium mt-1.5">
                    Personalized 1-on-1 guidance tailored directly to your learning targets.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-black/25 backdrop-blur-md border border-white/10 flex items-baseline justify-between">
                  <div>
                    <span className="text-xs font-bold text-white/70 block uppercase tracking-wider">Hourly Rate</span>
                    <span className="text-3xl font-black text-white">₹800</span>
                    <span className="text-sm text-white/60 font-medium">/hr</span>
                  </div>
                  <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    Instant Booking
                  </span>
                </div>

                <div className="space-y-3 pt-1 border-t border-white/15">
                  {[
                    "Personalized doubt resolution",
                    "Live interactive whiteboard",
                    "Session recording & notes provided",
                    "Flexible rescheduling options",
                  ].map((perk, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-white/90">
                      <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>

                <button
                  id="book-session-btn"
                  onClick={() => alert(`Redirecting to book a session with ${f.name}...`)}
                  className="w-full btn-coral rounded-2xl py-4 font-black text-base shadow-2xl flex items-center justify-center gap-2 active:scale-95 transition-all"
                  style={{ boxShadow: "0 8px 24px rgba(255,98,0,0.4)" }}
                >
                  <Calendar className="w-5 h-5" /> Book 1-on-1 Session
                </button>

                <p className="text-center text-xs text-white/60 font-semibold flex items-center justify-center gap-1.5 pt-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" /> 100% Satisfaction Guarantee
                </p>
              </div>
            </div>

            {/* Education Timeline Box */}
            <div className="bg-white/80 dark:bg-[#1A1A24]/80 rounded-3xl p-6 sm:p-7 border border-[#1A1A24]/10 dark:border-white/10 shadow-sm space-y-5">
              <h3 className="font-black text-lg text-[#1A1A24] dark:text-white flex items-center gap-2 border-b border-[#1A1A24]/10 dark:border-white/10 pb-3">
                <BookOpen className="w-5 h-5 text-[#4D148C]" /> Academic Background
              </h3>
              <div className="space-y-4">
                {f.education.map((e, i) => (
                  <div key={i} className="flex items-start gap-3.5">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm font-bold text-xs"
                      style={{ background: "rgba(77,20,140,0.1)", color: "#4D148C" }}
                    >
                      <Award className="w-5 h-5" />
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-sm font-extrabold text-[#1A1A24] dark:text-white leading-snug">{e.degree}</p>
                      <p className="text-xs font-semibold text-[rgba(26,26,36,0.65)] dark:text-white/65">{e.institute}</p>
                      <span className="inline-block text-xs font-bold px-2 py-0.5 rounded-md bg-[#1A1A24]/5 dark:bg-white/10 text-[rgba(26,26,36,0.55)] dark:text-white/55 mt-1">
                        Class of {e.year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications & Awards Box */}
            <div className="bg-white/80 dark:bg-[#1A1A24]/80 rounded-3xl p-6 sm:p-7 border border-[#1A1A24]/10 dark:border-white/10 shadow-sm space-y-5">
              <h3 className="font-black text-lg text-[#1A1A24] dark:text-white flex items-center gap-2 border-b border-[#1A1A24]/10 dark:border-white/10 pb-3">
                <Sparkles className="w-5 h-5 text-[#ff6200]" /> Certifications & Awards
              </h3>
              <div className="space-y-4">
                {f.certifications.map((cert, i) => (
                  <div key={i} className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#ff6200]/10 flex items-center justify-center flex-shrink-0 shadow-sm text-[#ff6200]">
                      <Award className="w-5 h-5" />
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-sm font-extrabold text-[#1A1A24] dark:text-white leading-snug">{cert.name}</p>
                      <p className="text-xs font-semibold text-[rgba(26,26,36,0.6)] dark:text-white/60">{cert.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Send Message Modal */}
      {showMessageModal && (
        <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white dark:bg-[#1A1A24] rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#1A1A24]/15 dark:border-white/15 relative overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setShowMessageModal(false)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#1A1A24]/5 dark:bg-white/10 flex items-center justify-center text-[#1A1A24] dark:text-white hover:bg-[#ff6200] hover:text-white transition-colors cursor-pointer"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {messageSent ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/15 text-emerald-500 flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-[#1A1A24] dark:text-white">Message Sent!</h3>
                <p className="text-sm font-semibold text-[rgba(26,26,36,0.7)] dark:text-white/70 max-w-sm mx-auto leading-relaxed">
                  Your message has been delivered directly to <strong className="text-[#1A1A24] dark:text-white">{f.name}</strong>. You will receive a reply at <span className="text-[#ff6200] font-bold">{messageForm.email}</span> within 2 hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setShowMessageModal(false)}
                    className="btn-coral rounded-xl px-8 py-3.5 font-extrabold text-sm shadow-lg w-full sm:w-auto"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSendMessage} className="space-y-5">
                <div className="flex items-center gap-3.5 pb-4 border-b border-[#1A1A24]/10 dark:border-white/10 pr-8">
                  <img src={f.profileImage} alt={f.name} className="w-12 h-12 rounded-2xl object-cover shadow-md border-2 border-white dark:border-[#1A1A24]" />
                  <div>
                    <h3 className="text-lg font-black text-[#1A1A24] dark:text-white leading-tight">Message {f.name}</h3>
                    <p className="text-xs font-bold text-[#ff6200]">{f.specialty}</p>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-[#1A1A24] dark:text-white mb-2">Subject / Topic</label>
                  <select
                    value={messageForm.subject}
                    onChange={(e) => setMessageForm({ ...messageForm, subject: e.target.value })}
                    className="w-full rounded-xl px-4 py-3 bg-[#1A1A24]/5 dark:bg-white/5 border border-[#1A1A24]/15 dark:border-white/15 text-sm font-bold text-[#1A1A24] dark:text-white focus:outline-none focus:border-[#ff6200]"
                  >
                    <option value="1-on-1 Tutoring Inquiry">1-on-1 Tutoring Inquiry</option>
                    <option value="Course Curriculum Doubt">Course Curriculum Doubt</option>
                    <option value="JEE Guidance Inquiry">JEE Guidance Inquiry</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-[#1A1A24] dark:text-white mb-2">Your Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="student@example.com"
                    value={messageForm.email}
                    onChange={(e) => setMessageForm({ ...messageForm, email: e.target.value })}
                    className="w-full rounded-xl px-4 py-3 bg-[#1A1A24]/5 dark:bg-white/5 border border-[#1A1A24]/15 dark:border-white/15 text-sm font-semibold text-[#1A1A24] dark:text-white focus:outline-none focus:border-[#ff6200]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-[#1A1A24] dark:text-white mb-2">Your Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Hello Priya ma'am, I am preparing for JEE 2027 and would love to inquire about..."
                    value={messageForm.text}
                    onChange={(e) => setMessageForm({ ...messageForm, text: e.target.value })}
                    className="w-full rounded-xl p-4 bg-[#1A1A24]/5 dark:bg-white/5 border border-[#1A1A24]/15 dark:border-white/15 text-sm font-medium text-[#1A1A24] dark:text-white focus:outline-none focus:border-[#ff6200] resize-none"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#1A1A24]/10 dark:border-white/10">
                  <button
                    type="button"
                    onClick={() => setShowMessageModal(false)}
                    className="px-5 py-3 rounded-xl text-sm font-bold text-[rgba(26,26,36,0.65)] dark:text-white/65 hover:bg-[#1A1A24]/5 dark:hover:bg-white/10 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn-coral rounded-xl px-6 py-3 text-sm font-black shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-all"
                  >
                    <Send className="w-4 h-4" /> Send Now
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
