'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import type { SkillCategory } from '@/types';

interface SkillsProps {
  categories: SkillCategory[];
}

export default function Skills({ categories }: SkillsProps) {
  const { t } = useLanguage();

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">{t.skills.title}</h2>
      <div className="skills-container">
        {categories.map((category, index) => (
          <div key={category.title} className="skills-category">
            <div className="category-header">
              <i className={category.icon} />
              <h3>{t.skills.categories[index]?.title || category.title}</h3>
            </div>
            <div className="skills-list">
              {category.skills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <i className={skill.icon} />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
