"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Navbar from "../../components/landing/Navbar";
import Footer from "../../components/landing/Footer";
import Link from "next/link";
import { Clock, Calendar, User, ArrowLeft, Share2, Bookmark, ThumbsUp, MessageSquare, Check, Sparkles, BookOpen, ExternalLink, ArrowRight } from "lucide-react";

interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  author: string;
  authorTitle: string;
  authorId: string;
  authorAvatar: string;
  date: string;
  readTime: string;
  coverImage: string;
  excerpt: string;
  content: {
    intro: string;
    sections: { heading: string; body: string; tip?: string }[];
    conclusion: string;
  };
}

const articlesDatabase: Record<string, BlogArticle> = {
  "crack-jee-2025": {
    id: "b1",
    slug: "crack-jee-2025",
    title: "How to Crack JEE 2025: A Complete 6-Month Strategy",
    category: "Exam Prep",
    author: "Priya Sharma",
    authorTitle: "IIT-JEE Mathematics Expert | IIT Bombay Alumni",
    authorId: "f1",
    authorAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    date: "Jun 28, 2026",
    readTime: "8 min read",
    coverImage: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1400&auto=format&fit=crop",
    excerpt: "Discover the proven study plan, time management techniques, and resource recommendations that helped 500+ students crack JEE last year.",
    content: {
      intro: "Cracking the Joint Entrance Examination (JEE) requires more than just hard work; it requires precision, strategic planning, and emotional resilience. With 6 months remaining, your margin for error narrows, but your potential for exponential growth peaks.",
      sections: [
        {
          heading: "1. Deconstructing the JEE Syllabus & Weightage",
          body: "Begin by categorizing your syllabus into three distinct buckets: High Weightage + High Accuracy (e.g., Calculus, Coordinate Geometry, Modern Physics), Moderate Weightage + High Return (e.g., Matrices, Electrostatics), and Low Weightage topics. Never spend more than 15% of your remaining study hours on topics that yield less than 5% of historical exam marks.",
          tip: "Pro Tip from Priya Sharma: Master the NCERT textbooks for Chemistry line-by-line before attempting advanced reference guides like J.D. Lee or I.E. Irodov."
        },
        {
          heading: "2. The 3-2-1 Weekly Study & Revision Framework",
          body: "Allocate 3 days a week for intensive problem-solving and new concept acquisition, 2 days for rigorous time-bound sectional mock tests, and 1 full day strictly dedicated to error analysis and active recall of formulas. Never skip error analysis—reviewing why you got a question wrong is worth 10x more than solving 50 new questions blindly."
        },
        {
          heading: "3. Mastering Exam Temperament & Mock Tests",
          body: "Take full-length 3-hour CBT (Computer Based Test) mocks at the exact time slot of the real exam (9:00 AM - 12:00 PM or 3:00 PM - 6:00 PM). This trains your circadian rhythm so your brain reaches maximum alertness right when the question paper unlocks."
        }
      ],
      conclusion: "Remember, JEE is not just a test of intelligence; it is a test of stamina and discipline. Trust your strategy, stay consistent, and take one problem at a time."
    }
  },
  "how-to-crack-jee-2025": {
    id: "b1",
    slug: "how-to-crack-jee-2025",
    title: "How to Crack JEE 2025: A Complete 6-Month Strategy",
    category: "Exam Prep",
    author: "Priya Sharma",
    authorTitle: "IIT-JEE Mathematics Expert | IIT Bombay Alumni",
    authorId: "f1",
    authorAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    date: "Jun 28, 2026",
    readTime: "8 min read",
    coverImage: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1400&auto=format&fit=crop",
    excerpt: "Discover the proven study plan, time management techniques, and resource recommendations that helped 500+ students crack JEE last year.",
    content: {
      intro: "Cracking the Joint Entrance Examination (JEE) requires more than just hard work; it requires precision, strategic planning, and emotional resilience. With 6 months remaining, your margin for error narrows, but your potential for exponential growth peaks.",
      sections: [
        {
          heading: "1. Deconstructing the JEE Syllabus & Weightage",
          body: "Begin by categorizing your syllabus into three distinct buckets: High Weightage + High Accuracy (e.g., Calculus, Coordinate Geometry, Modern Physics), Moderate Weightage + High Return (e.g., Matrices, Electrostatics), and Low Weightage topics.",
          tip: "Pro Tip from Priya Sharma: Master the NCERT textbooks for Chemistry line-by-line before attempting advanced reference guides like J.D. Lee or I.E. Irodov."
        },
        {
          heading: "2. The 3-2-1 Weekly Study & Revision Framework",
          body: "Allocate 3 days a week for intensive problem-solving and new concept acquisition, 2 days for rigorous time-bound sectional mock tests, and 1 full day strictly dedicated to error analysis and active recall of formulas."
        },
        {
          heading: "3. Mastering Exam Temperament & Mock Tests",
          body: "Take full-length 3-hour CBT (Computer Based Test) mocks at the exact time slot of the real exam (9:00 AM - 12:00 PM or 3:00 PM - 6:00 PM). This trains your circadian rhythm."
        }
      ],
      conclusion: "Remember, JEE is not just a test of intelligence; it is a test of stamina and discipline. Trust your strategy, stay consistent, and take one problem at a time."
    }
  },
  "python-beginners": {
    id: "b2",
    slug: "python-beginners",
    title: "Python for Beginners: Start Your Data Science Journey Today",
    category: "Programming",
    author: "Amit Patel",
    authorTitle: "Full Stack Dev & Data Science Architect",
    authorId: "tutor-3",
    authorAvatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
    date: "Jun 24, 2026",
    readTime: "6 min read",
    coverImage: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1400&auto=format&fit=crop",
    excerpt: "Learn why Python is the most in-demand skill of 2026 and how absolute beginners can go from zero to job-ready in just 3 months.",
    content: {
      intro: "Whether you are aiming to build predictive AI models, automate tedious spreadsheets, or launch scalable web backends, Python remains the undisputed king of modern programming languages.",
      sections: [
        {
          heading: "1. Why Python Dominates Data Science & AI",
          body: "Python's clear syntax reads almost like plain English, allowing you to focus on logic rather than memory pointers or boilerplate syntax. Coupled with libraries like Pandas, NumPy, and PyTorch, you can process millions of data rows in under 10 lines of code.",
          tip: "Key Tip: Do not memorize syntax. Focus on building real projects right from Week 2—such as a weather API analyzer or a CSV sales tracker."
        },
        {
          heading: "2. Your 90-Day Learning Roadmap",
          body: "Days 1-30: Core syntax, data types (lists, dictionaries, sets), loops, and functions. Days 31-60: Object-oriented programming (OOP), file handling, and Pandas data manipulation. Days 61-90: Building your portfolio with Streamlit web apps and basic Scikit-learn machine learning models."
        }
      ],
      conclusion: "Python is your gateway to high-paying tech careers. Start coding today with interactive notebooks and live mentor feedback."
    }
  },
  "python-for-beginners-2025": {
    id: "b2",
    slug: "python-for-beginners-2025",
    title: "Python for Beginners: Start Your Data Science Journey Today",
    category: "Programming",
    author: "Amit Patel",
    authorTitle: "Full Stack Dev & Data Science Architect",
    authorId: "tutor-3",
    authorAvatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
    date: "Jun 24, 2026",
    readTime: "6 min read",
    coverImage: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1400&auto=format&fit=crop",
    excerpt: "Learn why Python is the most in-demand skill of 2026 and how absolute beginners can go from zero to job-ready in just 3 months.",
    content: {
      intro: "Whether you are aiming to build predictive AI models, automate tedious spreadsheets, or launch scalable web backends, Python remains the undisputed king of modern programming languages.",
      sections: [
        {
          heading: "1. Why Python Dominates Data Science & AI",
          body: "Python's clear syntax reads almost like plain English, allowing you to focus on logic rather than memory pointers or boilerplate syntax.",
          tip: "Key Tip: Do not memorize syntax. Focus on building real projects right from Week 2—such as a weather API analyzer or a CSV sales tracker."
        },
        {
          heading: "2. Your 90-Day Learning Roadmap",
          body: "Days 1-30: Core syntax, data types, loops, and functions. Days 31-60: Object-oriented programming and Pandas data manipulation. Days 61-90: Building your portfolio with Streamlit and basic ML models."
        }
      ],
      conclusion: "Python is your gateway to high-paying tech careers. Start coding today with interactive notebooks and live mentor feedback."
    }
  },
  "online-vs-offline": {
    id: "b3",
    slug: "online-vs-offline",
    title: "Online vs. Offline Tutoring: Which Is Right for You in 2026?",
    category: "Learning Tips",
    author: "Sneha Reddy",
    authorTitle: "NEET Biology & Botany Expert",
    authorId: "tutor-4",
    authorAvatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=200&auto=format&fit=crop",
    date: "Jun 19, 2026",
    readTime: "5 min read",
    coverImage: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1400&auto=format&fit=crop",
    excerpt: "Deep comparison of cost, effectiveness, flexibility, and which learning style fits each approach.",
    content: {
      intro: "The debate between traditional classroom coaching and interactive 1-on-1 online tutoring has evolved. In 2026, technology like digital pen-pads, instant session recordings, and AI doubt solvers has leveled the playing field.",
      sections: [
        {
          heading: "1. The Power of Personalized Attention & Flexibility",
          body: "In a 100-student physical classroom, asking a doubt can feel intimidating. In a 1-on-1 online session, the entire curriculum adapts precisely to your learning pace, ensuring no foundational gap is left unaddressed.",
          tip: "Decision Checklist: If you save more than 60 minutes of daily travel time with online tutoring, invest that extra hour into revision."
        },
        {
          heading: "2. Cost Efficiency vs. Physical Peer Group",
          body: "Online tutoring typically cuts out coaching institute overhead costs, allowing you to hire top alumni mentors from IIT and AIIMS at 30% to 40% lower hourly rates."
        }
      ],
      conclusion: "Evaluate your personal self-discipline and daily commute time to pick the format that maximizes your output."
    }
  },
  "online-tutoring-vs-offline": {
    id: "b3",
    slug: "online-tutoring-vs-offline",
    title: "Online vs. Offline Tutoring: Which Is Right for You in 2026?",
    category: "Learning Tips",
    author: "Sneha Reddy",
    authorTitle: "NEET Biology & Botany Expert",
    authorId: "tutor-4",
    authorAvatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=200&auto=format&fit=crop",
    date: "Jun 19, 2026",
    readTime: "5 min read",
    coverImage: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1400&auto=format&fit=crop",
    excerpt: "Deep comparison of cost, effectiveness, flexibility, and which learning style fits each approach.",
    content: {
      intro: "The debate between traditional classroom coaching and interactive 1-on-1 online tutoring has evolved. In 2026, technology has leveled the playing field.",
      sections: [
        {
          heading: "1. The Power of Personalized Attention & Flexibility",
          body: "In a 100-student physical classroom, asking a doubt can feel intimidating. In a 1-on-1 online session, the entire curriculum adapts exactly to your learning pace.",
          tip: "Decision Checklist: If you save more than 60 minutes of daily travel time with online tutoring, invest that extra hour into revision."
        },
        {
          heading: "2. Cost Efficiency vs. Physical Peer Group",
          body: "Online tutoring typically cuts out coaching institute overhead costs, allowing you to hire top alumni mentors from IIT and AIIMS at lower rates."
        }
      ],
      conclusion: "Evaluate your personal self-discipline and daily commute time to pick the format that maximizes your output."
    }
  }
};

