"use client";

import React from "react";
import ScrollReveal from "../common/ScrollReveal";
import { motion } from "framer-motion";
import {
  TbSearch,
  TbVideo,
  TbNotebook,
  TbChalkboard,
  TbChartLine,
  TbAward,
  TbArrowRight,
} from "react-icons/tb";

const roadmapSteps = [
  {
    stepNum: "01",
    title: "Search & Discover",
    chevronTitle: "Step 1: Explore",
    timeframe: "Instant AI Match",
    badgeTitle: "Find Tutor",
    position: "top",
    color: "#1A1A24",
    icon: TbSearch,
    bullets: [
      "Explore 50,000+ verified teachers across India",
      "Filter by subject, grade, board & hourly fees",
      "Get AI-powered instant tutor recommendations",
    ],
  },
  {
    stepNum: "02",
    title: "Book Free Demo",
    chevronTitle: "Step 2: Connect",
    timeframe: "Day 1 — Trial Class",
    badgeTitle: "Free Demo",
    position: "bottom",
    color: "#ff6200",
    icon: TbVideo,
    bullets: [
      "Schedule a complimentary 30-min trial session",
      "Interact 1-on-1 and check teaching compatibility",
      "Zero obligation — switch tutors easily anytime",
    ],
  },
  {
    stepNum: "03",
    title: "Tailored Study Plan",
    chevronTitle: "Step 3: Strategy",
    timeframe: "Week 1 — Roadmap",
    badgeTitle: "Custom Plan",
    position: "top",
    color: "#1A1A24",
    icon: TbNotebook,
    bullets: [
      "Diagnostic test to identify current learning gaps",
      "Customized syllabus aligned with school & exams",
      "Structured chapter-wise milestones & target dates",
    ],
  },
  {
    stepNum: "04",
    title: "Live 1-on-1 Tuition",
    chevronTitle: "Step 4: Live Classes",
    timeframe: "Ongoing Sessions",
    badgeTitle: "Live Tuition",
    position: "bottom",
    color: "#ff6200",
    icon: TbChalkboard,
    bullets: [
      "HD interactive whiteboard with screen sharing",
      "100% personalized focus & instant doubt solving",
      "All sessions recorded & saved for exam revision",
    ],
  },
  {
    stepNum: "05",
    title: "Periodic Assessment",
    chevronTitle: "Step 5: Evaluation",
    timeframe: "Monthly Check-ins",
    badgeTitle: "Performance",
    position: "top",
    color: "#1A1A24",
    icon: TbChartLine,
    bullets: [
      "Regular chapter-end quizzes & full-length mocks",
      "Comprehensive parent dashboard & progress stats",
      "Dynamic adjustments based on accuracy metrics",
    ],
  },
  {
    stepNum: "06",
    title: "Mastery & Results",
    chevronTitle: "Step 6: Excellence",
    timeframe: "Exam Success & Ranks",
    badgeTitle: "Top Success",
    position: "bottom",
    color: "#ff6200",
    icon: TbAward,
    bullets: [
      "Top percentiles in IIT-JEE, NEET, CBSE & Boards",
      "Verifiable course completion certificates",
      "Build lifelong conceptual clarity & confidence",
    ],
  },
];

