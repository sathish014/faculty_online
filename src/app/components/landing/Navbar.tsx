"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Search,
  GraduationCap,
  Menu,
  X,
  Sparkles,
} from "lucide-react";

const navLinks = [
  { label: "Find Tutors", href: "#tutors" },
  { label: "Dashboard", href: "/student-dashboard" },
  { label: "Post Requirement", href: "/student-dashboard/post-requirement" },
  { label: "Become a Tutor", href: "/teacher-dashboard" },
  { label: "Resources", href: "#how-it-works" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "backdrop-blur-xl shadow-lg border-b border-indigo-100/60"
          : "border-b border-white/10 backdrop-blur-sm"
          }`}
        style={{
          background: scrolled
            ? "rgba(238, 242, 255, 0.97)"    /* indigo-50 tinted frosted white */
            : "rgba(15, 10, 40, 0.55)",       /* deep indigo-navy glass */
          boxShadow: scrolled
            ? "0 2px 24px rgba(99,102,241,0.10)"
            : "none",
        }}
      >
        <div className="container-xl">
          <div className="flex items-center justify-between h-18 py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg group-hover:shadow-indigo-500/40 transition-shadow duration-300">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                {/* <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full border border-white" /> */}
              </div>
              <div>
                <span
                  className={`font-heading text-lg font-bold transition-colors duration-300 ${scrolled ? "text-indigo-950" : "text-white"
                    }`}
                >
                  Faculties{" "}
                  <span className="gradient-text">Online</span>
                </span>
              </div>
            </Link>

            {/* Center Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group ${scrolled
                    ? "text-indigo-800 hover:text-indigo-600 hover:bg-indigo-50"
                    : "text-white/85 hover:text-white hover:bg-white/10"
                    }`}
                >
                  {link.label}
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-indigo-500 to-violet-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center gap-3">
              {/* <button
                onClick={() => setSearchOpen(!searchOpen)}
                className={`p-2 rounded-lg transition-all duration-300 ${scrolled
                  ? "text-indigo-700 hover:text-indigo-600 hover:bg-indigo-50"
                  : "text-white/85 hover:text-white hover:bg-white/10"
                  }`}
                aria-label="Search"
                id="navbar-search-btn"
              >
                <Search className="w-5 h-5" />
              </button> */}

              <Link
                href="/login"
                id="navbar-login-btn"
                className={`px-5 py-2 text-sm font-semibold rounded-xl border transition-all duration-300 ${scrolled
                  ? "border-indigo-400 text-indigo-700 hover:bg-indigo-50"
                  : "border-white/30 text-white hover:border-white/50 hover:bg-white/10"
                  }`}
              >
                Login
              </Link>

              <Link
                href="/register"
                id="navbar-signup-btn"
                className="px-5 py-2 text-sm font-semibold rounded-xl btn-primary text-white flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Sign Up Free
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              id="navbar-mobile-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled
                ? "text-indigo-800 hover:bg-indigo-50"
                : "text-white hover:bg-white/10"
                }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Search Overlay */}
        {searchOpen && (
          <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-indigo-100 py-4 shadow-xl animate-slide-up">
            <div className="container-xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  autoFocus
                  type="text"
                  placeholder="Search tutors, subjects, or skills..."
                  className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all"
                  id="navbar-search-input"
                />
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-5 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-white" />
                </div>
                <span className="font-heading font-bold text-slate-900">
                  Faculties <span className="gradient-text">Online</span>
                </span>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-1 p-4 flex-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="p-4 border-t border-slate-100 flex flex-col gap-3">
              <Link
                href="/login"
                className="px-5 py-3 text-center text-sm font-semibold rounded-xl border border-indigo-300 text-indigo-600 hover:bg-indigo-50 transition-colors"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="px-5 py-3 text-center text-sm font-semibold rounded-xl btn-primary text-white"
              >
                Sign Up Free
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
