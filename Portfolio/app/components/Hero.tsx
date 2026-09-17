"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.background}>
        <div className={styles.gradientOrb1}></div>
        <div className={styles.gradientOrb2}></div>
        <div className={styles.gridPattern}></div>
      </div>

      <div className={styles.content}>
        {/* <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2}}
          className={styles.badge}
        >
          <span className={styles.badgeDot}></span>
          Available for Projects
        </motion.div> */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={styles.textContent}
        >
          <p className={styles.greeting}>Hello, I&apos;m</p>
          <h1 className={styles.name}>Majd Al-Awajneh</h1>
          <div className={styles.typingWrapper}>
            <span className={styles.typedText}>Software Engineer</span>            
            <span className={styles.typedDot}>|</span>
            <span className={styles.typedText}>Full-Stack Developer</span>
          </div>
          
          <p className={styles.description}>
            I build full-stack web applications using
            ASP.NET Core, Next.js, React and SQL Server.
          </p>
          
          <div className={styles.ctaGroup}>
            <Link href="#projects" className={styles.primaryBtn}>
              View Projects
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>

            <a
              href="https://github.com/majdawajneh/Let-sGo.git"
              title="My GitHub Repo"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryBtn}
            >
              GitHub ↗
            </a>
            <a
              href="/assets/cv/My cv.pdf"
              download = "My cv.pdf"
              title="Majd Cv"
              rel="noopener noreferrer"
              className={styles.secondaryBtn}
            >
              Download CV ↗
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className={styles.stats}
        >
          <div className={styles.statItem}>
            <span className={styles.statNumber}>2+</span>
            <span className={styles.statLabel}>Years Exp.</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>5+</span>
            <span className={styles.statLabel}>Projects</span>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>2+</span>
            <span className={styles.statLabel}>Clients</span>
          </div>
        </motion.div>
      </div>

      <div className={styles.scrollIndicator}>
        <span>Scroll</span>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
      </div>
    </section>
  );
}

