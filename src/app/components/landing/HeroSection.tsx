"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useSpring,
  type Variants,
} from "framer-motion";

/* ── React Icons ── */
import { FiSearch, FiChevronDown, FiArrowRight }                    from "react-icons/fi";
import { BsCheckCircleFill, BsLaptop, BsHouseDoor }                 from "react-icons/bs";
import { MdOutlineSchool, MdOutlineRefresh, MdOutlineScience }      from "react-icons/md";
import { HiUsers, HiOutlineBookOpen, HiSparkles }                   from "react-icons/hi2";
import { AiFillStar }                                               from "react-icons/ai";
import { RiLineChartLine, RiComputerLine, RiGovernmentLine }        from "react-icons/ri";
import { TbMath, TbAtom, TbDna, TbBrandPython }                    from "react-icons/tb";
import { IoChatbubblesOutline }                                     from "react-icons/io5";
import { FaCoffee }                                                 from "react-icons/fa";
import type { IconType }                                            from "react-icons";

import CounterAnimation from "../common/CounterAnimation";

/* ─── Data ─────────────────────────────────────────────────── */

const modeOptions = [
  { label: "Any Mode",         icon: FiSearch,          desc: "All teaching modes" },
  { label: "Online",           icon: BsLaptop,          desc: "Virtual sessions"   },
  { label: "Offline",          icon: MdOutlineSchool,   desc: "In-person classes"  },
  { label: "Online & Offline", icon: MdOutlineRefresh,  desc: "Flexible mode"      },
  { label: "Home Tuition",     icon: BsHouseDoor,       desc: "Tutor comes to you" },
];

const statsData = [
  { value: 50,  suffix: "K+", label: "Active Tutors", icon: HiUsers,         decimals: 0 },
  { value: 200, suffix: "+",  label: "Subjects",       icon: HiOutlineBookOpen, decimals: 0 },
  { value: 4.9, suffix: "",   label: "Avg Rating",     icon: AiFillStar,      decimals: 1 },
  { value: 98,  suffix: "%",  label: "Success Rate",   icon: RiLineChartLine, decimals: 0 },
];

const popularChips: {
  label: string; icon: IconType;
  color: string; bg: string; border: string; iconBg: string; shadow: string;
}[] = [
  { label: "Mathematics",    icon: TbMath,               color: "#e85d04", bg: "rgba(232,93,4,0.08)",     border: "rgba(232,93,4,0.22)",    iconBg: "rgba(232,93,4,0.14)",    shadow: "rgba(232,93,4,0.38)"    },
  { label: "Python",         icon: TbBrandPython,        color: "#3776ab", bg: "rgba(55,118,171,0.08)",   border: "rgba(55,118,171,0.22)",  iconBg: "rgba(55,118,171,0.14)",  shadow: "rgba(55,118,171,0.38)"  },
  { label: "JEE Prep",       icon: TbAtom,               color: "#7c3aed", bg: "rgba(124,58,237,0.08)",   border: "rgba(124,58,237,0.22)",  iconBg: "rgba(124,58,237,0.14)",  shadow: "rgba(124,58,237,0.38)"  },
  { label: "Spoken English", icon: IoChatbubblesOutline, color: "#0891b2", bg: "rgba(8,145,178,0.08)",    border: "rgba(8,145,178,0.22)",   iconBg: "rgba(8,145,178,0.14)",   shadow: "rgba(8,145,178,0.38)"   },
  { label: "NEET",           icon: TbDna,                color: "#16a34a", bg: "rgba(22,163,74,0.08)",    border: "rgba(22,163,74,0.22)",   iconBg: "rgba(22,163,74,0.14)",   shadow: "rgba(22,163,74,0.38)"   },
  { label: "Physics",        icon: TbAtom,               color: "#7c3aed", bg: "rgba(124,58,237,0.08)",   border: "rgba(124,58,237,0.22)",  iconBg: "rgba(124,58,237,0.14)",  shadow: "rgba(124,58,237,0.38)"  },
  { label: "Web Dev",        icon: RiComputerLine,       color: "#2563eb", bg: "rgba(37,99,235,0.08)",    border: "rgba(37,99,235,0.22)",   iconBg: "rgba(37,99,235,0.14)",   shadow: "rgba(37,99,235,0.38)"   },
  { label: "UPSC",           icon: RiGovernmentLine,     color: "#b45309", bg: "rgba(180,83,9,0.08)",     border: "rgba(180,83,9,0.22)",    iconBg: "rgba(180,83,9,0.14)",    shadow: "rgba(180,83,9,0.38)"    },
  { label: "Chemistry",      icon: MdOutlineScience,     color: "#0d9488", bg: "rgba(13,148,136,0.08)",   border: "rgba(13,148,136,0.22)",  iconBg: "rgba(13,148,136,0.14)",  shadow: "rgba(13,148,136,0.38)"  },
  { label: "Java",           icon: FaCoffee,             color: "#92400e", bg: "rgba(146,64,14,0.08)",    border: "rgba(146,64,14,0.22)",   iconBg: "rgba(146,64,14,0.14)",   shadow: "rgba(146,64,14,0.38)"   },
];

