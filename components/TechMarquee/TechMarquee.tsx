'use client';

import React from 'react';
import styles from './TechMarquee.module.css';

const techs = [
  'Node.js', 'MongoDB', 'Firebase', 'Figma', 'PHP', 'MySQL', 'Android', 'React',
  'Node.js', 'MongoDB', 'Firebase', 'Figma', 'PHP', 'MySQL'
];

export default function TechMarquee() {
  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeTrack}>
        {/* Render twice for seamless loop */}
        {[...techs, ...techs].map((tech, i) => (
          <div key={i} className={styles.marqueeItem}>
            <span className={styles.dot}>•</span>
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
}
