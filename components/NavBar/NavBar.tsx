"use client";
import React, { useState, useEffect } from "react";
import styles from "./NavBar.module.css";
import ThemeToggle from "../ThemeToggle";
import { usePathname } from "next/navigation";

const NavBar: React.FC = () => {
  const pathname = usePathname();
  const isContactPage = pathname === "/contact";
  
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine visibility: hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      // Determine background state
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav 
      className={`
        ${styles.nav} 
        ${!isVisible ? styles.navHidden : ""} 
        ${isScrolled ? styles.navScrolled : ""}
        anim-fade-in d-100
      `} 
      role="navigation" 
      aria-label="Main navigation"
    >
      <div className={styles.inner}>
        <div className={styles.brand}>
          Design. Development. Growth. All under one roof.
        </div>
        <ul className={styles.links} role="list">
          {!isContactPage && <li><a href="/" className={styles.link} id="nav-home">Home</a></li>}
          <li><a href="/#work"     className={styles.link} id="nav-work">Work</a></li>
          <li><a href="/#services" className={styles.link} id="nav-services">Services</a></li>
          <li>
            <a
              href={isContactPage ? "/" : "/contact"}
              className={`${styles.link} ${styles.linkContact}`}
              id={isContactPage ? "nav-home-btn" : "nav-contact"}
            >
              {isContactPage ? "Home" : "Contact"}
            </a>
          </li>
          <li className="ml-4 flex items-center">
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
