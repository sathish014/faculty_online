// "use client";

// import {
//   LayoutDashboard,
//   MessageSquare,
//   Wallet,
//   Star,
//   BookmarkCheck,
//   FileText,
//   TrendingUp,
//   Bell,
//   Search,
//   ChevronRight,
//   Wifi,
// } from "lucide-react";

// const studentSidebarItems = [
//   { icon: LayoutDashboard, label: "Dashboard", active: true },
//   { icon: FileText, label: "My Requirements", count: 3 },
//   { icon: MessageSquare, label: "Messages", count: 5 },
//   { icon: Wallet, label: "Wallet", count: null },
//   { icon: Star, label: "Reviews", count: null },
//   { icon: BookmarkCheck, label: "Saved Tutors", count: 12 },
// ];

// const recentTutors = [
//   { name: "Priya Sharma", subject: "Mathematics", status: "Active", initials: "PS", color: "from-violet-500 to-purple-600" },
//   { name: "Rahul Verma", subject: "Physics", status: "Pending", initials: "RV", color: "from-blue-500 to-indigo-600" },
//   { name: "Anjali Mehta", subject: "English", status: "Active", initials: "AM", color: "from-pink-500 to-rose-600" },
// ];

// export default function StudentDashboardSection() {
//   return (
//     <section id="student-dashboard" className="py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
//       <div className="container-xl">
//         {/* Header */}
//         <div className="text-center mb-14">
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold mb-4">
//             <LayoutDashboard className="w-3.5 h-3.5" />
//             Student Experience
//           </div>
//           <h2 className="text-3xl md:text-4xl xl:text-5xl font-heading font-extrabold text-slate-900 mb-4">
//             Your Personal{" "}
//             <span className="gradient-text-blue">Learning Hub</span>
//           </h2>
//           <p className="text-slate-500 text-lg max-w-xl mx-auto">
//             Manage everything from one beautiful dashboard — requirements, tutors,
//             messages, and more.
//           </p>
//         </div>

//         {/* Dashboard Mockup */}
//         <div className="relative max-w-5xl mx-auto">
//           {/* Glow */}
//           <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-violet-500/10 to-purple-500/10 rounded-3xl blur-2xl" />

//           <div className="relative bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden">
//             {/* Top bar */}
//             <div className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-violet-700 px-6 py-4 flex items-center justify-between">
//               <div className="flex items-center gap-3">
//                 <div className="flex gap-1.5">
//                   <div className="w-3 h-3 rounded-full bg-red-400/70" />
//                   <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
//                   <div className="w-3 h-3 rounded-full bg-green-400/70" />
//                 </div>
//                 <span className="text-white/70 text-xs ml-4">
//                   faculties.online/dashboard/student
//                 </span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <Bell className="w-4 h-4 text-white/60" />
//                 <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-400 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
//                   A
//                 </div>
//               </div>
//             </div>

//             <div className="flex h-[480px]">
//               {/* Sidebar */}
//               <div className="w-56 bg-slate-50 border-r border-slate-100 p-4 flex flex-col gap-1 flex-shrink-0">
//                 <div className="mb-4 px-2">
//                   <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
//                     Student Panel
//                   </p>
//                 </div>
//                 {studentSidebarItems.map((item) => (
//                   <div
//                     key={item.label}
//                     className={`flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer transition-all duration-200 group ${
//                       item.active
//                         ? "bg-gradient-to-r from-indigo-500 to-violet-600 text-white shadow-md"
//                         : "text-slate-600 hover:bg-slate-100"
//                     }`}
//                   >
//                     <div className="flex items-center gap-2.5">
//                       <item.icon className="w-4 h-4" />
//                       <span className="text-xs font-medium">{item.label}</span>
//                     </div>
//                     {item.count && (
//                       <span
//                         className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${
//                           item.active
//                             ? "bg-white/20 text-white"
//                             : "bg-indigo-100 text-indigo-600"
//                         }`}
//                       >
//                         {item.count}
//                       </span>
//                     )}
//                   </div>
//                 ))}
//               </div>

