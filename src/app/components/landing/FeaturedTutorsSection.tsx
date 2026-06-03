"use client";

import { Star } from "lucide-react";

const tutors = [
  {
    id: "tutor-1",
    name: "Priya Sharma",
    subject: "A Complete Guide to Mathematics & Statistics",
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
    rating: 4.7,
    reviews: "3,412",
    price: "₹1,200",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2000&auto=format&fit=crop",
    badge: "Highest Rated",
  },
];

export default function FeaturedTutorsSection() {
  return (
    <section id="tutors" className="py-12 bg-white border-t border-slate-200">
      <div className="container-xl px-4 md:px-8 max-w-[1340px] mx-auto">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 font-serif" style={{ fontFamily: "Georgia, serif" }}>
          Trending Mentors
        </h2>
        
        <div className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar">
          {tutors.map((tutor) => (
            <div key={tutor.id} className="w-[280px] flex-shrink-0 group cursor-pointer">
              <div className="w-full h-40 bg-slate-200 mb-3 border border-slate-200 relative overflow-hidden">
                <img src={tutor.image} alt={tutor.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300" />
                
                {/* Play icon overlay on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[12px] border-l-slate-900 border-b-8 border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
              
              <h3 className="font-bold text-slate-900 leading-tight mb-1 group-hover:text-[#5624d0] line-clamp-2">
                {tutor.subject}
              </h3>
              <p className="text-xs text-slate-500 mb-1">{tutor.name}</p>
              
              <div className="flex items-center gap-1.5 mb-1.5">
                <span className="text-sm font-bold text-[#b4690e]">{tutor.rating}</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < Math.floor(tutor.rating)
                          ? "fill-[#b4690e] text-[#b4690e]"
                          : "fill-[#b4690e] text-[#b4690e] opacity-30"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs text-slate-500">({tutor.reviews})</span>
              </div>
              
              <div className="font-bold text-slate-900 mb-2">
                {tutor.price}
              </div>
              
              {tutor.badge && (
                <div className="inline-block px-2 py-1 bg-[#eceb98] text-slate-900 text-[10px] font-bold">
                  {tutor.badge}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
