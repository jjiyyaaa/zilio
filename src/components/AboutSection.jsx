import React from 'react';
import { Lightbulb, FileText, Code, Award, GraduationCap } from 'lucide-react';

const AboutSection = ({ onScrollTo, totalProjects, totalCertificates }) => {
  return (
    <section id="about" className="bg-beige-gradient about-section">
      <div className="container">

        {/* Top: Introduction */}
        <div className="about-header animate-on-scroll">
          <h2 className="section-title">About Me</h2>
          <div className="slogan-wrapper">
            <Lightbulb className="slogan-icon" size={20} />
            <p className="about-slogan">Synthesizing beach vibes with web logic.</p>
            <Lightbulb className="slogan-icon" size={20} />
          </div>
        </div>

        {/* Main split 2-columns */}
        <div className="about-content grid-2col">

          {/* Left Column: Glowing Backlit Photo Frame */}
          <div className="about-photo-wrapper animate-on-scroll">
            <div className="beige-card-panel">
              {/* Sunset backlight glow */}
              <div className="photo-backlight"></div>
              <div className="photo-frame-outer">
                <img
                  src="/assets/IT_Ghaziya M P I (2)-2.jpg"
                  alt="Ghaziya Manna Putri Iwadani"
                  className="profile-photo"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Bio details */}
          <div className="about-bio animate-on-scroll delay-200">
            <span className="bio-greeting">Hello I'm</span>
            <h3 className="bio-name">Ghaziya Manna Putri Iwadani</h3>

            <p className="bio-text">
              A passionate Informatics Student transitioning into a full-stack developer role. I thrive on translating creative ideas into clean, efficient, and user-friendly digital solutions. With a focus on modern technologies and continuous learning, I'm eager to innovate and create impactful web experiences.
            </p>

            <div className="bio-buttons">
              {/* Download CV: Filled Medium Blue with document logo */}
              <a href="/assets/Resume Ghaziya.pdf" download="Ghaziya_Manna_Putri_Iwadani_CV.pdf" className="btn btn-primary btn-cv">
                <FileText size={18} />
                <span>Download CV</span>
              </a>

              {/* View Projects: Outline Teal border with code logo */}
              <button className="btn btn-secondary btn-projects" onClick={() => onScrollTo('portfolio')}>
                <Code size={18} />
                <span>View Projects</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom: Stats Row */}
        <div className="stats-row animate-on-scroll delay-300">

          {/* Card 1: Projects */}
          <div className="stat-card glass-card">
            <div className="stat-header">
              <div className="stat-icon-container">
                <Code className="stat-icon" size={24} />
              </div>
              <span className="stat-number">{totalProjects}</span>
            </div>
            <h4 className="stat-title">Total Projects</h4>
          </div>

          {/* Card 2: Certificates */}
          <div className="stat-card glass-card">
            <div className="stat-header">
              <div className="stat-icon-container">
                <Award className="stat-icon" size={24} />
              </div>
              <span className="stat-number">{totalCertificates}</span>
            </div>
            <h4 className="stat-title">Certificates</h4>
          </div>

          {/* Card 3: Experience */}
          <div className="stat-card glass-card">
            <div className="stat-header">
              <div className="stat-icon-container">
                <GraduationCap className="stat-icon" size={24} />
              </div>
              <span className="stat-number">2nd</span>
            </div>
            <h4 className="stat-title">Semester Informatics</h4>
          </div>

        </div>

      </div>

      <style>{`
        .about-section {
          padding-top: 100px;
          padding-bottom: 100px;
        }

        .about-header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .section-title {
          font-size: 2.5rem;
          color: var(--deep-blue);
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 1rem;
        }

        .slogan-wrapper {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          justify-content: center;
        }

        .about-slogan {
          font-family: var(--font-heading);
          font-size: 1.2rem;
          color: var(--medium-blue);
          font-weight: 600;
          font-style: italic;
        }

        .slogan-icon {
          color: var(--teal-cyan);
          animation: pulseIcon 3s ease-in-out infinite;
        }

        /* Photo Column Styles */
        .about-photo-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .beige-card-panel {
          position: relative;
          background-color: var(--beige);
          padding: 24px;
          border-radius: 30px;
          box-shadow: 0 15px 40px rgba(16, 34, 75, 0.08);
          border: 1px solid rgba(146, 189, 207, 0.3);
          max-width: 380px;
          width: 100%;
        }

        .photo-backlight {
          position: absolute;
          top: -20px;
          left: -20px;
          right: -20px;
          bottom: -20px;
          background: radial-gradient(circle, rgba(247, 204, 162, 0.6) 0%, rgba(20, 155, 184, 0.2) 50%, rgba(255,255,255,0) 70%);
          filter: blur(15px);
          z-index: 1;
          border-radius: 40px;
          pointer-events: none;
        }

        .photo-frame-outer {
          position: relative;
          z-index: 2;
          background-color: var(--off-white);
          padding: 12px;
          border-radius: 20px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
          overflow: hidden;
          transition: var(--transition-bounce);
        }

        .photo-frame-outer:hover {
          transform: scale(1.02) rotate(-1deg);
        }

        .profile-photo {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 12px;
          object-fit: cover;
        }

        /* Bio Column Styles */
        .about-bio {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          gap: 1.2rem;
        }

        .bio-greeting {
          font-family: var(--font-heading);
          font-size: 1.1rem;
          color: var(--light-blue);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .bio-name {
          font-size: 2.8rem;
          font-weight: 800;
          color: var(--deep-blue);
          line-height: 1.15;
          letter-spacing: -0.01em;
        }

        .bio-text {
          font-size: 1.1rem;
          color: var(--deep-blue);
          line-height: 1.7;
          margin-bottom: 0.5rem;
        }

        .bio-buttons {
          display: flex;
          gap: 16px;
        }

        .btn-cv {
          background-color: var(--medium-blue);
        }

        .btn-projects {
          border-color: var(--teal-cyan);
          color: var(--teal-cyan);
        }

        /* Bottom Stats Section */
        .stats-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-top: 6rem;
        }

        .stat-card {
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 12px;
          background: rgba(253, 252, 247, 0.85);
          border: 1px solid rgba(146, 189, 207, 0.5);
          box-shadow: 0 8px 25px rgba(16, 34, 75, 0.03);
          border-radius: 20px;
          padding: 24px 30px;
          transition: var(--transition-bounce);
        }

        .stat-card:hover {
          transform: translateY(-6px);
          border-color: var(--teal-cyan);
          box-shadow: 0 12px 30px rgba(20, 155, 184, 0.15);
        }

        .stat-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .stat-icon-container {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          border-radius: 12px;
          background-color: var(--teal-cyan-15);
          color: var(--teal-cyan);
        }

        .stat-number {
          font-family: var(--font-heading);
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--deep-blue);
        }

        .stat-title {
          font-family: var(--font-primary);
          font-size: 0.95rem;
          color: var(--medium-blue);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        @keyframes pulseIcon {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.15); opacity: 1; }
        }

        /* Responsive overrides */
        @media (max-width: 1024px) {
          .about-bio {
            align-items: center;
            text-align: center;
          }

          .bio-name {
            font-size: 2.2rem;
          }

          .bio-buttons {
            justify-content: center;
          }

          .stats-row {
            grid-template-columns: 1fr;
            max-width: 500px;
            margin: 4rem auto 0;
            gap: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
