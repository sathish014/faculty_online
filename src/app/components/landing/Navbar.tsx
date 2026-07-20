"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
    { label: "Courses", href: "/courses", show: true },
    { label: "Faculty", href: "/faculty", show: true },
    { label: "Find Jobs", href: "/jobs", show: true },
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
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white border-b border-[rgba(0,0,0,0.08)] shadow-sm"
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="container-xl">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
              <Image 
                src="/Picture1.png" 
                alt="Faculties Online Logo" 
                width={40} 
                height={40} 
                className="h-9 w-9 object-contain" 
                priority 
              />
              <span className="text-[17px] font-bold tracking-tight text-[#1A1A24]">
                Faculties
                <span className="text-[#ff6200]">.</span>
                <span className="text-[#1A1A24]/70 font-normal">Online</span>
              </span>
            </Link>

            {/* Center Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const hasMega = (link as { hasMega?: string }).hasMega;
                return link.onClick ? (
                  <button
                    key={link.label}
                    onClick={link.onClick}
                    className="px-3.5 py-2 text-[14px] font-semibold rounded-md transition-all duration-200 text-[#1A1A24]/75 hover:text-[#1A1A24] hover:bg-[#1A1A24]/5"
                  >
                    {link.label}
                  </button>
                ) : hasMega ? (
                  <div key={link.label} className="relative">
                    <Link
                      href={link.href}
                      className="px-3.5 py-2 text-[14px] font-semibold rounded-md transition-all duration-200 text-[#1A1A24]/75 hover:text-[#1A1A24] hover:bg-[#1A1A24]/5 flex items-center gap-1"
                      onMouseEnter={() => setActiveMenu(hasMega)}
                    >
                      {link.label}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeMenu === hasMega ? "rotate-180" : ""}`} />
                    </Link>
                    {/* Mega menu dropdown */}
                    {activeMenu === hasMega && (
                      <div
                        className="absolute top-full left-0 mt-2 w-72 rounded-xl p-2 shadow-2xl animate-fade-down"
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid rgba(0,0,0,0.06)",
                          boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
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
                                <p className="text-[11px] text-[#1A1A24]/50">{item.desc}</p>
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
                    className="px-3.5 py-2 text-[14px] font-semibold rounded-md transition-all duration-200 text-[#1A1A24]/75 hover:text-[#1A1A24] hover:bg-[#1A1A24]/5"
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
                    className="px-4 py-2 text-sm font-semibold rounded-md text-[#1A1A24] border border-[rgba(0,0,0,0.1)] hover:bg-[#1A1A24]/5 transition-all"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="p-2 rounded-md transition-all text-[#1A1A24]/70 hover:text-[#1A1A24] border border-[rgba(0,0,0,0.1)] hover:bg-[#1A1A24]/5"
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
                    className="px-4 py-2 text-sm font-semibold rounded-md text-[#1A1A24] border border-[rgba(0,0,0,0.1)] hover:bg-[#1A1A24]/5 transition-all"
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
              className="lg:hidden p-2 rounded-md transition-colors text-[#1A1A24]/80 border border-[rgba(0,0,0,0.1)] hover:bg-[#1A1A24]/5"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-[100] lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none invisible"
        }`}
      >
        <div
          className="absolute inset-0"
          style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(4px)" }}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-auto max-h-[100vh] w-[80vw] max-w-[320px] rounded-bl-3xl shadow-2xl transform transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          } overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]`}
          style={{
            background: "#FFFFFF",
            borderLeft: "1px solid rgba(0,0,0,0.05)",
            borderBottom: "1px solid rgba(0,0,0,0.05)",
            color: "#1A1A24",
          }}
        >
          <div className="flex flex-col pb-5">
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-[rgba(0,0,0,0.05)]">
              <div className="flex items-center gap-2.5">
                <Image 
                  src="/Picture1.png" 
                  alt="Faculties Online Logo" 
                  width={36} 
                  height={36} 
                  className="h-8 w-8 object-contain" 
                  priority 
                />
                <span className="font-bold text-[15px] text-[#1A1A24]">
                  Faculties<span className="text-[#ff6200]">.</span>
                  <span className="text-[#1A1A24]/70 font-normal">Online</span>
                </span>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-1.5 rounded-md text-[#1A1A24]/60 hover:text-[#1A1A24] hover:bg-[#1A1A24]/5"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Nav Links & CTA Buttons */}
            <nav className="flex flex-col gap-1 p-4">
              {[
                { label: "Find Tutors", href: "/tutor/search" },
                { label: "Courses", href: "/courses" },
                { label: "Faculty", href: "/faculty" },
                { label: "Blog", href: "/blog" },
                { label: "Find Jobs", href: "/jobs" },
                { label: "FAQ", href: "/faq" },
                { label: "Learning Paths", href: "/learning-path" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-2.5 text-sm font-semibold rounded-md transition-colors text-[#1A1A24]/80 hover:text-[#1A1A24] hover:bg-[#1A1A24]/5"
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={() => { setMobileOpen(false); setRequestModalOpen(true); }}
                className="px-4 py-2.5 text-sm font-semibold text-left rounded-md transition-colors text-[#1A1A24]/80 hover:text-[#1A1A24] hover:bg-[#1A1A24]/5 cursor-pointer"
              >
                Request a Tutor
              </button>

              {/* Action Buttons immediately below completed nav menu */}
              <div className="flex flex-col gap-2.5 mt-3 pt-4 border-t border-[rgba(0,0,0,0.05)]">
                {isMounted && isLoggedIn ? (
                  <>
                    <Link
                      href={userRole === "tutor" ? "/teacher-dashboard" : "/student-dashboard"}
                      onClick={() => setMobileOpen(false)}
                      className="px-5 py-2.5 text-center text-sm font-bold btn-coral rounded-md block shadow-md"
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={() => { handleLogout(); setMobileOpen(false); }}
                      className="px-5 py-2.5 text-center text-sm font-semibold rounded-md text-[#1A1A24] border border-[rgba(0,0,0,0.1)] hover:bg-[#1A1A24]/5 w-full cursor-pointer"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/register"
                      onClick={() => setMobileOpen(false)}
                      className="px-5 py-2.5 text-center text-sm font-bold btn-coral rounded-md block shadow-md"
                    >
                      Get Started
                    </Link>
                    <Link
                      href="/login"
                      onClick={() => setMobileOpen(false)}
                      className="px-5 py-2.5 text-center text-sm font-semibold rounded-md text-[#1A1A24] border border-[rgba(0,0,0,0.1)] hover:bg-[#1A1A24]/5 block cursor-pointer"
                    >
                      Login
                    </Link>
                  </>
                )}
              </div>
            </nav>
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
