"use client";
import React from "react";
import styles from "./HeroLeft.module.css";

const HeroLeft: React.FC = () => {
  return (
    <div className={styles.left}>
      {/* Eyebrow */}
      <p className={`font-mono ${styles.eyebrow} anim-fade-in`} id="hero-eyebrow">
        Digital Studio — India
      </p>

      {/* Headline */}
      <h1 className={`font-playfair ${styles.headline}`} id="hero-headline">
        <span className={`${styles.line} anim-fade-up delay-80`}>Scalable</span>
        <span className={`${styles.line} ${styles.lineItalic} anim-fade-up delay-200`}>digital</span>
        <span className={`${styles.line} anim-fade-up delay-320`}>products</span>
        <span className={`${styles.line} ${styles.lineItalic} anim-fade-up delay-440`}>for bold brands.</span>
      </h1>

      {/* CTA Group */}
      <div className={`${styles.ctaGroup} anim-fade-up delay-720`} id="hero-cta">
        <a
          href="https://usualdev.online/contact"
          className={`font-mono ${styles.ctaPrimary}`}
          id="cta-get-started"
        >
          → Get Started
        </a>
        <a
          href="https://usualdev.online/#work"
          className={`font-mono ${styles.ctaGhost}`}
          id="cta-portfolio"
        >
          View Portfolio
        </a>
      </div>

      {/* Scroll hint */}
      <p className={`font-mono ${styles.scrollHint} anim-fade-in delay-900`} id="hero-scroll-hint">
        Scroll to explore ——
      </p>
    </div>
  );
};

export default HeroLeft;
