"use client";

import React, { useState } from "react";
import { Bell, BookOpen, MessageSquare, Settings, Zap, CheckCheck } from "lucide-react";

const notifications = [
  { id: "n1", type: "course", icon: BookOpen, title: "New lesson added to your course", desc: "\"React Performance Optimization\" has been added to Complete Web Dev Bootcamp", time: "5 min ago", read: false },
  { id: "n2", type: "message", icon: MessageSquare, title: "New message from Priya Sharma", desc: "Hi! Your next session is confirmed for tomorrow at 6 PM. Let me know if you have questions!", time: "2 hours ago", read: false },
  { id: "n3", type: "system", icon: Zap, title: "You've earned a new achievement!", desc: "Congratulations! You've unlocked the 'Fast Learner' badge for completing 5 lessons in a day.", time: "Yesterday", read: true },
  { id: "n4", type: "course", icon: BookOpen, title: "Course update: Python Data Science", desc: "Module 7 has been updated with new content on LLMs and GPT integration.", time: "2 days ago", read: true },
  { id: "n5", type: "message", icon: MessageSquare, title: "Tutor responded to your requirement", desc: "Amit Patel has responded to your 'Web Development' tutoring requirement.", time: "3 days ago", read: true },
];

const typeColors: Record<string, { bg: string; color: string }> = {
  course: { bg: "rgba(77,20,140,0.1)", color: "#4D148C" },
  message: { bg: "rgba(255,98,0,0.1)", color: "#ff6200" },
  system: { bg: "rgba(22,163,74,0.1)", color: "#16a34a" },
};

export default function NotificationsPage() {
  const [items, setItems] = useState(notifications);
  const [filter, setFilter] = useState("All");

  const unread = items.filter((n) => !n.read).length;

  const filtered = filter === "Unread" ? items.filter((n) => !n.read) : items;

  const markAllRead = () => setItems(items.map((n) => ({ ...n, read: true })));

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-black text-[#1A1A24]">Notifications</h1>
          <p className="text-sm text-[rgba(26,26,36,0.6)] mt-0.5">
            {unread > 0 ? `${unread} unread notification${unread > 1 ? "s" : ""}` : "All caught up!"}
          </p>
        </div>
        {unread > 0 && (
          <button
            onClick={markAllRead}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold btn-ghost"
          >
            <CheckCheck className="w-4 h-4" />
            Mark all read
          </button>
        )}
      </div>

      {/* Filter */}
      <div className="flex items-center gap-2 mb-6">
        {["All", "Unread"].map((f) => (
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
            {f === "Unread" && unread > 0 && (
              <span className="ml-1.5 px-1.5 py-0.5 rounded-full text-[10px] font-black bg-white/20">
                {unread}
              </span>
            )}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <Bell className="w-12 h-12 mx-auto mb-3 text-[rgba(26,26,36,0.2)]" />
          <h3 className="font-bold text-[#1A1A24]">No notifications</h3>
          <p className="text-sm text-[rgba(26,26,36,0.55)] mt-1">You&apos;re all caught up!</p>
        </div>
      ) : (
        <div className="space-y-2">
          {filtered.map((notif) => {
            const Icon = notif.icon;
            const style = typeColors[notif.type] || typeColors.system;
            return (
              <div
                key={notif.id}
                className="flex items-start gap-4 p-4 rounded-2xl transition-all cursor-pointer"
                style={{
                  background: notif.read ? "var(--bg-sidebar)" : "rgba(255,98,0,0.04)",
                  border: notif.read ? "1px solid rgba(26,26,36,0.08)" : "1px solid rgba(255,98,0,0.2)",
                }}
                onClick={() => setItems(items.map((n) => n.id === notif.id ? { ...n, read: true } : n))}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: style.bg, border: `1px solid ${style.color}25` }}
                >
                  <Icon className="w-5 h-5" style={{ color: style.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-semibold text-sm text-[#1A1A24]">{notif.title}</p>
                    {!notif.read && (
                      <div className="w-2 h-2 rounded-full bg-[#ff6200] flex-shrink-0 mt-1 animate-coral-pulse" />
                    )}
                  </div>
                  <p className="text-xs text-[rgba(26,26,36,0.6)] mt-0.5 leading-relaxed">{notif.desc}</p>
                  <p className="text-[10px] text-[rgba(26,26,36,0.4)] mt-1.5 font-medium">{notif.time}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
