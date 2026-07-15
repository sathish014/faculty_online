"use client";

import React, { useState } from "react";
import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";
import CourseCard, { type CourseCardData } from "../components/cards/CourseCard";
import { Search, SlidersHorizontal, ChevronDown, X, BookOpen } from "lucide-react";

const courses: CourseCardData[] = [
  {
    id: "c1", slug: "complete-web-development",
    thumbnail: "https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?q=80&w=400&auto=format&fit=crop",
    title: "Complete Web Development Bootcamp 2026",
    instructor: "Amit Patel", rating: 4.8, reviewCount: 3412,
    duration: "42h", studentCount: "18K+", difficulty: "Beginner",
    price: "₹1,299", originalPrice: "₹4,999", category: "Web Dev", isBestseller: true,
  },
  {
    id: "c2", slug: "python-data-science",
    thumbnail: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=400&auto=format&fit=crop",
    title: "Python for Data Science & Machine Learning",
    instructor: "Vikram Malhotra", rating: 4.9, reviewCount: 2187,
    duration: "36h", studentCount: "12K+", difficulty: "Intermediate",
    price: "₹1,499", originalPrice: "₹5,999", category: "Data Science", isBestseller: true,
  },
  {
    id: "c3", slug: "jee-mathematics-masterclass",
    thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=400&auto=format&fit=crop",
    title: "JEE Mathematics Masterclass – All Topics",
    instructor: "Priya Sharma", rating: 4.9, reviewCount: 1824,
    duration: "60h", studentCount: "22K+", difficulty: "Advanced",
    price: "₹1,999", originalPrice: "₹7,999", category: "JEE Prep",
  },
  {
    id: "c4", slug: "spoken-english-fluency",
    thumbnail: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=400&auto=format&fit=crop",
    title: "Spoken English: From Beginner to Fluent",
    instructor: "Anjali Mehta", rating: 4.9, reviewCount: 4201,
    duration: "24h", studentCount: "35K+", difficulty: "Beginner",
    price: "₹799", originalPrice: "₹2,999", category: "English", isBestseller: true,
  },
  {
    id: "c5", slug: "react-nextjs-complete",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=400&auto=format&fit=crop",
    title: "React & Next.js – Complete Production Guide",
    instructor: "Amit Patel", rating: 4.8, reviewCount: 1640,
    duration: "38h", studentCount: "9K+", difficulty: "Intermediate",
    price: "₹1,499", originalPrice: "₹5,499", category: "Web Dev",
  },
  {
    id: "c6", slug: "neet-biology-complete",
    thumbnail: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=400&auto=format&fit=crop",
    title: "NEET Biology: Complete 2-Year Syllabus",
    instructor: "Sneha Reddy", rating: 4.8, reviewCount: 1320,
    duration: "55h", studentCount: "14K+", difficulty: "Advanced",
    price: "₹1,799", originalPrice: "₹6,999", category: "NEET Prep", isNew: true,
  },
  {
    id: "c7", slug: "upsc-general-studies",
    thumbnail: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?q=80&w=400&auto=format&fit=crop",
    title: "UPSC General Studies – Paper I & II Masterclass",
    instructor: "Rahul Verma", rating: 4.7, reviewCount: 892,
    duration: "70h", studentCount: "8K+", difficulty: "Advanced",
    price: "₹2,199", originalPrice: "₹8,999", category: "UPSC Prep",
  },
  {
    id: "c8", slug: "ai-ml-deep-learning",
    thumbnail: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=400&auto=format&fit=crop",
    title: "Artificial Intelligence & Deep Learning A–Z",
    instructor: "Vikram Malhotra", rating: 4.9, reviewCount: 1054,
    duration: "44h", studentCount: "6K+", difficulty: "Advanced",
    price: "₹1,699", originalPrice: "₹6,499", category: "Data Science", isNew: true,
  },
  {
    id: "c9", slug: "java-programming",
    thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=400&auto=format&fit=crop",
    title: "Java Programming: From Zero to Hero",
    instructor: "Divya Nair", rating: 4.7, reviewCount: 2103,
    duration: "48h", studentCount: "13K+", difficulty: "Beginner",
    price: "₹1,099", originalPrice: "₹4,499", category: "Programming",
  },
];

const categories = ["All", "Web Dev", "Data Science", "JEE Prep", "NEET Prep", "UPSC Prep", "English", "Programming"];
const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];
const sortOptions = ["Most Popular", "Highest Rated", "Newest", "Price: Low to High", "Price: High to Low"];

