"use client";

import React, { useState } from "react";
import ScrollReveal from "../common/ScrollReveal";
import { CheckCircle, Lock, ArrowRight } from "lucide-react";

const paths = [
  {
    id: "web",
    label: "Web Development",
    icon: "🌐",
    color: "#ff6200",
    steps: [
      { name: "HTML & CSS Basics", duration: "2 weeks", completed: true },
      { name: "JavaScript Fundamentals", duration: "3 weeks", completed: true },
      { name: "TypeScript", duration: "2 weeks", completed: true },
      { name: "React JS", duration: "4 weeks", completed: false },
      { name: "Next.js & SSR", duration: "3 weeks", completed: false, locked: true },
      { name: "Backend with Node.js", duration: "4 weeks", completed: false, locked: true },
      { name: "Capstone Project", duration: "2 weeks", completed: false, locked: true },
      { name: "Certificate", duration: "", isCert: true, locked: true },
    ],
  },
  {
    id: "ds",
    label: "Data Science",
    icon: "📊",
    color: "#4D148C",
    steps: [
      { name: "Python Programming", duration: "3 weeks", completed: true },
      { name: "Statistics & Math", duration: "2 weeks", completed: true },
      { name: "Pandas & NumPy", duration: "2 weeks", completed: false },
      { name: "Machine Learning", duration: "5 weeks", completed: false, locked: true },
      { name: "Deep Learning", duration: "4 weeks", completed: false, locked: true },
      { name: "Projects & Portfolio", duration: "3 weeks", completed: false, locked: true },
      { name: "Certificate", duration: "", isCert: true, locked: true },
    ],
  },
  {
    id: "jee",
    label: "JEE Preparation",
    icon: "🎓",
    color: "#f59e0b",
    steps: [
      { name: "Mathematics – Class 11", duration: "8 weeks", completed: true },
      { name: "Physics – Class 11", duration: "8 weeks", completed: false },
      { name: "Chemistry – Class 11", duration: "8 weeks", completed: false, locked: true },
      { name: "Mathematics – Class 12", duration: "8 weeks", completed: false, locked: true },
      { name: "Physics – Class 12", duration: "8 weeks", completed: false, locked: true },
      { name: "Chemistry – Class 12", duration: "8 weeks", completed: false, locked: true },
      { name: "Mock Tests & Revision", duration: "4 weeks", completed: false, locked: true },
      { name: "Certificate", duration: "", isCert: true, locked: true },
    ],
  },
];

