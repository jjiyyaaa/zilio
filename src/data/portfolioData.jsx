import React from 'react';
import { Globe, Database, Server, Layers } from 'lucide-react';

export const projectsData = [
  {
    id: 1,
    name: 'Daily Check-In',
    path: 'Projects -> Daily Check-In',
    shortDesc: 'A beautiful and intuitive web application to track daily habits and mood check-ins.',
    desc: 'Daily Check-In is an interactive habit and presence tracking frontend web application. It allows users to log their daily routine check-ins, track active streak counters, and view a visual history of past presence dates. Features seamless local storage synchronization to maintain logs across sessions.',
    techUsed: ['React', 'Vite', 'Tailwind CSS', 'Lucide Icons', 'HTML5', 'Local Storage'],
    techCount: 6,
    mainFeatures: 'Interactive calendar check-in tracker, continuous streak counters, dynamic mood status cards.',
    liveUrl: 'https://daily-check-in-kohl.vercel.app/',
    githubUrl: 'https://github.com/jjiyyaaa/Daily-CheckIn',
    type: 'Frontend Web App',
    icon: <Globe size={24} />,
    bgGradient: 'linear-gradient(135deg, #149bb8 0%, #3b629b 100%)',
    image: '/assets/overview/Daily Check-in.png'
  },
  {
    id: 2,
    name: 'Final Night Registration',
    path: 'Projects -> Final Night Registration',
    shortDesc: 'A responsive event registration page designed for informatics student gala night.',
    desc: 'An elegant, beach-breeze-themed web portal built to handle registrations for a celebratory Informatics Student Gala Night. Featuring sleek interactive input fields, robust client-side verification, instant ticket generation, and a fully fluid mobile-first responsive layout.',
    techUsed: ['HTML5', 'CSS3', 'JavaScript ES6', 'GitHub Pages', 'Validation API'],
    techCount: 5,
    mainFeatures: 'Interactive ticket booking flow, client-side email format verification, responsive layout grids.',
    liveUrl: 'https://jjiyyaaa.github.io/Final-Night-Registration/',
    githubUrl: 'https://github.com/jjiyyaaa/Final-Night-Registration',
    type: 'Event Webpage',
    icon: <Database size={24} />,
    bgGradient: 'linear-gradient(135deg, #3b629b 0%, #10224b 100%)',
    image: '/assets/overview/Final Night Registration.png'
  },
  {
    id: 3,
    name: 'Finalist Registration',
    path: 'Projects -> Finalist Registration',
    shortDesc: 'A registration system tailored for contest finalists to verify information.',
    desc: 'Finalist Registration is a dedicated frontend web portal created for contest finalists to submit profile data, verify award eligibility, and generate official competition entry passes. Features smooth scroll movements and glassmorphic form elements.',
    techUsed: ['HTML5', 'CSS3', 'JavaScript ES6', 'GitHub Pages', 'Animate.css'],
    techCount: 5,
    mainFeatures: 'Finalist credential validation, smooth interactive transitions, responsive input sheets.',
    liveUrl: 'http://mrmspresuniv26.infinityfreeapp.com/',
    githubUrl: 'https://github.com/jjiyyaaa/Finalist-Registration',
    type: 'Interactive Form Webpage',
    icon: <Globe size={24} />,
    bgGradient: 'linear-gradient(135deg, #e3dbcf 0%, #149bb8 100%)',
    image: '/assets/overview/Finalist Registration.png'
  },
  {
    id: 4,
    name: 'I-Finance App',
    path: 'Projects -> I-Finance App',
    shortDesc: 'A premium mobile budgeting application tracking income, expenses, and savings goals.',
    desc: 'I-Finance is a full-featured Android application designed to promote financial literacy. It allows users to log multiple sources of income, categorize daily expenses, set monthly budget limits, and visualize transaction breakdowns through interactive analytics charts. Since it is a native mobile app, the live demo directs to the repository for source compilation and testing.',
    techUsed: ['Kotlin', 'Android SDK', 'SQLite Database', 'Jetpack Compose', 'MPAndroidChart'],
    techCount: 5,
    mainFeatures: 'Interactive finance breakdown graphs, local SQLite budget persistence, customized category alerts.',
    liveUrl: '',
    githubUrl: 'https://github.com/jjiyyaaa/I-Finance-App',
    type: 'Android Mobile App',
    icon: <Server size={24} />,
    bgGradient: 'linear-gradient(135deg, #10224b 0%, #92bdcf 100%)',
    image: '/assets/overview/I-Finance.png'
  },
  {
    id: 5,
    name: 'Warkop Warga',
    path: 'Projects -> Warkop Warga',
    shortDesc: 'A digital restaurant ordering and kitchen display system for a local coffee shop.',
    desc: 'Warkop Warga is a full-stack digital cafe management platform. Table customers scan table-specific QR codes to open a menu and place orders. Orders are instantly broadcast via WebSockets to a secure kitchen display board. Includes administration metrics for order completion speed.',
    techUsed: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
    techCount: 6,
    mainFeatures: 'Real-time WebSocket kitchen alerts, QR table identification, secure order flow state machine.',
    liveUrl: 'https://warkop-warga-production.up.railway.app/index.html?table=6',
    githubUrl: 'https://github.com/jjiyyaaa/Warkop-Warga',
    type: 'Full-Stack Web App',
    icon: <Globe size={24} />,
    bgGradient: 'linear-gradient(135deg, #92bdcf 0%, #e3dbcf 100%)',
    image: '/assets/overview/Warkop Warga.png'
  },
  {
    id: 6,
    name: 'Join Our Newsletter',
    path: 'Projects -> Join Our Newsletter',
    shortDesc: 'An interactive newsletter subscription card with syntax checks and transitions.',
    desc: 'A gorgeous, pixel-perfect frontend newsletter sign-up interface built to solve standard UI challenges. Integrates high-fidelity responsive layouts, custom regex email structure checks, active invalid-format error states, and a smooth modern transitions system.',
    techUsed: ['HTML5', 'CSS Modules', 'JavaScript ES6', 'Netlify', 'Regex API'],
    techCount: 5,
    mainFeatures: 'Accurate email syntax validation, customized transition animations, success screen layout cards.',
    liveUrl: 'https://join-our-newsletter-challenges.netlify.app/',
    githubUrl: 'https://github.com/jjiyyaaa/join-our-newsletter',
    type: 'Interactive UI Card',
    icon: <Database size={24} />,
    bgGradient: 'linear-gradient(135deg, #3b629b 0%, #92bdcf 100%)',
    image: '/assets/overview/Join Our Newsletter.png'
  },
  {
    id: 7,
    name: 'Simple FAQ Page',
    path: 'Projects -> Simple FAQ Page',
    shortDesc: 'A clean, highly accessible FAQ accordion page with smooth toggle transitions.',
    desc: 'Simple FAQ Page is a responsive web component constructed with strict focus on semantic accessibility. Provides a fluid accordion structure using optimized height transition sheets, CSS custom variables, and full screen width compatibility.',
    techUsed: ['HTML5', 'CSS3', 'JavaScript ES6', 'A11y ARIA', 'GitHub Pages'],
    techCount: 5,
    mainFeatures: 'Keyboard accessibility focus states, fluid toggle height animations, beach-inspired color palettes.',
    liveUrl: 'https://jjiyyaaa.github.io/simple-faq-page/',
    githubUrl: 'https://github.com/jjiyyaaa/simple-faq-page',
    type: 'Accessible Web Component',
    icon: <Globe size={24} />,
    bgGradient: 'linear-gradient(135deg, #e3dbcf 0%, #3b629b 100%)',
    image: '/assets/overview/Frequently Ask Question.png'
  },
  {
    id: 8,
    name: 'Minimal Blog Card',
    path: 'Projects -> Minimal Blog Card',
    shortDesc: 'A beautifully structured, pixel-perfect responsive blog card with modern fonts.',
    desc: 'A modular, high-fidelity responsive blog card component showing rich graphical layouts, Outfit/Inter typography hierarchy, interactive scaling hover states, and smooth glassmorphic shadow borders.',
    techUsed: ['HTML5', 'CSS3', 'Google Fonts', 'Modern Reset API', 'Netlify'],
    techCount: 5,
    mainFeatures: 'Pixel-perfect card layouts, interactive scale transitions, elegant category tag designs.',
    liveUrl: 'https://minimal-blog-card-challenges.netlify.app/',
    githubUrl: 'https://github.com/jjiyyaaa/Minimal-blog-card',
    type: 'Responsive UI Component',
    icon: <Layers size={24} />,
    bgGradient: 'linear-gradient(135deg, #149bb8 0%, #10224b 100%)',
    image: '/assets/overview/Minimal Blog Card.png'
  }
];

