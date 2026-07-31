"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [progress, setProgress] = useState(0);
  const [words] = useState([
    "Hello", 
    "Hola", 
    "Bonjour", 
    "Ciao", 
    "안녕하세요", 
    "Welcome",
  ]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 4) + 1;
      });
    }, 30);
    const wordInterval = setInterval(() => {
      setIndex((prev) => (prev < words.length - 1 ? prev + 1 : prev));
    }, 180);

    return () => {
      clearInterval(timer);
      clearInterval(wordInterval);
    };
  }, [words.length]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{
            y: "-100vh",
            transition: {
              duration: 0.9,
              ease: [0.76, 0, 0.24, 1],
              delay: 0.2,
            },
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#030712] text-white"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

          <div className="relative flex flex-col items-center overflow-hidden">
            <motion.p
              key={index}
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -80, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-black tracking-wider text-cyan-400"
            >
              {words[index]}
            </motion.p>


            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-48 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent mt-4"
            />
          </div>

          <div className="absolute bottom-16 left-16 flex flex-col items-start font-mono">
            <span className="text-xs text-slate-500 uppercase tracking-widest mb-1">
              Initializing System
            </span>
            <div className="flex items-baseline text-cyan-400">
              <span className="text-4xl md:text-6xl font-bold">
                {Math.min(progress, 100)}
              </span>
              <span className="text-xl md:text-2xl font-semibold ml-1">%</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white/5">
            <motion.div
              style={{ width: `${progress}%` }}
              className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 shadow-[0_0_20px_#22d3ee]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
