"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
  Search,
  BookOpen,
  TrendingUp,
  Heart,
  Award,
  Settings,
  GraduationCap,
} from "lucide-react";

const sidebarLinks = [
  { name: "Dashboard", href: "/student-dashboard", icon: LayoutDashboard },
  { name: "My Courses", href: "/student-dashboard/my-courses", icon: BookOpen },
  { name: "Progress", href: "/student-dashboard/progress", icon: TrendingUp },
  { name: "My Requirements", href: "/student-dashboard/my-requirements", icon: FileText },
  { name: "Post Requirement", href: "/student-dashboard/post-requirement", icon: PlusCircle },
  { name: "Wishlist", href: "/student-dashboard/wishlist", icon: Heart },
  { name: "Certificates", href: "/student-dashboard/certificates", icon: Award },
  { name: "Messages", href: "/student-dashboard/messages", icon: MessageSquare },
  { name: "Wallet", href: "/student-dashboard/wallet", icon: Wallet },
  { name: "Notifications", href: "/student-dashboard/notifications", icon: Bell },
  { name: "Settings", href: "/student-dashboard/settings", icon: Settings },
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
        className={`fixed inset-y-0 left-0 z-50 w-64 border-r border-[#1A1A24]/10 transform transition-transform duration-300 lg:translate-x-0 lg:static lg:inset-0 flex flex-col ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ background: "var(--bg-sidebar)" }}
      >
        <div className="h-16 flex items-center px-6 border-b border-[#1A1A24]/10 flex-shrink-0">
          <Link href="/" className="flex items-center gap-[12px] group">
            <Image 
              src="/Picture1.png" 
              alt="Faculties Online Logo" 
              width={140} 
              height={36} 
              className="h-8 w-auto object-contain transition-transform group-hover:scale-105" 
            />
            <span className="text-lg font-extrabold text-[#1A1A24] tracking-tight">
              Faculties<span className="text-[#ff6200]">.</span><span className="font-normal text-[#1A1A24]/70">Online</span>
            </span>
          </Link>
        </div>

        {/* User info */}
        <div className="px-4 py-4 border-b border-[#1A1A24]/08">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#4D148C] flex items-center justify-center shadow flex-shrink-0">
              <UserCircle className="w-5 h-5 text-white" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-bold text-[#1A1A24] truncate">Student</p>
              <p className="text-[11px] text-[rgba(26,26,36,0.5)] truncate">student@example.com</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto custom-scrollbar">
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  isActive
                    ? "bg-[#4D148C] text-white shadow-md shadow-[#4D148C]/20"
                    : "text-[#1A1A24]/70 hover:bg-[#1A1A24]/5 hover:text-[#1A1A24]"
                }`}
                onClick={() => setSidebarOpen(false)}
              >
                <link.icon className={`w-4.5 h-4.5 flex-shrink-0 ${isActive ? "text-[#ff6200]" : "text-[#1A1A24]/50"}`} style={{ width: 18, height: 18 }} />
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Bottom switch */}
        <div className="p-4 border-t border-[#1A1A24]/10 flex-shrink-0">
          <Link
            href="/teacher-dashboard"
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-[#ff6200]/30 bg-[#ff6200]/10 text-[#ff6200] font-bold text-sm hover:bg-[#ff6200] hover:text-white transition-all duration-200"
          >
            <UserCircle className="w-4 h-4" />
            Switch to Tutor
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-x-hidden">
        {/* Header */}
        <header 
          className="h-16 border-b border-[#1A1A24]/10 flex items-center justify-between px-4 sm:px-6 z-30 sticky top-0 backdrop-blur-md"
          style={{ background: "rgba(255, 255, 255, 0.95)" }}
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
          <div className="flex items-center gap-3">
            <Link
              href="/student-dashboard/notifications"
              className="relative p-2 text-[#1A1A24]/70 hover:bg-[#1A1A24]/5 rounded-full transition-colors"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#ff6200] rounded-full border-2 border-[var(--bg-sidebar)] animate-coral-pulse" />
            </Link>
            <Link
              href="/student-dashboard/settings"
              className="w-9 h-9 rounded-full bg-[#4D148C] flex items-center justify-center cursor-pointer shadow hover:ring-2 hover:ring-[#ff6200] transition-all"
            >
              <UserCircle className="w-5 h-5 text-white" />
            </Link>
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
