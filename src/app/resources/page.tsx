import React from "react";
import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";
import { FileText, Folder, Video, Link2, Clock, Eye, ShoppingCart, Search, BookOpen } from "lucide-react";

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
    }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative pt-36 pb-16 px-4 bg-white border-b border-[#1A1A24]/5">
        <div className="max-w-7xl mx-auto text-center space-y-4 animate-fade-up">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-[#4D148C]/15 text-[#4D148C] border border-[#4D148C]/30 uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" /> Study & Teaching Library
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-[#1A1A24] tracking-tight">
            Learning <span className="text-[#ff6200]">Resources</span>
          </h1>
          <p className="text-base md:text-lg font-medium text-[#1A1A24]/70 max-w-2xl mx-auto">
            Discover curated assignments, video courses, and interactive study labs posted by expert faculty.
          </p>
        </div>
      </div>

      <div className="flex-grow max-w-7xl mx-auto w-full px-4 pt-8 pb-24">

        {/* Search Input */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center w-full max-w-2xl bg-white/80 border border-[#1A1A24]/10 rounded-2xl px-4 py-3 shadow-sm focus-within:border-[#ff6200] focus-within:ring-2 focus-within:ring-[#ff6200]/20 transition-all">
            <Search className="w-5 h-5 text-[#1A1A24]/40 mr-3 flex-shrink-0" />
            <input
              type="text"
              placeholder="Search study materials, subjects, or keywords..."
              className="w-full focus:outline-none text-sm font-medium text-[#1A1A24] bg-transparent"
            />
          </div>
        </div>

        {/* Filters Bar */}
        <div className="bg-white/80 border border-[#1A1A24]/10 rounded-3xl p-5 shadow-sm mb-12 flex flex-col md:flex-row items-center justify-between gap-6 animate-fade-up">

          <div className="flex items-center gap-4 w-full md:w-auto">
            <span className="font-extrabold text-[#1A1A24] text-xs uppercase tracking-wider whitespace-nowrap">Price Range:</span>
            <div className="flex items-center gap-2">
              <input type="text" placeholder="Min ₹" className="w-24 px-3 py-2 border border-[#1A1A24]/15 bg-[#1A1A24]/5 rounded-xl text-sm font-bold focus:outline-none focus:border-[#ff6200] text-[#1A1A24]" />
              <span className="text-[#1A1A24]/40 font-bold">-</span>
              <input type="text" placeholder="Max ₹" className="w-24 px-3 py-2 border border-[#1A1A24]/15 bg-[#1A1A24]/5 rounded-xl text-sm font-bold focus:outline-none focus:border-[#ff6200] text-[#1A1A24]" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
              <span className="font-extrabold text-[#1A1A24] text-xs uppercase tracking-wider">Category:</span>
              <select className="px-4 py-2.5 border border-[#1A1A24]/15 bg-white text-[#1A1A24] rounded-xl text-sm font-bold focus:outline-none focus:border-[#ff6200] w-44 cursor-pointer">
                <option>All Resources</option>
                <option>Mathematics</option>
                <option>Physics</option>
                <option>Chemistry</option>
              </select>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
              <span className="font-extrabold text-[#1A1A24] text-xs uppercase tracking-wider">Type:</span>
              <select className="px-4 py-2.5 border border-[#1A1A24]/15 bg-white text-[#1A1A24] rounded-xl text-sm font-bold focus:outline-none focus:border-[#ff6200] w-36 cursor-pointer">
                <option>All Types</option>
                <option>Free</option>
                <option>Paid</option>
              </select>
            </div>
          </div>

        </div>

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-black text-[#1A1A24] tracking-tight">Available Resources</h2>
          <span className="text-sm font-bold text-[#1A1A24]/60">{resources.length} study materials</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-8">
          {resources.map((resource, index) => (
            <div key={index} className="card-minimal bg-white/80 p-6 rounded-3xl border border-[#1A1A24]/10 hover:border-[#4D148C]/40 hover:shadow-lg transition-all flex flex-col h-full group">

              {/* Tags */}
              <div className="flex items-center gap-2.5 mb-4">
                <span className="flex items-center gap-1.5 px-3 py-1 bg-[#4D148C]/10 text-[#4D148C] rounded-xl text-xs font-extrabold">
                  {resource.typeIcon}
                  <span>{resource.type}</span>
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-[#ff6200]/10 text-[#ff6200] rounded-xl text-xs font-extrabold">
                  {resource.categoryIcon}
                  <span>{resource.category}</span>
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-extrabold text-[#1A1A24] mb-2 group-hover:text-[#ff6200] transition-colors">{resource.title}</h3>
              <p className="text-sm font-medium text-[#1A1A24]/70 mb-6 leading-relaxed line-clamp-2">
                {resource.description}
              </p>

              <div className="mt-auto pt-4 border-t border-[#1A1A24]/10">
                {/* Date Pill */}
                <div className="flex items-center gap-2 text-xs font-bold text-[#1A1A24]/50 mb-4">
                  <Clock className="w-3.5 h-3.5 text-[#ff6200]" />
                  Uploaded on {resource.date}
                </div>

                {/* Bottom Row 1: Price and Buttons */}
                <div className="flex items-center justify-between mb-3">
                  <div className="font-black text-lg text-[#1A1A24] bg-[#1A1A24]/5 px-3 py-1 rounded-xl border border-[#1A1A24]/5">
                    ₹{resource.price}
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="flex items-center gap-1.5 px-3 py-2 bg-[#1A1A24]/5 text-[#1A1A24] rounded-xl text-xs font-bold hover:bg-[#1A1A24]/10 transition-colors">
                      <Eye className="w-3.5 h-3.5" />
                      Preview
                    </button>
                    <button className="flex items-center gap-1.5 px-3.5 py-2 btn-coral rounded-xl text-xs font-bold transition-all shadow-sm active:scale-95">
                      <ShoppingCart className="w-3.5 h-3.5" />
                      Buy
                    </button>
                  </div>
                </div>

                {/* Bottom Row 2: Posted By */}
                <div className="text-right text-xs font-extrabold text-[#1A1A24]/70">
                  By <span className="text-[#4D148C]">{resource.postedBy}</span>
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

