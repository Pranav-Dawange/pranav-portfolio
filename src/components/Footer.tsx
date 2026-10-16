import React from 'react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer no-print">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-monogram">PD</span>
            <span className="footer-name">{personalInfo.name}</span>
          </div>

          <div className="footer-nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#achievements">Achievements</a>
            <a href="#resume">Resume</a>
            <a href="#contact">Contact</a>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="back-to-top-btn"
            aria-label="Scroll back to top"
            title="Back to top"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </button>
        </div>

        <div className="footer-bottom">
          <p className="copyright-text">
            © {new Date().getFullYear()} {personalInfo.name}. Built with React, Vite, TypeScript & Warm Editorial Design.
          </p>

          <div className="footer-links">
            <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <span>•</span>
            <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <span>•</span>
            <a href={`mailto:${personalInfo.email}`}>Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
