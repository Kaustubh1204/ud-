"use client";
import React from "react";
import styles from "./HeroRight.module.css";

const services = [
  "Web Design & UI/UX",
  "Full-Stack Development",
  "Mobile Applications",
  "Growth & Digital Strategy",
];

const HeroRight: React.FC = () => {
  return (
    <div className={`${styles.right} anim-fade-in delay-480`} id="hero-right">
      {/* Descriptor */}
      <p className={`font-dm ${styles.descriptor}`} id="hero-descriptor">
        Design. Development. Growth.
        <br />
        All under one roof — built to
        <br />
        scale with your ambition.
      </p>

      {/* Service Tags */}
      <ul className={styles.serviceTags} role="list" id="hero-services">
        {services.map((service) => (
          <li key={service} className={`font-mono ${styles.serviceTag}`}>
            <span className={styles.tagLine} aria-hidden="true">—</span>
            {service}
          </li>
        ))}
      </ul>

      {/* Social Proof */}
      <div className={styles.socialProof} id="hero-social-proof">
        <span className={`font-playfair ${styles.proofNumber}`}>40+</span>
        <span className={`font-mono ${styles.proofLabel}`}>Clients trust us globally</span>
      </div>
    </div>
  );
};

export default HeroRight;
