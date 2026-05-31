import Link from "next/link";
import Navbar from "./components/landing/Navbar";
import HeroSection from "./components/landing/HeroSection";
import StatsSection from "./components/landing/StatsSection";
import CategoriesSection from "./components/landing/CategoriesSection";
import HowItWorksSection from "./components/landing/HowItWorksSection";
import FeaturedTutorsSection from "./components/landing/FeaturedTutorsSection";
import TestimonialsSection from "./components/landing/TestimonialsSection";
import Footer from "./components/landing/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <CategoriesSection />
      <FeaturedTutorsSection />
      <TestimonialsSection />
      <HowItWorksSection />
      <Footer />

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 px-4 py-3 flex gap-3 shadow-2xl">
        <a
          href="#tutors"
          id="mobile-sticky-find-tutor"
          className="flex-1 text-center py-2.5 rounded-xl text-white font-semibold text-sm"
          style={{ background: "linear-gradient(135deg, #4f46e5, #7c3aed)" }}
        >
          Find Tutor
        </a>
        <Link
          href="/student-dashboard/post-requirement"
          id="mobile-sticky-post-req"
          className="flex-1 text-center py-2.5 rounded-xl border border-indigo-200 text-indigo-600 font-semibold text-sm hover:bg-indigo-50 transition-colors"
        >
          Post Requirement
        </Link>
      </div>
    </main>
  );
}
