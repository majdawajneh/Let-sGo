"use client";

import { motion } from "framer-motion";
import styles from "./Services.module.css";

export default function Services() {
  const services = [
    {
      number: "01",
      title: "Full-Stack Development",
      description:
        "End-to-end web applications built from responsive user interfaces to secure APIs, business logic, and database architecture.",
      technologies: [
        "Next.js",
        "React",
        "ASP.NET Core",
        "SQL Server",
      ],
      featured: true,
    },

    {
      number: "02",
      title: "Front-End Development",
      description:
        "Responsive and polished interfaces focused on usability, performance, accessibility, and a consistent user experience across devices.",
      technologies: [
        "React.js",
        "Next.js",
        "TypeScript",
        "CSS3",
      ],
      featured: false,
    },

    {
      number: "03",
      title: "Back-End Development",
      description:
        "Structured server-side applications with maintainable architecture, clean business logic, and reliable data access.",
      technologies: [
        "C#",
        "ASP.NET Core",
        "Entity Framework Core",
      ],
      featured: false,
    },

    {
      number: "04",
      title: "API Development",
      description:
        "RESTful APIs designed with clear endpoints, validation, authentication, authorization, and maintainable application structure.",
      technologies: [
        "REST APIs",
        "ASP.NET Core",
        "JWT",
      ],
      featured: false,
    },

    {
      number: "05",
      title: "Database Solutions",
      description:
        "Relational database structures designed around application requirements, data integrity, efficient relationships, and maintainable schemas.",
      technologies: [
        "SQL Server",
        "SQL",
        "EF Core",
        "Database Design",
      ],
      featured: false,
    },

    {
      number: "06",
      title: "Authentication & Access Control",
      description:
        "Secure authentication and authorization flows for web applications using token-based access and protected application resources.",
      technologies: [
        "JWT Authentication",
        "Authorization",
        "ASP.NET Core",
      ],
      featured: true,
    },
  ];

  return (
    <section id="services" className={styles.services}>
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
              02
            </span>

            <span className={styles.label}>
              Services
            </span>
          </div>

          <div className={styles.headerContent}>
            <h2 className={styles.title}>
              What I Build
            </h2>

            <p className={styles.subtitle}>
              I build modern web solutions from interface to
              infrastructure — combining thoughtful front-end
              development with structured back-end architecture
              and reliable data systems.
            </p>
          </div>
        </motion.div>


        {/* SERVICES */}
        <div className={styles.grid}>
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              className={`${styles.card} ${
                service.featured ? styles.featuredCard : ""
              }`}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.07,
                ease: "easeOut",
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
            >
              <div className={styles.cardTop}>
                <span className={styles.iconNumber}>
                  {service.number}
                </span>

                <span className={styles.cardArrow}>
                  ↗
                </span>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>
                  {service.title}
                </h3>

                <p className={styles.cardDescription}>
                  {service.description}
                </p>
              </div>

              <div className={styles.cardFooter}>
                {service.technologies.map((technology) => (
                  <span
                    key={technology}
                    className={styles.technology}
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>


        {/* BOTTOM CTA */}
        <motion.div
          className={styles.bottomSection}
          initial={{
            opacity: 0,
            y: 25,
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
            amount: 0.4,
          }}
        >
          <div className={styles.bottomText}>
            <span className={styles.bottomLabel}>
              Have a project in mind?
            </span>

            <h3 className={styles.bottomTitle}>
              Let&apos;s turn your idea into something
              <span> worth building.</span>
            </h3>
          </div>

          <a
            href="#contact"
            className={styles.contactButton}
          >
            Start a Project

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