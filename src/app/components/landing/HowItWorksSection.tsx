"use client";

import { useState } from "react";
import {
  Search, MessageSquare, GraduationCap,
  UserPlus, Inbox, TrendingUp, Users, Briefcase,
} from "lucide-react";
import Link from "next/link";

const studentSteps = [
  {
    id: "step-s1",
    step: "1",
    icon: Search,
    title: "Search Tutors",
    description: "Use our smart search to find verified tutors by subject, location, and mode. Filter by rating, experience, and budget.",
    iconBg: "rgba(13,148,136,0.1)",
    iconColor: "#0d9488",
  },
  {
    id: "step-s2",
    step: "2",
    icon: MessageSquare,
    title: "Connect & Chat",
    description: "Message tutors directly, discuss your learning goals, schedule a trial session, and choose the perfect match.",
    iconBg: "rgba(99,102,241,0.1)",
    iconColor: "#6366f1",
  },
  {
    id: "step-s3",
    step: "3",
    icon: GraduationCap,
    title: "Start Learning",
    description: "Begin your personalized learning journey. Track progress, share resources, and achieve your goals faster.",
    iconBg: "rgba(139,92,246,0.1)",
    iconColor: "#8b5cf6",
  },
];

const tutorSteps = [
  {
    id: "step-t1",
    step: "1",
    icon: UserPlus,
    title: "Create Profile",
    description: "Build a compelling profile showcasing your expertise, experience, and teaching style. Upload certifications.",
    iconBg: "rgba(16,185,129,0.1)",
    iconColor: "#10b981",
  },
  {
    id: "step-t2",
    step: "2",
    icon: Inbox,
    title: "Receive Requests",
    description: "Get matched with students who need your skills. Receive notifications for relevant student requirements.",
    iconBg: "rgba(13,148,136,0.1)",
    iconColor: "#0d9488",
  },
  {
    id: "step-t3",
    step: "3",
    icon: TrendingUp,
    title: "Earn & Grow",
    description: "Teach on your schedule, earn consistently, build reviews, and grow your student base. Go Premium for more leads.",
    iconBg: "rgba(14,165,233,0.1)",
    iconColor: "#0ea5e9",
  },
];

type Step = (typeof studentSteps)[0];

function StepCard({ step }: { step: Step }) {
  return (
    <div className="bg-white border border-slate-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <div
          className="w-12 h-12 rounded flex items-center justify-center flex-shrink-0"
          style={{ background: step.iconBg }}
        >
          <step.icon className="w-6 h-6" style={{ color: step.iconColor }} />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Step {step.step}</span>
          </div>
          <h3 className="font-heading font-bold text-slate-900 text-base mb-2">{step.title}</h3>
          <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HowItWorksSection() {
  const [activeTab, setActiveTab] = useState<"student" | "tutor">("student");
  const steps = activeTab === "student" ? studentSteps : tutorSteps;

  return (
    <section id="how-it-works" className="py-14 section-light border-t border-slate-200">
      <div className="container-xl">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="font-heading font-bold text-slate-900 text-2xl md:text-3xl mb-3">
            How Faculties Online Works
          </h2>
          <p className="text-slate-500 text-sm max-w-lg mx-auto">
            Whether you&apos;re a student seeking knowledge or a tutor ready to teach, we&apos;ve made the process effortless.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex border border-slate-300 overflow-hidden">
            <button
              id="hiw-student-tab"
              onClick={() => setActiveTab("student")}
              className={`flex items-center gap-2 px-6 py-2.5 text-sm font-semibold transition-colors ${
                activeTab === "student"
                  ? "bg-slate-900 text-white"
                  : "bg-white text-slate-700 hover:bg-slate-50"
              }`}
              suppressHydrationWarning
            >
              <Users className="w-4 h-4" />
              For Students
            </button>
            <button
              id="hiw-tutor-tab"
              onClick={() => setActiveTab("tutor")}
              className={`flex items-center gap-2 px-6 py-2.5 text-sm font-semibold transition-colors border-l border-slate-300 ${
                activeTab === "tutor"
                  ? "bg-slate-900 text-white"
                  : "bg-white text-slate-700 hover:bg-slate-50"
              }`}
              suppressHydrationWarning
            >
              <Briefcase className="w-4 h-4" />
              For Tutors
            </button>
          </div>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {steps.map((step) => (
            <StepCard key={step.id} step={step} />
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center gap-3">
          <Link
            href="/tutor/search"
            id="hiw-find-tutor-cta"
            className="flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white transition-colors"
            style={{ background: "#0d9488" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#0f766e")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#0d9488")}
          >
            <Search className="w-4 h-4" />
            Find a Tutor
          </Link>
          <Link
            href="/register"
            id="hiw-become-tutor-cta"
            className="flex items-center gap-2 px-6 py-2.5 text-sm font-semibold border border-slate-900 text-slate-900 hover:bg-slate-100 transition-colors"
          >
            <Briefcase className="w-4 h-4" />
            Become a Tutor
          </Link>
        </div>

      </div>
    </section>
  );
}
