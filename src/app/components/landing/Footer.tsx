"use client";

import Link from "next/link";
import Image from "next/image";
import { BookOpen, Globe, Mail, ArrowRight } from "lucide-react";
import { useState } from "react";

const footerLinks = {
  company: [
    { label: "About Us", href: "#" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Careers", href: "#" },
    // { label: "Press & Media", href: "#" },
  ],
  tutors: [
    { label: "Become a Tutor", href: "#" },
    { label: "Premium Membership", href: "#" },
    { label: "Find Tutor Jobs", href: "#" },
    // { label: "Tutor Resources", href: "#" },
  ],
  students: [
    { label: "Find Tutors", href: "/tutor/search" },
    { label: "Post Requirement", href: "/student-dashboard/post-requirement" },
    { label: "All Courses", href: "/courses" },
    { label: "Learning Paths", href: "/learning-path" },
    // { label: "Our Faculty", href: "/faculty" },
  ],
  support: [
    { label: "Contact Us", href: "#" },
    { label: "FAQs", href: "/faq" },
    { label: "Blog", href: "/blog" },
   
   
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
    <footer id="footer" style={{ background: "#4D148C", color: "#ffffff" }}>

      {/* Top divider */}
      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)" }} />


      {/* ── MAIN LINK COLUMNS ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-12 pb-12 gap-2">
        {/* Thin divider */}
        <div style={{ height: "1px", background: "rgba(255,255,255,0.1)", marginBottom: "3rem" }} />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "20px",
                textDecoration: "none",
              }}
            >
              <Image 
                src="/Picture1.png" 
                alt="Faculties Online Logo" 
                width={150} 
                height={40} 
                className="h-10  w-auto object-contain" 
              />
               <span style={{ fontWeight: 700, fontSize: "0.875rem", color: "#ffffff" }}>
                Faculties<span style={{ color: "#ff6200" }}>.</span>
                <span style={{ color: "rgba(255,255,255,0.8)" }}>Online</span>
              </span>
            </Link>
            <p
              style={{
                color: "rgba(255,255,255,0.7)",
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
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "rgba(255,255,255,0.85)",
                    transition: "all 0.2s ease",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#ff6200";
                    e.currentTarget.style.color = "#ff6200";
                    e.currentTarget.style.background = "rgba(255,98,0,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.85)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.08)";
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
                  color: "rgba(255,255,255,0.55)",
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
                        color: "rgba(255,255,255,0.82)",
                        fontSize: "0.875rem",
                        textDecoration: "none",
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#ff6200")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.82)")}
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
      <div style={{ height: "1px", background: "rgba(255,255,255,0.12)" }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-6 pb-24 md:py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.75rem", margin: 0 }}>
          © 2026 Faculties Online. All rights reserved.
        </p>
        <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.75rem", margin: 0 }}>
          Made by{" "}
          <Link
            href="https://digimabble.com/"
            target="_blank"
            style={{ color: "#ff6200", fontWeight: 600, textDecoration: "none" }}
          >
            DIGI MABBLE  
          </Link>
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {["Privacy Policy", "Terms of Use", "Cookie Settings"].map((label) => (
            <Link
              key={label}
              href="#"
              style={{
                color: "rgba(255,255,255,0.65)",
                fontSize: "0.75rem",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#ffffff")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.65)")}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
