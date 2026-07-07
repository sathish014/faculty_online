"use client";

import React, { useState } from "react";
import { User, Bell, Shield, Eye, EyeOff, Save, Camera } from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [notifSettings, setNotifSettings] = useState({
    emailCourse: true,
    emailMessages: true,
    emailNewsletter: false,
    pushCourse: true,
    pushMessages: true,
  });

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Security", icon: Shield },
  ];

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-black text-[#1A1A24]">Settings</h1>
        <p className="text-sm text-[rgba(26,26,36,0.6)] mt-0.5">Manage your account preferences</p>
      </div>

      <div className="grid lg:grid-cols-[200px,1fr] gap-6">
        {/* Tab nav */}
        <div
          className="p-2 rounded-2xl h-fit flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible custom-scrollbar"
          style={{ background: "var(--bg-sidebar)", border: "1px solid rgba(26,26,36,0.08)" }}
        >
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className="flex-shrink-0 lg:flex-shrink flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold text-left transition-all whitespace-nowrap"
              style={{
                background: activeTab === id ? "#4D148C" : "transparent",
                color: activeTab === id ? "#fff" : "rgba(26,26,36,0.65)",
              }}
            >
              <Icon className="w-4 h-4 flex-shrink-0" style={{ color: activeTab === id ? "#ff6200" : undefined }} />
              {label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div
          className="p-5 sm:p-6 rounded-2xl"
          style={{ background: "var(--bg-sidebar)", border: "1px solid rgba(26,26,36,0.08)" }}
        >
          {/* Profile tab */}
          {activeTab === "profile" && (
            <div>
              <h2 className="font-bold text-[#1A1A24] mb-6">Personal Information</h2>

              {/* Avatar */}
              <div className="flex items-center gap-4 mb-8">
                <div className="relative">
                  <div className="w-20 h-20 rounded-2xl bg-[#4D148C] flex items-center justify-center">
                    <span className="text-3xl font-black text-white">S</span>
                  </div>
                  <button
                    className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-[#ff6200] flex items-center justify-center shadow-md"
                  >
                    <Camera className="w-3.5 h-3.5 text-white" />
                  </button>
                </div>
                <div>
                  <p className="font-bold text-[#1A1A24]">Student</p>
                  <p className="text-xs text-[rgba(26,26,36,0.5)]">student@example.com</p>
                  <button className="mt-1 text-xs font-semibold text-[#ff6200] hover:underline">
                    Change photo
                  </button>
                </div>
              </div>

              {/* Form */}
              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[rgba(26,26,36,0.65)] mb-1.5">First Name</label>
                    <input type="text" defaultValue="Student" id="settings-first-name"
                      className="w-full px-4 py-2.5 rounded-xl text-sm input-dark" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[rgba(26,26,36,0.65)] mb-1.5">Last Name</label>
                    <input type="text" defaultValue="User" id="settings-last-name"
                      className="w-full px-4 py-2.5 rounded-xl text-sm input-dark" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-[rgba(26,26,36,0.65)] mb-1.5">Email Address</label>
                  <input type="email" defaultValue="student@example.com" id="settings-email"
                    className="w-full px-4 py-2.5 rounded-xl text-sm input-dark" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[rgba(26,26,36,0.65)] mb-1.5">Phone Number</label>
                  <input type="tel" placeholder="+91 98765 43210" id="settings-phone"
                    className="w-full px-4 py-2.5 rounded-xl text-sm input-dark" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[rgba(26,26,36,0.65)] mb-1.5">City</label>
                  <input type="text" placeholder="e.g. Mumbai" id="settings-city"
                    className="w-full px-4 py-2.5 rounded-xl text-sm input-dark" />
                </div>
                <button id="settings-save-profile" className="btn-coral rounded-xl px-6 py-2.5 text-sm font-bold flex items-center gap-2">
                  <Save className="w-4 h-4" />
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {/* Notifications tab */}
          {activeTab === "notifications" && (
            <div>
              <h2 className="font-bold text-[#1A1A24] mb-6">Notification Preferences</h2>
              <div className="space-y-4">
                {[
                  { key: "emailCourse" as const, label: "Course updates", desc: "New lessons, course announcements" },
                  { key: "emailMessages" as const, label: "New messages", desc: "Tutor messages and replies" },
                  { key: "emailNewsletter" as const, label: "Newsletter", desc: "Weekly tips and articles" },
                  { key: "pushCourse" as const, label: "Push: Course updates", desc: "Browser notifications for lessons" },
                  { key: "pushMessages" as const, label: "Push: Messages", desc: "Instant message notifications" },
                ].map((item) => (
                  <div
                    key={item.key}
                    className="flex items-center justify-between p-4 rounded-xl"
                    style={{ border: "1px solid rgba(26,26,36,0.08)", background: "rgba(26,26,36,0.02)" }}
                  >
                    <div>
                      <p className="text-sm font-semibold text-[#1A1A24]">{item.label}</p>
                      <p className="text-xs text-[rgba(26,26,36,0.55)]">{item.desc}</p>
                    </div>
                    <button
                      id={`settings-notif-${item.key}`}
                      onClick={() => setNotifSettings((prev) => ({ ...prev, [item.key]: !prev[item.key] }))}
                      className="relative w-11 h-6 rounded-full transition-all duration-300 flex-shrink-0"
                      style={{
                        background: notifSettings[item.key] ? "#ff6200" : "rgba(26,26,36,0.15)",
                      }}
                    >
                      <div
                        className="absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-all duration-300"
                        style={{ left: notifSettings[item.key] ? "calc(100% - 20px)" : "4px" }}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Security tab */}
          {activeTab === "security" && (
            <div>
              <h2 className="font-bold text-[#1A1A24] mb-6">Security Settings</h2>
              <div className="space-y-4 max-w-md">
                <div>
                  <label className="block text-xs font-bold text-[rgba(26,26,36,0.65)] mb-1.5">Current Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="settings-current-password"
                      className="w-full px-4 py-2.5 pr-10 rounded-xl text-sm input-dark"
                      placeholder="Enter current password"
                    />
                    <button
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[rgba(26,26,36,0.4)]"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-[rgba(26,26,36,0.65)] mb-1.5">New Password</label>
                  <div className="relative">
                    <input
                      type={showNewPassword ? "text" : "password"}
                      id="settings-new-password"
                      className="w-full px-4 py-2.5 pr-10 rounded-xl text-sm input-dark"
                      placeholder="Enter new password"
                    />
                    <button
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[rgba(26,26,36,0.4)]"
                    >
                      {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-[rgba(26,26,36,0.65)] mb-1.5">Confirm New Password</label>
                  <input
                    type="password"
                    id="settings-confirm-password"
                    className="w-full px-4 py-2.5 rounded-xl text-sm input-dark"
                    placeholder="Repeat new password"
                  />
                </div>
                <button id="settings-save-password" className="btn-coral rounded-xl px-6 py-2.5 text-sm font-bold flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Update Password
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
