import React from "react";
import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";
import { FileText, Folder, Video, Link2, Clock, Eye, ShoppingCart, Search } from "lucide-react";

export default function ResourcesPage() {
  const resources = [
    {
      type: "Assignment",
      typeIcon: <FileText className="w-3.5 h-3.5" />,
      category: "Mathematics",
      categoryIcon: <Folder className="w-3.5 h-3.5" />,
      title: "Mathematics Fundamentals",
      description: "Comprehensive guide to basic mathematics concepts including algebra, geometry, and calculus.",
      date: "Mar 4, 2025",
      price: "29.99",
      postedBy: "Sahil Laskar",
    },
    {
      type: "Video",
      typeIcon: <Video className="w-3.5 h-3.5" />,
      category: "Physics",
      categoryIcon: <Folder className="w-3.5 h-3.5" />,
      title: "Physics Video Series",
      description: "Complete video series covering classical mechanics, thermodynamics, and quantum physics.",
      date: "Mar 4, 2025",
      price: "49.99",
      postedBy: "Sahil Laskar",
    },
    {
      type: "Link",
      typeIcon: <Link2 className="w-3.5 h-3.5" />,
      category: "Chemistry",
      categoryIcon: <Folder className="w-3.5 h-3.5" />,
      title: "Chemistry Interactive Lab",
      description: "Interactive virtual chemistry laboratory with experiments and simulations.",
      date: "Mar 4, 2025",
      price: "39.99",
      postedBy: "Sahil Laskar",
    },
    {
      type: "Video",
      typeIcon: <Video className="w-3.5 h-3.5" />,
      category: "Physics",
      categoryIcon: <Folder className="w-3.5 h-3.5" />,
      title: "Physics Video Series",
      description: "Complete video series covering classical mechanics, thermodynamics, and quantum physics.",
      date: "Mar 4, 2025",
      price: "49.99",
      postedBy: "Sahil Laskar",
    },
    {
      type: "Link",
      typeIcon: <Link2 className="w-3.5 h-3.5" />,
      category: "Chemistry",
      categoryIcon: <Folder className="w-3.5 h-3.5" />,
      title: "Chemistry Interactive Lab",
      description: "Interactive virtual chemistry laboratory with experiments and simulations.",
      date: "Mar 4, 2025",
      price: "39.99",
      postedBy: "Sahil Laskar",
    }, {
      type: "Video",
      typeIcon: <Video className="w-3.5 h-3.5" />,
      category: "Physics",
      categoryIcon: <Folder className="w-3.5 h-3.5" />,
      title: "Physics Video Series",
      description: "Complete video series covering classical mechanics, thermodynamics, and quantum physics.",
      date: "Mar 4, 2025",
      price: "49.99",
      postedBy: "Sahil Laskar",
    }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      {/* Hero Section */}
      <div
        className="relative pt-32 pb-24 px-4 flex flex-col items-center justify-center bg-slate-900"
        style={{
          backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Learning Resources
        </h1>
        <p className="text-lg text-white/90 max-w-2xl text-center">
          Discover high-quality educational materials to enhance your learning journey
        </p>
      </div>

      <div className="flex-grow container-xl max-w-7xl mx-auto w-full px-4 pt-10 pb-24">

        {/* Search Input */}
        <div className="flex justify-center mb-8 mt-8">
          <div className="flex items-center w-full max-w-2xl bg-white border border-slate-200 rounded-xl px-4 py-3 shadow-sm">
            <Search className="w-5 h-5 text-slate-400 mr-3 flex-shrink-0" />
            <input
              type="text"
              placeholder="Search resources..."
              className="w-full focus:outline-none text-sm text-slate-700 bg-transparent"
            />
          </div>
        </div>

        {/* Filters Bar */}
        <div className="bg-white border border-slate-200 rounded-xl p-4 md:p-6 shadow-sm mb-12 flex flex-col md:flex-row items-center justify-between gap-6">

          <div className="flex items-center gap-4 w-full md:w-auto">
            <span className="font-bold text-[#c25c0e] text-sm whitespace-nowrap">Price Range:</span>
            <div className="flex items-center gap-3">
              <input type="text" placeholder="Min Price" className="w-24 px-3 py-2.5 border border-[#f3da90] bg-slate-50/30 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#c25c0e] text-slate-600" />
              <span className="text-[#c25c0e] font-medium">-</span>
              <input type="text" placeholder="Max Price" className="w-24 px-3 py-2.5 border border-[#f3da90] bg-slate-50/30 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#c25c0e] text-slate-600" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 w-full md:w-auto">
            <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
              <span className="font-bold text-[#c25c0e] text-sm">Category:</span>
              <select className="px-4 py-2.5 border border-[#c25c0e] bg-white text-[#c25c0e] rounded-lg text-sm font-medium focus:outline-none w-40 cursor-pointer">
                <option>All Resources</option>
                <option>Mathematics</option>
                <option>Physics</option>
                <option>Chemistry</option>
              </select>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
              <span className="font-bold text-[#c25c0e] text-sm whitespace-nowrap">Price Range:</span>
              <select className="px-4 py-2.5 border border-[#c25c0e] bg-white text-[#c25c0e] rounded-lg text-sm font-medium focus:outline-none w-40 cursor-pointer">
                <option>All Prices</option>
                <option>Free</option>
                <option>Paid</option>
              </select>
            </div>
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-6">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 text-left hover:shadow-md transition-shadow flex flex-col h-full">

              {/* Tags */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-600 rounded-lg text-xs font-semibold">
                  {resource.typeIcon}
                  <span>{resource.type}</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 text-blue-600 rounded-lg text-xs font-semibold">
                  {resource.categoryIcon}
                  <span>{resource.category}</span>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-bold text-slate-900 mb-2">{resource.title}</h3>
              <p className="text-sm text-slate-500 mb-5 leading-relaxed line-clamp-2">
                {resource.description}
              </p>

              <div className="mt-auto">
                {/* Date Pill */}
                <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-xl text-xs font-medium text-slate-600 mb-4 w-full">
                  <Clock className="w-4 h-4 text-blue-600" />
                  {resource.date}
                </div>

                {/* Bottom Row 1: Price and Buttons */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-emerald-500 font-bold px-2 py-1 bg-emerald-50 rounded-lg text-sm">
                    Rs {resource.price}
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
                      <Eye className="w-4 h-4" />
                      Preview
                    </button>
                    <button className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                      <ShoppingCart className="w-4 h-4" />
                      Purchase
                    </button>
                  </div>
                </div>

                {/* Bottom Row 2: Posted By */}
                <div className="text-right text-xs font-bold text-slate-800">
                  Posted By:- {resource.postedBy}
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
