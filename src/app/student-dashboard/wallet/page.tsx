"use client";

import React from "react";
import { 
  Wallet as WalletIcon, 
  ArrowUpRight, 
  ArrowDownLeft, 
  History,
  CreditCard
} from "lucide-react";

export default function WalletPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Wallet & Payments</h1>
        <p className="text-slate-500 text-sm mt-1">Manage your balance and view transaction history.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Balance Card */}
        <div className="md:col-span-1 bg-gradient-to-br from-indigo-900 to-indigo-700 rounded-3xl p-6 text-white shadow-xl shadow-indigo-900/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-6">
              <WalletIcon className="w-5 h-5 text-indigo-300" />
              <span className="font-medium text-indigo-100">Current Balance</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight mb-8">₹0.00</h2>
            <button className="w-full py-3 bg-white text-indigo-900 rounded-xl font-bold hover:bg-indigo-50 transition-colors flex items-center justify-center gap-2">
              <CreditCard className="w-4 h-4" />
              Add Funds
            </button>
          </div>
        </div>

        {/* Transaction History */}
        <div className="md:col-span-2 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-6 border-b border-slate-100 pb-4">
            <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <History className="w-5 h-5 text-indigo-500" />
              Recent Transactions
            </h3>
          </div>
          
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
              <History className="w-8 h-8 text-slate-400" />
            </div>
            <p className="text-slate-500 font-medium">No transactions yet</p>
            <p className="text-sm text-slate-400 mt-1 max-w-xs">Your payment history will appear here once you make a transaction.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
