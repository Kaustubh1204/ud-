"use client";

import { motion, MotionValue } from "framer-motion";
import { StepContent } from "./cinematic-content";
import { useScrollPhase } from "./useScrollPhase";

interface TextBlockProps {
  step: number;
  totalSteps: number;
  scrollProgress: MotionValue<number>;
  content: StepContent;
  scrollDurationPerStep?: number;
}

export function TextBlock({
  step,
  totalSteps,
  scrollProgress,
  content,
  scrollDurationPerStep = 120,
}: TextBlockProps) {
  const { opacity, y } = useScrollPhase({
    scrollProgress,
    stepIndex: step,
    totalSteps,
    scrollDurationPerStep,
  });

  return (
    <motion.div
      style={{
        opacity,
        y,
        position: "absolute",
        inset: 0,
        willChange: "transform, opacity",
      }}
      aria-hidden={step !== 0}
    >
      {content.eyebrow && (
        <p className="cinematic-eyebrow">{content.eyebrow}</p>
      )}
      <h2 className="cinematic-statement">{content.statement}</h2>
      {content.subtext && (
        <p className="cinematic-subtext">{content.subtext}</p>
      )}
    </motion.div>
  );
}
