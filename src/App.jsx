import React, { useState, useEffect } from 'react';
import LandingHero from './components/LandingHero';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { projectsData, certificatesData } from './data/portfolioData';

function App() {
  const [hasExplored, setHasExplored] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);

  // Triggering the smooth activation of portfolio content
  const handleExplore = () => {
    setHasExplored(true);
    // Wait for state rendering, then scroll smoothly to the Home content section
    setTimeout(() => {
      scrollToSection('home');
    }, 100);
  };

  const handleBackToShowcase = () => {
    setSelectedProject(null);
    // Wait for state rendering, then scroll smoothly to the portfolio section
    setTimeout(() => {
      scrollToSection('portfolio');
    }, 100);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll to top when entering project details
  useEffect(() => {
    if (selectedProject) {
      window.scrollTo(0, 0);
    }
  }, [selectedProject]);

  // Scroll spy & element entrance animation trigger using IntersectionObserver
  useEffect(() => {
    if (!hasExplored) return;

    // 1. Monitor elements to trigger visual entry animations
    const animationObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-active');
          }
        });
      },
      { threshold: 0.15 }
    );

    const animElements = document.querySelectorAll('.animate-on-scroll');
    animElements.forEach((el) => animationObserver.observe(el));

    // 2. Monitor sections to update the active nav link on scroll
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 } // Trigger when at least 40% of the section is visible
    );

    const sections = ['home', 'about', 'portfolio', 'contact'];
    sections.forEach((secId) => {
      const secEl = document.getElementById(secId);
      if (secEl) navObserver.observe(secEl);
    });

    return () => {
      animElements.forEach((el) => animationObserver.unobserve(el));
      sections.forEach((secId) => {
        const secEl = document.getElementById(secId);
        if (secEl) navObserver.unobserve(secEl);
      });
    };
  }, [hasExplored, selectedProject]);

  return (
    <div className="portfolio-app-wrapper">
      {!hasExplored ? (
        <LandingHero onExplore={handleExplore} />
      ) : (
        <div className="portfolio-main-layout">
          {selectedProject ? (
            <main className="main-content-flow">
              <PortfolioSection
                selectedProject={selectedProject}
                setSelectedProject={setSelectedProject}
                onBack={handleBackToShowcase}
              />
            </main>
          ) : (
            <>
              {/* Sticky Navbar */}
              <Navbar activeSection={activeSection} onNavigate={scrollToSection} />

              {/* Core Single Page Content */}
              <main className="main-content-flow">
                {/* Section 1: Home */}
                <HomeSection onScrollTo={scrollToSection} />

                {/* Section 2: About Me */}
                <AboutSection
                  onScrollTo={scrollToSection}
                  totalProjects={projectsData.length}
                  totalCertificates={certificatesData.length}
                />

                {/* Section 3: Portfolio Showcase */}
                <PortfolioSection
                  selectedProject={selectedProject}
                  setSelectedProject={setSelectedProject}
                  onBack={handleBackToShowcase}
                />

                {/* Section 4: Contact Me */}
                <ContactSection />
              </main>
            </>
          )}

          {/* Section 5: Footer */}
          <Footer />
        </div>
      )}

      {/* Embedded application container styles */}
      <style>{`
        .portfolio-app-wrapper {
          min-height: 100vh;
          width: 100%;
          background-color: var(--off-white);
        }

        .portfolio-main-layout {
          animation: pageFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .main-content-flow {
          width: 100%;
        }

        @keyframes pageFadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
