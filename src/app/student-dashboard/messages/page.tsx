"use client";

import React from "react";
import { MessageSquare, Search } from "lucide-react";

export default function MessagesPage() {
  return (
    <div className="h-[calc(100vh-8rem)] bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex">
      {/* Sidebar / Chat list */}
      <div className="w-80 border-r border-slate-200 flex flex-col hidden md:flex">
        <div className="p-4 border-b border-slate-100">
          <h2 className="text-lg font-bold text-slate-800 mb-4">Messages</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search conversations..." 
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {/* Empty state for chats */}
          <div className="p-8 text-center text-slate-500">
            <p className="text-sm">No active conversations yet.</p>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col items-center justify-center bg-slate-50/50 p-8 text-center">
        <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center mb-6">
          <MessageSquare className="w-10 h-10 text-indigo-400" />
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-2">Your Messages</h3>
        <p className="text-slate-500 max-w-sm">
          Select a conversation from the sidebar or start a new chat with a tutor after they accept your requirement proposal.
        </p>
      </div>
    </div>
  );
}
