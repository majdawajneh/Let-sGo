"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./About.module.css";

export default function About() {
  const skills = [
    "C#",
    "JavaScript",
    "TypeScript",
    "SQL",

    "React.js",
    "Next.js",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Responsive Design",

    "ASP.NET Core",
    "Entity Framework Core",
    "RESTful APIs",

    "SQL Server",

    "JWT Authentication",

    "Object-Oriented Programming (OOP)",
    "Data Structures",
    "Relational Database Design",
    "Layered Architecture",

    "Git",
    "GitHub",
    "Visual Studio",
    "Visual Studio Code",
    "Vercel",

    "UI/UX Design",
  ];

  const profileDetails = [
    {
      label: "Based In",
      value: "Amman, Jordan",
    },
    {
      label: "Focus",
      value: "Full-Stack Development",
    },
    {
      label: "Core Stack",
      value: "ASP.NET Core · Next.js",
    },
    {
      label: "Status",
      value: "Open to Opportunities",
    },
  ];

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>

        <div className={styles.grid}>

          {/* IMAGE */}
          <motion.div
            className={styles.imageSection}
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
          >
            <div className={styles.imageWrapper}>
              <Image
                src="/assets/profile/me2.jpeg"
                alt="Majd Al-Awajneh"
                fill
                priority={false}
                sizes="(max-width: 1024px) 90vw, 42vw"
                className={styles.profileImage}
              />
            </div>

            <div className={styles.imageCaption}>
              <span className={styles.imageCaptionLine}></span>

              <div>
                <span className={styles.imageCaptionTitle}>
                  Software Engineer
                </span>

                <span className={styles.imageCaptionLocation}>
                  Amman, Jordan
                </span>
              </div>
            </div>
          </motion.div>


          {/* CONTENT */}
          <motion.div
            className={styles.content}
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
          >
            <div className={styles.sectionHeading}>
              <span className={styles.sectionNumber}>01</span>
              <span className={styles.label}>About Me</span>
            </div>

            <h2 className={styles.title}>
              Software Engineer
              <span className={styles.titleAccent}>
                {" "}& Full-Stack Developer
              </span>
            </h2>

            <div className={styles.descriptionGroup}>
              <p className={styles.description}>
                I&apos;m a Software Engineering graduate based in Amman,
                focused on building modern full-stack web applications using
                ASP.NET Core, C#, React, Next.js, and SQL Server.
              </p>

              <p className={styles.description}>
                I enjoy turning ideas into reliable and maintainable software,
                from designing responsive interfaces to building RESTful APIs,
                authentication systems, database-driven applications, and
                structured back-end architectures.
              </p>
            </div>


            {/* TECH STACK */}
            <div className={styles.skills}>
              <div className={styles.skillsHeader}>
                <h3 className={styles.skillsTitle}>
                  Tech Stack
                </h3>

                <span className={styles.skillsCount}>
                  {skills.length} technologies
                </span>
              </div>

              <div className={styles.skillTags}>
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className={styles.skillTag}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>


            {/* ACTIONS */}
            <div className={styles.actions}>
              <a
                href="#contact"
                className={styles.primaryAction}
              >
                Get In Touch

                <svg
                  width="17"
                  height="17"
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

              <a
                href="#gallery"
                className={styles.secondaryAction}
              >
                View Projects
              </a>
            </div>
          </motion.div>

        </div>


        {/* PROFESSIONAL INFO */}
        <motion.div
          className={styles.profileStrip}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.15,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
        >
          {profileDetails.map((detail, index) => (
            <div
              key={detail.label}
              className={styles.profileItem}
            >
              <div>
                <span className={styles.profileLabel}>
                  {detail.label}
                </span>

                <span className={styles.profileValue}>
                  {detail.value}
                </span>
              </div>

              {index !== profileDetails.length - 1 && (
                <span className={styles.profileDivider}></span>
              )}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}