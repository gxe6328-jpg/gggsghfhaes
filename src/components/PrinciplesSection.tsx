import React from "react";
import { ShieldCheck, BookCheck, Heart } from "lucide-react";

export default function PrinciplesSection() {
  const principles = [
    {
      title: "Полная конфиденциальность",
      subtitle: "Врачебная тайна и этика",
      desc: "Любая информация, ваши мысли, переживания и факты биографии защищены врачебной тайной. Никакие данные не передаются третьим лицам или работодателям.",
      icon: ShieldCheck,
    },
    {
      title: "Научная доказательность",
      subtitle: "Доказательная медицина",
      desc: "Работа строится на проверенных клинических протоколах и методах психотерапии с научно подтвержденной эффективностью (когнитивно-поведенческая терапия, ОРКТ).",
      icon: BookCheck,
    },
    {
      title: "Безопасность и бережность",
      subtitle: "Пространство без критики",
      desc: "На сессиях создается экологичная атмосфера абсолютного принятия. Вы можете открыто говорить обо всём, не опасаясь осуждения, непонимания или обесценивания.",
      icon: Heart,
    },
  ];

  return (
    <section className="py-12 sm:py-16 relative" id="principles-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="space-y-2 mb-10 text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-brand-gold-dark dark:text-brand-gold">
            Стандарты приема
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-brand-slate tracking-tight">
            Принципы моей работы
          </h2>
          <p className="text-sm text-brand-slate/75 font-sans">
            Три фундаментальных правила, на которых строится каждая консультация и долгосрочный терапевтический альянс.
          </p>
        </div>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-brand-card-bg/75 dark:bg-brand-card-bg/40 backdrop-blur-md border border-brand-cream-dark/60 dark:border-brand-cream-dark/25 shadow-xs hover:shadow-md hover:border-brand-gold/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-2xl bg-brand-gold/15 text-brand-gold-dark dark:text-brand-gold flex items-center justify-center">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-brand-slate">
                      {p.title}
                    </h3>
                    <p className="text-xs font-semibold text-brand-gold-dark dark:text-brand-gold mt-1">
                      {p.subtitle}
                    </p>
                  </div>
                  <p className="text-xs sm:text-[13px] text-brand-slate/75 leading-relaxed font-sans">
                    {p.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
