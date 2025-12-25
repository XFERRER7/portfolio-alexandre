import type { Project } from '@/types';
import Link from 'next/link';

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">
        Projetos Destaque
      </h2>
      <div className="projects-grid featured-single">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <div className="project-image">
              <div className="project-placeholder">
                <div className="project-logo">
                  <span className="logo-circle">{project.logo}</span>
                  <span className="logo-text">{project.title}</span>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>
                {
                  project.title.split(' ')[1].length <= 2 ?
                    null :
                    project.title.split(' ')[0]
                }{' '}
                <span className="gradient">
                  {
                    project.title.split(' ')[1].length <= 2 ?
                      project.title :
                      project.title.split(' ').slice(1).join(' ')
                  }
                </span>
              </h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              {
                project.link.length > 0 && (
                  <div className='flex gap-3 items-center flex-wrap mt-4'>
                    {
                      project.link.map((link, index) => (
                        <Link key={link} href={link} className="project-link" target='_blank'>
                          <i className="bx bx-link-external" /> 
                          {link}
                        </Link>
                      ))
                    }
                  </div>
                )
              }
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
