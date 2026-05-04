"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Card.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const cardData = [
  {
    id: "card-1",
    subtitle: "High-performance websites built for speed, scalability, and conversions.",
    title: "Web Design & Development",
    image: "/img/16667f28d4e92542038dcfc4b5d1d8c7.jpg",
  },
  {
    id: "card-2",
    subtitle: "Custom mobile apps focused on performance, usability, and business growth.",
    title: "Android App Development",
    image: "/img/1d0edd97a74db9d452633bae0ac8119a.jpg",
  },
  {
    id: "card-3",
    subtitle: "Clean, user-focused interfaces designed for clarity and engagement.",
    title: "UI/UX & Figma Design",
    image: "/img/5bb11bcdf791118af7456a45373fdcc3.jpg",
  },
  {
    id: "card-4",
    subtitle: "Smart systems that automate processes and turn data into insights.",
    title: "AI & Machine Learning",
    image: "/img/8079b63abeb541f72ccd9648a7b20833.jpg",
  },
  {
    id: "card-5",
    subtitle: "Tailored digital solutions to streamline and scale your operations.",
    title: "Custom Software & Solutions",
    image: "/img/8605c9db0ed95d59f952df42e3785a7d.jpg",
  },
];

export default function Card() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
    if (!containerRef.current || cards.length === 0) return;

    const totalCards = cards.length;
    const segmentSize = 1 / totalCards;
    const cardYOffset = 5;
    const cardScaleStep = 0.075;

    const ctx = gsap.context(() => {
      // Initial State: Stack all cards
      cards.forEach((card, i) => {
        gsap.set(card, {
          xPercent: -50,
          yPercent: -50 + i * cardYOffset,
          scale: 1 - i * cardScaleStep,
        });
      });

      // Main Scroll Animation Logic
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: () => `+=${window.innerHeight * 1.2}px`, 
        pin: true,
        pinSpacing: false,
        scrub: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const progress = self.progress;

          const activeIndex = Math.min(
            Math.floor(progress / segmentSize),
            totalCards - 1
          );

          const segProgress =
            (progress - activeIndex * segmentSize) / segmentSize;

          // Core peeling 'Anti-gravity' effect
          cards.forEach((card, i) => {
            if (i < activeIndex) {
              gsap.set(card, {
                yPercent: -250,
                rotationX: 35,
              });
            } else if (i === activeIndex) {
              gsap.set(card, {
                yPercent: gsap.utils.interpolate(-50, -200, segProgress),
                rotationX: gsap.utils.interpolate(0, 35, segProgress),
                scale: 1,
              });
            } else {
              const behindIndex = i - activeIndex;
              const currentYOffset =
                (behindIndex - segProgress) * cardYOffset;
              const currentScale =
                1 - (behindIndex - segProgress) * cardScaleStep;

              gsap.set(card, {
                yPercent: -50 + currentYOffset,
                rotationX: 0,
                scale: currentScale,
              });
            }
          });
        },
      });
    }, containerRef);

    return () => {
      ctx.revert(); 
    };
  }, []);

  return (
    <div className={styles.main}>
      <section ref={containerRef} className={styles.stickySection}>
        {cardData.map((card, index) => (
          <div
            key={card.id}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
            className={styles.card}
            style={{ zIndex: cardData.length - index }}
          >
            {/* Column 1: Text content */}
            <div className={styles.cardTextCol}>
              <p className={styles.subtitle}>{card.subtitle}</p>
              <h1 className={styles.cardTitle}>{card.title}</h1>
            </div>
            
            {/* Column 2: Specific Image Focus */}
            <div className={styles.cardImgCol}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={card.image}
                alt={card.title}
                className={styles.cardImg}
              />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
