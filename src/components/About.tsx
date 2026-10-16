import React from 'react';
import { personalInfo, educationData } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">Bridging AI Research & Production Systems</h2>
          <p className="section-subtitle">
            A developer and data science scholar at VIT Pune passionate about creating explainable, mathematically grounded AI solutions.
          </p>
        </div>

        <div className="about-grid">
          {/* Left: Arched Portrait with Rotating Decorative Badge */}
          <div className="about-portrait-column">
            <div className="arched-portrait-card">
              <div className="portrait-arch">
                <img
                  src="/images/pranav-portrait.png"
                  alt="Pranav Dawange portrait photograph"
                  className="portrait-photo"
                  loading="lazy"
                />
              </div>

              {/* Rotating Circular Badge around corner */}
              <div className="rotating-badge-container" aria-hidden="true">
                <svg className="rotating-badge-svg" viewBox="0 0 200 200" width="160" height="160">
                  <path
                    id="badge-text-path"
                    d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                    fill="none"
                  />
                  <text className="rotating-badge-text">
                    <textPath href="#badge-text-path" startOffset="0%">
                      • VIT PUNE • DATA SCIENCE • AI/ML • 2024-2028 •
                    </textPath>
                  </text>
                </svg>
                <div className="badge-center-icon">
                  <span className="star-icon">✦</span>
                </div>
              </div>
            </div>

            {/* Quick Stat Highlights */}
            <div className="about-quick-stats">
              <div className="quick-stat-item">
                <span className="stat-number">1</span>
                <span className="stat-label">Published Patent</span>
              </div>
              <div className="quick-stat-item">
                <span className="stat-number">2+</span>
                <span className="stat-label">Open Source PRs</span>
              </div>
              <div className="quick-stat-item">
                <span className="stat-number">96.8%</span>
                <span className="stat-label">SSC Merit</span>
              </div>
            </div>
          </div>

          {/* Right: Bio & Education Journey */}
          <div className="about-content-column">
            <div className="editorial-card bio-card">
              <h3 className="card-heading editorial-heading">Personal Journey & Philosophy</h3>
              <p className="bio-text">
                {personalInfo.bio}
              </p>
              <p className="bio-subtext">
                I focus heavily on explainable AI—such as custom Grad-CAM implementations and geospatial graph dispatch—ensuring that machine learning models provide transparency and actionable utility in critical sectors like healthcare, civic administration, and precision agriculture.
              </p>

              <div className="bio-links-row">
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                  data-cursor="github"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  <span>Follow on GitHub</span>
                </a>

                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                  data-cursor="linkedin"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Education Timeline */}
            <div className="editorial-card education-card">
              <div className="card-badge-row">
                <h3 className="card-heading editorial-heading">Academic Timeline</h3>
                <span className="chip">Verified Credentials</span>
              </div>

              <div className="timeline-list">
                {educationData.map((edu, idx) => (
                  <div key={idx} className="timeline-item">
                    <div className="timeline-marker">
                      <div className="marker-dot"></div>
                      {idx !== educationData.length - 1 && <div className="marker-line"></div>}
                    </div>
                    <div className="timeline-content">
                      <div className="timeline-header">
                        <h4 className="timeline-degree">{edu.degree}</h4>
                        <span className="timeline-year">{edu.duration}</span>
                      </div>
                      <p className="timeline-institution">{edu.institution}</p>
                      <div className="timeline-footer">
                        <span className="timeline-score-badge">{edu.score}</span>
                        {edu.details && <span className="timeline-detail">{edu.details}</span>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
