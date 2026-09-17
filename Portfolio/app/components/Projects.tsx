"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Projects.module.css";

export default function Projects() {
  const projects = [
    {
      number: "01",
      title: "Task Management System",
      category: "Full-Stack Development",
      description:
        "A full-stack management system featuring authentication, role-based access, employees, departments, projects, tasks, attendance, leave management, and payroll.",
      technologies: [
        "ASP.NET Core",
        "C#",
        "Entity Framework Core",
        "SQL Server",
        "JWT",
      ],
      image: null,
      code: "TMS",
      featured: true,
      status: "Completed",
      github: "",
      live: "",
    },

    {
      number: "02",
      title: "Travellna",
      category: "Travel Platform",
      description:
        "A travel planning platform focused on Jordan, designed to help visitors discover destinations, organize trips, explore local culture, and manage their travel experience.",
      technologies: [
        "Web Development",
        "Responsive Design",
        "Database Design",
        "UI/UX",
      ],
      image: null,
      code: "TR",
      featured: false,
      status: "Completed",
      github: "",
      live: "",
    },

    {
      number: "03",
      title: "NobileBit Solutions",
      category: "Front-End Development",
      description:
        "A modern business website built with a strong focus on responsive interfaces, clean visual hierarchy, smooth interactions, and reusable components.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "CSS Modules",
        "Framer Motion",
      ],
      image: null,
      code: "NB",
      featured: false,
      status: "Completed",
      github: "",
      live: "",
    },

    {
      number: "04",
      title: "NobileBit Academy",
      category: "Education Platform",
      description:
        "A future digital learning platform planned around structured courses, learning tracks, student experiences, progress tracking, and educational content.",
      technologies: [
        "Next.js",
        "ASP.NET Core",
        "SQL Server",
        "UI/UX",
      ],
      image: null,
      code: "NA",
      featured: true,
      status: "Planned",
      github: "",
      live: "",
    },

    {
      number: "05",
      title: "UI/UX Case Study",
      category: "UI/UX Design",
      description:
        "A dedicated space for upcoming interface design work, including user flows, wireframes, design systems, prototypes, and polished product experiences.",
      technologies: [
        "UI/UX",
        "Wireframing",
        "Prototyping",
        "Responsive Design",
      ],
      image: null,
      code: "UX",
      featured: false,
      status: "Coming Soon",
      github: "",
      live: "",
    },

    {
      number: "06",
      title: "Developer Portfolio",
      category: "Personal Brand",
      status: "",
      description:
        "A custom portfolio designed and developed to present my software engineering work, technical skills, projects, and professional direction.",
      technologies: [
        "Next.js",
        "TypeScript",
        "CSS Modules",
        "Framer Motion",
      ],
      image: "/assets/projects/Portfolio-HeroShot.png",
      code: "MA",
      featured: false,
      github: "https://github.com/majdawajneh/Let-sGo/tree/main/Portfolio",
      live: "",
    },
  ];

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.container}>
        {/* HEADER */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
        >
          <div className={styles.sectionHeading}>
            <span className={styles.sectionNumber}>03</span>
            <span className={styles.label}>Projects</span>
          </div>

          <div className={styles.headerContent}>
            <h2 className={styles.title}>Selected Work</h2>

            <p className={styles.subtitle}>
              A selection of projects across software engineering,
              full-stack development, front-end experiences, and
              UI/UX design.
            </p>
          </div>
        </motion.div>

        {/* PROJECTS GRID */}
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className={`${styles.project} ${
                project.featured ? styles.featuredProject : ""
              }`}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.65,
                delay: index * 0.06,
                ease: "easeOut",
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
            >
              {/* PROJECT VISUAL */}
              <div className={styles.visual}>
        <div className={styles.visualTop}>
          
          <span
            className={`${styles.status} ${
              project.status === "Planned" ||
              project.status === "Coming Soon"
                ? styles.futureStatus
                : ""
            }`}
          >
            {project.status}
          </span>
        </div>

        {project.image ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectImageLink}
            title={`View ${project.title} on GitHub`}
          >
            <div className={styles.projectImage}>
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.image}
              />

              <div className={styles.imageOverlay}>
                <span>View Source on GitHub ↗</span>
              </div>
            </div>
          </a>
        ) : (
          <div className={styles.placeholder}>
            <span className={styles.placeholderLetters}>
              {project.title
                .split(" ")
                .map((word) => word[0])
                .join("")
                .slice(0, 2)}
            </span>

            <span className={styles.placeholderText}>
              Project Preview
            </span>
          </div>
        )}
      </div>

              {/* PROJECT INFO */}
              <div className={styles.projectInfo}>
                <span className={styles.projectNumber}>
                  {project.number}
                </span>
                <span className={styles.category}>
                  {project.category}
                </span>

                <h3 className={styles.projectTitle}>
                  {project.title}
                </h3>

                <p className={styles.projectDescription}>
                  {project.description}
                </p>

                {/* TECHNOLOGIES */}
                <div className={styles.technologies}>
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className={styles.technology}
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* LINKS */}
                <div className={styles.projectLinks}>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.primaryLink}
                    >
                      Live Project ↗
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.secondaryLink}
                    >
                      GitHub ↗
                    </a>
                  )}

                  {!project.live && !project.github && (
                    <span className={styles.linkPlaceholder}>
                      Case study coming soon
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* PROJECTS FOOTER */}
        <motion.div
          className={styles.projectsFooter}
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
        >
          <span className={styles.footerText}>
            More projects and experiments are available on GitHub.
          </span>

          <a
            href="https://github.com/majdawajneh/Let-sGo"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubButton}
          >
            Explore GitHub

            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}