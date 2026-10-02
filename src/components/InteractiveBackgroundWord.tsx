import React, { useEffect, useRef } from "react";

interface InteractiveBackgroundWordProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function InteractiveBackgroundWord({
  text,
  className = "",
  style = {}
}: InteractiveBackgroundWordProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only register on devices with a fine pointer (mouse / trackpad)
    if (!window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    let isScheduled = false;
    let currentX = -1000;
    let currentY = -1000;

    const updateGlow = () => {
      isScheduled = false;
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();

      // Skip calculation if the element is well outside current viewport
      if (rect.bottom < -150 || rect.top > window.innerHeight + 150) {
        return;
      }

      // Calculate distance from cursor to the closest point of the word's bounding box
      const closestX = Math.max(rect.left, Math.min(currentX, rect.right));
      const closestY = Math.max(rect.top, Math.min(currentY, rect.bottom));
      const dist = Math.hypot(currentX - closestX, currentY - closestY);

      // Proximity threshold radius (in pixels)
      const maxRadius = 320;

      if (dist < maxRadius) {
        // Smooth non-linear falloff (closer = richer illumination)
        const ratio = 1 - dist / maxRadius;
        const intensity = Math.pow(ratio, 1.4);
        el.style.setProperty("--proximity-glow", intensity.toFixed(3));
      } else {
        el.style.setProperty("--proximity-glow", "0");
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      currentX = e.clientX;
      currentY = e.clientY;
      if (!isScheduled) {
        isScheduled = true;
        requestAnimationFrame(updateGlow);
      }
    };

    const handleMouseLeave = () => {
      currentX = -1000;
      currentY = -1000;
      const el = containerRef.current;
      if (el) {
        el.style.setProperty("--proximity-glow", "0");
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`font-serif select-none pointer-events-none transition-all duration-500 ease-out ${className}`}
      style={{
        ...style,
        // Base state: faint watermark text
        // Proximity state: smoothly illuminates and glows in warm gold
        opacity: `calc(0.035 + var(--proximity-glow, 0) * 0.35)`,
        color: `var(--proximity-glow, 0) > 0.05 ? var(--color-brand-gold) : inherit`,
        filter: `drop-shadow(0 0 calc(var(--proximity-glow, 0) * 22px) rgba(186, 160, 111, calc(var(--proximity-glow, 0) * 0.75)))`,
        transform: `translateY(calc(var(--proximity-glow, 0) * -2px))`
      }}
    >
      {/* Golden active layer overlay for rich chromatic illumination */}
      <span className="relative inline-block tracking-widest">
        {text}
        <span
          className="absolute inset-0 text-brand-gold dark:text-brand-gold transition-opacity duration-300 pointer-events-none select-none"
          style={{
            opacity: `var(--proximity-glow, 0)`
          }}
        >
          {text}
        </span>
      </span>
    </div>
  );
}
