"use client";

import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";
import LearningRoadmapSection from "../components/landing/LearningRoadmapSection";
import NewsletterSection from "../components/landing/NewsletterSection";
import { MapPin } from "lucide-react";

export default function LearningPathPage() {
  return (
    <main className="min-h-screen" style={{ background: "var(--bg-primary)" }}>
      <Navbar />
      <div className="pt-28 pb-4 px-4" style={{ background: "var(--bg-secondary)" }}>
        <div className="container-xl animate-fade-up">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-4 h-4 text-[#ff6200]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff6200]">Learning Paths</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-[#1A1A24] tracking-tight mb-3">
            Your structured <span className="text-[#ff6200]">roadmap</span>
          </h1>
          <p className="text-base text-[rgba(26,26,36,0.65)] max-w-lg">
            Choose a learning path tailored to your goals. Follow the step-by-step curriculum and earn a certificate on completion.
          </p>
        </div>
      </div>

      <LearningRoadmapSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
