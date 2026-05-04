"use client";
import React, { useRef, useEffect } from "react";
import styles from "./HeroCenter.module.css";

const HeroCenter: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollY = window.scrollY;
      const translateY = scrollY * 0.25;
      containerRef.current.style.transform = `translateY(${translateY}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${styles.centerWrapper} anim-scale-in delay-180`} id="hero-figure-wrapper">
      <div ref={containerRef} className={styles.parallaxInner}>
        <div className={styles.smokeHaze} aria-hidden="true" />
        <div className={styles.videoMask} id="hero-figure-mask">
          <video
            ref={videoRef}
            src="/hero-figure.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className={styles.video}
            aria-label="Usualdev brand figure — mysterious humanoid silhouette"
          />
        </div>
        <div className={styles.glow} aria-hidden="true" />
      </div>
    </div>
  );
};

export default HeroCenter;
