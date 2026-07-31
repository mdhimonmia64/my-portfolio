"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function AdvancedCursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  const textRef = useRef(null);
  const [cursorText, setCursorText] = useState("");

  useEffect(() => {
    document.body.style.cursor = "none";

    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      gsap.to(dot.current, {
        x: clientX - 6,
        y: clientY - 6,
        duration: 0.08,
        ease: "power2.out",
      });

      gsap.to(ring.current, {
        x: clientX - 20,
        y: clientY - 20,
        duration: 0.22,
        ease: "power2.out",
      });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      
      const interactiveEl = target.closest("a, button, [role='button'], input, textarea, .group");
      
      if (interactiveEl) {
        gsap.to(ring.current, {
          scale: 1.8,
          borderColor: "#22d3ee",
          backgroundColor: "rgba(34, 211, 238, 0.15)",
          borderWidth: "1.5px",
          duration: 0.3,
        });
        
        gsap.to(dot.current, {
          scale: 0.5,
          opacity: 0,
          duration: 0.2,
        });
        if (interactiveEl.classList.contains("group") && interactiveEl.closest("#projects")) {
          setCursorText("VIEW");
          gsap.to(textRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.3,
          });
          gsap.to(ring.current, {
            scale: 2.2,
            backgroundColor: "rgba(34, 211, 238, 0.25)",
            borderColor: "#22d3ee",
            duration: 0.3,
          });
        }
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target;
      const interactiveEl = target.closest("a, button, [role='button'], input, textarea, .group");
      
      if (interactiveEl) {
        gsap.to(ring.current, {
          scale: 1,
          borderColor: "#22d3ee",
          backgroundColor: "rgba(34, 211, 238, 0)",
          borderWidth: "1px",
          duration: 0.3,
        });
        
        gsap.to(dot.current, {
          scale: 1,
          opacity: 1,
          duration: 0.2,
        });

        setCursorText("");
        gsap.to(textRef.current, {
          opacity: 0,
          scale: 0.5,
          duration: 0.2,
        });
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.body.style.cursor = "default";
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <>
      <div
        ref={dot}
        className="fixed top-0 left-0 w-3 h-3 bg-cyan-400 rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
      />

      <div
        ref={ring}
        className="fixed top-0 left-0 w-10 h-10 border border-cyan-400 rounded-full pointer-events-none z-[9998] opacity-80 flex items-center justify-center hidden md:block"
      >
        <span
          ref={textRef}
          className="text-[9px] font-black text-black dark:text-cyan-400 opacity-0 scale-50 select-none tracking-widest pointer-events-none"
        >
          {cursorText}
        </span>
      </div>
    </>
  );
}
