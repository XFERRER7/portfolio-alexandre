'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer>
      <p>
        &copy; 2025 Alexandre Talles. {t.footer.rights}{' '}
        <i className="bx bx-heart" /> {t.footer.and}
      </p>
    </footer>
  );
}
