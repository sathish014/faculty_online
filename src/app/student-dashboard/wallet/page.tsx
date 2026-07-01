"use client";

import React from "react";
import { 
  Wallet as WalletIcon, 
  History,
  CreditCard
} from "lucide-react";

export default function WalletPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-fade-up">
      <div className="mb-6">
        <h1 className="text-2xl font-extrabold text-[#1A1A24]">Wallet & Payments</h1>
        <p className="text-[#1A1A24]/65 text-sm mt-1">Manage your balance and view transaction history.</p>
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
              <span className="font-bold text-white/80 text-sm uppercase tracking-wider">Current Balance</span>
            </div>
            <h2 className="text-4xl font-black tracking-tight mb-8">₹0.00</h2>
            <button className="w-full py-3.5 btn-coral rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg active:scale-95">
              <CreditCard className="w-4 h-4" />
              Add Funds
            </button>
          </div>
        </div>

        {/* Transaction History */}
        <div className="md:col-span-2 card-minimal rounded-3xl p-6 bg-white/80">
          <div className="flex items-center justify-between mb-6 border-b border-[#1A1A24]/10 pb-4">
            <h3 className="text-lg font-extrabold text-[#1A1A24] flex items-center gap-2">
              <History className="w-5 h-5 text-[#4D148C]" />
              Recent Transactions
            </h3>
          </div>
          
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="w-16 h-16 bg-[#1A1A24]/5 rounded-2xl flex items-center justify-center mb-4 border border-[#1A1A24]/10">
              <History className="w-8 h-8 text-[#ff6200]" />
            </div>
            <p className="text-[#1A1A24] font-bold">No transactions yet</p>
            <p className="text-sm text-[#1A1A24]/65 mt-1 max-w-xs">Your payment history will appear here once you make a transaction.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

