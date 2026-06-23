"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("All");

  const categories = ["All", "Frontend", "Backend", "Languages & Other"];

  const skills = [
    { name: "React", level: 90, category: "Frontend" },
    { name: "Next.js", level: 85, category: "Frontend" },
    { name: "Tailwind CSS", level: 95, category: "Frontend" },
    { name: "JavaScript", level: 92, category: "Frontend" },
    { name: "HTML5", level: 95, category: "Languages & Other" },
    { name: "CSS3", level: 92, category: "Languages & Other" },
    { name: "Node.js", level: 80, category: "Backend" },
    { name: "Express.js", level: 75, category: "Backend" },
    { name: "MongoDB", level: 78, category: "Backend" },
    { name: "UI/UX Design", level: 70, category: "Languages & Other" },
  ];

  const filteredSkills =
    activeTab === "All"
      ? skills
      : skills.filter((s) => s.category === activeTab);

  return (
    <section
      className="relative py-28 bg-slate-50 dark:bg-[#050816] text-slate-900 dark:text-white overflow-hidden transition-colors duration-500"
      id="skills"
    >
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 dark:bg-cyan-500/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/10 dark:bg-purple-500/20 blur-[140px] rounded-full" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16 px-6"
      >
        <h2 className="text-5xl md:text-6xl font-black">
          My <span className="text-cyan-500 dark:text-cyan-400">Skills</span>
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mt-4 text-lg">
          Technologies I use to build modern, robust, and professional web applications
        </p>
      </motion.div>

      {/* Interactive Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12 px-6">
        {categories.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeTab === tab
                ? "text-black dark:text-black font-bold z-10"
                : "text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-white bg-white/60 dark:bg-white/5 border border-slate-200 dark:border-white/10"
            }`}
          >
            {tab}
            {activeTab === tab && (
              <motion.span
                layoutId="activeSkillTab"
                className="absolute inset-0 bg-cyan-400 rounded-full -z-10 shadow-md shadow-cyan-400/20"
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Grid Container */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6 min-h-[300px]">
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill, index) => (
            <motion.div
              layout
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-xl rounded-2xl p-6 hover:border-cyan-400 dark:hover:border-cyan-400 hover:shadow-lg dark:hover:shadow-[0_10px_30px_rgba(6,182,212,0.03)] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">{skill.name}</h3>
                <span className="text-cyan-600 dark:text-cyan-400 font-black text-sm">{skill.level}%</span>
              </div>

              {/* Sleek thin progress meter */}
              <div className="w-full h-2 bg-slate-200/60 dark:bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Decorative Orbs */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-24 h-24 bg-cyan-400/10 dark:bg-cyan-400/20 blur-2xl rounded-full"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 w-32 h-32 bg-purple-400/10 dark:bg-purple-400/20 blur-2xl rounded-full"
      />
    </section>
  );
}
