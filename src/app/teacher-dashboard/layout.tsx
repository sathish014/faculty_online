"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Briefcase, 
  MessageSquare, 
  Wallet,
  Star,
  User,
  Menu,
  Bell,
  Search,
  Zap,
  GraduationCap,
  X
} from "lucide-react";

const sidebarLinks = [
  { name: "Dashboard", href: "/teacher-dashboard", icon: LayoutDashboard },
  { name: "My Jobs", href: "/teacher-dashboard/my-jobs", icon: Briefcase },
  { name: "Messages", href: "/teacher-dashboard/messages", icon: MessageSquare },
  { name: "Wallet", href: "/teacher-dashboard/wallet", icon: Wallet },
  { name: "Reviews", href: "/teacher-dashboard/reviews", icon: Star },
  { name: "My Profile", href: "/teacher-dashboard/profile", icon: User },
];

export default function TeacherDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showPremiumBanner, setShowPremiumBanner] = useState(true);
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
              src="/logo.png" 
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

        {/* Bottom actions (Go Premium & Switch to Student) */}
        <div className="p-4 border-t border-[#1A1A24]/10 space-y-3 flex-shrink-0">
          {/* Go Premium Banner */}
          {showPremiumBanner && (
            <div 
              className="rounded-2xl p-4 text-white relative overflow-hidden shadow-lg shadow-[#ff6200]/20"
              style={{ background: "linear-gradient(135deg, #ff6200 0%, #d94e00 100%)" }}
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-white/20 rounded-full blur-xl -mr-4 -mt-4"></div>
              <button 
                onClick={() => setShowPremiumBanner(false)}
                className="absolute top-2 right-2 text-white/70 hover:text-white transition-colors z-20"
                aria-label="Close premium banner"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="relative z-10 flex flex-col gap-2">
                <div className="flex items-center gap-2 font-black text-sm pr-4">
                  <Zap className="w-4 h-4 flex-shrink-0" />
                  Go Premium
                </div>
                <p className="text-xs text-white/90 leading-tight font-medium">Get 3x more student leads and priority listing.</p>
                <Link href="/pricing" className="mt-1 bg-[#1A1A24] text-white py-1.5 px-3 rounded-xl text-xs font-bold w-full hover:bg-[#2a2a38] transition-colors shadow-sm text-center flex items-center justify-center">
                  Upgrade Now
                </Link>
              </div>
            </div>
          )}

          <Link href="/student-dashboard" className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-[#1A1A24]/15 bg-white/80 text-[#1A1A24] font-bold text-sm hover:bg-white hover:border-[#ff6200] transition-all">
            <User className="w-4 h-4 text-[#ff6200]" />
            Switch to Student
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
                placeholder="Search jobs, students..."
                className="bg-transparent border-none focus:outline-none text-sm font-medium text-[#1A1A24] placeholder:text-[#1A1A24]/40 w-56"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-[#1A1A24]/70 hover:bg-[#1A1A24]/5 rounded-full transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#ff6200] rounded-full border-2 border-[var(--bg-sidebar)] animate-coral-pulse"></span>
            </button>
            <Link href="/teacher-dashboard/profile" className="w-9 h-9 rounded-full bg-[#4D148C] flex items-center justify-center cursor-pointer hover:ring-2 hover:ring-[#ff6200] transition-all shadow">
              <span className="text-[#ff6200] text-sm font-black">T</span>
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
