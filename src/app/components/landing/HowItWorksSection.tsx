"use client";

import { useState } from "react";
import { Search, MessageSquare, GraduationCap, UserPlus, Inbox, TrendingUp, ArrowRight, Users, Briefcase } from "lucide-react";

const studentSteps = [
  {
    id: "step-s1",
    step: "01",
    icon: Search,
    title: "Search Tutors",
    description:
      "Use our smart search to find verified tutors by subject, location, and mode. Filter by rating, experience, and budget.",
    color: "from-blue-500 to-indigo-500",
    highlight: "blue",
  },
  {
    id: "step-s2",
    step: "02",
    icon: MessageSquare,
    title: "Connect & Chat",
    description:
      "Message tutors directly, discuss your learning goals, schedule a trial session, and choose the perfect match.",
    color: "from-indigo-500 to-violet-500",
    highlight: "indigo",
  },
  {
    id: "step-s3",
    step: "03",
    icon: GraduationCap,
    title: "Start Learning",
    description:
      "Begin your personalized learning journey. Track progress, share resources, and achieve your goals faster.",
    color: "from-violet-500 to-purple-500",
    highlight: "violet",
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
    color: "from-emerald-500 to-teal-500",
    highlight: "emerald",
  },
  {
    id: "step-t2",
    step: "02",
    icon: Inbox,
    title: "Receive Requests",
    description:
      "Get matched with students who need your skills. Receive notifications for relevant student requirements.",
    color: "from-teal-500 to-cyan-500",
    highlight: "teal",
  },
  {
    id: "step-t3",
    step: "03",
    icon: TrendingUp,
    title: "Earn & Grow",
    description:
      "Teach on your schedule, earn consistently, build reviews, and grow your student base. Go Premium for more leads.",
    color: "from-cyan-500 to-blue-500",
    highlight: "cyan",
  },
];

interface StepCardProps {
  step: {
    id: string;
    step: string;
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
    color: string;
    highlight: string;
  };
  index: number;
  isLast: boolean;
  type: "student" | "tutor";
}

function StepCard({ step, index, isLast, type }: StepCardProps) {
  return (
    <div className="relative flex flex-col items-center text-center group">
      {/* Connector line */}
      {!isLast && (
        <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 z-0">
          <div className={`h-full bg-gradient-to-r ${step.color} opacity-30`} />
          {/* Arrow dot */}
          <div
            className={`absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gradient-to-br ${step.color}`}
          />
        </div>
      )}

      {/* Icon container */}
      <div className="relative z-10 mb-5">
        <div
          className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300`}
        >
          <step.icon className="w-9 h-9 text-white" />
        </div>
        {/* Step number badge */}
        <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center text-xs font-black text-slate-500 shadow-sm">
          {step.step}
        </div>
      </div>

      <h3 className="font-heading font-bold text-slate-900 text-lg mb-2">
        {step.title}
      </h3>
      <p className="text-slate-500 text-sm leading-relaxed max-w-xs">{step.description}</p>
    </div>
  );
}

export default function HowItWorksSection() {
  const [activeTab, setActiveTab] = useState<"student" | "tutor">("student");

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container-xl">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-semibold mb-4">
            <ArrowRight className="w-3.5 h-3.5" />
            Simple & Seamless
          </div>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-heading font-extrabold text-slate-900 mb-4">
            How{" "}
            <span className="gradient-text">Faculties Online</span>
            <br />
            Works for You
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Whether you're a student seeking knowledge or a tutor ready to teach,
            we've made the process effortless.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex items-center p-1.5 bg-slate-100 rounded-2xl gap-1">
            <button
              id="hiw-student-tab"
              onClick={() => setActiveTab("student")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                activeTab === "student"
                  ? "bg-white text-indigo-600 shadow-md shadow-indigo-100"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              <Users className="w-4 h-4" />
              For Students
            </button>
            <button
              id="hiw-tutor-tab"
              onClick={() => setActiveTab("tutor")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                activeTab === "tutor"
                  ? "bg-white text-emerald-600 shadow-md shadow-emerald-100"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              <Briefcase className="w-4 h-4" />
              For Tutors
            </button>
          </div>
        </div>

        {/* Steps */}
        <div className="relative">
          {activeTab === "student" && (
            <div className="grid md:grid-cols-3 gap-10 md:gap-8">
              {studentSteps.map((step, i) => (
                <StepCard
                  key={step.id}
                  step={step}
                  index={i}
                  isLast={i === studentSteps.length - 1}
                  type="student"
                />
              ))}
            </div>
          )}

          {activeTab === "tutor" && (
            <div className="grid md:grid-cols-3 gap-10 md:gap-8">
              {tutorSteps.map((step, i) => (
                <StepCard
                  key={step.id}
                  step={step}
                  index={i}
                  isLast={i === tutorSteps.length - 1}
                  type="tutor"
                />
              ))}
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <button
              id="hiw-find-tutor-cta"
              className="btn-primary flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white shadow-lg"
            >
              <Search className="w-5 h-5" />
              Start as Student
            </button>
            <button
              id="hiw-become-tutor-cta"
              className="flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-emerald-600 border border-emerald-200 hover:bg-emerald-50 transition-all"
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
