"use client";

import { motion } from "framer-motion";
import styles from "./EducationCertifications.module.css";

export default function EducationCertifications() {
  const education = [
    {
      period: "2021 — 2025",
      degree: "Bachelor of Software Engineering",
      institution: "Amman Arab University",
      location: "Amman, Jordan",
      description:
        "Studied software engineering principles including programming, software design, databases, system analysis, data structures, software architecture, and full-stack application development.",
      focus: [
        "Software Engineering",
        "Web Development",
        "Database Systems",
        "System Analysis",
        "Data Structures",
        "Software Architecture",
      ],
    },
  ];

  const certifications = [
    {
      year: "2025",
      title: "Full-Stack Development",
      issuer: "Youth Grow Activity — DOT Jordan",
      type: "Technical Training",
      description:
        "Practical full-stack development training focused on modern web technologies, project-based learning, responsive interfaces, APIs, and collaborative development workflows.",
      skills: [
        "React",
        "Next.js",
        "JavaScript",
        "Git",
        "GitHub",
      ],
      credential: "",
    },

    {
      year: "2025",
      title: "Full-Stack Development Program",
      issuer: "Coders · Talal Abu-Ghazaleh · Oxford Academy",
      type: "Professional Training",
      description:
        "Full-stack development training covering practical software development concepts, front-end development, back-end fundamentals, and application development.",
      skills: [
        "Full-Stack Development",
        "Web Development",
        "Programming",
      ],
      credential: "",
    },

    {
      year: "2026",
      title: "Employment Skills Training",
      issuer: "Career Development Training",
      type: "Professional Skills",
      description:
        "Training focused on workplace readiness, professional communication, employability skills, and preparation for the recruitment process.",
      skills: [
        "Career Readiness",
        "Communication",
        "Interview Skills",
      ],
      credential: "",
    },

    {
      year: "2026",
      title: "LinkedIn & CV Career Guidance",
      issuer: "Career Guidance Session",
      type: "Career Development",
      description:
        "Professional guidance focused on building a stronger LinkedIn presence, improving CV presentation, and communicating technical experience effectively.",
      skills: [
        "LinkedIn",
        "Personal Branding",
        "CV Development",
      ],
      credential: "",
    },

    {
      year: "2026",
      title: "Life Skills Workshop",
      issuer: "Liwan — Youth Space",
      type: "Personal Development",
      description:
        "A youth-focused workshop covering practical life skills, communication, collaboration, and personal development.",
      skills: [
        "Communication",
        "Teamwork",
        "Personal Development",
      ],
      credential: "",
    },
  ];

  return (
    <section
      id="education"
      className={styles.educationCertifications}
    >
      <div className={styles.container}>

        {/* HEADER */}
        <motion.div
          className={styles.header}
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
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
              05
            </span>

            <span className={styles.label}>
              Education & Credentials
            </span>
          </div>

          <div className={styles.headerContent}>
            <h2 className={styles.title}>
              Learning Journey
            </h2>

            <p className={styles.subtitle}>
              My academic foundation in software engineering,
              supported by continuous technical training,
              professional development, and hands-on learning.
            </p>
          </div>
        </motion.div>


        {/* MAIN CONTENT */}
        <div className={styles.mainGrid}>

          {/* =========================
              EDUCATION
          ========================== */}
          <motion.div
            className={styles.educationColumn}
            initial={{
              opacity: 0,
              x: -35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
          >
            <div className={styles.columnHeader}>
              <span className={styles.columnNumber}>
                01
              </span>

              <h3 className={styles.columnTitle}>
                Education
              </h3>
            </div>

            {education.map((item) => (
              <article
                key={item.degree}
                className={styles.educationCard}
              >
                <div className={styles.educationTop}>
                  <span className={styles.period}>
                    {item.period}
                  </span>

                  <span className={styles.degreeType}>
                    Bachelor&apos;s Degree
                  </span>
                </div>

                <h4 className={styles.degree}>
                  {item.degree}
                </h4>

                <div className={styles.institutionRow}>
                  <span className={styles.institution}>
                    {item.institution}
                  </span>

                  <span className={styles.location}>
                    {item.location}
                  </span>
                </div>

                <p className={styles.educationDescription}>
                  {item.description}
                </p>

                <div className={styles.focusArea}>
                  <span className={styles.focusTitle}>
                    Academic Focus
                  </span>

                  <div className={styles.tags}>
                    {item.focus.map((subject) => (
                      <span
                        key={subject}
                        className={styles.tag}
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </motion.div>


          {/* =========================
              CERTIFICATIONS
          ========================== */}
          <motion.div
            className={styles.certificationsColumn}
            initial={{
              opacity: 0,
              x: 35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >
            <div className={styles.columnHeader}>
              <span className={styles.columnNumber}>
                02
              </span>

              <h3 className={styles.columnTitle}>
                Certifications & Training
              </h3>
            </div>

            <div className={styles.certificationList}>
              {certifications.map((certificate, index) => (
                <motion.article
                  key={`${certificate.title}-${certificate.issuer}`}
                  className={styles.certificate}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.07,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                >
                  <div className={styles.certificateTop}>
                    <div>
                      <span className={styles.certificateType}>
                        {certificate.type}
                      </span>

                      <h4 className={styles.certificateTitle}>
                        {certificate.title}
                      </h4>

                      <span className={styles.issuer}>
                        {certificate.issuer}
                      </span>
                    </div>

                    <span className={styles.year}>
                      {certificate.year}
                    </span>
                  </div>

                  <p className={styles.certificateDescription}>
                    {certificate.description}
                  </p>

                  <div className={styles.certificateBottom}>
                    <div className={styles.certificateSkills}>
                      {certificate.skills.map((skill) => (
                        <span
                          key={skill}
                          className={styles.certificateSkill}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {certificate.credential && (
                      <a
                        href={certificate.credential}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.credentialLink}
                      >
                        View Credential ↗
                      </a>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>

        </div>


        {/* BOTTOM STRIP */}
        <motion.div
          className={styles.bottomStrip}
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
          <div className={styles.bottomItem}>
            <span className={styles.bottomLabel}>
              Degree
            </span>

            <span className={styles.bottomValue}>
              Software Engineering
            </span>
          </div>

          <span className={styles.bottomDivider}></span>

          <div className={styles.bottomItem}>
            <span className={styles.bottomLabel}>
              University
            </span>

            <span className={styles.bottomValue}>
              Amman Arab University
            </span>
          </div>

          <span className={styles.bottomDivider}></span>

          <div className={styles.bottomItem}>
            <span className={styles.bottomLabel}>
              Learning Focus
            </span>

            <span className={styles.bottomValue}>
              Full-Stack Development
            </span>
          </div>

          <span className={styles.bottomDivider}></span>

          <div className={styles.bottomItem}>
            <span className={styles.bottomLabel}>
              Mindset
            </span>

            <span className={styles.bottomValue}>
              Continuous Learning
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}