import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { InteractiveName } from './InteractiveName';

export const Hero: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const elem = document.querySelector(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        {/* Left Column: Avatar & Arched Showcase */}
        <div className="hero-avatar-wrapper">
          <div className="avatar-float-container">
            <div className="avatar-arch-backdrop" data-cursor="hello">
              <div className="avatar-glow"></div>
              <div className="avatar-decor-shape decor-circle-1"></div>
              <div className="avatar-decor-shape decor-circle-2"></div>
              
              <div className="avatar-frame">
                <img
                  src="/images/pranav-hero-portrait.png"
                  alt="Illustrated portrait of Pranav Dawange coding on laptop in cozy study"
                  className="hero-avatar-img"
                  loading="eager"
                />
              </div>
              
              {/* Interactive Status Pill */}
              <div className="avatar-badge">
                <span className="status-ping"></span>
                <span className="badge-text">Available for Research & Projects</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Introduction */}
        <div className="hero-content">
          <div className="hero-greeting">
            <span className="greeting-pill">
              <span className="hand-wave">👋</span> Hello there ...
            </span>
          </div>

          <h1 className="hero-title editorial-heading">
            I'm <span className="highlight-name"><InteractiveName name="Pranav Dawange" /></span>
          </h1>

          <div className="hero-subtitles">
            <p className="hero-role">{personalInfo.role}</p>
            <p className="hero-institution">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="edu-icon">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
              {personalInfo.institution}
            </p>
          </div>

          <p className="hero-summary">
            Specializing in high-performance computer vision pipelines, explainable AI (XAI), and full-stack intelligent systems. Author of a published patent and open-source contributor.
          </p>

          {/* CTA Buttons */}
          <div className="hero-actions">
            <a
              href="#projects"
              className="btn btn-primary btn-explore"
              data-cursor="explore"
              onClick={(e) => handleScrollTo(e, '#projects')}
            >
              <span>Explore My Work</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>

            <a
              href="#contact"
              className="btn btn-secondary"
              data-cursor="contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
            >
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="hero-social-strip">
            <span className="social-label">Connect:</span>
            <div className="social-links-row">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                data-cursor="github"
                aria-label="GitHub Profile"
                title="GitHub @Pranav-Dawange"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                data-cursor="linkedin"
                aria-label="LinkedIn Profile"
                title="LinkedIn @pranav-dawange"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="social-btn"
                data-cursor="email"
                aria-label="Send Email"
                title={personalInfo.email}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Strip of Technical Interests */}
      <div className="hero-strip-wrapper">
        <div className="container">
          <div className="hero-interests-strip" data-cursor="focus" role="region" aria-label="Core Technical Focus Marquee">
            <div className="strip-label-box">
              <span className="strip-title">Core Focus</span>
            </div>

            <div className="marquee-viewport">
              <div className="marquee-track">
                {/* Primary Group */}
                <div className="strip-tags-group">
                  {personalInfo.interests.map((interest, idx) => (
                    <div key={`focus-1-${idx}`} className="strip-item">
                      <span className="strip-dot">✦</span>
                      <span>{interest}</span>
                    </div>
                  ))}
                </div>

                {/* Duplicated Group for Seamless Loop */}
                <div className="strip-tags-group" aria-hidden="true">
                  {personalInfo.interests.map((interest, idx) => (
                    <div key={`focus-2-${idx}`} className="strip-item" tabIndex={-1}>
                      <span className="strip-dot">✦</span>
                      <span>{interest}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
