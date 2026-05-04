"use client";
import React from "react";
import styles from "./StatsBar.module.css";

const stack = [
  "React", "Node.js", "MongoDB", "Firebase", "Figma",
  "PHP", "MySQL", "Android",
];

const StatsBar: React.FC = () => {
  return (
    <div className={styles.bar} id="hero-tech-stack">
      {/* Marquee */}
      <div className={styles.marqueeWrap} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          {stack.map((t, i) => (
            <span key={`a-${i}`} className={styles.techItem}>
              {t}
              <span className={styles.sep}>·</span>
            </span>
          ))}
          {stack.map((t, i) => (
            <span key={`b-${i}`} className={styles.techItem}>
              {t}
              <span className={styles.sep}>·</span>
            </span>
          ))}
          {stack.map((t, i) => (
            <span key={`c-${i}`} className={styles.techItem}>
              {t}
              <span className={styles.sep}>·</span>
            </span>
          ))}
          {stack.map((t, i) => (
            <span key={`d-${i}`} className={styles.techItem}>
              {t}
              <span className={styles.sep}>·</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsBar;
