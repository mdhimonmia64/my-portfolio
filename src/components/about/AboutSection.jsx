"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGithub, FaDatabase } from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import toast, { Toaster } from "react-hot-toast";

export default function AboutSection() {
  return (
    <section
      className="relative overflow-hidden dark:bg-[#0b1120] dark:text-white py-28 px-6 lg:px-16"
      id="about"
    >
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex justify-center w-full px-4 sm:px-0"
        >
          <Image
            width={530}
            height={530}
            src={"/mdhimonmia-remove.png"}
            alt="my-image"
            className="w-full h-auto max-w-[480px] relative z-10 drop-shadow-[0_0_40px_rgba(34,211,238,0.7)]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-cyan-400 font-semibold text-lg tracking-widest uppercase"
          >
            About Me
          </motion.p>
          <h1 className=" text-4xl md:text-6xl font-black leading-tight">
            Passionate
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              MERN Stack Developer
            </span>
          </h1>
          <p className=" dark:text-slate-400 text-lg leading-9">
            I’m a passionate Full Stack Developer focused on building modern,
            scalable and user-friendly web applications. I enjoy creating
            premium UI/UX experiences with React, Next.js and Tailwind CSS while
            also building powerful backend systems using Node.js, Express.js and
            MongoDB.
          </p>

          <p className=" dark:text-slate-400 text-lg leading-9">
            My goal is to create fast, responsive and visually attractive
            digital products that provide real value to users and businesses.
          </p>
          <motion.div 
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.08,
                }
              }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-6"
          >
            {[
              {
                icon: <FaReact />,
                name: "React",
              },
              {
                icon: <SiNextdotjs />,
                name: "Next.js",
              },
              {
                icon: <SiTailwindcss />,
                name: "Tailwind",
              },
              {
                icon: <FaNodeJs />,
                name: "Node.js",
              },
              {
                icon: <SiExpress />,
                name: "Express",
              },
              {
                icon: <SiMongodb />,
                name: "MongoDB",
              },
              {
                icon: <FaDatabase />,
                name: "Database",
              },
              {
                icon: <FaGithub />,
                name: "GitHub",
              },
            ].map((skill, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.95 },
                  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100 } }
                }}
                whileHover={{
                  y: -8,
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(6,182,212,0.15)",
                }}
                className="bg-white/90 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-xl rounded-2xl p-5 flex flex-col items-center justify-center text-center hover:border-cyan-400 dark:hover:border-cyan-400 shadow-sm dark:shadow-none transition-all duration-300"
              >
                <div className="text-4xl text-cyan-500 dark:text-cyan-400">{skill.icon}</div>

                <p className="mt-3 font-medium text-slate-800 dark:text-slate-200">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
          <div className="flex flex-wrap gap-5 pt-7 md:pt-12">
            <motion.a
              href="/My-CV.pdf"
              download
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(6,182,212,0.3)",
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="bg-cyan-500 hover:bg-cyan-400 text-black px-5 md:px-8 py-2 md:py-4 rounded-full font-bold shadow-[0_4px_20px_rgba(6,182,212,0.25)] transition-all duration-300"
            >
              Download CV
            </motion.a>
            <motion.button
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
                  toast("Let's go.....")
              }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(6,182,212,0.08)",
                borderColor: "#06b6d4",
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="border border-slate-300 dark:border-white/10 dark:hover:border-cyan-400 hover:text-cyan-500 px-7 md:px-8 py-2 md:py-4 rounded-full font-semibold transition-all duration-300 cursor-pointer"
            >
              Hire Me
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