// Default fallback for any unknown slug
const defaultArticle: BlogArticle = {
  id: "default-blog",
  slug: "article-details",
  title: "Modern Education Strategy & Expert Mentorship Insights",
  category: "Learning Tips",
  author: "Priya Sharma",
  authorTitle: "IIT-JEE Mathematics Expert | IIT Bombay Alumni",
  authorId: "f1",
  authorAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
  date: "Jun 2026",
  readTime: "6 min read",
  coverImage: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1400&auto=format&fit=crop",
  excerpt: "An in-depth exploration of how expert 1-on-1 mentorship and structured practice can accelerate academic excellence.",
  content: {
    intro: "Education is transforming rapidly. Access to specialized faculty and tailored study methodologies has unlocked unprecedented opportunities for students globally.",
    sections: [
      {
        heading: "1. Building Foundations Over Rote Memorization",
        body: "True mastery comes from understanding underlying first principles rather than memorizing formulas. When a student grasps why a mathematical proof works or how a chemical bond forms, complex problems become intuitive.",
        tip: "Mentor Advice: Always ask 'Why' three times before memorizing any concept."
      },
      {
        heading: "2. Consistent Daily Habits over Marathon All-Nighters",
        body: "Cognitive science shows that spaced repetition across 60-minute daily blocks leads to 3x better memory retention than cramming the night before an exam."
      }
    ],
    conclusion: "Continuous curiosity and guided mentorship are your strongest tools. Connect directly with verified mentors to start your journey."
  }
};

