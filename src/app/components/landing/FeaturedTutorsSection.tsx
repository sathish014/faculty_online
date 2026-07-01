"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const tutors = [
  {
    id: "tutor-1",
    name: "Priya Sharma",
    subject: "Mathematics & Statistics",
    rating: 4.9,
    reviews: "1,284",
    price: "₹800/hr",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
    badge: "Top Pick",
    specialty: "IIT-JEE Expert",
  },
  {
    id: "tutor-2",
    name: "Rahul Verma",
    subject: "Physics & Chemistry",
    rating: 4.8,
    reviews: "962",
    price: "₹700/hr",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
    badge: "",
    specialty: "NEET Specialist",
  },
  {
    id: "tutor-3",
    name: "Anjali Mehta",
    subject: "Spoken English",
    rating: 4.9,
    reviews: "2,150",
    price: "₹600/hr",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
    badge: "Top Pick",
    specialty: "Communication Coach",
  },
  {
    id: "tutor-4",
    name: "Amit Patel",
    subject: "Python & Data Science",
    rating: 4.7,
    reviews: "3,412",
    price: "₹1,200/hr",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
    badge: "Highest Rated",
    specialty: "Full Stack Dev",
  },
  {
    id: "tutor-5",
    name: "Sneha Reddy",
    subject: "Biology & Botany",
    rating: 4.8,
    reviews: "780",
    price: "₹650/hr",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=400&auto=format&fit=crop",
    specialty: "NEET Biology",
  },
  {
    id: "tutor-6",
    name: "Vikram Malhotra",
    subject: "Computer Science & AI",
    rating: 4.9,
    reviews: "1,540",
    price: "₹1,000/hr",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
    badge: "Top Pick",
    specialty: "AI & ML Mentor",
  },
  {
    id: "tutor-7",
    name: "Divya Nair",
    subject: "Economics & Finance",
    rating: 4.8,
    reviews: "890",
    price: "₹750/hr",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
    badge: "Highest Rated",
    specialty: "CA & Commerce",
  },
  {
    id: "tutor-8",
    name: "Rohan Gupta",
    subject: "Organic Chemistry",
    rating: 4.9,
    reviews: "1,120",
    price: "₹850/hr",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    badge: "",
    specialty: "JEE Advanced",
  },
];

export default function FeaturedTutorsSection() {
  const [visible, setVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 260; // card width (240px) + gap (20px)
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="tutors"
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="pt-8 pb-16"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="line-divider mb-10" />
      <div className="container-xl">

        {/* Section label */}
        <div
          className={`flex items-center gap-3 mb-4 transition-all duration-600 ${visible ? "opacity-100" : "opacity-0"}`}
        >
          <span className="text-[#ff6200] text-xs font-bold uppercase tracking-widest">Tutors</span>
          <span className="h-px flex-1 max-w-[40px]" style={{ background: "rgba(255,98,0,0.4)" }} />
        </div>

        <div
          className={`flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "100ms" }}
        >
          <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight text-[#1A1A24]">
            Trending Mentors
          </h2>

          <div className="flex items-center gap-3 self-start sm:self-auto">
            {/* Top Navigation Icons (visible only on hover) */}
            {/* <div
              className={`flex items-center gap-2 transition-all duration-300 ${
                isHovered ? "opacity-100 translate-x-0 pointer-events-auto" : "opacity-0 translate-x-2 pointer-events-none"
              }`}
            >
              <button
                onClick={() => scroll("left")}
                aria-label="Scroll left"
                className="w-10 h-10 rounded-xl flex items-center justify-center border border-slate-200 bg-white text-[#1A1A24] hover:bg-[#ff6200] hover:text-white hover:border-[#ff6200] transition-all duration-200 shadow-sm active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                aria-label="Scroll right"
                className="w-10 h-10 rounded-xl flex items-center justify-center border border-slate-200 bg-white text-[#1A1A24] hover:bg-[#ff6200] hover:text-white hover:border-[#ff6200] transition-all duration-200 shadow-sm active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div> */}

            <button className="btn-ghost rounded-lg px-5 py-2.5 flex items-center gap-2 text-sm font-semibold">
              View all tutors
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tutor Cards Carousel Container */}
        <div className="relative group">
          {/* Left Side Floating Icon Button */}
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className={`absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white text-[#1A1A24] border border-slate-200 shadow-xl flex items-center justify-center hover:bg-[#ff6200] hover:text-white hover:border-[#ff6200] transition-all duration-300 hidden md:flex ${
              isHovered ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-75 pointer-events-none"
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Tutor Cards — horizontal scroll */}
          <div
            ref={scrollRef}
            className={`flex gap-5 overflow-x-auto pb-4 scroll-smooth custom-scrollbar transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "250ms" }}
          >
          {tutors.map((tutor, i) => (
            <div
              key={tutor.id}
              className="w-[240px] flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer group transition-all duration-300"
              style={{
                background: "var(--bg-sidebar)",
                border: "1px solid rgba(26,26,36,0.08)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,107,53,0.35)";
                e.currentTarget.style.transform = "translateY(-6px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(26,26,36,0.08)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Avatar */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={tutor.image}
                  alt={tutor.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                {/* Badge */}
                {tutor.badge && (
                  <div
                    className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold shadow-sm"
                    style={{
                      background: "rgba(255, 255, 255, 0.95)",
                      border: "1px solid rgba(255,98,0,0.3)",
                      color: "#ff6200",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    {tutor.badge}
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-4">
                <p className="text-[11px] font-semibold uppercase tracking-wider mb-1" style={{ color: "#ff6200" }}>
                  {tutor.specialty}
                </p>
                <h3 className="font-bold text-sm leading-tight mb-0.5 text-[#1A1A24] line-clamp-1">
                  {tutor.name}
                </h3>
                <p className="text-xs mb-3" style={{ color: "rgba(26,26,36,0.55)" }}>
                  {tutor.subject}
                </p>

                {/* Rating */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: "#ff6200" }}
                    />
                    <span className="text-xs font-bold text-[#1A1A24]">{tutor.rating}</span>
                    <span className="text-[10px]" style={{ color: "rgba(26,26,36,0.5)" }}>
                      ({tutor.reviews})
                    </span>
                  </div>
                  <span className="text-xs font-bold text-[#1A1A24]">{tutor.price}</span>
                </div>
              </div>
            </div>
          ))}
          </div>

          {/* Right Side Floating Icon Button */}
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className={`absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white text-[#1A1A24] border border-slate-200 shadow-xl flex items-center justify-center hover:bg-[#ff6200] hover:text-white hover:border-[#ff6200] transition-all duration-300 hidden md:flex ${
              isHovered ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-75 pointer-events-none"
            }`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
