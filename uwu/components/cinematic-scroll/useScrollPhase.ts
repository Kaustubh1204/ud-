"use client";

import { useTransform, MotionValue } from "framer-motion";

/**
 * Computes per-step scroll ranges from a single 0→1 scrollYProgress value.
 *
 * Scroll runway layout:
 *   - Entry phase: 100vh
 *   - Each step:   scrollDurationPerStep vh
 *   Total:         100 + (steps × scrollDurationPerStep) vh
 *
 * Returns opacity and y MotionValues for a single step.
 * Both values update on every scroll frame — zero React re-renders.
 */

interface ScrollPhaseOptions {
  scrollProgress: MotionValue<number>;
  stepIndex: number;
  totalSteps: number;
  /** vh units allocated per step. Default: 120 */
  scrollDurationPerStep?: number;
  /** vh units for the entry phase before step 0. Default: 100 */
  entryVh?: number;
  /** px: how far text rises from below on entry. Default: 60 */
  entryTranslateY?: number;
  /** px: how far text moves up on exit. Default: 40 */
  exitTranslateY?: number;
}

interface ScrollPhaseValues {
  opacity: MotionValue<number>;
  y: MotionValue<number>;
}

export function useScrollPhase({
  scrollProgress,
  stepIndex,
  totalSteps,
  scrollDurationPerStep = 120,
  entryVh = 100,
  entryTranslateY = 60,
  exitTranslateY = 40,
}: ScrollPhaseOptions): ScrollPhaseValues {
  const totalVh = entryVh + totalSteps * scrollDurationPerStep;

  // Fractional position where this step starts and ends
  const stepFraction = scrollDurationPerStep / totalVh;
  const stepStart = (entryVh + stepIndex * scrollDurationPerStep) / totalVh;
  const stepEnd = stepStart + stepFraction;

  /**
   * Animation timing breakdown (all values are scrollYProgress fractions):
   *
   *  stepStart - 0.02            → breathing gap (empty dark canvas)
   *  stepStart - 0.02 → +0.07   → text ENTERS (translateY 60→0, opacity 0→1)
   *  stepStart + 0.07 → end-0.06→ text HOLDS  (translateY 0, opacity 1)
   *  end-0.06 → end             → text EXITS  (translateY 0→-40, opacity 1→0)
   */

  const entryStart = stepStart - 0.02;
  const entryEnd = stepStart + 0.07;
  const exitStart = stepEnd - 0.06;
  const exitEnd = stepEnd;

  const opacity = useTransform(
    scrollProgress,
    [entryStart, entryEnd, exitStart, exitEnd],
    [0, 1, 1, 0]
  );

  const y = useTransform(
    scrollProgress,
    [entryStart, entryEnd, exitStart, exitEnd],
    [entryTranslateY, 0, 0, -exitTranslateY]
  );

  return { opacity, y };
}

/**
 * Returns the total scroll runway height in vh units.
 * Use this to set the outer section's height via inline style.
 */
export function getTotalScrollHeight(
  totalSteps: number,
  scrollDurationPerStep = 120,
  entryVh = 100
): string {
  return `${entryVh + totalSteps * scrollDurationPerStep}vh`;
}
