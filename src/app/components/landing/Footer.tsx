"use client";

import Link from "next/link";
import {
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Send,
  Heart,
} from "lucide-react";
import {
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa6";
import { useState } from "react";

const footerLinks = {
  company: [
    { label: "About Us", href: "#" },
    { label: "How it Works", href: "#how-it-works" },
    { label: "Careers", href: "#" },
    { label: "Press & Media", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact Us", href: "#" },
  ],
  tutors: [
    { label: "Become a Tutor", href: "#become-tutor" },
    { label: "Premium Membership", href: "#pricing" },
    { label: "Tutor Dashboard", href: "#tutor-dashboard" },
    { label: "Find Tutor Jobs", href: "#" },
    { label: "Tutor Resources", href: "#" },
    { label: "Tutor Success Stories", href: "#" },
  ],
  students: [
    { label: "Find Tutors", href: "#tutors" },
    { label: "Post Requirement", href: "#post-requirement" },
    { label: "Explore Skills", href: "#categories" },
    { label: "Student Dashboard", href: "#student-dashboard" },
    { label: "Learning Resources", href: "#" },
    { label: "Student Reviews", href: "#testimonials" },
  ],
};

const socialLinks = [
  { icon: FaXTwitter, label: "Twitter", href: "#" },
  { icon: FaLinkedinIn, label: "LinkedIn", href: "#" },
  { icon: FaInstagram, label: "Instagram", href: "#" },
  { icon: FaYoutube, label: "YouTube", href: "#" },
  { icon: FaFacebook, label: "Facebook", href: "#" },
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
    <footer id="footer" className="relative overflow-hidden" style={{ background: "#060c1f" }}>
      {/* Gradient top border */}
      <div className="h-px bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500" />

      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-violet-900/20 rounded-full blur-3xl" />
      </div>

      {/* Newsletter Banner */}
      <div className="relative border-b border-white/5 py-12">
        <div className="container-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-heading font-bold text-white text-2xl mb-1.5">
                Stay Ahead with Our{" "}
                <span className="bg-gradient-to-r from-indigo-300 to-violet-300 bg-clip-text text-transparent">
                  Newsletter
                </span>
              </h3>
              <p className="text-white/50 text-sm">
                Get tutor tips, student resources, and platform updates every week.
              </p>
            </div>
            <form
              onSubmit={handleSubscribe}
              className="flex items-center gap-2 w-full md:w-auto"
            >
              {subscribed ? (
                <div className="flex items-center gap-2 px-6 py-3 rounded-xl bg-green-500/20 border border-green-500/30 text-green-300 text-sm font-semibold">
                  ✓ Subscribed! Check your inbox.
                </div>
              ) : (
                <>
                  <div className="relative flex-1 md:w-72">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-indigo-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      id="footer-newsletter-email"
                      className="w-full pl-10 pr-4 py-3.5 input-premium rounded-xl text-sm"
                      suppressHydrationWarning
                    />
                  </div>
                  <button
                    type="submit"
                    id="footer-newsletter-submit"
                    className="btn-primary flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-white text-sm whitespace-nowrap"
                    suppressHydrationWarning
                  >
                    <Send className="w-4 h-4" />
                    Subscribe
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative py-14">
        <div className="container-xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
            {/* Brand Column */}
            <div className="col-span-2 md:col-span-3 lg:col-span-1">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2.5 mb-5 group">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <span className="font-heading font-bold text-white text-lg">
                  Faculties{" "}
                  <span className="bg-gradient-to-r from-indigo-300 to-violet-300 bg-clip-text text-transparent">
                    Online
                  </span>
                </span>
              </Link>

              <p className="text-white/45 text-sm leading-relaxed mb-6">
                Connecting passionate learners with expert educators across India. Online, offline, and home tuition — all in one platform.
              </p>

              {/* Contact */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2.5 text-white/50 text-sm">
                  <Mail className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                  <span>hello@facultiesonline.com</span>
                </div>
                <div className="flex items-center gap-2.5 text-white/50 text-sm">
                  <Phone className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-2.5 text-white/50 text-sm">
                  <MapPin className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                  <span>Bangalore, India</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-2.5">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    id={`footer-social-${social.label.toLowerCase()}`}
                    className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-indigo-600/40 hover:border-indigo-500/40 transition-all duration-300"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-5">
                Company
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/45 text-sm hover:text-white transition-colors flex items-center gap-1.5 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-indigo-400" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tutor Links */}
            <div>
              <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-5">
                For Tutors
              </h4>
              <ul className="space-y-3">
                {footerLinks.tutors.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/45 text-sm hover:text-white transition-colors flex items-center gap-1.5 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-indigo-400" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Student Links */}
            <div>
              <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-5">
                For Students
              </h4>
              <ul className="space-y-3">
                {footerLinks.students.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/45 text-sm hover:text-white transition-colors flex items-center gap-1.5 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-indigo-400" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/5 py-6">
        <div className="container-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © 2026 Faculties Online. All rights reserved.
          </p>

          <div className="flex items-center gap-1 text-white/30 text-sm">
            Made with{" "}
            <Link href="https://digimabble.com" target="_blank" rel="noopener noreferrer">
              DigiMabble
            </Link>
          </div>

          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((label) => (
              <Link
                key={label}
                href="#"
                className="text-white/30 text-xs hover:text-white/70 transition-colors"
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
