"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Website",
      desc: "Full stack MERN e-commerce app with payment system.",
      img: "https://i.ibb.co/kVBGYrqW/himonmia.png",
      tech: ["React", "Node", "MongoDB"],
    },
    {
      title: "Portfolio Website",
      desc: "Modern animated portfolio with Next.js and Tailwind.",
      img: "https://i.ibb.co/kVBGYrqW/himonmia.png",
      tech: ["Next.js", "Tailwind", "Framer Motion"],
    },
    {
      title: "Blog Platform",
      desc: "Full featured blog system with admin dashboard.",
      img: "https://i.ibb.co/kVBGYrqW/himonmia.png",
      tech: ["Next.js", "MongoDB", "Express"],
    },
  ];

  return (
    <section
      className="relative py-28 dark:bg-[#051f29] dark:text-white overflow-hidden"
      id="projects"
    >
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-cyan-500/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-purple-500/20 blur-[140px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-5xl md:text-6xl font-black">
          My <span className="text-cyan-400">Projects</span>
        </h2>

        <p className="dark:text-slate-400 mt-4">
          Some of my recent work and side projects
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              rotate: 1,
            }}
            className="group relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl overflow-hidden shadow-xl hover:border-cyan-400 transition-all duration-300"
          >
            <div className="relative w-full h-52 overflow-hidden">
              <Image
                src={project.img}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition" />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold dark:text-white">{project.title}</h3>

              <p className="dark:text-slate-400 mt-2 text-sm leading-6">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full border border-cyan-500/20"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center mt-6">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="#"
                  className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300"
                >
                  <FaGithub /> Code
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="#"
                  className="flex items-center gap-2 text-sm dark:text-white hover:text-cyan-400"
                >
                  Live <FaExternalLinkAlt />
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
