'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'pt' as const, label: 'PT', flag: '🇧🇷' },
    { code: 'en' as const, label: 'EN', flag: '🇺🇸' },
    { code: 'es' as const, label: 'ES', flag: '🇪🇸' },
  ];

  const handleLanguageChange = (code: 'pt' | 'en' | 'es') => {
    setLanguage(code);
    setIsOpen(false);
  };

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col-reverse items-center gap-3 w-32">
      {/* Toggle Button */}
      <button
        className={`group relative w-14 h-14 rounded-full bg-linear-to-br from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 
          border-0 cursor-pointer flex items-center justify-center 
          shadow-[0_8px_32px_rgba(99,102,241,0.4)] hover:shadow-[0_12px_40px_rgba(99,102,241,0.5)]
          transition-all duration-300 ease-out overflow-hidden
          hover:scale-110 ${isOpen ? 'rotate-180' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle language menu"
      >
        {/* Hover effect overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Current flag on hover */}
        <span className="absolute text-2xl opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 z-10">
          {!isOpen && currentLanguage?.flag}
        </span>
        
        {/* Icon */}
        <i className={`relative z-10 text-2xl text-white transition-all duration-300 
          ${isOpen ? 'bx bx-x opacity-100 scale-100' : 'bx bx-world group-hover:opacity-0 group-hover:scale-0'}`} 
        />
      </button>
      
      {/* Language Options */}
      {isOpen && (
        <div className="flex flex-col gap-3 animate-in fade-in slide-in-from-bottom-4 duration-300 w-full">
          {languages.map((lang, index) => (
            <button
              key={lang.code}
              className={`
                group/item relative flex items-center justify-center gap-3
                backdrop-blur-xl border rounded-full h-10
                font-semibold whitespace-nowrap
                shadow-[0_4px_20px_rgba(0,0,0,0.15)]
                transition-all duration-300 ease-out
                hover:scale-105 hover:-translate-x-1
                ${language === lang.code 
                  ? 'bg-linear-to-r from-purple-600 to-blue-500 border-transparent text-white shadow-[0_8px_30px_rgba(99,102,241,0.4)]' 
                  : 'bg-white/30 dark:bg-gray-800/30 border-purple-600/20 text-gray-900 dark:text-gray-100 hover:border-purple-600/40 hover:shadow-[0_8px_30px_rgba(99,102,241,0.3)]'
                }
              `}
              style={{ 
                animationDelay: `${index * 50}ms`,
                opacity: 0,
                animation: 'fadeInUp 0.3s ease-out forwards'
              }}
              aria-current={language === lang.code ? 'true' : 'false'}
              onClick={() => handleLanguageChange(lang.code)}
            >
              <span className="text-xl leading-none transition-transform duration-300 group-hover/item:scale-110">
                {lang.flag}
              </span>
              <span className="text-xs uppercase font-bold tracking-wider">
                {lang.label}
              </span>
            </button>
          ))}
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
