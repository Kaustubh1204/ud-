"use client"

import gsap from "gsap"
import { SplitText } from "gsap/SplitText"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"

gsap.registerPlugin(SplitText, ScrollTrigger)

interface TextBlockAnimationProps {
    children: React.ReactNode;
    animateOnScroll?: boolean;
    delay?: number;
    stagger?: number;
    duration?: number;
}

export default function TextBlockAnimation({
    children,
    animateOnScroll = true,
    delay = 0,
    stagger = 0.05,
    duration = 1.2
}: TextBlockAnimationProps) {
    const containerRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        if (!containerRef.current) return
        
        // @ts-ignore
        const split = new SplitText(containerRef.current, {
            type: "lines,chars",
            linesClass: "line-wrapper"
        })
        
        const lines = split.lines
        
        lines.forEach((line: HTMLElement) => {
            gsap.set(line, { overflow: "hidden" })
            const content = line.innerHTML
            line.innerHTML = `<div class="line-inner" style="display: block;">${content}</div>`
        })

        const inners = containerRef.current.querySelectorAll(".line-inner")
        
        gsap.from(inners, {
            yPercent: 100,
            opacity: 0,
            duration: duration,
            stagger: stagger,
            ease: "power4.out",
            delay: delay,
            scrollTrigger: animateOnScroll ? {
                trigger: containerRef.current,
                start: "top 95%",
                toggleActions: "play none none reverse",
            } : null
        })
    }, {
        scope: containerRef,
        dependencies: [animateOnScroll, delay, stagger, duration]
    })

    return (
        <div ref={containerRef} className="relative">
            {children}
        </div>
    )
}
