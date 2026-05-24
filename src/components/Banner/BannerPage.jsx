"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function BannerPage() {
  const heroRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 120,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 120,
    damping: 20,
  });

  const handleMouseMove = (e) => {
    const rect = heroRef.current.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen overflow-hidden text-black dark:text-white flex items-center px-6  bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-white/10"
      id="home"
    >
      <motion.div
        style={{
          left: smoothX,
          top: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="absolute w-[500px] h-[500px] rounded-full bg-cyan-500/20 blur-[120px] pointer-events-none"
      />

      <motion.div
        style={{
          left: smoothX,
          top: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="absolute w-[250px] h-[250px] rounded-full bg-purple-500/30 blur-[80px] pointer-events-none"
      />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-cyan-400 text-lg mb-4 font-medium">
            👋 Welcome To My Portfolio
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Himon
            </span>
          </h1>

          <h2 className="mt-6 text-2xl md:text-3xl dark:text-slate-300  font-semibold">
            MERN Stack Developer 🚀
          </h2>

          <p className="mt-6 dark:text-slate-400 text-lg leading-8 max-w-xl">
            I create modern, responsive and interactive web applications with
            React, Next.js and Tailwind CSS.
          </p>

          <div className="flex gap-5 mt-10 flex-wrap">
            <motion.button
              whileHover={{
                scale: 1.08,
                boxShadow: "0px 0px 30px rgba(34,211,238,0.7)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-cyan-500 text-black font-bold"
            >
              Explore Work
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.08,
                backgroundColor: "#06b6d4",
              }}
              className="px-8 py-4 rounded-full border border-cyan-400 font-semibold"
            >
              Contact Me
            </motion.button>
          </div>

          <div className="flex gap-5 mt-10">
            {[
              {
                icon: FaGithub,
                link: "https://github.com/mdhimonmia64",
              },

              {
                icon: FaLinkedin,
                link: "",
              },

              {
                icon: FaInstagram,
                link: "",
              },
            ].map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    y: -10,
                    rotate: 10,
                    scale: 1.2,
                  }}
                  className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border dark:border-white/15 flex items-center justify-center cursor-pointer hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  <Icon size={24} />
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <motion.div
            whileHover={{
              rotate: 3,
              scale: 1.03,
            }}
            className="relative"
          >
            <div className="absolute inset-0 bg-cyan-500/30 blur-[100px] rounded-full" />

            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <motion.div
                whileHover={{
                  scale: 1.03,
                  rotate: 2,
                }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                }}
                className="relative"
              >
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 12,
                    ease: "linear",
                  }}
                  className="absolute inset-0 rounded-[40px] border-2 border-dashed border-cyan-400/40"
                />
                <div className="absolute inset-0 bg-cyan-500/20 blur-[100px] rounded-[40px]" />
                <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-[40px] p-5">
                  <Image
                    src={"/my-image.png"}
                    alt="about"
                    width={500}
                    height={500}
                    className="rounded-[30px] object-cover"
                  />
                </div>
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                  }}
                  className="absolute -top-5 -left-10 bg-[#111827]/80 border border-white/10 backdrop-blur-xl px-5 py-4 rounded-2xl"
                >
                  <h2 className="text-cyan-400 font-bold text-lg">Frontend</h2>

                  <p className="text-slate-400 text-sm mt-1">React • Next.js</p>
                </motion.div>
                <motion.div
                  animate={{
                    y: [0, 15, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                  }}
                  className="absolute -bottom-5 -right-10 bg-[#111827]/80 border border-white/10 backdrop-blur-xl px-5 py-4 rounded-2xl"
                >
                  <h2 className="text-purple-400 font-bold text-lg">Backend</h2>

                  <p className="text-slate-400 text-sm mt-1">
                    Node.js • MongoDB
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
