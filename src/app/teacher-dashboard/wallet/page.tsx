"use client";

import React from "react";
import { 
  Wallet as WalletIcon, 
  ArrowDownLeft, 
  History,
  Download,
  Clock
} from "lucide-react";

export default function TeacherWalletPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-fade-up">
      <div className="mb-6">
        <h1 className="text-2xl font-extrabold text-[#1A1A24]">Earnings & Wallet</h1>
        <p className="text-[#1A1A24]/65 text-sm mt-1">Manage your payouts and view earnings history.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Balance Card */}
        <div 
          className="md:col-span-1 rounded-3xl p-6 text-white shadow-xl relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #4D148C 0%, #2e0854 100%)" }}
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff6200]/20 rounded-full blur-3xl -mr-10 -mt-10"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-6">
              <WalletIcon className="w-5 h-5 text-[#ff6200]" />
              <span className="font-bold text-white/80 text-sm uppercase tracking-wider">Available to Withdraw</span>
            </div>
            <h2 className="text-4xl font-bold text-white tracking-tight mb-8">₹12,400.00</h2>
            <button className="w-full py-3.5 btn-coral rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg active:scale-95">
              <ArrowDownLeft className="w-4 h-4" />
              Withdraw Funds
            </button>
          </div>
        </div>

        {/* Transaction History */}
        <div className="md:col-span-2 card-minimal rounded-3xl p-6 bg-white/80 flex flex-col">
          <div className="flex items-center justify-between mb-6 border-b border-[#1A1A24]/10 pb-4">
            <h3 className="text-lg font-extrabold text-[#1A1A24] flex items-center gap-2">
              <History className="w-5 h-5 text-[#4D148C]" />
              Recent Payouts
            </h3>
            <button className="text-xs font-bold text-[#4D148C] hover:text-white flex items-center gap-1.5 bg-[#4D148C]/10 hover:bg-[#4D148C] px-3.5 py-2 rounded-xl transition-all shadow-sm">
              <Download className="w-4 h-4" /> Export CSV
            </button>
          </div>
          
          <div className="flex-1 space-y-2">
            {[
              { id: "TXN-001", date: "24 May 2026", amount: "₹4,500", status: "Completed", student: "Rahul Sharma" },
              { id: "TXN-002", date: "20 May 2026", amount: "₹8,000", status: "Processing", student: "Sneha Gupta" },
            ].map((txn, i) => (
              <div key={i} className="flex items-center justify-between p-4 border border-[#1A1A24]/5 hover:border-[#1A1A24]/15 hover:bg-[#1A1A24]/2 transition-colors rounded-2xl">
                <div className="flex items-center gap-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${txn.status === 'Completed' ? 'bg-[#ff6200]/15 text-[#ff6200]' : 'bg-amber-500/15 text-amber-600'}`}>
                    {txn.status === 'Completed' ? <ArrowDownLeft className="w-5 h-5" /> : <Clock className="w-5 h-5" />}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-[#1A1A24]">Payout from {txn.student}</h4>
                    <p className="text-xs font-medium text-[#1A1A24]/60">{txn.date} • {txn.id}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-black text-[#1A1A24] text-base">{txn.amount}</p>
                  <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase mt-0.5 ${txn.status === 'Completed' ? 'bg-[#ff6200]/15 text-[#ff6200]' : 'bg-amber-500/15 text-amber-600'}`}>{txn.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

