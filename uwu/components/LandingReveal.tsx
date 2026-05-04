'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import Link from 'next/link';

gsap.registerPlugin(CustomEase);

const introCardImages = [
  '/card-1.jpg',
  '/card-2.jpg',
  '/card-3.jpg',
  '/card-4.jpg',
  '/card-5.jpg',
  '/card-6.jpg',
  '/card-1.jpg', // Repeating to fill 8 slots
  '/card-2.jpg',
];

const outroCardData = [
  { top: 'OR', bottom: '13' },
  { top: 'LV', bottom: '88' },
  { top: 'ZN', bottom: '21' },
  { top: 'TH', bottom: '47' },
  { top: 'VX', bottom: '77' },
];

export default function LandingReveal() {
  const introCardsRef = useRef<HTMLDivElement>(null);
  const outroCardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    CustomEase.create('hop', '0.75, 0, 0.2, 1');

    const introCards = introCardsRef.current
      ? Array.from(introCardsRef.current.querySelectorAll<HTMLElement>('.lr-card'))
      : [];
    const outroCards = outroCardsRef.current
      ? Array.from(outroCardsRef.current.querySelectorAll<HTMLElement>('.lr-card'))
      : [];

    const introCardsCount = introCards.length;

    const getRadius = () => (window.innerWidth < 1000 ? 150 : 225);

    // 1. Set intro cards in circular positions
    const setIntroPositions = () => {
      const radius = getRadius();
      introCards.forEach((card, i) => {
        const angle = (i / introCardsCount) * Math.PI * 2 - Math.PI / 2;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        gsap.set(card, { x, y, scale: 0 });
      });
    };

    setIntroPositions();

    // Helper to calculate outro card x positions
    const getOutroPositions = () => {
      const viewportWidth = window.innerWidth;
      const cardWidth = outroCards[0]?.getBoundingClientRect().width ?? 100;
      const padding = viewportWidth < 1000 ? 16 : 32;

      const maxLeftPos = -(viewportWidth / 2) + padding + cardWidth / 2;
      const maxRightPos = viewportWidth / 2 - padding - cardWidth / 2;

      return [0, maxLeftPos, maxLeftPos / 2, maxRightPos / 2, maxRightPos];
    };

    // 2. Main animation timeline
    const tl = gsap.timeline();

    tl.to(outroCards, {
      x: (index) => getOutroPositions()[index],
      scale: 1,
      rotation: 0,
      duration: 1.5,
      ease: 'hop',
    }, '<')

      .to(outroCards, {
        y: window.innerWidth < 1000 ? 0 : -125,
        duration: 1.5,
        ease: 'hop',
      }, '-=0.25')

      .to(outroCards[0], {
        rotationY: 180,
        duration: 1.5,
        ease: 'hop',
      }, '<')

      .to('.lr-nav', {
        y: 0,
        duration: 1,
        ease: 'hop',
      }, '--=1');

    // 3. Hero footer animation
    const heroFooterTl = gsap.timeline({ delay: 0.5 });

    heroFooterTl
      .to('.lr-footer-logo-img', {
        y: '0%',
        duration: 1,
        ease: 'hop',
      })
      .to('.lr-footer-logo', {
        scale: 1,
        duration: 1.25,
        ease: 'hop',
      }, '+=2.25');

    // 4. Responsive resize handler
    const updateCardPositions = () => {
      const positions = getOutroPositions();
      outroCards.forEach((card, index) => {
        gsap.set(card, { x: positions[index] });
      });
    };

    window.addEventListener('resize', updateCardPositions);

    return () => {
      window.removeEventListener('resize', updateCardPositions);
      tl.kill();
      heroFooterTl.kill();
    };
  }, []);

  return (
    <section className="lr-section">
      {/* Nav */}
      <nav className="lr-nav">
        <div className="lr-logo"><p>( N )</p></div>
        <div className="lr-site-info"><p>Digital Folio 25</p></div>
        <div className="lr-menu">
          <Link href="/resume" className="hover:opacity-70 transition-opacity">
            <p>Resume</p>
          </Link>
        </div>
      </nav>

      <div className="lr-container">
        {/* Intro Cards */}
        <div ref={introCardsRef} className="lr-intro-cards">
          {introCardImages.map((src, i) => (
            <div key={i} className="lr-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt={`card-${i + 1}`} />
            </div>
          ))}
        </div>

        {/* Outro Cards */}
        <div ref={outroCardsRef} className="lr-outro-cards">
          {outroCardData.map((data, i) => (
            <div key={i} className="lr-card">
              <div className="lr-card-front">
                <p>{data.top}</p>
                <p>{data.bottom}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Hero Footer */}
        <div className="lr-hero-footer">
          <div className="lr-footer-logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="lr-footer-logo-img" src="/logo.svg" alt="Logo" />
          </div>
        </div>
      </div>
    </section>
  );
}
