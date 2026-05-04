"use client";
import React from "react";
import styles from "./HeroSection.module.css";
import NavBar from "../NavBar/NavBar";
import TechMarquee from "../TechMarquee/TechMarquee";

const HeroSection: React.FC = () => {
  return (
    <section className={styles.section} id="hero" aria-label="Hero section">
      <NavBar />



      {/* CANVAS: video + content layered */}
      <div className={styles.canvas}>

        {/* Background video — centered, dominant, blending seamlessly into background */}
        <div className={styles.videoLayer} id="hero-video-layer" aria-hidden="true">
          <div className={styles.videoFrame}>
            <video
              src="/Mysterious_figure_standing_still_202605041655.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className={styles.video}
            />
          </div>
        </div>

        {/* Content overlay */}
        <div className={styles.contentLayer}>
          
          {/* LEFT: Brand */}
          <div className={`${styles.leftSide} anim-slide-up d-250`}>
            <h1 className={styles.brandGiant}>Usualdev</h1>
          </div>

          {/* RIGHT: Headline & CTA */}
          <div className={`${styles.rightSide} anim-slide-up d-420`}>
            <h2 className={styles.headline}>
              <span className={styles.hLine}>Scalable</span>
              <span className={`${styles.hLine} ${styles.hLineLight}`}>digital products</span>
              <span className={styles.hLine}>for bold</span>
              <span className={`${styles.hLine} ${styles.hLineLight}`}>brands.</span>
            </h2>
            
            <div className={styles.ctas}>
              <a href="#work" className={styles.ctaPrimary}>View Work</a>
              <a href="/contact" className={styles.ctaGhost}>Start a Project →</a>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full z-10">
        <TechMarquee />
      </div>
    </section>
  );
};

export default HeroSection;
