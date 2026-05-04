'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/CustomEase';
import OutroCards from './OutroCards';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, CustomEase);
}

export default function LandingReveal() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const outroCardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    CustomEase.create('hop', '0.75, 0, 0.2, 1');

    const outroCards = outroCardsRef.current
      ? Array.from(outroCardsRef.current.querySelectorAll<HTMLElement>('.lr-card'))
      : [];

    if (!sectionRef.current || outroCards.length === 0) return;

    const getOutroPositions = () => {
      const isMobile = window.innerWidth < 640;
      const viewportWidth = window.innerWidth;
      const cardWidth = isMobile ? 280 : (viewportWidth < 1024 ? 320 : 380);
      
      if (isMobile) {
        // Vertical stack for phone - Starter at bottom, Pro at top
        return {
          x: [0, 0],
          y: [230, -230]
        };
      }

      const spread = viewportWidth < 1024 ? Math.max(cardWidth + 20, viewportWidth * 0.4) : Math.max(cardWidth + 100, viewportWidth * 0.35);
      return {
        x: [-spread / 2, spread / 2],
        y: viewportWidth < 1024 ? -20 : -60
      };
    };

    const outroPositions = getOutroPositions();

    // Initial State
    gsap.set(outroCards, {
      xPercent: -50,
      yPercent: -50,
      x: 0,
      y: 0,
      scale: 0,
      rotationY: 0,
      opacity: 1,
      transformStyle: "preserve-3d",
      force3D: true,
    });

    // Main Scroll-driven Timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=2000",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      }
    });

    // Card Animation: Fan out and Reveal
    tl.to(outroCards, {
      x: (i) => outroPositions.x[i],
      y: (i) => typeof outroPositions.y === 'number' ? outroPositions.y : outroPositions.y[i],
      scale: 1,
      duration: 2,
      ease: 'hop',
      stagger: 0.1,
    })
    .to(outroCards, {
      rotationY: 180,
      duration: 1.5,
      stagger: 0.2,
      ease: 'hop',
    }, "-=1");

    const updateCardPositions = () => {
      const pos = getOutroPositions();
      outroCards.forEach((card, i) => {
        gsap.set(card, { 
          x: pos.x[i],
          y: typeof pos.y === 'number' ? pos.y : pos.y[i],
          xPercent: -50,
          yPercent: -50
        });
      });
    };

    window.addEventListener('resize', updateCardPositions);

    return () => {
      window.removeEventListener('resize', updateCardPositions);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="lr-section">
      <div className="lr-container">
        {/* Only animated front/back flip cards are kept */}
        <OutroCards containerRef={outroCardsRef} />
      </div>
    </section>
  );
}
