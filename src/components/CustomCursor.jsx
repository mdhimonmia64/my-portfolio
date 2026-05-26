"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AdvancedCursor() {
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;

      gsap.to(dot.current, {
        x: clientX,
        y: clientY,
        duration: 0.1,
      });

      gsap.to(ring.current, {
        x: clientX,
        y: clientY,
        duration: 0.25,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      {/* inner dot */}
      <div
        ref={dot}
        className="fixed top-0 left-0 w-3 h-3 bg-cyan-400 rounded-full pointer-events-none z-[9999] mix-blend-difference"
      />

      {/* outer ring */}
      <div
        ref={ring}
        className="fixed top-0 left-0 w-10 h-10 border border-cyan-400 rounded-full pointer-events-none z-[9998] opacity-60"
      />
    </>
  );
}