export const certificatesData = [
  {
    id: 1,
    title: 'Best Final Project - Weekly Class Web Dev 2.0',
    issuer: 'GDG on Campus UIN Jakarta',
    date: 'May 2026',
    code: 'CERT-BFP-202605',
    skills: 'React, CSS Grid, Interactive Frontend APIs, Team Leadership',
    color: '#3b629b'
  },
  {
    id: 2,
    title: 'Weekly Class Web Dev 2.0',
    issuer: 'GDG on Campus UIN Jakarta',
    date: 'May 2026',
    code: 'CERT-WCW-202605',
    skills: 'HTML5, CSS3, JavaScript ES6, Responsive Layouts',
    color: '#149bb8'
  },
  {
    id: 3,
    title: 'Belajar Dasar Pemrograman Web',
    issuer: 'Dicoding Indonesia',
    date: 'Apr 2026',
    code: 'CERT-DCD-WEB-202604',
    skills: 'HTML5, CSS3, Flexbox, Layout Semantic, Responsive Web Design',
    color: '#10224b'
  },
  {
    id: 4,
    title: 'Belajar Dasar Pengembangan Aplikasi Mobile',
    issuer: 'Dicoding Indonesia',
    date: 'Apr 2026',
    code: 'CERT-DCD-MOB-202604',
    skills: 'Android Studio, Kotlin, UI/UX, Mobile Application Lifecycle',
    color: '#a93226'
  },
  {
    id: 5,
    title: 'Siswa Tersertifikasi Gemini AI Developer',
    issuer: 'Google for Education Partner',
    date: 'Apr 2026',
    code: 'CERT-GEMINI-202604',
    skills: 'Large Language Models, Gemini API, Prompt Design, AI Integrations',
    color: '#3b629b'
  },
  {
    id: 6,
    title: 'TechTalk Web 2.0 Developer Class',
    issuer: 'GDG on Campus UIN Jakarta',
    date: 'Apr 2026',
    code: 'CERT-TTW-202604',
    skills: 'Modern Web Standards, Web Components, State Hydration',
    color: '#149bb8'
  },
  {
    id: 7,
    title: 'Webinar Google for Education Certified Participant',
    issuer: 'Google for Education',
    date: 'Apr 2026',
    code: 'CERT-GFE-202604',
    skills: 'Google Workspace APIs, Cloud Collaboration, Digital Tech Integration',
    color: '#10224b'
  },
  {
    id: 8,
    title: 'Weekly Class Android',
    issuer: 'GDG on Campus UIN Jakarta',
    date: 'Mar 2026',
    code: 'CERT-WCAND-202603',
    skills: 'Android Studio, XML Layouts, Java Programming, Application Lifecycle',
    color: '#a93226'
  },
  {
    id: 9,
    title: 'CSS and JS Complete Course For Beginners',
    issuer: 'Udemy Academy',
    date: 'Jan 2026',
    code: 'CERT-UDM-CSJS-202601',
    skills: 'CSS Layouts, Responsive Design, JavaScript DOM and Events',
    color: '#3b629b'
  },
  {
    id: 10,
    title: 'Fullstack Web Dev Class',
    issuer: 'Dibimbing.ID',
    date: 'Jan 2026',
    code: 'CERT-FWD-202601',
    skills: 'React, Node.js, Express, MongoDB, Server Architecture',
    color: '#149bb8'
  },
  {
    id: 11,
    title: 'Introduction to Financial Literacy',
    issuer: 'Dicoding Indonesia',
    date: 'Jan 2026',
    code: 'CERT-FIN-202601',
    skills: 'Expense Management, Budgeting, Compound Interest, Investment Core',
    color: '#10224b'
  },
  {
    id: 12,
    title: 'TechTalk Android',
    issuer: 'Dibimbing.ID',
    date: 'Jan 2026',
    code: 'CERT-TTA-202601',
    skills: 'Android Architecture Components, Gradle builds, APK Optimization',
    color: '#a93226'
  },
  {
    id: 13,
    title: 'AI Talks: Navigating Generative Models',
    issuer: 'Devcode & Gethired',
    date: 'Dec 2025',
    code: 'CERT-AIT-202512',
    skills: 'Generative AI Foundations, Neural Network Architectures, NLP Basics',
    color: '#3b629b'
  },
  {
    id: 14,
    title: 'Global Entrepreneurship & Innovation Bootcamp',
    issuer: 'Thunderbird School of Global Management',
    date: 'Oct 2025',
    code: 'CERT-GEIB-202510',
    skills: 'Business Model Canvas, Product Strategy, Pitching, Team Dynamics',
    color: '#149bb8'
  },
  {
    id: 15,
    title: 'Uji Kemahiran Berbahasa Indonesia (UKBI)',
    issuer: 'Badan Pengembangan dan Pembinaan Bahasa',
    date: 'Jul 2025',
    code: 'SD-BB-1008296',
    skills: 'Indonesian Language Proficiency, Skor: 599 (Unggul)',
    color: '#10224b'
  },
  {
    id: 16,
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    date: 'Apr 2025',
    code: 'CERT-CS-202504',
    skills: 'Threat Mitigation, Data Encryption, Network Security Principles',
    color: '#a93226'
  },
  {
    id: 17,
    title: 'Peserta Nihongo Nouryoku Contest',
    issuer: 'Asosiasi Guru Bahasa Jepang Indonesia (AGBJI)',
    date: 'Oct 2024',
    code: 'CERT-NNC-202410',
    skills: 'Japanese Communication, Cross-Cultural Relations, Public Speaking',
    color: '#3b629b'
  }
];

