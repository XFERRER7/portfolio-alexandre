'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import type { Language } from '@/locales/translations';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'pt', label: 'PT', flag: '🇧🇷' },
    { code: 'en', label: 'EN', flag: '🇺🇸' },
    { code: 'es', label: 'ES', flag: '🇪🇸' },
  ];

  const currentLang = languages.find((l) => l.code === language) || languages[0];

  const handleSelect = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="language-switcher-container">
      <button
        className={`lang-toggle-btn ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle language menu"
      >
        <span className="current-flag">{currentLang.flag}</span>
        <i className={`bx ${isOpen ? 'bx-x' : 'bx-globe'}`} />
      </button>

      <div className={`lang-options ${isOpen ? 'visible' : ''}`}>
        {languages.map((lang, index) => (
          <button
            key={lang.code}
            onClick={() => handleSelect(lang.code)}
            className={`lang-option ${language === lang.code ? 'active' : ''}`}
            style={{ transitionDelay: isOpen ? `${index * 0.05}s` : '0s' }}
            aria-label={`Switch to ${lang.label}`}
          >
            <span className="option-flag">{lang.flag}</span>
            <span className="option-label">{lang.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
