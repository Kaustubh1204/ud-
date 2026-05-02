import HeroSection from "./components/HeroSection/HeroSection";
import SmoothScroll from "./components/SmoothScroll/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <main>
        <HeroSection />
        {/* Placeholder for next sections to demonstrate smooth scrolling */}
        <div style={{ height: "100vh", backgroundColor: "var(--bg)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <p style={{ opacity: 0.5, fontFamily: "'Inter', sans-serif" }}>Scroll down to see smooth transition.</p>
        </div>
      </main>
    </SmoothScroll>
  );
}
