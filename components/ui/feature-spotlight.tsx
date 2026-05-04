"use client"

import { useEffect, useRef } from "react"
import { ArrowUpRight } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const slides = [
  {
    tag: "Facts & numbers",
    title: "89%",
    subtitle: "Clients recommend our services.",
    author: null,
    image: "/img/9681b7be3a2852c9b36efca5633f6b38.jpg"
  },
  {
    tag: "Customer stories",
    title: "Usualdev’s",
    subtitle: "expertise transformed my vision into success!",
    author: "Vansh Kushwaha — Founder of Vkshotz",
    image: "/img/d1b8c489f009b045c6c7aed8d6c53510.jpg"
  },
  {
    tag: "Customer stories",
    title: "Creative",
    subtitle: "Their creativity and attention to detail transformed our brand completely!",
    author: null,
    image: "/img/d26f95bf357fef198856c5dcb053b30e.jpg"
  },
  {
    tag: "Customer stories",
    title: "Visionary",
    subtitle: "Usualdev brought our ideas to life with powerful design, smart development, and reliable digital solutions.",
    author: "Manasvi Rajendra — Founder of SheenEdge",
    image: "/img/e04c66e25042667b34c76034636666e6.jpg"
  }
]

export function FeaturedSpotlight() {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRefs = useRef<(HTMLImageElement | null)[]>([])
  const slideRefs = useRef<(HTMLDivElement | null)[]>([])
  const indexRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=3000",
          scrub: 0.5,
          pin: true,
          anticipatePin: 1,
        }
      })

      // Initial state
      gsap.set(imageRefs.current.slice(1), { opacity: 0, scale: 1.1 })
      gsap.set(slideRefs.current.slice(1), { opacity: 0, y: 20, display: "none" })

      slides.forEach((_, i) => {
        if (i === 0) return
        const prevIdx = i - 1
        
        // Transition to next slide
        tl.to(imageRefs.current[prevIdx], { opacity: 0, duration: 1 }, i)
        tl.to(imageRefs.current[i], { opacity: 1, scale: 1, duration: 1 }, i)
        
        tl.to(slideRefs.current[prevIdx], { opacity: 0, y: -20, duration: 0.5 }, i)
        tl.set(slideRefs.current[prevIdx], { display: "none" }, i + 0.5)
        
        tl.set(slideRefs.current[i], { display: "flex" }, i + 0.5)
        tl.to(slideRefs.current[i], { opacity: 1, y: 0, duration: 0.5 }, i + 0.5)

        // Update index number
        tl.to(indexRef.current, {
          textContent: `0${i + 1}`,
          snap: { textContent: 1 },
          duration: 0.1
        }, i)
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden translate-z-0">
      <div className="flex min-h-screen w-full items-center justify-center bg-background px-4 py-24 md:px-8">
        <div className="group relative flex w-full max-w-6xl flex-col items-center justify-center gap-8 md:flex-row md:items-center md:gap-12 lg:gap-16">
          
          {/* Left: Text Block Container */}
          <div className="relative z-10 flex w-full max-w-[320px] shrink-0 flex-col items-center text-center md:w-[240px] md:items-start md:text-left lg:w-[280px] lg:pt-4">
            
            {slides.map((slide, i) => (
              <div
                key={i}
                ref={(el) => { slideRefs.current[i] = el }}
                className="flex flex-col items-center md:items-start will-change-transform"
                style={{ display: i === 0 ? "flex" : "none" }}
              >
                {/* Label with line */}
                <div className="mb-6 flex items-center gap-3 md:mb-8 md:gap-4">
                  <div className="h-px w-8 bg-foreground transition-transform duration-500 origin-left group-hover:scale-x-150 will-change-transform" />
                  <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-foreground md:text-xs">
                    {slide.tag}
                  </span>
                </div>

                {/* Title/Quote */}
                <h2 className="relative">
                  <span 
                    className="block text-4xl font-light italic text-foreground sm:text-5xl md:text-5xl lg:text-6xl transition-transform duration-500 group-hover:-translate-y-1 will-change-transform"
                    style={{ fontFamily: "'Instrument Serif', serif", letterSpacing: "-0.04em" }}
                  >
                    {slide.title}
                  </span>
                  <span className="mt-2 block text-sm font-light text-muted-foreground/80 md:text-base lg:text-lg">
                    {slide.subtitle}
                  </span>
                </h2>

                {/* Author */}
                {slide.author && (
                  <p className="mt-6 text-xs italic text-muted-foreground/60 transition-all duration-500 group-hover:text-muted-foreground group-hover:-translate-y-1 md:mt-8 md:text-sm will-change-transform">
                    {slide.author}
                  </p>
                )}
              </div>
            ))}

            {/* Minimal CTA */}
            <div className="mt-10 flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-muted-foreground/30 text-foreground transition-all duration-500 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background group-hover:scale-110 md:h-11 md:w-11 lg:h-12 lg:w-12 will-change-transform">
                <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
              </div>
              <span className="text-[10px] font-medium uppercase tracking-widest text-foreground/50 transition-opacity duration-500 group-hover:opacity-100 md:text-xs">
                Explore
              </span>
            </div>
          </div>

          {/* Right: Image Block */}
          <div className="relative transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 will-change-transform">
            {/* Frame outline */}
            <div className="absolute -inset-3 border border-transparent transition-colors duration-500 group-hover:border-foreground/10 md:-inset-4" />

            {/* Image container */}
            <div className="relative h-[280px] w-[260px] overflow-hidden sm:h-[320px] sm:w-[300px] md:h-[360px] md:w-[320px] lg:h-[420px] lg:w-[380px] rounded-3xl will-change-transform">
              {slides.map((slide, i) => (
                <img
                  key={i}
                  ref={(el) => { imageRefs.current[i] = el }}
                  src={slide.image}
                  alt={slide.tag}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 will-change-transform"
                  style={{ opacity: i === 0 ? 1 : 0 }}
                />
              ))}

              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Corner accents */}
              <div className="absolute left-3 top-3 h-6 w-px bg-white/80" />
              <div className="absolute left-3 top-3 h-px w-6 bg-white/80" />
              <div className="absolute bottom-3 right-3 h-6 w-px bg-white/80" />
              <div className="absolute bottom-3 right-3 h-px w-6 bg-white/80" />
            </div>

            {/* Index number */}
            <span
              ref={indexRef}
              className="absolute -bottom-8 right-0 font-mono text-xs text-muted-foreground opacity-40 transition-opacity duration-500 group-hover:opacity-100 md:text-sm"
            >
              01
            </span>
          </div>

        </div>
      </div>
    </div>
  )
}
