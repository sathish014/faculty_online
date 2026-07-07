"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    id: "faq-1",
    question: "How do I find the right tutor?",
    answer:
      "Use our smart search to filter tutors by subject, location, teaching mode (online/offline/home), rating, experience, and budget. You can also post your requirement and receive tutor responses directly. Browse profiles, read reviews, and connect with your preferred tutor instantly.",
  },
  {
    id: "faq-2",
    question: "Can I teach online through Faculties Online?",
    answer:
      "Absolutely! You can register as a tutor and set your availability for online sessions. Students can find and connect with you based on your listed skills and availability. Our platform supports online, offline, and home tuition modes, giving you complete flexibility.",
  },
  {
    id: "faq-3",
    question: "How does the payment system work?",
    answer:
      "Payments are handled securely through our integrated wallet system. Students can add funds to their wallet and pay tutors directly after sessions. Tutors receive payments into their platform wallet, from which they can withdraw to their bank account. We support UPI, net banking, and credit/debit cards.",
  },
  {
    id: "faq-4",
    question: "Is home tuition available on the platform?",
    answer:
      "Yes! Home tuition is one of our primary offerings. You can search specifically for home tutors in your area, or post a requirement specifying that you need home tuition. Tutors willing to travel to your location will respond with their availability and pricing.",
  },
  {
    id: "faq-5",
    question: "What is the Premium Membership for tutors?",
    answer:
      "Premium Membership gives tutors a significant competitive advantage — featured profile placement, priority notifications for student requests, a premium badge, unlimited applications, and advanced analytics. Premium tutors receive 3x more student inquiries on average compared to free accounts.",
  },
  {
    id: "faq-6",
    question: "How are tutors verified?",
    answer:
      "All tutors on Faculties Online go through a verification process that includes identity verification, qualification checking, and background screening. Verified tutors display a checkmark badge on their profile, so students can trust the credentials of every educator they connect with.",
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  return (
    <section id="faq" className="py-14 bg-white border-t border-slate-200">
      <div className="container-xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left */}
          <div className="lg:sticky lg:top-28">
            <div className="flex items-center gap-2 mb-4">
              <HelpCircle className="w-4 h-4" style={{ color: "#0d9488" }} />
              <span className="text-sm font-semibold" style={{ color: "#0d9488" }}>Got questions?</span>
            </div>
            <h2 className="font-heading font-bold text-slate-900 text-2xl md:text-3xl mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Everything you need to know about Faculties Online. Can&apos;t find an answer? Reach out to our support team.
            </p>
            <Link
              href="mailto:support@facultiesonline.com"
              id="faq-contact-support-btn"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white transition-colors"
              style={{ background: "#0d9488" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#0f766e")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#0d9488")}
            >
              Contact Support
            </Link>

            <div className="mt-8 p-5 border border-slate-200 bg-slate-50">
              <p className="font-semibold text-slate-900 text-sm mb-1">Still have questions?</p>
              <p className="text-slate-500 text-xs leading-relaxed">
                Our support team is available 24/7 to help you get the most out of Faculties Online.
              </p>
            </div>
          </div>

          {/* Right: Accordion */}
          <div className="divide-y divide-slate-200 border border-slate-200">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div key={faq.id} id={faq.id}>
                  <button
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-white hover:bg-slate-50 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className={`font-semibold text-sm leading-snug ${isOpen ? "text-teal-700" : "text-slate-900"}`}>
                      {faq.question}
                    </span>
                    <div
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                      style={{
                        background: isOpen ? "#0d9488" : "#f1f5f9",
                      }}
                    >
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                        style={{ color: isOpen ? "#fff" : "#64748b" }}
                      />
                    </div>
                  </button>

                  <div
                    style={{
                      maxHeight: isOpen ? "300px" : "0",
                      overflow: "hidden",
                      transition: "max-height 0.3s ease",
                    }}
                  >
                    <div className="px-5 pb-5 bg-white">
                      <div className="h-px bg-slate-100 mb-4" />
                      <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
