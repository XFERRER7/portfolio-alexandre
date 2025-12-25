'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import type { SocialLink } from '@/types';

interface HeaderProps {
  socialLinks: SocialLink[];
}

export default function Header({ socialLinks }: HeaderProps) {
  const { t } = useLanguage();

  return (
    <header>
      <div className="left">
        <h1>Alexandre Talles</h1>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#about">{t.header.about}</a>
          </li>
          <li>
            <a href="#skills">{t.header.skills}</a>
          </li>
          <li>
            <a href="#projects">{t.header.projects}</a>
          </li>
          <li>
            <a href="#contact">{t.header.contact}</a>
          </li>
        </ul>
      </nav>
      <div className="box-icons">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.link}
            target="_blank"
            aria-label={social.label}
            rel="noreferrer"
          >
            <i className={social.icon} />
          </a>
        ))}
      </div>
    </header>
  );
}