const typewriterSubjects = [
  "Mathematics", "Physics", "Python", "Spoken English",
  "Chemistry", "Data Science", "JEE Preparation", "Web Development",
];

/* ─── Animation Variants ────────────────────────────────────── */

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 32 },
  visible: (delay: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, ease: "easeOut", delay },
  }),
};

const fadeRight: Variants = {
  hidden:  { opacity: 0, x: 48 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: "easeOut", delay: 0.2 } },
};

const staggerContainer: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.55 } },
};

const chipVariant: Variants = {
  hidden:  { opacity: 0, scale: 0.8, y: 10 },
  visible: {
    opacity: 1, scale: 1, y: 0,
    transition: { type: "spring" as const, stiffness: 380, damping: 22 },
  },
};

const statVariant: Variants = {
  hidden:  { opacity: 0, y: 20, scale: 0.92 },
  visible: (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { type: "spring" as const, stiffness: 300, damping: 24, delay: 0.5 + i * 0.1 },
  }),
};

/* ─── Component ─────────────────────────────────────────────── */

export default function HeroSection() {
  const [subject, setSubject]           = useState("");
  const [mode, setMode]                 = useState(modeOptions[0]);
  const [modeOpen, setModeOpen]         = useState(false);
  const [mounted, setMounted]           = useState(false);
  const [dropdownStyle, setDropdown]    = useState<React.CSSProperties>({});
  const [placeholder, setPlaceholder]   = useState("");
  const [inputFocused, setInputFocused] = useState(false);
  const [hoveredChip, setHoveredChip]   = useState<string | null>(null);

  const modeRef   = useRef<HTMLDivElement>(null);
  const btnRef    = useRef<HTMLButtonElement>(null);
  const portalRef = useRef<HTMLDivElement>(null);
  const pwRef     = useRef({
    index: 0, charIndex: 0, deleting: false,
    timeout: null as NodeJS.Timeout | null,
  });

  /* ── Mouse parallax ── */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const orbX   = useSpring(useTransform(mouseX, [0, 1], [-24, 24]), { stiffness: 60, damping: 20 });
  const orbY   = useSpring(useTransform(mouseY, [0, 1], [-16, 16]), { stiffness: 60, damping: 20 });
  const orbX2  = useTransform(orbX, (v) => -v * 0.6);
  const orbY2  = useTransform(orbY, (v) => -v * 0.6);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    mouseX.set(e.clientX / window.innerWidth);
    mouseY.set(e.clientY / window.innerHeight);
  }, [mouseX, mouseY]);

  const recalcDropdown = useCallback(() => {
    if (!btnRef.current) return;
    const r = btnRef.current.getBoundingClientRect();
    setDropdown({ position: "fixed", top: r.bottom + 6, left: r.left, width: 250, zIndex: 9999 });
  }, []);

  /* ── Typewriter ── */
  useEffect(() => {
    const pw = pwRef.current;
    const type = () => {
      const word = typewriterSubjects[pw.index % typewriterSubjects.length];
      if (!pw.deleting) {
        setPlaceholder("Search: " + word.slice(0, pw.charIndex + 1) + "|");
        pw.charIndex++;
        if (pw.charIndex === word.length) { pw.deleting = true; pw.timeout = setTimeout(type, 1800); }
        else pw.timeout = setTimeout(type, 80);
      } else {
        setPlaceholder("Search: " + word.slice(0, pw.charIndex - 1) + "|");
        pw.charIndex--;
        if (pw.charIndex === 0) { pw.deleting = false; pw.index++; pw.timeout = setTimeout(type, 400); }
        else pw.timeout = setTimeout(type, 40);
      }
    };
    pw.timeout = setTimeout(type, 600);
    return () => { if (pw.timeout) clearTimeout(pw.timeout); };
  }, []);

  /* ── Mount + click-outside ── */
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;
      if (!modeRef.current?.contains(target) && !portalRef.current?.contains(target))
        setModeOpen(false);
    };
    const close = () => setModeOpen(false);
    document.addEventListener("mousedown", handler);
    window.addEventListener("scroll", close);
    window.addEventListener("resize", close);
    return () => {
      clearTimeout(t);
      document.removeEventListener("mousedown", handler);
      window.removeEventListener("scroll", close);
      window.removeEventListener("resize", close);
    };
  }, []);

  /* ─── Render ──────────────────────────────────────────────── */
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #fff7f2 0%, #ffffff 45%, #fff4ed 100%)",
        paddingTop: "80px",
        minHeight: "100vh",
      }}
      onMouseMove={handleMouseMove}
    >
      {/* Grid bg */}
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />

      {/* Parallax orbs */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          top: "10%", right: "-10%",
          width: "clamp(300px,55vw,700px)", height: "clamp(300px,55vw,700px)",
          background: "radial-gradient(circle, rgba(255,107,53,0.09) 0%, transparent 70%)",
          borderRadius: "50%",
          x: orbX, y: orbY,
        }}
      />
      <motion.div
        className="absolute pointer-events-none"
        style={{
          bottom: "5%", left: "-8%",
          width: "clamp(200px,35vw,450px)", height: "clamp(200px,35vw,450px)",
          background: "radial-gradient(circle, rgba(77,20,140,0.06) 0%, transparent 70%)",
          borderRadius: "50%",
          x: orbX2, y: orbY2,
        }}
      />

      <div className="container-xl relative z-10 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* ══ LEFT COLUMN ══ */}
          <div className="flex-1 w-full lg:max-w-[55%]">

            {/* Badge pill */}
         

            {/* Heading */}
            <motion.h1
              className="font-black leading-[1.05] tracking-tight mb-5"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", color: "#1A1A24" }}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
            >
              Learn from the{" "}
              <motion.span
                style={{ color: "#ff6200", display: "inline-block", position: "relative" }}
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring" as const, stiffness: 400, damping: 18 }}
              >
                best
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 rounded-full"
                  style={{ height: "3px", background: "linear-gradient(90deg, #ff6200, rgba(255,98,0,0.25))" }}
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
                />
              </motion.span>
              <br />tutors in India.
            </motion.h1>

            {/* Sub-heading */}
            <motion.p
              className="text-base md:text-lg leading-relaxed mb-8 max-w-lg"
              style={{ color: "rgba(26,26,36,0.62)" }}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.22}
            >
              Connect with verified tutors for online, offline &amp; home tuition.
              Any subject. Any schedule. Any city in India.
            </motion.p>

            {/* ── Search Form ── */}
            <motion.div
              className="flex flex-col gap-3"
              style={{ maxWidth: "520px" }}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.32}
            >
              {/* Subject input */}
              <motion.div
                className="flex items-center gap-3 px-4 py-3.5 rounded-xl"
                style={{
                  background: "#fff",
                  border: inputFocused ? "1.5px solid #ff6200" : "1.5px solid rgba(26,26,36,0.11)",
                  boxShadow: inputFocused ? "0 0 0 3px rgba(255,98,0,0.12)" : "0 2px 8px rgba(0,0,0,0.06)",
                  transition: "border-color 0.25s, box-shadow 0.25s",
                }}
                whileHover={{ boxShadow: "0 4px 16px rgba(0,0,0,0.1)" }}
              >
                <FiSearch className="w-4 h-4 flex-shrink-0" style={{ color: "rgba(26,26,36,0.4)" }} />
                <input
                  id="hero-search-input"
                  type="text"
                  placeholder={subject ? "" : placeholder}
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full bg-transparent focus:outline-none text-sm font-medium"
                  style={{ color: "#1A1A24" }}
                  onFocus={() => setInputFocused(true)}
                  onBlur={() => setInputFocused(false)}
                />
              </motion.div>

              {/* Mode + CTA row */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative" ref={modeRef}>
                  <motion.button
                    ref={btnRef}
                    id="hero-mode-dropdown"
                    onClick={() => { recalcDropdown(); setModeOpen((o) => !o); }}
                    className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-sm"
                    style={{
                      background: "#fff",
                      border: modeOpen ? "1.5px solid #ff6200" : "1.5px solid rgba(26,26,36,0.11)",
                      transition: "border-color 0.2s",
                    }}
                    whileHover={{ boxShadow: "0 4px 16px rgba(0,0,0,0.1)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-2">
                      <mode.icon style={{ color: "rgba(26,26,36,0.5)", width: 16, height: 16 }} />
                      <span className="font-semibold" style={{ color: "rgba(26,26,36,0.85)" }}>{mode.label}</span>
                    </div>
                    <motion.span
                      animate={{ rotate: modeOpen ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      style={{ display: "inline-flex" }}
                    >
                      <FiChevronDown style={{ color: "rgba(26,26,36,0.4)", width: 16, height: 16 }} />
                    </motion.span>
                  </motion.button>

                  {/* Animated dropdown via portal */}
                  {mounted && createPortal(
                    <AnimatePresence>
                      {modeOpen && (
                        <motion.div
                          ref={portalRef}
                          style={{
                            ...dropdownStyle,
                            background: "#fff",
                            border: "1px solid rgba(26,26,36,0.1)",
                            borderRadius: "14px",
                            boxShadow: "0 20px 60px rgba(0,0,0,0.13)",
                            padding: "6px",
                          }}
                          initial={{ opacity: 0, y: -8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -8, scale: 0.96 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                        >
                          {modeOptions.map((m, i) => {
                            const active = mode.label === m.label;
                            return (
                              <motion.button
                                key={m.label}
                                onMouseDown={(e) => { e.preventDefault(); setMode(m); setModeOpen(false); }}
                                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm cursor-pointer"
                                style={{
                                  background: active ? "rgba(255,98,0,0.08)" : "transparent",
                                  color: active ? "#ff6200" : "rgba(26,26,36,0.75)",
                                }}
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.04, ease: "easeOut" }}
                                whileHover={{ background: active ? "rgba(255,98,0,0.12)" : "rgba(26,26,36,0.04)" }}
                              >
                                <m.icon style={{ width: 15, height: 15, flexShrink: 0 }} />
                                <div className="flex-1 text-left">
                                  <p className="font-semibold text-[13px]">{m.label}</p>
                                  <p className="text-[11px] opacity-60">{m.desc}</p>
                                </div>
                                {active && <BsCheckCircleFill style={{ width: 13, height: 13, color: "#ff6200" }} />}
                              </motion.button>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>,
                    document.body
                  )}
                </div>

                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href="/tutor/search"
                    id="hero-find-tutor-btn"
                    className="btn-coral rounded-xl py-3.5 px-7 flex items-center justify-center gap-2 text-sm whitespace-nowrap font-bold h-full"
                    style={{ boxShadow: "0 8px 24px rgba(255,98,0,0.3)" }}
                  >
                    Find Tutor
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                      style={{ display: "inline-flex" }}
                    >
                      <FiArrowRight style={{ width: 16, height: 16 }} />
                    </motion.span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* ── Stats Grid ── */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8" style={{ maxWidth: "520px" }}>
              {statsData.map((stat, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col items-center justify-center py-4 px-3 rounded-xl cursor-default select-none"
                  style={{ background: "#111118", borderRadius: "14px", boxShadow: "0 4px 20px rgba(0,0,0,0.18)" }}
                  variants={statVariant}
                  initial="hidden"
                  animate="visible"
                  custom={i}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 12px 32px rgba(255,98,0,0.22), 0 4px 12px rgba(0,0,0,0.2)",
                    transition: { type: "spring" as const, stiffness: 400, damping: 20 },
                  }}
                >
                  <motion.span
                    className="mb-1"
                    animate={{ rotate: [0, 8, -4, 0] }}
                    transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                  >
                    <stat.icon style={{ width: 14, height: 14, color: "rgba(255,98,0,0.7)" }} />
                  </motion.span>
                  <span className="text-2xl font-black leading-none" style={{ color: "#ff6200" }}>
                    <CounterAnimation end={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                  </span>
                  <span className="text-[10px] font-medium mt-1 text-center leading-tight" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* ── Popular Searches ── */}
            <motion.div
              className="mt-7"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <p className="text-[12px] uppercase tracking-widest font-bold mb-2 text-black">
                Popular Searches
              </p>
              <motion.div
                className="flex flex-wrap gap-2.5"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {popularChips.map((chip) => {
                  const isHov = hoveredChip === chip.label;
                  return (
                    <motion.button
                      key={chip.label}
                      id={`chip-${chip.label.toLowerCase().replace(/\s+/g, "-")}`}
                      onClick={() => setSubject(chip.label)}
                      onHoverStart={() => setHoveredChip(chip.label)}
                      onHoverEnd={() => setHoveredChip(null)}
                      className="flex-shrink-0 flex items-center gap-2 pl-1.5 pr-4 py-1.5 rounded-full text-[12px] font-semibold whitespace-nowrap mb-2"
                      style={{
                        background: isHov ? chip.color : chip.bg,
                        color: isHov ? "#fff" : chip.color,
                        border: `1.5px solid ${isHov ? chip.color : chip.border}`,
                        boxShadow: isHov ? `0 8px 22px ${chip.shadow}` : "none",
                        transition: "background 0.22s ease, color 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease",
                      }}
                      variants={chipVariant}
                      animate={{ scale: isHov ? 1.07 : 1, y: isHov ? -3 : 0 }}
                      transition={{ type: "spring" as const, stiffness: 420, damping: 22 }}
                      whileTap={{ scale: 0.93 }}
                    >
                      {/* Icon badge circle */}
                      <span
                        style={{
                          width: 26, height: 26,
                          borderRadius: "50%",
                          background: isHov ? "rgba(255,255,255,0.22)" : chip.iconBg,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          flexShrink: 0,
                          transition: "background 0.22s ease",
                        }}
                      >
                        <chip.icon style={{ width: 13, height: 13, color: isHov ? "#fff" : chip.color, transition: "color 0.22s ease" }} />
                      </span>
                      {chip.label}
                    </motion.button>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>

          {/* ══ RIGHT COLUMN ══ */}
          <motion.div
            className="w-full lg:flex-1 flex justify-center lg:justify-end"
            variants={fadeRight}
            initial="hidden"
            animate="visible"
          >
            <div className="relative w-full" style={{ maxWidth: "460px" }}>

              {/* Main image card */}
              <motion.div
                className="relative w-full overflow-hidden"
                style={{
                  borderRadius: "24px",
                  boxShadow: "0 32px 90px rgba(0,0,0,0.15), 0 8px 24px rgba(0,0,0,0.08)",
                  aspectRatio: "4 / 5",
                }}
                whileHover={{ scale: 1.012, boxShadow: "0 40px 100px rgba(0,0,0,0.18)" }}
                transition={{ type: "spring" as const, stiffness: 200, damping: 25 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80"
                  alt="Students learning together in an online tutoring session"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  style={{ objectFit: "cover" }}
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: "linear-gradient(180deg, transparent 50%, rgba(17,17,24,0.38) 100%)" }}
                />
              </motion.div>

              {/* Floating badge — top-left — Avg Rating */}
              <motion.div
                className="absolute flex items-center gap-2.5 px-4 py-2.5"
                style={{
                  top: "6%", left: "-16%",
                  background: "rgba(255,255,255,0.97)",
                  borderRadius: "14px",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.14)",
                  border: "1px solid rgba(255,98,0,0.12)",
                }}
                initial={{ opacity: 0, x: -30, rotate: -4 }}
                animate={{ opacity: 1, x: 0, y: [0, -10, 0], rotate: [-4, -2, -4] }}
                transition={{
                  opacity: { delay: 0.6, duration: 0.7, ease: "easeOut" },
                  x:       { delay: 0.6, duration: 0.7, ease: "easeOut" },
                  y:       { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.7 },
                  rotate:  { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.7 },
                }}
              >
                <AiFillStar style={{ width: 20, height: 20, color: "#fbbf24" }} />
                <div>
                  <p className="text-[13px] font-black text-[#1A1A24] leading-none">4.9 / 5.0</p>
                  <p className="text-[10px] font-semibold mt-0.5" style={{ color: "rgba(26,26,36,0.5)" }}>Avg Rating</p>
                </div>
              </motion.div>

              {/* Floating badge — bottom-right — Live Session */}
              <motion.div
                className="absolute flex items-center gap-2.5 px-4 py-2.5"
                style={{
                  bottom: "12%", right: "-14%",
                  background: "rgba(255,255,255,0.97)",
                  borderRadius: "14px",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.14)",
                  border: "1px solid rgba(255,98,0,0.12)",
                }}
                initial={{ opacity: 0, x: 30, rotate: 3 }}
                animate={{ opacity: 1, x: 0, y: [0, 10, 0], rotate: [3, 5, 3] }}
                transition={{
                  opacity: { delay: 0.75, duration: 0.7, ease: "easeOut" },
                  x:       { delay: 0.75, duration: 0.7, ease: "easeOut" },
                  y:       { duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 1 },
                  rotate:  { duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 1 },
                }}
              >
                <span style={{ fontSize: "20px" }}>🎓</span>
                <div>
                  <p className="text-[13px] font-black text-[#1A1A24] leading-none">Live Session</p>
                  <p className="text-[10px] font-semibold mt-0.5" style={{ color: "rgba(26,26,36,0.5)" }}>Starting Today</p>
                </div>
              </motion.div>

              {/* Floating badge — top-right — Verified */}
              <motion.div
                className="absolute flex items-center gap-2 px-3.5 py-2"
                style={{
                  top: "20%", right: "-12%",
                  background: "#ff6200",
                  borderRadius: "12px",
                  boxShadow: "0 6px 20px rgba(255,98,0,0.4)",
                }}
                initial={{ opacity: 0, y: -20, rotate: 2 }}
                animate={{ opacity: 1, y: [0, -7, 0], rotate: [2, 4, 2] }}
                transition={{
                  opacity: { delay: 0.9, duration: 0.6, ease: "easeOut" },
                  y:       { duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                  rotate:  { duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                }}
              >
                <BsCheckCircleFill style={{ width: 14, height: 14, color: "#fff" }} />
                <span className="text-[11px] font-bold text-white whitespace-nowrap">Verified Tutors</span>
              </motion.div>

              {/* Decorative ring */}
              <motion.div
                className="absolute pointer-events-none -z-10"
                style={{
                  inset: "-16px", borderRadius: "32px",
                  background: "linear-gradient(135deg, rgba(255,98,0,0.07), rgba(77,20,140,0.04))",
                }}
                animate={{ rotate: [0, 1, -1, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Glow ring */}
              <motion.div
                className="absolute pointer-events-none -z-10"
                style={{
                  inset: "-2px", borderRadius: "26px",
                  background: "transparent",
                  border: "1.5px solid rgba(255,98,0,0.15)",
                }}
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to top, #fff7f2, transparent)" }}
      />

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
