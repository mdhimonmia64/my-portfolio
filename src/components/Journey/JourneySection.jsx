"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  FaGraduationCap,
  FaCode,
  FaLaptopCode,
  FaRocket,
} from "react-icons/fa";

export default function JourneySection() {
  const containerRef = useRef(null);
  
  // Track scroll position of the timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Smooth out scroll progress
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const journeyData = [
    {
      icon: <FaGraduationCap />,
      title: "Started Learning Programming",
      year: "2023",
      description:
        "Started my programming journey with HTML, CSS, and JavaScript while exploring modern web technologies.",
      color: "from-cyan-400 to-blue-500",
    },
    {
      icon: <FaCode />,
      title: "Frontend Development",
      year: "2024",
      description:
        "Built responsive and interactive UI using React.js, Tailwind CSS, and modern animation libraries.",
      color: "from-purple-400 to-pink-500",
    },
    {
      icon: <FaLaptopCode />,
      title: "MERN Stack Journey",
      year: "2025",
      description:
        "Started building full-stack applications using MongoDB, Express.js, React, and Node.js.",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: <FaRocket />,
      title: "Professional Projects",
      year: "2026",
      description:
        "Creating premium web applications with modern UI/UX, animations, and optimized performance.",
      color: "from-orange-400 to-red-500",
    },
  ];

  return (
    <section
      id="journey"
      ref={containerRef}
      className="relative py-32 overflow-hidden bg-slate-50 dark:bg-[#050816] transition-colors duration-500"
    >
      {/* Dynamic Background Glowing Orbs */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/20 blur-[140px] rounded-full pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/20 blur-[140px] rounded-full pointer-events-none"
      />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(to_right,rgba(0,0,0,0.015)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.p
            animate={{
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="text-cyan-500 dark:text-cyan-400 font-bold tracking-[6px] uppercase text-sm"
          >
            My Journey
          </motion.p>

          <h2 className="mt-4 text-5xl md:text-7xl font-black text-slate-900 dark:text-white">
            Growth &
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              {" "}
              Experience
            </span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
            My journey from learning web development basics to creating modern, responsive, and professional full-stack applications.
          </p>
        </motion.div>

        {/* Timeline container */}
        <div className="relative mt-28">
          {/* Static gray timeline line track */}
          <div className="absolute left-1/2 top-0 hidden md:block w-[3px] h-full bg-slate-200 dark:bg-white/10 -translate-x-1/2 rounded-full" />

          {/* Dynamic Scroll-Drawing line track */}
          <motion.div
            style={{
              scaleY: scaleY,
              transformOrigin: "top"
            }}
            className="absolute left-1/2 top-0 hidden md:block w-[3px] h-full bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 -translate-x-1/2 rounded-full shadow-[0_0_10px_#22d3ee]"
          />

          <div className="space-y-20">
            {journeyData.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 80
                }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Timeline Card */}
                <motion.div
                  whileHover={{
                    scale: 1.03,
                    y: -8,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 15
                  }}
                  className="w-full md:w-[45%] relative"
                >
                  {/* Decorative glowing background mesh behind card */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.color} blur-2xl rounded-[40px] opacity-10 dark:opacity-15`} />

                  <div className="relative bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-md dark:shadow-none backdrop-blur-2xl rounded-[40px] p-8 overflow-hidden">
                    {/* Top gradient highlight strip */}
                    <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${item.color}`} />

                    <div className="flex gap-6 items-start">
                      <motion.div
                        animate={{
                          y: [0, -6, 0],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 4,
                          ease: "easeInOut",
                          delay: index * 0.5
                        }}
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center text-2xl text-white shadow-lg shrink-0`}
                      >
                        {item.icon}
                      </motion.div>

                      <div>
                        <span className="text-cyan-600 dark:text-cyan-400 font-bold text-base">
                          {item.year}
                        </span>
                        <h3 className="text-2xl font-black text-slate-800 dark:text-white mt-1">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <p className="mt-6 text-slate-600 dark:text-slate-400 leading-relaxed text-[15px]">
                      {item.description}
                    </p>
                  </div>
                </motion.div>

                {/* Timeline circle node */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-50 dark:bg-[#050816] items-center justify-center border-4 border-slate-200 dark:border-white/10 z-20">
                  <motion.div
                    className="w-3.5 h-3.5 rounded-full bg-cyan-400"
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
