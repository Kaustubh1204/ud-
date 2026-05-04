"use client";

import { useRef } from "react";
import { useScroll, MotionConfig } from "framer-motion";
import { StepContent, BackgroundConfig } from "./cinematic-content";
import { BackgroundLayer } from "./BackgroundLayer";
import { TextBlock } from "./TextBlock";
import { ScrollProgressIndicator } from "./ScrollProgressIndicator";
import { getTotalScrollHeight } from "./useScrollPhase";

interface CinematicScrollSectionProps {
  steps: StepContent[];
  background: BackgroundConfig;
  /** vh allocated per content step. Default: 120 */
  scrollDurationPerStep?: number;
  /** Show the subtle right-side progress dots. Default: true */
  showProgressIndicator?: boolean;
}

export function CinematicScrollSection({
  steps,
  background,
  scrollDurationPerStep = 120,
  showProgressIndicator = true,
}: CinematicScrollSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  // Single scroll listener for the whole section.
  // scrollYProgress = 0 when section top hits viewport top,
  // = 1 when section bottom leaves viewport bottom.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const totalHeight = getTotalScrollHeight(
    steps.length,
    scrollDurationPerStep
  );

  return (
    // Respect prefers-reduced-motion at component root.
    // When reduced motion is preferred, translateY is neutralized;
    // opacity transitions remain for semantic clarity.
    <MotionConfig reducedMotion="user">
      {/*
        OUTER SECTION — the scroll runway.
        This is the only element in normal document flow.
        overflow: visible is mandatory; hidden/auto breaks position: sticky.
        No transform on this element — transforms break sticky children.
      */}
      <section
        ref={sectionRef}
        style={{ height: totalHeight, position: "relative" }}
        aria-label="Cinematic storytelling section"
      >
        {/*
          PINNED CANVAS — stays fixed while outer section scrolls.
          translateZ(0) promotes it to its own GPU compositing layer.
        */}
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            width: "100%",
            overflow: "hidden",
            transform: "translateZ(0)",
          }}
        >
          {/* z-index: 0 — atmospheric background */}
          <BackgroundLayer config={background} />

          {/*
            z-index: 1 — permanent dim overlay.
            Bottom-heavy gradient anchors the text reveal zone.
            Does not animate — it is structural darkness.
          */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 1,
              background:
                "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.28) 55%, rgba(0,0,0,0.62) 100%)",
            }}
          />

          {/*
            CSS grain overlay via pseudo-element equivalent.
            SVG feTurbulence noise at ~4% opacity adds tactility.
            Inline SVG avoids an external file request.
          */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 2,
              opacity: 0.04,
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
              backgroundSize: "128px 128px",
              pointerEvents: "none",
            }}
          />

          {/*
            TEXT STAGE — fixed coordinate space where all text reveals happen.
            All TextBlocks are position: absolute inside, so they overlay each other.
            Only one is ever visible at a time.
            z-index: 10 — always above all background layers.
          */}
          <div
            style={{
              position: "absolute",
              bottom: "clamp(8%, 15%, 18%)",
              left: 0,
              right: 0,
              zIndex: 10,
              padding: "0 clamp(24px, 6vw, 80px)",
              maxWidth: "840px",
              margin: "0 auto",
            }}
          >
            {/*
              Relative container to size the absolute TextBlocks.
              Height: tallest possible text block. Adjust if content is longer.
            */}
            <div style={{ position: "relative", minHeight: "180px" }}>
              {steps.map((content, i) => (
                <TextBlock
                  key={i}
                  step={i}
                  totalSteps={steps.length}
                  scrollProgress={scrollYProgress}
                  content={content}
                  scrollDurationPerStep={scrollDurationPerStep}
                />
              ))}
            </div>
          </div>

          {/* z-index: 20 — subtle 4-dot progress indicator, right edge */}
          {showProgressIndicator && (
            <ScrollProgressIndicator
              scrollProgress={scrollYProgress}
              totalSteps={steps.length}
              scrollDurationPerStep={scrollDurationPerStep}
            />
          )}
        </div>
      </section>
    </MotionConfig>
  );
}
