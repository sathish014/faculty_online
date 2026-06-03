import React from "react";

export default function PromoBannerSection() {
  return (
    <section className="py-12 bg-white">
      <div className="container-xl px-4 md:px-8 max-w-[1340px] mx-auto flex flex-col gap-12">
        
        {/* Dark Banner: Build your career */}
        <div className="bg-[#1c1d1f] rounded-xl overflow-hidden flex flex-col md:flex-row items-center">
          <div className="p-8 md:p-16 flex-1 text-white">
            <h2 className="text-3xl font-bold mb-4 font-serif" style={{ fontFamily: "Georgia, serif" }}>
              Build your career with a Personal Plan subscription
            </h2>
            <p className="mb-8 text-white/90">
              Get unlimited access to thousands of top-rated courses and Mentors for a low monthly fee.
            </p>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-sm">
              <li className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs">✓</div>
                Access to 10,000+ courses
              </li>
              <li className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs">✓</div>
                Learn on your schedule
              </li>
              <li className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs">✓</div>
                Expert-led live sessions
              </li>
              <li className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs">✓</div>
                Certificate of completion
              </li>
            </ul>

            <button className="bg-white text-slate-900 font-bold py-3 px-6 hover:bg-slate-200 transition-colors">
              Explore plan
            </button>
            <p className="text-xs text-white/60 mt-4">Learn more about subscriptions</p>
          </div>
          
          <div className="w-full md:w-[450px] h-64 md:h-auto self-stretch bg-purple-900 relative">
            {/* A colorful geometric pattern background placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#a435f0] to-[#5624d0]"></div>
            <img 
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2000&auto=format&fit=crop" 
              alt="Student" 
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-80" 
            />
          </div>
        </div>

      </div>
    </section>
  );
}
