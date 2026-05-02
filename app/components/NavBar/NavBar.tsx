"use client";
import React from "react";
import styles from "./NavBar.module.css";

const NavBar: React.FC = () => {
  return (
    <nav className={`${styles.nav} anim-fade-in d-100`} role="navigation" aria-label="Main navigation">
      <div className={styles.inner}>
        <div className={styles.brand}>
          Design. Development. Growth. All under one roof.
        </div>
        <ul className={styles.links} role="list">
          <li><a href="#work"     className={styles.link} id="nav-work">Work</a></li>
          <li><a href="#services" className={styles.link} id="nav-services">Services</a></li>
          <li>
            <a
              href="https://usualdev.online/contact"
              className={`${styles.link} ${styles.linkContact}`}
              id="nav-contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
