"use client";

import React, { useState } from "react";
import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";
import FacultyCard, { type FacultyCardData } from "../components/cards/FacultyCard";
import { Search, X, Users } from "lucide-react";

const faculty: FacultyCardData[] = [
  { id: "f1", name: "Priya Sharma", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop", specialty: "IIT-JEE Expert", subject: "Mathematics & Statistics", rating: 4.9, reviewCount: "1,284", students: "18K+", courses: 5, price: "₹800/hr", badge: "Top Pick", isVerified: true },
  { id: "f2", name: "Rahul Verma", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop", specialty: "NEET Specialist", subject: "Physics & Chemistry", rating: 4.8, reviewCount: "962", students: "12K+", courses: 4, price: "₹700/hr", isVerified: true },
  { id: "f3", name: "Anjali Mehta", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop", specialty: "Communication Coach", subject: "Spoken English", rating: 4.9, reviewCount: "2,150", students: "35K+", courses: 8, price: "₹600/hr", badge: "Top Pick", isVerified: true },
  { id: "f4", name: "Amit Patel", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop", specialty: "Full Stack Dev", subject: "Python & Data Science", rating: 4.7, reviewCount: "3,412", students: "22K+", courses: 6, price: "₹1,200/hr", badge: "Highest Rated", isVerified: true },
  { id: "f5", name: "Sneha Reddy", image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=400&auto=format&fit=crop", specialty: "NEET Biology", subject: "Biology & Botany", rating: 4.8, reviewCount: "780", students: "9K+", courses: 3, price: "₹650/hr", isVerified: true },
  { id: "f6", name: "Vikram Malhotra", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop", specialty: "AI & ML Mentor", subject: "Computer Science & AI", rating: 4.9, reviewCount: "1,540", students: "15K+", courses: 7, price: "₹1,000/hr", badge: "Top Pick", isVerified: true },
  { id: "f7", name: "Divya Nair", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop", specialty: "CA & Commerce", subject: "Economics & Finance", rating: 4.8, reviewCount: "890", students: "8K+", courses: 4, price: "₹750/hr", badge: "Highest Rated", isVerified: true },
  { id: "f8", name: "Rohan Gupta", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop", specialty: "JEE Advanced", subject: "Organic Chemistry", rating: 4.9, reviewCount: "1,120", students: "11K+", courses: 4, price: "₹850/hr", isVerified: true },
];

const specialties = ["All", "IIT-JEE Expert", "NEET Specialist", "Full Stack Dev", "AI & ML Mentor", "Communication Coach", "CA & Commerce"];

export default function FacultyPage() {
  const [search, setSearch] = useState("");
  const [specialty, setSpecialty] = useState("All");

  const filtered = faculty.filter((f) => {
    const matchSearch = f.name.toLowerCase().includes(search.toLowerCase()) ||
      f.subject.toLowerCase().includes(search.toLowerCase());
    const matchSpec = specialty === "All" || f.specialty === specialty;
    return matchSearch && matchSpec;
  });

  return (
    <main className="min-h-screen flex flex-col" style={{ background: "var(--bg-primary)" }}>
      <Navbar />

      {/* Hero */}
      <div className="pt-28 pb-12 px-4" style={{ background: "#f7f8fc" }}>
        <div className="container-xl">
          <div className="max-w-2xl animate-fade-up">
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-4 h-4 text-[#ff6200]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#ff6200]">Our Faculty</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-[#1A1A24] tracking-tight mb-3">
              Meet the <span className="text-[#ff6200]">experts</span>
            </h1>
            <p className="text-base text-[rgba(26,26,36,0.65)] mb-6">
              Learn from India&apos;s top verified educators across all subjects and exams.
            </p>
            <div className="flex items-center gap-3 bg-white/80 border border-[rgba(26,26,36,0.1)] rounded-xl px-4 py-3 max-w-lg focus-within:border-[#ff6200] focus-within:ring-2 focus-within:ring-[rgba(255,98,0,0.15)] transition-all">
              <Search className="w-4 h-4 text-[rgba(26,26,36,0.4)] flex-shrink-0" />
              <input
                type="text"
                placeholder="Search by name or subject..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 bg-transparent focus:outline-none text-sm font-medium text-[#1A1A24] placeholder:text-[rgba(26,26,36,0.4)]"
                id="faculty-search-input"
              />
              {search && <button onClick={() => setSearch("")}><X className="w-3.5 h-3.5 text-[rgba(26,26,36,0.4)]" /></button>}
            </div>
          </div>
        </div>
      </div>

      <div className="container-xl py-8 flex-1 w-full min-w-0 max-w-full">
        {/* Specialty filter pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 custom-scrollbar mb-8 w-full min-w-0 max-w-full">
          {specialties.map((spec) => (
            <button
              key={spec}
              onClick={() => setSpecialty(spec)}
              className="flex-shrink-0 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200"
              style={{
                background: specialty === spec ? "#ff6200" : "rgba(26,26,36,0.06)",
                color: specialty === spec ? "#fff" : "rgba(26,26,36,0.7)",
                border: specialty === spec ? "1px solid #ff6200" : "1px solid rgba(26,26,36,0.1)",
                boxShadow: specialty === spec ? "0 4px 16px rgba(255,98,0,0.25)" : "none",
              }}
            >
              {spec}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between mb-6">
          <span className="text-sm font-medium text-[rgba(26,26,36,0.6)]">
            {filtered.length} instructor{filtered.length !== 1 ? "s" : ""} found
          </span>
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full min-w-0 max-w-full">
            {filtered.map((f) => (
              <FacultyCard key={f.id} faculty={f} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">👤</div>
            <h3 className="text-xl font-bold text-[#1A1A24] mb-2">No faculty found</h3>
            <p className="text-[rgba(26,26,36,0.6)] text-sm">Try adjusting your search or specialty filter</p>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
