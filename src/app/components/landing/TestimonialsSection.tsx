"use client";

import { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, MessageSquare } from "lucide-react";

const testimonials = [
  {
    id: "t1",
    type: "student",
    name: "Aryan Kapoor",
    role: "IIT-JEE Student",
    location: "Delhi",
    avatar: "AK",
    color: "from-indigo-500 to-blue-600",
    rating: 5,
    text: "Faculties Online transformed my JEE preparation. I found an amazing Physics tutor within hours of posting my requirement. My scores improved by 40 percentile in just 3 months!",
  },
  {
    id: "t2",
    type: "tutor",
    name: "Priya Sharma",
    role: "Mathematics Tutor",
    location: "Mumbai",
    avatar: "PS",
    color: "from-violet-500 to-purple-600",
    rating: 5,
    text: "As a tutor, this platform has completely changed my career. I went from 2 students to 15+ regular students in 4 months. The Premium membership was the best investment I made!",
  },
  {
    id: "t3",
    type: "student",
    name: "Sneha Reddy",
    role: "NEET Aspirant",
    location: "Hyderabad",
    avatar: "SR",
    color: "from-pink-500 to-rose-600",
    rating: 5,
    text: "The home tuition feature is incredible! My Biology teacher comes to my home every evening and explains concepts in such a clear way. Got 650+ in NEET this year!",
  },
  {
    id: "t4",
    type: "tutor",
    name: "Rahul Verma",
    role: "Programming Tutor",
    location: "Bangalore",
    avatar: "RV",
    color: "from-green-500 to-emerald-600",
    rating: 5,
    text: "The platform is super intuitive. Students find me based on my skills and ratings. The wallet system makes payments seamless. Earning ₹50K+ per month now!",
  },
  {
    id: "t5",
    type: "student",
    name: "Kavya Nair",
    role: "Class 10 Student",
    location: "Chennai",
    avatar: "KN",
    color: "from-amber-500 to-orange-600",
    rating: 5,
    text: "My parents posted a requirement for Maths tuition and we got 8 responses within a day! My tutor Sunita ma'am is absolutely brilliant. My grades went from C to A!",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const visible = [
    testimonials[current],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ];

  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="container-xl">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 border border-rose-100 text-rose-600 text-sm font-semibold mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            Real Stories
          </div>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-heading font-extrabold text-slate-900 mb-4">
            Loved by Students{" "}
            <span className="gradient-text">&amp; Tutors</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Don&apos;t just take our word for it. Hear from thousands who transformed their
            learning journey with Faculties Online.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-6">
            {visible.map((t, i) => (
              <div
                key={`${t.id}-${i}`}
                className={`relative group rounded-2xl p-7 border transition-all duration-500 ${
                  i === 0
                    ? "bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 border-transparent text-white shadow-2xl shadow-indigo-500/30 scale-[1.02]"
                    : "bg-white border-slate-100 text-slate-900 shadow-md hover:shadow-xl card-hover"
                }`}
              >
                {/* Quote icon */}
                <div
                  className={`absolute top-6 right-6 ${
                    i === 0 ? "text-white/20" : "text-indigo-100"
                  }`}
                >
                  <Quote className="w-10 h-10" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, si) => (
                    <Star
                      key={si}
                      className={`w-4 h-4 fill-current ${
                        i === 0 ? "text-yellow-300" : "text-amber-400"
                      }`}
                    />
                  ))}
                </div>

                {/* Text */}
                <p
                  className={`text-sm leading-relaxed mb-6 ${
                    i === 0 ? "text-white/90" : "text-slate-600"
                  }`}
                >
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-sm font-bold flex-shrink-0 ${
                      i === 0 ? "ring-2 ring-white/30" : ""
                    }`}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p
                      className={`font-semibold text-sm ${
                        i === 0 ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {t.name}
                    </p>
                    <p
                      className={`text-xs ${i === 0 ? "text-white/60" : "text-slate-400"}`}
                    >
                      {t.role} · {t.location}
                    </p>
                  </div>
                  <span
                    className={`ml-auto text-xs px-2.5 py-1 rounded-full font-semibold ${
                      t.type === "student"
                        ? i === 0
                          ? "bg-white/20 text-white"
                          : "bg-indigo-50 text-indigo-600"
                        : i === 0
                        ? "bg-white/20 text-white"
                        : "bg-emerald-50 text-emerald-600"
                    }`}
                  >
                    {t.type === "student" ? "Student" : "Tutor"}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              id="testimonials-prev-btn"
              onClick={prev}
              className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:text-indigo-600 hover:border-indigo-300 transition-colors shadow-sm"
              aria-label="Previous testimonial"
              suppressHydrationWarning
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-8 bg-gradient-to-r from-indigo-500 to-violet-500"
                      : "w-2 bg-slate-200 hover:bg-slate-300"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                  suppressHydrationWarning
                />
              ))}
            </div>

            <button
              id="testimonials-next-btn"
              onClick={next}
              className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:text-indigo-600 hover:border-indigo-300 transition-colors shadow-sm"
              aria-label="Next testimonial"
              suppressHydrationWarning
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
