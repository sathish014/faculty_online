"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
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
    id: "tutor-4",
    name: "Sneha Reddy",
    subject: "Biology & Botany",
    rating: 4.8,
    reviews: "780",
    price: "₹650/hr",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=400&auto=format&fit=crop",
    specialty: "NEET Biology",
  },
  {
    id: "tutor-5",
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
    id: "tutor-6",
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
    id: "tutor-7",
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
      const scrollAmount = 295; // card width (275px) + gap (20px)
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
      className="pt-8 "
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="line-divider mb-10" />
      <div className="container-xl">

        {/* Section label */}
        <div
          className={`flex items-center gap-3 mb-4 transition-all duration-600 ${visible ? "opacity-100" : "opacity-0"}`}
        >
          <span className="text-[#ff6200] text-xs font-bold uppercase tracking-widest">Tutors</span>
          <span className="h-px flex-1 max-w-[40px]" style={{ background: "rgba(152, 65, 160, 0.4)" }} />
        </div>

        <div
          className={`flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "100ms" }}
        >
          <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight text-[#1A1A24]">
            Trending Tutors
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

            <Link
              href="/tutor/search"
              className="btn-ghost rounded-lg px-5 py-2.5 flex items-center gap-2 text-sm font-semibold cursor-pointer"
            >
              View all tutors
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Tutor Cards Carousel Container */}
        <div className="relative group">
          {/* Left Side Floating Icon Button */}
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className={`absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white text-[#1A1A24] border border-slate-200 shadow-xl flex items-center justify-center hover:bg-[#a1519eff] hover:text-white hover:border-[#a1519eff] transition-all duration-300 hidden md:flex ${
              isHovered ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-75 pointer-events-none"
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Tutor Cards — horizontal scroll */}
          <div
            ref={scrollRef}
            className={`flex gap-5 overflow-x-auto pt-3 pb-6 px-1 scroll-smooth custom-scrollbar w-full min-w-0 max-w-full transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "250ms" }}
          >
          {tutors.map((tutor) => (
            <Link
              key={tutor.id}
              href={`/faculty/f${tutor.id.replace("tutor-", "")}`}
              className="w-[265px] sm:w-[275px] flex-shrink-0 bg-white rounded-[20px] overflow-hidden cursor-pointer group transition-all duration-300 flex flex-col hover:-translate-y-1 hover:shadow-xl hover:border-slate-300 transform-gpu block"
              style={{
                border: "1.5px solid rgba(26, 26, 36, 0.14)",
                boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
              }}
            >
              {/* Image & Top-Left Specialty Pill */}
              <div className="relative h-[210px] overflow-hidden bg-slate-100 flex-shrink-0">
                <img
                  src={tutor.image}
                  alt={tutor.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                {/* Specialty Pill Badge */}
                {tutor.specialty && (
                  <div
                    className="absolute top-3.5 left-3.5 px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-wider text-white shadow-md"
                    style={{ background: "#a1519eff" }}
                  >
                    {tutor.specialty}
                  </div>
                )}
              </div>

              {/* Bottom Card Content */}
              <div className="p-5 flex flex-col justify-between flex-1 bg-white">
                <div>
                  <h3 className="font-bold text-base md:text-[17px] leading-tight mb-1 text-[#1A1A24] line-clamp-1">
                    {tutor.name}
                  </h3>
                  <p className="text-xs font-medium text-[#64748b] leading-relaxed line-clamp-2">
                    {tutor.subject}
                  </p>
                </div>

                {/* Rating & Price Footer Row */}
                <div className="flex items-center justify-between pt-4 mt-3 border-t border-slate-100/80">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#ff6200] text-sm font-black">★</span>
                    <span className="text-sm font-bold text-[#1A1A24]">{tutor.rating}</span>
                    <span className="text-xs font-medium text-[#64748b]">
                      ({tutor.reviews})
                    </span>
                  </div>
                  <div className="text-right flex items-baseline gap-0.5">
                    <span className="text-[15px] font-black text-[#4D148C]">
                      {tutor.price.split("/")[0]}
                    </span>
                    <span className="text-xs font-medium text-[#64748b]">
                      /{tutor.price.split("/")[1] || "hr"}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
          </div>

          {/* Right Side Floating Icon Button */}
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className={`absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white text-[#1A1A24] border border-slate-200 shadow-xl flex items-center justify-center hover:bg-[#a1519eff] hover:text-white hover:border-[#a1519eff] transition-all duration-300 hidden md:flex ${
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
