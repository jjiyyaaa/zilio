import React, { useEffect, useState } from 'react';
import { Menu, X, Anchor } from 'lucide-react';

const Navbar = ({ activeSection, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo / Brand Name */}
        <div className="navbar-brand" onClick={() => handleLinkClick('home')}>
          <Anchor className="brand-icon" size={24} />
          <span>jjiyyaaa</span>
        </div>

        {/* Desktop Links */}
        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                className={`nav-link-btn ${activeSection === link.id ? 'active' : ''}`}
                onClick={() => handleLinkClick(link.id)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Links Overlay */}
        <div className={`mobile-nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  className={`mobile-link-btn ${activeSection === link.id ? 'active' : ''}`}
                  onClick={() => handleLinkClick(link.id)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 100;
          background-color: transparent;
          border-bottom: 1px solid transparent;
          transition: var(--transition-smooth);
          height: 80px;
          display: flex;
          align-items: center;
        }

        .navbar-scrolled {
          background-color: rgba(253, 252, 247, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(146, 189, 207, 0.4);
          box-shadow: 0 4px 20px rgba(16, 34, 75, 0.05);
          height: 70px;
        }

        .navbar-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-heading);
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--deep-blue);
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .brand-icon {
          color: var(--teal-cyan);
          transition: transform 0.6s ease;
        }

        .navbar-brand:hover {
          opacity: 0.85;
        }

        .navbar-brand:hover .brand-icon {
          transform: rotate(20deg) scale(1.1);
        }

        .navbar-links {
          display: flex;
          list-style: none;
          gap: 32px;
          align-items: center;
        }

        .nav-link-btn {
          background: none;
          border: none;
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--medium-blue);
          cursor: pointer;
          position: relative;
          padding: 8px 0;
          transition: var(--transition-smooth);
        }

        .nav-link-btn:hover {
          color: var(--teal-cyan);
        }

        .nav-link-btn::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 3px;
          background-color: var(--teal-cyan);
          border-radius: 2px;
          transition: var(--transition-smooth);
        }

        .nav-link-btn:hover::after,
        .nav-link-btn.active::after {
          width: 100%;
        }

        .nav-link-btn.active {
          color: var(--teal-cyan);
        }

        .mobile-menu-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--deep-blue);
          cursor: pointer;
        }

        /* Mobile Styles */
        .mobile-nav-menu {
          position: fixed;
          top: 80px;
          left: 0;
          width: 100%;
          height: calc(100vh - 80px);
          background-color: var(--off-white);
          z-index: 99;
          transform: translateY(-110%);
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          border-bottom: 1px solid rgba(146, 189, 207, 0.4);
        }

        .mobile-nav-menu.open {
          transform: translateY(0);
        }

        .navbar-scrolled + .mobile-nav-menu {
          top: 70px;
          height: calc(100vh - 70px);
        }

        .mobile-links {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 70%;
          gap: 30px;
          list-style: none;
        }

        .mobile-link-btn {
          background: none;
          border: none;
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--medium-blue);
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .mobile-link-btn:hover,
        .mobile-link-btn.active {
          color: var(--teal-cyan);
          transform: scale(1.1);
        }

        @media (max-width: 768px) {
          .navbar-links {
            display: none;
          }

          .mobile-menu-toggle {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
