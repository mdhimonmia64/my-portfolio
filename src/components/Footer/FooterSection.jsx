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
    <footer className="relative dark:bg-[#020617] dark:text-white overflow-hidden border-t dark:border-white/10">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[140px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/10 blur-[140px] rounded-full" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-14">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-black">
              Hi<span className="text-cyan-400">mon.</span>
            </h2>

            <p className="dark:text-slate-400 leading-8 mt-6">
              Passionate MERN Stack Developer focused on creating modern,
              scalable and visually stunning web applications with premium user
              experiences.
            </p>

            <div className="flex gap-4 mt-8">
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
                  whileHover={{
                    y: -8,
                    scale: 1.15,
                    rotate: 8,
                  }}
                  className="w-12 h-12 rounded-2xl bg-white/5 border dark:border-white/10 backdrop-blur-xl flex items-center justify-center text-xl hover:bg-cyan-500 hover:text-black transition-all duration-300"
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8">Quick Links</h3>

            <div className="flex flex-col gap-5">
              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    x: 8,
                  }}
                >
                  <Link
                    href={item.href}
                    className="dark:text-slate-400 hover:text-cyan-400 transition-all duration-300"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8">Services</h3>

            <div className="flex flex-col gap-5">
              {[
                "Frontend Development",
                "Responsive Design",
                "API Integration",
              ].map((item, index) => (
                <motion.p
                  key={index}
                  whileHover={{
                    x: 8,
                  }}
                  className="dark:text-slate-400 hover:text-cyan-400 transition-all duration-300 cursor-pointer"
                >
                  {item}
                </motion.p>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8">Contact Info</h3>

            <div className="space-y-5">
              <motion.div
                whileHover={{
                  x: 8,
                }}
                className="flex items-center gap-4 bg-white/5 border dark:border-white/10 rounded-2xl p-4 hover:border-cyan-400 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-xl">
                  <MdOutlineEmail />
                </div>

                <div>
                  <p className="text-sm dark:text-slate-400">Email</p>

                  <h4 className="font-medium">mdhimonmia64@gmail.com</h4>
                </div>
              </motion.div>
              <motion.div
                whileHover={{
                  x: 8,
                }}
                className="flex items-center gap-4 bg-white/5 border dark:border-white/10 rounded-2xl p-4 hover:border-cyan-400 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-xl">
                  📍
                </div>

                <div>
                  <p className="text-sm dark:text-slate-400">Location</p>

                  <h4 className="font-medium">Mymensingh,Bangladesh</h4>
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
          className="border-t dark:border-white/10 mt-20 pt-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <p className="dark:text-slate-400 text-center">
            © 2026 Himon Mia. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
