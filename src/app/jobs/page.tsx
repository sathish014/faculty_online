import React from "react";
import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";
import { Coins } from "lucide-react";

export default function JobsPage() {
  const jobs = [
    {
      title: "JavaScript Programming (DOM, ES6, React)",
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alter...",
      rate: "₹3000/hr",
      mode: "Online",
      coins: 215,
    },
    {
      title: "PHP Programming (Web Development, MVC)",
      description: "Learn PHP programming for web development, including working with databases, understanding MVC archi...",
      rate: "₹2800/hr",
      mode: "Offline",
      coins: 418,
    }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-slate-50 mt-15">
      <Navbar />
      <div className="flex-grow container-xl pt-32 pb-24 px-4 max-w-7xl mx-auto w-full">

        {/* Search Bar Section */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 mb-10 mt-8">
          <div className="flex flex-col md:flex-row items-end gap-4">

            <div className="flex-1 w-full">
              <label className="block text-sm font-medium text-slate-600 mb-1.5">Search</label>
              <input
                type="text"
                placeholder="Job title or description"
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm"
              />
            </div>

            <div className="w-full md:w-48">
              <label className="block text-sm font-medium text-slate-600 mb-1.5">Job Type</label>
              <select className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm bg-white">
                <option>All Types</option>
                <option>Full Time</option>
                <option>Part Time</option>
              </select>
            </div>

            <div className="w-full md:w-48">
              <label className="block text-sm font-medium text-slate-600 mb-1.5">Price Range</label>
              <select className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm bg-white">
                <option>Any Price</option>
                <option>Low to High</option>
                <option>High to Low</option>
              </select>
            </div>

            <button className="w-full md:w-auto px-8 py-2.5 bg-[#0a0f2c] text-white font-medium rounded-lg hover:bg-slate-800 transition-colors text-sm h-[42px]">
              Search
            </button>
          </div>
        </div>

        <h2 className="text-xl font-bold text-slate-900 mb-6 tracking-tight">Available Faculties Jobs</h2>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {jobs.map((job, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow flex flex-col h-full">

              <h3 className="text-[17px] font-bold text-slate-900 mb-3 leading-snug">
                {job.title}
              </h3>

              <p className="text-sm text-slate-500 mb-5 leading-relaxed line-clamp-3">
                {job.description}
              </p>

              <div className="mt-auto flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-medium">{job.rate}</span>
                  {job.mode === "Online" ? (
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                      Online
                    </span>
                  ) : (
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                      Offline
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-1.5 text-slate-500 text-sm font-medium">
                    <Coins className="w-4 h-4 text-slate-400" />
                    <span>{job.coins} Coins</span>
                  </div>
                  <button className="text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors">
                    View Details
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
