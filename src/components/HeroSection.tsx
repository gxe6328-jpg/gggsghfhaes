import React from "react";
import { motion } from "motion/react";
import { Award, BookOpen, ShieldCheck, ZoomIn, ArrowUpRight, Lock, MapPin, Calendar } from "lucide-react";
import pavelPortrait from "../assets/images/pavel_photo_latest.jpg";
import vkLogo from "../assets/images/icons8-vk-48.png";
import maxLogo from "../assets/images/Max_logo_2025.png";

interface HeroSectionProps {
  onImageOpen: () => void;
  onBlockedAction: (e: React.MouseEvent) => void;
}

export default function HeroSection({ onImageOpen, onBlockedAction }: HeroSectionProps) {
  return (
    <section className="relative pt-6 sm:pt-10 pb-12 sm:pb-16" id="hero-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Main Hero Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left / Content Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left order-2 lg:order-1">
            
            {/* Qualification Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/10 dark:bg-brand-gold/15 border border-brand-gold/30 text-brand-gold-dark dark:text-brand-gold text-xs font-semibold uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-gold animate-pulse" />
              <span>Врач-психиатр I категории • Психотерапевт</span>
            </div>

            {/* Doctor Name & Main Promise */}
            <div className="space-y-3">
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-brand-slate font-bold tracking-tight leading-[1.08]">
                Павел Александрович <br className="hidden sm:inline" />
                <span className="text-brand-gold-dark dark:text-brand-gold font-serif italic">
                  Веляев
                </span>
              </h1>
              <p className="text-base sm:text-lg text-brand-slate/80 leading-relaxed font-sans max-w-xl mx-auto lg:mx-0">
                Клиническая психиатрия и доказательная психотерапия. Помогаю обрести устойчивость, справиться с тревогой, депрессивными состояниями, зависимостями и сложными жизненными кризисами.
              </p>
            </div>

            {/* Action Buttons Group */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5 max-w-md mx-auto lg:mx-0">
              {/* Primary Booking Button */}
              <a
                href="https://app2.sqns.ru/booking/booking?orgid=8780#/employees"
                target="_blank"
                rel="noreferrer"
                className="flex-1 px-6 py-4 rounded-2xl bg-brand-slate text-brand-cream-light dark:bg-brand-gold dark:text-brand-slate font-sans text-xs uppercase tracking-[0.14em] font-extrabold flex flex-col items-center justify-center text-center shadow-md hover:shadow-lg hover:opacity-95 active:scale-[0.98] transition-all cursor-pointer group"
                id="hero-primary-booking-btn"
              >
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Записаться на прием</span>
                  <ArrowUpRight className="h-4 w-4 opacity-70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
                <span className="text-[10px] text-brand-cream-dark dark:text-brand-slate/80 mt-1 font-normal tracking-wide lowercase">
                  клиника на Пирогова (г. Щёкино)
                </span>
              </a>

              {/* Secondary VK Button */}
              <a
                href="https://vk.ru/good_psihika"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-4 rounded-2xl bg-brand-card-bg/80 dark:bg-brand-card-bg/50 border border-brand-btn-border hover:border-brand-gold/40 text-brand-slate font-sans text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2.5 shadow-2xs hover:shadow-xs active:scale-[0.98] transition-all cursor-pointer"
                id="hero-vk-btn"
              >
                <img src={vkLogo} className="h-5 w-5 object-contain logo-brighten" alt="VK" />
                <span>ВКонтакте</span>
              </a>
            </div>

            {/* Secondary note on messaging */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-brand-slate/60 pt-1">
              <button
                onClick={onBlockedAction}
                className="inline-flex items-center gap-1.5 hover:text-brand-slate transition-colors cursor-pointer"
                title="Мессенджер МАКС"
                id="hero-max-btn"
              >
                <img src={maxLogo} className="h-4 w-4 object-contain rounded-xs opacity-60 logo-brighten" alt="Max" />
                <span className="text-[11px] underline underline-offset-4 decoration-brand-cream-dark">
                  Мессенджер МАКС
                </span>
                <Lock className="h-3 w-3 text-brand-gold-dark/80" />
              </button>

              <span className="hidden sm:inline text-brand-cream-dark">•</span>

              <span className="inline-flex items-center gap-1 text-[11px]">
                <MapPin className="h-3.5 w-3.5 text-brand-gold shrink-0" />
                <span>Очные консультации: Щёкино, Алексин, Тула</span>
              </span>
            </div>

            {/* Clinical Trust Bar / Key Metrics */}
            <div className="pt-4 grid grid-cols-3 gap-2.5 sm:gap-4 max-w-xl mx-auto lg:mx-0">
              <div className="p-3.5 sm:p-4 rounded-2xl bg-brand-card-bg/60 dark:bg-brand-card-bg/40 border border-brand-cream-dark/50 dark:border-brand-cream-dark/20 text-center sm:text-left transition-all">
                <div className="font-serif font-bold text-lg sm:text-2xl text-brand-slate leading-none">
                  14+ лет
                </div>
                <div className="text-[11px] text-brand-slate/65 mt-1 font-medium">
                  Клинической практики
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-2xl bg-brand-card-bg/60 dark:bg-brand-card-bg/40 border border-brand-cream-dark/50 dark:border-brand-cream-dark/20 text-center sm:text-left transition-all">
                <div className="font-serif font-bold text-lg sm:text-2xl text-brand-slate leading-none">
                  I Категория
                </div>
                <div className="text-[11px] text-brand-slate/65 mt-1 font-medium">
                  Врач-психиатр
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-2xl bg-brand-card-bg/60 dark:bg-brand-card-bg/40 border border-brand-cream-dark/50 dark:border-brand-cream-dark/20 text-center sm:text-left transition-all">
                <div className="font-serif font-bold text-lg sm:text-2xl text-brand-slate leading-none">
                  100%
                </div>
                <div className="text-[11px] text-brand-slate/65 mt-1 font-medium">
                  Конфиденциальность
                </div>
              </div>
            </div>

          </div>

          {/* Right / Portrait Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center order-1 lg:order-2">
            <div className="relative">
              {/* Subtle architectural frame */}
              <div className="absolute -inset-2.5 rounded-3xl bg-gradient-to-b from-brand-gold/25 via-transparent to-brand-gold/10 dark:from-brand-gold/15 dark:to-transparent -z-10 blur-xs" />
              
              {/* Doctor Portrait Trigger */}
              <button
                onClick={onImageOpen}
                aria-label="Просмотреть фотографию врача в полном размере"
                className="group relative block w-56 h-72 sm:w-68 sm:h-84 md:w-76 md:h-96 rounded-2xl overflow-hidden bg-brand-cream border-2 border-brand-card-bg shadow-xl hover:shadow-2xl active:scale-[0.99] transition-all duration-300 cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-brand-gold"
                id="hero-portrait-trigger"
              >
                <img
                  src={pavelPortrait}
                  alt="Врач-психотерапевт Веляев Павел Александрович"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-[center_60%] scale-[1.12] group-hover:scale-[1.17] filter contrast-[1.02] transition-transform duration-700 ease-out"
                />

                {/* Gentle gradient overlay for high editorial finish */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Bottom Card Legend */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 text-left text-white">
                  <span className="block text-xs font-semibold font-serif tracking-wide">
                    Веляев Павел Александрович
                  </span>
                  <span className="text-[10px] text-white/75 font-sans">
                    Заведующий психоневрологическим диспансером
                  </span>
                </div>

                {/* Hover Zoom Prompt */}
                <div className="absolute top-3.5 right-3.5 p-2 rounded-full bg-black/40 backdrop-blur-md text-white/80 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="h-4 w-4" />
                </div>
              </button>

              {/* Status Badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-brand-card-bg dark:bg-brand-card-bg/90 border border-brand-cream-dark/60 dark:border-brand-cream-dark/30 shadow-md py-1.5 px-4 rounded-full flex items-center gap-2 whitespace-nowrap">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-medium text-brand-slate">
                  Прием открыт • Очно и онлайн
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
