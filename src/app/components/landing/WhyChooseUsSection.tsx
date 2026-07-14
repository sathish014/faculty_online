"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronRight } from "lucide-react";

import { IconType } from "react-icons";
import {
  TbShieldCheck,
  TbClock24,
  TbTrophy,
  TbReceiptTax,
  TbDeviceMobile,
  TbCertificate,
} from "react-icons/tb";

const reasons: {
  id: string;
  icon: IconType;
  title: string;
  desc: string;
  stat: string;
  statLabel: string;
}[] = [
  {
    id: "r1",
    icon: TbShieldCheck,
    title: "Expert-Verified Faculty",
    desc: "Every tutor is background-checked, qualification-verified, and reviewed by real students before being listed.",
    stat: "100%",
    statLabel: "Verified tutors",
  },
  {
    id: "r2",
    icon: TbClock24,
    title: "Learn at Your Pace",
    desc: "Choose from online, offline, and home tuition. Set your own schedule and learn when it suits you best.",
    stat: "24/7",
    statLabel: "Availability",
  },
  {
    id: "r3",
    icon: TbTrophy,
    title: "Proven Results",
    desc: "Our students consistently outperform national averages in JEE, NEET, UPSC, and professional certifications.",
    stat: "92%",
    statLabel: "Success rate",
  },
  {
    id: "r4",
    icon: TbReceiptTax,
    title: "Transparent Pricing",
    desc: "No hidden fees. No lock-ins. Pay per session or subscribe monthly — full control in your hands.",
    stat: "₹0",
    statLabel: "Hidden fees",
  },
  {
    id: "r5",
    icon: TbDeviceMobile,
    title: "All Devices, Anywhere",
    desc: "Access your learning dashboard from mobile, tablet, or desktop. Your progress syncs automatically.",
    stat: "99.9%",
    statLabel: "Uptime",
  },
  {
    id: "r6",
    icon: TbCertificate,
    title: "Certified Learning Paths",
    desc: "Complete structured courses and earn verifiable certificates recognized by top employers across India.",
    stat: "50K+",
    statLabel: "Certificates issued",
  },
];

const trustItems = [
  { label: "Money-back guarantee", icon: "🛡️" },
  { label: "No lock-in contracts",  icon: "🔓" },
  { label: "Cancel anytime",        icon: "✅" },
  { label: "24/7 support",          icon: "🎧" },
];

