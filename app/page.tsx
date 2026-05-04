import HeroSection from "@/components/HeroSection/HeroSection";
import TechMarquee from "@/components/TechMarquee/TechMarquee";
import Card from "@/components/Card/Card";
import { Component as ParallaxScrollSection } from "@/components/ui/parallax-scroll-feature-section";
import { FeaturedSpotlight } from "@/components/ui/feature-spotlight";
import LandingReveal from "@/components/landing-reveal/LandingReveal";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer/Footer";
import TextBlockAnimation from "@/components/ui/text-block-animation";
import ParallaxHeading from "@/components/ui/parallax-heading";
import "@/components/landing-reveal/LandingReveal.css";



export default function Home() {
  return (
    <main className="relative">
      <div className="mx-auto max-w-7xl px-6">
        <HeroSection />
      </div>

      <section id="services" className="py-24 px-6 flex flex-col items-center text-center">
        <ParallaxHeading speed={35}>
          <p className="text-sm uppercase tracking-widest text-[var(--text)] font-medium mb-6">
            What we do
          </p>
          <TextBlockAnimation duration={1.5} stagger={0.1}>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-[var(--text)] leading-[0.95] max-w-5xl mx-auto">
              Crafting exceptional, insight-driven and technology-powered strategies to create measurable impact
            </h2>
          </TextBlockAnimation>
          <div className="flex justify-center gap-10 mt-10">
            {["Creativity", "Innovation", "Strategy"].map((tag) => (
              <span key={tag} className="text-sm uppercase tracking-widest text-[var(--text)]">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex justify-center gap-16 mt-10">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-[var(--text)]">+55</span>
              <span className="text-sm text-[var(--text)] mt-2 uppercase tracking-widest">Total Projects Completed</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-[var(--text)]">+4</span>
              <span className="text-sm text-[var(--text)] mt-2 uppercase tracking-widest">Years of Experience</span>
            </div>
          </div>
          <p className="text-sm uppercase tracking-widest text-[var(--text)] mt-10">
            Where innovation meets aesthetics
          </p>
        </ParallaxHeading>
      </section>

      <div className="mx-auto max-w-7xl px-6">
        <ParallaxScrollSection />
      </div>

      <section className="py-24 px-6 flex flex-col items-center text-center">
        <ParallaxHeading speed={30}>
          <p className="text-sm uppercase tracking-widest text-[var(--text)] font-medium mb-6">
            Case Study
          </p>
          <TextBlockAnimation duration={1.2} stagger={0.09}>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-[var(--text)] leading-[0.95] max-w-4xl mx-auto">
              How we transformed a small business's online presence
            </h2>
          </TextBlockAnimation>
        </ParallaxHeading>
      </section>

      <div className="mx-auto max-w-7xl px-6">
        <Card />
      </div>

      <section className="py-24 px-6 flex flex-col items-center text-center">
        <ParallaxHeading speed={30}>
          <p className="text-sm uppercase tracking-widest text-[var(--text)] font-medium mb-6">
            Testimonials
          </p>
          <TextBlockAnimation duration={1.2} stagger={0.08}>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-[var(--text)] leading-[0.95] max-w-4xl mx-auto">
              What our satisfied customers are saying about us
            </h2>
          </TextBlockAnimation>
        </ParallaxHeading>
      </section>

      <div id="work">
        <FeaturedSpotlight />
      </div>

      <section className="py-24 px-6 flex flex-col items-center text-center">
        <ParallaxHeading speed={30}>
          <p className="text-sm uppercase tracking-widest text-[var(--text)] font-medium mb-6">
            Pricing
          </p>
          <TextBlockAnimation duration={1.2} stagger={0.08}>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-[var(--text)] leading-[0.95] max-w-3xl mx-auto">
              Pick the plan that fits your start-up
            </h2>
          </TextBlockAnimation>
        </ParallaxHeading>
      </section>

      <LandingReveal />

      <section className="py-24 px-6 flex flex-col items-center text-center">
        <ParallaxHeading speed={25}>
          <p className="text-sm uppercase tracking-widest text-[var(--text)] font-medium mb-6">
            FAQ
          </p>
          <TextBlockAnimation duration={1.2} stagger={0.08}>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-[var(--text)] leading-[0.95] max-w-2xl mx-auto">
              Got questions? We've got answers
            </h2>
          </TextBlockAnimation>
          <p className="text-base text-[var(--text)] mt-6 max-w-sm mx-auto leading-relaxed">
            Can't find what you're looking for? Reach out — we'll get back to you.
          </p>
        </ParallaxHeading>
      </section>

      <FAQSection />
      <Footer />
    </main>
  );
}
