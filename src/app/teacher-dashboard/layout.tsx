"use client";

import React, { useState } from "react";
import Link from "next/link";
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
    <div className="min-h-screen bg-slate-50 flex">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-slate-900/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 transform transition-transform duration-300 lg:translate-x-0 lg:static lg:inset-0 flex flex-col ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="h-16 flex items-center px-6 border-b border-slate-100 flex-shrink-0">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
              <GraduationCap className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-900 to-indigo-600">
              Faculties Online
            </span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium transition-colors ${
                  isActive
                    ? "bg-indigo-50 text-indigo-700"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
                onClick={() => setSidebarOpen(false)}
              >
                <link.icon className={`w-5 h-5 ${isActive ? "text-indigo-600" : "text-slate-400"}`} />
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Bottom actions (Go Premium & Switch to Student) */}
        <div className="p-4 border-t border-slate-100 space-y-3 flex-shrink-0">
          {/* Go Premium Banner */}
          {showPremiumBanner && (
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-4 text-white relative overflow-hidden shadow-lg shadow-orange-500/20">
              <div className="absolute top-0 right-0 w-16 h-16 bg-white/20 rounded-full blur-xl -mr-4 -mt-4"></div>
              <button 
                onClick={() => setShowPremiumBanner(false)}
                className="absolute top-2 right-2 text-white/70 hover:text-white transition-colors z-20"
                aria-label="Close premium banner"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="relative z-10 flex flex-col gap-2">
                <div className="flex items-center gap-2 font-bold text-sm pr-4">
                  <Zap className="w-4 h-4 flex-shrink-0" />
                  Go Premium
                </div>
                <p className="text-xs text-white/90 leading-tight">Get 3x more student leads and priority listing.</p>
                <Link href="/pricing" className="mt-1 bg-white text-orange-600 py-1.5 px-3 rounded-lg text-xs font-bold w-full hover:bg-orange-50 transition-colors shadow-sm text-center flex items-center justify-center inline-block">
                  Upgrade Now
                </Link>
              </div>
            </div>
          )}

          <Link href="/student-dashboard" className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-colors">
            <User className="w-4 h-4" />
            Switch to Student
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-6 z-30 sticky top-0">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 -ml-2 text-slate-500 hover:bg-slate-100 rounded-lg lg:hidden"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="hidden sm:flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 focus-within:border-indigo-300 focus-within:ring-1 focus-within:ring-indigo-300 transition-all">
              <Search className="w-4 h-4 text-slate-400" />
              <input 
                type="text"
                placeholder="Search jobs, students..."
                className="bg-transparent border-none focus:outline-none text-sm text-slate-700 w-48"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <Link href="/teacher-dashboard/profile" className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center cursor-pointer hover:ring-2 hover:ring-indigo-200 transition-all shadow-sm">
              <span className="text-white text-xs font-bold">T</span>
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
