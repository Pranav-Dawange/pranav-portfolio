import React from 'react';
import { achievementsData } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="section achievements-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Recognition & Honors</span>
          <h2 className="section-title">Patents & Hackathons</h2>
          <p className="section-subtitle">
            Verifiable public technical milestones, intellectual property, and competitive engineering hackathons.
          </p>
        </div>

        {/* Top Feature: Published Patent */}
        <div className="patent-feature-card editorial-card">
          <div className="patent-card-badge">
            <span className="patent-badge-text">Intellectual Property</span>
            <span className="patent-year">Published 2026</span>
          </div>

          <div className="patent-main">
            <div className="patent-icon-col">
              <div className="patent-seal-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </div>
            </div>

            <div className="patent-details">
              <div className="patent-title-row">
                <h3 className="patent-title editorial-heading">Published Patent Application</h3>
                <span className="patent-app-id">Application No. 202621043586</span>
              </div>
              <p className="patent-authority">Published by the Official Patent Authority</p>
              <p className="patent-description">
                Research and development leading to an officially published patent application for novel algorithmic computational methodology.
              </p>
            </div>
          </div>
        </div>

        {/* Hackathons & Honors Grid */}
        <div className="hackathons-container">
          <div className="col-header-row">
            <h3 className="col-heading editorial-heading">Hackathons & Honors</h3>
            <span className="chip">Competitions & Engineering</span>
          </div>

          <div className="hackathons-grid">
            {achievementsData.filter(a => a.type !== 'Patent').map((ach, idx) => (
              <div key={idx} className="achievement-item-card editorial-card">
                <div className="item-card-top">
                  <span className="item-year-tag">{ach.year}</span>
                  <span className="item-type-badge">{ach.type}</span>
                </div>
                <h4 className="item-title">{ach.title}</h4>
                <p className="item-org">{ach.organization}</p>
                <p className="item-desc">{ach.description}</p>
                {ach.verified && (
                  <div className="item-card-footer">
                    <span className="item-status-verified">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Verified Milestone</span>
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
