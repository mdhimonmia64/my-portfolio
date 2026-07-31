"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.button
      whileHover={{
        scale: 1.1,
        rotate: 10,
      }}
      whileTap={{
        scale: 0.9,
      }}
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
      className="w-6 md:w-11 h-5 md:h-7 rounded-2xl bg-black dark:bg-base-300 backdrop-blur-xl border border-white/10 flex items-center justify-center text-xl text-black dark:text-white shadow-lg"
    >
      {theme === "dark" ? (
        <FaSun className="text-yellow-400" />
      ) : (
        <FaMoon className="text-white" />
      )}
    </motion.button>
  );
}
