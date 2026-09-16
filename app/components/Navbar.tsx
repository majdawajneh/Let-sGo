"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Education", href: "#education", id: "education" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = [
        "home",
        "about",
        "services",
        "projects",
        "experience",
        "education",
        "contact",
      ];

      let currentSection = "home";

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);

        if (section) {
          const sectionTop = section.offsetTop - 150;

          if (window.scrollY >= sectionTop) {
            currentSection = sectionId;
          }
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMenu = () => {
    setMobileOpen(false);
  };

  return (
    <nav
      className={`${styles.navbar} ${
        scrolled ? styles.scrolled : ""
      }`}
    >
      <div className={styles.container}>
        {/* LOGO */}
        <Link
          href="#home"
          className={styles.logo}
          onClick={closeMenu}
          aria-label="Majd Al-Awajneh - Home"
        >        
          <span className={styles.logoText}>
            <span className={styles.logoDot}>.</span>
            Majd            
          </span>
        </Link>

        {/* NAVIGATION */}
        <div
          id="navigation-menu"
          className={`${styles.navLinks} ${
            mobileOpen ? styles.open : ""
          }`}
        >
          {/* MOBILE MENU HEADER */}
          <div className={styles.mobileMenuHeader}>
            <span className={styles.mobileMenuLabel}>
              Navigation
            </span>

            <span className={styles.mobileMenuNumber}>
              01 — 07
            </span>
          </div>

          {/* LINKS */}
          <div className={styles.linksWrapper}>
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className={`${styles.navLink} ${
                  activeSection === link.id
                    ? styles.active
                    : ""
                }`}
                onClick={closeMenu}
              >
                <span className={styles.navNumber}>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className={styles.navText}>
                  {link.name}
                </span>
              </Link>
            ))}
          </div>

          {/* CONTACT CTA */}
          <Link
            href="#contact"
            className={`${styles.ctaBtn} ${
              activeSection === "contact"
                ? styles.ctaActive
                : ""
            }`}
            onClick={closeMenu}
          >
            Let&apos;s Talk

            <svg
              width="16"
              height="16"
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

          {/* MOBILE MENU FOOTER */}
          <div className={styles.mobileMenuFooter}>
            <span>Software Engineer</span>
            <span>Amman, Jordan</span>
          </div>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          type="button"
          className={`${styles.mobileToggle} ${
            mobileOpen ? styles.toggleOpen : ""
          }`}
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={
            mobileOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={mobileOpen}
          aria-controls="navigation-menu"
        >
          <span className={styles.toggleLine}></span>
          <span className={styles.toggleLine}></span>
        </button>
      </div>
    </nav>
  );
}