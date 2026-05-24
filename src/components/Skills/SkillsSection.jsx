"use client";

import { motion } from "framer-motion";

export default function SkillsSection() {
  const skills = [
    { name: "HTML5", level: 95 },
    { name: "CSS3", level: 92 },
    { name: "Tailwind CSS", level: 95 },
    { name: "React", level: 90 },
    { name: "JavaScript", level: 92 },
    { name: "Node.js", level: 80 },
    { name: "MongoDB", level: 78 },
    { name: "Next.js", level: 85 },
    { name: "Express.js", level: 75 },
    { name: "UI/UX Design", level: 70 },
  ];

  return (
    <section
      className="relative py-28 dark:bg-[#050816] dark:text-white overflow-hidden"
      id="skills"
    >
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/20 blur-[140px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-5xl md:text-6xl font-black">
          My <span className="text-cyan-400">Skills</span>
        </h2>
        <p className="dark:text-slate-400 mt-4">
          Technologies I use to build modern web applications
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="bg-white/5 border dark:border-white/10 backdrop-blur-xl rounded-2xl p-6 hover:border-cyan-400 transition-all duration-300"
          >
            <div className="flex justify-between mb-3">
              <h3 className="text-lg font-semibold">{skill.name}</h3>

              <span className="text-cyan-400 font-bold">{skill.level}%</span>
            </div>

            <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full"
              />
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute top-20 left-10 w-24 h-24 bg-cyan-400/20 blur-2xl rounded-full"
      />

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="absolute bottom-20 right-10 w-32 h-32 bg-purple-400/20 blur-2xl rounded-full"
      />
    </section>
  );
}
