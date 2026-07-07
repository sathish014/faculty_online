"use client";

import React from "react";
import Navbar from "../../components/landing/Navbar";
import Footer from "../../components/landing/Footer";
import { Star, Users, BookOpen, CheckCircle, ExternalLink, Globe, Award } from "lucide-react";
import Link from "next/link";
import CourseCard, { type CourseCardData } from "../../components/cards/CourseCard";

const facultyData = {
  id: "f1",
  name: "Priya Sharma",
  coverImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop",
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

  return (
    <main className="min-h-screen" style={{ background: "var(--bg-primary)" }}>
      <Navbar />

      {/* Cover */}
      <div className="pt-16 relative h-64 overflow-hidden">
        <img src={f.coverImage} alt="cover" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,26,36,0.7)] to-transparent" />
      </div>

      <div className="container-xl">
        {/* Profile header */}
        <div className="relative -mt-16 flex flex-col sm:flex-row sm:items-end gap-5 mb-8">
          <div className="relative">
            <img
              src={f.profileImage}
              alt={f.name}
              className="w-28 h-28 rounded-2xl object-cover border-4 border-white shadow-xl"
            />
            {f.isVerified && (
              <div
                className="absolute -bottom-1.5 -right-1.5 w-8 h-8 rounded-full flex items-center justify-center shadow-lg"
                style={{ background: "#4D148C" }}
              >
                <CheckCircle className="w-4.5 h-4.5 text-white" style={{ width: 18, height: 18 }} />
              </div>
            )}
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h1 className="text-2xl font-black text-[#1A1A24]">{f.name}</h1>
                <p className="text-sm text-[rgba(26,26,36,0.6)]">{f.title}</p>
                <p className="text-xs font-bold text-[#ff6200] uppercase tracking-wider mt-1">{f.specialty}</p>
              </div>
              <div className="flex items-center gap-2">
                {[
                  { icon: Globe, href: f.social.website, label: "Website" },
                  { icon: ExternalLink, href: f.social.twitter, label: "Twitter" },
                  { icon: ExternalLink, href: f.social.linkedin, label: "LinkedIn" },
                ].map(({ icon: Icon, href, label }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                    style={{ background: "rgba(26,26,36,0.07)", border: "1px solid rgba(26,26,36,0.1)", color: "rgba(26,26,36,0.6)" }}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                ))}
                <button className="btn-coral rounded-xl px-5 py-2 text-sm font-bold">
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { icon: Star, label: "Rating", value: f.rating.toString(), sub: `${f.reviewCount} reviews` },
            { icon: Users, label: "Students", value: f.students, sub: "Active learners" },
            { icon: BookOpen, label: "Courses", value: f.coursesCount.toString(), sub: "Published" },
            { icon: Award, label: "Experience", value: f.experience, sub: "Teaching" },
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="p-5 rounded-2xl text-center"
                style={{ background: "var(--bg-sidebar)", border: "1px solid rgba(26,26,36,0.08)" }}
              >
                <Icon className="w-5 h-5 mx-auto mb-2 text-[#ff6200]" />
                <div className="text-xl font-black text-[#1A1A24]">{stat.value}</div>
                <div className="text-xs text-[rgba(26,26,36,0.5)] mt-0.5">{stat.sub}</div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr,300px] gap-10 pb-16 w-full min-w-0 max-w-full">
          <div className="space-y-10">
            {/* Bio */}
            <section>
              <h2 className="text-xl font-black text-[#1A1A24] mb-3">About</h2>
              <p className="text-sm text-[rgba(26,26,36,0.7)] leading-relaxed">{f.bio}</p>
            </section>

            {/* Skills */}
            <section>
              <h2 className="text-xl font-black text-[#1A1A24] mb-3">Skills & Expertise</h2>
              <div className="flex flex-wrap gap-2">
                {f.skills.map((s) => (
                  <span key={s} className="tag">{s}</span>
                ))}
              </div>
            </section>

            {/* Published Courses */}
            <section>
              <h2 className="text-xl font-black text-[#1A1A24] mb-5">Published Courses</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full min-w-0 max-w-full">
                {publishedCourses.map((c) => <CourseCard key={c.id} course={c} />)}
              </div>
            </section>

            {/* Reviews */}
            <section>
              <h2 className="text-xl font-black text-[#1A1A24] mb-5">Student Reviews</h2>
              <div className="space-y-4">
                {f.reviews.map((r, i) => (
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
                          {[1,2,3,4,5].map((s) => <Star key={s} className={`w-3.5 h-3.5 ${s <= r.rating ? "star-filled" : "star-empty"}`} />)}
                        </div>
                        <span className="text-xs text-[rgba(26,26,36,0.45)]">{r.date}</span>
                      </div>
                    </div>
                    <p className="text-sm text-[rgba(26,26,36,0.7)] leading-relaxed">{r.text}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Education */}
            <div className="rounded-2xl p-6" style={{ background: "var(--bg-sidebar)", border: "1px solid rgba(26,26,36,0.08)" }}>
              <h3 className="font-bold text-[#1A1A24] mb-4">Education</h3>
              <div className="space-y-3">
                {f.education.map((e, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(77,20,140,0.1)" }}>
                      <BookOpen className="w-4 h-4 text-[#4D148C]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#1A1A24]">{e.degree}</p>
                      <p className="text-xs text-[rgba(26,26,36,0.55)]">{e.institute} · {e.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="rounded-2xl p-6" style={{ background: "var(--bg-sidebar)", border: "1px solid rgba(26,26,36,0.08)" }}>
              <h3 className="font-bold text-[#1A1A24] mb-4">Certifications</h3>
              <div className="space-y-3">
                {f.certifications.map((cert, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Award className="w-4 h-4 text-[#ff6200] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-[#1A1A24]">{cert.name}</p>
                      <p className="text-xs text-[rgba(26,26,36,0.55)]">{cert.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Book session */}
            <div
              className="rounded-2xl p-6"
              style={{ background: "linear-gradient(135deg, #4D148C, #2e0854)" }}
            >
              <h3 className="font-bold text-white mb-2">Book a Session</h3>
              <p className="text-white/70 text-sm mb-4">Get personalized 1-on-1 tutoring</p>
              <div className="text-2xl font-black text-white mb-4">₹800<span className="text-base text-white/60 font-normal">/hr</span></div>
              <button className="w-full btn-coral rounded-xl py-3 font-bold text-sm">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
