"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: "t1",
    name: "Aryan Kapoor",
    role: "IIT-JEE Student",
    text: "Faculties Online transformed my JEE preparation. I found an amazing Physics tutor within hours of posting my requirement. My scores improved by 40 percentile in just 3 months!",
    rating: 5,
    initials: "AK",
  },
  {
    id: "t2",
    name: "Priya Sharma",
    role: "Mathematics Tutor",
    text: "As a tutor, this platform has completely changed my career. I went from 2 students to 15+ regular students in 4 months. The Premium membership was the best investment I made!",
    rating: 5,
    initials: "PS",
  },
  {
    id: "t3",
    name: "Sneha Reddy",
    role: "NEET Aspirant",
    text: "The home tuition feature is incredible! My Biology teacher comes to my home every evening and explains concepts in such a clear way. Got 650+ in NEET this year!",
    rating: 5,
    initials: "SR",
  },
  {
    id: "t4",
    name: "Rahul Verma",
    role: "Programming Tutor",
    text: "The platform is super intuitive. Students find me based on my skills and ratings. The wallet system makes payments seamless. Earning ₹50K+ per month now!",
    rating: 5,
    initials: "RV",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-12 border-t border-b border-slate-200 section-light">
      <div className="container-xl">

        <h2 className="font-heading font-bold text-slate-900 text-xl md:text-2xl mb-8">
          See what others are achieving through learning
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white border border-slate-200 p-5 flex flex-col hover:shadow-md transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#f69c08] text-[#f69c08]" />
                ))}
              </div>

              {/* Quote icon */}
              <Quote className="w-5 h-5 text-slate-300 mb-2" />

              {/* Text */}
              <p className="text-slate-700 text-sm leading-relaxed flex-grow mb-5">
                {t.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                  style={{ background: "#0d9488" }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm leading-tight">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
