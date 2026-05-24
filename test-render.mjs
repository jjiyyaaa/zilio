import React from 'react';
import ReactDOMServer from 'react-dom/server';

// Mock browser globals just in case they are used on import
globalThis.window = {
  addEventListener: () => {},
  removeEventListener: () => {},
  scrollY: 0,
  IntersectionObserver: class {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
};
globalThis.document = {
  querySelectorAll: () => [],
  getElementById: () => null
};

async function test() {
  try {
    console.log("Loading components...");
    const App = (await import('./src/App.jsx')).default;
    
    console.log("Rendering App in landing state...");
    let html = ReactDOMServer.renderToString(React.createElement(App));
    console.log("App rendered in landing state successfully!");
    
    // Test rendering inside main portfolio state by simulating transition
    console.log("Creating elements for testing...");
    const LandingHero = (await import('./src/components/LandingHero.jsx')).default;
    const Navbar = (await import('./src/components/Navbar.jsx')).default;
    const HomeSection = (await import('./src/components/HomeSection.jsx')).default;
    const AboutSection = (await import('./src/components/AboutSection.jsx')).default;
    const PortfolioSection = (await import('./src/components/PortfolioSection.jsx')).default;
    const ContactSection = (await import('./src/components/ContactSection.jsx')).default;
    const Footer = (await import('./src/components/Footer.jsx')).default;

    console.log("Rendering components individually to catch crashes...");
    
    ReactDOMServer.renderToString(React.createElement(LandingHero, { onExplore: () => {} }));
    console.log("✓ LandingHero rendered.");

    ReactDOMServer.renderToString(React.createElement(Navbar, { activeSection: 'home', onNavigate: () => {} }));
    console.log("✓ Navbar rendered.");

    ReactDOMServer.renderToString(React.createElement(HomeSection, { onScrollTo: () => {} }));
    console.log("✓ HomeSection rendered.");

    ReactDOMServer.renderToString(React.createElement(AboutSection, { onScrollTo: () => {}, totalProjects: 8, totalCertificates: 7 }));
    console.log("✓ AboutSection rendered.");

    ReactDOMServer.renderToString(React.createElement(PortfolioSection));
    console.log("✓ PortfolioSection rendered.");

    ReactDOMServer.renderToString(React.createElement(ContactSection));
    console.log("✓ ContactSection rendered.");

    ReactDOMServer.renderToString(React.createElement(Footer));
    console.log("✓ Footer rendered.");

    console.log("SUCCESS: All components rendered without runtime crashes!");
  } catch (err) {
    console.error("FAILURE during component evaluation/rendering:");
    console.error(err);
    process.exit(1);
  }
}

test();
