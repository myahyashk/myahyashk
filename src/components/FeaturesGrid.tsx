"use client";

import { motion } from "framer-motion";

const features = [
  { title: "AI Content Generation", description: "Generate engaging posts, captions, and hashtags tailored to your brand voice using advanced AI models.", icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>, large: false },
  { title: "Smart Scheduling", description: "AI determines optimal posting times based on audience activity patterns and engagement history.", icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>, large: false },
  { title: "Analytics Dashboard", description: "Real-time insights into your social performance with AI-powered recommendations for improvement.", icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>, large: true },
  { title: "Multi-Platform Sync", description: "Seamlessly publish and manage content across all connected platforms from a single dashboard.", icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>, large: false },
  { title: "Team Collaboration", description: "Work together seamlessly with role-based permissions, approval workflows, and team analytics.", icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>, large: false },
  { title: "WhatsApp Integration", description: "Control your entire social presence through WhatsApp. Send commands and receive updates instantly.", icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>, large: true },
  { title: "Competitor Analysis", description: "Track competitor strategies and benchmark your performance with AI-generated insights.", icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>, large: false },
  { title: "Brand Voice Training", description: "Train the AI to match your unique brand voice and style for consistent messaging across all platforms.", icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>, large: false },
];

export default function FeaturesGrid() {
  const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
  const itemVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 20 } } };

  return (
    <section id="features" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 20 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-dark mb-4">Powerful Features, <span className="gradient-text">Effortlessly Simple</span></h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Everything you need to manage your social presence, powered by AI.</p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants} whileHover={{ y: -5, transition: { type: "spring", stiffness: 400, damping: 25 } }} className={`glass-card rounded-3xl p-8 border border-gray-100 hover:border-royal-blue/30 transition-all duration-300 cursor-pointer group ${feature.large ? "lg:col-span-2 lg:row-span-2" : ""}`}>
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-royal-blue/10 to-royal-indigo/10 flex items-center justify-center mb-6 text-royal-blue group-hover:from-royal-blue/20 group-hover:to-royal-indigo/20 transition-all duration-300">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-slate-dark mb-3">{feature.title}</h3>
                <p className="text-gray-600 flex-1">{feature.description}</p>
                <div className="mt-6 flex items-center gap-2 text-royal-blue font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"><span className="text-sm">Learn more</span><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
