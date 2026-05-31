"use client";

import Link from "next/link";
import { Globe, Mail } from "lucide-react";
import { useState } from "react";

const footerLinks = {
  company: [
    { label: "About Us", href: "#" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Careers", href: "#" },
    { label: "Press & Media", href: "#" },
  ],
  tutors: [
    { label: "Become a Tutor", href: "#" },
    { label: "Premium Membership", href: "#" },
    { label: "Find Tutor Jobs", href: "#" },
    { label: "Tutor Resources", href: "#" },
  ],
  students: [
    { label: "Find Tutors", href: "#tutors" },
    { label: "Post Requirement", href: "/student-dashboard/post-requirement" },
    { label: "Explore Skills", href: "#categories" },
    { label: "Learning Resources", href: "#" },
  ],
  support: [
    { label: "Contact Us", href: "#" },
    { label: "FAQs", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer
      id="footer"
      style={{ background: "#161b2e" }} className="pb-7 pt-6"
    >
      {/* ── NEWSLETTER CARD ── */}
      <div className="container-xl pt-14 pb-2">
        <div
          className="relative mt-10 rounded-2xl p-8 md:p-10 mb-8"
          style={{
            background: "linear-gradient(135deg, #4f46e5 0%, #6d28d9 100%)",
          }}
        >
          {/* Subtle decorative circles */}
          <div
            className="absolute -top-12 -right-12 w-48 h-48 rounded-full pointer-events-none"
            style={{ background: "rgba(255,255,255,0.06)" }}
          />
          <div
            className="absolute -bottom-8 right-32 w-32 h-32 rounded-full pointer-events-none"
            style={{ background: "rgba(255,255,255,0.04)" }}
          />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            {/* Left text */}
            <div>
              <h3 className="font-heading font-bold text-white text-2xl md:text-3xl mb-2 leading-snug">
                Stay Ahead with Our Newsletter
              </h3>
              <p className="text-white/65 text-sm leading-relaxed max-w-sm">
                Get expert tutor tips, student resources, and platform updates every week.
              </p>
            </div>

            {/* Right form */}
            <div className="flex-shrink-0 w-full md:w-auto">
              {subscribed ? (
                <div
                  className="flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold"
                  style={{
                    background: "rgba(255,255,255,0.15)",
                    color: "#fff",
                    border: "1px solid rgba(255,255,255,0.3)",
                  }}
                >
                  ✓ Subscribed! Check your inbox.
                </div>
              ) : (
                <form onSubmit={handleSubscribe}>
                  <div className="flex items-stretch gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      id="footer-newsletter-email"
                      className="flex-1 md:w-64 px-4 py-3.5 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all"
                      style={{
                        background: "#fff",
                        border: "none",
                      }}
                      suppressHydrationWarning
                    />
                    <button
                      type="submit"
                      id="footer-newsletter-submit"
                      className="px-6 py-3.5 rounded-xl font-semibold text-slate-800 text-sm whitespace-nowrap transition-all hover:bg-slate-100 active:scale-95"
                      style={{
                        background: "#fff",
                        border: "none",
                      }}
                      suppressHydrationWarning
                    >
                      Subscribe
                    </button>
                  </div>
                  <p className="text-white/45 text-xs mt-2.5">
                    No spam, only valuable learning insights.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN FOOTER LINKS ── */}
      <div className="container-xl py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6">

          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span
                className="font-heading font-bold text-white text-xl"
              >
                Faculties Online
              </span>
            </Link>

            <p className="text-white/45 text-sm leading-relaxed mb-7">
              Connecting passionate learners with expert educators across India.
              Online, offline, and home tuition — all in one platform.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Website"
                id="footer-social-globe"
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 hover:bg-white/15"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="mailto:hello@facultiesonline.com"
                aria-label="Email"
                id="footer-social-email"
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 hover:bg-white/15"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-widest mb-5"
              style={{ color: "rgba(255,255,255,0.9)", letterSpacing: "0.1em" }}
            >
              Company
            </h4>
            <ul className="space-y-3.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.85)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.45)")
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Tutors */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-widest mb-5"
              style={{ color: "rgba(255,255,255,0.9)", letterSpacing: "0.1em" }}
            >
              For Tutors
            </h4>
            <ul className="space-y-3.5">
              {footerLinks.tutors.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.85)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.45)")
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Students */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-widest mb-5"
              style={{ color: "rgba(255,255,255,0.9)", letterSpacing: "0.1em" }}
            >
              For Students
            </h4>
            <ul className="space-y-3.5">
              {footerLinks.students.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.85)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.45)")
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-widest mb-5"
              style={{ color: "rgba(255,255,255,0.9)", letterSpacing: "0.1em" }}
            >
              Support
            </h4>
            <ul className="space-y-3.5">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.85)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.45)")
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="mt-7  mb-7">
        <div className="container-xl py-5 flex flex-col sm:flex-row items-center justify-between gap-3 ">
          <p style={{ color: "rgba(255,255,255,0.3)" }} className="text-xs">
            © 2024 Faculties Online. All rights reserved.
          </p>
          <p style={{ color: "rgba(255,255,255,0.3)" }} className="text-xs">
            Made by <Link href="https://digimabble.com/" target="_blank">DigiMabbel</Link>
          </p>
          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms of Use", "Cookie Settings"].map((label) => (
              <Link
                key={label}
                href="#"
                className="text-xs transition-colors"
                style={{ color: "rgba(255,255,255,0.3)" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.65)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.3)")
                }
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
