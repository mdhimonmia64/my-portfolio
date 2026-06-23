"use client";

import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaPaperPlane,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { SiWhatsapp } from "react-icons/si";
import { SlLocationPin } from "react-icons/sl";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    console.log({ name, email, message });
    setTimeout(async () => {
      try {
        await emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          form,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        );
        toast.success("Message sent successfully!");
        form.reset();
      } catch (error) {
        console.log(error);
        toast.error("Failed to send message");
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <section
      className="relative py-28 bg-slate-50 dark:bg-[#050816] text-slate-900 dark:text-white overflow-hidden transition-colors duration-500"
      id="contact"
    >
      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-cyan-500/10 dark:bg-cyan-500/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-purple-500/10 dark:bg-purple-500/20 blur-[140px] rounded-full" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-black">
          Contact <span className="text-cyan-500 dark:text-cyan-400">Me</span>
        </h2>
        <p className="text-slate-500 dark:text-slate-400 pt-4 text-lg">
          Let's build something amazing together 🚀
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-8 items-stretch">
        {/* Info Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col justify-between h-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-sm dark:shadow-none"
        >
          <div>
            <h3 className="text-3xl font-black mb-6">Get in Touch 👋</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              I am always open to discussing new projects, creative ideas or
              opportunities to be part of your visions. Feel free to contact me
              anytime.
            </p>

            <div className="space-y-4">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-100/70 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-slate-800 dark:text-white"
              >
                <MdOutlineEmail className="text-2xl text-cyan-500 shrink-0" />
                <div className="overflow-hidden">
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Email</p>
                  <p className="font-bold text-sm md:text-base break-all mt-0.5">mdhimonmia64@gmail.com</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-100/70 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-slate-800 dark:text-white"
              >
                <SiWhatsapp className="text-2xl text-green-500 shrink-0" />
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">WhatsApp</p>
                  <p className="font-bold text-sm md:text-base mt-0.5">+88013-19959656</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-100/70 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-slate-800 dark:text-white"
              >
                <SlLocationPin className="text-2xl text-red-500 shrink-0" />
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Location</p>
                  <p className="font-bold text-sm md:text-base mt-0.5">Gouripur, Mymensingh, BD</p>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="flex gap-4 mt-8 pt-6 border-t border-slate-155 dark:border-white/5">
            {[
              { icon: <FaGithub />, link: "https://github.com/mdhimonmia64" },
              { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/md-himon-mia-4961683b4" },
              { icon: <FaInstagram />, link: "https://instagram.com" },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  y: -6,
                  scale: 1.15,
                }}
                className="w-12 h-12 flex items-center justify-center rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xl text-slate-700 dark:text-slate-300 hover:bg-cyan-500 hover:text-black dark:hover:bg-cyan-500 dark:hover:text-black transition"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Form Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-sm dark:shadow-none flex flex-col justify-between"
        >
          <form className="space-y-6 h-full flex flex-col justify-between" onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full p-4 rounded-xl bg-slate-50 dark:bg-black/30 border border-slate-200 dark:border-white/10 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none text-slate-800 dark:text-white transition"
                />
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  className="w-full p-4 rounded-xl bg-slate-50 dark:bg-black/30 border border-slate-200 dark:border-white/10 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none text-slate-800 dark:text-white transition"
                />
              </div>

              <div className="relative">
                <textarea
                  rows="4"
                  name="message"
                  required
                  placeholder="Your Message"
                  className="w-full p-4 rounded-xl bg-slate-50 dark:bg-black/30 border border-slate-200 dark:border-white/10 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none resize-none text-slate-800 dark:text-white transition"
                />
              </div>
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{
                scale: 1.02,
                boxShadow: "0px 10px 20px rgba(6,182,212,0.2)",
              }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-4 rounded-xl transition cursor-pointer mt-6"
            >
              {loading ? (
                <>
                  <span className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                  Sending...
                </>
              ) : (
                <>
                  Send Message <FaPaperPlane />
                </>
              )}
            </motion.button>
          </form>
        </motion.div>

        {/* Map Column */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 shadow-sm dark:shadow-none h-full min-h-[350px]"
        >
          <iframe
            src="https://www.google.com/maps?q=23.8103,90.4125&z=12&output=embed"
            className="w-full h-full min-h-[350px] border-none"
            loading="lazy"
          />
        </motion.div>
      </div>

      {/* Decorative Orbs */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-24 h-24 bg-cyan-400/5 dark:bg-cyan-400/10 blur-2xl rounded-full"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 w-32 h-32 bg-purple-400/5 dark:bg-purple-400/10 blur-2xl rounded-full"
      />
    </section>
  );
}
