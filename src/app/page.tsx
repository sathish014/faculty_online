import Link from "next/link";
import Navbar from "./components/landing/Navbar";
import HeroSection from "./components/landing/HeroSection";
import TrustedCompaniesSection from "./components/landing/TrustedCompaniesSection";
import CategoriesSection from "./components/landing/CategoriesSection";
import FeaturedTutorsSection from "./components/landing/FeaturedTutorsSection";
import WhyChooseUsSection from "./components/landing/WhyChooseUsSection";
import LearningRoadmapSection from "./components/landing/LearningRoadmapSection";
import UpcomingEventsSection from "./components/landing/UpcomingEventsSection";
import PromoBannerSection from "./components/landing/PromoBannerSection";
import LatestBlogsSection from "./components/landing/LatestBlogsSection";
import TestimonialsSection from "./components/landing/TestimonialsSection";
import FAQSection from "./components/landing/FAQSection";
import NewsletterSection from "./components/landing/NewsletterSection";
import Footer from "./components/landing/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden page-enter" style={{ background: "var(--bg-primary)" }}>
      <Navbar />

      <HeroSection />

      {/* <TrustedCompaniesSection /> */}

      <CategoriesSection />

      <FeaturedTutorsSection />

      <WhyChooseUsSection />

      <LearningRoadmapSection />

      {/* <UpcomingEventsSection /> */}

      {/* <PromoBannerSection /> */}

      <LatestBlogsSection />

      <TestimonialsSection />

      <FAQSection />

      <NewsletterSection />

      <Footer />

      {/* Mobile sticky CTA */}
      <div
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden px-4 py-3 flex gap-3"
        style={{
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(26, 26, 36, 0.08)",
        }}
      >
        <Link
          href="/tutor/search"
          id="mobile-sticky-find-tutor"
          className="flex-1 text-center py-2.5 rounded-xl text-white font-bold text-sm btn-coral"
        >
          Find Tutor
        </Link>
        <Link
          href="/student-dashboard/post-requirement"
          id="mobile-sticky-post-req"
          className="flex-1 text-center py-2.5 rounded-xl text-sm font-bold btn-ghost"
        >
          Post Requirement
        </Link>
      </div>
    </main>
  );
}
