// "use client";

// import { useState } from "react";
// import { ChevronDown, HelpCircle } from "lucide-react";

// const faqs = [
//   {
//     id: "faq-1",
//     question: "How do I find the right tutor?",
//     answer:
//       "Use our smart search to filter tutors by subject, location, teaching mode (online/offline/home), rating, experience, and budget. You can also post your requirement and receive tutor responses directly. Browse profiles, read reviews, and connect with your preferred tutor instantly.",
//   },
//   {
//     id: "faq-2",
//     question: "Can I teach online through Faculties Online?",
//     answer:
//       "Absolutely! You can register as a tutor and set your availability for online sessions. Students can find and connect with you based on your listed skills and availability. Our platform supports online, offline, and home tuition modes, giving you complete flexibility.",
//   },
//   {
//     id: "faq-3",
//     question: "How does the payment system work?",
//     answer:
//       "Payments are handled securely through our integrated wallet system. Students can add funds to their wallet and pay tutors directly after sessions. Tutors receive payments into their platform wallet, from which they can withdraw to their bank account. We support UPI, net banking, and credit/debit cards.",
//   },
//   {
//     id: "faq-4",
//     question: "Is home tuition available on the platform?",
//     answer:
//       "Yes! Home tuition is one of our primary offerings. You can search specifically for home tutors in your area, or post a requirement specifying that you need home tuition. Tutors willing to travel to your location will respond with their availability and pricing.",
//   },
//   {
//     id: "faq-5",
//     question: "What is the Premium Membership for tutors?",
//     answer:
//       "Premium Membership gives tutors a significant competitive advantage — featured profile placement, priority notifications for student requests, a premium badge, unlimited applications, and advanced analytics. Premium tutors receive 3x more student inquiries on average compared to free accounts.",
//   },
//   {
//     id: "faq-6",
//     question: "How are tutors verified?",
//     answer:
//       "All tutors on Faculties Online go through a verification process that includes identity verification, qualification checking, and background screening. Verified tutors display a checkmark badge on their profile, so students can trust the credentials of every educator they connect with.",
//   },
// ];

// export default function FAQSection() {
//   const [openId, setOpenId] = useState<string | null>("faq-1");

//   return (
//     <section id="faq" className="py-24 bg-white">
//       <div className="container-xl">
//         <div className="grid lg:grid-cols-2 gap-16 items-start">
//           {/* Left */}
//           <div className="lg:sticky lg:top-32">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-semibold mb-6">
//               <HelpCircle className="w-3.5 h-3.5" />
//               Got Questions?
//             </div>
//             <h2 className="text-3xl md:text-4xl xl:text-5xl font-heading font-extrabold text-slate-900 mb-5">
//               Frequently Asked{" "}
//               <span className="gradient-text">Questions</span>
//             </h2>
//             <p className="text-slate-500 text-lg leading-relaxed mb-8">
//               Everything you need to know about Faculties Online. Can&apos;t find an answer?
//               Reach out to our support team anytime.
//             </p>

//             <a
//               href="mailto:support@facultiesonline.com"
//               id="faq-contact-support-btn"
//               className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl btn-primary text-white font-semibold text-sm shadow-lg"
//             >
//               Contact Support
//             </a>

//             {/* FAQ illustration */}
//             <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-violet-50 border border-indigo-100">
//               <div className="text-4xl mb-3">💬</div>
//               <p className="font-heading font-bold text-slate-900 text-lg mb-1">
//                 Still have questions?
//               </p>
//               <p className="text-slate-500 text-sm">
//                 Our support team is available 24/7 to help you get the most out of Faculties Online.
//               </p>
//             </div>
//           </div>

//           {/* Right: FAQ Accordion */}
//           <div className="space-y-3">
//             {faqs.map((faq) => {
//               const isOpen = openId === faq.id;
//               return (
//                 <div
//                   key={faq.id}
//                   id={faq.id}
//                   className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
//                     isOpen
//                       ? "border-indigo-200 bg-gradient-to-br from-indigo-50/80 to-violet-50/80 shadow-md"
//                       : "border-slate-100 bg-white hover:border-indigo-100 hover:bg-slate-50"
//                   }`}
//                 >
//                   <button
//                     onClick={() => setOpenId(isOpen ? null : faq.id)}
//                     className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
//                     aria-expanded={isOpen}
//                   >
//                     <span
//                       className={`font-semibold text-base leading-snug transition-colors ${
//                         isOpen ? "text-indigo-700" : "text-slate-900"
//                       }`}
//                     >
//                       {faq.question}
//                     </span>
//                     <div
//                       className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
//                         isOpen
//                           ? "bg-indigo-600 text-white rotate-180"
//                           : "bg-slate-100 text-slate-400"
//                       }`}
//                     >
//                       <ChevronDown className="w-4 h-4" />
//                     </div>
//                   </button>

//                   <div
//                     className={`overflow-hidden transition-all duration-400 ease-in-out ${
//                       isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
//                     }`}
//                     style={{ transition: "max-height 0.4s ease, opacity 0.3s ease" }}
//                   >
//                     <div className="px-6 pb-5">
//                       <div className="h-px bg-gradient-to-r from-indigo-200 to-violet-200 mb-4" />
//                       <p className="text-slate-600 text-sm leading-relaxed">
//                         {faq.answer}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
