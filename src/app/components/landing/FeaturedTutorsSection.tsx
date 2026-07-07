"use client";

import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import Link from "next/link";

const tutors = [
  {
    id: "tutor-1",
    name: "Priya Sharma",
    subject: "A Complete Guide to Mathematics & Statistics",
    specialty: "IIT-JEE • Board Exams",
    rating: 4.9,
    reviews: "1,284",
    price: "₹800",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2000&auto=format&fit=crop",
    badge: "Bestseller",
  },
  {
    id: "tutor-2",
    name: "Rahul Verma",
    subject: "Master Physics & Chemistry from Scratch",
    specialty: "JEE Advanced • NEET",
    rating: 4.8,
    reviews: "962",
    price: "₹700",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2000&auto=format&fit=crop",
    badge: "",
  },
  {
    id: "tutor-3",
    name: "Anjali Mehta",
    subject: "Spoken English & Communication Mastery",
    specialty: "IELTS • Business English",
    rating: 4.9,
    reviews: "2,150",
    price: "₹600",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2000&auto=format&fit=crop",
    badge: "Bestseller",
  },
  {
    id: "tutor-4",
    name: "Amit Patel",
    subject: "Advanced Python Programming Bootcamp",
    specialty: "Data Science • ML",
    rating: 4.7,
    reviews: "3,412",
    price: "₹1,200",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2000&auto=format&fit=crop",
    badge: "Highest Rated",
  },
  {
    id: "tutor-5",
    name: "Meera Nair",
    subject: "Hindi & Sanskrit for All Boards",
    specialty: "CBSE • ICSE",
    rating: 4.8,
    reviews: "743",
    price: "₹500",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=2000&auto=format&fit=crop",
    badge: "",
  },
];

export default function FeaturedTutorsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "right" ? 300 : -300, behavior: "smooth" });
  };

  return (
    <section id="tutors" className="py-12 bg-white border-t border-slate-200">
      <div className="container-xl">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-heading font-bold text-slate-900 text-xl md:text-2xl">
            Trending Mentors
          </h2>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-8 h-8 border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-slate-100 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-8 h-8 border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-slate-100 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <Link
              href="/tutor/search"
              className="text-sm font-semibold ml-2 hover:underline underline-offset-2"
              style={{ color: "#0d9488" }}
            >
              View all
            </Link>
          </div>
        </div>

        {/* Scrollable tutor cards */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {tutors.map((tutor) => (
            <div
              key={tutor.id}
              className="flex-shrink-0 w-[260px] group cursor-pointer"
            >
              {/* Image */}
              <div className="w-full h-36 bg-slate-200 relative overflow-hidden mb-3 border border-slate-200">
                <img
                  src={tutor.image}
                  alt={tutor.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                {/* Play hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow">
                    <div className="w-0 h-0 border-t-[7px] border-t-transparent border-l-[11px] border-l-slate-900 border-b-[7px] border-b-transparent ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Info */}
              <h3 className="font-semibold text-slate-900 text-sm leading-tight mb-1 line-clamp-2 group-hover:text-teal-700 transition-colors">
                {tutor.subject}
              </h3>
              <p className="text-xs text-slate-500 mb-1">{tutor.name}</p>
              <p className="text-xs text-slate-400 mb-2">{tutor.specialty}</p>

              {/* Rating */}
              <div className="flex items-center gap-1.5 mb-2">
                <span className="text-sm font-bold" style={{ color: "#b07d25" }}>{tutor.rating}</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${i < Math.floor(tutor.rating) ? "fill-[#f69c08] text-[#f69c08]" : "fill-[#f69c08] text-[#f69c08] opacity-25"}`}
                    />
                  ))}
                </div>
                <span className="text-xs text-slate-500">({tutor.reviews})</span>
              </div>

              {/* Price */}
              <div className="font-bold text-slate-900 text-sm mb-2">{tutor.price}<span className="text-xs font-normal text-slate-500"> /session</span></div>

              {/* Badge */}
              {tutor.badge && (
                <span className="inline-block px-2 py-0.5 text-[10px] font-bold" style={{ background: "#eceb98", color: "#3d3c00" }}>
                  {tutor.badge}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
