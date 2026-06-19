"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const workflowSteps = [
  { title: "WhatsApp Command Center", description: "Control your entire social presence through simple WhatsApp messages. Our AI agent understands context and executes multi-step workflows.", visual: (
    <div className="w-full max-w-xs mx-auto">
      <div className="glass-card rounded-3xl p-4 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-royal-blue to-royal-indigo" />
          <div><div className="font-semibold text-sm">Agentic AI</div><div className="text-xs text-gray-500">Online</div></div>
        </div>
        <div className="space-y-3">
          <div className="flex justify-end"><div className="bg-gradient-to-r from-royal-blue to-royal-indigo text-white rounded-2xl rounded-br-md px-4 py-2 text-sm max-w-[200px]">Post this on all platforms</div></div>
          <div className="flex justify-start"><div className="bg-gray-100 rounded-2xl rounded-bl-md px-4 py-2 text-sm max-w-[200px] text-gray-700">Done! Posted to Instagram, Facebook, and LinkedIn.</div></div>
        </div>
      </div>
    </div>
  )},
  { title: "Autonomous Auto-Fixing", description: "AI continuously monitors engagement metrics and automatically adjusts content strategy. It learns what works and optimizes in real-time.", visual: (
    <div className="w-full max-w-sm mx-auto">
      <div className="glass-card rounded-3xl p-6 shadow-lg">
        <div className="text-xs text-gray-500 mb-4">Engagement Analytics</div>
        <div className="flex items-end gap-2 h-32">
          {[40, 55, 45, 70, 65, 85, 95].map((h, i) => (<div key={i} className="flex-1 rounded-t-lg bg-gradient-to-t from-royal-blue to-royal-indigo transition-all duration-500" style={{ height: `${h}%` }} />))}
        </div>
        <div className="flex justify-between mt-4 text-xs text-gray-400"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span></div>
      </div>
    </div>
  )},
  { title: "Canva & Meta Sync", description: "Seamless integration with Canva for design automation and Meta Business Suite for complete campaign orchestration across Facebook and Instagram.", visual: (
    <div className="w-full max-w-sm mx-auto">
      <div className="glass-card rounded-3xl p-6 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" /><span className="text-sm font-medium">Connected</span></div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {["#00C4CC", "#1877F2", "#E1306C"].map((c, i) => (<div key={i} className="aspect-square rounded-2xl flex items-center justify-center" style={{ backgroundColor: `${c}15` }}><div className="w-8 h-8 rounded-full" style={{ backgroundColor: c }} /></div>))}
        </div>
        <div className="mt-6 flex items-center gap-2"><div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden"><div className="w-[70%] h-full bg-gradient-to-r from-royal-blue to-royal-indigo rounded-full" /></div><span className="text-xs text-gray-500">Synced</span></div>
      </div>
    </div>
  )},
];

export default function Workflow() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-transparent to-frost-50">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 20 }} className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-dark mb-4"><span className="gradient-text">Agentic Workflow</span></h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Watch how AI transforms your social media management</p>
        </motion.div>

        <div className="space-y-32">
          {workflowSteps.map((step, index) => (
            <WorkflowCard key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkflowCard({ step, index }: { step: typeof workflowSteps[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(cardRef.current, { opacity: 0.3, scale: 0.95 }, { opacity: 1, scale: 1, scrollTrigger: { trigger: cardRef.current, start: "top 80%", end: "top 20%", scrub: 1 } });
    }
  }, []);
  const isEven = index % 2 === 0;
  return (
    <motion.div ref={cardRef} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 20 }} className={`flex flex-col lg:flex-row items-center gap-12 ${isEven ? "" : "lg:flex-row-reverse"}`}>
      <div className="flex-1"><div className="glass-card rounded-[2rem] p-12 blue-glow transition-all duration-500">{step.visual}</div></div>
      <div className="flex-1 text-center lg:text-left">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium text-royal-blue mb-4">Step {index + 1}</motion.div>
        <h3 className="text-3xl md:text-4xl font-bold text-slate-dark mb-4">{step.title}</h3>
        <p className="text-lg text-gray-600">{step.description}</p>
      </div>
    </motion.div>
  );
}
