"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

import { MdOutlineEmail } from "react-icons/md";

export default function FooterSection() {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Journey", href: "#journey" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];
  return (
    <footer className="relative bg-slate-100 dark:bg-[#020617] text-slate-800 dark:text-white overflow-hidden border-t border-slate-200 dark:border-white/10 transition-colors duration-500">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/5 dark:bg-cyan-500/10 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/5 dark:bg-purple-500/10 blur-[140px] rounded-full" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(to_right,rgba(0,0,0,0.01)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-black">
              Hi<span className="text-cyan-500">mon.</span>
            </h2>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mt-6">
              Passionate MERN Stack Developer focused on creating modern,
              scalable and visually stunning web applications with premium user
              experiences.
            </p>

            <div className="flex gap-3 mt-8">
              {[
                {
                  icon: <FaGithub />,
                  link: "https://github.com/mdhimonmia64",
                },
                {
                  icon: <FaLinkedin />,
                  link: "https://www.linkedin.com/in/md-himon-mia-4961683b4",
                },
                {
                  icon: <FaInstagram />,
                  link: "https://instagram.com",
                },
                {
                  icon: <FaFacebook />,
                  link: "https://facebook.com",
                },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    y: -6,
                    scale: 1.15,
                  }}
                  className="w-11 h-11 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none flex items-center justify-center text-xl text-slate-700 dark:text-slate-300 hover:bg-cyan-500 hover:text-black dark:hover:bg-cyan-500 dark:hover:text-black transition-all duration-300"
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Quick Links</h3>

            <div className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    x: 6,
                  }}
                >
                  <Link
                    href={item.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Services</h3>

            <div className="flex flex-col gap-4">
              {[
                "Frontend Development",
                "Responsive Design",
                "API Integration",
              ].map((item, index) => (
                <motion.p
                  key={index}
                  whileHover={{
                    x: 6,
                  }}
                  className="text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition cursor-pointer"
                >
                  {item}
                </motion.p>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Info</h3>

            <div className="space-y-4">
              <motion.div
                whileHover={{
                  x: 6,
                }}
                className="flex items-center gap-4 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-4 shadow-sm dark:shadow-none hover:border-cyan-500 dark:hover:border-cyan-500 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-500 text-lg shrink-0">
                  <MdOutlineEmail />
                </div>

                <div className="overflow-hidden">
                  <p className="text-xs text-slate-500">Email</p>

                  <h4 className="font-bold text-xs md:text-sm break-all">mdhimonmia64@gmail.com</h4>
                </div>
              </motion.div>
              <motion.div
                whileHover={{
                  x: 6,
                }}
                className="flex items-center gap-4 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-4 shadow-sm dark:shadow-none hover:border-cyan-500 dark:hover:border-cyan-500 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-500 text-lg shrink-0">
                  📍
                </div>

                <div>
                  <p className="text-xs text-slate-500">Location</p>

                  <h4 className="font-bold text-xs md:text-sm">Mymensingh, Bangladesh</h4>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-slate-200 dark:border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <p className="text-slate-500 dark:text-slate-400 text-center text-sm">
            © 2026 Himon Mia. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
