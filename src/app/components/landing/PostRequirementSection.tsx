// "use client";

// import { useState } from "react";
// import { BookOpen, DollarSign, Monitor, FileText, Send, Zap, CheckCircle } from "lucide-react";

// export default function PostRequirementSection() {
//   const [formData, setFormData] = useState({
//     subject: "",
//     budget: "",
//     mode: "",
//     description: "",
//     location: "",
//   });
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setSubmitted(true);
//     setTimeout(() => setSubmitted(false), 3000);
//   };

//   return (
//     <section
//       id="post-requirement"
//       className="py-24 relative overflow-hidden"
//       style={{
//         background:
//           "linear-gradient(135deg, #0f172a 0%, #1e1b4b 40%, #312e81 70%, #4c1d95 100%)",
//       }}
//     >
//       {/* Background elements */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl animate-blob" />
//         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl animate-blob-delay-1" />
//         <div
//           className="absolute inset-0 opacity-5"
//           style={{
//             backgroundImage:
//               "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.5) 1px, transparent 0)",
//             backgroundSize: "32px 32px",
//           }}
//         />
//       </div>

//       <div className="container-xl relative z-10">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {/* Left: CTA Content */}
//           <div className="text-white">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 text-white/80 text-sm font-medium mb-6">
//               <Zap className="w-3.5 h-3.5 text-yellow-400" />
//               Get matched instantly
//             </div>

//             <h2 className="text-3xl md:text-4xl xl:text-5xl font-heading font-extrabold leading-tight mb-6">
//               Can&apos;t Find the{" "}
//               <br />
//               <span className="bg-gradient-to-r from-indigo-300 via-violet-300 to-purple-300 bg-clip-text text-transparent">
//                 Right Tutor?
//               </span>
//             </h2>

//             <p className="text-white/65 text-lg leading-relaxed mb-8 max-w-md">
//               Post your learning requirement and let the top tutors come to you.
//               Get personalized responses within hours.
//             </p>

//             {/* Features */}
//             <div className="space-y-4">
//               {[
//                 "5,000+ tutors will see your requirement",
//                 "Get responses within 24 hours",
//                 "100% free to post — no credit card needed",
//                 "Compare tutors & choose the best fit",
//               ].map((text) => (
//                 <div key={text} className="flex items-center gap-3 text-white/80">
//                   <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
//                   <span className="text-sm">{text}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right: Form */}
//           <div className="glass rounded-3xl p-8 border border-white/15 shadow-2xl">
//             <h3 className="font-heading font-bold text-white text-2xl mb-2">
//               Post Your Requirement
//             </h3>
//             <p className="text-white/50 text-sm mb-7">
//               It takes less than 2 minutes
//             </p>

//             {submitted ? (
//               <div className="flex flex-col items-center justify-center py-12 gap-4">
//                 <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center animate-pulse-glow">
//                   <CheckCircle className="w-8 h-8 text-white" />
//                 </div>
//                 <p className="font-heading font-bold text-white text-xl">
//                   Requirement Posted!
//                 </p>
//                 <p className="text-white/60 text-sm text-center">
//                   Tutors will start contacting you shortly.
//                 </p>
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 {/* Subject */}
//                 <div>
//                   <label className="text-white/70 text-xs font-semibold uppercase tracking-wider block mb-2">
//                     Subject / Skill
//                   </label>
//                   <div className="relative">
//                     <BookOpen className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-indigo-400 w-4 h-4" />
//                     <input
//                       type="text"
//                       id="post-req-subject"
//                       placeholder="e.g., Mathematics, Python, IELTS"
//                       value={formData.subject}
//                       onChange={(e) =>
//                         setFormData({ ...formData, subject: e.target.value })
//                       }
//                       className="input-premium w-full pl-10 pr-4 py-3 rounded-xl text-sm"
//                     />
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-2 gap-4">
//                   {/* Budget */}
//                   <div>
//                     <label className="text-white/70 text-xs font-semibold uppercase tracking-wider block mb-2">
//                       Budget / Hour
//                     </label>
//                     <div className="relative">
//                       <DollarSign className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-indigo-400" />
//                       <input
//                         type="text"
//                         id="post-req-budget"
//                         placeholder="₹500 – ₹1500"
//                         value={formData.budget}
//                         onChange={(e) =>
//                           setFormData({ ...formData, budget: e.target.value })
//                         }
//                         className="input-premium w-full pl-10 pr-4 py-3 rounded-xl text-sm"
//                       />
//                     </div>
//                   </div>

//                   {/* Mode */}
//                   <div>
//                     <label className="text-white/70 text-xs font-semibold uppercase tracking-wider block mb-2">
//                       Mode
//                     </label>
//                     <div className="relative">
//                       <Monitor className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-indigo-400" />
//                       <select
//                         id="post-req-mode"
//                         value={formData.mode}
//                         onChange={(e) =>
//                           setFormData({ ...formData, mode: e.target.value })
//                         }
//                         className="input-premium w-full pl-10 pr-4 py-3 rounded-xl text-sm appearance-none cursor-pointer"
//                       >
//                         <option value="" className="bg-slate-800">
//                           Select Mode
//                         </option>
//                         <option value="online" className="bg-slate-800">
//                           Online
//                         </option>
//                         <option value="offline" className="bg-slate-800">
//                           Offline
//                         </option>
//                         <option value="home" className="bg-slate-800">
//                           Home Tuition
//                         </option>
//                       </select>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Location */}
//                 <div>
//                   <label className="text-white/70 text-xs font-semibold uppercase tracking-wider block mb-2">
//                     Location
//                   </label>
//                   <input
//                     type="text"
//                     id="post-req-location"
//                     placeholder="Your city or area"
//                     value={formData.location}
//                     onChange={(e) =>
//                       setFormData({ ...formData, location: e.target.value })
//                     }
//                     className="input-premium w-full px-4 py-3 rounded-xl text-sm"
//                   />
//                 </div>

//                 {/* Description */}
//                 <div>
//                   <label className="text-white/70 text-xs font-semibold uppercase tracking-wider block mb-2">
//                     Describe Your Requirement
//                   </label>
//                   <div className="relative">
//                     <FileText className="absolute left-3.5 top-3.5 w-4 h-4 text-indigo-400" />
//                     <textarea
//                       id="post-req-description"
//                       placeholder="E.g., I need a tutor for Class 10 Maths, specifically Trigonometry. Prefer home tuition on weekends..."
//                       value={formData.description}
//                       onChange={(e) =>
//                         setFormData({ ...formData, description: e.target.value })
//                       }
//                       rows={4}
//                       className="input-premium w-full pl-10 pr-4 py-3 rounded-xl text-sm resize-none"
//                     />
//                   </div>
//                 </div>

//                 {/* Submit */}
//                 <button
//                   type="submit"
//                   id="post-req-submit"
//                   className="btn-primary w-full flex items-center justify-center gap-2.5 py-4 rounded-xl font-bold text-white text-base shadow-lg"
//                 >
//                   <Send className="w-5 h-5" />
//                   Post Requirement Free
//                 </button>

//                 <p className="text-white/35 text-xs text-center">
//                   By posting, you agree to our Terms of Service & Privacy Policy
//                 </p>
//               </form>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
