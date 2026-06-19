"use client";

import { motion } from "framer-motion";

const platforms = [
  { name: "Instagram", active: true, color: "#E1306C", icon: (
    <svg viewBox="0 0 24 24" className="w-8 h-8">
      <defs><linearGradient id="ig" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stopColor="#FFDC80"/><stop offset="50%" stopColor="#F77737"/><stop offset="100%" stopColor="#E1306C"/></linearGradient></defs>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="url(#ig)"/>
    </svg>
  )},
  { name: "Facebook", active: true, color: "#1877F2", icon: (
    <svg viewBox="0 0 24 24" className="w-8 h-8"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2"/></svg>
  )},
  { name: "LinkedIn", active: true, color: "#0A66C2", icon: (
    <svg viewBox="0 0 24 24" className="w-8 h-8"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#0A66C2"/></svg>
  )},
  { name: "YouTube", active: false, color: "#FF0000", badge: "Coming Soon", icon: (
    <svg viewBox="0 0 24 24" className="w-8 h-8"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#FF0000"/></svg>
  )},
];

export default function Platforms() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 20 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-dark mb-4">Seamlessly Connected to <span className="gradient-text">Your World</span></h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Manage all your social platforms from one intelligent dashboard.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {platforms.map((platform, index) => (
            <motion.div key={platform.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100, damping: 20 }} whileHover={platform.active ? { y: -8, scale: 1.02 } : {}} className={`relative glass-card rounded-3xl p-8 transition-all duration-300 cursor-${platform.active ? "pointer" : "not-allowed"} ${platform.active ? "hover:glass-card-hover group" : "opacity-60"}`}>
              {!platform.active && <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-royal-blue to-royal-indigo text-white text-xs font-medium">{platform.badge}</div>}
              <div className="flex flex-col items-center gap-4">
                <div className={`p-4 rounded-2xl transition-all duration-300 ${platform.active ? "group-hover:shadow-lg" : ""}`} style={{ backgroundColor: platform.active ? `${platform.color}10` : "#f5f5f5" }}>{platform.icon}</div>
                <span className={`font-semibold ${platform.active ? "text-slate-dark" : "text-gray-400"}`}>{platform.name}</span>
                {platform.active && <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
