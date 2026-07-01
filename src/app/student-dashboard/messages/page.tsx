"use client";

import React from "react";
import { MessageSquare, Search } from "lucide-react";

export default function MessagesPage() {
  return (
    <div className="h-[calc(100vh-8rem)] bg-white/80 rounded-3xl border border-[#1A1A24]/10 shadow-sm overflow-hidden flex animate-fade-up">
      {/* Sidebar / Chat list */}
      <div className="w-80 border-r border-[#1A1A24]/10 flex flex-col hidden md:flex bg-white/50">
        <div className="p-4 border-b border-[#1A1A24]/10">
          <h2 className="text-lg font-extrabold text-[#1A1A24] mb-3">Messages</h2>
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1A1A24]/40" />
            <input 
              type="text" 
              placeholder="Search conversations..." 
              className="w-full pl-10 pr-4 py-2 bg-[#1A1A24]/5 border border-[#1A1A24]/10 rounded-xl text-sm focus:outline-none focus:border-[#ff6200] focus:ring-2 focus:ring-[#ff6200]/20 transition-all font-medium text-[#1A1A24]"
            />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {/* Empty state for chats */}
          <div className="p-8 text-center text-[#1A1A24]/60 font-medium">
            <p className="text-sm">No active conversations yet.</p>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col items-center justify-center bg-[#fdf8f2]/60 p-8 text-center">
        <div className="w-20 h-20 bg-[#4D148C]/10 rounded-2xl flex items-center justify-center mb-6 border border-[#4D148C]/20 shadow-sm">
          <MessageSquare className="w-10 h-10 text-[#4D148C]" />
        </div>
        <h3 className="text-xl font-extrabold text-[#1A1A24] mb-2">Your Messages</h3>
        <p className="text-[#1A1A24]/65 max-w-sm text-sm">
          Select a conversation from the sidebar or start a new chat with a tutor after they accept your requirement proposal.
        </p>
      </div>
    </div>
  );
}

