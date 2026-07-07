"use client";

import React from "react";
import { TrendingUp, Flame, Clock, BookOpen, Award, CheckCircle, Star } from "lucide-react";
import CounterAnimation from "../../components/common/CounterAnimation";

const weeklyData = [
  { day: "Mon", hours: 2.5 },
  { day: "Tue", hours: 1.5 },
  { day: "Wed", hours: 3 },
  { day: "Thu", hours: 0.5 },
  { day: "Fri", hours: 2 },
  { day: "Sat", hours: 4 },
  { day: "Sun", hours: 1 },
];

const maxHours = Math.max(...weeklyData.map((d) => d.hours));

const achievements = [
  { icon: "🔥", title: "7-Day Streak", desc: "Learned 7 days in a row", earned: true },
  { icon: "⚡", title: "Fast Learner", desc: "Completed 5 lessons in a day", earned: true },
  { icon: "🎯", title: "Course Completer", desc: "Finished your first course", earned: true },
  { icon: "📚", title: "Book Worm", desc: "Read 10 articles", earned: false },
  { icon: "🏆", title: "Top Student", desc: "Score 95%+ on a quiz", earned: false },
  { icon: "🌟", title: "Super Streak", desc: "30-day learning streak", earned: false },
];

export default function ProgressPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-black text-[#1A1A24]">Learning Progress</h1>
        <p className="text-sm text-[rgba(26,26,36,0.6)] mt-0.5">Track your streak, time, and achievements</p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {[
          { icon: Flame, label: "Day Streak", value: 7, suffix: " days", color: "#ff6200" },
          { icon: Clock, label: "Total Hours", value: 48, suffix: "h", color: "#4D148C" },
          { icon: BookOpen, label: "Lessons Done", value: 112, suffix: "", color: "#16a34a" },
          { icon: Award, label: "Certificates", value: 2, suffix: "", color: "#f59e0b" },
        ].map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div
              key={i}
              className="p-5 rounded-2xl text-center"
              style={{ background: "var(--bg-sidebar)", border: "1px solid rgba(26,26,36,0.08)" }}
            >
              <div
                className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center"
                style={{ background: `${stat.color}15`, border: `1px solid ${stat.color}25` }}
              >
                <Icon className="w-5 h-5" style={{ color: stat.color }} />
              </div>
              <div className="text-2xl font-black text-[#1A1A24]">
                <CounterAnimation end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs text-[rgba(26,26,36,0.55)] mt-0.5">{stat.label}</div>
            </div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        {/* Weekly activity chart */}
        <div
          className="p-6 rounded-2xl"
          style={{ background: "var(--bg-sidebar)", border: "1px solid rgba(26,26,36,0.08)" }}
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-bold text-[#1A1A24]">This Week</h2>
              <p className="text-xs text-[rgba(26,26,36,0.5)]">Daily learning hours</p>
            </div>
            <span className="text-sm font-bold text-[#ff6200]">14.5h total</span>
          </div>
          <div className="flex items-end gap-3 h-32">
            {weeklyData.map((d, i) => {
              const heightPct = (d.hours / maxHours) * 100;
              const isToday = i === 6;
              return (
                <div key={d.day} className="flex-1 flex flex-col items-center gap-1">
                  <span className="text-[10px] font-bold" style={{ color: isToday ? "#ff6200" : "rgba(26,26,36,0.35)" }}>
                    {d.hours}h
                  </span>
                  <div
                    className="w-full rounded-t-lg transition-all duration-1000"
                    style={{
                      height: `${heightPct}%`,
                      background: isToday
                        ? "linear-gradient(to top, #ff6200, #ff8c42)"
                        : "linear-gradient(to top, rgba(77,20,140,0.4), rgba(77,20,140,0.2))",
                      minHeight: 4,
                    }}
                  />
                  <span className="text-[10px]" style={{ color: isToday ? "#ff6200" : "rgba(26,26,36,0.4)" }}>
                    {d.day}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Course progress */}
        <div
          className="p-6 rounded-2xl"
          style={{ background: "var(--bg-sidebar)", border: "1px solid rgba(26,26,36,0.08)" }}
        >
          <h2 className="font-bold text-[#1A1A24] mb-5">Course Progress</h2>
          <div className="space-y-4">
            {[
              { title: "Complete Web Dev", progress: 72, color: "#ff6200" },
              { title: "Python Data Science", progress: 100, color: "#16a34a" },
              { title: "Spoken English", progress: 34, color: "#4D148C" },
            ].map((course, i) => (
              <div key={i}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm font-medium text-[#1A1A24] line-clamp-1">{course.title}</span>
                  <span className="text-xs font-bold flex-shrink-0 ml-2" style={{ color: course.color }}>{course.progress}%</span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${course.progress}%`, background: `linear-gradient(90deg, ${course.color}, ${course.color}80)` }}
                  />
                </div>
                {course.progress === 100 && (
                  <div className="flex items-center gap-1 mt-1">
                    <CheckCircle className="w-3 h-3 text-[#16a34a]" />
                    <span className="text-[10px] font-medium text-[#16a34a]">Completed!</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div>
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-bold text-[#1A1A24]">Achievements</h2>
          <span className="text-xs text-[rgba(26,26,36,0.5)]">
            {achievements.filter((a) => a.earned).length} / {achievements.length} earned
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {achievements.map((ach, i) => (
            <div
              key={i}
              className="p-4 rounded-2xl text-center transition-all"
              style={{
                background: ach.earned ? "var(--bg-sidebar)" : "rgba(26,26,36,0.03)",
                border: ach.earned ? "1px solid rgba(255,98,0,0.2)" : "1px solid rgba(26,26,36,0.07)",
                opacity: ach.earned ? 1 : 0.5,
              }}
            >
              <div className="text-3xl mb-2">{ach.icon}</div>
              <h3 className="text-sm font-bold text-[#1A1A24] mb-1">{ach.title}</h3>
              <p className="text-[10px] text-[rgba(26,26,36,0.55)]">{ach.desc}</p>
              {ach.earned && (
                <div className="mt-2 inline-flex items-center gap-1 text-[10px] font-bold text-[#ff6200]">
                  <Star className="w-3 h-3" />
                  Earned
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
