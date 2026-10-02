import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50 lg:bottom-10 lg:right-10"
        >
          <button
            onClick={scrollToTop}
            className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-brand-card-bg/80 dark:bg-brand-card-bg/70 backdrop-blur-md hover:bg-brand-card-bg dark:hover:bg-brand-cream-dark/50 text-brand-slate/80 hover:text-brand-gold border border-brand-btn-border dark:border-brand-gold/30 hover:border-brand-gold/50 flex items-center justify-center shadow-md dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-all duration-300 active:scale-95 cursor-pointer focus:outline-hidden group"
            aria-label="Наверх"
          >
            <ArrowUp className="h-5 w-5 lg:h-6 lg:w-6 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
