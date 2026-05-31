"use client";

import { Star, MapPin, Clock, BadgeCheck, ArrowRight, Heart, Wifi, WifiOff, Home } from "lucide-react";

const tutors = [
  {
    id: "tutor-1",
    name: "Priya Sharma",
    initials: "PS",
    subject: "Mathematics & Statistics",
    rating: 4.9,
    reviews: 128,
    experience: "7 years",
    location: "Mumbai",
    price: "₹800",
    modes: ["Online", "Home"],
    skills: ["Calculus", "Algebra", "Statistics"],
    badge: "Top Rated",
    avatarGradient: "linear-gradient(135deg, #6366f1, #8b5cf6)",
  },
  {
    id: "tutor-2",
    name: "Rahul Verma",
    initials: "RV",
    subject: "Physics & Chemistry",
    rating: 4.8,
    reviews: 96,
    experience: "5 years",
    location: "Delhi",
    price: "₹700",
    modes: ["Online", "Offline"],
    skills: ["Mechanics", "Thermodynamics", "Organic"],
    badge: "Verified",
    avatarGradient: "linear-gradient(135deg, #0ea5e9, #6366f1)",
  },
  {
    id: "tutor-3",
    name: "Anjali Mehta",
    initials: "AM",
    subject: "Spoken English & Communication",
    rating: 4.9,
    reviews: 215,
    experience: "9 years",
    location: "Bangalore",
    price: "₹600",
    modes: ["Online"],
    skills: ["IELTS", "Fluency", "Business English"],
    badge: "Top Rated",
    avatarGradient: "linear-gradient(135deg, #f59e0b, #ef4444)",
  },
];

const modeConfig: Record<string, { icon: React.ComponentType<{ className?: string }>; bg: string; color: string }> = {
  Online: { icon: Wifi, bg: "rgba(34,197,94,0.1)", color: "#16a34a" },
  Offline: { icon: WifiOff, bg: "rgba(249,115,22,0.1)", color: "#ea580c" },
  Home: { icon: Home, bg: "rgba(245,158,11,0.1)", color: "#d97706" },
};

export default function FeaturedTutorsSection() {
  return (
    <section id="tutors" className="py-20 bg-white">
      <div className="container-xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
              style={{
                background: "rgba(99,102,241,0.07)",
                border: "1px solid rgba(99,102,241,0.15)",
                color: "#6366f1",
                letterSpacing: "0.08em",
              }}
            >
              <BadgeCheck className="w-3 h-3" />
              Verified Educators
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-slate-900 mb-2">
              Meet Our{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Top Tutors
              </span>
            </h2>
            <p className="text-slate-500 text-base max-w-md">
              Hand-picked, background-verified educators ready to guide you to success in your
              learning journey.
            </p>
          </div>

          <button
            id="tutors-view-all-btn"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
            style={{
              border: "1.5px solid #e2e8f0",
              color: "#4f46e5",
              background: "#fff",
            }}
            suppressHydrationWarning
          >
            View All Tutors
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Tutor Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutors.map((tutor) => (
            <div
              key={tutor.id}
              id={tutor.id}
              className="group relative bg-white rounded-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              style={{
                border: "1.5px solid #f1f5f9",
                boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 16px 40px rgba(79,70,229,0.14)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(99,102,241,0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.05)";
                (e.currentTarget as HTMLElement).style.borderColor = "#f1f5f9";
              }}
            >
              {/* Top color strip */}
              <div
                className="h-1.5 w-full"
                style={{ background: "linear-gradient(90deg, #4f46e5, #7c3aed, #a855f7)" }}
              />

              <div className="p-6">
                {/* Header row */}
                <div className="flex items-start gap-4 mb-5">
                  {/* Avatar */}
                  <div
                    className="w-13 h-13 rounded-2xl flex items-center justify-center text-white font-bold text-base shadow-md flex-shrink-0"
                    style={{ background: tutor.avatarGradient, width: "52px", height: "52px" }}
                  >
                    {tutor.initials}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-0.5">
                      <h3 className="font-heading font-bold text-slate-900 text-sm">
                        {tutor.name}
                      </h3>
                      {tutor.badge && (
                        <span
                          className="text-xs px-2 py-0.5 rounded-full font-semibold"
                          style={{
                            background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
                            color: "#fff",
                          }}
                        >
                          {tutor.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-indigo-600 text-xs font-medium truncate mb-1.5">
                      {tutor.subject}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-1.5">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < Math.floor(tutor.rating)
                                ? "fill-amber-400 text-amber-400"
                                : "text-slate-200 fill-slate-200"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs font-bold text-slate-800">{tutor.rating}</span>
                      <span className="text-xs text-slate-400">({tutor.reviews})</span>
                    </div>
                  </div>

                  {/* Wishlist */}
                  <button
                    className="p-1.5 rounded-xl text-slate-300 hover:text-rose-400 hover:bg-rose-50 transition-colors flex-shrink-0"
                    suppressHydrationWarning
                  >
                    <Heart className="w-4 h-4" />
                  </button>
                </div>

                {/* Details row */}
                <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {tutor.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {tutor.experience} exp.
                  </span>
                </div>

                {/* Modes */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {tutor.modes.map((m) => {
                    const mc = modeConfig[m];
                    return (
                      <span
                        key={m}
                        className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-full font-semibold"
                        style={{ background: mc.bg, color: mc.color }}
                      >
                        <mc.icon className="w-3 h-3" />
                        {m}
                      </span>
                    );
                  })}
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {tutor.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1 rounded-lg font-medium"
                      style={{
                        background: "#f8fafc",
                        border: "1px solid #e2e8f0",
                        color: "#475569",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div
                  className="flex items-center justify-between pt-4"
                  style={{ borderTop: "1px solid #f1f5f9" }}
                >
                  <div>
                    <span className="text-xl font-extrabold font-heading text-slate-900">
                      {tutor.price}
                    </span>
                    <span className="text-slate-400 text-xs ml-1">per hour</span>
                  </div>
                  <button
                    id={`${tutor.id}-view-profile`}
                    className="flex items-center gap-1.5 px-5 py-2 rounded-xl font-semibold text-white text-sm transition-all hover:-translate-y-0.5"
                    style={{
                      background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
                      boxShadow: "0 4px 12px rgba(79,70,229,0.35)",
                    }}
                    suppressHydrationWarning
                  >
                    View Profile
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
