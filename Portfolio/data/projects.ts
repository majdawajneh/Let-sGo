export type Project = {
  slug: string;
  title: string;
  category: string;

  description: string;
  image: string;

  tech: string[];

  featured: boolean;

  liveUrl?: string;
  githubUrl?: string;

  role: string;
  year: string;

  overview: string;
  problem: string;
  solution: string;

  features: string[];

  results: {
    value: string;
    label: string;
  }[];

  gallery: string[];
};

export const projects: Project[] = [
  {
    slug: "western-bridge",

    title: "Western Bridge",

    category: "Business & Education Platform",

    description:
      "A multilingual business and education website focused on Germany-related services, consulting, training, and institutional solutions.",

    image: "/images/Western-Bridge.webp",

    tech: [
      "Next.js",
      "TypeScript",
      "CSS Modules",
      "Arabic RTL",
      "SEO",
    ],

    featured: true,

    liveUrl: "https://www.westernbridge.de/en",
    githubUrl: "",

    role: "Frontend Developer",

    year: "2026",

    overview:
      "Western Bridge is a multilingual digital platform designed to present consulting, education, training, and Germany-focused services through a structured and professional web experience.",

    problem:
      "The platform needed to communicate a broad range of services to different audiences while remaining easy to navigate, responsive, multilingual, and search-engine friendly.",

    solution:
      "I structured the website around clear service categories and localized routes, implemented responsive interfaces with Next.js and TypeScript, added Arabic RTL support, and built a solid SEO foundation including metadata, canonical URLs, sitemap, robots configuration, and structured content.",

    features: [
      "Multilingual English and Arabic experience",
      "Full RTL support for Arabic",
      "Responsive layouts across devices",
      "SEO-friendly route architecture",
      "Contact workflow",
      "Service-focused information architecture",
    ],

    results: [
      {
        value: "2",
        label: "Languages",
      },
      {
        value: "100%",
        label: "Responsive",
      },
      {
        value: "SEO",
        label: "Optimized",
      },
    ],

    gallery: [
      "/public/images/Western-Bridge-Project1.jpg",
      "/public/images/Western-Bridge-Project2.jpg",
      "/public/images/Western-Bridge-Project3.jpg",
    ],
  },

  {
    slug: "crestmark-solutions",

    title: "CrestMark Solutions",

    category: "Software Services",

    description:
      "A modern software services experience built around a cinematic interface, multilingual content, responsive design, and strong technical branding.",

    image: "/images/crestmark-solutions.webp",

    tech: [
      "Next.js",
      "TypeScript",
      "Framer Motion",
      "Responsive UI",
      "SEO",
    ],

    featured: true,

    liveUrl: "https://crestmark.agency/en",
    githubUrl: "",

    role: "Frontend Developer & UI Engineer",

    year: "2026",

    overview:
      "CrestMark Solutions is a modern digital presence for a software services brand, designed to communicate technical capability through a highly polished and motion-focused interface.",

    problem:
      "The website needed to stand apart from conventional agency templates while still remaining clear, professional, responsive, and suitable for multiple languages.",

    solution:
      "I developed a custom Next.js interface using TypeScript and motion-driven interactions, with a strong focus on responsive behavior, multilingual architecture, technical presentation, and a consistent visual identity.",

    features: [
      "Cinematic interface direction",
      "Framer Motion interactions",
      "Responsive design",
      "Multilingual architecture",
      "SEO foundation",
      "Custom technical visual system",
    ],

    results: [
      {
        value: "3",
        label: "Languages",
      },
      {
        value: "100%",
        label: "Custom UI",
      },
      {
        value: "SEO",
        label: "Ready",
      },
    ],

    gallery: [
      "/images/project-2.svg",
      "/images/detail-grid.svg",
      "/images/detail-mobile.svg",
    ],
  },

  {
    slug: "crestmark-academy",

    title: "CrestMark Academy",

    category: "Full-Stack Learning Platform",

    description:
      "A full-stack educational platform with course management, enrollment, learning progress, reviews, notifications, profiles, certificates, and administrative workflows.",

    image: "/images/project-3.svg",

    tech: [
      "ASP.NET Core",
      "C#",
      "EF Core",
      "SQL Server",
      "Next.js",
      "JWT",
    ],

    featured: true,

    liveUrl: "",
    githubUrl: "",

    role: "Full-Stack Developer",

    year: "2026",

    overview:
      "CrestMark Academy is a full-stack learning platform built around a structured backend architecture and a modern Next.js frontend.",

    problem:
      "The system required more than basic course CRUD. It needed authentication, role management, course structure, enrollments, learning progress, user profiles, reviews, notifications, certificates, and administrative workflows while remaining maintainable as the platform grows.",

    solution:
      "I designed the backend using ASP.NET Core, C#, Entity Framework Core, SQL Server, JWT authentication, and a clean layered architecture. The frontend is built with Next.js and TypeScript and communicates with the API through structured application flows.",

    features: [
      "JWT authentication and authorization",
      "Course and lesson management",
      "Enrollment workflows",
      "Lesson progress tracking",
      "Reviews and wishlists",
      "Notifications",
      "Profile management",
      "Certificate generation",
      "Admin user management",
    ],

    results: [
      {
        value: "Full",
        label: "Stack",
      },
      {
        value: "JWT",
        label: "Security",
      },
      {
        value: "Clean",
        label: "Architecture",
      },
    ],

    gallery: [
      "/images/project-3.svg",
      "/images/detail-grid.svg",
      "/images/detail-mobile.svg",
    ],
  },

  {
    slug: "task-management-system",

    title: "Task Management System",

    category: "Full-Stack Application",

    description:
      "A structured task management system built with a secure backend, relational data model, authentication, and modern full-stack architecture.",

    image: "/images/project-4.svg",

    tech: [
      "ASP.NET Core",
      "C#",
      "EF Core",
      "SQL Server",
      "JWT",
      "REST APIs",
    ],

    featured: true,

    liveUrl: "",
    githubUrl: "",

    role: "Full-Stack Developer",

    year: "2026",

    overview:
      "A task management application designed around structured backend services, secure authentication, relational data, and clear task workflows.",

    problem:
      "Task-oriented applications quickly become difficult to maintain when users, roles, permissions, projects, tasks, and status transitions are tightly coupled.",

    solution:
      "I built the system around a structured ASP.NET Core backend, REST APIs, JWT authentication, Entity Framework Core, and SQL Server to keep application logic and persistence organized and maintainable.",

    features: [
      "Secure JWT authentication",
      "Role-based access",
      "Task management",
      "Relational database design",
      "REST API architecture",
      "Structured backend services",
    ],

    results: [
      {
        value: "REST",
        label: "API",
      },
      {
        value: "JWT",
        label: "Authentication",
      },
      {
        value: "SQL",
        label: "Relational Data",
      },
    ],

    gallery: [
      "/images/project-4.svg",
      "/images/detail-grid.svg",
      "/images/detail-mobile.svg",
    ],
  },
];

/* ========================================
   FEATURED PROJECTS
======================================== */

export const featuredProjects = projects.filter(
  (project) => project.featured
);

/* ========================================
   GET PROJECT BY SLUG
======================================== */

export function getProject(
  slug: string
): Project | undefined {
  return projects.find(
    (project) => project.slug === slug
  );
}

/* ========================================
   GET NEXT PROJECT
======================================== */

export function getNextProject(
  currentSlug: string
): Project | undefined {
  const currentIndex = projects.findIndex(
    (project) => project.slug === currentSlug
  );

  if (currentIndex === -1) {
    return undefined;
  }

  const nextIndex =
    (currentIndex + 1) % projects.length;

  return projects[nextIndex];
}