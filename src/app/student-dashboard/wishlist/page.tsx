"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Heart, BookOpen, PlayCircle, Star, X, ShoppingCart } from "lucide-react";

const wishlistItems = [
  {
    id: "w1",
    type: "course" as const,
    title: "JEE Mathematics Masterclass – All Topics",
    instructor: "Priya Sharma",
    thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=400&auto=format&fit=crop",
    rating: 4.9,
    price: "₹1,999",
    originalPrice: "₹7,999",
    category: "JEE Prep",
  },
  {
    id: "w2",
    type: "course" as const,
    title: "AI & Machine Learning A-Z: From Zero to Expert",
    instructor: "Vikram Malhotra",
    thumbnail: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=400&auto=format&fit=crop",
    rating: 4.9,
    price: "₹1,699",
    originalPrice: "₹6,499",
    category: "Data Science",
  },
];

export default function WishlistPage() {
  const [items, setItems] = useState(wishlistItems);

  const removeItem = (id: string) => setItems(items.filter((i) => i.id !== id));

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-black text-[#1A1A24]">Wishlist</h1>
          <p className="text-sm text-[rgba(26,26,36,0.6)] mt-0.5">
            {items.length} saved item{items.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      {items.length === 0 ? (
        <div className="text-center py-20">
          <Heart className="w-16 h-16 mx-auto mb-4 text-[rgba(26,26,36,0.2)]" />
          <h3 className="text-lg font-bold text-[#1A1A24] mb-2">Your wishlist is empty</h3>
          <p className="text-sm text-[rgba(26,26,36,0.55)] mb-6">
            Save courses and tutors you&apos;re interested in to find them later
          </p>
          <Link href="/courses" className="btn-coral px-5 py-2.5 rounded-xl text-sm font-bold inline-block">
            Browse Courses
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {items.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl overflow-hidden"
              style={{ background: "var(--bg-sidebar)", border: "1px solid rgba(26,26,36,0.08)" }}
            >
              <div className="relative h-40 overflow-hidden">
                <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                {/* Remove button */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center shadow-sm hover:bg-white transition-colors"
                >
                  <X className="w-4 h-4 text-[rgba(26,26,36,0.6)]" />
                </button>
                <div className="absolute bottom-3 left-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold text-white" style={{ background: "rgba(77,20,140,0.8)" }}>
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-bold text-sm text-[#1A1A24] line-clamp-2 mb-1">{item.title}</h3>
                <p className="text-xs text-[rgba(26,26,36,0.55)] mb-3">by {item.instructor}</p>

                <div className="flex items-center gap-1 mb-3">
                  <Star className="w-3.5 h-3.5 star-filled" />
                  <span className="text-xs font-bold text-[#1A1A24]">{item.rating}</span>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-[rgba(26,26,36,0.07)]">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-base font-black text-[#1A1A24]">{item.price}</span>
                    <span className="text-xs text-[rgba(26,26,36,0.4)] line-through">{item.originalPrice}</span>
                  </div>
                  <Link
                    href={`/courses/${item.id}`}
                    className="btn-coral rounded-xl px-4 py-2 text-xs font-bold flex items-center gap-1.5"
                  >
                    <PlayCircle className="w-3.5 h-3.5" />
                    Enroll
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
