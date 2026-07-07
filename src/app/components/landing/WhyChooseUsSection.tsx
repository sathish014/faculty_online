"use client";

import React, { useState } from "react";
import ScrollReveal from "../common/ScrollReveal";
import { CheckCircle, ChevronRight } from "lucide-react";

const reasons = [
  {
    id: "r1",
    icon: "🎯",
    title: "Expert-Verified Faculty",
    desc: "Every tutor is background-checked, qualification-verified, and reviewed by real students before being listed.",
    stat: "100%",
    statLabel: "Verified tutors",
  },
  {
    id: "r2",
    icon: "⚡",
    title: "Learn at Your Pace",
    desc: "Choose from online, offline, and home tuition. Set your own schedule and learn when it suits you best.",
    stat: "24/7",
    statLabel: "Availability",
  },
  {
    id: "r3",
    icon: "🏆",
    title: "Proven Results",
    desc: "Our students consistently outperform national averages in JEE, NEET, UPSC, and professional certifications.",
    stat: "92%",
    statLabel: "Success rate",
  },
  {
    id: "r4",
    icon: "💰",
    title: "Transparent Pricing",
    desc: "No hidden fees. No lock-ins. Pay per session or subscribe monthly — full control in your hands.",
    stat: "₹0",
    statLabel: "Hidden fees",
  },
  {
    id: "r5",
    icon: "📱",
    title: "All Devices, Anywhere",
    desc: "Access your learning dashboard from mobile, tablet, or desktop. Your progress syncs automatically.",
    stat: "99.9%",
    statLabel: "Uptime",
  },
  {
    id: "r6",
    icon: "🎓",
    title: "Certified Learning Paths",
    desc: "Complete structured courses and earn verifiable certificates recognized by top employers across India.",
    stat: "50K+",
    statLabel: "Certificates issued",
  },
];

export default function WhyChooseUsSection() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="pt-8 pb-16" style={{ background: "var(--bg-primary)" }}>
      <div className="line-divider mb-10" />
      <div className="container-xl">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#ff6200] text-xs font-bold uppercase tracking-widest">Why Us</span>
            <span className="h-px flex-1 max-w-[40px]" style={{ background: "rgba(255,98,0,0.4)" }} />
          </div>
        </ScrollReveal>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-12">
          <ScrollReveal delay={100}>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight text-[#1A1A24]" style={{ maxWidth: 480 }}>
              Why thousands choose<br />
              <span style={{ color: "#ff6200" }}>Faculties Online</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-sm text-[rgba(26,26,36,0.6)] max-w-xs">
              Trusted by 200,000+ learners and 50,000+ educators across India.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <ScrollReveal key={r.id} delay={i * 80}>
              <div
                className="relative p-6 rounded-2xl cursor-pointer group transition-all duration-300"
                style={{
                  background: activeId === r.id
                    ? "linear-gradient(135deg, rgba(255,98,0,0.06), rgba(77,20,140,0.04))"
                    : "var(--bg-sidebar)",
                  border: activeId === r.id
                    ? "1px solid rgba(255,98,0,0.3)"
                    : "1px solid rgba(26,26,36,0.08)",
                  boxShadow: activeId === r.id ? "0 16px 40px rgba(255,98,0,0.1)" : "none",
                }}
                onMouseEnter={() => setActiveId(r.id)}
                onMouseLeave={() => setActiveId(null)}
              >
                {/* Icon */}
                <div className="text-3xl mb-4">{r.icon}</div>

                {/* Title */}
                <h3 className="text-base font-bold text-[#1A1A24] mb-2 group-hover:text-[#ff6200] transition-colors">
                  {r.title}
                </h3>

                {/* Desc */}
                <p className="text-sm text-[rgba(26,26,36,0.6)] leading-relaxed mb-4">
                  {r.desc}
                </p>

                {/* Stat pill */}
                <div className="flex items-center justify-between">
                  <div
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl"
                    style={{
                      background: "rgba(255,98,0,0.08)",
                      border: "1px solid rgba(255,98,0,0.15)",
                    }}
                  >
                    <span className="text-sm font-black text-[#ff6200]">{r.stat}</span>
                    <span className="text-[10px] text-[rgba(26,26,36,0.6)] font-medium">{r.statLabel}</span>
                  </div>
                  <ChevronRight
                    className="w-4 h-4 text-[rgba(26,26,36,0.3)] group-hover:text-[#ff6200] transition-all group-hover:translate-x-1"
                  />
                </div>

                {/* Corner accent */}
                <div
                  className="absolute top-0 right-0 w-16 h-16 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{
                    background: "radial-gradient(circle at top right, rgba(255,98,0,0.08), transparent)",
                  }}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom trust bar */}
        <ScrollReveal delay={200}>
          <div
            className="mt-12 p-5 sm:p-6 rounded-2xl grid grid-cols-2 sm:grid-cols-4 gap-4"
            style={{
              background: "linear-gradient(135deg, #4D148C, #2e0854)",
              boxShadow: "0 12px 40px rgba(77,20,140,0.3)",
            }}
          >
            {[
              { label: "Money-back guarantee", icon: "🛡️" },
              { label: "No lock-in contracts", icon: "🔓" },
              { label: "Cancel anytime", icon: "✅" },
              { label: "24/7 support", icon: "🎧" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2.5 justify-center sm:justify-start">
                <span className="text-lg">{item.icon}</span>
                <span className="text-sm font-semibold text-white/90">{item.label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