export default function WhyChooseUsSection() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef   = useRef<HTMLDivElement>(null);
  const trustRef  = useRef<HTMLDivElement>(null);

  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });
  const gridInView   = useInView(gridRef,   { once: true, margin: "-60px" });
  const trustInView  = useInView(trustRef,  { once: true, margin: "-60px" });

  return (
    <section className="pt-8 " style={{ background: "var(--bg-primary)" }}>
      <div className="line-divider mb-10" />
      <div className="container-xl">

        {/* Header */}
        <div ref={headerRef}>
          <motion.div
            className="flex items-center gap-3 mb-4"
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="text-[#ff6200] text-xs font-bold uppercase tracking-widest">Why Us</span>
            <span className="h-px flex-1 max-w-[40px]" style={{ background: "rgba(255,98,0,0.4)" }} />
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-black tracking-tight leading-tight text-[#1A1A24]"
              style={{ maxWidth: 480 }}
              initial={{ opacity: 0, y: 24 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
            >
              Why thousands choose<br />
              <motion.span
                style={{ color: "#ff6200" }}
                initial={{ opacity: 0 }}
                animate={headerInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.35, duration: 0.5 }}
              >
                Faculties Online
              </motion.span>
            </motion.h2>

            <motion.p
              className="text-sm max-w-xs"
              style={{ color: "rgba(26,26,36,0.6)" }}
              initial={{ opacity: 0, y: 16 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.18 }}
            >
              Trusted by 200,000+ learners and 50,000+ educators across India.
            </motion.p>
          </div>
        </div>

        {/* Cards Grid */}
        <motion.div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
          variants={{
            hidden:  {},
            visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
          }}
        >
          {reasons.map((r) => {
            const IconComponent = r.icon;
            const isActive = activeId === r.id;
            return (
              <motion.div
                key={r.id}
                className="relative p-7 sm:p-8 rounded-[24px] cursor-pointer group flex flex-col justify-between bg-white transition-all duration-300"
                style={{
                  border: isActive
                    ? "1.5px solid #ff6200"
                    : "1.5px solid rgba(26,26,36,0.12)",
                  boxShadow: isActive
                    ? "0 16px 36px rgba(255,98,0,0.12)"
                    : "0 4px 16px rgba(0,0,0,0.04)",
                }}
                variants={{
                  hidden:  { opacity: 0, y: 28, scale: 0.96 },
                  visible: { opacity: 1, y: 0,  scale: 1 },
                }}
                transition={{ type: "spring" as const, stiffness: 280, damping: 24 }}
                whileHover={{ y: -5 }}
                onHoverStart={() => setActiveId(r.id)}
                onHoverEnd={() => setActiveId(null)}
              >
                <div>
                  {/* Top Icon Box with Website Orange Background */}
                  <motion.div
                    className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-6 shadow-md transition-transform"
                    style={{
                      background: "#ff6200",
                      boxShadow: "0 8px 20px rgba(255,98,0,0.25)",
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring" as const, stiffness: 400, damping: 14 }}
                  >
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3
                    className="text-xl sm:text-[21px] font-bold mb-3 leading-snug transition-colors"
                    style={{ color: isActive ? "#ff6200" : "#1A1A24" }}
                  >
                    {r.title}
                  </h3>

                  {/* Desc */}
                  <p className="text-sm sm:text-[15px] leading-relaxed mb-6 font-normal text-[#64748b]">
                    {r.desc}
                  </p>
                </div>

                {/* Footer Stat Row */}
                <div className="flex items-center justify-between pt-4 mt-auto border-t border-slate-100/80">
                  <div
                    className="flex items-center gap-2 px-3 py-1.5 rounded-xl transition-colors"
                    style={{
                      background: isActive ? "rgba(255,98,0,0.12)" : "rgba(255,98,0,0.06)",
                      border: "1px solid rgba(255,98,0,0.18)",
                    }}
                  >
                    <span className="text-sm font-black text-[#ff6200]">{r.stat}</span>
                    <span className="text-xs font-semibold text-[#64748b]">{r.statLabel}</span>
                  </div>
                  <motion.div
                    animate={{ x: isActive ? 4 : 0 }}
                    transition={{ type: "spring" as const, stiffness: 400, damping: 18 }}
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                    style={{
                      background: isActive ? "#ff6200" : "rgba(26,26,36,0.04)",
                      color: isActive ? "#ffffff" : "rgba(26,26,36,0.4)",
                    }}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Trust bar */}
        {/* <motion.div
          ref={trustRef}
          className="mt-12 p-5 sm:p-6 rounded-2xl grid grid-cols-2 sm:grid-cols-4 gap-4"
          style={{
            background: "linear-gradient(135deg, #4D148C, #2e0854)",
            boxShadow: "0 12px 40px rgba(77,20,140,0.3)",
          }}
          initial={{ opacity: 0, y: 32, scale: 0.97 }}
          animate={trustInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
        >
          {trustItems.map((item, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-2.5 justify-center sm:justify-start"
              initial={{ opacity: 0, y: 12 }}
              animate={trustInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.2 + i * 0.07 }}
            >
              <motion.span
                className="text-lg"
                animate={{ rotate: [0, 10, -6, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
              >
                {item.icon}
              </motion.span>
              <span className="text-sm font-semibold text-white/90">{item.label}</span>
            </motion.div>
          ))}
        </motion.div> */}

      </div>
    </section>
  );
}
