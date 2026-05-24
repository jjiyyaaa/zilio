import React, { useState } from 'react';
import { Code, Award, Layers, ExternalLink, ChevronLeft, ShieldCheck, Zap, Server, Database, Globe } from 'lucide-react';
import { GithubIcon as Github } from './SocialIcons';
import { projectsData, certificatesData } from '../data/portfolioData';

const PortfolioSection = ({ selectedProject, setSelectedProject, onBack }) => {
  const [activeTab, setActiveTab] = useState('projects');
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);

  // Dynamic Tech Stack level calculator based on actual usage in projects
  const techKeywords = {
    'HTML5': ['html5', 'html'],
    'CSS3': ['css3', 'css', 'tailwind css', 'css modules', 'breeze styling'],
    'JavaScript': ['javascript', 'javascript es6', 'js', 'react'],
    'React': ['react'],
    'Node.js': ['node.js', 'node'],
    'Express': ['express'],
    'SQL / Databases': ['sql', 'sqlite database', 'mongodb', 'databases', 'mysql', 'postgresql'],
    'Git & GitHub': ['git', 'github', 'github pages'],
    'AOS / Scroll Anims': ['aos', 'scroll anims', 'animate.css', 'framer motion'],
    'Vite / npm': ['vite', 'npm'],
    'REST APIs': ['rest apis', 'express', 'node.js', 'socket.io', 'api'],
    'Responsive Layouts': ['responsive layouts', 'tailwind css', 'css3', 'html5', 'flexbox', 'grid']
  };

  const techStackData = [
    { name: 'HTML5', category: 'Frontend', baseLevel: 80, desc: 'Semantic layout markup' },
    { name: 'CSS3', category: 'Frontend', baseLevel: 80, desc: 'Vanilla grids, flexbox, animations' },
    { name: 'JavaScript', category: 'Language', baseLevel: 80, desc: 'ES6+ core logic & DOM events' },
    { name: 'React', category: 'Framework', baseLevel: 75, desc: 'Component systems & state flows' },
    { name: 'Node.js', category: 'Backend', baseLevel: 70, desc: 'REST server logic architectures' },
    { name: 'Express', category: 'Backend', baseLevel: 70, desc: 'Server middleware and routing' },
    { name: 'SQL / Databases', category: 'Database', baseLevel: 75, desc: 'MySQL & PostgreSQL relational systems' },
    { name: 'Git & GitHub', category: 'DevOps', baseLevel: 80, desc: 'Version tracking and branches' },
    { name: 'AOS / Scroll Anims', category: 'Frontend', baseLevel: 75, desc: 'Fluid scroll triggers' },
    { name: 'Vite / npm', category: 'Tooling', baseLevel: 75, desc: 'Fast scaffolding & build assets' },
    { name: 'REST APIs', category: 'Arch', baseLevel: 75, desc: 'Endpoint designs & JSON parsing' },
    { name: 'Responsive Layouts', category: 'Design', baseLevel: 85, desc: 'Desktop-first modular fluid sheets' }
  ].map(tech => {
    const keywords = techKeywords[tech.name] || [tech.name.toLowerCase()];
    const usageCount = projectsData.filter(proj => 
      proj.techUsed.some(t => keywords.includes(t.toLowerCase()))
    ).length;
    
    const dynamicLevel = Math.min(95, tech.baseLevel + (usageCount * 3));
    return {
      ...tech,
      level: `${dynamicLevel}%`
    };
  });

  const handleProjectDetails = (project) => {
    setSelectedProject(project);
    window.scrollTo(0, 0);
  };

  const visibleProjects = showAllProjects ? projectsData : projectsData.slice(0, 6);
  const visibleCertificates = showAllCertificates ? certificatesData : certificatesData.slice(0, 6);

  return (
    <section id="portfolio" className="bg-sky-gradient portfolio-section">
      <div className="container">

        {/* Main Section Header */}
        {!selectedProject && (
          <div className="portfolio-header animate-on-scroll">
            <h2 className="section-title">Portfolio Showcase</h2>
            <p className="portfolio-desc">
              Explore my latest creations, projects, and academic milestones. A curated collection of digital experiences built with modern technologies, showcasing my path from concept to code.
            </p>

            {/* Tab Bar with Large Logos above text */}
            <div className="portfolio-tab-bar">
              <button
                className={`portfolio-tab ${activeTab === 'projects' ? 'active' : ''}`}
                onClick={() => setActiveTab('projects')}
              >
                <Code className="tab-icon" size={28} />
                <span>PROJECTS</span>
              </button>

              <button
                className={`portfolio-tab ${activeTab === 'certificates' ? 'active' : ''}`}
                onClick={() => setActiveTab('certificates')}
              >
                <Award className="tab-icon" size={28} />
                <span>CERTIFICATES</span>
              </button>

              <button
                className={`portfolio-tab ${activeTab === 'tech' ? 'active' : ''}`}
                onClick={() => setActiveTab('tech')}
              >
                <Layers className="tab-icon" size={28} />
                <span>TECH STACK</span>
              </button>
            </div>
          </div>
        )}

        {/* Dynamic Showcase Area */}
        <div className="portfolio-content-area">

          {/* 1. Deep Dive Integrated Project View */}
          {selectedProject ? (
            <div className="project-deep-dive project-deep-dive-animate">
              {/* Back Navigation & Path */}
              <div className="deep-dive-nav">
                <button className="btn btn-secondary btn-back" onClick={onBack}>
                  <ChevronLeft size={16} />
                  <span>Back to Showcase</span>
                </button>
                <div className="project-breadcrumb">
                  <span>Path</span>
                  <span className="bread-arrow">&bull;</span>
                  <span>Projects</span>
                  <span className="bread-arrow">&bull;</span>
                  <span className="bread-active">{selectedProject.name}</span>
                </div>
              </div>

              {/* Title Header */}
              <div className="deep-dive-header">
                <h3 className="deep-dive-title">{selectedProject.name}</h3>
                <span className="project-type-badge">{selectedProject.type}</span>
              </div>

              {/* Grid 2col Details */}
              <div className="deep-dive-body grid-2col">

                {/* Left Panel: Overview Image / Graphic */}
                <div className="deep-dive-visual">
                  {selectedProject.image ? (
                    <div className="project-screenshot-frame glass-card">
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.name}
                        className="project-screenshot-img"
                      />
                    </div>
                  ) : (
                    <div
                      className="visual-container wave-shape"
                      style={{ background: selectedProject.bgGradient }}
                    >
                      <div className="visual-icon-glow">
                        {selectedProject.icon}
                      </div>
                      <span className="visual-watermark">jjiyyaaa</span>
                    </div>
                  )}
                </div>

                {/* Right Panel: Content Text */}
                <div className="deep-dive-info">
                  <h4 className="info-section-title">Overview Description</h4>
                  <p className="deep-dive-desc-text">{selectedProject.desc}</p>

                  {/* Two Stats Box Cards */}
                  <div className="deep-dive-stats-row">
                    {/* Stat Card 1: Technologies used */}
                    <div className="dive-stat-card glass-card">
                      <div className="dive-stat-hdr">
                        <Zap className="stat-icon-sm" size={18} fill="currentColor" />
                        <span className="stat-value-sm">{selectedProject.techCount}</span>
                      </div>
                      <span className="stat-label-sm">Total Tech Used</span>
                    </div>

                    {/* Stat Card 2: Main features */}
                    <div className="dive-stat-card glass-card">
                      <div className="dive-stat-hdr">
                        <ShieldCheck className="stat-icon-sm" size={18} />
                      </div>
                      <span className="stat-label-sm">Verified Stability</span>
                    </div>
                  </div>

                  {/* Feature Highlights block */}
                  <div className="dive-features-block">
                    <h5 className="features-hdr">Core Feature Focus:</h5>
                    <p className="features-desc-txt">{selectedProject.mainFeatures}</p>
                  </div>

                  {/* Technologies Used Badge List */}
                  <div className="dive-tech-stack">
                    <h5 className="tech-stack-hdr">Technologies Used:</h5>
                    <div className="dive-tech-badges">
                      {selectedProject.techUsed.map((tech, idx) => (
                        <span key={idx} className="badge-lang">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Button Row */}
                  <div className="deep-dive-actions">
                    {selectedProject.liveUrl ? (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        <ExternalLink size={18} />
                        <span>Live Demo</span>
                      </a>
                    ) : (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        <Github size={18} />
                        <span>App Repo / Readme</span>
                      </a>
                    )}

                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                      >
                        <Github size={18} />
                        <span>GitHub Code</span>
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </div>
          ) : (
            <>
              {/* 2. Main Tab - PROJECTS View */}
              {activeTab === 'projects' && (
                <div className="projects-view tab-pane-animate">
                  <div className="projects-grid">
                    {visibleProjects.map((project) => (
                      <div key={project.id} className="project-card glass-card animate-on-scroll animate-active">
                        {/* Thumbnail header */}
                        <div className="project-thumb" style={{ background: project.bgGradient }}>
                          <div className="thumb-icon-circle">
                            {project.icon}
                          </div>
                          <span className="thumb-label">{project.type}</span>
                        </div>

                        {/* Body content */}
                        <div className="project-card-body">
                          <h3 className="project-card-title">{project.name}</h3>
                          <p className="project-card-shortdesc">{project.shortDesc}</p>

                          {/* Footer Action Links */}
                          <div className="project-card-footer">
                            {project.liveUrl ? (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-live-link"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <span>Live Demo</span>
                                <ExternalLink size={14} />
                              </a>
                            ) : (
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-live-link"
                                onClick={(e) => e.stopPropagation()}
                                style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                              >
                                <span>Mobile App</span>
                                <Github size={14} />
                              </a>
                            )}

                            <button
                              className="btn btn-primary btn-sm btn-details"
                              onClick={() => handleProjectDetails(project)}
                            >
                              <span>details</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Show More Projects */}
                  {projectsData.length > 6 && (
                    <div className="show-more-container">
                      <button
                        className="btn btn-secondary btn-capsule"
                        onClick={() => setShowAllProjects(!showAllProjects)}
                      >
                        <span>{showAllProjects ? 'Show Less' : 'Show More Projects'}</span>
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* 3. Main Tab - CERTIFICATES View */}
              {activeTab === 'certificates' && (
                <div className="certificates-view tab-pane-animate">
                  <div className="certificates-grid">
                    {visibleCertificates.map((cert) => (
                      <div key={cert.id} className="cert-card glass-card animate-on-scroll animate-active">
                        {/* Styled Vector Certificate Header Mockup */}
                        <div className="cert-mockup-header" style={{ borderLeftColor: cert.color }}>
                          <Award className="cert-star" size={32} style={{ color: cert.color }} />
                          <div className="cert-watermark-txt">VERIFIED</div>
                        </div>

                        {/* Certificate Body */}
                        <div className="cert-body">
                          <span className="cert-date">{cert.date}</span>
                          <h3 className="cert-title">{cert.title}</h3>
                          <span className="cert-issuer">Issued by: {cert.issuer}</span>
                          <p className="cert-skills">Skills gained: {cert.skills}</p>
                        </div>

                        {/* Certificate Footer */}
                        <div className="cert-footer">
                          <span className="cert-code">ID: {cert.code}</span>
                          <div className="cert-status-badge">
                            <ShieldCheck size={14} />
                            <span>Academic Valid</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Show More Certificates */}
                  {certificatesData.length > 6 && (
                    <div className="show-more-container">
                      <button
                        className="btn btn-secondary btn-capsule"
                        onClick={() => setShowAllCertificates(!showAllCertificates)}
                      >
                        <span>{showAllCertificates ? 'Show Less' : 'Show More Certificates'}</span>
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* 4. Main Tab - TECH STACK View */}
              {activeTab === 'tech' && (
                <div className="tech-stack-view tab-pane-animate">
                  <div className="tech-grid">
                    {techStackData.map((tech, idx) => (
                      <div key={idx} className="tech-card glass-card">
                        <div className="tech-card-header">
                          <span className="tech-category">{tech.category}</span>
                          <span className="tech-level-percent">{tech.level}</span>
                        </div>
                        <h3 className="tech-name">{tech.name}</h3>
                        <p className="tech-desc">{tech.desc}</p>
                        <div className="tech-progress-bar">
                          <div className="tech-progress-fill" style={{ width: tech.level }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}

        </div>

      </div>

      <style>{`
        /* Screenshot Frame Mockup */
        .project-screenshot-frame {
          width: 100%;
          max-width: 440px;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(16, 34, 75, 0.12);
          border: 1px solid rgba(146, 189, 207, 0.4);
          background: var(--off-white);
          display: flex;
          flex-direction: column;
          transition: var(--transition-smooth);
        }

        .project-screenshot-frame:hover {
          transform: translateY(-5px);
          box-shadow: 0 25px 50px rgba(20, 155, 184, 0.2);
        }

        .browser-header-mockup {
          background: var(--beige);
          padding: 10px 16px;
          display: flex;
          align-items: center;
          gap: 6px;
          border-bottom: 1px solid rgba(146, 189, 207, 0.3);
        }

        .browser-header-mockup .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          display: inline-block;
        }

        .dot-red { background-color: #ff5f56; }
        .dot-yellow { background-color: #ffbd2e; }
        .dot-green { background-color: #27c93f; }

        .browser-address-mockup {
          margin-left: 12px;
          background-color: var(--off-white);
          border-radius: 20px;
          font-size: 0.75rem;
          color: var(--medium-blue);
          padding: 2px 16px;
          flex-grow: 1;
          max-width: 250px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-family: var(--font-primary);
          opacity: 0.8;
          border: 1px solid rgba(146, 189, 207, 0.2);
          text-align: left;
        }

        .project-screenshot-img {
          width: 100%;
          height: auto;
          max-height: 280px;
          object-fit: cover;
          display: block;
        }

        /* Animations */
        @keyframes tabFadeIn {
          from {
            opacity: 0;
            transform: translateY(15px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes deepDiveEntry {
          from {
            opacity: 0;
            transform: scale(0.96) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .tab-pane-animate {
          animation: tabFadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .project-deep-dive-animate {
          animation: deepDiveEntry 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .portfolio-section {
          padding-top: 100px;
          padding-bottom: 100px;
          min-height: 100vh;
        }

        .portfolio-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .portfolio-desc {
          font-size: 1.15rem;
          color: var(--deep-blue);
          max-width: 750px;
          margin: 0 auto 3rem;
          line-height: 1.6;
        }

        /* Tab Bar Styles */
        .portfolio-tab-bar {
          display: inline-flex;
          gap: 2rem;
          border-bottom: 2px solid var(--light-blue);
          padding-bottom: 8px;
          width: 100%;
          max-width: 750px;
          justify-content: center;
        }

        .portfolio-tab {
          background: none;
          border: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          font-family: var(--font-heading);
          font-size: 0.9rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--medium-blue);
          cursor: pointer;
          transition: var(--transition-bounce);
          padding: 8px 16px;
          position: relative;
          min-width: 150px;
        }

        .tab-icon {
          transition: var(--transition-bounce);
          opacity: 0.7;
        }

        .portfolio-tab:hover {
          color: var(--teal-cyan);
        }

        .portfolio-tab:hover .tab-icon {
          transform: translateY(-4px) scale(1.1);
          opacity: 1;
        }

        .portfolio-tab.active {
          color: var(--teal-cyan);
        }

        .portfolio-tab.active .tab-icon {
          color: var(--teal-cyan);
          opacity: 1;
          transform: scale(1.15);
        }

        .portfolio-tab::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 0%;
          height: 4px;
          background-color: var(--teal-cyan);
          border-radius: 4px;
          transition: var(--transition-smooth);
        }

        .portfolio-tab.active::after {
          width: 100%;
        }

        /* Projects Grid View */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
          margin-top: 1rem;
        }

        .project-card {
          display: flex;
          flex-direction: column;
          padding: 0;
          overflow: hidden;
          background: rgba(253, 252, 247, 0.9);
          border: 1px solid rgba(146, 189, 207, 0.4);
        }

        .project-thumb {
          height: 180px;
          width: 100%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--off-white);
          overflow: hidden;
          transition: var(--transition-smooth);
        }

        .project-card:hover .project-thumb {
          transform: scale(1.02);
        }

        .thumb-icon-circle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: rgba(253, 252, 247, 0.25);
          backdrop-filter: blur(5px);
          border: 1px solid rgba(253, 252, 247, 0.4);
          color: var(--off-white);
          z-index: 2;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }

        .thumb-label {
          position: absolute;
          top: 12px;
          right: 12px;
          background-color: rgba(16, 34, 75, 0.65);
          color: var(--off-white);
          font-family: var(--font-heading);
          font-size: 0.75rem;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: 20px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .project-card-body {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          gap: 12px;
          text-align: left;
        }

        .project-card-title {
          font-size: 1.4rem;
          color: var(--deep-blue);
          font-weight: 700;
        }

        .project-card-shortdesc {
          font-size: 0.95rem;
          color: var(--deep-blue);
          opacity: 0.85;
          line-height: 1.5;
          flex-grow: 1;
        }

        .project-card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 1rem;
          border-top: 1px solid rgba(146, 189, 207, 0.3);
          padding-top: 12px;
        }

        .project-live-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-family: var(--font-heading);
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--teal-cyan);
          text-decoration: none;
          transition: var(--transition-smooth);
        }
        .project-live-link:hover {
          color: var(--medium-blue);
          transform: translateX(3px);
        }

        .btn-sm {
          padding: 8px 18px;
          font-size: 0.85rem;
        }

        .btn-details {
          background-color: var(--medium-blue);
        }

        /* Project Deep Dive View */
        .project-deep-dive {
          background: rgba(253, 252, 247, 0.85);
          border: 1px solid rgba(146, 189, 207, 0.5);
          box-shadow: 0 15px 40px rgba(16, 34, 75, 0.06);
          border-radius: 25px;
          padding: 40px;
          text-align: left;
        }

        .deep-dive-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(146, 189, 207, 0.4);
          padding-bottom: 20px;
          margin-bottom: 30px;
        }

        .btn-back {
          border-color: var(--teal-cyan);
          color: var(--teal-cyan);
          padding: 8px 20px;
          font-size: 0.9rem;
        }

        .project-breadcrumb {
          font-family: var(--font-heading);
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--medium-blue);
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .bread-arrow {
          color: var(--light-blue);
        }
        .bread-active {
          color: var(--teal-cyan);
          font-weight: 700;
        }

        .deep-dive-header {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 30px;
        }

        .deep-dive-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--deep-blue);
        }

        .project-type-badge {
          background-color: var(--teal-cyan-15);
          color: var(--teal-cyan);
          font-family: var(--font-heading);
          font-size: 0.85rem;
          font-weight: 700;
          padding: 6px 16px;
          border-radius: 30px;
          text-transform: uppercase;
        }

        .deep-dive-visual {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .visual-container {
          width: 100%;
          max-width: 380px;
          height: 380px;
          border-radius: 50% 50% 30% 70% / 50% 60% 40% 60%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          color: var(--off-white);
          box-shadow: 0 15px 35px rgba(20, 155, 184, 0.2);
          overflow: hidden;
        }

        .visual-icon-glow {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: rgba(253, 252, 247, 0.2);
          border: 2px solid rgba(253, 252, 247, 0.4);
          transform: scale(1.1);
        }

        .visual-watermark {
          position: absolute;
          bottom: 24px;
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 800;
          opacity: 0.35;
          letter-spacing: 0.1em;
        }

        .deep-dive-info {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .info-section-title {
          font-size: 1.3rem;
          color: var(--deep-blue);
          font-weight: 700;
        }

        .deep-dive-desc-text {
          font-size: 1.05rem;
          color: var(--deep-blue);
          line-height: 1.7;
          opacity: 0.9;
        }

        .deep-dive-stats-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .dive-stat-card {
          padding: 16px 20px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          border-color: rgba(146, 189, 207, 0.4);
          background: rgba(253, 252, 247, 0.6);
        }

        .dive-stat-hdr {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: var(--teal-cyan);
        }

        .stat-value-sm {
          font-family: var(--font-heading);
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--deep-blue);
        }

        .stat-label-sm {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--medium-blue);
          text-transform: uppercase;
        }

        .dive-features-block {
          background-color: var(--beige-50);
          border-left: 4px solid var(--teal-cyan);
          padding: 16px 20px;
          border-radius: 0 12px 12px 0;
        }

        .features-hdr,
        .tech-stack-hdr {
          font-family: var(--font-heading);
          font-size: 1rem;
          color: var(--deep-blue);
          font-weight: 700;
          margin-bottom: 6px;
        }

        .features-desc-txt {
          font-size: 0.95rem;
          color: var(--deep-blue);
          line-height: 1.5;
        }

        .dive-tech-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 8px;
        }

        .deep-dive-actions {
          display: flex;
          gap: 16px;
          margin-top: 1rem;
          border-top: 1px solid rgba(146, 189, 207, 0.3);
          padding-top: 24px;
        }

        /* Show More Button */
        .show-more-container {
          display: flex;
          justify-content: center;
          margin-top: 4rem;
        }

        /* Certificates Grid View */
        .certificates-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
        }

        .cert-card {
          padding: 0;
          display: flex;
          flex-direction: column;
          text-align: left;
          background: rgba(253, 252, 247, 0.95);
          overflow: hidden;
          border-radius: 20px;
          box-shadow: 0 10px 25px rgba(16, 34, 75, 0.03);
        }

        .cert-mockup-header {
          height: 80px;
          background: linear-gradient(90deg, var(--beige) 0%, rgba(227, 219, 207, 0.2) 100%);
          border-left: 6px solid var(--teal-cyan);
          position: relative;
          display: flex;
          align-items: center;
          padding: 0 24px;
        }

        .cert-star {
          filter: drop-shadow(0 2px 6px rgba(0,0,0,0.1));
        }

        .cert-watermark-txt {
          position: absolute;
          right: 24px;
          font-family: var(--font-heading);
          font-size: 0.9rem;
          font-weight: 800;
          opacity: 0.15;
          letter-spacing: 0.15em;
        }

        .cert-body {
          padding: 24px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .cert-date {
          font-family: var(--font-heading);
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--light-blue);
          text-transform: uppercase;
        }

        .cert-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--deep-blue);
          line-height: 1.3;
          min-height: 50px;
        }

        .cert-issuer {
          font-size: 0.9rem;
          color: var(--medium-blue);
          font-weight: 600;
        }

        .cert-skills {
          font-size: 0.85rem;
          color: var(--deep-blue);
          opacity: 0.8;
          line-height: 1.4;
          margin-top: 6px;
        }

        .cert-footer {
          border-top: 1px solid rgba(146, 189, 207, 0.3);
          padding: 16px 24px;
          background-color: rgba(227, 219, 207, 0.15);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .cert-code {
          font-family: monospace;
          font-size: 0.75rem;
          color: var(--medium-blue);
        }

        .cert-status-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background-color: var(--off-white);
          border: 1px solid var(--light-blue);
          color: var(--medium-blue);
          font-size: 0.75rem;
          font-weight: 600;
          padding: 3px 10px;
          border-radius: 20px;
        }

        /* Tech Stack Grid View */
        .tech-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          margin-top: 1rem;
        }

        .tech-card {
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 20px 24px;
        }

        .tech-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .tech-category {
          background-color: var(--beige);
          color: var(--deep-blue);
          font-family: var(--font-heading);
          font-size: 0.75rem;
          font-weight: 700;
          padding: 3px 10px;
          border-radius: 12px;
          text-transform: uppercase;
        }

        .tech-level-percent {
          font-family: var(--font-heading);
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--teal-cyan);
        }

        .tech-name {
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--deep-blue);
        }

        .tech-desc {
          font-size: 0.85rem;
          color: var(--deep-blue);
          opacity: 0.8;
          line-height: 1.4;
          min-height: 40px;
        }

        .tech-progress-bar {
          height: 6px;
          width: 100%;
          background-color: var(--beige);
          border-radius: 10px;
          overflow: hidden;
          margin-top: 4px;
        }

        .tech-progress-fill {
          height: 100%;
          background-color: var(--teal-cyan);
          border-radius: 10px;
          transition: width 1s ease-out;
        }

        /* Responsive styling */
        @media (max-width: 1024px) {
          .projects-grid,
          .certificates-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
          
          .tech-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }

          .deep-dive-title {
            font-size: 2rem;
          }
        }

        @media (max-width: 768px) {
          .portfolio-tab-bar {
            flex-direction: column;
            gap: 10px;
            border-bottom: none;
            padding-bottom: 0;
          }
          
          .portfolio-tab {
            width: 100%;
            min-width: 0;
          }

          .portfolio-tab::after {
            display: none;
          }

          .projects-grid,
          .certificates-grid,
          .tech-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .deep-dive-nav {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }

          .deep-dive-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
        }
      `}</style>
    </section>
  );
};

export default PortfolioSection;