export default function LearningRoadmapSection() {
  return (
    <section id="roadmap" className="pt-2" style={{ background: "var(--bg-secondary)" }}>
      <div className="line-divider mb-10" />
      <div className="container-xl">
        {/* Header */}
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#ff6200] text-xs font-bold uppercase tracking-widest">Our Process</span>
            <span className="h-px flex-1 max-w-[40px]" style={{ background: "rgba(255,98,0,0.4)" }} />
          </div>
        </ScrollReveal>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-16">
          <ScrollReveal delay={100}>
            <h2 className="text-3xl md:text-4xl sm:text-5xl font-black tracking-tight leading-tight text-[#1A1A24]">
              Roadmap for Your <br />
              <span style={{ color: "#ff6200" }}>Learning Success</span>
            </h2>
          </ScrollReveal>
         
        </div>

        {/* DESKTOP PANORAMIC ALTERNATING ROADMAP (Evenly spaced & perfectly aligned) */}
        <div className="hidden lg:block relative pt-2 pb-6">
          <div className="grid grid-cols-6 gap-2 xl:gap-3 items-stretch relative">
            {roadmapSteps.map((step, idx) => {
              const isFirst = idx === 0;
              const isLast = idx === roadmapSteps.length - 1;
              const IconComp = step.icon;
              const isTop = step.position === "top";

              return (
                <div
                  key={idx}
                  className="flex flex-col justify-between items-center w-full"
                >
                  {/* TOP SLOT (Cards for Steps 1, 3, 5) */}
                  <div className="flex-1 flex flex-col justify-end items-center w-full pb-1">
                    {isTop ? (
                      <motion.div
                        className="w-full flex flex-col items-center"
                        initial={{ opacity: 0, y: -16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.12 }}
                      >
                        {/* Header Box with Badge */}
                        <div className="w-full bg-white rounded-xl shadow-md border border-slate-200/90 p-3 mb-2 relative group hover:shadow-lg transition-all">
                          <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                            <div
                              className="w-7 h-7 rounded-lg flex items-center justify-center text-white flex-shrink-0 shadow-sm"
                              style={{ background: step.color }}
                            >
                              <IconComp className="w-4 h-4" />
                            </div>
                            <span className="font-extrabold text-xs text-[#1A1A24] tracking-tight line-clamp-1">
                              {step.badgeTitle}
                            </span>
                          </div>
                          {/* Bullet Points */}
                          <ul className="mt-2 space-y-1 text-left">
                            {step.bullets.map((bullet, bIdx) => (
                              <li
                                key={bIdx}
                                className="text-[10.5px] font-medium text-[#64748b] leading-tight flex items-start gap-1"
                              >
                                <span className="w-1 h-1 rounded-full bg-[#ff6200] mt-1 flex-shrink-0" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Short Connector Arrow pointing DOWN to timeline */}
                        <div className="flex flex-col items-center">
                          <div className="w-0.5 h-4 bg-slate-300" />
                          <div
                            className="w-2 h-2 rounded-full border-2 border-white shadow-sm -mt-0.5 z-10"
                            style={{ background: step.color }}
                          />
                        </div>
                      </motion.div>
                    ) : (
                      <div className="flex-1 w-full" />
                    )}
                  </div>

                  {/* CENTER CHEVRON TIMELINE LAYER */}
                  <div className="w-full my-1 z-10 flex items-center justify-center">
                    <div
                      className="w-full py-3 px-2 text-white text-center shadow-md transition-transform hover:scale-[1.02] duration-300 flex flex-col items-center justify-center"
                      style={{
                        background: step.color,
                        clipPath: isFirst
                          ? "polygon(0% 0%, 86% 0%, 100% 50%, 86% 100%, 0% 100%)"
                          : isLast
                          ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 14% 50%)"
                          : "polygon(0% 0%, 86% 0%, 100% 50%, 86% 100%, 0% 100%, 14% 50%)",
                        marginLeft: isFirst ? "0px" : "-10px",
                        marginRight: isLast ? "0px" : "-10px",
                        zIndex: roadmapSteps.length - idx,
                      }}
                    >
                      <span className="text-[12px] font-black tracking-wide text-white leading-none mb-1">
                        {step.chevronTitle}
                      </span>
                      <span className="text-[10px] font-semibold text-white/80 leading-tight">
                        {step.timeframe}
                      </span>
                    </div>
                  </div>

                  {/* BOTTOM SLOT (Cards for Steps 2, 4, 6) */}
                  <div className="flex-1 flex flex-col justify-start items-center w-full pt-1">
                    {!isTop ? (
                      <motion.div
                        className="w-full flex flex-col items-center"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.12 }}
                      >
                        {/* Short Connector Arrow pointing UP from timeline */}
                        <div className="flex flex-col items-center mb-1">
                          <div
                            className="w-2 h-2 rounded-full border-2 border-white shadow-sm -mb-0.5 z-10"
                            style={{ background: step.color }}
                          />
                          <div className="w-0.5 h-4 bg-slate-300" />
                        </div>

                        {/* Header Box with Badge */}
                        <div className="w-full bg-white rounded-xl shadow-md border border-slate-200/90 p-3 mt-1 relative group hover:shadow-lg transition-all">
                          <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                            <div
                              className="w-7 h-7 rounded-lg flex items-center justify-center text-white flex-shrink-0 shadow-sm"
                              style={{ background: step.color }}
                            >
                              <IconComp className="w-4 h-4" />
                            </div>
                            <span className="font-extrabold text-xs text-[#1A1A24] tracking-tight line-clamp-1">
                              {step.badgeTitle}
                            </span>
                          </div>
                          {/* Bullet Points */}
                          <ul className="mt-2 space-y-1 text-left">
                            {step.bullets.map((bullet, bIdx) => (
                              <li
                                key={bIdx}
                                className="text-[10.5px] font-medium text-[#64748b] leading-tight flex items-start gap-1"
                              >
                                <span className="w-1 h-1 rounded-full bg-[#ff6200] mt-1 flex-shrink-0" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    ) : (
                      <div className="flex-1 w-full" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* MOBILE & TABLET VERTICAL ROADMAP (Clean responsive fallback) */}
        <div className="block lg:hidden relative pl-6 space-y-8 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
          {roadmapSteps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <motion.div
                key={idx}
                className="relative"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                {/* Number node on vertical timeline */}
                <div
                  className="absolute -left-[27px] top-1 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black text-white shadow-md border-2 border-white"
                  style={{ background: step.color }}
                >
                  {step.stepNum}
                </div>

                {/* Card */}
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200/80">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-sm"
                        style={{ background: step.color }}
                      >
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-extrabold text-base text-[#1A1A24] leading-tight">
                          {step.title}
                        </h4>
                        <span className="text-xs font-semibold text-[#ff6200]">
                          {step.timeframe}
                        </span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {step.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="text-xs font-medium text-[#64748b] leading-relaxed flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff6200] mt-1.5 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
