import type { SkillCategory } from '@/types';

interface SkillsProps {
  categories: SkillCategory[];
}

export default function Skills({ categories }: SkillsProps) {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Skills &amp; Expertise</h2>
      <div className="skills-container">
        {categories.map((category) => (
          <div key={category.title} className="skills-category">
            <div className="category-header">
              <i className={category.icon} />
              <h3>{category.title}</h3>
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
