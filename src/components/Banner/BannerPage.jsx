"use client";

import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

export default function BannerPage() {
  const heroRef = useRef(null);
  const canvasRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];

    const mouse = { x: null, y: null, radius: 280 };

    class Particle {
      constructor(x, y, dx, dy, size) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.size = size;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 3);
        ctx.fillStyle = "rgba(191,128,255,0.8)";
        ctx.fill();
      }

      update() {
        if (this.x > canvas.width || this.x < 0) this.dx *= -1;
        if (this.y > canvas.height || this.y < 0) this.dy *= -1;

        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (mouse.x !== null && distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          this.x -= (dx / distance) * force * 5;
          this.y -= (dy / distance) * force * 5;
        }

        this.x += this.dx;
        this.y += this.dy;
        this.draw();
      }
    }

    const init = () => {
      particles = [];
      const count = (canvas.width * canvas.height) / 10000;

      for (let i = 0; i < count; i++) {
        particles.push(
          new Particle(
            Math.random() * canvas.width,
            Math.random() * canvas.height,
            Math.random() * 0.4 - 0.2,
            Math.random() * 0.4 - 0.2,
            Math.random() * 2 + 1,
          ),
        );
      }
    };

    const connect = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const dist = dx * dx + dy * dy;

          if (dist < 12000) {
            const opacity = 1 - dist / 12000;

            ctx.strokeStyle = `rgba(200,150,255,${opacity})`;
            ctx.lineWidth = 1;

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

      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => p.update());
      connect();
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

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen overflow-hidden text-black dark:text-white flex items-center px-6 bg-gray-100 dark:bg-white/5 "
      id="home"
    >
      
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-white/0 dark:from-black/40 dark:to-black/0" />
      <div className="absolute inset-0 bg-white/100 dark:bg-black/40" />
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
            <motion.span
              animate={{
                color: [
                  "#22d3ee",
                  "#d46dee",
                  "#8FFF05",
                  "#05FFEA",
                  "#056DFF",
                  "#8b5cf6",
                  "#22d3ee",
                ],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Himon
            </motion.span>
          </h1>
          <h2 className="flex mt-6 text-2xl md:text-3xl dark:text-slate-300  font-semibold">
            MERN Stack
            {" Developer".split("").map((char, i) => (
              <span key={i} className="wave-char">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h2>

          <p className="pt-3 md:pt-6 dark:text-slate-400 text-lg leading-8 max-w-xl">
            I create modern, responsive and interactive web applications with
            React, Next.js, Express.js and Tailwind CSS.
          </p>

          <div className="flex gap-5 pt-4 md:pt-10 flex-wrap">
            <motion.button
              onClick={scrollToWork}
              whileHover={{
                scale: 1.08,
                boxShadow: "0px 0px 30px rgba(34,211,238,0.7)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-5 md:px-8 py-2 md:py-4 rounded-full bg-cyan-500 text-black font-bold"
            >
              Explore Work
            </motion.button>

            <motion.button
              onClick={scrollToContact}
              whileHover={{
                scale: 1.08,
                backgroundColor: "#06b6d4",
              }}
              className="px-7 md:px-8 py-2 md:py-4 rounded-full border border-cyan-400 font-semibold"
            >
              Contact Me
            </motion.button>
          </div>

          <div className="flex gap-5 pt-4 md:pt-10">
            {[
              {
                icon: FaGithub,
                link: "https://github.com/mdhimonmia64",
              },
              {
                icon: FaLinkedin,
                link: "https://www.linkedin.com/in/md-himon-mia-4961683b4",
              },

              {
                icon: FaTwitter,
                link: "https://x.com/mdhimonmia",
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
            />
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

                <p className="text-slate-400 text-sm mt-1">Node.js • MongoDB</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
