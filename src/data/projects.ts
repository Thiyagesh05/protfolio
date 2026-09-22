import type { Project } from '../types';

export const PROJECTS_DATA: Project[] = [
  {
    id: "billpro",
    name: "BillPro",
    category: "Billing & Invoice Management",
    shortDescription: "A professional billing and invoice management application designed to simplify invoice creation, customer management and payment tracking.",
    fullDescription: "BillPro is a feature-packed web application built to help small businesses and freelancers streamline their financial administration. It provides intuitive workflows for invoice generation, real-time GST tax calculation, WhatsApp notification sending, customer records, and dynamic sales analytics dashboard.",
    technologies: ["React.js", "Firebase", "JavaScript", "Chart.js"],
    features: [
      "Invoice creation & custom PDF rendering",
      "Customer & client directory management",
      "Product catalog & inventory management",
      "Billing history & status tracking",
      "Interactive sales & revenue analytics",
      "Automated GST calculation",
      "Multiple payment method logging",
      "Direct invoice printing & layout preview",
      "WhatsApp invoice link integration",
      "Secure Firebase Authentication"
    ],
    liveUrl: "https://example.com/billpro-demo",
    githubUrl: "https://github.com/thiyageshmohan2005-svg/billpro",
    featured: true,
    problem: "Small business owners often struggle with manual paper billing, delayed payment collection tracking, and complex tax calculations.",
    solution: "BillPro provides a unified web portal where invoices can be drafted in seconds, automatically calculated with GST, and shared directly via WhatsApp while tracking collection status.",
    role: "Lead Frontend & Application Developer",
    challenges: [
      "Structuring real-time Firestore sync with multi-item tax calculations.",
      "Optimizing client-side PDF document generation and print layout scaling across browsers."
    ],
    learnings: [
      "Deepened expertise in React state management and custom custom hooks.",
      "Mastered Firebase database security rules and authentication flow patterns."
    ]
  },
  {
    id: "cable-connect-hub",
    name: "Cable Connect Hub",
    category: "Customer Management System",
    shortDescription: "A cable customer management platform designed to help operators manage customers, payments, pending balances and monthly collections.",
    fullDescription: "Cable Connect Hub is a operational management platform tailored for cable service operators. It centralizes monthly billing cycles, field agent collection logs, unpaid balances alerts, and geographical area categorization into a unified executive dashboard.",
    technologies: ["React", "JavaScript", "MySQL", "Node.js"],
    features: [
      "Comprehensive customer profile database",
      "Monthly subscription collection tracking",
      "Pending payments & balance overdue alerts",
      "Payment transaction history logs",
      "Fast instant customer search & filtering",
      "Area & route management grouping",
      "Financial reports & collection summary",
      "Role-based staff & operator dashboard",
      "Responsive field-ready mobile views"
    ],
    liveUrl: "https://example.com/cableconnect-demo",
    githubUrl: "https://github.com/thiyageshmohan2005-svg/cable-connect-hub",
    featured: false,
    problem: "Cable operators traditionally relied on physical collection record books, leading to lost billing records and uncollected pending dues.",
    solution: "Designed a centralized system allowing operators to look up customer records by location or ID and instantly log monthly payments.",
    role: "Full-Stack Developer",
    challenges: [
      "Handling dynamic query filtering across thousands of regional customer records.",
      "Designing a clean UI that field staff can easily operate on mobile devices."
    ],
    learnings: [
      "Gained hands-on experience building relational database schemas in MySQL.",
      "Learned to build REST API endpoints using Express and Node.js."
    ]
  },
  {
    id: "movie-rating-download",
    name: "Movie Rating & Download Website",
    category: "Entertainment Web Application",
    shortDescription: "A movie-focused web application that allows users to explore movies, view ratings and access download links.",
    fullDescription: "An interactive entertainment portal designed for film enthusiasts. Features real-time movie listings fetched via movie APIs, detailed movie synopsis cards, community ratings, genre filtering, and direct link integration with Telegram channels.",
    technologies: ["HTML", "CSS", "JavaScript", "REST API"],
    features: [
      "Curated & trending movie listings",
      "Dynamic movie rating cards",
      "Real-time instant title search",
      "Fully responsive dark-themed UI",
      "Detailed film metadata & genre tags",
      "Telegram download link integration",
      "Fast page load speed & minimal DOM overhead"
    ],
    liveUrl: "https://example.com/movierating-demo",
    githubUrl: "https://github.com/thiyageshmohan2005-svg/movie-rating-app",
    featured: false,
    problem: "Users often find movie download websites cluttered with intrusive ads, broken download links, and sluggish navigation.",
    solution: "Created a minimalist, lightning-fast UI prioritizing movie cover art, clean rating metrics, and direct Telegram channel link access.",
    role: "Frontend Developer",
    challenges: [
      "Managing asynchronous API request error states and skeleton loader screens.",
      "Designing responsive grid layouts without framework overhead using pure CSS Grid."
    ],
    learnings: [
      "Strengthened core vanilla JavaScript DOM manipulation and Fetch API skills.",
      "Improved mobile-first CSS architecture principles."
    ]
  },
  {
    id: "developer-portfolio",
    name: "Developer Portfolio",
    category: "Personal Portfolio",
    shortDescription: "An interactive 3D portfolio created to showcase my development skills, projects and learning journey.",
    fullDescription: "A modern, production-grade 3D Web Developer Portfolio engineered with React, TypeScript, Tailwind CSS, Three.js, and Framer Motion. Built to showcase technical capabilities through immersive 3D graphics, floating glassmorphism UI components, interactive command terminal, and micro-interactions.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Three.js", "Framer Motion"],
    features: [
      "Interactive 3D Holographic Code Cube Canvas",
      "Drag-and-rotate 3D Skill Tag Cloud",
      "Interactive Retro Developer Terminal",
      "3D tilt project & profile cards",
      "Floating glassmorphism status navigation",
      "Smooth scroll reveals & ambient particle fields",
      "Fully validated interactive contact portal"
    ],
    liveUrl: "https://thiyagesh.dev",
    githubUrl: "https://github.com/thiyageshmohan2005-svg/3d-portfolio",
    featured: false,
    problem: "Standard static resumes fail to visually demonstrate frontend development, 3D graphics interaction, and modern UI engineering capabilities.",
    solution: "Built an Awwwards-inspired futuristic web experience combining WebGL canvas elements, smooth motion kinetics, and robust TypeScript architecture.",
    role: "Sole Creator & Developer",
    challenges: [
      "Balancing high-performance WebGL 3D rendering with mobile device responsiveness.",
      "Structuring modular TypeScript component architectures for reusable UI primitives."
    ],
    learnings: [
      "Mastered React Three Fiber and Three.js 3D canvas integration.",
      "Explored advanced Framer Motion layout animations and spatial micro-interactions."
    ]
  }
];
