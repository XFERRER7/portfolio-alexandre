'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import type { SocialLink } from '@/types';

interface HeaderProps {
  socialLinks: SocialLink[];
  isPageReady?: boolean;
}

export default function Header({ socialLinks, isPageReady = true }: HeaderProps) {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

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
    // Só executar a lógica de scroll quando a página estiver pronta
    if (!isPageReady) return;

    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      // Se estiver no topo da página (hero section), marcar 'home'
      if (window.scrollY < window.innerHeight * 0.5) {
        setActiveSection('home');
        return;
      }

      // Encontrar qual seção está ativa
      let currentSection = 'home';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            currentSection = section;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    // Executar imediatamente quando a página estiver pronta
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isPageReady]);

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
                href="#" 
                onClick={closeMenu}
                className={activeSection === 'home' ? 'active' : ''}
              >
                {t.header.home}
              </a>
            </li>
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
