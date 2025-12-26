'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import type { SocialLink } from '@/types';

interface HeaderProps {
  socialLinks: SocialLink[];
}

export default function Header({ socialLinks }: HeaderProps) {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      // Se estiver no topo da página, não marcar nenhuma seção
      if (window.scrollY < 100) {
        setActiveSection('');
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header>
        <div className="left">
          <h1>Alexandre Talles</h1>
        </div>
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          <i className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'}`} />
        </button>
        <nav className={isMenuOpen ? 'mobile-open' : ''}>
          <ul>
            <li>
              <a 
                href="#about" 
                onClick={closeMenu}
                className={activeSection === 'about' ? 'active' : ''}
              >
                {t.header.about}
              </a>
            </li>
            <li>
              <a 
                href="#skills" 
                onClick={closeMenu}
                className={activeSection === 'skills' ? 'active' : ''}
              >
                {t.header.skills}
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                onClick={closeMenu}
                className={activeSection === 'projects' ? 'active' : ''}
              >
                {t.header.projects}
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                onClick={closeMenu}
                className={activeSection === 'contact' ? 'active' : ''}
              >
                {t.header.contact}
              </a>
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
      {isMenuOpen && <div className="mobile-overlay" onClick={closeMenu} />}
    </>
  );
}
