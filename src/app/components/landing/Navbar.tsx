"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { GraduationCap, Menu, X, LogOut } from "lucide-react";
import RequestTutorModal from "../ui/RequestTutorModal";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [requestModalOpen, setRequestModalOpen] = useState(false);
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
    const handleScroll = () => setScrolled(window.scrollY > 4);
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
    { label: "Find Tutors", href: "/tutor/search", show: true },
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
    { label: "Find Jobs", href: "/jobs", show: true },
    { label: "Resources", href: "/resources", show: true },
  ].filter((l) => l.show);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-white"
        style={{
          borderBottom: "1px solid #e2e8f0",
          boxShadow: scrolled ? "0 2px 8px rgba(0,0,0,0.08)" : "none",
        }}
      >
        <div className="container-xl">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "#0d9488" }}
              >
                <GraduationCap className="w-4 h-4 text-white" />
              </div>
              <span className="font-heading font-bold text-slate-900 text-base">
                Faculties{" "}
                <span style={{ color: "#0d9488" }}>Online</span>
              </span>
            </Link>

            {/* Center Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.onClick ? (
                  <button
                    key={link.label}
                    onClick={link.onClick}
                    className="px-4 py-2 text-sm font-medium text-slate-700 rounded hover:bg-slate-100 transition-colors"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="px-4 py-2 text-sm font-medium text-slate-700 rounded hover:bg-slate-100 transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center gap-2">
              {isMounted && isLoggedIn ? (
                <>
                  <Link
                    href={userRole === "tutor" ? "/teacher-dashboard" : "/student-dashboard"}
                    className="px-4 py-2 text-sm font-semibold rounded border border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="p-2 rounded text-slate-500 hover:text-red-500 hover:bg-red-50 transition-colors"
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
                    className="px-4 py-2 text-sm font-semibold text-slate-700 rounded hover:bg-slate-100 transition-colors"
                  >
                    Log in
                  </Link>
                  <Link
                    href="/register"
                    id="navbar-signup-btn"
                    className="px-4 py-2 text-sm font-semibold text-white rounded transition-colors"
                    style={{ background: "#0d9488" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#0f766e")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#0d9488")}
                  >
                    Sign up
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Toggle */}
            <button
              id="navbar-mobile-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-200 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/30"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-white shadow-xl transform transition-transform duration-250 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-5 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "#0d9488" }}>
                  <GraduationCap className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="font-heading font-bold text-slate-900 text-sm">
                  Faculties <span style={{ color: "#0d9488" }}>Online</span>
                </span>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-1.5 rounded hover:bg-slate-100 text-slate-500"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <nav className="flex flex-col gap-0.5 p-4 flex-1">
              {navLinks.map((link) =>
                link.onClick ? (
                  <button
                    key={link.label}
                    onClick={() => { setMobileOpen(false); link.onClick(); }}
                    className="px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded text-left transition-colors"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            <div className="p-4 border-t border-slate-100 flex flex-col gap-2">
              {isMounted && isLoggedIn ? (
                <>
                  <Link
                    href={userRole === "tutor" ? "/teacher-dashboard" : "/student-dashboard"}
                    className="px-4 py-2.5 text-center text-sm font-semibold rounded text-white"
                    style={{ background: "#0d9488" }}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => { handleLogout(); setMobileOpen(false); }}
                    className="px-4 py-2.5 text-center text-sm font-semibold rounded border border-red-200 text-red-600 hover:bg-red-50"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="px-4 py-2.5 text-center text-sm font-semibold rounded border border-slate-300 text-slate-700 hover:bg-slate-50"
                  >
                    Log in
                  </Link>
                  <Link
                    href="/register"
                    className="px-4 py-2.5 text-center text-sm font-semibold rounded text-white"
                    style={{ background: "#0d9488" }}
                  >
                    Sign up
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
