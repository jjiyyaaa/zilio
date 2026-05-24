import React from 'react';

const FloatingIllustration = () => {
  return (
    <div style={{ width: '100%', maxWidth: '480px', margin: '0 auto', position: 'relative' }}>
      {/* Dynamic inline styles for flexible, fluid, and layered micro-animations */}
      <style>{`
        @keyframes floatMain {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(0.8deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        @keyframes leafBreeze {
          0% { transform: rotate(0deg); }
          50% { transform: rotate(4deg) skewX(2deg); }
          100% { transform: rotate(0deg); }
        }
        @keyframes waveSlide1 {
          0% { transform: translateX(0px) translateY(0px); }
          50% { transform: translateX(12px) translateY(-3px); }
          100% { transform: translateX(0px) translateY(0px); }
        }
        @keyframes waveSlide2 {
          0% { transform: translateX(0px) translateY(0px); }
          50% { transform: translateX(-8px) translateY(2px); }
          100% { transform: translateX(0px) translateY(0px); }
        }
        @keyframes orbReact {
          0% { transform: translateY(0px) rotate(0deg) scale(1); }
          33% { transform: translateY(-14px) rotate(6deg) scale(1.02); }
          66% { transform: translateY(3px) rotate(-4deg) scale(0.98); }
          100% { transform: translateY(0px) rotate(0deg) scale(1); }
        }
        @keyframes orbSQL {
          0% { transform: translateY(0px) rotate(0deg) scale(1); }
          50% { transform: translateY(-18px) rotate(-8deg) scale(1.04); }
          100% { transform: translateY(0px) rotate(0deg) scale(1); }
        }
        @keyframes orbHTML {
          0% { transform: translateY(0px) rotate(0deg) scale(1); }
          50% { transform: translateY(-12px) rotate(8deg) scale(0.97); }
          100% { transform: translateY(0px) rotate(0deg) scale(1); }
        }
        @keyframes codeBlink {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        @keyframes coconutStraw {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(6deg); }
        }
        @keyframes sunPulse {
          0% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.05); opacity: 0.95; }
          100% { transform: scale(1); opacity: 0.8; }
        }

        .anim-main-desk {
          animation: floatMain 7s ease-in-out infinite;
        }
        .anim-leaf-1 {
          animation: leafBreeze 9s ease-in-out infinite alternate;
        }
        .anim-leaf-2 {
          animation: leafBreeze 12s ease-in-out infinite alternate-reverse;
        }
        .anim-wave-1 {
          animation: waveSlide1 6s ease-in-out infinite;
        }
        .anim-wave-2 {
          animation: waveSlide2 8s ease-in-out infinite;
        }
        .anim-orb-react {
          animation: orbReact 8s ease-in-out infinite;
        }
        .anim-orb-sql {
          animation: orbSQL 6.5s ease-in-out infinite;
        }
        .anim-orb-html {
          animation: orbHTML 7.5s ease-in-out infinite;
        }
        .anim-code-cursor {
          animation: codeBlink 1.4s step-start infinite;
        }
        .anim-straw {
          animation: coconutStraw 4.5s ease-in-out infinite alternate;
        }
        .anim-sun {
          animation: sunPulse 10s ease-in-out infinite;
        }
      `}</style>

      <svg
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: 'auto', display: 'block' }}
      >
        {/* Soft Glowing Backlight */}
        <circle cx="250" cy="230" r="180" fill="url(#glowGradient)" opacity="0.35" />

        {/* Tropical Palm Leaves in Background (Animated) */}
        <path
          className="anim-leaf-1"
          style={{ transformOrigin: '320px 340px' }}
          d="M330,100 C370,120 400,180 390,240 C380,290 350,330 320,340 C350,290 370,220 350,160 C340,130 330,110 330,100 Z"
          fill="#149bb8"
          opacity="0.2"
        />
        <path
          className="anim-leaf-2"
          style={{ transformOrigin: '350px 290px' }}
          d="M360,80 C400,110 420,160 410,210 C400,250 370,280 350,290 C370,250 390,190 370,140 C365,120 360,95 360,80 Z"
          fill="#149bb8"
          opacity="0.15"
        />

        {/* Sun Behind the Desk (Pulsing) */}
        <circle className="anim-sun" style={{ transformOrigin: '160px 180px' }} cx="160" cy="180" r="45" fill="url(#sunGradient)" />

        {/* Waves effect at the base (Morphing/Swaying back and forth) */}
        <path
          className="anim-wave-1"
          d="M 50,420 Q 150,390 250,420 T 450,420 L 450,460 L 50,460 Z"
          fill="#92bdcf"
          opacity="0.3"
        />
        <path
          className="anim-wave-2"
          d="M 20,440 Q 130,420 250,440 T 480,440 L 480,460 L 20,460 Z"
          fill="#149bb8"
          opacity="0.25"
        />

        {/* --- MAIN DESK GROUP (Floats beautifully as a single layered entity) --- */}
        <g className="anim-main-desk" style={{ transformOrigin: '250px 380px' }}>
          {/* Main Office Desk */}
          <rect x="80" y="380" width="340" height="15" rx="7.5" fill="#e3dbcf" />
          <rect x="100" y="395" width="20" height="65" fill="#3b629b" />
          <rect x="380" y="395" width="20" height="65" fill="#3b629b" />
          <rect x="90" y="455" width="40" height="8" rx="4" fill="#10224b" />
          <rect x="370" y="455" width="40" height="8" rx="4" fill="#10224b" />

          {/* Developer Laptop */}
          {/* Screen Base */}
          <path d="M170,375 L330,375 L340,380 L160,380 Z" fill="#10224b" />
          {/* Screen */}
          <rect x="180" y="270" width="140" height="95" rx="6" fill="#10224b" />
          {/* Display Area */}
          <rect x="187" y="276" width="126" height="80" rx="3" fill="#081126" />

          {/* Code Snippets on Screen */}
          <path d="M195,288 L200,284 L195,280" stroke="#149bb8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M205,280 L200,284 L205,288" stroke="#149bb8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          
          <line x1="213" y1="284" x2="250" y2="284" stroke="#fdfcf7" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
          <line x1="195" y1="296" x2="230" y2="296" stroke="#92bdcf" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
          <line x1="237" y1="296" x2="285" y2="296" stroke="#3b629b" strokeWidth="3" strokeLinecap="round" />
          
          <line x1="195" y1="308" x2="270" y2="308" stroke="#149bb8" strokeWidth="3" strokeLinecap="round" />
          <line x1="277" y1="308" x2="300" y2="308" stroke="#fdfcf7" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
          
          <line x1="210" y1="320" x2="290" y2="320" stroke="#3b629b" strokeWidth="3" strokeLinecap="round" />
          <line x1="210" y1="332" x2="260" y2="332" stroke="#149bb8" strokeWidth="3" strokeLinecap="round" />
          
          {/* Compiling Blinking Terminal Cursor Line */}
          <line className="anim-code-cursor" x1="195" y1="344" x2="240" y2="344" stroke="#fdfcf7" strokeWidth="3" strokeLinecap="round" />

          {/* Laptop Glowing Overlay */}
          <polygon points="187,356 313,356 350,420 150,420" fill="url(#screenGlow)" opacity="0.12" />

          {/* A Cute Tropical Coconut on the Desk */}
          <circle cx="125" cy="355" r="18" fill="#5c4033" />
          <circle cx="125" cy="355" r="16" fill="#8b5a2b" />
          
          {/* Straw in the coconut (Micro-Sways with the beach breeze) */}
          <g className="anim-straw" style={{ transformOrigin: '125px 340px' }}>
            <line x1="125" y1="340" x2="138" y2="320" stroke="#149bb8" strokeWidth="3" strokeLinecap="round" />
            <line x1="138" y1="320" x2="148" y2="320" stroke="#149bb8" strokeWidth="3" strokeLinecap="round" />
          </g>
          
          {/* Little Umbrella */}
          <path d="M110,345 L100,330" stroke="#3b629b" strokeWidth="2" />
          <path d="M96,330 Q105,325 114,330 L105,335 Z" fill="#ff7f50" />

          {/* Starfish & Shells on the Beach Sand base */}
          {/* Starfish */}
          <path
            d="M 370,412 L 373,404 L 381,404 L 375,399 L 377,391 L 370,396 L 363,391 L 365,399 L 359,404 L 367,404 Z"
            fill="#ff7f50"
          />
          {/* Seashell */}
          <path
            d="M 395,414 Q 390,404 400,402 Q 410,404 405,414 Z"
            fill="#fdfcf7"
            stroke="#e3dbcf"
            strokeWidth="1.5"
          />
        </g>

        {/* --- FLOATING ATMOSPHERIC ORBS (Float independently at asymmetrical speeds/coordinates) --- */}
        {/* React Code Orb */}
        <g className="anim-orb-react" style={{ transformOrigin: '380px 180px' }}>
          <circle cx="380" cy="180" r="28" fill="#fdfcf7" stroke="#149bb8" strokeWidth="1.5" />
          <ellipse cx="380" cy="180" rx="18" ry="7" stroke="#149bb8" strokeWidth="1.2" transform="rotate(30, 380, 180)" />
          <ellipse cx="380" cy="180" rx="18" ry="7" stroke="#149bb8" strokeWidth="1.2" transform="rotate(90, 380, 180)" />
          <ellipse cx="380" cy="180" rx="18" ry="7" stroke="#149bb8" strokeWidth="1.2" transform="rotate(150, 380, 180)" />
          <circle cx="380" cy="180" r="3" fill="#10224b" />
        </g>

        {/* SQL Database Orb */}
        <g className="anim-orb-sql" style={{ transformOrigin: '120px 220px' }}>
          <circle cx="120" cy="220" r="25" fill="#fdfcf7" stroke="#3b629b" strokeWidth="1.5" />
          <ellipse cx="120" cy="210" rx="10" ry="3" fill="none" stroke="#3b629b" strokeWidth="1.5" />
          <path d="M110,210 L110,226 A10,4 0 0 0 130,226 L130,210" fill="none" stroke="#3b629b" strokeWidth="1.5" />
          <path d="M110,218 A10,4 0 0 0 130,218" fill="none" stroke="#3b629b" strokeWidth="1.5" />
        </g>

        {/* HTML/JS Gear Orb */}
        <g className="anim-orb-html" style={{ transformOrigin: '280px 100px' }}>
          <circle cx="280" cy="100" r="24" fill="#fdfcf7" stroke="#92bdcf" strokeWidth="1.5" />
          <path d="M272,96 L267,100 L272,104" stroke="#10224b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M288,96 L293,100 L288,104" stroke="#10224b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="282" y1="94" x2="278" y2="106" stroke="#10224b" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Gradients Definition */}
        <defs>
          <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#149bb8" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="sunGradient" x1="160" y1="135" x2="160" y2="225">
            <stop offset="0%" stopColor="#ffb347" />
            <stop offset="100%" stopColor="#ffcc33" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="screenGlow" x1="250" y1="356" x2="250" y2="420" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#149bb8" stopOpacity="1" />
            <stop offset="100%" stopColor="#149bb8" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default FloatingIllustration;