export default function CoursesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [level, setLevel] = useState("All Levels");
  const [sort, setSort] = useState("Most Popular");
  const [showFilters, setShowFilters] = useState(false);
  const [page, setPage] = useState(1);
  const perPage = 6;

  const filtered = courses.filter((c) => {
    const matchSearch = c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.instructor.toLowerCase().includes(search.toLowerCase());
    const matchCat = category === "All" || c.category === category;
    const matchLevel = level === "All Levels" || c.difficulty === level;
    return matchSearch && matchCat && matchLevel;
  }).sort((a, b) => {
    if (sort === "Highest Rated") return b.rating - a.rating;
    if (sort === "Price: Low to High") {
      const priceA = parseInt(a.price.replace(/[^0-9]/g, "")) || 0;
      const priceB = parseInt(b.price.replace(/[^0-9]/g, "")) || 0;
      return priceA - priceB;
    }
    if (sort === "Price: High to Low") {
      const priceA = parseInt(a.price.replace(/[^0-9]/g, "")) || 0;
      const priceB = parseInt(b.price.replace(/[^0-9]/g, "")) || 0;
      return priceB - priceA;
    }
    if (sort === "Newest") return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
    return b.reviewCount - a.reviewCount;
  });

  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    const el = document.getElementById("courses-grid-top");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 380, behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen flex flex-col" style={{ background: "var(--bg-primary)" }}>
      <Navbar />

      {/* Hero */}
      <div className="pt-28 pb-12 px-4" style={{ background: "var(--bg-secondary)" }}>
        <div className="container-xl">
          <div className="max-w-2xl animate-fade-up">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-4 h-4 text-[#ff6200]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#ff6200]">All Courses</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-[#1A1A24] tracking-tight mb-3">
              Expand your <span className="text-[#ff6200]">skills</span>
            </h1>
            <p className="text-base text-[rgba(26,26,36,0.65)] mb-6">
              500+ courses taught by expert faculty. Learn at your pace, on any device.
            </p>
            <div className="flex items-center gap-3 bg-white/80 border border-[rgba(26,26,36,0.1)] rounded-xl px-4 py-3 max-w-lg focus-within:border-[#ff6200] focus-within:ring-2 focus-within:ring-[rgba(255,98,0,0.15)] transition-all">
              <Search className="w-4 h-4 text-[rgba(26,26,36,0.4)] flex-shrink-0" />
              <input
                type="text"
                placeholder="Search courses or instructors..."
                value={search}
                onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                className="flex-1 bg-transparent focus:outline-none text-sm font-medium text-[#1A1A24] placeholder:text-[rgba(26,26,36,0.4)]"
                id="courses-search-input"
              />
              {search && (
                <button onClick={() => setSearch("")}>
                  <X className="w-3.5 h-3.5 text-[rgba(26,26,36,0.4)]" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div id="courses-grid-top" className="container-xl py-8 flex-1 w-full min-w-0 max-w-full">
        {/* Category pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 custom-scrollbar mb-6 w-full min-w-0 max-w-full">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setCategory(cat); setPage(1); }}
              className="flex-shrink-0 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200"
              style={{
                background: category === cat ? "#ff6200" : "rgba(26,26,36,0.06)",
                color: category === cat ? "#fff" : "rgba(26,26,36,0.7)",
                border: category === cat ? "1px solid #ff6200" : "1px solid rgba(26,26,36,0.1)",
                boxShadow: category === cat ? "0 4px 16px rgba(255,98,0,0.25)" : "none",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Filters bar */}
        <div className="flex flex-wrap items-center gap-3 mb-8 w-full min-w-0 max-w-full">
          {/* Level filter */}
          <div className="relative">
            <select
              value={level}
              onChange={(e) => { setLevel(e.target.value); setPage(1); }}
              className="appearance-none px-4 py-2.5 pr-8 rounded-xl text-sm font-semibold border focus:outline-none cursor-pointer"
              style={{
                background: "var(--bg-sidebar)",
                border: "1px solid rgba(26,26,36,0.12)",
                color: "#1A1A24",
              }}
            >
              {levels.map((l) => <option key={l}>{l}</option>)}
            </select>
            <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[rgba(26,26,36,0.5)] pointer-events-none" />
          </div>

          {/* Sort */}
          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none px-4 py-2.5 pr-8 rounded-xl text-sm font-semibold border focus:outline-none cursor-pointer"
              style={{
                background: "var(--bg-sidebar)",
                border: "1px solid rgba(26,26,36,0.12)",
                color: "#1A1A24",
              }}
            >
              {sortOptions.map((s) => <option key={s}>{s}</option>)}
            </select>
            <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[rgba(26,26,36,0.5)] pointer-events-none" />
          </div>

          <div className="ml-auto text-sm text-[rgba(26,26,36,0.5)] font-medium">
            {filtered.length} course{filtered.length !== 1 ? "s" : ""}
          </div>
        </div>

        {/* Course Grid */}
        {paginated.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 w-full min-w-0 max-w-full">
            {paginated.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-[#1A1A24] mb-2">No courses found</h3>
            <p className="text-[rgba(26,26,36,0.6)] text-sm">Try adjusting your search or filters</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2.5 mt-12 mb-16 pb-8">
            <button
              onClick={() => handlePageChange(Math.max(1, page - 1))}
              disabled={page === 1}
              className="px-5 py-2.5 rounded-xl text-xs font-bold bg-white border border-[#1A1A24]/15 text-[#1A1A24] hover:border-[#ff6200] hover:text-[#ff6200] shadow-sm disabled:opacity-40 disabled:pointer-events-none transition-all active:scale-95"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => handlePageChange(p)}
                className={`w-10 h-10 rounded-xl text-xs font-black transition-all flex items-center justify-center shadow-sm ${
                  p === page
                    ? "bg-[#ff6200] text-white border border-[#ff6200] scale-105 shadow-md shadow-[#ff6200]/25"
                    : "bg-white text-[#1A1A24]/80 border border-[#1A1A24]/15 hover:border-[#ff6200] hover:text-[#ff6200]"
                }`}
              >
                {p}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(Math.min(totalPages, page + 1))}
              disabled={page === totalPages}
              className="px-5 py-2.5 rounded-xl text-xs font-bold bg-white border border-[#1A1A24]/15 text-[#1A1A24] hover:border-[#ff6200] hover:text-[#ff6200] shadow-sm disabled:opacity-40 disabled:pointer-events-none transition-all active:scale-95"
            >
              Next
            </button>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
