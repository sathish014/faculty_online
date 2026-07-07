import React from "react";
import Link from "next/link";
import { Check } from "lucide-react";

const features = [
  "Access to 10,000+ tutors",
  "Learn on your schedule",
  "Expert-led live sessions",
  "Certificate of completion",
];

export default function PromoBannerSection() {
  return (
    <section className="py-12 bg-white border-t border-slate-200">
      <div className="container-xl">

        {/* Dark promotional banner */}
        <div
          className="overflow-hidden flex flex-col md:flex-row"
          style={{ background: "#1c1d1f" }}
        >
          {/* Left: Text content */}
          <div className="flex-1 p-8 md:p-12 lg:p-16">
            <h2 className="font-heading font-bold text-white text-2xl md:text-3xl mb-3 leading-snug">
              Build your career with a Personal Plan subscription
            </h2>
            <p className="text-white/75 text-sm mb-7 leading-relaxed">
              Get unlimited access to thousands of top-rated courses and mentors for a low monthly fee.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-2.5">
                  <div
                    className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "#0d9488" }}
                  >
                    <Check className="w-2.5 h-2.5 text-white" />
                  </div>
                  <span className="text-white/85 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/register"
                className="px-6 py-2.5 text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 transition-colors"
              >
                Explore plan
              </Link>
              <button
                className="px-6 py-2.5 text-sm font-semibold text-white/70 hover:text-white border border-white/25 hover:border-white/50 transition-colors"
              >
                Learn more
              </button>
            </div>

            <p className="text-white/40 text-xs mt-3">Cancel anytime · No hidden fees</p>
          </div>

          {/* Right: Image panel */}
          <div className="w-full md:w-[400px] h-48 md:h-auto relative flex-shrink-0">
            <div className="absolute inset-0" style={{ background: "#0d9488" }} />
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2000&auto=format&fit=crop"
              alt="Student learning"
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-70"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
