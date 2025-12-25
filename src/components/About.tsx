'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="about-section">
      <h2 className="section-title">{t.about.title}</h2>
      <div className="about-grid">
        <div className="about-card">
          <div className="card-icon">
            <i className="bx bx-user" />
          </div>
          <h3>{t.about.card1.title}</h3>
          <p>{t.about.card1.description}</p>
        </div>
        <div className="about-card">
          <div className="card-icon">
            <i className="bx bx-code-alt" />
          </div>
          <h3>{t.about.card2.title}</h3>
          <p>{t.about.card2.description}</p>
        </div>
        <div className="about-card">
          <div className="card-icon">
            <i className="bx bx-globe" />
          </div>
          <h3>{t.about.card3.title}</h3>
          <p>{t.about.card3.description}</p>
        </div>
      </div>
    </section>
  );
}
