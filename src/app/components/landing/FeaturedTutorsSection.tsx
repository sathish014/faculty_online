"use client";

import { Star, MapPin, Clock, BadgeCheck, ArrowRight, Heart, Wifi, WifiOff, Home } from "lucide-react";

const tutors = [
  {
    id: "tutor-1",
    name: "Priya Sharma",
    initials: "PS",
    color: "from-violet-500 to-purple-600",
    subject: "Mathematics & Statistics",
    rating: 4.9,
    reviews: 128,
    experience: "7 years",
    location: "Mumbai",
    price: "₹800/hr",
    modes: ["Online", "Home"],
    skills: ["Calculus", "Algebra", "Statistics"],
    badge: "Top Rated",
  },
  {
    id: "tutor-2",
    name: "Rahul Verma",
    initials: "RV",
    color: "from-blue-500 to-indigo-600",
    subject: "Physics & Chemistry",
    rating: 4.8,
    reviews: 96,
    experience: "5 years",
    location: "Delhi",
    price: "₹700/hr",
    modes: ["Online", "Offline"],
    skills: ["Mechanics", "Thermodynamics", "Organic"],
    badge: "Verified",
  },
  {
    id: "tutor-3",
    name: "Anjali Mehta",
    initials: "AM",
    color: "from-pink-500 to-rose-600",
    subject: "Spoken English & Communication",
    rating: 4.9,
    reviews: 215,
    experience: "9 years",
    location: "Bangalore",
    price: "₹600/hr",
    modes: ["Online"],
    skills: ["IELTS", "Fluency", "Business English"],
    badge: "Top Rated",
  },
  {
    id: "tutor-4",
    name: "Vivek Nair",
    initials: "VN",
    color: "from-green-500 to-emerald-600",
    subject: "Python & Web Development",
    rating: 4.7,
    reviews: 83,
    experience: "4 years",
    location: "Hyderabad",
    price: "₹900/hr",
    modes: ["Online"],
    skills: ["Python", "React", "Django"],
    badge: null,
  },
  {
    id: "tutor-5",
    name: "Sunita Rao",
    initials: "SR",
    color: "from-amber-500 to-orange-600",
    subject: "School Tuition (Class 6-10)",
    rating: 4.8,
    reviews: 174,
    experience: "12 years",
    location: "Chennai",
    price: "₹500/hr",
    modes: ["Offline", "Home"],
    skills: ["Science", "Maths", "English"],
    badge: "Experienced",
  },
  {
    id: "tutor-6",
    name: "Arjun Singh",
    initials: "AS",
    color: "from-indigo-500 to-blue-600",
    subject: "IIT-JEE & NEET Preparation",
    rating: 4.9,
    reviews: 301,
    experience: "8 years",
    location: "Pune",
    price: "₹1200/hr",
    modes: ["Online", "Offline"],
    skills: ["Physics", "Chemistry", "Maths"],
    badge: "Top Rated",
  },
];

const modeConfig: Record<string, { icon: React.ComponentType<{ className?: string }>; class: string }> = {
  Online: { icon: Wifi, class: "badge-online" },
  Offline: { icon: WifiOff, class: "badge-offline" },
  Home: { icon: Home, class: "badge-premium" },
};

export default function FeaturedTutorsSection() {
  return (
    <section id="tutors" className="py-24 bg-white">
      <div className="container-xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-semibold mb-4">
              <BadgeCheck className="w-3.5 h-3.5" />
              Verified Educators
            </div>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-heading font-extrabold text-slate-900 mb-3">
              Meet Our{" "}
              <span className="gradient-text">Top Tutors</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-lg">
              Hand-picked, background-verified educators ready to guide you to success.
            </p>
          </div>
          <button
            id="tutors-view-all-btn"
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-indigo-200 text-indigo-600 font-semibold text-sm hover:bg-indigo-50 transition-colors whitespace-nowrap"
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
              className="group relative bg-white rounded-2xl border border-slate-100 shadow-sm card-hover overflow-hidden"
            >
              {/* Top gradient strip */}
              <div className={`h-1.5 bg-gradient-to-r ${tutor.color}`} />

              <div className="p-6">
                {/* Header row */}
                <div className="flex items-start gap-4 mb-5">
                  {/* Avatar */}
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${tutor.color} flex items-center justify-center text-white font-bold text-lg shadow-md flex-shrink-0`}
                  >
                    {tutor.initials}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-heading font-bold text-slate-900 text-base">
                        {tutor.name}
                      </h3>
                      {tutor.badge && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-semibold">
                          {tutor.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-indigo-600 text-sm font-medium mt-0.5 truncate">
                      {tutor.subject}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-1.5 mt-1.5">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 ${
                              i < Math.floor(tutor.rating)
                                ? "fill-amber-400 text-amber-400"
                                : "text-slate-200"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-semibold text-slate-900">{tutor.rating}</span>
                      <span className="text-xs text-slate-400">({tutor.reviews})</span>
                    </div>
                  </div>

                  {/* Wishlist */}
                  <button className="p-1.5 rounded-xl hover:bg-rose-50 text-slate-300 hover:text-rose-400 transition-colors">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>

                {/* Details */}
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {tutor.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    {tutor.experience} exp.
                  </span>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {tutor.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-100 text-slate-600 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Modes */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {tutor.modes.map((m) => {
                    const mc = modeConfig[m];
                    return (
                      <span
                        key={m}
                        className={`flex items-center gap-1 text-xs px-2.5 py-1 rounded-full font-semibold ${mc.class}`}
                      >
                        <mc.icon className="w-3 h-3" />
                        {m}
                      </span>
                    );
                  })}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                  <div>
                    <span className="text-xl font-extrabold font-heading text-slate-900">
                      {tutor.price}
                    </span>
                    <span className="text-slate-400 text-xs ml-1">per hour</span>
                  </div>
                  <button
                    id={`${tutor.id}-view-profile`}
                    className="btn-primary flex items-center gap-1.5 px-5 py-2.5 rounded-xl font-semibold text-white text-sm"
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
