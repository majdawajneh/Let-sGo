"use client";

import { motion } from "framer-motion";
import styles from "./Contact.module.css";

export default function Contact() {
  const contactDetails = [
    {
      label: "Email",
      value: "hello@majd.dev",
      href: "mailto:hello@majd.dev",
    },
    {
      label: "Phone",
      value: "+962 7X XXX XXXX",
      href: "tel:+9627XXXXXXXX",
    },
    {
      label: "Location",
      value: "Amman, Jordan",
      href: "",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "YOUR_GITHUB_LINK",
    },
    {
      name: "LinkedIn",
      href: "YOUR_LINKEDIN_LINK",
    },
  ];

  return (
    <section id="contact" className={styles.contact}>
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
            <span className={styles.sectionNumber}>06</span>
            <span className={styles.label}>Contact</span>
          </div>

          <div className={styles.headerContent}>
            <h2 className={styles.title}>
              Let&apos;s Build Something
              <span className={styles.titleAccent}> Meaningful.</span>
            </h2>

            <p className={styles.subtitle}>
              Have a project, opportunity, or idea in mind?
              I&apos;m always open to discussing software development,
              collaboration, and new opportunities.
            </p>
          </div>
        </motion.div>


        {/* MAIN CONTENT */}
        <div className={styles.content}>

          {/* LEFT SIDE */}
          <motion.div
            className={styles.contactInfo}
            initial={{ opacity: 0, x: -35 }}
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
            <span className={styles.infoEyebrow}>
              Get In Touch
            </span>

            <h3 className={styles.infoTitle}>
              Have something in mind?
            </h3>

            <p className={styles.infoDescription}>
              Whether it&apos;s a development project, collaboration,
              technical opportunity, or simply a conversation about
              building something useful, feel free to reach out.
            </p>


            {/* CONTACT DETAILS */}
            <div className={styles.details}>
              {contactDetails.map((detail, index) => (
                <div
                  key={detail.label}
                  className={styles.detailItem}
                >
                  <span className={styles.detailNumber}>
                    0{index + 1}
                  </span>

                  <div className={styles.detailContent}>
                    <span className={styles.detailLabel}>
                      {detail.label}
                    </span>

                    {detail.href ? (
                      <a
                        href={detail.href}
                        className={styles.detailValue}
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <span className={styles.detailValue}>
                        {detail.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>


            {/* SOCIAL LINKS */}
            <div className={styles.socialSection}>
              <span className={styles.socialLabel}>
                Find Me Online
              </span>

              <div className={styles.socialLinks}>
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    {social.name}
                    <span>↗</span>
                  </a>
                ))}
              </div>
            </div>


            {/* AVAILABILITY */}
            <div className={styles.availability}>
              <span className={styles.availabilityDot}></span>

              <div>
                <span className={styles.availabilityTitle}>
                  Open to Opportunities
                </span>

                <span className={styles.availabilityText}>
                  Full-Stack Development · Software Engineering
                </span>
              </div>
            </div>
          </motion.div>


          {/* FORM */}
          <motion.div
            className={styles.formWrapper}
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
            <div className={styles.formHeader}>
              <span className={styles.formLabel}>
                Send a Message
              </span>

              <span className={styles.formNumber}>
                01 / 01
              </span>
            </div>

            <form
              className={styles.form}
              action="#"
            >
              <div className={styles.formRow}>
                <div className={styles.field}>
                  <label
                    htmlFor="name"
                    className={styles.fieldLabel}
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className={styles.input}
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label
                    htmlFor="email"
                    className={styles.fieldLabel}
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className={styles.input}
                    required
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label
                  htmlFor="subject"
                  className={styles.fieldLabel}
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What would you like to discuss?"
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.field}>
                <label
                  htmlFor="message"
                  className={styles.fieldLabel}
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell me a little about your idea or opportunity..."
                  className={styles.textarea}
                  required
                />
              </div>

              <div className={styles.formBottom}>
                <span className={styles.formNote}>
                  I&apos;ll get back to you as soon as possible.
                </span>

                <button
                  type="submit"
                  className={styles.submitBtn}
                >
                  Send Message

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
                </button>
              </div>
            </form>
          </motion.div>

        </div>

        {/* BOTTOM */}
        <motion.div
          className={styles.bottomStrip}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
        >
          <span className={styles.bottomText}>
            Based in Amman, Jordan
          </span>

          <span className={styles.bottomLine}></span>

          <span className={styles.bottomText}>
            Available for remote opportunities
          </span>
        </motion.div>
        
      </div>
    </section>
  );
}