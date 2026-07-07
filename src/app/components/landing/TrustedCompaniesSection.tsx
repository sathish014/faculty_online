"use client";

import React, { useEffect, useRef, useState } from "react";

const companies = [
  { name: "Google", logo: "G" },
  { name: "Amazon", logo: "A" },
  { name: "Microsoft", logo: "M" },
  { name: "TCS", logo: "T" },
  { name: "Infosys", logo: "I" },
  { name: "Wipro", logo: "W" },
  { name: "Flipkart", logo: "F" },
  { name: "Zomato", logo: "Z" },
  { name: "Swiggy", logo: "S" },
  { name: "BYJU'S", logo: "B" },
  { name: "PhonePe", logo: "P" },
  { name: "Razorpay", logo: "R" },
];

const double = [...companies, ...companies];

export default function TrustedCompaniesSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-12" style={{ background: "var(--bg-primary)" }}>
      <div className="container-xl">
        <p
          className={`text-center text-xs font-bold uppercase tracking-widest mb-8 transition-all duration-600 ${visible ? "opacity-100" : "opacity-0"}`}
          style={{ color: "rgba(26,26,36,0.35)" }}
        >
          Our students work at top companies
        </p>

        {/* Marquee */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, var(--bg-primary), transparent)" }} />
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, var(--bg-primary), transparent)" }} />

          <div className="flex gap-4 animate-marquee">
            {double.map((company, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[rgba(26,26,36,0.08)] bg-white/60 hover:border-[rgba(255,98,0,0.3)] transition-colors cursor-default"
                style={{ backdropFilter: "blur(8px)" }}
              >
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black"
                  style={{
                    background: "linear-gradient(135deg, rgba(77,20,140,0.12), rgba(255,98,0,0.1))",
                    color: "#4D148C",
                    border: "1px solid rgba(77,20,140,0.15)",
                  }}
                >
                  {company.logo}
                </div>
                <span className="text-sm font-semibold whitespace-nowrap" style={{ color: "rgba(26,26,36,0.7)" }}>
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
