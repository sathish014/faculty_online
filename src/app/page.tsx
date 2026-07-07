import Link from "next/link";
import Navbar from "./components/landing/Navbar";
import HeroSection from "./components/landing/HeroSection";
import CategoriesSection from "./components/landing/CategoriesSection";
import FeaturedTutorsSection from "./components/landing/FeaturedTutorsSection";
import StatsSection from "./components/landing/StatsSection";
import HowItWorksSection from "./components/landing/HowItWorksSection";
import PromoBannerSection from "./components/landing/PromoBannerSection";
import TestimonialsSection from "./components/landing/TestimonialsSection";
import FAQSection from "./components/landing/FAQSection";
import Footer from "./components/landing/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-white">
      <Navbar />

      <HeroSection />

      <CategoriesSection />

      <FeaturedTutorsSection />

      <StatsSection />

      <HowItWorksSection />

      <PromoBannerSection />

      <TestimonialsSection />
      {/* 
      <FAQSection /> */}

      <Footer />

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-slate-200 px-4 py-3 flex gap-3 shadow-lg">
        <Link
          href="/tutor/search"
          id="mobile-sticky-find-tutor"
          className="flex-1 text-center py-2.5 text-sm font-bold text-white"
          style={{ background: "#0d9488" }}
        >
          Find Tutor
        </Link>
        <Link
          href="/student-dashboard/post-requirement"
          id="mobile-sticky-post-req"
          className="flex-1 text-center py-2.5 text-sm font-bold border border-slate-900 text-slate-900 hover:bg-slate-50 transition-colors"
        >
          Post Requirement
        </Link>
      </div>
    </main>
  );
}
