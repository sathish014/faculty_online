"use client";

import React, { useState } from "react";
import ScrollReveal from "../common/ScrollReveal";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubscribed(true);
    }, 800);
  };

  return (
    <section className="pt-8 pb-16" style={{ background: "var(--bg-secondary)" }}>
      <div className="line-divider mb-10" />
      <div className="container-xl">
        <ScrollReveal>
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #4D148C 0%, #2e0854 60%, #1a0630 100%)",
              boxShadow: "0 24px 64px rgba(77,20,140,0.4)",
            }}
          >
            {/* Decorative orbs */}
            <div
              className="absolute pointer-events-none animate-orb-drift"
              style={{
                top: "-60px",
                right: "10%",
                width: "clamp(120px, 30vw, 300px)",
                height: "clamp(120px, 30vw, 300px)",
                background: "radial-gradient(circle, rgba(255,98,0,0.2) 0%, transparent 70%)",
                borderRadius: "50%",
              }}
            />
            <div
              className="absolute pointer-events-none"
              style={{
                bottom: "-80px",
                left: "5%",
                width: "clamp(100px, 25vw, 250px)",
                height: "clamp(100px, 25vw, 250px)",
                background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)",
                borderRadius: "50%",
              }}
            />

            {/* Grid pattern */}
            <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />

            <div className="relative z-10 p-6 sm:p-10 md:p-16 flex flex-col lg:flex-row gap-10 items-center">
              {/* Left */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-4 h-4 text-[#ff6200]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-white/60">
                    Weekly Newsletter
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4">
                  Stay ahead of the<br />
                  <span style={{ color: "#ff6200" }}>learning curve.</span>
                </h2>
                <p className="text-white/70 text-base leading-relaxed mb-6 max-w-md">
                  Get curated study tips, tutor spotlights, exam strategies, and platform updates every week. Join 80,000+ learners.
                </p>
                <div className="flex flex-wrap gap-4">
                  {[
                    "Weekly study tips",
                    "Tutor spotlights",
                    "Exam strategies",
                    "No spam, ever",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-[#ff6200]" />
                      <span className="text-white/70 text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right */}
              <div className="flex-1 w-full max-w-md">
                {subscribed ? (
                  <div
                    className="rounded-2xl p-8 text-center"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      backdropFilter: "blur(12px)",
                    }}
                  >
                    <div className="text-4xl mb-3">🎉</div>
                    <h3 className="text-white font-bold text-lg mb-2">You&apos;re subscribed!</h3>
                    <p className="text-white/60 text-sm">
                      Check your inbox for a confirmation email. First issue arrives this Sunday.
                    </p>
                  </div>
                ) : (
                  <div
                    className="rounded-2xl p-8"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      backdropFilter: "blur(12px)",
                    }}
                  >
                    <h3 className="text-white font-bold text-lg mb-1">Subscribe for free</h3>
                    <p className="text-white/50 text-sm mb-5">No credit card. Unsubscribe anytime.</p>

                    <form onSubmit={handleSubmit} className="space-y-3">
                      <input
                        type="text"
                        placeholder="Your full name"
                        id="newsletter-name"
                        className="w-full px-4 py-3 rounded-xl text-sm font-medium"
                        style={{
                          background: "rgba(255,255,255,0.12)",
                          border: "1px solid rgba(255,255,255,0.15)",
                          color: "#fff",
                          outline: "none",
                        }}
                      />
                      <input
                        type="email"
                        placeholder="your@email.com"
                        id="newsletter-email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-xl text-sm font-medium"
                        style={{
                          background: "rgba(255,255,255,0.12)",
                          border: "1px solid rgba(255,255,255,0.15)",
                          color: "#fff",
                          outline: "none",
                        }}
                      />
                      <button
                        type="submit"
                        id="newsletter-submit-btn"
                        disabled={loading}
                        className="w-full btn-coral rounded-xl py-3 flex items-center justify-center gap-2 text-sm font-bold"
                        style={{ boxShadow: "0 8px 24px rgba(255,98,0,0.4)" }}
                      >
                        {loading ? (
                          <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            Subscribe Now <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </form>

                    <p className="text-white/40 text-xs mt-3 text-center">
                      Joining 80,000+ learners across India
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
