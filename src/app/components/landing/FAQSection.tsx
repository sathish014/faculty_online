"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, Mail } from "lucide-react";
import ScrollReveal from "../common/ScrollReveal";

const faqs = [
  {
    id: "faq-1",
    category: "Students",
    question: "How do I find the right tutor?",
    answer:
      "Use our smart search to filter tutors by subject, location, teaching mode (online/offline/home), rating, experience, and budget. You can also post your requirement and receive tutor responses directly. Browse profiles, read reviews, and connect with your preferred tutor instantly.",
  },
  {
    id: "faq-2",
    category: "Tutors",
    question: "Can I teach online through Faculties Online?",
    answer:
      "Absolutely! Register as a tutor and set your availability for online sessions. Students find and connect with you based on your listed skills. Our platform supports online, offline, and home tuition modes, giving you complete flexibility.",
  },
  {
    id: "faq-3",
    category: "Payments",
    question: "How does the payment system work?",
    answer:
      "Payments are handled securely through our integrated wallet system. Students add funds and pay tutors directly after sessions. Tutors receive payments into their platform wallet, from which they can withdraw to their bank account. We support UPI, net banking, and credit/debit cards.",
  },
  {
    id: "faq-4",
    category: "Students",
    question: "Is home tuition available on the platform?",
    answer:
      "Yes! Home tuition is one of our primary offerings. Search specifically for home tutors in your area, or post a requirement specifying that you need home tuition. Tutors willing to travel to your location will respond with their availability and pricing.",
  },
  {
    id: "faq-5",
    category: "Tutors",
    question: "What is the Premium Membership for tutors?",
    answer:
      "Premium Membership gives tutors a significant competitive advantage — featured profile placement, priority notifications for student requests, a premium badge, unlimited applications, and advanced analytics. Premium tutors receive 3x more student inquiries on average.",
  },
  {
    id: "faq-6",
    category: "Trust",
    question: "How are tutors verified?",
    answer:
      "All tutors go through a verification process that includes identity verification, qualification checking, and background screening. Verified tutors display a checkmark badge on their profile, so students can trust the credentials of every educator they connect with.",
  },
  {
    id: "faq-7",
    category: "Payments",
    question: "Is there a refund policy?",
    answer:
      "Yes. If you're unsatisfied with your first session with a new tutor, we offer a full refund within 48 hours — no questions asked. Our goal is to ensure you find the perfect tutor match.",
  },
  {
    id: "faq-8",
    category: "Trust",
    question: "Can students and tutors communicate before booking?",
    answer:
      "Yes! After a tutor responds to your requirement or you connect with them, you can message them through our secure platform chat before making any payment. This helps you assess teaching style and compatibility.",
  },
];

const categories = ["All", "Students", "Tutors", "Payments", "Trust"];

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? faqs
    : faqs.filter((f) => f.category === activeCategory);

  return (
    <section id="faq" className="pt-8 pb-12" style={{ background: "var(--bg-primary)" }}>
      <div className="line-divider mb-10" />
      <div className="container-xl">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#ff6200] text-xs font-bold uppercase tracking-widest">FAQ</span>
            <span className="h-px flex-1 max-w-[40px]" style={{ background: "rgba(255,98,0,0.4)" }} />
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left sticky */}
          <div className="lg:sticky lg:top-28">
            <ScrollReveal delay={100}>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight text-[#1A1A24] mb-4">
                Frequently asked<br />
                <span style={{ color: "#ff6200" }}>questions</span>
              </h2>
              <p className="text-[rgba(26,26,36,0.6)] text-base leading-relaxed mb-8">
                Everything you need to know about Faculties Online. Can&apos;t find your answer? Our support team is available 24/7.
              </p>

              {/* Categories */}
              <div className="flex flex-wrap gap-2 mb-8">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className="px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200"
                    style={{
                      background: activeCategory === cat ? "#ff6200" : "rgba(26,26,36,0.06)",
                      color: activeCategory === cat ? "#fff" : "rgba(26,26,36,0.65)",
                      border: activeCategory === cat ? "1px solid #ff6200" : "1px solid rgba(26,26,36,0.12)",
                      boxShadow: activeCategory === cat ? "0 4px 16px rgba(255,98,0,0.25)" : "none",
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Support card */}
              <div
                className="rounded-2xl p-6"
                style={{
                  background: "linear-gradient(135deg, rgba(77,20,140,0.08), rgba(77,20,140,0.03))",
                  border: "1px solid rgba(77,20,140,0.15)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "rgba(77,20,140,0.1)", border: "1px solid rgba(77,20,140,0.2)" }}
                >
                  <HelpCircle className="w-5 h-5 text-[#4D148C]" />
                </div>
                <h3 className="font-bold text-[#1A1A24] mb-1">Still have questions?</h3>
                <p className="text-sm text-[rgba(26,26,36,0.6)] mb-4">
                  Our support team is available 24/7 to help.
                </p>
                <a
                  href="mailto:support@facultiesonline.com"
                  id="faq-contact-support-btn"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl btn-purple text-sm font-bold text-white"
                >
                  <Mail className="w-4 h-4" />
                  Contact Support
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right accordion */}
          <div className="space-y-3">
            {filtered.map((faq, i) => {
              const isOpen = openId === faq.id;
              return (
                <ScrollReveal key={faq.id} delay={i * 60}>
                  <div
                    className="rounded-2xl overflow-hidden transition-all duration-300"
                    style={{
                      border: isOpen
                        ? "1px solid rgba(255,98,0,0.3)"
                        : "1px solid rgba(26,26,36,0.09)",
                      background: isOpen
                        ? "linear-gradient(135deg, rgba(255,98,0,0.04), rgba(255,98,0,0.01))"
                        : "var(--bg-sidebar)",
                      boxShadow: isOpen ? "0 8px 24px rgba(255,98,0,0.08)" : "none",
                    }}
                  >
                    <button
                      id={faq.id}
                      onClick={() => setOpenId(isOpen ? null : faq.id)}
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className="flex-shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-full mt-0.5"
                          style={{
                            background: "rgba(255,98,0,0.1)",
                            color: "#ff6200",
                            border: "1px solid rgba(255,98,0,0.2)",
                          }}
                        >
                          {faq.category}
                        </span>
                        <span
                          className="font-semibold text-sm leading-snug transition-colors"
                          style={{ color: isOpen ? "#ff6200" : "#1A1A24" }}
                        >
                          {faq.question}
                        </span>
                      </div>
                      <div
                        className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
                        style={{
                          background: isOpen ? "#ff6200" : "rgba(26,26,36,0.07)",
                          color: isOpen ? "#fff" : "rgba(26,26,36,0.5)",
                          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        }}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-5 animate-accordion-open">
                        <div
                          className="h-px mb-4"
                          style={{ background: "rgba(255,98,0,0.15)" }}
                        />
                        <p className="text-sm text-[rgba(26,26,36,0.65)] leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