export default function LearningRoadmapSection() {
  const [activePath, setActivePath] = useState("web");
  const path = paths.find((p) => p.id === activePath) || paths[0];

  return (
    <section className="pt-8 pb-12" style={{ background: "var(--bg-secondary)" }}>
      <div className="line-divider mb-10" />
      <div className="container-xl">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#ff6200] text-xs font-bold uppercase tracking-widest">Roadmap</span>
            <span className="h-px flex-1 max-w-[40px]" style={{ background: "rgba(255,98,0,0.4)" }} />
          </div>
        </ScrollReveal>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-10">
          <ScrollReveal delay={100}>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight text-[#1A1A24]">
              Your structured<br />
              <span style={{ color: "#ff6200" }}>learning journey</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-sm text-[rgba(26,26,36,0.6)] max-w-xs">
              Follow a guided path from beginner to expert. Track progress and earn your certificate.
            </p>
          </ScrollReveal>
        </div>

        {/* Path selector */}
        <ScrollReveal delay={150}>
          <div className="flex flex-wrap gap-3 mb-10">
            {paths.map((p) => (
              <button
                key={p.id}
                onClick={() => setActivePath(p.id)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-250"
                style={{
                  background: activePath === p.id ? p.color : "transparent",
                  color: activePath === p.id ? "#fff" : "rgba(26,26,36,0.65)",
                  border: activePath === p.id ? `1px solid ${p.color}` : "1px solid rgba(26,26,36,0.15)",
                  boxShadow: activePath === p.id ? `0 8px 24px ${p.color}40` : "none",
                }}
              >
                <span>{p.icon}</span> {p.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Steps */}
          <div className="space-y-0">
            {path.steps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="relative flex gap-4 pb-6">
                  {/* Connector line */}
                  {i < path.steps.length - 1 && (
                    <div
                      className="absolute left-4 top-8 bottom-0 w-0.5"
                      style={{
                        background: step.completed
                          ? `linear-gradient(to bottom, ${path.color}, ${path.color}60)`
                          : "rgba(26,26,36,0.1)",
                      }}
                    />
                  )}

                  {/* Node */}
                  <div className="relative z-10 flex-shrink-0">
                    {step.isCert ? (
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-sm shadow-lg"
                        style={{ background: `linear-gradient(135deg, ${path.color}, ${path.color}80)` }}
                      >
                        🏆
                      </div>
                    ) : step.completed ? (
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center shadow-sm"
                        style={{ background: path.color, border: `2px solid ${path.color}40` }}
                      >
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                    ) : step.locked ? (
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center"
                        style={{ background: "rgba(26,26,36,0.06)", border: "2px dashed rgba(26,26,36,0.15)" }}
                      >
                        <Lock className="w-3.5 h-3.5" style={{ color: "rgba(26,26,36,0.3)" }} />
                      </div>
                    ) : (
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center animate-coral-pulse"
                        style={{
                          background: `${path.color}20`,
                          border: `2px solid ${path.color}`,
                        }}
                      >
                        <span className="text-xs font-black" style={{ color: path.color }}>
                          {i + 1}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0 pt-1">
                    <div className="flex items-center justify-between gap-2">
                      <h4
                        className="text-sm font-bold leading-tight"
                        style={{
                          color: step.isCert
                            ? path.color
                            : step.locked
                            ? "rgba(26,26,36,0.35)"
                            : "#1A1A24",
                        }}
                      >
                        {step.name}
                      </h4>
                      {step.duration && (
                        <span
                          className="text-[10px] font-medium flex-shrink-0"
                          style={{ color: "rgba(26,26,36,0.4)" }}
                        >
                          {step.duration}
                        </span>
                      )}
                    </div>
                    {step.isCert && (
                      <span
                        className="mt-1 inline-block text-[10px] font-bold px-2 py-0.5 rounded-full"
                        style={{
                          background: `${path.color}15`,
                          color: path.color,
                          border: `1px solid ${path.color}30`,
                        }}
                      >
                        Verifiable Certificate
                      </span>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Info card */}
          <ScrollReveal delay={300} direction="right">
            <div
              className="rounded-2xl p-6 sm:p-8 lg:sticky lg:top-24"
              style={{
                background: "var(--bg-sidebar)",
                border: "1px solid rgba(26,26,36,0.08)",
              }}
            >
              <div className="text-4xl mb-4">{path.icon}</div>
              <h3 className="text-xl font-black text-[#1A1A24] mb-2">{path.label}</h3>
              <p className="text-sm text-[rgba(26,26,36,0.6)] leading-relaxed mb-6">
                A comprehensive, mentor-guided path to mastering {path.label.toLowerCase()} from scratch to deployment-ready expertise.
              </p>

              {/* Progress */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-[rgba(26,26,36,0.65)]">Overall Progress</span>
                  <span className="text-xs font-black" style={{ color: path.color }}>
                    {Math.round((path.steps.filter((s) => s.completed).length / path.steps.length) * 100)}%
                  </span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{
                      width: `${Math.round((path.steps.filter((s) => s.completed).length / path.steps.length) * 100)}%`,
                      background: `linear-gradient(90deg, ${path.color}, ${path.color}80)`,
                    }}
                  />
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { val: path.steps.length, label: "Modules" },
                  { val: path.steps.filter((s) => !s.locked && !s.isCert).length, label: "Active" },
                  { val: path.steps.filter((s) => s.completed).length, label: "Done" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="text-center p-3 rounded-xl"
                    style={{ background: "rgba(26,26,36,0.04)", border: "1px solid rgba(26,26,36,0.07)" }}
                  >
                    <div className="text-lg font-black text-[#1A1A24]">{stat.val}</div>
                    <div className="text-[10px] text-[rgba(26,26,36,0.5)]">{stat.label}</div>
                  </div>
                ))}
              </div>

              <button
                className="w-full btn-coral rounded-xl py-3 flex items-center justify-center gap-2 text-sm font-bold"
                style={{ boxShadow: `0 8px 24px ${path.color}40` }}
              >
                Start this Path
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-center text-xs mt-2" style={{ color: "rgba(26,26,36,0.4)" }}>
                Certificate included on completion
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
