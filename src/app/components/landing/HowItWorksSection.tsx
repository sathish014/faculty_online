"use client";

import { useState } from "react";
import {
  Search,
  MessageSquare,
  GraduationCap,
  UserPlus,
  Inbox,
  TrendingUp,
  ArrowRight,
  Users,
  Briefcase,
} from "lucide-react";

const studentSteps = [
  {
    id: "step-s1",
    step: "01",
    icon: Search,
    title: "Search Tutors",
    description:
      "Use our smart search to find verified tutors by subject, location, and mode. Filter by rating, experience, and budget.",
    iconGradient: "from-blue-500 to-indigo-600",
    cardAccent: "border-blue-200",
    cardBg: "bg-blue-50/60",
    stepColor: "text-blue-600",
  },
  {
    id: "step-s2",
    step: "02",
    icon: MessageSquare,
    title: "Connect & Chat",
    description:
      "Message tutors directly, discuss your learning goals, schedule a trial session, and choose the perfect match.",
    iconGradient: "from-indigo-500 to-violet-600",
    cardAccent: "border-indigo-200",
    cardBg: "bg-indigo-50/60",
    stepColor: "text-indigo-600",
  },
  {
    id: "step-s3",
    step: "03",
    icon: GraduationCap,
    title: "Start Learning",
    description:
      "Begin your personalized learning journey. Track progress, share resources, and achieve your goals faster.",
    iconGradient: "from-violet-500 to-purple-600",
    cardAccent: "border-violet-200",
    cardBg: "bg-violet-50/60",
    stepColor: "text-violet-600",
  },
];

const tutorSteps = [
  {
    id: "step-t1",
    step: "01",
    icon: UserPlus,
    title: "Create Profile",
    description:
      "Build a compelling profile showcasing your expertise, experience, and teaching style. Upload certifications.",
    iconGradient: "from-emerald-500 to-teal-600",
    cardAccent: "border-emerald-200",
    cardBg: "bg-emerald-50/60",
    stepColor: "text-emerald-600",
  },
  {
    id: "step-t2",
    step: "02",
    icon: Inbox,
    title: "Receive Requests",
    description:
      "Get matched with students who need your skills. Receive notifications for relevant student requirements.",
    iconGradient: "from-teal-500 to-cyan-600",
    cardAccent: "border-teal-200",
    cardBg: "bg-teal-50/60",
    stepColor: "text-teal-600",
  },
  {
    id: "step-t3",
    step: "03",
    icon: TrendingUp,
    title: "Earn & Grow",
    description:
      "Teach on your schedule, earn consistently, build reviews, and grow your student base. Go Premium for more leads.",
    iconGradient: "from-cyan-500 to-blue-600",
    cardAccent: "border-cyan-200",
    cardBg: "bg-cyan-50/60",
    stepColor: "text-cyan-600",
  },
];

type Step = (typeof studentSteps)[0];

function StepCard({ step }: { step: Step }) {
  return (
    <div
      className={`w-full rounded-2xl border ${step.cardAccent} ${step.cardBg} p-7 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group`}
    >
      {/* Top row: icon + step number */}
      <div className="flex items-start justify-between mb-5">
        <div
          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.iconGradient} flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300`}
        >
          <step.icon className="w-7 h-7 text-white" />
        </div>

        <div className="flex flex-col items-end">
          <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400 mb-0.5">
            Step
          </span>
          <span className={`text-3xl font-black leading-none ${step.stepColor}`}>
            {step.step}
          </span>
        </div>
      </div>

      <h3 className="font-heading font-bold text-slate-900 text-lg mb-2">
        {step.title}
      </h3>
      <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
    </div>
  );
}

export default function HowItWorksSection() {
  const [activeTab, setActiveTab] = useState<"student" | "tutor">("student");
  const steps = activeTab === "student" ? studentSteps : tutorSteps;

  return (
    <section id="how-it-works" className="py-18 bg-gradient-to-b from-slate-50 to-white">
      <div className="container-xl">
        {/* Header */}
        <div className="text-center mb-14">

          <h2 className="text-3xl md:text-4xl xl:text-5xl font-heading font-extrabold text-slate-900 mb-4">
            How{" "}
            <span className="gradient-text">Faculties Online</span>
            <br />
            Works for You
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto mb-4">
            Whether you&apos;re a student seeking knowledge or a tutor ready to teach,
            we&apos;ve made the process effortless.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-semibold mb-4">
            <ArrowRight className="w-3.5 h-3.5" />
            Simple &amp; Seamless
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex items-center p-1.5 bg-slate-100 rounded-2xl gap-1">
            <button
              id="hiw-student-tab"
              onClick={() => setActiveTab("student")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${activeTab === "student"
                ? "bg-white text-indigo-600 shadow-md shadow-indigo-100"
                : "text-slate-500 hover:text-slate-700"
                }`}
              suppressHydrationWarning
            >
              <Users className="w-4 h-4" />
              For Students
            </button>
            <button
              id="hiw-tutor-tab"
              onClick={() => setActiveTab("tutor")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${activeTab === "tutor"
                ? "bg-white text-emerald-600 shadow-md shadow-emerald-100"
                : "text-slate-500 hover:text-slate-700"
                }`}
              suppressHydrationWarning
            >
              <Briefcase className="w-4 h-4" />
              For Tutors
            </button>
          </div>
        </div>

        {/* Steps grid — arrow sits in the gap between cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div key={step.id} className="relative">
              <StepCard step={step} />
              {/* Arrow icon positioned at the right edge, centered vertically */}
              {i < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-white border border-slate-200 shadow items-center justify-center">
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <button
              id="hiw-find-tutor-cta"
              className="btn-primary flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white shadow-lg"
              suppressHydrationWarning
            >
              <Search className="w-5 h-5" />
              Start as Student
            </button>
            <button
              id="hiw-become-tutor-cta"
              className="flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-emerald-600 border border-emerald-200 hover:bg-emerald-50 transition-all"
              suppressHydrationWarning
            >
              <Briefcase className="w-5 h-5" />
              Become a Tutor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
