import React, { useState } from "react";
import { Sun, Moon, Calendar, Menu, X, ArrowUpRight } from "lucide-react";
import vkLogo from "../assets/images/icons8-vk-48.png";

interface NavbarProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
  onBookClick: () => void;
}

export default function Navbar({ theme, toggleTheme, onBookClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "С чем помогаю", href: "#help-section" },
    { label: "О специалисте", href: "#about-section" },
    { label: "Принципы работы", href: "#principles-section" },
    { label: "Адреса и прием", href: "#locations-section" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      id="main-navbar"
      className="sticky top-0 z-40 w-full bg-brand-cream-light/85 dark:bg-brand-cream-light/80 backdrop-blur-md border-b border-brand-cream-dark/50 dark:border-brand-cream-dark/20 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        {/* Brand & Specialty */}
        <a
          href="#"
          className="flex items-center gap-3.5 group cursor-pointer select-none"
          id="nav-brand-logo"
        >
          <div className="h-10 w-10 rounded-xl bg-brand-slate text-brand-cream-light dark:bg-brand-gold/20 dark:text-brand-slate flex items-center justify-center font-serif text-base font-bold tracking-wider border border-brand-gold/30 shadow-xs transition-transform duration-300 group-hover:scale-105">
            ПВ
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg sm:text-xl text-brand-slate leading-tight tracking-tight">
              Павел Веляев
            </span>
            <span className="text-[11px] font-medium text-brand-gold-dark dark:text-brand-gold uppercase tracking-wider">
              Врач-психотерапевт • Психиатр
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-6" id="nav-desktop-links">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-xs font-medium uppercase tracking-wider text-brand-slate/75 hover:text-brand-gold transition-colors cursor-pointer py-1"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2.5">
          {/* VK Link */}
          <a
            href="https://vk.ru/good_psihika"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-brand-slate/80 hover:text-brand-slate bg-brand-card-bg dark:bg-brand-card-bg/60 border border-brand-btn-border hover:border-brand-gold/40 transition-all cursor-pointer shadow-2xs"
            title="Связаться ВКонтакте"
            id="nav-vk-btn"
          >
            <img src={vkLogo} className="h-4 w-4 object-contain logo-brighten" alt="VK" />
            <span className="hidden lg:inline">ВКонтакте</span>
          </a>

          {/* Quick Book Appointment CTA */}
          <a
            href="https://app2.sqns.ru/booking/booking?orgid=8780#/employees"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider bg-brand-slate text-brand-cream-light dark:bg-brand-gold dark:text-brand-slate hover:opacity-90 active:scale-95 transition-all shadow-xs cursor-pointer"
            id="nav-quick-book-btn"
          >
            <Calendar className="h-3.5 w-3.5" />
            <span>Запись</span>
            <ArrowUpRight className="h-3.5 w-3.5 opacity-70" />
          </a>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Переключить тему оформления"
            id="nav-theme-toggle"
            className="p-2.5 rounded-xl bg-brand-card-bg dark:bg-brand-card-bg/60 text-brand-slate/80 hover:text-brand-gold border border-brand-btn-border hover:border-brand-gold/40 transition-all cursor-pointer shadow-2xs focus:outline-hidden"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 md:hidden rounded-xl bg-brand-card-bg dark:bg-brand-card-bg/60 text-brand-slate border border-brand-btn-border cursor-pointer focus:outline-hidden"
            aria-label="Меню"
            id="nav-mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="md:hidden border-t border-brand-cream-dark/40 dark:border-brand-cream-dark/20 bg-brand-cream-light/95 dark:bg-brand-cream-light/95 px-6 py-5 space-y-4 backdrop-blur-lg shadow-lg"
          id="nav-mobile-drawer"
        >
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-sm font-medium text-brand-slate hover:text-brand-gold py-1 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="pt-3 border-t border-brand-cream-dark/30 dark:border-brand-cream-dark/20 flex flex-col gap-2.5">
            <a
              href="https://app2.sqns.ru/booking/booking?orgid=8780#/employees"
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 px-4 rounded-xl text-center text-xs font-bold uppercase tracking-wider bg-brand-slate text-brand-cream-light dark:bg-brand-gold dark:text-brand-slate flex items-center justify-center gap-2 shadow-xs cursor-pointer"
            >
              <Calendar className="h-4 w-4" />
              <span>Записаться на прием</span>
            </a>
            <a
              href="https://vk.ru/good_psihika"
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 px-4 rounded-xl text-center text-xs font-semibold text-brand-slate bg-brand-card-bg border border-brand-btn-border flex items-center justify-center gap-2 cursor-pointer"
            >
              <img src={vkLogo} className="h-4 w-4 object-contain logo-brighten" alt="VK" />
              <span>Связаться ВКонтакте</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
