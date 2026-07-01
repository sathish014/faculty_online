"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  FileText, 
  PlusCircle, 
  MessageSquare, 
  Wallet,
  Menu,
  X,
  UserCircle,
  Bell,
  Search
} from "lucide-react";

const sidebarLinks = [
  { name: "Dashboard", href: "/student-dashboard", icon: LayoutDashboard },
  { name: "My Requirements", href: "/student-dashboard/my-requirements", icon: FileText },
  { name: "Post Requirement", href: "/student-dashboard/post-requirement", icon: PlusCircle },
  { name: "Messages", href: "/student-dashboard/messages", icon: MessageSquare },
  { name: "Wallet", href: "/student-dashboard/wallet", icon: Wallet },
];

export default function StudentDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex font-sans" style={{ background: "var(--bg-primary)" }}>
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-[#1A1A24]/60 backdrop-blur-xs lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed inset-y-0 left-0 z-50 w-64 border-r border-[#1A1A24]/10 transform transition-transform duration-300 lg:translate-x-0 lg:static lg:inset-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ background: "var(--bg-sidebar)" }}
      >
        <div className="h-full flex flex-col">
          {/* Logo */}
          <div className="h-16 flex items-center px-6 border-b border-[#1A1A24]/10">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-[#4D148C] flex items-center justify-center shadow-md shadow-[#4D148C]/20 transition-transform group-hover:scale-105">
                <span className="text-[#ff6200] font-black text-base">F</span>
              </div>
              <span className="text-lg font-extrabold text-[#1A1A24] tracking-tight">
                Faculties<span className="text-[#ff6200]">.</span><span className="font-normal text-[#1A1A24]/70">Online</span>
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto custom-scrollbar">
            {sidebarLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-bold text-sm transition-all duration-200 ${
                    isActive
                      ? "bg-[#4D148C] text-white shadow-md shadow-[#4D148C]/20"
                      : "text-[#1A1A24]/70 hover:bg-[#1A1A24]/5 hover:text-[#1A1A24]"
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <link.icon className={`w-5 h-5 ${isActive ? "text-[#ff6200]" : "text-[#1A1A24]/50"}`} />
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Bottom actions (Switch to Tutor) */}
          <div className="p-4 border-t border-[#1A1A24]/10">
            <Link
              href="/teacher-dashboard"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-[#ff6200]/30 bg-[#ff6200]/10 text-[#ff6200] font-bold text-sm hover:bg-[#ff6200] hover:text-white transition-all duration-200"
            >
              <UserCircle className="w-4 h-4" />
              Switch to Tutor
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-x-hidden">
        {/* Header */}
        <header 
          className="h-16 border-b border-[#1A1A24]/10 flex items-center justify-between px-4 sm:px-6 z-30 sticky top-0 backdrop-blur-md"
          style={{ background: "rgba(253, 244, 234, 0.85)" }}
        >
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 -ml-2 text-[#1A1A24]/70 hover:bg-[#1A1A24]/5 rounded-lg lg:hidden"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="hidden sm:flex items-center gap-2 bg-[#1A1A24]/5 px-3.5 py-2 rounded-xl border border-[#1A1A24]/10 focus-within:border-[#ff6200] focus-within:ring-2 focus-within:ring-[#ff6200]/20 transition-all">
              <Search className="w-4 h-4 text-[#1A1A24]/40" />
              <input 
                type="text"
                placeholder="Search courses, tutors..."
                className="bg-transparent border-none focus:outline-none text-sm font-medium text-[#1A1A24] placeholder:text-[#1A1A24]/40 w-56"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-[#1A1A24]/70 hover:bg-[#1A1A24]/5 rounded-full transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#ff6200] rounded-full border-2 border-[var(--bg-sidebar)] animate-coral-pulse"></span>
            </button>
            <div className="w-9 h-9 rounded-full bg-[#4D148C] flex items-center justify-center cursor-pointer shadow hover:ring-2 hover:ring-[#ff6200] transition-all">
              <UserCircle className="w-5 h-5 text-white" />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
