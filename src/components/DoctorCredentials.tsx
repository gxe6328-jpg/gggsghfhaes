import React from "react";
import { GraduationCap, Briefcase, Award, CheckCircle2, HeartHandshake, ShieldCheck } from "lucide-react";

export default function DoctorCredentials() {
  const careerTimeline = [
    {
      period: "Декабрь 2022 — настоящее время",
      role: "Заведующий психоневрологическим диспансером",
      place: "ГУЗ «ТОКПБ№1 им. Н.П. Каменева» (филиал г. Алексин)",
      current: true,
    },
    {
      period: "2017 — настоящее время",
      role: "Врач на амбулаторном приеме",
      place: "ГУЗ «ТОКПБ№1 им. Н.П. Каменева» и ГУЗ «ТГКБСМП им. Д.Я. Ваныкина» (г. Тула)",
      current: true,
    },
    {
      period: "Сентябрь 2015 — настоящее время",
      role: "Врач-психиатр",
      place: "Областная клиническая психиатрическая больница №1 им. Н.П. Каменева",
      current: true,
    },
  ];

  const educationList = [
    {
      period: "2014–2015 гг.",
      title: "Интернатура по специальности «Психиатрия»",
      institution: "ФГБОУ ВО «Тульский государственный университет», медицинский институт",
    },
    {
      period: "2008–2014 гг.",
      title: "Высшее медицинское образование, специальность «Лечебное дело»",
      institution: "ФГБОУ ВО «Тульский государственный университет»",
    },
  ];

  const certifications = [
    { name: "Психотерапия", status: "Действующий сертификат государственного образца" },
    { name: "Психиатрия-наркология", status: "Действующий сертификат специалиста" },
    { name: "Судебно-психиатрическая экспертиза", status: "Сертифицированная экспертная подготовка" },
  ];

  return (
    <section className="py-12 sm:py-16 relative" id="about-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="space-y-2 mb-10 text-center sm:text-left">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-brand-gold-dark dark:text-brand-gold">
            Квалификация и опыт
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-brand-slate tracking-tight">
            О специалисте и образовании
          </h2>
          <p className="text-sm text-brand-slate/75 font-sans max-w-xl">
            14 лет клинической работы в ведущих медицинских учреждениях региона и частной практике.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Personal Statement & Certificates (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Statement Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-brand-card-bg/75 dark:bg-brand-card-bg/40 backdrop-blur-md border border-brand-cream-dark/60 dark:border-brand-cream-dark/25 shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-brand-gold/15 text-brand-gold-dark dark:text-brand-gold flex items-center justify-center">
                  <HeartHandshake className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-brand-slate">
                    Врачебное кредо
                  </h3>
                  <p className="text-[11px] text-brand-gold-dark uppercase tracking-wider">
                    Этика и бережность
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-brand-slate/85 leading-relaxed font-sans">
                <p>
                  Здравствуйте! Я — <strong>Павел Александрович Веляев</strong>. В своей практике я объединяю глубокие знания клинической психиатрии с современными инструментами психотерапии.
                </p>
                <p>
                  Моя задача — помочь вам найти твердую внутреннюю почву под ногами, преодолеть кризис, восстановить спокойный сон и вернуть качество жизни.
                </p>
                <p>
                  В работе со мной вы можете быть уверены: <strong>никакого осуждения, критики или обесценивания</strong> ваших чувств. Только бережная профессиональная поддержка и совместная выработка решений.
                </p>
              </div>
            </div>

            {/* Certifications Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-brand-card-bg/75 dark:bg-brand-card-bg/40 backdrop-blur-md border border-brand-cream-dark/60 dark:border-brand-cream-dark/25 shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-brand-gold/15 text-brand-gold-dark dark:text-brand-gold flex items-center justify-center">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-brand-slate">
                    Действующие сертификаты
                  </h3>
                  <p className="text-[11px] text-brand-gold-dark uppercase tracking-wider">
                    Регулярное подтверждение
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-1">
                {certifications.map((cert, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-2xl bg-brand-cream/30 dark:bg-brand-cream-dark/15 border border-brand-cream-dark/30 dark:border-brand-cream-dark/15">
                    <CheckCircle2 className="h-4 w-4 text-brand-gold shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-brand-slate">
                        {cert.name}
                      </h4>
                      <p className="text-[11px] text-brand-slate/65 mt-0.5">
                        {cert.status}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Timeline of Experience & Education (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Practical Experience Timeline */}
            <div className="p-6 sm:p-7 rounded-3xl bg-brand-card-bg/75 dark:bg-brand-card-bg/40 backdrop-blur-md border border-brand-cream-dark/60 dark:border-brand-cream-dark/25 shadow-xs space-y-5">
              <div className="flex items-center gap-3 pb-2 border-b border-brand-cream-dark/40 dark:border-brand-cream-dark/15">
                <div className="h-10 w-10 rounded-xl bg-brand-gold/15 text-brand-gold-dark dark:text-brand-gold flex items-center justify-center">
                  <Briefcase className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-brand-slate">
                    Клинический опыт
                  </h3>
                  <p className="text-[11px] text-brand-gold-dark uppercase tracking-wider">
                    Официальная медицинская практика
                  </p>
                </div>
              </div>

              {/* Timeline Items */}
              <div className="relative pl-6 space-y-6 border-l-2 border-brand-gold/30 dark:border-brand-gold/20 ml-2">
                {careerTimeline.map((item, idx) => (
                  <div key={idx} className="relative group">
                    {/* Dot on Timeline */}
                    <div className="absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full bg-brand-card-bg border-2 border-brand-gold shadow-xs group-hover:scale-125 transition-transform" />
                    
                    <span className="inline-block text-[11px] font-bold text-brand-gold-dark dark:text-brand-gold uppercase tracking-wider">
                      {item.period}
                    </span>
                    <h4 className="font-serif font-bold text-base text-brand-slate mt-0.5">
                      {item.role}
                    </h4>
                    <p className="text-xs text-brand-slate/75 mt-1 font-sans">
                      {item.place}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Basic Education */}
            <div className="p-6 sm:p-7 rounded-3xl bg-brand-card-bg/75 dark:bg-brand-card-bg/40 backdrop-blur-md border border-brand-cream-dark/60 dark:border-brand-cream-dark/25 shadow-xs space-y-5">
              <div className="flex items-center gap-3 pb-2 border-b border-brand-cream-dark/40 dark:border-brand-cream-dark/15">
                <div className="h-10 w-10 rounded-xl bg-brand-gold/15 text-brand-gold-dark dark:text-brand-gold flex items-center justify-center">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-brand-slate">
                    Базовое медицинское образование
                  </h3>
                  <p className="text-[11px] text-brand-gold-dark uppercase tracking-wider">
                    Дипломы государственного образца
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {educationList.map((edu, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-brand-cream/30 dark:bg-brand-cream-dark/15 border border-brand-cream-dark/30 dark:border-brand-cream-dark/15 space-y-1">
                    <span className="text-[11px] font-semibold text-brand-gold-dark dark:text-brand-gold">
                      {edu.period}
                    </span>
                    <h4 className="font-serif font-bold text-sm sm:text-base text-brand-slate">
                      {edu.title}
                    </h4>
                    <p className="text-xs text-brand-slate/70">
                      {edu.institution}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
