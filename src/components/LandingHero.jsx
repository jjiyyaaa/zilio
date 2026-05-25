import React from 'react';
import { Compass } from 'lucide-react';
import { LinkedinIcon as Linkedin, InstagramIcon as Instagram, GithubIcon as Github } from './SocialIcons';

const LandingHero = ({ onExplore }) => {
  return (
    <div className="landing-hero bg-sky-gradient">
      {/* Background soft focus elements */}
      <div className="beach-orb orb-1"></div>
      <div className="beach-orb orb-2"></div>

      <div className="landing-content">
        {/* Row of animated social media icons in Teal */}
        <div className="social-row landing-socials">
          <a
            href="https://linkedin.com/in/ghaziya-manna-putri-iwadani"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://instagram.com/g.ghzz"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://github.com/jjiyyaaa"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
        </div>

        {/* Main Heading */}
        <h1 className="landing-heading">
          Welcome to My Portfolio Website
        </h1>

        <p className="landing-subtitle">
          Crafting modern full-stack web solutions with clean beach logic.
        </p>

        {/* Call to Action */}
        <button className="btn btn-capsule cta-explore" onClick={onExplore}>
          <span>Explore My Journey</span>
          <Compass className="icon-spin" size={18} />
        </button>
      </div>

      {/* Styled inline-CSS specific to the LandingHero page */}
      <style>{`
        .landing-hero {
          height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding: 2rem;
          text-align: center;
        }

        .landing-content {
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 800px;
          gap: 2rem;
          animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .landing-heading {
          font-size: 3.5rem;
          font-weight: 800;
          color: var(--deep-blue);
          line-height: 1.15;
          letter-spacing: -0.03em;
        }

        .landing-subtitle {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          color: var(--medium-blue);
          max-width: 600px;
          margin-top: -0.5rem;
        }

        .landing-socials {
          margin-bottom: 0.5rem;
        }

        .cta-explore {
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          gap: 12px;
          transition: var(--transition-bounce);
        }

        .icon-spin {
          transition: transform 0.8s ease;
        }
        
        .cta-explore:hover .icon-spin {
          transform: rotate(180deg);
        }

        /* Ambient beach soft-focus blobs */
        .beach-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.55;
          z-index: 1;
          pointer-events: none;
        }

        .orb-1 {
          width: 400px;
          height: 400px;
          background-color: var(--light-blue);
          top: -100px;
          left: -100px;
          animation: pulseOrb 8s ease-in-out infinite alternate;
        }

        .orb-2 {
          width: 500px;
          height: 500px;
          background-color: var(--beige);
          bottom: -150px;
          right: -150px;
          animation: pulseOrb 12s ease-in-out infinite alternate-reverse;
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulseOrb {
          0% {
            transform: scale(1) translate(0, 0);
          }
          100% {
            transform: scale(1.15) translate(30px, 30px);
          }
        }

        @media (max-width: 768px) {
          .landing-heading {
            font-size: 2.2rem;
          }
          .landing-subtitle {
            font-size: 1.05rem;
          }
        }
      `}</style>
    </div>
  );
};

export default LandingHero;
