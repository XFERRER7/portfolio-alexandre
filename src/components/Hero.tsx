'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge">
          <i className="bx bxl-sketch" />
          <span>{t.hero.badge}</span>
        </div>
        <h1>
          {t.hero.greeting} <span className="gradient">{t.hero.name}</span>
        </h1>
        <h2>{t.hero.tagline}</h2>
        <p>{t.hero.description}</p>
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">
            <i className="bx bx-send" /> {t.hero.contactBtn}
          </a>
          <a href="#projects" className="btn btn-secondary">
            <i className="bx bx-briefcase" /> {t.hero.projectsBtn}
          </a>
        </div>
      </div>
    </section>
  );
}
