import LandingReveal from "@/components/landing-reveal/LandingReveal";
import Hero from "@/components/Hero";
import Outro from "@/components/Outro";
import { CinematicScrollSection } from "@/components/cinematic-scroll";
import { defaultCinematicSteps } from "@/components/cinematic-scroll/cinematic-content";
import "@/components/cinematic-scroll/cinematic-scroll.css";

export default function Home() {
  const gradientBg = {
    type: "gradient" as const,
    value: "linear-gradient(160deg, #080808 0%, #0f1014 50%, #090a0c 100%)",
  };

  return (
    <main>
      <LandingReveal />
    </main>
  );
}
