import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Brain,
  Activity,
  HeartHandshake,
  Compass,
  Moon,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Calendar
} from "lucide-react";

interface HelpCategory {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  tags: string[];
  icon: React.ComponentType<{ className?: string }>;
  highlight?: boolean;
}

const categories: HelpCategory[] = [
  {
    id: "anxiety",
    title: "Тревога и панические атаки",
    subtitle: "Тревожные расстройства, фобии, ОКР",
    desc: "Внезапные приступы неконтролируемой паники, фоновое чувство тревоги и напряжения, страхи, навязчивые мысли и ритуалы. Помогаю снять острые проявления и устранить глубинную причину.",
    tags: ["Панические атаки", "ГТР", "Фобии", "Навязчивые мысли", "ОКР"],
    icon: Activity,
    highlight: true,
  },
  {
    id: "depression",
    title: "Депрессивные состояния",
    subtitle: "Апатия, упадок сил, ангедония",
    desc: "Сниженное настроение, постоянная усталость даже после отдыха, утрата способности радоваться, ощущение бессмысленности и пустоты. Комплексный клинический и психотерапевтический подход.",
    tags: ["Апатия", "Хроническая усталость", "Потеря смыслов", "Субдепрессия"],
    icon: Brain,
    highlight: false,
  },
  {
    id: "addiction",
    title: "Зависимости (Наркология)",
    subtitle: "Алкогольная, никотиновая, поведенческая",
    desc: "Квалифицированная наркологическая и психотерапевтическая помощь при различных видах химических и нехимических зависимостей, а также поддержка родственников (созависимость).",
    tags: ["Алкогольная зависимость", "Табакокурение", "Игромания", "Созависимость"],
    icon: ShieldCheck,
    highlight: false,
  },
  {
    id: "crisis",
    title: "Личностные кризисы",
    subtitle: "Самооценка, поиск опор, выгорание",
    desc: "Проблемы с уверенностью в себе, синдром самозванца, возрастные и профессиональные кризисы, эмоциональное выгорание и потеря ориентиров в жизни.",
    tags: ["Самооценка", "Выгорание", "Возрастной кризис", "Внутренние опоры"],
    icon: Compass,
    highlight: false,
  },
  {
    id: "relationships",
    title: "Сложности в отношениях",
    subtitle: "Партнерские, семейные и личные границы",
    desc: "Конфликты в паре или семье, трудности сепарации, эмоциональная зависимость, страх одиночества или сложности в выстраивании доверительных границ.",
    tags: ["Конфликты в паре", "Развод", "Границы", "Семейные кризисы"],
    icon: HeartHandshake,
    highlight: false,
  },
  {
    id: "sleep",
    title: "Сон и психосоматика",
    subtitle: "Бессонница, телесные симптомы стресса",
    desc: "Трудности с засыпанием, частые ночные пробуждения, кошмары, а также функциональные телесные боли, спазмы и зажимы без органических причин.",
    tags: ["Бессонница", "Тревожные сны", "Телесные зажимы", "Стресс"],
    icon: Moon,
    highlight: false,
  },
];

export default function HelpBentoGrid() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredCategories = selectedTag
    ? categories.filter((cat) => cat.tags.includes(selectedTag))
    : categories;

  return (
    <section className="py-12 sm:py-16 relative" id="help-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-brand-gold-dark dark:text-brand-gold">
              Направления практики
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-brand-slate tracking-tight">
              С какими запросами я помогаю
            </h2>
            <p className="text-sm text-brand-slate/75 font-sans max-w-xl">
              Сочетание врачебной квалификации психиатра и методов психотерапии с научно доказанной эффективностью.
            </p>
          </div>

          {/* Quick Filter Reset */}
          {selectedTag && (
            <button
              onClick={() => setSelectedTag(null)}
              className="text-xs text-brand-gold-dark dark:text-brand-gold underline underline-offset-4 hover:opacity-80 transition-opacity cursor-pointer self-start md:self-end"
            >
              Показать все направления (сбросить фильтр)
            </button>
          )}
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCategories.map((item) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                layout
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className={`flex flex-col justify-between p-6 rounded-3xl bg-brand-card-bg/75 dark:bg-brand-card-bg/40 backdrop-blur-md border transition-all duration-300 shadow-xs hover:shadow-md ${
                  item.highlight
                    ? "border-brand-gold/60 ring-1 ring-brand-gold/20"
                    : "border-brand-cream-dark/60 dark:border-brand-cream-dark/25 hover:border-brand-gold/40"
                }`}
              >
                <div className="space-y-4">
                  {/* Top row: Icon + Pill */}
                  <div className="flex items-center justify-between">
                    <div className="h-11 w-11 rounded-2xl bg-brand-gold/10 dark:bg-brand-gold/15 text-brand-gold-dark dark:text-brand-gold flex items-center justify-center">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    {item.highlight && (
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-brand-gold/15 text-brand-gold-dark dark:text-brand-gold">
                        Частый запрос
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="font-serif text-xl font-bold text-brand-slate leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs font-medium text-brand-gold-dark dark:text-brand-gold mt-1">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] text-brand-slate/75 leading-relaxed font-sans">
                    {item.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.tags.map((tag) => {
                      const isActive = selectedTag === tag;
                      return (
                        <button
                          key={tag}
                          onClick={() => setSelectedTag(isActive ? null : tag)}
                          className={`text-[11px] px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                            isActive
                              ? "bg-brand-slate text-brand-cream-light dark:bg-brand-gold dark:text-brand-slate font-medium"
                              : "bg-brand-cream/40 dark:bg-brand-cream-dark/20 text-brand-slate/75 hover:bg-brand-gold/15 hover:text-brand-slate"
                          }`}
                        >
                          #{tag}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Card Footer CTA */}
                <div className="pt-6 mt-4 border-t border-brand-cream-dark/35 dark:border-brand-cream-dark/15 flex items-center justify-between">
                  <a
                    href="https://app2.sqns.ru/booking/booking?orgid=8780#/employees"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-slate hover:text-brand-gold transition-colors group cursor-pointer"
                  >
                    <span>Записаться с этим запросом</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-8 p-5 rounded-2xl bg-brand-gold/10 dark:bg-brand-gold/10 border border-brand-gold/25 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="h-5 w-5 text-brand-gold shrink-0 hidden sm:block" />
            <p className="text-xs sm:text-sm text-brand-slate/85 font-medium">
              Не нашли свой симптом в списке? Это нормально. На первой встрече мы подробно разберем вашу ситуацию и подберем индивидуальный план терапии.
            </p>
          </div>
          <a
            href="https://vk.ru/good_psihika"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-brand-slate text-brand-cream-light dark:bg-brand-gold dark:text-brand-slate hover:opacity-90 active:scale-95 transition-all whitespace-nowrap cursor-pointer shrink-0"
          >
            Спросить врача в VK
          </a>
        </div>

      </div>
    </section>
  );
}