export default function BlogArticleDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = typeof params?.slug === "string" ? params.slug : "crack-jee-2025";
  const article = articlesDatabase[slug] || defaultArticle;

  const [copied, setCopied] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(128);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <main className="min-h-screen flex flex-col font-sans" style={{ background: "var(--bg-primary)" }}>
      <Navbar />

      {/* Article Header */}
      <div className="pt-28 pb-12 px-4 bg-white dark:bg-[#1A1A24] border-b border-[#1A1A24]/10 dark:border-white/10">
        <div className="max-w-4xl mx-auto space-y-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-black text-[#ff6200] hover:underline uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog List
          </Link>

          <div className="flex items-center gap-3 flex-wrap">
            <span className="px-3.5 py-1 rounded-full text-xs font-black bg-[#ff6200]/15 text-[#ff6200] border border-[#ff6200]/30 uppercase tracking-wider">
              {article.category}
            </span>
            <span className="text-xs font-bold text-[#1A1A24]/60 dark:text-white/60 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#ff6200]" /> {article.readTime}
            </span>
            <span className="text-xs font-bold text-[#1A1A24]/60 dark:text-white/60 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#ff6200]" /> {article.date}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1A1A24] dark:text-white tracking-tight leading-tight">
            {article.title}
          </h1>

          {/* Author info bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[#1A1A24]/10 dark:border-white/10">
            <Link
              href={`/faculty/${article.authorId === "tutor-1" || article.authorId === "f1" ? "f1" : article.authorId}`}
              className="flex items-center gap-3.5 group cursor-pointer"
            >
              <img
                src={article.authorAvatar}
                alt={article.author}
                className="w-12 h-12 rounded-2xl object-cover border-2 border-[#ff6200] shadow-sm group-hover:scale-105 transition-transform"
              />
              <div>
                <h4 className="text-base font-black text-[#1A1A24] dark:text-white group-hover:text-[#ff6200] transition-colors flex items-center gap-1.5">
                  {article.author} <Sparkles className="w-3.5 h-3.5 text-[#ff6200]" />
                </h4>
                <p className="text-xs font-semibold text-[#1A1A24]/70 dark:text-white/70">{article.authorTitle}</p>
              </div>
            </Link>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  setLiked(!liked);
                  setLikesCount(liked ? likesCount - 1 : likesCount + 1);
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-extrabold border transition-all cursor-pointer ${
                  liked
                    ? "bg-[#ff6200]/15 text-[#ff6200] border-[#ff6200]"
                    : "bg-[#1A1A24]/5 dark:bg-white/5 text-[#1A1A24] dark:text-white border-[#1A1A24]/15 dark:border-white/15 hover:border-[#ff6200]"
                }`}
              >
                <ThumbsUp className={`w-4 h-4 ${liked ? "fill-[#ff6200]" : ""}`} /> {likesCount} Likes
              </button>
              <button
                onClick={handleCopyLink}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#1A1A24]/5 dark:bg-white/5 hover:bg-[#ff6200]/15 hover:text-[#ff6200] text-xs font-extrabold text-[#1A1A24] dark:text-white border border-[#1A1A24]/15 dark:border-white/15 transition-all cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Share2 className="w-4 h-4" />}
                <span>{copied ? "Copied Link!" : "Share"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cover Image Banner */}
      <div className="max-w-4xl mx-auto px-4 -mt-6">
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#1A1A24]/10 dark:border-white/10 h-64 sm:h-80 md:h-96">
          <img src={article.coverImage} alt={article.title} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Article Content Body */}
      <div className="flex-grow max-w-4xl mx-auto w-full px-4 pt-12 pb-24">
        <article className="prose dark:prose-invert max-w-none space-y-8 text-base sm:text-lg text-[#1A1A24]/85 dark:text-white/85 font-medium leading-relaxed">
          <p className="text-lg sm:text-xl font-bold text-[#1A1A24] dark:text-white leading-relaxed bg-[#ff6200]/5 p-6 rounded-3xl border-l-4 border-[#ff6200]">
            {article.content.intro}
          </p>

          {article.content.sections.map((sec, i) => (
            <div key={i} className="space-y-3 pt-4">
              <h2 className="text-xl sm:text-2xl font-black text-[#1A1A24] dark:text-white tracking-tight flex items-center gap-2.5">
                <span className="w-2.5 h-6 bg-[#ff6200] rounded-full inline-block" />
                {sec.heading}
              </h2>
              <p className="leading-relaxed">{sec.body}</p>

              {sec.tip && (
                <div className="my-4 p-5 rounded-2xl bg-[#4D148C]/10 dark:bg-[#4D148C]/20 border border-[#4D148C]/30 text-sm font-bold text-[#4D148C] dark:text-[#d3a8ff] flex items-start gap-3">
                  <Sparkles className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#ff6200]" />
                  <span>{sec.tip}</span>
                </div>
              )}
            </div>
          ))}

          <div className="pt-8 border-t border-[#1A1A24]/10 dark:border-white/10">
            <h3 className="text-xl font-black text-[#1A1A24] dark:text-white mb-3">Conclusion & Next Steps</h3>
            <p className="leading-relaxed">{article.content.conclusion}</p>
          </div>
        </article>

        {/* Bottom Author Bio Card */}
        <div className="mt-16 bg-white/90 dark:bg-[#1A1A24]/90 p-6 sm:p-8 rounded-3xl border border-[#1A1A24]/15 dark:border-white/15 shadow-xl flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <img
            src={article.authorAvatar}
            alt={article.author}
            className="w-24 h-24 rounded-2xl object-cover border-2 border-[#ff6200] shadow-md flex-shrink-0"
          />
          <div className="flex-1 text-center sm:text-left space-y-2">
            <span className="text-xs font-black text-[#ff6200] uppercase tracking-wider">About the Author</span>
            <h3 className="text-xl font-black text-[#1A1A24] dark:text-white">{article.author}</h3>
            <p className="text-xs font-bold text-[#1A1A24]/60 dark:text-white/60">{article.authorTitle}</p>
            <p className="text-sm font-medium text-[#1A1A24]/80 dark:text-white/80 leading-relaxed pt-1">
              Experienced educator and verified mentor on our platform, helping thousands of students achieve academic and professional success through structured 1-on-1 coaching and batch mentorship.
            </p>
            <div className="pt-3 flex justify-center sm:justify-start">
              <Link
                href={`/faculty/${article.authorId === "tutor-1" || article.authorId === "f1" ? "f1" : article.authorId}`}
                className="btn-coral rounded-xl px-6 py-3 font-black text-xs sm:text-sm shadow-lg flex items-center gap-2"
              >
                <span>View Mentor Profile & Schedule Demo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
