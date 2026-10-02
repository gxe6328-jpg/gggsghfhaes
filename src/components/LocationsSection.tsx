import React, { useState } from "react";
import { MapPin, Calendar, Share2, Check, ExternalLink, ShieldAlert } from "lucide-react";
import vkLogo from "../assets/images/icons8-vk-48.png";

export default function LocationsSection() {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Врач-психотерапевт Веляев Павел Александрович",
          text: "Персональный сайт врача-психотерапевта Павла Александровича Веляева",
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const locations = [
    {
      city: "г. Щёкино",
      badge: "Онлайн-запись",
      clinic: "Клиника на Пирогова",
      desc: "Частный амбулаторный прием, психотерапевтические сессии и консультации по записи.",
      actionText: "Записаться онлайн",
      actionUrl: "https://app2.sqns.ru/booking/booking?orgid=8780#/employees",
      isPrimary: true,
    },
    {
      city: "г. Алексин",
      badge: "Диспансерное отделение",
      clinic: "ГУЗ «ТОКПБ№1 им. Н.П. Каменева» (филиал)",
      desc: "Заведующий филиалом психоневрологического диспансера. Прием жителей района.",
      actionText: "Задать вопрос в VK",
      actionUrl: "https://vk.ru/good_psihika",
      isPrimary: false,
    },
    {
      city: "г. Тула",
      badge: "Клинический прием",
      clinic: "ГУЗ «ТОКПБ№1 им. Н.П. Каменева» / ГУЗ «ТГКБСМП им. Д.Я. Ваныкина»",
      desc: "Амбулаторный клинический прием и консультации пациентов в областных учреждениях.",
      actionText: "Задать вопрос в VK",
      actionUrl: "https://vk.ru/good_psihika",
      isPrimary: false,
    },
  ];

  return (
    <section className="py-12 sm:py-16 relative" id="locations-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-brand-gold-dark dark:text-brand-gold">
              География практики
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-brand-slate tracking-tight">
              Адреса и кабинеты приема
            </h2>
            <p className="text-sm text-brand-slate/75 font-sans max-w-xl">
              Очные консультации проводятся в оборудованных медицинских кабинетах в трёх городах Тульской области.
            </p>
          </div>

          <button
            onClick={handleShare}
            className="self-start sm:self-auto px-4 py-2.5 rounded-2xl bg-brand-card-bg dark:bg-brand-card-bg/60 border border-brand-btn-border hover:border-brand-gold/40 text-xs font-semibold text-brand-slate flex items-center gap-2 shadow-2xs hover:shadow-xs active:scale-95 transition-all cursor-pointer"
            id="btn-share-card"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 text-emerald-600" />
                <span>Ссылка скопирована</span>
              </>
            ) : (
              <>
                <Share2 className="h-4 w-4 text-brand-gold" />
                <span>Поделиться визиткой</span>
              </>
            )}
          </button>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {locations.map((loc, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-7 rounded-3xl bg-brand-card-bg/75 dark:bg-brand-card-bg/40 backdrop-blur-md border transition-all duration-300 flex flex-col justify-between ${
                loc.isPrimary
                  ? "border-brand-gold/70 shadow-md ring-1 ring-brand-gold/30"
                  : "border-brand-cream-dark/60 dark:border-brand-cream-dark/25 shadow-xs hover:border-brand-gold/40"
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-brand-gold-dark dark:text-brand-gold">
                    <MapPin className="h-4.5 w-4.5" />
                    <span className="font-bold text-base font-serif text-brand-slate">
                      {loc.city}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-brand-gold/15 text-brand-gold-dark dark:text-brand-gold">
                    {loc.badge}
                  </span>
                </div>

                <div>
                  <h4 className="font-serif font-bold text-lg text-brand-slate leading-snug">
                    {loc.clinic}
                  </h4>
                  <p className="text-xs text-brand-slate/75 mt-2 leading-relaxed font-sans">
                    {loc.desc}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-brand-cream-dark/35 dark:border-brand-cream-dark/15">
                <a
                  href={loc.actionUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full py-3 px-4 rounded-xl text-center text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    loc.isPrimary
                      ? "bg-brand-slate text-brand-cream-light dark:bg-brand-gold dark:text-brand-slate shadow-xs hover:opacity-90 active:scale-[0.98]"
                      : "bg-brand-cream/40 dark:bg-brand-cream-dark/20 text-brand-slate hover:bg-brand-gold/15 active:scale-[0.98]"
                  }`}
                >
                  {loc.isPrimary ? (
                    <>
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{loc.actionText}</span>
                    </>
                  ) : (
                    <>
                      <img src={vkLogo} className="h-3.5 w-3.5 object-contain logo-brighten" alt="VK" />
                      <span>{loc.actionText}</span>
                    </>
                  )}
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
