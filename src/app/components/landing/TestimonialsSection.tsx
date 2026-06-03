"use client";

import { Quote, Building2, Apple, Globe, Layout, Briefcase, Camera } from "lucide-react";

const testimonials = [
  {
    id: "t1",
    name: "Aryan Kapoor",
    role: "IIT-JEE Student",
    text: "Faculties Online transformed my JEE preparation. I found an amazing Physics tutor within hours of posting my requirement. My scores improved by 40 percentile in just 3 months!",
  },
  {
    id: "t2",
    name: "Priya Sharma",
    role: "Mathematics Tutor",
    text: "As a tutor, this platform has completely changed my career. I went from 2 students to 15+ regular students in 4 months. The Premium membership was the best investment I made!",
  },
  {
    id: "t3",
    name: "Sneha Reddy",
    role: "NEET Aspirant",
    text: "The home tuition feature is incredible! My Biology teacher comes to my home every evening and explains concepts in such a clear way. Got 650+ in NEET this year!",
  },
  {
    id: "t4",
    name: "Rahul Verma",
    role: "Programming Tutor",
    text: "The platform is super intuitive. Students find me based on my skills and ratings. The wallet system makes payments seamless. Earning ₹50K+ per month now!",
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-12 bg-slate-50 border-t border-b border-slate-200">
      

      <div className="container-xl px-4 md:px-8 max-w-[1340px] mx-auto">
        <h2 className="text-2xl font-bold text-slate-900 mb-8 font-serif" style={{ fontFamily: "Georgia, serif" }}>
          See what others are achieving through learning
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-6 border border-slate-200 shadow-sm flex flex-col h-full">
              <Quote className="w-6 h-6 text-slate-800 mb-4" />
              <p className="text-slate-700 text-sm leading-relaxed mb-6 flex-grow">
                {t.text}
              </p>
              
              <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
                <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold font-serif">
                  {t.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm leading-tight">{t.name}</p>
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