//               {/* Main Content */}
//               <div className="flex-1 p-6 overflow-hidden bg-white">
//                 {/* Welcome */}
//                 <div className="flex items-center justify-between mb-6">
//                   <div>
//                     <h3 className="font-heading font-bold text-slate-900 text-lg">
//                       Good morning, Aryan! 👋
//                     </h3>
//                     <p className="text-slate-400 text-sm">
//                       You have 3 new tutor responses
//                     </p>
//                   </div>
//                   <div className="relative">
//                     <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
//                     <input
//                       className="pl-8 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-700 placeholder-slate-400 focus:outline-none w-36"
//                       placeholder="Search..."
//                       readOnly
//                     />
//                   </div>
//                 </div>

//                 {/* Stat cards */}
//                 <div className="grid grid-cols-4 gap-3 mb-6">
//                   {[
//                     { label: "Requirements", value: "3", icon: FileText, color: "text-indigo-600", bg: "bg-indigo-50" },
//                     { label: "Active Tutors", value: "2", icon: Wifi, color: "text-green-600", bg: "bg-green-50" },
//                     { label: "Messages", value: "12", icon: MessageSquare, color: "text-violet-600", bg: "bg-violet-50" },
//                     { label: "Sessions", value: "24", icon: TrendingUp, color: "text-blue-600", bg: "bg-blue-50" },
//                   ].map((stat) => (
//                     <div
//                       key={stat.label}
//                       className="bg-white rounded-xl border border-slate-100 p-3 shadow-sm"
//                     >
//                       <div className={`w-7 h-7 ${stat.bg} rounded-lg flex items-center justify-center mb-2`}>
//                         <stat.icon className={`w-3.5 h-3.5 ${stat.color}`} />
//                       </div>
//                       <p className="font-heading font-bold text-slate-900 text-lg leading-none">
//                         {stat.value}
//                       </p>
//                       <p className="text-slate-400 text-xs mt-0.5">{stat.label}</p>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Recent Tutors */}
//                 <div>
//                   <div className="flex items-center justify-between mb-3">
//                     <p className="font-semibold text-slate-900 text-sm">
//                       Recent Tutors
//                     </p>
//                     <button className="text-indigo-500 text-xs flex items-center gap-0.5">
//                       View all <ChevronRight className="w-3 h-3" />
//                     </button>
//                   </div>
//                   <div className="space-y-2">
//                     {recentTutors.map((tutor) => (
//                       <div
//                         key={tutor.name}
//                         className="flex items-center justify-between py-2.5 px-3 rounded-xl hover:bg-slate-50 transition-colors"
//                       >
//                         <div className="flex items-center gap-3">
//                           <div
//                             className={`w-8 h-8 rounded-xl bg-gradient-to-br ${tutor.color} flex items-center justify-center text-white text-xs font-bold`}
//                           >
//                             {tutor.initials}
//                           </div>
//                           <div>
//                             <p className="text-sm font-semibold text-slate-900">
//                               {tutor.name}
//                             </p>
//                             <p className="text-xs text-slate-400">{tutor.subject}</p>
//                           </div>
//                         </div>
//                         <span
//                           className={`text-xs px-2.5 py-1 rounded-full font-semibold ${
//                             tutor.status === "Active"
//                               ? "badge-online"
//                               : "bg-amber-50 text-amber-600 border border-amber-200"
//                           }`}
//                         >
//                           {tutor.status}
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* Right Panel - Chat Preview */}
//               <div className="w-56 border-l border-slate-100 bg-slate-50 p-4 flex-shrink-0 hidden xl:block">
//                 <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
//                   Messages
//                 </p>
//                 <div className="space-y-3">
//                   {["Priya Sharma", "Rahul Verma"].map((name, i) => (
//                     <div
//                       key={name}
//                       className={`p-3 rounded-xl cursor-pointer transition-colors ${
//                         i === 0 ? "bg-white border border-indigo-100 shadow-sm" : "hover:bg-white"
//                       }`}
//                     >
//                       <p className="text-xs font-semibold text-slate-900 mb-1">{name}</p>
//                       <p className="text-xs text-slate-400 truncate">
//                         {i === 0
//                           ? "Sure! I'm available on weekends..."
//                           : "Can we schedule for 5pm?"}
//                       </p>
//                       <p className="text-xs text-indigo-400 mt-1">
//                         {i === 0 ? "2 min ago" : "1 hr ago"}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
