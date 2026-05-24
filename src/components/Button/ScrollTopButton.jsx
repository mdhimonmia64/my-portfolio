"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{
            scale: 1.15,
            y: -5,
          }}
          whileTap={{
            scale: 0.9,
          }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black flex items-center justify-center text-xl shadow-[0_0_30px_rgba(34,211,238,0.4)]"
        >
          <FaArrowUp />
        </motion.button>
      )}
    </>
  );
}
