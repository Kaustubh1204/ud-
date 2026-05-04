'use client'

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const services = [
  {
    id: 1,
    title: "High-Performance Business Website",
    subtitle: "Web Design & Development",
    description: "Fast, scalable websites built for conversions and performance.",
    videoUrl: '/video/FLAWD(MP4).mp4',
    reverse: false
  },
  {
    id: 2,
    title: "Custom Android Business Application",
    subtitle: "Android App Development",
    description: "Tailored mobile apps designed to streamline operations and user experience.",
    videoUrl: '/video/stuz0r(MP4).mp4',
    reverse: true
  },
  {
    id: 3,
    title: "AI & Machine Learning Analytics System",
    subtitle: "Python, AI & Machine Learning",
    description: "Intelligent systems that turn data into actionable insights.",
    videoUrl: '/video/Chasing Dreams in a Paperstorm(MP4).mp4',
    reverse: false
  },
  {
    id: 4,
    title: "Custom CRM & ERP Solution",
    subtitle: "Custom Software & Enterprise Solutions",
    description: "Powerful internal tools to manage, automate, and scale your business.",
    videoUrl: '/video/Echoesofjoonas(MP4).mp4',
    reverse: true
  }
]

export const Component = () => {
  return (
    <div className="bg-background">
      <div className="flex flex-col overflow-hidden">
        {services.map((service) => (
          <ServiceSection key={service.id} service={service} />
        ))}
      </div>
    </div>
  )
}

const ServiceSection = ({ service }: { service: any }) => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !textRef.current || !videoRef.current) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    })

    // Text Reveal
    tl.fromTo(textRef.current, 
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    )
    .to(textRef.current, 
      { opacity: 0, y: -100, duration: 1, ease: "power2.in" }, 
      "+=0.5"
    )

    // Video Frame Reveal (Clip Path Animation)
    const initialClip = service.reverse ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)"
    
    tl.fromTo(videoRef.current,
      { 
        opacity: 0, 
        scale: 0.8, 
        clipPath: initialClip 
      },
      { 
        opacity: 1, 
        scale: 1, 
        clipPath: "inset(0 0% 0 0)", 
        duration: 1.5, 
        ease: "power3.inOut" 
      },
      0
    )
    .to(videoRef.current,
      { 
        opacity: 0, 
        scale: 1.2, 
        clipPath: initialClip, 
        duration: 1.5, 
        ease: "power3.inOut" 
      },
      "+=0.5"
    )

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [service.reverse])

  return (
    <div
      ref={sectionRef}
      className={cn(
        "h-screen flex flex-col md:flex-row items-center justify-center md:gap-32 gap-10 px-6 max-w-7xl mx-auto w-full relative",
        service.reverse ? 'md:flex-row-reverse' : ''
      )}
    >
      {/* Text Content */}
      <div ref={textRef} className="flex flex-col z-10 w-full md:w-1/2">
        <span className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground mb-4">
          {service.subtitle}
        </span>
        <h2 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-foreground">
          {service.title}
        </h2>
        <p className="text-muted-foreground text-lg mt-6 max-w-md leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* Video Content */}
      <div
        ref={videoRef}
        className="relative w-full md:w-[360px] aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl grayscale"
      >
        <video
          src={service.videoUrl}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      </div>
    </div>
  )
}
