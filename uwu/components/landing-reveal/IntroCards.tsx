'use client';

import React from 'react';

const introCardImages = [
  '/card-1.jpg',
  '/card-2.jpg',
  '/card-3.jpg',
  '/card-4.jpg',
  '/card-5.jpg',
  '/card-6.jpg',
];

interface IntroCardsProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export default function IntroCards({ containerRef }: IntroCardsProps) {
  return (
    <div ref={containerRef} className="lr-intro-cards">
      {introCardImages.map((src, i) => (
        <div key={i} className="lr-card">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={`Intro Card ${i + 1}`} />
        </div>
      ))}
    </div>
  );
}
