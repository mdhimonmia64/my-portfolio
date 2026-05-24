"use client";

import { motion } from "framer-motion";
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
  return (
    <section
      className="relative py-28 dark:bg-[#050816] dark:text-white overflow-hidden"
      id="contact"
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
          Contact <span className="text-cyan-400">Me</span>
        </h2>
        <p className="dark:text-slate-400 mt-4">
          Let's build something amazing together 🚀
        </p>
      </motion.div>
      <div className="max-w-7xl mx-auto px-6 lg:px-2 grid lg:grid-cols-3 gap-3 md:gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-6">Get in Touch 👋</h3>

          <p className="dark:text-slate-400 leading-8">
            I am always open to discussing new projects, creative ideas or
            opportunities to be part of your visions. Feel free to contact me
            anytime.
          </p>

          <div>
            <div className="flex items-center gap-3 px-3 py-2 rounded-2xl bg-white/5 border dark:border-white/10 backdrop-blur-xl dark:text-white hover:bg-cyan-500 hover:text-black transition cursor-pointer">
              <MdOutlineEmail className="text-2xl" />

              <p className="text-2xl font-medium">mdhimonmia64@gmail.com</p>
            </div>

            <div className="flex items-center gap-3 px-3 py-2 rounded-2xl bg-white/5 border dark:border-white/10 backdrop-blur-xl dark:text-white hover:bg-cyan-500 hover:text-black transition cursor-pointer my-2">
              <SiWhatsapp className="text-2xl" />

              <p className="text-2xl font-medium">+88013-19959656</p>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 rounded-2xl bg-white/5 border dark:border-white/10 backdrop-blur-xl dark:text-white hover:bg-cyan-500 hover:text-black transition cursor-pointer">
              <SlLocationPin className="text-2xl" />

              <p className="text-2xl font-medium">
                Gouripur,Mymensingh,Bangladesh
              </p>
            </div>
          </div>

          <div className="flex gap-5 mt-10">
            {[
              { icon: <FaGithub />, link: "https://github.com/mdhimonmia64" },
              { icon: <FaLinkedin />, link: "https://linkedin.com" },
              { icon: <FaInstagram />, link: "https://instagram.com" },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                whileHover={{
                  y: -8,
                  scale: 1.2,
                  rotate: 10,
                }}
                className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/5 border dark:border-white/10 backdrop-blur-xl text-2xl hover:bg-cyan-500 hover:text-black transition"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl"
        >
          <form className="space-y-6">
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-xl bg-black/30 border border-white/10 focus:border-cyan-400 outline-none"
            />

            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-xl bg-black/30 border border-white/10 focus:border-cyan-400 outline-none"
            />

            <motion.textarea
              whileFocus={{ scale: 1.02 }}
              rows="5"
              placeholder="Your Message"
              className="w-full p-4 rounded-xl bg-black/30 border border-white/10 focus:border-cyan-400 outline-none resize-none"
            />

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 30px rgba(34,211,238,0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="w-full flex items-center justify-center gap-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-4 rounded-xl transition"
            >
              Send Message <FaPaperPlane />
            </motion.button>
          </form>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl overflow-hidden border border-white/10 bg-white/5"
        >
          <iframe
            src="https://www.google.com/maps?q=23.8103,90.4125&z=15&output=embed"
            className="w-full h-[500px]"
            loading="lazy"
          />
        </motion.div>
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
