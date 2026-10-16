import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2200);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage('Please fill in your name, email, and message.');
      return;
    }

    // Compose mailto link so the visitor's default email client opens with the pre-filled message
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setStatusMessage('Opening your email client to dispatch message...');
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Let's Connect</span>
          <h2 className="section-title">Initiate Collaboration</h2>
          <p className="section-subtitle">
            Whether for deep learning research, full-stack software development, or algorithmic problem solving, I welcome meaningful technical dialogue.
          </p>
        </div>

        <div className="contact-grid">
          {/* Direct Verified Contacts */}
          <div className="contact-info-col">
            <div className="editorial-card contact-card">
              <h3 className="card-heading editorial-heading">Direct Contact Information</h3>
              <p className="contact-subtext">Feel free to reach out via email, phone, or professional networks.</p>

              <div className="contact-items-list">
                {/* Email Item */}
                <div className="contact-method-card">
                  <div className="method-icon-wrap">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div className="method-content">
                    <span className="method-label">Direct Email</span>
                    <a href={`mailto:${personalInfo.email}`} className="method-value">
                      {personalInfo.email}
                    </a>
                  </div>
                  <button
                    type="button"
                    className="copy-btn"
                    onClick={() => handleCopy(personalInfo.email, 'email')}
                    title="Copy email to clipboard"
                    aria-label="Copy email"
                  >
                    {copiedEmail ? 'Copied!' : 'Copy'}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="contact-method-card">
                  <div className="method-icon-wrap">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div className="method-content">
                    <span className="method-label">Phone & WhatsApp</span>
                    <a href={`tel:${personalInfo.phone}`} className="method-value">
                      {personalInfo.phone}
                    </a>
                  </div>
                  <button
                    type="button"
                    className="copy-btn"
                    onClick={() => handleCopy(personalInfo.phone, 'phone')}
                    title="Copy phone to clipboard"
                    aria-label="Copy phone"
                  >
                    {copiedPhone ? 'Copied!' : 'Copy'}
                  </button>
                </div>

                {/* Location Item */}
                <div className="contact-method-card">
                  <div className="method-icon-wrap">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div className="method-content">
                    <span className="method-label">Current Location</span>
                    <span className="method-value">{personalInfo.location}</span>
                  </div>
                </div>
              </div>

              {/* Verified Profiles */}
              <div className="social-profiles-box">
                <span className="profiles-heading">Verified Profiles:</span>
                <div className="profile-buttons-row">
                  <a
                    href={personalInfo.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="profile-link-pill"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    <span>GitHub</span>
                  </a>

                  <a
                    href={personalInfo.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="profile-link-pill"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Message Form */}
          <div className="contact-form-col">
            <div className="editorial-card form-card">
              <h3 className="card-heading editorial-heading">Send a Direct Message</h3>
              <p className="form-subtext">Fill out this quick form to generate a message directly to my inbox.</p>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Your Name *</label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Your Email *</label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="e.g. jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Project Inquiry / Research Collaboration"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Share project scope, opportunities, or inquiries..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-textarea"
                  ></textarea>
                </div>

                {statusMessage && (
                  <div className="form-status-alert" role="status">
                    {statusMessage}
                  </div>
                )}

                <button type="submit" className="btn btn-primary submit-btn">
                  <span>Send Message</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
