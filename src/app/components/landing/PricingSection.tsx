// "use client";

// import { Check, Sparkles, Crown, Zap, ArrowRight } from "lucide-react";

// const plans = [
//   {
//     id: "plan-free",
//     name: "Free",
//     price: "₹0",
//     period: "forever",
//     description: "Get started and explore the platform",
//     icon: Zap,
//     color: "from-slate-400 to-slate-500",
//     features: [
//       "Basic profile listing",
//       "Apply to 5 student requests/month",
//       "Standard search visibility",
//       "Basic analytics",
//       "Community support",
//     ],
//     unavailable: [
//       "Featured profile placement",
//       "Priority student leads",
//       "Premium badge",
//       "Advanced analytics",
//     ],
//     cta: "Get Started Free",
//     ctaStyle: "border border-slate-300 text-slate-700 hover:bg-slate-50",
//     popular: false,
//   },
//   {
//     id: "plan-premium",
//     name: "Premium",
//     price: "₹999",
//     period: "per month",
//     description: "For serious tutors who want to scale",
//     icon: Crown,
//     color: "from-indigo-500 to-violet-600",
//     features: [
//       "Featured profile in search results",
//       "Unlimited student request applications",
//       "Priority student lead notifications",
//       "Premium ✓ badge on profile",
//       "Advanced analytics & insights",
//       "Top ranking in category listings",
//       "Direct chat with students",
//       "Dedicated tutor support",
//     ],
//     unavailable: [],
//     cta: "Start Premium – ₹999/mo",
//     ctaStyle: "btn-primary text-white",
//     popular: true,
//   },
// ];

// export default function PricingSection() {
//   return (
//     <section
//       id="pricing"
//       className="py-24 relative overflow-hidden"
//       style={{
//         background: "linear-gradient(180deg, #f8faff 0%, #eef2ff 50%, #f8faff 100%)",
//       }}
//     >
//       {/* Background blobs */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-indigo-200/40 rounded-full blur-3xl" />
//         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-200/30 rounded-full blur-3xl" />
//       </div>

//       <div className="container-xl relative z-10">
//         {/* Header */}
//         <div className="text-center mb-14">
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-700 text-sm font-semibold mb-4">
//             <Sparkles className="w-3.5 h-3.5" />
//             Simple Pricing for Tutors
//           </div>
//           <h2 className="text-3xl md:text-4xl xl:text-5xl font-heading font-extrabold text-slate-900 mb-4">
//             Invest in Your{" "}
//             <span className="gradient-text">Teaching Career</span>
//           </h2>
//           <p className="text-slate-500 text-lg max-w-xl mx-auto">
//             Start free and upgrade when you&apos;re ready. Premium members earn 3x more
//             students on average.
//           </p>
//         </div>

//         {/* Pricing Cards */}
//         <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
//           {plans.map((plan) => (
//             <div
//               key={plan.id}
//               id={plan.id}
//               className={`relative rounded-3xl overflow-hidden transition-all duration-300 ${
//                 plan.popular
//                   ? "ring-2 ring-indigo-500/50 shadow-2xl shadow-indigo-500/20 scale-[1.02]"
//                   : "border border-slate-200 bg-white shadow-lg hover:shadow-xl"
//               }`}
//             >
//               {plan.popular && (
//                 <>
//                   {/* Gradient background for premium */}
//                   <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700" />
//                   {/* Pattern overlay */}
//                   <div
//                     className="absolute inset-0 opacity-5"
//                     style={{
//                       backgroundImage:
//                         "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
//                       backgroundSize: "24px 24px",
//                     }}
//                   />
//                 </>
//               )}

//               {plan.popular && (
//                 <div className="relative z-10 text-center py-2 bg-white/15 border-b border-white/15">
//                   <span className="text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-1.5">
//                     <Crown className="w-3.5 h-3.5 text-yellow-300" />
//                     Most Popular — 3x More Students
//                   </span>
//                 </div>
//               )}

//               <div className={`relative z-10 p-8 ${plan.popular ? "bg-white/0" : "bg-white"}`}>
//                 {/* Plan icon & name */}
//                 <div className="flex items-center gap-3 mb-5">
//                   <div
//                     className={`w-11 h-11 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center shadow-md`}
//                   >
//                     <plan.icon className="w-5 h-5 text-white" />
//                   </div>
//                   <div>
//                     <h3
//                       className={`font-heading font-bold text-xl ${
//                         plan.popular ? "text-white" : "text-slate-900"
//                       }`}
//                     >
//                       {plan.name}
//                     </h3>
//                     <p
//                       className={`text-sm ${plan.popular ? "text-white/60" : "text-slate-400"}`}
//                     >
//                       {plan.description}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Price */}
//                 <div className="mb-7">
//                   <div className="flex items-baseline gap-2">
//                     <span
//                       className={`text-5xl font-heading font-extrabold ${
//                         plan.popular ? "text-white" : "text-slate-900"
//                       }`}
//                     >
//                       {plan.price}
//                     </span>
//                     <span
//                       className={`text-sm ${plan.popular ? "text-white/60" : "text-slate-400"}`}
//                     >
//                       /{plan.period}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Features */}
//                 <ul className="space-y-3 mb-8">
//                   {plan.features.map((feature) => (
//                     <li key={feature} className="flex items-center gap-2.5">
//                       <div
//                         className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
//                           plan.popular
//                             ? "bg-white/20"
//                             : "bg-indigo-50"
//                         }`}
//                       >
//                         <Check
//                           className={`w-3 h-3 ${
//                             plan.popular ? "text-white" : "text-indigo-600"
//                           }`}
//                         />
//                       </div>
//                       <span
//                         className={`text-sm ${
//                           plan.popular ? "text-white/85" : "text-slate-600"
//                         }`}
//                       >
//                         {feature}
//                       </span>
//                     </li>
//                   ))}
//                   {plan.unavailable.map((feature) => (
//                     <li
//                       key={feature}
//                       className="flex items-center gap-2.5 opacity-40"
//                     >
//                       <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
//                         <span className="text-slate-400 text-xs font-bold">—</span>
//                       </div>
//                       <span className="text-sm text-slate-400 line-through">
//                         {feature}
//                       </span>
//                     </li>
//                   ))}
//                 </ul>

//                 {/* CTA Button */}
//                 <button
//                   id={`${plan.id}-cta`}
//                   className={`w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-sm transition-all duration-300 ${plan.ctaStyle}`}
//                 >
//                   {plan.popular && <Crown className="w-4 h-4 text-yellow-300" />}
//                   {plan.cta}
//                   <ArrowRight className="w-4 h-4" />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Bottom note */}
//         <p className="text-center text-slate-400 text-sm mt-8">
//           Students always use the platform for free. Premium plans are for tutors only.
//         </p>
//       </div>
//     </section>
//   );
// }
