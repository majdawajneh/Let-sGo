"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#gallery" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
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
    {
      name: "Instagram",
      href: "YOUR_INSTAGRAM_LINK",
    },
    {
      name: "YouTube",
      href: "YOUR_YOUTUBE_LINK",
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* =========================
            MAIN FOOTER
        ========================== */}
        <motion.div
          className={styles.mainFooter}
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
            amount: 0.2,
          }}
        >

          {/* BRAND */}
          <div className={styles.brand}>
            <Link
              href="#home"
              className={styles.logo}
            >
              <span className={styles.logoMark}>
                M
              </span>

              <span className={styles.logoName}>
                Majd Al-Awajneh
              </span>
            </Link>

            <h2 className={styles.brandTitle}>
              Software Engineer
              <span> & Full-Stack Developer.</span>
            </h2>

            <p className={styles.brandDescription}>
              Building modern digital products through thoughtful
              engineering, clean interfaces, reliable back-end
              systems, and continuous learning.
            </p>

            <Link
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
            </Link>
          </div>


          {/* NAVIGATION */}
          <div className={styles.navigation}>
            <span className={styles.columnLabel}>
              Navigation
            </span>

            <nav>
              <ul className={styles.navigationList}>
                {navigationLinks.map((link, index) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={styles.navigationLink}
                    >
                      <span className={styles.linkNumber}>
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span>
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>


          {/* CONNECT */}
          <div className={styles.connect}>
            <span className={styles.columnLabel}>
              Connect
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
                  <span>
                    {social.name}
                  </span>

                  <svg
                    width="15"
                    height="15"
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
              ))}
            </div>


            <div className={styles.locationBlock}>
              <span className={styles.locationLabel}>
                Based In
              </span>

              <span className={styles.location}>
                Amman, Jordan
              </span>
            </div>          
          </div>

        </motion.div>


        {/* =========================
            LARGE SIGNATURE
        ========================== */}
        


        {/* =========================
            BOTTOM BAR
        ========================== */}
        <div className={styles.bottomBar}>
          <span className={styles.copyright}>
            © {currentYear} Majd Al-Awajneh. All rights reserved.
          </span>

          <div className={styles.bottomMeta}>
            <span>
              Designed & Developed by Majd
            </span>

            <span className={styles.metaDivider}></span>

            <Link
              href="#home"
              className={styles.backToTop}
            >
              Back to top

              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 19V5" />
                <path d="M6 11l6-6 6 6" />
              </svg>
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}