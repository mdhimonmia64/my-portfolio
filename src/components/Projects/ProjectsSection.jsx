"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectsSection() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Full Stack", "Frontend"];

  const projects = [
    {
      title: "Zap Shift Parcel System",
      desc: "Full stack MERN e-commerce courier app with real-time tracking and payment system.",
      img: "/project-1.png",
      tech: ["React", "Node", "MongoDB", "Express"],
      category: "Full Stack",
      liveLink: "https://auth-firebase-router-bb1ac.web.app",
      githubLink: "https://github.com/mdhimonmia64/zap-shift-client"
    },
    {
      title: "Cars Doctors Resources",
      desc: "Comprehensive car service booking and repair shop management platform.",
      img: "/car-service.png",
      tech: ["Next.js", "MongoDB", "Express.js", "Tailwind"],
      category: "Full Stack",
      liveLink: "https://car-doctor-resources.vercel.app",
      githubLink: "https://github.com/mdhimonmia64/cars-doctors-resources"
    },
    {
      title: "Garden Community Space",
      desc: "Modern animated gardening forum and social community platform with Next.js.",
      img: "/PROJECT-2.png",
      tech: ["Next.js", "Tailwind", "Framer Motion"],
      category: "Frontend",
      liveLink: "https://remarkable-bavarois-4fbfd9.netlify.app",
      githubLink: "https://github.com/mdhimonmia64/gardening-community-client1"
    },
    {
      title: "Subscription Box Blog",
      desc: "Full-featured blogging platform with clean UI and complete admin management dashboard.",
      img: "/Projects-3.png",
      tech: ["Next.js", "MongoDB", "Express.js", "Tailwind"],
      category: "Full Stack",
      liveLink: "https://bucolic-sunshine-f910cd.netlify.app",
      githubLink: "https://github.com/mdhimonmia64/subscription-box"
    },
    {
      title: "Smart AI Service Client",
      desc: "Intelligent business AI tool integration showcase featuring modern sleek interfaces.",
      img: "/ai services.png",
      tech: ["React.js", "Next.js", "Express.js"],
      category: "Frontend",
      liveLink: "https://nextjs-app-self-nu.vercel.app",
      githubLink: "https://github.com/mdhimonmia64/AI-Service"
    }
  ];

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section
      className="relative py-28 bg-slate-50 dark:bg-[#021f29] text-slate-900 dark:text-white overflow-hidden transition-colors duration-500"
      id="projects"
    >
      {/* Background radial overlays */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-cyan-500/10 dark:bg-cyan-500/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-purple-500/10 dark:bg-purple-500/20 blur-[140px] rounded-full" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16 px-6"
      >
        <h2 className="text-5xl md:text-6xl font-black">
          My <span className="text-cyan-500 dark:text-cyan-400">Projects</span>
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mt-4 text-lg">
          A showcase of my recent responsive full-stack applications and side projects
        </p>
      </motion.div>

      {/* Category filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-12 px-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              filter === cat
                ? "text-black font-bold z-10"
                : "text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-white bg-white/60 dark:bg-white/5 border border-slate-200 dark:border-white/10"
            }`}
          >
            {cat}
            {filter === cat && (
              <motion.span
                layoutId="activeProjFilter"
                className="absolute inset-0 bg-cyan-400 rounded-full -z-10 shadow-md shadow-cyan-400/25"
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Projects Grid Container */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              key={project.title}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.5 }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 40px rgba(6,182,212,0.15)",
              }}
              className="group relative bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl overflow-hidden hover:border-cyan-400 dark:hover:border-cyan-400 shadow-sm dark:shadow-none transition-all duration-300 flex flex-col h-full"
            >
              {/* Image Frame */}
              <div className="relative w-full h-52 overflow-hidden shrink-0">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  sizes="(max-w-768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                
                {/* Category Badge overlay */}
                <span className="absolute top-4 right-4 text-xs font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-cyan-400 border border-cyan-400/20 px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>

              {/* Card Details */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white leading-tight group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mt-3 text-sm leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                <div>
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-medium bg-slate-100 dark:bg-cyan-500/5 text-slate-700 dark:text-cyan-300 px-3 py-0.5 rounded-full border border-slate-200 dark:border-cyan-500/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions links */}
                  <div className="flex justify-between items-center mt-6 pt-4 border-t border-slate-100 dark:border-white/5">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300 transition"
                    >
                      <FaGithub size={16} /> Code
                    </motion.a>

                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-semibold text-cyan-500 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition"
                    >
                      Live Demo <FaExternalLinkAlt size={13} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
