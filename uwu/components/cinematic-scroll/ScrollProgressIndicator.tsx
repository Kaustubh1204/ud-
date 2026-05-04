"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface ScrollProgressIndicatorProps {
  scrollProgress: MotionValue<number>;
  totalSteps: number;
  scrollDurationPerStep?: number;
  entryVh?: number;
}

export function ScrollProgressIndicator({
  scrollProgress,
  totalSteps,
  scrollDurationPerStep = 120,
  entryVh = 100,
}: ScrollProgressIndicatorProps) {
  const totalVh = entryVh + totalSteps * scrollDurationPerStep;

  // Fade the indicator in after entry phase, out at the very end
  const indicatorOpacity = useTransform(
    scrollProgress,
    [entryVh / totalVh - 0.05, entryVh / totalVh + 0.05, 0.92, 1.0],
    [0, 1, 1, 0]
  );

  return (
    <motion.div
      style={{
        position: "absolute",
        right: "clamp(24px, 4vw, 48px)",
        top: "50%",
        transform: "translateY(-50%)",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        zIndex: 20,
        opacity: indicatorOpacity,
      }}
      aria-hidden="true"
    >
      {Array.from({ length: totalSteps }).map((_, i) => (
        <StepDot
          key={i}
          index={i}
          totalSteps={totalSteps}
          scrollProgress={scrollProgress}
          scrollDurationPerStep={scrollDurationPerStep}
          entryVh={entryVh}
          totalVh={totalVh}
        />
      ))}
    </motion.div>
  );
}

function StepDot({
  index,
  totalSteps,
  scrollProgress,
  scrollDurationPerStep,
  entryVh,
  totalVh,
}: {
  index: number;
  totalSteps: number;
  scrollProgress: MotionValue<number>;
  scrollDurationPerStep: number;
  entryVh: number;
  totalVh: number;
}) {
  const stepStart = (entryVh + index * scrollDurationPerStep) / totalVh;
  const stepEnd = (entryVh + (index + 1) * scrollDurationPerStep) / totalVh;

  // Active dot becomes slightly larger and fully white
  const dotOpacity = useTransform(
    scrollProgress,
    [stepStart - 0.02, stepStart + 0.06, stepEnd - 0.06, stepEnd],
    [0.25, 1, 1, 0.25]
  );

  const dotScale = useTransform(
    scrollProgress,
    [stepStart - 0.02, stepStart + 0.06, stepEnd - 0.06, stepEnd],
    [1, 1.4, 1.4, 1]
  );

  return (
    <motion.div
      style={{
        width: "4px",
        height: "4px",
        borderRadius: "50%",
        backgroundColor: "rgba(255,255,255,1)",
        opacity: dotOpacity,
        scale: dotScale,
        willChange: "transform, opacity",
      }}
    />
  );
}
