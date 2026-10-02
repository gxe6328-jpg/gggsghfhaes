import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CursorBackgroundEffect() {
  const [isSupported, setIsSupported] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const idleTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Mouse coordinates
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  // Smooth spring physics for soft lag and inertia
  const smoothX = useSpring(mouseX, { damping: 28, stiffness: 140, mass: 0.8 });
  const smoothY = useSpring(mouseY, { damping: 28, stiffness: 140, mass: 0.8 });

  useEffect(() => {
    // Only enable on devices with fine pointer (mouse / trackpad)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setIsSupported(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsSupported(e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaChange);

    const handleMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      idleTimerRef.current = setTimeout(() => {
        // Soft idle settle
      }, 150);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };
  }, [mouseX, mouseY]);

  if (!isSupported) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
      {/* Soft, wide ambient background illumination (no harsh bright center, seamlessly blends into canvas) */}
      <motion.div
        className="absolute top-0 left-0 w-[550px] h-[550px] -ml-[275px] -mt-[275px] rounded-full pointer-events-none transition-opacity duration-700 ease-out"
        style={{
          x: smoothX,
          y: smoothY,
          opacity: isVisible ? 1 : 0,
          background:
            "radial-gradient(circle at center, rgba(186,160,111,0.07) 0%, rgba(186,160,111,0.03) 40%, rgba(95,107,94,0.01) 60%, transparent 75%)",
          filter: "blur(25px)"
        }}
      />
    </div>
  );
}
