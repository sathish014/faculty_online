"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { BookOpen, Menu, X, LogOut, ArrowRight, ChevronDown, GraduationCap, Code, FileText, Calendar, HelpCircle } from "lucide-react";
import RequestTutorModal from "../ui/RequestTutorModal";

const megaMenus = {
  Courses: [
    { label: "All Courses", href: "/courses", icon: BookOpen, desc: "Browse 500+ courses" },
    { label: "Web Development", href: "/courses?category=web", icon: Code, desc: "HTML, CSS, React, Next.js" },
    { label: "Data Science", href: "/courses?category=ds", icon: GraduationCap, desc: "Python, ML, AI" },
    { label: "JEE & NEET Prep", href: "/courses?category=exam", icon: GraduationCap, desc: "Expert exam coaching" },
  ],
  Resources: [
    { label: "Study Materials", href: "/resources", icon: FileText, desc: "PDFs, notes, e-books" },
    { label: "Practice Tests", href: "/resources?type=tests", icon: FileText, desc: "Mock exams & quizzes" },
    { label: "Blog & Articles", href: "/blog", icon: FileText, desc: "Tips & study guides" },
    { label: "Events", href: "/events", icon: Calendar, desc: "Webinars & workshops" },
  ],
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [requestModalOpen, setRequestModalOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    setIsMounted(true);
    const role = localStorage.getItem("userRole");
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn === "true" && role) {
      setIsLoggedIn(true);
      setUserRole(role);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    setUserRole(null);
  };

  const navLinks = [
    { label: "Find Tutors", href: "/tutor/search", show: true },
    { label: "Courses", href: "/courses", show: true, hasMega: "Courses" },
    { label: "Faculty", href: "/faculty", show: true },
    { label: "Resources", href: "/resources", show: true, hasMega: "Resources" },
    { label: "Find Jobs", href: "/jobs", show: true },
    { label: "Events", href: "/events", show: true },
    {
      label: "Dashboard",
      href: userRole === "tutor" ? "/teacher-dashboard" : "/student-dashboard",
      show: isLoggedIn,
    },
    {
      label: "Request a Tutor",
      href: "#",
      onClick: () => setRequestModalOpen(true),
      show: !isLoggedIn,
    },
  ].filter((l) => l.show);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 navbar-blur border-b border-white/15"
        style={{ background: "#4D148C" }}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="container-xl">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
              <div className="w-8 h-8 flex items-center justify-center relative border border-white/30 rounded-md">
                <BookOpen className="w-4 h-4 text-[#ff6200]" />
              </div>
              <span className="text-[15px] font-bold tracking-tight text-[#FFFFFF]">
                Faculties
                <span className="text-[#ff6200]">.</span>
                <span className="text-white/75 font-normal">Online</span>
              </span>
            </Link>

            {/* Center Nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => {
                const hasMega = (link as { hasMega?: string }).hasMega;
                return link.onClick ? (
                  <button
                    key={link.label}
                    onClick={link.onClick}
                    className="px-3.5 py-2 text-sm font-medium rounded-md transition-all duration-200 text-white/80 hover:text-white hover:bg-white/10"
                  >
                    {link.label}
                  </button>
                ) : hasMega ? (
                  <div key={link.label} className="relative">
                    <button
                      className="px-3.5 py-2 text-sm font-medium rounded-md transition-all duration-200 text-white/80 hover:text-white hover:bg-white/10 flex items-center gap-1"
                      onMouseEnter={() => setActiveMenu(hasMega)}
                    >
                      {link.label}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeMenu === hasMega ? "rotate-180" : ""}`} />
                    </button>
                    {/* Mega menu dropdown */}
                    {activeMenu === hasMega && (
                      <div
                        className="absolute top-full left-0 mt-1 w-72 rounded-xl p-2 shadow-2xl animate-fade-down"
                        style={{
                          background: "var(--bg-sidebar)",
                          border: "1px solid rgba(26,26,36,0.1)",
                          boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
                        }}
                        onMouseEnter={() => setActiveMenu(hasMega)}
                        onMouseLeave={() => setActiveMenu(null)}
                      >
                        {megaMenus[hasMega as keyof typeof megaMenus].map((item) => {
                          const Icon = item.icon;
                          return (
                            <Link
                              key={item.label}
                              href={item.href}
                              className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[rgba(255,98,0,0.06)] transition-colors group"
                              onClick={() => setActiveMenu(null)}
                            >
                              <div
                                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                                style={{ background: "rgba(255,98,0,0.1)", border: "1px solid rgba(255,98,0,0.15)" }}
                              >
                                <Icon className="w-4 h-4 text-[#ff6200]" />
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-[#1A1A24] group-hover:text-[#ff6200] transition-colors">
                                  {item.label}
                                </p>
                                <p className="text-[11px] text-[rgba(26,26,36,0.5)]">{item.desc}</p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="px-3.5 py-2 text-sm font-medium rounded-md transition-all duration-200 text-white/80 hover:text-white hover:bg-white/10"
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center gap-3">
              {isMounted && isLoggedIn ? (
                <>
                  <Link
                    href={userRole === "tutor" ? "/teacher-dashboard" : "/student-dashboard"}
                    className="px-4 py-2 text-sm font-semibold rounded-md text-white border border-white/25 hover:bg-white/10 transition-all"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="p-2 rounded-md transition-all text-white/80 hover:text-white border border-white/20 hover:bg-white/10"
                    title="Logout"
                  >
                    <LogOut className="w-4 h-4" />
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    id="navbar-login-btn"
                    className="px-4 py-2 text-sm font-semibold rounded-md text-white border border-white/25 hover:bg-white/10 transition-all"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    id="navbar-signup-btn"
                    className="px-5 py-2 text-sm font-bold btn-coral rounded-md flex items-center gap-2"
                  >
                    Get Started
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Toggle */}
            <button
              id="navbar-mobile-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-md transition-colors text-white/90 border border-white/20 hover:bg-white/10"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0"
          style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)" }}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-72 transform transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          } overflow-y-auto`}
          style={{
            background: "#4D148C",
            borderLeft: "1px solid rgba(255,255,255,0.15)",
            color: "#FFFFFF",
          }}
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-white/15">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 flex items-center justify-center border border-white/30 rounded-[5px]">
                  <BookOpen className="w-3.5 h-3.5 text-[#ff6200]" />
                </div>
                <span className="font-bold text-sm text-[#FFFFFF]">
                  Faculties<span className="text-[#ff6200]">.</span>
                  <span className="text-white/75 font-normal">Online</span>
                </span>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-1.5 rounded-md text-white/70 hover:text-white hover:bg-white/10"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex flex-col gap-1 p-4 flex-1">
              {[
                { label: "Find Tutors", href: "/tutor/search" },
                { label: "All Courses", href: "/courses" },
                { label: "Faculty", href: "/faculty" },
                { label: "Resources", href: "/resources" },
                { label: "Blog", href: "/blog" },
                { label: "Events", href: "/events" },
                { label: "Find Jobs", href: "/jobs" },
                { label: "FAQ", href: "/faq" },
                { label: "Learning Paths", href: "/learning-path" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-2.5 text-sm font-medium rounded-md transition-colors text-white/85 hover:text-white hover:bg-white/10"
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={() => { setMobileOpen(false); setRequestModalOpen(true); }}
                className="px-4 py-2.5 text-sm font-medium text-left rounded-md transition-colors text-white/85 hover:text-white hover:bg-white/10"
              >
                Request a Tutor
              </button>
            </nav>

            {/* Bottom CTA */}
            <div className="p-4 flex flex-col gap-2 border-t border-white/15">
              {isMounted && isLoggedIn ? (
                <>
                  <Link
                    href={userRole === "tutor" ? "/teacher-dashboard" : "/student-dashboard"}
                    className="px-5 py-2.5 text-center text-sm font-bold btn-coral rounded-md"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => { handleLogout(); setMobileOpen(false); }}
                    className="px-5 py-2.5 text-center text-sm font-semibold rounded-md text-white border border-white/25 hover:bg-white/10"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/register"
                    className="px-5 py-2.5 text-center text-sm font-bold btn-coral rounded-md"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="/login"
                    className="px-5 py-2.5 text-center text-sm font-semibold rounded-md text-white border border-white/25 hover:bg-white/10"
                  >
                    Login
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <RequestTutorModal
        isOpen={requestModalOpen}
        onClose={() => setRequestModalOpen(false)}
      />
    </>
  );
}
