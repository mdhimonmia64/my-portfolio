"use client";

import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCode,
  FaLaptopCode,
  FaRocket,
} from "react-icons/fa";

export default function JourneySection() {
  const journeyData = [
    {
      icon: <FaGraduationCap />,
      title: "Started Learning Programming",
      year: "2023",
      description:
        "Started my programming journey with HTML, CSS, and JavaScript while exploring modern web technologies.",
      color: "from-cyan-400 to-blue-500",
    },

    {
      icon: <FaCode />,
      title: "Frontend Development",
      year: "2024",
      description:
        "Built responsive and interactive UI using React.js, Tailwind CSS, and modern animation libraries.",
      color: "from-purple-400 to-pink-500",
    },

    {
      icon: <FaLaptopCode />,
      title: "MERN Stack Journey",
      year: "2025",
      description:
        "Started building full-stack applications using MongoDB, Express.js, React, and Node.js.",
      color: "from-green-400 to-emerald-500",
    },

    {
      icon: <FaRocket />,
      title: "Professional Projects",
      year: "2026",
      description:
        "Creating premium web applications with modern UI/UX, animations, and optimized performance.",
      color: "from-orange-400 to-red-500",
    },
  ];

  return (
    <section
      id="journey"
      className="relative py-32 overflow-hidden bg-white dark:bg-[#050816]"
    >
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -80, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
        className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/20 blur-[140px] rounded-full"
      />

      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, 80, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "linear",
        }}
        className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 blur-[140px] rounded-full"
      />

      {[
        { top: "10%", left: "15%" },
        { top: "20%", left: "80%" },
        { top: "35%", left: "40%" },
        { top: "50%", left: "10%" },
        { top: "70%", left: "90%" },
        { top: "85%", left: "35%" },
        { top: "25%", left: "60%" },
        { top: "65%", left: "50%" },
      ].map((particle, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 3 + i,
          }}
          className="absolute w-2 h-2 rounded-full bg-cyan-400"
          style={{
            top: particle.top,
            left: particle.left,
          }}
        />
      ))}

      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.p
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="text-cyan-500 font-semibold tracking-[6px] uppercase"
          >
            My Journey
          </motion.p>

          <h2 className="mt-4 text-5xl md:text-7xl font-black text-black dark:text-white">
            Growth &
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              {" "}
              Experience
            </span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-slate-700 dark:text-slate-400 text-lg leading-8">
            My journey from learning web development basics to creating modern,
            responsive, and professional full-stack applications.
          </p>
        </motion.div>

        <div className="relative mt-28">
          <motion.div
            animate={{
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="absolute left-1/2 top-0 hidden md:block w-1 h-full bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 -translate-x-1/2 rounded-full"
          />

          <div className="space-y-20">
            {journeyData.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -100 : 100,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 1,
                }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                <motion.div
                  whileHover={{
                    scale: 1.04,
                    y: -15,
                    rotate: 1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 120,
                  }}
                  className="w-full md:w-[45%] relative"
                >
                  <motion.div
                    animate={{
                      opacity: [0.4, 0.8, 0.4],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                    }}
                    className={`absolute inset-0 bg-gradient-to-r ${item.color} blur-3xl rounded-[40px] opacity-20`}
                  />

                  <div className="relative bg-black/5 dark:bg-white/5 border border-gray-300 dark:border-white/10 backdrop-blur-2xl rounded-[40px] p-8 overflow-hidden">
                    <div
                      className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color}`}
                    />
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 4,
                      }}
                      className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${item.color} flex items-center justify-center text-3xl text-white shadow-2xl`}
                    >
                      {item.icon}
                    </motion.div>
                    <h3 className="mt-8 text-3xl font-bold text-black dark:text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-cyan-500 font-semibold text-lg">
                      {item.year}
                    </p>

                    <p className="mt-6 text-slate-700 dark:text-slate-400 leading-8 text-lg">
                      {item.description}
                    </p>
                    <motion.div
                      animate={{
                        x: [0, 220, 0],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 5,
                        ease: "linear",
                      }}
                      className="absolute bottom-3 left-0 w-3 h-3 rounded-full bg-cyan-400"
                    />
                  </div>
                </motion.div>
                <motion.div
                  animate={{
                    scale: [1, 1.4, 1],
                    boxShadow: [
                      "0 0 20px rgba(34,211,238,0.4)",
                      "0 0 40px rgba(34,211,238,0.9)",
                      "0 0 20px rgba(34,211,238,0.4)",
                    ],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                  }}
                  className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-cyan-400 border-4 border-[#050816] z-20"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
