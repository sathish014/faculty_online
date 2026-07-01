"use client";

import Link from "next/link";
import { BookOpen, Globe, Mail, ArrowRight } from "lucide-react";
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

const linkCols = [
  { title: "Company", links: footerLinks.company },
  { title: "For Tutors", links: footerLinks.tutors },
  { title: "For Students", links: footerLinks.students },
  { title: "Support", links: footerLinks.support },
];

const socialLinks = [
  { icon: Globe, label: "Website", id: "footer-social-globe", href: "#" },
  { icon: Mail, label: "Email", id: "footer-social-email", href: "mailto:hello@facultiesonline.com" },
];

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
    <footer id="footer" style={{ background: "var(--bg-secondary)" }}>

      {/* Top divider */}
      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(26,26,36,0.12), transparent)" }} />

      {/* ── NEWSLETTER STRIP ── */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "3rem 2rem" }}>
        <div
          style={{
            background: "var(--bg-sidebar)",
            border: "1px solid rgba(26,26,36,0.08)",
            borderRadius: "16px",
            padding: "2.5rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.5rem",
          }}
        >
          <div>
            <h3 style={{ color: "#1A1A24", fontWeight: 700, fontSize: "1.125rem", margin: "0 0 4px 0" }}>
              Stay sharp.
            </h3>
            <p style={{ color: "rgba(26,26,36,0.55)", fontSize: "0.875rem", margin: 0 }}>
              Tutor tips, student resources & platform updates — weekly.
            </p>
          </div>

          <div style={{ flexShrink: 0 }}>
            {subscribed ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 20px",
                  borderRadius: "12px",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  background: "rgba(255,98,0,0.1)",
                  border: "1px solid rgba(255,98,0,0.3)",
                  color: "#ff6200",
                }}
              >
                ✓ Subscribed! Check your inbox.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: "flex", gap: "8px" }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  id="footer-newsletter-email"
                  suppressHydrationWarning
                  style={{
                    background: "rgba(26,26,36,0.05)",
                    border: "1px solid rgba(26,26,36,0.15)",
                    color: "#1A1A24",
                    borderRadius: "12px",
                    padding: "10px 16px",
                    fontSize: "0.875rem",
                    width: "220px",
                    outline: "none",
                  }}
                />
                <button
                  type="submit"
                  id="footer-newsletter-submit"
                  suppressHydrationWarning
                  style={{
                    background: "#ff6200",
                    color: "#FFFFFF",
                    fontWeight: 700,
                    borderRadius: "12px",
                    padding: "10px 20px",
                    fontSize: "0.875rem",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    whiteSpace: "nowrap",
                  }}
                >
                  Subscribe
                  <ArrowRight style={{ width: "14px", height: "14px" }} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* ── MAIN LINK COLUMNS ── */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem 3rem" }}>
        {/* Thin divider */}
        <div style={{ height: "1px", background: "rgba(26,26,36,0.07)", marginBottom: "3rem" }} />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "20px",
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  width: "28px",
                  height: "28px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(255,107,53,0.4)",
                  borderRadius: "5px",
                }}
              >
                <BookOpen style={{ width: "14px", height: "14px", color: "#ff6200" }} />
              </div>
              <span style={{ fontWeight: 700, fontSize: "0.875rem", color: "#1A1A24" }}>
                Faculties<span style={{ color: "#ff6200" }}>.</span>
                <span style={{ color: "rgba(26,26,36,0.6)" }}>Online</span>
              </span>
            </Link>
            <p
              style={{
                color: "rgba(26,26,36,0.5)",
                fontSize: "0.875rem",
                lineHeight: 1.7,
                marginBottom: "24px",
              }}
            >
              Connecting learners with expert educators across India. Online, offline, and home tuition.
            </p>
            <div style={{ display: "flex", gap: "8px" }}>
              {socialLinks.map(({ icon: Icon, label, id, href }) => (
                <a
                  key={id}
                  href={href}
                  aria-label={label}
                  id={id}
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(26,26,36,0.05)",
                    border: "1px solid rgba(26,26,36,0.1)",
                    color: "rgba(26,26,36,0.5)",
                    transition: "all 0.2s ease",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,98,0,0.4)";
                    e.currentTarget.style.color = "#ff6200";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(26,26,36,0.1)";
                    e.currentTarget.style.color = "rgba(26,26,36,0.5)";
                  }}
                >
                  <Icon style={{ width: "14px", height: "14px" }} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {linkCols.map(({ title, links }) => (
            <div key={title}>
              <h4
                style={{
                  color: "rgba(26,26,36,0.4)",
                  fontSize: "10px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  marginBottom: "20px",
                }}
              >
                {title}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      style={{
                        color: "rgba(26,26,36,0.65)",
                        fontSize: "0.875rem",
                        textDecoration: "none",
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#1A1A24")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(26,26,36,0.65)")}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div style={{ height: "1px", background: "rgba(26,26,36,0.07)" }} />
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "20px 2rem",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
        }}
      >
        <p style={{ color: "rgba(26,26,36,0.45)", fontSize: "0.75rem", margin: 0 }}>
          © 2024 Faculties Online. All rights reserved.
        </p>
        <p style={{ color: "rgba(26,26,36,0.45)", fontSize: "0.75rem", margin: 0 }}>
          Made by{" "}
          <Link
            href="https://digimabble.com/"
            target="_blank"
            style={{ color: "rgba(255,107,53,0.8)", textDecoration: "none" }}
          >
            DigiMabbel
          </Link>
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          {["Privacy Policy", "Terms of Use", "Cookie Settings"].map((label) => (
            <Link
              key={label}
              href="#"
              style={{
                color: "rgba(26,26,36,0.45)",
                fontSize: "0.75rem",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#1A1A24")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(26,26,36,0.45)")}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
