"use client";

import { motion } from "framer-motion";
import styles from "./Experience.module.css";

export default function Experience() {
  const experiences = [
    {
      period: "2026",
      role: "IT & Technical Support",
      company: "Government Institution",
      type: "Professional Experience",
      description:
        "Supported day-to-day IT operations, device preparation, software deployment, system configuration, and technical troubleshooting within an organizational environment.",
      responsibilities: [
        "Prepared and configured laptops and desktop computers.",
        "Installed and maintained Windows systems and required software.",
        "Worked with Windows Server and domain-based environments.",
        "Supported domain joining and Remote Desktop configurations.",
        "Assisted with employee data organization and digital archiving.",
        "Provided technical troubleshooting and end-user support.",
      ],
      technologies: [
        "Windows",
        "Windows Server",
        "Active Directory",
        "Remote Desktop",
        "Technical Support",
      ],
    },

    {
      period: "2026",
      role: "Full-Stack Developer",
      company: "Task Management System",
      type: "Project-Based Experience",
      description:
        "Designed and developed a full-stack task management platform with a structured back-end architecture, database integration, authentication, and role-based functionality.",
      responsibilities: [
        "Developed back-end services using ASP.NET Core and C#.",
        "Implemented Entity Framework Core for database access.",
        "Designed relational data models using SQL Server.",
        "Implemented JWT-based authentication and authorization.",
        "Built and tested RESTful API endpoints.",
        "Structured the application using layered architecture principles.",
      ],
      technologies: [
        "C#",
        "ASP.NET Core",
        "Entity Framework Core",
        "SQL Server",
        "JWT",
        "REST APIs",
      ],
    },

    {
      period: "2025",
      role: "Full-Stack Development Trainee",
      company: "Youth Grow Activity — DOT Jordan",
      type: "Technical Training",
      description:
        "Completed practical full-stack development training focused on modern web development workflows, front-end technologies, back-end development, and collaborative project work.",
      responsibilities: [
        "Worked on practical web development assignments and projects.",
        "Built responsive user interfaces using modern front-end tools.",
        "Practiced component-based development and reusable UI structure.",
        "Worked with APIs and full-stack application workflows.",
        "Used Git and GitHub for version control and project management.",
      ],
      technologies: [
        "React",
        "Next.js",
        "JavaScript",
        "Git",
        "GitHub",
      ],
    },
  ];

  return (
    <section id="experience" className={styles.experience}>
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
            <span className={styles.sectionNumber}>
              04
            </span>

            <span className={styles.label}>
              Experience
            </span>
          </div>

          <div className={styles.headerContent}>
            <h2 className={styles.title}>
              Professional Journey
            </h2>

            <p className={styles.subtitle}>
              A combination of hands-on IT support, full-stack
              development, technical training, and real-world
              software engineering projects.
            </p>
          </div>
        </motion.div>


        {/* TIMELINE */}
        <div className={styles.timeline}>
          {experiences.map((experience, index) => (
            <motion.article
              key={`${experience.role}-${experience.period}`}
              className={styles.timelineItem}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
            >

              {/* YEAR */}
              <div className={styles.periodColumn}>
                <span className={styles.period}>
                  {experience.period}
                </span>

                <span className={styles.timelineDot}></span>
              </div>


              {/* EXPERIENCE CONTENT */}
              <div className={styles.experienceContent}>

                <div className={styles.experienceTop}>
                  <div>
                    <span className={styles.experienceType}>
                      {experience.type}
                    </span>

                    <h3 className={styles.role}>
                      {experience.role}
                    </h3>

                    <span className={styles.company}>
                      {experience.company}
                    </span>
                  </div>

                  <span className={styles.index}>
                    0{index + 1}
                  </span>
                </div>


                <p className={styles.description}>
                  {experience.description}
                </p>


                {/* RESPONSIBILITIES */}
                <div className={styles.details}>
                  <h4 className={styles.detailsTitle}>
                    Key Responsibilities
                  </h4>

                  <ul className={styles.responsibilities}>
                    {experience.responsibilities.map(
                      (responsibility) => (
                        <li
                          key={responsibility}
                          className={styles.responsibility}
                        >
                          <span className={styles.bullet}></span>

                          <span>
                            {responsibility}
                          </span>
                        </li>
                      )
                    )}
                  </ul>
                </div>


                {/* TECHNOLOGIES */}
                <div className={styles.technologies}>
                  {experience.technologies.map(
                    (technology) => (
                      <span
                        key={technology}
                        className={styles.technology}
                      >
                        {technology}
                      </span>
                    )
                  )}
                </div>

              </div>
            </motion.article>
          ))}
        </div>


        {/* BOTTOM */}
        <motion.div
          className={styles.bottom}
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
          <span className={styles.bottomText}>
            Always learning. Always building.
          </span>

          <a
            href="#contact"
            className={styles.contactLink}
          >
            Let&apos;s Work Together

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
              <path d="M5 12h14" />
              <path d="M13 6l6 6-6 6" />
            </svg>
          </a>
        </motion.div>

      </div>
    </section>
  );
}