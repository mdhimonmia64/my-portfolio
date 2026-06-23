"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown } from "react-icons/fa";

export default function BannerPage() {
  const heroRef = useRef(null);
  const canvasRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 25 });
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 25 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];

    const mouse = { x: null, y: null, radius: 200 };

    class Particle {
      constructor(x, y, dx, dy, size) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.size = size;
      }

      draw(isDark) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? "rgba(34, 211, 238, 0.7)" : "rgba(147, 51, 234, 0.6)";
        ctx.fill();
      }

      update(isDark) {
        if (this.x > canvas.width || this.x < 0) this.dx *= -1;
        if (this.y > canvas.height || this.y < 0) this.dy *= -1;

        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (mouse.x !== null && distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          this.x -= (dx / distance) * force * 3;
          this.y -= (dy / distance) * force * 3;
        }

        this.x += this.dx;
        this.y += this.dy;
        this.draw(isDark);
      }
    }

    const init = () => {
      particles = [];
      const count = Math.min((canvas.width * canvas.height) / 15000, 100);

      for (let i = 0; i < count; i++) {
        particles.push(
          new Particle(
            Math.random() * canvas.width,
            Math.random() * canvas.height,
            Math.random() * 0.6 - 0.3,
            Math.random() * 0.6 - 0.3,
            Math.random() * 2 + 1.5,
          ),
        );
      }
    };

    const connect = (isDark) => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const dist = dx * dx + dy * dy;

          if (dist < 15000) {
            const opacity = 1 - dist / 15000;
            ctx.strokeStyle = isDark
              ? `rgba(34, 211, 238, ${opacity * 0.18})`
              : `rgba(147, 51, 234, ${opacity * 0.12})`;
            ctx.lineWidth = 0.8;

            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const isDark = document.documentElement.classList.contains("dark");

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => p.update(isDark));
      connect(isDark);
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    const move = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", move);

    resize();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToWork = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const jobTitle = "MERN Stack Developer";

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen overflow-hidden text-black dark:text-white flex items-center px-6 bg-slate-50 dark:bg-[#030712] transition-colors duration-500"
      id="home"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(34,211,238,0.08),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(168,85,247,0.08),transparent_40%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(to_right,rgba(0,0,0,0.015)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <motion.div
        style={{
          left: smoothX,
          top: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="absolute w-[450px] h-[450px] rounded-full bg-cyan-400/10 dark:bg-cyan-500/10 blur-[100px] pointer-events-none z-0"
      />
      <motion.div
        style={{
          left: smoothX,
          top: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="absolute w-[200px] h-[200px] rounded-full bg-purple-500/15 dark:bg-purple-500/15 blur-[80px] pointer-events-none z-0"
      />

      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full pt-30">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          

          <h1 className="text-4xl md:text-7xl font-black leading-[1.1] tracking-tight">
            Hi, I'm{" "}
            <motion.span
              animate={{
                color: [
                  "#06b6d4",
                  "#a855f7",
                  "#ec4899",
                  "#3b82f6",
                  "#06b6d4",
                ],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="relative inline-block"
            >
              Himon
            </motion.span>
          </h1>

          <h2 className="flex mt-4 text-[17px] md:text-4xl dark:text-slate-200 font-bold items-center gap-1.5">
            <span>A dedicated</span>
            <span className="text-cyan-500 dark:text-cyan-400 border-b-2 border-dashed border-cyan-400/50">
              {jobTitle}
            </span>
          </h2>

          <p className="pt-6 dark:text-slate-400 text-slate-600 text-lg leading-relaxed max-w-xl">
            I craft responsive interfaces and engineer efficient database solutions using React, Next.js, Node.js, Express, and MongoDB.
          </p>

          <div className="flex gap-5 pt-8 flex-wrap">
            <motion.button
              onClick={scrollToWork}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 25px rgba(6,182,212,0.4)",
              }}
              whileTap={{ scale: 0.98 }}
              className="px-4 py-2 md:px-8 md:py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold shadow-[0_4px_20px_rgba(6,182,212,0.25)] transition duration-300 cursor-pointer"
            >
              Explore Work
            </motion.button>

            <motion.button
              onClick={scrollToContact}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(6,182,212,0.08)",
                borderColor: "#06b6d4",
              }}
              whileTap={{ scale: 0.98 }}
              className="px-4 py-2 md:px-8 md:py-4 rounded-full border border-gray-300 dark:border-white/10 dark:hover:border-cyan-400 font-bold hover:text-cyan-500 transition duration-300 cursor-pointer"
            >
              Contact Me
            </motion.button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-12">
            {[
              {
                icon: FaGithub,
                link: "https://github.com/mdhimonmia64",
                color: "hover:bg-black hover:text-white"
              },
              {
                icon: FaLinkedin,
                link: "https://www.linkedin.com/in/md-himon-mia-4961683b4",
                color: "hover:bg-blue-600 hover:text-white"
              },
              {
                icon: FaTwitter,
                link: "https://x.com/mdhimonmia",
                color: "hover:bg-cyan-500 hover:text-black"
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
                    y: -8,
                    scale: 1.12,
                  }}
                  className={`w-12 h-12 rounded-2xl bg-white dark:bg-white/5 shadow-sm dark:shadow-none border border-gray-200 dark:border-white/10 flex items-center justify-center cursor-pointer transition-all duration-300 text-slate-700 dark:text-slate-300 ${item.color}`}
                >
                  <Icon size={20} />
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Hero Image Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center w-full px-4 sm:px-0"
        >
          <div className="relative w-full max-w-[400px]">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/25 to-purple-500/25 blur-[90px] rounded-full" />

            {/* Rotating dashed ring */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                repeat: Infinity,
                duration: 25,
                ease: "linear",
              }}
              className="absolute -inset-4 rounded-[45px] border-2 border-dashed border-cyan-400/30 dark:border-cyan-400/25 pointer-events-none"
            />

            {/* Glowing borders around image wrapper */}
            <div className="relative bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-xl backdrop-blur-xl rounded-[40px] p-3 sm:p-4">
              <Image
                src={"/my-image.png"}
                alt="about"
                width={420}
                height={420}
                className="w-full h-auto rounded-[30px] object-cover dark:brightness-95"
                priority
              />
            </div>

            {/* Animated Floating Badges */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut"
              }}
              className="hidden sm:block absolute -top-3 -left-8 bg-white/90 dark:bg-[#111827]/90 border border-gray-200 dark:border-white/10 backdrop-blur-xl px-5 py-3 rounded-2xl shadow-lg"
            >
              <h2 className="text-cyan-500 font-bold text-base">Frontend</h2>
              <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">React • Next.js</p>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4.5,
                ease: "easeInOut"
              }}
              className="hidden sm:block absolute -bottom-3 -right-8 bg-white/90 dark:bg-[#111827]/90 border border-gray-200 dark:border-white/10 backdrop-blur-xl px-5 py-3 rounded-2xl shadow-lg"
            >
              <h2 className="text-purple-500 font-bold text-base">Backend</h2>
              <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">Node.js • MongoDB</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Downward Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-55 text-slate-500 dark:text-slate-400">
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll Down</span>
        <motion.div
          animate={{
            y: [0, 6, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
        >
          <FaArrowDown size={14} />
        </motion.div>
      </div>
    </section>
  );
}
