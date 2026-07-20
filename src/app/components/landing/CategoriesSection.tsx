"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiArrowRight, FiGlobe, FiCode } from "react-icons/fi";
import { TbMath, TbMicroscope } from "react-icons/tb";
import { MdOutlineScience, MdOutlineSchool, MdTranslate } from "react-icons/md";
import { BsLaptop, BsBarChartFill } from "react-icons/bs";
import { RiGovernmentLine } from "react-icons/ri";
import { HiOutlineSun } from "react-icons/hi2";
import type { IconType } from "react-icons";

const categories: {
  name: string;
  icon: IconType;
}[] = [
  { name: "Mathematics",    icon: TbMath           },
  { name: "Physics",        icon: HiOutlineSun     },
  { name: "Chemistry",      icon: MdOutlineScience },
  { name: "Python",         icon: BsLaptop         },
  { name: "Web Dev",        icon: FiGlobe          },
  { name: "Spoken English", icon: MdTranslate      },
  { name: "Data Science",   icon: BsBarChartFill   },
  { name: "JEE Mains",      icon: MdOutlineSchool  },
  { name: "NEET",           icon: TbMicroscope     },
  { name: "UPSC",           icon: RiGovernmentLine },
  { name: "Spanish",        icon: FiGlobe          },
  { name: "Java",           icon: FiCode           },
];

export default function CategoriesSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef   = useRef<HTMLDivElement>(null);

  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });
  const gridInView   = useInView(gridRef,   { once: true, margin: "-60px" });

  return (
    <section
      id="categories"
      className="pt-12 "
      style={{ background: "var(--bg-primary, #ffffff)" }}
    >
      <div className="container-xl">
        {/* Top Header Row matching user design exactly */}
        <div
          ref={headerRef}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10"
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-[32px] font-black tracking-tight text-[#1A1A24]"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Explore All Subjects
          </motion.h2>

          <motion.a
            href="/tutor/search"
            className="inline-flex items-center gap-2 text-sm md:text-base font-bold text-[#ff6200] group self-start sm:self-auto cursor-pointer"
            initial={{ opacity: 0, x: 16 }}
            animate={headerInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            whileHover={{ x: 4 }}
          >
            <span>View All Categories</span>
            <FiArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </motion.a>
        </div>

        {/* Categories Grid matching user design: 6 columns on lg, rounded square orange icon box, title & count */}
        <motion.div
          ref={gridRef}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5 mb-8"
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
          variants={{
            hidden:  {},
            visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
          }}
        >
          {categories.map((cat, i) => (
            <motion.a
              key={i}
              href={`/tutor/search?subject=${encodeURIComponent(cat.name)}`}
              className="bg-white rounded-[20px] p-5 sm:p-6 flex flex-col items-start text-left group cursor-pointer relative overflow-hidden block"
              style={{
                border: "1.5px solid rgba(26,26,36,0.18)",
                boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
                transition: "border-color 0.2s, box-shadow 0.2s",
              }}
              variants={{
                hidden:  { opacity: 0, y: 24, scale: 0.94 },
                visible: { opacity: 1, y: 0,  scale: 1 },
              }}
              transition={{ type: "spring" as const, stiffness: 350, damping: 25 }}
              whileHover={{
                y: -5,
                boxShadow: "0 16px 32px rgba(140, 36, 69, 0.12)",
                borderColor: "#090909ff",
              }}
              whileTap={{ scale: 0.96 }}
            >
              {/* Circular Maroon (#8c2445) Icon Box */}
              <motion.div
                className="w-13 h-13 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-5 shadow-md"
                style={{
                  background: "#6c42a4ff",
                  color: "#ffffff",
                  boxShadow: "0 4px 14px rgba(140, 36, 69, 0.28)",
                }}
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring" as const, stiffness: 400, damping: 20 }}
              >
                <cat.icon className="w-6 h-6" />
              </motion.div>

              {/* Title */}
              <p className="text-[15px] sm:text-base font-bold text-[#1A1A24] leading-tight group-hover:text-[#8c2445] transition-colors">
                {cat.name}
              </p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
