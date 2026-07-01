"use client";

import React, { useState } from "react";
import { X, CheckCircle2 } from "lucide-react";

interface RequestTutorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RequestTutorModal({ isOpen, onClose }: RequestTutorModalProps) {
  const [email, setEmail] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");

  if (!isOpen) return null;

  const handleVerifyEmail = () => {
    if (!email) {
      alert("Please enter an email address first.");
      return;
    }
    // Simulate sending an OTP
    setIsVerifying(true);
  };

  const handleVerifyCode = () => {
    if (!verificationCode) {
      alert("Please enter the verification code.");
      return;
    }
    // Simulate verifying code
    setIsVerified(true);
    setIsVerifying(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isVerified) {
      alert("Please verify your email before submitting the request.");
      return;
    }
    alert("Request submitted successfully!");
    onClose();
    // Reset state if needed
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto z-10 p-6 md:p-8">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900">
            Request a Faculties
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Fill out this form to request a tutor without needing an account.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Category *</label>
            <input 
              type="text" 
              required
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm"
              placeholder="e.g. Science"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Sub-Category *</label>
            <input 
              type="text" 
              required
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm"
              placeholder="e.g. Physics"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Full Name *</label>
            <input 
              type="text" 
              required
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Mode *</label>
            <select 
              required
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm bg-white"
            >
              <option value="">Select Mode</option>
              <option value="online">Online</option>
              <option value="offline">Offline</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Schedule Date *</label>
            <input 
              type="date" 
              required
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Mobile Number *</label>
            <input 
              type="tel" 
              required
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm"
              placeholder="Enter mobile number"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email *</label>
            <div className="flex gap-2">
              <input 
                type="email" 
                required
                disabled={isVerified}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm disabled:bg-slate-50 disabled:text-slate-500"
                placeholder="Enter email address"
              />
              {isVerified ? (
                <div className="flex items-center gap-2 px-4 py-2.5 bg-emerald-50 text-emerald-600 rounded-xl border border-emerald-100 font-medium text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  Verified
                </div>
              ) : (
                <button 
                  type="button"
                  onClick={handleVerifyEmail}
                  className="px-6 py-2.5 bg-slate-900 text-white font-medium text-sm rounded-xl hover:bg-slate-800 transition-colors shadow-sm whitespace-nowrap"
                >
                  Verify
                </button>
              )}
            </div>
          </div>

          {isVerifying && !isVerified && (
            <div className="md:col-span-2 p-4 bg-indigo-50 rounded-xl border border-indigo-100 flex flex-col gap-3">
              <label className="block text-sm font-semibold text-indigo-900">Verification Code *</label>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  className="flex-1 px-4 py-2.5 rounded-xl border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm"
                  placeholder="Enter 6-digit code"
                />
                <button 
                  type="button"
                  onClick={handleVerifyCode}
                  className="px-6 py-2.5 bg-[#ff6200] text-white font-medium text-sm rounded-xl hover:bg-[#e55800] transition-colors shadow-sm shadow-[#ff6200]/20 whitespace-nowrap"
                >
                  Submit
                </button>
              </div>
              <p className="text-xs text-indigo-600/80">Code sent to {email}. (Enter any code to simulate verification for now)</p>
            </div>
          )}

          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Message</label>
            <textarea 
              rows={3}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm resize-none"
              placeholder="Provide any additional details..."
            ></textarea>
          </div>

          <div className="md:col-span-2 pt-2">
            <button 
              type="submit"
              className="w-full py-3.5 rounded-xl text-white font-semibold shadow-lg shadow-[#ff6200]/25 transition-transform hover:-translate-y-0.5 active:translate-y-0"
              style={{ background: "#ff6200" }}
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
