import React from 'react';
import { Lightbulb, ChevronRight } from 'lucide-react';
import { LinkedinIcon as Linkedin, InstagramIcon as Instagram, GithubIcon as Github } from './SocialIcons';
import FloatingIllustration from './FloatingIllustration';

const HomeSection = ({ onScrollTo }) => {
  return (
    <section id="home" className="bg-sky-gradient home-section">
      <div className="container home-container grid-2col">
        {/* Left Side: Text and Interaction */}
        <div className="home-text-block animate-on-scroll animate-active">
          {/* Slogan Badge Capsule */}
          <div className="badge-capsule home-badge">
            <Lightbulb className="badge-icon-animate" size={16} />
            <span>ready to innovate</span>
          </div>

          {/* Heading and Subheading */}
          <h1 className="home-title">Frontend Developer</h1>
          <h2 className="home-subtitle">Informatics Student</h2>

          {/* Intro Text */}
          <p className="home-intro">
            creating innovative, functional, and user-friendly websites for digital solutions.
          </p>

          {/* Languages Capsule (styled like the ready to innovate badge) */}
          <div className="languages-container">
            <div className="badge-capsule lang-badge">
              <span className="lang-dot"></span>
              <span className="lang-text">React &bull; Node.js &bull; SQL &bull; JS</span>
            </div>
          </div>

          {/* Buttons Row */}
          <div className="home-buttons">
            <button className="btn btn-primary" onClick={() => onScrollTo('portfolio')}>
              <span>Projects</span>
              <ChevronRight size={18} />
            </button>
            <button className="btn btn-secondary" onClick={() => onScrollTo('contact')}>
              <span>Contact Me</span>
            </button>
          </div>

          {/* Social Row */}
          <div className="home-socials">
            <a
              href="https://linkedin.com/in/Ghaziya-Manna-Putri-Iwadani"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://instagram.com/g.ghzz"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://github.com/jjiyyaaa"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          </div>
        </div>

        {/* Right Side: Imagery */}
        <div className="home-image-block animate-on-scroll animate-active delay-200">
          <FloatingIllustration />
        </div>
      </div>

      <style>{`
        .home-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 120px;
          padding-bottom: 80px;
        }

        .home-container {
          align-items: center;
        }

        .home-text-block {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          gap: 1.5rem;
          animation: homeSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .home-badge {
          border-color: var(--teal-cyan);
          background-color: var(--beige);
          color: var(--deep-blue);
          box-shadow: 0 4px 10px rgba(20, 155, 184, 0.15);
        }

        .badge-icon-animate {
          color: var(--teal-cyan);
          animation: pulseIcon 2s ease-in-out infinite;
        }

        .home-title {
          font-size: 3.5rem;
          font-weight: 800;
          color: var(--medium-blue);
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        .home-subtitle {
          font-size: 1.8rem;
          font-weight: 600;
          color: var(--light-blue);
          margin-top: -0.5rem;
        }

        .home-intro {
          font-size: 1.15rem;
          color: var(--deep-blue);
          max-width: 500px;
          line-height: 1.6;
        }

        .languages-container {
          margin-top: 0.5rem;
        }

        .lang-badge {
          background-color: var(--off-white);
          border-color: var(--teal-cyan);
          color: var(--deep-blue);
          padding: 8px 20px;
          font-weight: 500;
        }

        .lang-dot {
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: var(--teal-cyan);
          margin-right: 4px;
        }

        .lang-text {
          font-family: var(--font-heading);
          letter-spacing: 0.05em;
          font-size: 0.85rem;
          font-weight: 700;
        }

        .home-buttons {
          display: flex;
          gap: 16px;
          margin-top: 0.5rem;
        }

        .home-socials {
          display: flex;
          gap: 16px;
          margin-top: 1rem;
        }

        .home-image-block {
          display: flex;
          justify-content: center;
          align-items: center;
          animation: homeScaleIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes homeSlideUp {
          from {
            opacity: 0;
            transform: translateY(35px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes homeScaleIn {
          from {
            opacity: 0;
            transform: scale(0.94);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes pulseIcon {
          0%, 100% {
            transform: scale(1);
            filter: drop-shadow(0 0 2px rgba(20, 155, 184, 0.4));
          }
          50% {
            transform: scale(1.2);
            filter: drop-shadow(0 0 8px rgba(20, 155, 184, 0.8));
          }
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .home-section {
            padding-top: 100px;
            padding-bottom: 60px;
          }

          .home-text-block {
            align-items: center;
            text-align: center;
            gap: 1.2rem;
          }

          .home-title {
            font-size: 2.8rem;
          }

          .home-subtitle {
            font-size: 1.5rem;
          }

          .home-intro {
            max-width: 100%;
          }

          .home-buttons {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default HomeSection;
