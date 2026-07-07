"use client";

import React, { useState } from "react";
import { BookOpen, PlayCircle, Clock, Award, ChevronRight, Search, Filter } from "lucide-react";
import Link from "next/link";

const myCourses = [
  { id: "c1", slug: "complete-web-development", title: "Complete Web Development Bootcamp 2026", instructor: "Amit Patel", thumbnail: "https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?q=80&w=400&auto=format&fit=crop", progress: 72, totalLessons: 124, completedLessons: 89, nextLesson: "React Hooks Deep Dive", timeLeft: "12h remaining", category: "Web Dev", status: "in-progress" as const },
  { id: "c2", slug: "python-data-science", title: "Python for Data Science & Machine Learning", instructor: "Vikram Malhotra", thumbnail: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=400&auto=format&fit=crop", progress: 100, totalLessons: 98, completedLessons: 98, nextLesson: "", timeLeft: "", category: "Data Science", status: "completed" as const },
  { id: "c3", slug: "spoken-english-fluency", title: "Spoken English: From Beginner to Fluent", instructor: "Anjali Mehta", thumbnail: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=400&auto=format&fit=crop", progress: 34, totalLessons: 72, completedLessons: 24, nextLesson: "Business English Vocabulary", timeLeft: "18h remaining", category: "English", status: "in-progress" as const },
];

const statusColors = {
  "in-progress": { bg: "rgba(245,158,11,0.1)", text: "#d97706", label: "In Progress" },
  "completed": { bg: "rgba(22,163,74,0.1)", text: "#16a34a", label: "Completed" },
  "not-started": { bg: "rgba(26,26,36,0.08)", text: "rgba(26,26,36,0.5)", label: "Not Started" },
};

export default function MyCoursesPage() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? myCourses :
    filter === "In Progress" ? myCourses.filter((c) => c.status === "in-progress") :
    myCourses.filter((c) => c.status === "completed");

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-black text-[#1A1A24]">My Courses</h1>
          <p className="text-sm text-[rgba(26,26,36,0.6)] mt-0.5">{myCourses.length} enrolled courses</p>
        </div>
        <Link
          href="/courses"
          className="btn-coral rounded-xl px-5 py-2.5 text-sm font-bold hidden sm:flex items-center gap-2"
        >
          <BookOpen className="w-4 h-4" />
          Browse Courses
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { label: "Total Enrolled", value: myCourses.length, icon: BookOpen, color: "#4D148C" },
          { label: "Completed", value: myCourses.filter((c) => c.status === "completed").length, icon: Award, color: "#16a34a" },
          { label: "In Progress", value: myCourses.filter((c) => c.status === "in-progress").length, icon: PlayCircle, color: "#ff6200" },
        ].map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div
              key={i}
              className="p-4 rounded-2xl"
              style={{ background: "var(--bg-sidebar)", border: "1px solid rgba(26,26,36,0.08)" }}
            >
              <Icon className="w-5 h-5 mb-2" style={{ color: stat.color }} />
              <div className="text-2xl font-black text-[#1A1A24]">{stat.value}</div>
              <div className="text-xs text-[rgba(26,26,36,0.55)] mt-0.5">{stat.label}</div>
            </div>
          );
        })}
      </div>

      {/* Filter */}
      <div className="flex items-center gap-2 mb-6">
        {["All", "In Progress", "Completed"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className="px-4 py-2 rounded-xl text-sm font-semibold transition-all"
            style={{
              background: filter === f ? "#ff6200" : "rgba(26,26,36,0.06)",
              color: filter === f ? "#fff" : "rgba(26,26,36,0.7)",
              border: filter === f ? "1px solid #ff6200" : "1px solid rgba(26,26,36,0.1)",
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Course list */}
      <div className="space-y-4">
        {filtered.map((course) => {
          const statusStyle = statusColors[course.status];
          return (
            <div
              key={course.id}
              className="rounded-2xl overflow-hidden"
              style={{ background: "var(--bg-sidebar)", border: "1px solid rgba(26,26,36,0.08)" }}
            >
              <div className="flex flex-col sm:flex-row gap-0">
                {/* Thumbnail */}
                <div className="w-full sm:w-40 h-28 sm:h-auto flex-shrink-0 overflow-hidden">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 p-5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#ff6200]">
                          {course.category}
                        </span>
                        <span
                          className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                          style={{ background: statusStyle.bg, color: statusStyle.text }}
                        >
                          {statusStyle.label}
                        </span>
                      </div>
                      <h3 className="font-bold text-sm text-[#1A1A24] line-clamp-2">{course.title}</h3>
                      <p className="text-xs text-[rgba(26,26,36,0.55)] mt-0.5">by {course.instructor}</p>
                    </div>

                    {/* Continue button */}
                    <div className="flex-shrink-0 flex flex-col gap-2">
                      {course.status === "completed" ? (
                        <Link
                          href="/student-dashboard/certificates"
                          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold"
                          style={{ background: "rgba(22,163,74,0.1)", color: "#16a34a", border: "1px solid rgba(22,163,74,0.2)" }}
                        >
                          <Award className="w-3.5 h-3.5" />
                          Certificate
                        </Link>
                      ) : (
                        <Link
                          href={`/courses/${course.slug}`}
                          className="btn-coral rounded-xl px-3.5 py-2 text-xs font-bold flex items-center gap-1.5"
                        >
                          <PlayCircle className="w-3.5 h-3.5" />
                          Continue
                        </Link>
                      )}
                    </div>
                  </div>

                  {/* Progress */}
                  <div className="mb-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] text-[rgba(26,26,36,0.55)]">
                        {course.completedLessons}/{course.totalLessons} lessons
                      </span>
                      <span className="text-[11px] font-bold text-[#ff6200]">{course.progress}%</span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Next lesson */}
                  {course.nextLesson && (
                    <div className="flex items-center gap-1.5 text-[11px] text-[rgba(26,26,36,0.55)]">
                      <PlayCircle className="w-3 h-3" />
                      <span>Next: {course.nextLesson}</span>
                      <span className="ml-auto flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {course.timeLeft}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
