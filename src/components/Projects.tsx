import React, { useState, useEffect } from 'react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Featured' | 'AI / Computer Vision' | 'Full-Stack & Systems' | 'Data Science & ML'>('Featured');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['Featured', 'All', 'AI / Computer Vision', 'Full-Stack & Systems', 'Data Science & ML'] as const;

  const filteredProjects = projectsData.filter((project) => {
    if (selectedCategory === 'Featured') return project.featured;
    if (selectedCategory === 'All') return true;
    return project.category === selectedCategory;
  });

  // Reference-style 3D pointer tilt
  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      const el: HTMLElement | null = (e.target && typeof (e.target as any).closest === 'function')
        ? (e.target as HTMLElement)
        : (document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null);
      const card = el?.closest ? (el.closest('.project-card') as HTMLElement | null) : null;

      document.querySelectorAll<HTMLElement>('.project-card').forEach((c) => {
        if (c !== card) {
          c.style.setProperty('--rx', '0deg');
          c.style.setProperty('--ry', '0deg');
        }
      });

      if (!card) return;
      const rect = card.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.setProperty('--ry', `${(px * 10).toFixed(2)}deg`);
      card.style.setProperty('--rx', `${(-py * 10).toFixed(2)}deg`);
    };

    const handlePointerLeave = () => {
      document.querySelectorAll<HTMLElement>('.project-card').forEach((c) => {
        c.style.setProperty('--rx', '0deg');
        c.style.setProperty('--ry', '0deg');
      });
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.addEventListener('mouseleave', handlePointerLeave);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('mouseleave', handlePointerLeave);
    };
  }, []);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Portfolio & Research</span>
          <h2 className="section-title">Engineered Projects & Systems</h2>
          <p className="section-subtitle">
            Rigorous machine learning models, explainable vision pipelines, and production backend services. Verified source repositories without synthetic metrics.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="projects-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article key={project.id} className="project-card editorial-card">
              {/* Project Card Header */}
              <div className="project-card-top">
                <div className="project-category-badge">
                  <span>{project.badge || project.category}</span>
                </div>

                <div className="project-card-actions">
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-link-btn"
                      data-cursor="repo"
                      aria-label={`View ${project.title} on GitHub`}
                      title="View GitHub Repository"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      <span className="btn-text">Code</span>
                    </a>
                  )}

                  {project.isPrivate && (
                    <span className="private-tag" title="Repository is private research">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </svg>
                      Private Repo
                    </span>
                  )}
                </div>
              </div>

              {/* Title & Subtitle */}
              <h3 className="project-title editorial-heading">{project.title}</h3>
              <p className="project-subtitle">{project.subtitle}</p>

              {/* Description */}
              <p className="project-description">{project.description}</p>

              {/* Highlight Bullet Points */}
              <div className="project-highlights">
                <span className="highlights-header">Key Architectural Highlights:</span>
                <ul className="project-bullet-list">
                  {project.bulletPoints.slice(0, 3).map((bp, i) => (
                    <li key={i} className="project-bullet-item">
                      <span className="bullet-dash">—</span>
                      <span>{bp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Chips */}
              <div className="project-tech-stack">
                {project.techStack.map((tech) => (
                  <span key={tech} className="chip project-chip">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Card Footer / View Details */}
              <div className="project-card-footer">
                <button
                  type="button"
                  className="details-link-btn"
                  data-cursor="details"
                  onClick={() => setActiveModalProject(project)}
                >
                  <span>Read Full Architecture</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Modal for Deep-Dive Architecture */}
        {activeModalProject && (
          <div
            className="modal-overlay"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onClick={() => setActiveModalProject(null)}
          >
            <div
              className="modal-content editorial-card"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <div>
                  <span className="section-tag">{activeModalProject.category}</span>
                  <h3 id="modal-title" className="modal-title editorial-heading">{activeModalProject.title}</h3>
                  <p className="modal-subtitle">{activeModalProject.subtitle}</p>
                </div>
                <button
                  className="modal-close-btn"
                  data-cursor="close"
                  onClick={() => setActiveModalProject(null)}
                  aria-label="Close dialog"
                >
                  ✕
                </button>
              </div>

              <div className="modal-body">
                <p className="modal-summary">{activeModalProject.description}</p>

                <h4 className="modal-section-heading">Detailed Engineering Breakdown</h4>
                <ul className="modal-bullets">
                  {activeModalProject.bulletPoints.map((bp, i) => (
                    <li key={i} className="modal-bullet-item">
                      <span className="bullet-point">✦</span>
                      <span>{bp}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="modal-section-heading">Technologies Deployed</h4>
                <div className="modal-chips">
                  {activeModalProject.techStack.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>

                {activeModalProject.repoUrl && (
                  <div className="modal-actions">
                    <a
                      href={activeModalProject.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      <span>Explore Repository on GitHub</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
