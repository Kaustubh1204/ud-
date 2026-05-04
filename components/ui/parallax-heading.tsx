"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function ParallaxHeading({ children, speed = 40 }: { children: React.ReactNode, speed?: number }) {
    const ref = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        if (!ref.current) return
        gsap.fromTo(ref.current,
            { y: speed },
            {
                y: -speed,
                ease: "none",
                scrollTrigger: {
                    trigger: ref.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                }
            }
        )
    }, { scope: ref })

    return (
        <div ref={ref} className="will-change-transform">
            {children}
        </div>
    )
}
