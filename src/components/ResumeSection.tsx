import React from 'react';
import { personalInfo, educationData, achievementsData, openSourceData, skillCategories, certificationsData } from '../data/portfolioData';

export const ResumeSection: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="section resume-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Curriculum Vitae</span>
          <h2 className="section-title">Authoritative Resume</h2>
          <p className="section-subtitle">
            Complete credentials, academic transcript summary, intellectual property, and research experience.
          </p>
        </div>

        {/* Action Header Card */}
        <div className="resume-controls-card editorial-card no-print">
          <div className="resume-controls-left">
            <div className="pdf-doc-badge">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
            <div>
              <h3 className="controls-title">Pranav_Dawange_Resume.pdf</h3>
              <p className="controls-meta">Verified Resume Document • Updated October 2026</p>
            </div>
          </div>

          <div className="resume-actions-group">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              <span>View PDF</span>
            </a>

            <a
              href="/resume.pdf"
              download="Pranav_Dawange_Resume.pdf"
              className="btn btn-primary btn-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span>Download PDF</span>
            </a>

            <button
              type="button"
              onClick={handlePrint}
              className="btn btn-secondary btn-sm print-trigger-btn"
              title="Print cleanly via browser"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 6 2 18 2 18 9"></polyline>
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                <rect x="6" y="14" width="12" height="8"></rect>
              </svg>
              <span>Print Resume</span>
            </button>
          </div>
        </div>

        {/* Paper Sheet Preview */}
        <div className="resume-sheet-wrapper">
          <div className="resume-sheet">
            {/* Sheet Header */}
            <div className="sheet-header">
              <div className="sheet-header-text">
                <h1 className="sheet-name editorial-heading">{personalInfo.name}</h1>
                <div className="sheet-contact-line">
                  <span>{personalInfo.email}</span>
                  <span className="dot-sep">•</span>
                  <span>{personalInfo.phone}</span>
                  <span className="dot-sep">•</span>
                  <span>Pune, India</span>
                </div>
                <div className="sheet-links-line">
                  <a href={personalInfo.social.github} target="_blank" rel="noreferrer">GitHub: Pranav-Dawange</a>
                  <span className="dot-sep">•</span>
                  <a href={personalInfo.social.linkedin} target="_blank" rel="noreferrer">LinkedIn: pranav-dawange</a>
                </div>
              </div>

              <div className="sheet-photo">
                <img src="/images/pranav-portrait.png" alt="Pranav Dawange" className="sheet-photo-img" />
              </div>
            </div>

            <hr className="sheet-divider strong-divider" />

            {/* Education */}
            <section className="sheet-section">
              <h2 className="sheet-section-title">EDUCATION</h2>
              <div className="sheet-items-group">
                {educationData.map((edu, idx) => (
                  <div key={idx} className="sheet-edu-item">
                    <div className="sheet-item-row">
                      <strong>{edu.institution}</strong>
                      <span className="sheet-year">{edu.duration}</span>
                    </div>
                    <div className="sheet-item-row">
                      <span className="sheet-sub">{edu.degree}</span>
                      <strong className="sheet-score">{edu.score}</strong>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <hr className="sheet-divider" />

            {/* Projects */}
            <section className="sheet-section">
              <h2 className="sheet-section-title">PROJECTS</h2>
              
              <div className="sheet-project-item">
                <div className="sheet-item-row">
                  <strong>Skin Lesion AI Analysis Platform</strong>
                  <span className="sheet-sub">React 19, FastAPI, PyTorch, MongoDB, OpenCV, scikit-learn</span>
                </div>
                <ul className="sheet-bullet-list">
                  <li>Built full-stack dermatological screening app with JWT-authenticated FastAPI backend, MongoDB/GridFS storage, and React frontend for image upload and results visualization.</li>
                  <li>Fine-tuned a ResNet50 CNN on the HAM10000 dataset and implemented Grad-CAM from scratch for model explainability.</li>
                  <li>Built concurrent async pipeline (asyncio) combining classification, Grad-CAM, and GrabCut-based lesion segmentation.</li>
                  <li>Designed metadata-driven risk-scoring layer using a scikit-learn Random Forest.</li>
                </ul>
              </div>

              <div className="sheet-project-item">
                <div className="sheet-item-row">
                  <strong>Road Complaint Management System</strong>
                  <span className="sheet-sub">FastAPI, PostgreSQL (Supabase), MongoDB, JWT, Pydantic, Bootstrap 5</span>
                </div>
                <ul className="sheet-bullet-list">
                  <li>Built role-based full-stack civic complaint platform with JWT authentication (citizen/officer/admin) and FastAPI REST APIs.</li>
                  <li>Implemented Haversine-based geospatial auto-assignment to match complaints with nearest available field worker.</li>
                  <li>Engineered PostgreSQL triggers, stored functions, and views for automated audit logging and ward-level analytics.</li>
                  <li>Added background email notifications and on-demand PDF report generation using FastAPI BackgroundTasks.</li>
                </ul>
              </div>

              <div className="sheet-project-item">
                <div className="sheet-item-row">
                  <strong>AI-Powered Prescription Drug Interaction Detection System</strong>
                  <span className="sheet-sub">Python, FastAPI, Node.js, Express.js, Next.js, MongoDB, YOLOv8, EasyOCR, OpenCV</span>
                </div>
                <ul className="sheet-bullet-list">
                  <li>Designed and developed microservice-based healthcare AI platform leveraging FastAPI, Express.js, and Next.js for automated prescription analysis.</li>
                  <li>Implemented computer vision pipeline using custom-trained YOLOv8 and EasyOCR to extract prescription information with enhanced OCR accuracy.</li>
                  <li>Engineered risk-scoring algorithm using multiple clinical indicators, fuzzy drug normalization, and interaction analysis to classify medication risk levels.</li>
                  <li>Built secure REST APIs with JWT authentication, MongoDB integration, and asynchronous processing to support scalable end-to-end workflows.</li>
                </ul>
              </div>
            </section>

            <hr className="sheet-divider" />

            {/* Achievements */}
            <section className="sheet-section">
              <h2 className="sheet-section-title">ACHIEVEMENTS</h2>
              <ul className="sheet-bullet-list">
                {achievementsData.map((ach, idx) => (
                  <li key={idx}>
                    <strong>{ach.title}</strong> — {ach.description} {ach.applicationNo && `(${ach.applicationNo})`} | {ach.year}
                  </li>
                ))}
              </ul>
            </section>

            <hr className="sheet-divider" />

            {/* Open Source */}
            <section className="sheet-section">
              <h2 className="sheet-section-title">OPEN SOURCE CONTRIBUTIONS</h2>
              <ul className="sheet-bullet-list">
                {openSourceData.map((os, idx) => (
                  <li key={idx}>
                    <strong>{os.project} ({os.type}):</strong> {os.description} ({os.status}). {os.details}
                  </li>
                ))}
              </ul>
            </section>

            <hr className="sheet-divider" />

            {/* Technical Skills */}
            <section className="sheet-section">
              <h2 className="sheet-section-title">TECHNICAL SKILLS</h2>
              <div className="sheet-skills-lines">
                {skillCategories.map((cat, idx) => (
                  <div key={idx} className="sheet-skill-line">
                    <strong>{cat.title}: </strong>
                    <span>{cat.skills.join(', ')}</span>
                  </div>
                ))}
              </div>
            </section>

            <hr className="sheet-divider" />

            {/* Certifications */}
            <section className="sheet-section">
              <h2 className="sheet-section-title">CERTIFICATIONS</h2>
              <ul className="sheet-bullet-list">
                {certificationsData.map((c, idx) => (
                  <li key={idx}>
                    <strong>{c.name}</strong> — {c.issuer} {c.year && `(${c.year})`}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        {/* Informative Note for Custom PDF replacement */}
        <div className="pdf-replace-note no-print">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="note-icon">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          <p>
            A high-fidelity generated PDF resume is currently served from <code>public/resume.pdf</code>. To update it with your own freshly exported PDF anytime, simply place your custom PDF file at <code>public/resume.pdf</code>.
          </p>
        </div>
      </div>
    </section>
  );
};
