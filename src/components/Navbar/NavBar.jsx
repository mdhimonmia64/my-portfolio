"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import ModeToggle from "../ModeToggle";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Journey", href: "#journey", id: "journey" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      const scrollPosition = window.scrollY + 200;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-4 md:px-8 py-4 ${
        scrolled ? "pt-2 md:pt-4" : "pt-4 md:pt-6"
      }`}
    >
      <nav
        className={`max-w-7xl mx-auto rounded-3xl transition-all duration-500 border ${
          scrolled
            ? "bg-white/70 dark:bg-black/60 backdrop-blur-xl border-gray-200/50 dark:border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.05)] dark:shadow-[0_10px_30px_rgba(34,211,238,0.03)] py-3 px-6"
            : "bg-transparent border-transparent py-4 px-6"
        } flex items-center justify-between`}
      >
        <Link
          href="#home"
          onClick={(e) => handleLinkClick(e, "#home")}
          className="text-2xl font-black tracking-tight text-black dark:text-white flex items-center gap-1 group"
        >
          <span>Hi</span>
          <span className="text-cyan-400 group-hover:animate-bounce">mon.</span>
        </Link>
        <ul className="hidden lg:flex items-center gap-2 bg-gray-100/50 dark:bg-white/5 border border-gray-200/50 dark:border-white/5 p-1 rounded-full">
          {navItems.map((item) => (
            <li key={item.id} className="relative">
              <Link
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className={`relative z-10 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 block ${
                  activeSection === item.id
                    ? "text-cyan-500 dark:text-cyan-400"
                    : "text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-white"
                }`}
              >
                {item.name}
                {activeSection === item.id && (
                  <motion.span
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-white dark:bg-white/10 rounded-full shadow-sm -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden lg:flex items-center gap-4">
          <ModeToggle />
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/MERN Stack Developer.pdf"
            download
            className="px-6 py-2.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-sm shadow-[0_4px_14px_rgba(34,211,238,0.3)] transition duration-300"
          >
            Download Resume
          </motion.a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ModeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-black dark:text-white hover:text-cyan-400 transition"
          >
            {mobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-4 right-4 mt-2 bg-white/95 dark:bg-black/95 backdrop-blur-2xl border border-gray-200/50 dark:border-white/10 rounded-3xl p-6 shadow-2xl z-40 lg:hidden flex flex-col gap-6"
          >
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className={`block w-full px-4 py-3 rounded-2xl text-base font-semibold transition ${
                      activeSection === item.id
                        ? "bg-cyan-500/10 text-cyan-500 dark:text-cyan-400"
                        : "text-slate-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-white/5"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="border-t border-gray-150 dark:border-white/10 pt-4 flex flex-col gap-4">
              <a
                href="/MERN Stack Developer.pdf"
                download
                className="w-full py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-center shadow-[0_4px_14px_rgba(34,211,238,0.3)] transition"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
