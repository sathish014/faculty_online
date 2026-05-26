"use client";

import React from "react";
import { 
  Wallet as WalletIcon, 
  ArrowUpRight, 
  ArrowDownLeft, 
  History,
  Download
} from "lucide-react";

export default function TeacherWalletPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Earnings & Wallet</h1>
        <p className="text-slate-500 text-sm mt-1">Manage your payouts and view earnings history.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Balance Card */}
        <div className="md:col-span-1 bg-gradient-to-br from-green-700 to-emerald-600 rounded-3xl p-6 text-white shadow-xl shadow-green-900/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-6">
              <WalletIcon className="w-5 h-5 text-green-200" />
              <span className="font-medium text-green-100">Available to Withdraw</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight mb-8">₹12,400.00</h2>
            <button className="w-full py-3 bg-white text-green-800 rounded-xl font-bold hover:bg-green-50 transition-colors flex items-center justify-center gap-2">
              <ArrowDownLeft className="w-4 h-4" />
              Withdraw Funds
            </button>
          </div>
        </div>

        {/* Transaction History */}
        <div className="md:col-span-2 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-6 border-b border-slate-100 pb-4">
            <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <History className="w-5 h-5 text-indigo-500" />
              Recent Payouts
            </h3>
            <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700 flex items-center gap-1 bg-indigo-50 px-3 py-1.5 rounded-lg transition-colors">
              <Download className="w-4 h-4" /> Export CSV
            </button>
          </div>
          
          <div className="flex-1">
            {[
              { id: "TXN-001", date: "24 May 2026", amount: "₹4,500", status: "Completed", student: "Rahul Sharma" },
              { id: "TXN-002", date: "20 May 2026", amount: "₹8,000", status: "Processing", student: "Sneha Gupta" },
            ].map((txn, i) => (
              <div key={i} className="flex items-center justify-between p-4 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors rounded-xl">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${txn.status === 'Completed' ? 'bg-green-100 text-green-600' : 'bg-amber-100 text-amber-600'}`}>
                    {txn.status === 'Completed' ? <ArrowDownLeft className="w-5 h-5" /> : <Clock className="w-5 h-5" />}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">Payout from {txn.student}</h4>
                    <p className="text-xs text-slate-500">{txn.date} • {txn.id}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-slate-900">{txn.amount}</p>
                  <p className={`text-xs font-medium ${txn.status === 'Completed' ? 'text-green-600' : 'text-amber-600'}`}>{txn.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Clock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
