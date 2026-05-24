import React from 'react';
import { LinkedinIcon as Linkedin, InstagramIcon as Instagram, GithubIcon as Github } from './SocialIcons';

const Footer = () => {
  return (
    <footer className="bg-sunset-gradient footer-section">
      <div className="container footer-container">
        {/* Social Icons row */}
        <div className="social-row footer-socials">
          <a
            href="https://linkedin.com/in/ghaziyamp"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon footer-icon"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="https://instagram.com/jjiyyaaa"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon footer-icon"
            aria-label="Instagram"
          >
            <Instagram size={16} />
          </a>
          <a
            href="https://github.com/jjiyyaaa"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon footer-icon"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
        </div>

        {/* Brand/Credits and copyright */}
        <p className="footer-credits">
          Designed & Developed by <span className="footer-brand">jjiyyaaa</span> | &copy; 2026
        </p>
        
        <p className="footer-walkway-txt">
          Walking into the sunset, synthesizing ideas into impact.
        </p>
      </div>

      <style>{`
        .footer-section {
          padding: 60px 0;
          text-align: center;
          border-top: 1px solid rgba(146, 189, 207, 0.3);
        }

        .footer-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }

        .footer-socials {
          gap: 12px;
        }

        .footer-icon {
          width: 36px;
          height: 36px;
          background-color: rgba(253, 252, 247, 0.7);
        }

        .footer-credits {
          font-family: var(--font-heading);
          font-size: 1rem;
          font-weight: 600;
          color: var(--deep-blue);
          letter-spacing: 0.02em;
        }

        .footer-brand {
          font-weight: 800;
          color: var(--deep-blue);
        }

        .footer-walkway-txt {
          font-size: 0.85rem;
          color: var(--medium-blue);
          font-style: italic;
          opacity: 0.85;
          margin-top: -0.5rem;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
