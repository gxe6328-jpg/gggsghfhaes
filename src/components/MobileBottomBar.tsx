import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, ArrowUpRight } from "lucide-react";
import vkLogo from "../assets/images/icons8-vk-48.png";

export default function MobileBottomBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 220) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-3 left-3 right-3 z-40 lg:hidden"
          id="mobile-floating-booking-bar"
        >
          <div className="p-2 rounded-2xl bg-brand-card-bg/95 dark:bg-brand-card-bg/90 backdrop-blur-xl border border-brand-gold/40 shadow-xl flex items-center gap-2">
            <a
              href="https://app2.sqns.ru/booking/booking?orgid=8780#/employees"
              target="_blank"
              rel="noreferrer"
              className="flex-1 py-3 px-4 rounded-xl bg-brand-slate text-brand-cream-light dark:bg-brand-gold dark:text-brand-slate text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs active:scale-[0.98] transition-all text-center"
            >
              <Calendar className="h-4 w-4" />
              <span>Запись на прием</span>
              <ArrowUpRight className="h-3.5 w-3.5 opacity-70" />
            </a>

            <a
              href="https://vk.ru/good_psihika"
              target="_blank"
              rel="noreferrer"
              aria-label="Связаться в ВКонтакте"
              className="p-3 rounded-xl bg-brand-cream/40 dark:bg-brand-cream-dark/25 border border-brand-btn-border text-brand-slate flex items-center justify-center active:scale-95 transition-all"
            >
              <img src={vkLogo} className="h-5 w-5 object-contain logo-brighten" alt="VK" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
