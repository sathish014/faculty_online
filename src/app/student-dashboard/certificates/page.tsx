"use client";

import React, { useState } from "react";
import { Award, Download, Share2, ExternalLink } from "lucide-react";

const certificates = [
  {
    id: "cert1",
    courseTitle: "Python for Data Science & Machine Learning",
    instructor: "Vikram Malhotra",
    issuedDate: "May 15, 2026",
    credential: "FO-DS-2026-00123",
    color: { from: "#4D148C", via: "#2e0854", to: "#1a0630" },
    grade: "Distinction",
  },
];

export default function CertificatesPage() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-black text-[#1A1A24]">Certificates</h1>
        <p className="text-sm text-[rgba(26,26,36,0.6)] mt-0.5">
          {certificates.length} certificate{certificates.length !== 1 ? "s" : ""} earned
        </p>
      </div>

      {certificates.length === 0 ? (
        <div className="text-center py-20">
          <Award className="w-16 h-16 mx-auto mb-4 text-[rgba(26,26,36,0.2)]" />
          <h3 className="text-lg font-bold text-[#1A1A24] mb-2">No certificates yet</h3>
          <p className="text-sm text-[rgba(26,26,36,0.55)] mb-6">
            Complete a course to earn your first certificate
          </p>
          <a href="/courses" className="btn-coral px-5 py-2.5 rounded-xl text-sm font-bold inline-block">
            Browse Courses
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="rounded-2xl overflow-hidden hover-lift cursor-pointer"
              onMouseEnter={() => setHoveredId(cert.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Certificate preview */}
              <div
                className="relative p-8 text-white overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${cert.color.from}, ${cert.color.via}, ${cert.color.to})`,
                  minHeight: 220,
                }}
              >
                {/* Dot pattern */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />

                {/* Decoration circle */}
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10" style={{ background: "radial-gradient(circle, white, transparent)", transform: "translate(25%, -25%)" }} />

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-6">
                    <Award className="w-5 h-5 text-[#ff6200]" />
                    <span className="text-[11px] font-bold uppercase tracking-widest text-white/70">
                      Certificate of Completion
                    </span>
                  </div>

                  <p className="text-white/70 text-sm mb-1">This certifies that</p>
                  <h2 className="text-xl font-black text-white mb-2">Student Name</h2>
                  <p className="text-white/70 text-sm mb-3">has successfully completed</p>
                  <h3 className="text-base font-bold leading-snug text-white mb-4 max-w-xs">{cert.courseTitle}</h3>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-white/50 uppercase tracking-wider">Issued</p>
                      <p className="text-sm font-semibold">{cert.issuedDate}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-white/50 uppercase tracking-wider">Grade</p>
                      <p className="text-sm font-semibold text-[#ff6200]">{cert.grade}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-white/50 uppercase tracking-wider">Credential</p>
                      <p className="text-[11px] font-mono text-white/80">{cert.credential}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div
                className="p-4 flex items-center gap-2"
                style={{ background: "var(--bg-sidebar)", borderTop: "1px solid rgba(26,26,36,0.08)" }}
              >
                <button
                  id={`cert-download-${cert.id}`}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold btn-coral"
                >
                  <Download className="w-4 h-4" />
                  Download
                </button>
                <button
                  id={`cert-share-${cert.id}`}
                  className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-sm font-semibold btn-ghost"
                >
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
                <a
                  href={`https://linkedin.com/in/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`cert-linkedin-${cert.id}`}
                  className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-sm font-semibold"
                  style={{ background: "rgba(10,102,194,0.1)", color: "#0a66c2", border: "1px solid rgba(10,102,194,0.2)" }}
                >
                  <ExternalLink className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
