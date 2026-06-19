"use client";

import { motion } from "framer-motion";
import ThreeCanvas from "./ThreeCanvas";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ThreeCanvas />
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div className="flex-1 text-center lg:text-left" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-gray-600">AI-Powered Platform</span>
            </motion.div>

            <motion.h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-dark leading-tight tracking-tight mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}>
              Social Media, <span className="gradient-text">Orchestrated</span><br />by True AI.
            </motion.h1>

            <motion.p className="text-xl text-gray-600 mb-10 max-w-xl mx-auto lg:mx-0" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }}>
              The most advanced AI-powered social media management platform. Automate, optimize, and scale your social presence with intelligent agents.
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }}>
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 400, damping: 25 }} className="px-8 py-4 bg-gradient-to-r from-royal-blue to-royal-indigo text-white font-semibold rounded-2xl shadow-lg blue-glow-hover transition-all duration-300">
                Start Free Trial
              </motion.button>
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 400, damping: 25 }} className="px-8 py-4 glass-card text-slate-dark font-semibold rounded-2xl hover:glass-card-hover transition-all duration-300">
                Watch Demo
              </motion.button>
            </motion.div>

            <motion.div className="mt-16 grid grid-cols-3 gap-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }}>
              {[{ value: "10M+", label: "Posts Managed" }, { value: "50K+", label: "Active Users" }, { value: "99.9%", label: "Uptime" }].map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <div className="flex-1 h-[500px] lg:h-[600px]" />
        </div>
      </div>

      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }}>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} className="w-6 h-10 rounded-full border-2 border-gray-300 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
