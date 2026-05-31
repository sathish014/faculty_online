"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { GraduationCap, Menu, X, LogOut } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const role = localStorage.getItem("userRole");
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn === "true" && role) {
      setIsLoggedIn(true);
      setUserRole(role);
    }
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    setUserRole(null);
  };

  const navLinks = [
    { label: "Find Tutors", href: "#tutors", show: true },
    {
      label: "Dashboard",
      href: userRole === "tutor" ? "/teacher-dashboard" : "/student-dashboard",
      show: isLoggedIn,
    },
    {
      label: "Post Requirement",
      href: "/student-dashboard/post-requirement",
      show: userRole === "student" || !isLoggedIn,
    },
    { label: "Become a Tutor", href: "/teacher-dashboard", show: !isLoggedIn },
    { label: "Resources", href: "#how-it-works", show: true },
  ].filter((l) => l.show);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300"
        style={{
          borderBottom: "1px solid #e8eaf0",
          boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.07)" : "none",
        }}
      >
        <div className="container-xl">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-sm">
                <GraduationCap className="w-4.5 h-4.5 text-white" style={{ width: "18px", height: "18px" }} />
              </div>
              <span className="font-heading text-base font-bold text-slate-900">
                Faculties{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Online
                </span>
              </span>
            </Link>

            {/* Center Nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-slate-600 hover:text-indigo-600 rounded-lg hover:bg-indigo-50 transition-all duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center gap-2.5">
              {isMounted && isLoggedIn ? (
                <>
                  <Link
                    href={userRole === "tutor" ? "/teacher-dashboard" : "/student-dashboard"}
                    className="px-4 py-2 text-sm font-semibold text-indigo-600 rounded-lg border border-indigo-200 hover:bg-indigo-50 transition-all"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="p-2 rounded-lg border border-slate-200 text-slate-500 hover:text-red-500 hover:border-red-200 hover:bg-red-50 transition-all"
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
                    className="px-5 py-2 text-sm font-semibold text-slate-700 rounded-lg hover:bg-slate-50 transition-all"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    id="navbar-signup-btn"
                    className="px-5 py-2 text-sm font-semibold text-white rounded-lg transition-all hover:-translate-y-0.5"
                    style={{
                      background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
                      boxShadow: "0 4px 12px rgba(79,70,229,0.35)",
                    }}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Toggle */}
            <button
              id="navbar-mobile-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
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
          className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-white shadow-2xl transform transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-5 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-white" />
                </div>
                <span className="font-heading font-bold text-slate-900 text-sm">
                  Faculties{" "}
                  <span className="gradient-text">Online</span>
                </span>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <nav className="flex flex-col gap-1 p-4 flex-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="p-4 border-t border-slate-100 flex flex-col gap-2">
              {isMounted && isLoggedIn ? (
                <>
                  <Link
                    href={userRole === "tutor" ? "/teacher-dashboard" : "/student-dashboard"}
                    className="px-5 py-2.5 text-center text-sm font-semibold rounded-lg text-white"
                    style={{ background: "linear-gradient(135deg, #4f46e5, #7c3aed)" }}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => { handleLogout(); setMobileOpen(false); }}
                    className="px-5 py-2.5 text-center text-sm font-semibold rounded-lg border border-red-200 text-red-600 hover:bg-red-50"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="px-5 py-2.5 text-center text-sm font-semibold rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    className="px-5 py-2.5 text-center text-sm font-semibold rounded-lg text-white"
                    style={{ background: "linear-gradient(135deg, #4f46e5, #7c3aed)" }}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
