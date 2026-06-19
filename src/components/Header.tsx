"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "glass-card" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-royal-blue to-royal-indigo flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-xl font-semibold text-slate-dark">Agentic<span className="gradient-text">Social</span></span>
          </motion.div>

          <nav className="hidden md:flex items-center gap-8">
            {["Features", "Pricing", "About", "Blog"].map((item) => (
              <motion.a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-gray-600 hover:text-slate-dark transition-colors relative group" whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-royal-blue to-royal-indigo group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </nav>

          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 400, damping: 25 }} className="px-6 py-2.5 bg-gradient-to-r from-royal-blue to-royal-indigo text-white text-sm font-medium rounded-full shadow-lg hover:shadow-xl transition-shadow">
            Launch Workspace
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
}
