"use client";

import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";
import FAQSection from "../components/landing/FAQSection";
import NewsletterSection from "../components/landing/NewsletterSection";
import { HelpCircle } from "lucide-react";

export default function FAQPage() {
  return (
    <main className="min-h-screen" style={{ background: "var(--bg-primary)" }}>
      <Navbar />
      <div className="pt-28 pb-4 px-4" style={{ background: "#f7f8fc" }}>
        <div className="container-xl animate-fade-up">
          <div className="flex items-center gap-2 mb-4">
            <HelpCircle className="w-4 h-4 text-[#ff6200]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff6200]">FAQ</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-[#1A1A24] tracking-tight mb-3">
            Help <span className="text-[#ff6200]">Center</span>
          </h1>
          <p className="text-base text-[rgba(26,26,36,0.65)] max-w-lg">
            Find answers to frequently asked questions about tutors, students, payments, and platform features.
          </p>
        </div>
      </div>

      <FAQSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
