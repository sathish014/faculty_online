"use client";

import {
  Briefcase,
  Wallet,
  Star,
  Crown,
  Users,
  BarChart3,
  TrendingUp,
  Bell,
  ArrowUpRight,
  CheckCircle,
  Activity,
} from "lucide-react";

const tutorSidebarItems = [
  { icon: Briefcase, label: "My Jobs", active: true, count: 8 },
  { icon: Wallet, label: "Wallet & Earnings", count: null },
  { icon: Star, label: "Reviews", count: 45 },
  { icon: Crown, label: "Premium Membership", count: null },
  { icon: Users, label: "Student Requests", count: 12 },
  { icon: BarChart3, label: "Profile Analytics", count: null },
];

const earningData = [
  { month: "Jan", value: 60 },
  { month: "Feb", value: 75 },
  { month: "Mar", value: 55 },
  { month: "Apr", value: 85 },
  { month: "May", value: 70 },
  { month: "Jun", value: 95 },
];

const recentRequests = [
  { name: "Riya Patel", subject: "Class 10 Maths", budget: "₹600/hr", time: "5 min ago" },
  { name: "Arun Kumar", subject: "Python Programming", budget: "₹800/hr", time: "22 min ago" },
  { name: "Meera Joshi", subject: "Spoken English", budget: "₹500/hr", time: "1 hr ago" },
];

export default function TutorDashboardSection() {
  return (
    <section
      id="tutor-dashboard"
      className="py-24 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0f172a 0%, #1e1b4b 100%)" }}
    >
      <div className="container-xl">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-400/30 bg-violet-500/10 text-violet-300 text-sm font-semibold mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            Tutor Experience
          </div>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-heading font-extrabold text-white mb-4">
            Manage Your Teaching
            <br />
            <span className="bg-gradient-to-r from-violet-300 via-indigo-300 to-blue-300 bg-clip-text text-transparent">
              Career Effortlessly
            </span>
          </h2>
          <p className="text-white/55 text-lg max-w-xl mx-auto">
            Track earnings, manage student requests, build your reputation, and grow with
            our premium tools.
          </p>
        </div>

        {/* Dashboard Mockup */}
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-indigo-500/10 to-blue-500/10 rounded-3xl blur-2xl" />

          <div className="relative rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
            {/* Top bar */}
            <div
              className="px-6 py-4 flex items-center justify-between border-b border-white/10"
              style={{ background: "rgba(15,23,42,0.95)" }}
            >
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <span className="text-white/40 text-xs ml-4">
                  faculties.online/dashboard/tutor
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Bell className="w-4 h-4 text-white/40" />
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-yellow-500/30 bg-yellow-500/10">
                  <Crown className="w-3 h-3 text-yellow-400" />
                  <span className="text-yellow-300 text-xs font-semibold">Premium</span>
                </div>
              </div>
            </div>

            <div className="flex h-[480px]" style={{ background: "rgba(15,23,42,0.9)" }}>
              {/* Sidebar */}
              <div
                className="w-56 border-r border-white/5 p-4 flex flex-col gap-1 flex-shrink-0"
                style={{ background: "rgba(10,15,35,0.8)" }}
              >
                <div className="mb-4 px-2">
                  <p className="text-xs font-semibold text-white/30 uppercase tracking-wider">
                    Tutor Panel
                  </p>
                </div>
                {tutorSidebarItems.map((item) => (
                  <div
                    key={item.label}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer transition-all ${
                      item.active
                        ? "bg-gradient-to-r from-violet-500/30 to-indigo-500/30 border border-violet-500/30 text-white"
                        : "text-white/50 hover:text-white/80 hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <item.icon className="w-4 h-4" />
                      <span className="text-xs font-medium">{item.label}</span>
                    </div>
                    {item.count && (
                      <span className="text-xs px-1.5 py-0.5 rounded-full bg-violet-500/20 text-violet-300 font-bold border border-violet-500/20">
                        {item.count}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Main Content */}
              <div className="flex-1 p-6 overflow-hidden">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-heading font-bold text-white text-lg">
                      Welcome, Priya! 🎓
                    </h3>
                    <p className="text-white/40 text-sm">
                      12 new student requests this week
                    </p>
                  </div>
                  <button className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-violet-500/20 border border-violet-500/30 text-violet-300 text-xs font-semibold">
                    <Activity className="w-3 h-3" />
                    Live Analytics
                  </button>
                </div>

                {/* Earnings + Stats */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  <div className="col-span-2 bg-white/5 rounded-2xl p-4 border border-white/5">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-white/60 text-xs font-semibold uppercase tracking-wider">
                        Monthly Earnings
                      </p>
                      <span className="text-green-400 text-xs flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        +24% this month
                      </span>
                    </div>
                    <p className="font-heading font-extrabold text-white text-2xl mb-3">
                      ₹42,500
                    </p>
                    {/* Mini bar chart */}
                    <div className="flex items-end gap-1.5 h-14">
                      {earningData.map((d) => (
                        <div key={d.month} className="flex-1 flex flex-col items-center gap-1">
                          <div
                            className="w-full rounded-sm bg-gradient-to-t from-violet-500 to-indigo-400"
                            style={{ height: `${(d.value / 100) * 100}%`, opacity: 0.7 + (d.value / 300) }}
                          />
                          <span className="text-white/30 text-xs">{d.month}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    {[
                      { label: "Jobs Done", value: "48", icon: CheckCircle, color: "text-green-400" },
                      { label: "Rating", value: "4.9", icon: Star, color: "text-amber-400" },
                      { label: "Profile Views", value: "280", icon: ArrowUpRight, color: "text-indigo-400" },
                    ].map((stat) => (
                      <div key={stat.label} className="flex-1 bg-white/5 rounded-xl p-3 border border-white/5">
                        <stat.icon className={`w-4 h-4 ${stat.color} mb-1.5`} />
                        <p className="font-heading font-bold text-white text-lg leading-none">{stat.value}</p>
                        <p className="text-white/40 text-xs mt-0.5">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Student Requests */}
                <div>
                  <p className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-2">
                    Recent Student Requests
                  </p>
                  <div className="space-y-1.5">
                    {recentRequests.map((req) => (
                      <div
                        key={req.name}
                        className="flex items-center justify-between py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/8 transition-colors border border-white/5"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold">
                            {req.name[0]}
                          </div>
                          <div>
                            <p className="text-white text-xs font-semibold">{req.name}</p>
                            <p className="text-white/40 text-xs">{req.subject}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-violet-300 text-xs font-semibold">{req.budget}</span>
                          <span className="text-white/30 text-xs">{req.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
