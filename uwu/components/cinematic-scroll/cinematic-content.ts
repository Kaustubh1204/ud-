export interface StepContent {
  eyebrow?: string;
  statement: string;
  subtext?: string;
}

export interface BackgroundConfig {
  type: "image" | "video" | "gradient";
  src?: string;
  alt?: string;
  poster?: string;
  value?: string;
}

export const defaultCinematicSteps: StepContent[] = [
  {
    eyebrow: "Chapter 01",
    statement: "We build what others can only describe.",
    subtext: "From brief to finished product in weeks, not quarters.",
  },
  {
    eyebrow: "Chapter 02",
    statement: "Every detail is a decision.",
    subtext: "No placeholder thinking. No lorem ipsum reasoning.",
  },
  {
    eyebrow: "Chapter 03",
    statement: "The product is the argument.",
    subtext: "Show the work. Let it speak.",
  },
  {
    eyebrow: "Chapter 04",
    statement: "This is where good enough stops.",
  },
];
