"use client";

import Link from "next/link";
import {
  Briefcase,
  Star,
  Wallet,
  Users,
  ArrowRight,
  CheckCircle,
  Crown,
} from "lucide-react";

const perks = [
  { icon: Wallet, title: "Earn ₹20K–₹80K/month", desc: "Set your own rates" },
  { icon: Users, title: "1,000+ Daily Students", desc: "Massive reach instantly" },
  { icon: Star, title: "Build Your Reputation", desc: "Collect verified reviews" },
  { icon: Crown, title: "Premium Tools", desc: "Advanced analytics & leads" },
];

export default function BecomeTutorSection() {
  return (
    <section
      id="become-tutor"
      className="py-24 relative overflow-hidden bg-white"
    >
      <div className="container-xl">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700" />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-900/30 rounded-full blur-3xl" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center p-10 md:p-14">
            {/* Left */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/25 text-white/90 text-sm font-medium mb-6">
                <Briefcase className="w-3.5 h-3.5" />
                Join 5,000+ Tutors
              </div>
              <h2 className="text-3xl md:text-4xl xl:text-5xl font-heading font-extrabold leading-tight mb-5">
                Turn Your Knowledge
                <br />
                into a{" "}
                <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Thriving Career
                </span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-md">
                Join thousands of expert tutors who teach on their own terms, grow their student base, and earn consistently through Faculties Online.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/register"
                  id="become-tutor-register-btn"
                  className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white text-indigo-700 font-bold text-sm hover:bg-yellow-50 transition-colors shadow-xl"
                >
                  <Briefcase className="w-5 h-5" />
                  Register as Tutor
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#how-it-works"
                  className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
                >
                  How it works
                </Link>
              </div>
            </div>

            {/* Right: Perks */}
            <div className="grid grid-cols-2 gap-4">
              {perks.map((perk) => (
                <div
                  key={perk.title}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 hover:bg-white/15 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-3">
                    <perk.icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="font-heading font-bold text-white text-base mb-1">
                    {perk.title}
                  </p>
                  <p className="text-white/60 text-sm">{perk.desc}</p>
                </div>
              ))}

              {/* Requirements */}
              <div className="col-span-2 bg-white/10 border border-white/20 rounded-2xl p-5">
                <p className="text-white/70 text-xs font-semibold uppercase tracking-wider mb-3">
                  What you need to start
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "Domain expertise in 1+ subject",
                    "Teaching passion",
                    "Smartphone or computer",
                    "Just 30 mins to set up",
                  ].map((req) => (
                    <div key={req} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-green-300 flex-shrink-0" />
                      <span className="text-white/75 text-xs">{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
