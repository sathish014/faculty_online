import Link from "next/link";
import Navbar from "./components/landing/Navbar";
import HeroSection from "./components/landing/HeroSection";
import CategoriesSection from "./components/landing/CategoriesSection";
import FeaturedTutorsSection from "./components/landing/FeaturedTutorsSection";
import PromoBannerSection from "./components/landing/PromoBannerSection";
import TestimonialsSection from "./components/landing/TestimonialsSection";
import Footer from "./components/landing/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden" style={{ background: "var(--bg-primary)" }}>
      <Navbar />

      <HeroSection />

      <CategoriesSection />

      <FeaturedTutorsSection />

      <PromoBannerSection />

      <TestimonialsSection />

      <Footer />

      {/* Mobile sticky CTA */}
      <div
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden px-4 py-3 flex gap-3"
        style={{
          background: "rgba(253, 244, 234, 0.95)",
          backdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(26, 26, 36, 0.08)",
        }}
      >
        <Link
          href="/tutor/search"
          id="mobile-sticky-find-tutor"
          className="flex-1 text-center py-2.5 rounded-lg text-white font-bold text-sm btn-coral"
        >
          Find Tutor
        </Link>
        <Link
          href="/student-dashboard/post-requirement"
          id="mobile-sticky-post-req"
          className="flex-1 text-center py-2.5 rounded-lg text-sm font-bold btn-ghost"
        >
          Post Requirement
        </Link>
      </div>
    </main>
  );
}
