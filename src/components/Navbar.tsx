import React, { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About Me', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' }
];

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const scrollY = window.scrollY;

      // Check bottom of page -> contact
      if (scrollY + winHeight >= docHeight - 90) {
        setActiveSection('contact');
        return;
      }

      // Check top of page -> home
      if (scrollY < 140) {
        setActiveSection('home');
        return;
      }

      // Check sections from bottom up
      const scrollPosition = scrollY + 220;
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const item = NAV_ITEMS[i];
        const element = document.querySelector(item.href);
        if (element) {
          const top = (element as HTMLElement).offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(item.href.replace('#', ''));
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(href.replace('#', ''));
    }
  };

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Monogram Brand Pill */}
        <a 
          href="#home" 
          className="brand-pill" 
          data-cursor="home"
          onClick={(e) => handleNavClick(e, '#home')}
          aria-label="Pranav Dawange Home"
        >
          <span className="brand-dot"></span>
          <span className="brand-name">PD</span>
        </a>

        {/* Desktop Pill Navigation */}
        <nav className="nav-pill" aria-label="Main Navigation">
          <ul className="nav-list">
            {NAV_ITEMS.map((item) => {
              const id = item.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <li key={item.href} className="nav-item">
                  <a
                    href={item.href}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    data-cursor={item.label.toLowerCase()}
                    onClick={(e) => handleNavClick(e, item.href)}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="nav-active-dot" aria-hidden="true"></span>}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="nav-divider"></div>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </nav>

        {/* Mobile Hamburger & Controls */}
        <div className="mobile-controls">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button
            className={`mobile-menu-btn ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`} aria-hidden={!mobileMenuOpen}>
        <ul className="mobile-nav-list">
          {NAV_ITEMS.map((item) => {
            const id = item.href.replace('#', '');
            const isActive = activeSection === id;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};
