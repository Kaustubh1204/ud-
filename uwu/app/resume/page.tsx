'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Link from 'next/link';

export default function ResumePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.reveal-text', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power4.out',
      });

      gsap.from('.resume-section', {
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.5,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#0e0e0e] text-[#fbf7f4] p-8 md:p-20 font-sans">
      <nav className="flex justify-between items-center mb-20">
        <Link href="/" className="text-xl font-bold tracking-tighter hover:opacity-70 transition-opacity">( BACK )</Link>
        <div className="text-sm uppercase tracking-widest opacity-50">Resume / CV</div>
      </nav>

      <header className="mb-32">
        <h1 className="text-7xl md:text-9xl font-black tracking-tighter overflow-hidden">
          <span className="block reveal-text">FULL STACK</span>
          <span className="block reveal-text text-[#6c9a8b]">DEVELOPER</span>
        </h1>
        <p className="mt-8 text-xl md:text-2xl max-w-2xl opacity-80 reveal-text">
          Crafting digital experiences through elegant code and modern aesthetics. 
          Specializing in React, Next.js, and high-end animations.
        </p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <section className="resume-section">
          <h2 className="text-sm uppercase tracking-[0.3em] mb-10 text-[#6c9a8b]">Experience</h2>
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold">Senior Creative Developer</h3>
              <p className="opacity-50 mb-4">Studio X / 2022 — Present</p>
              <p className="max-w-md opacity-80">Led the development of interactive web platforms for global brands, focusing on performance and GSAP-driven storytelling.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Front-end Engineer</h3>
              <p className="opacity-50 mb-4">Tech Nova / 2020 — 2022</p>
              <p className="max-w-md opacity-80">Architected scalable React applications and implemented complex UI systems with focus on user experience.</p>
            </div>
          </div>
        </section>

        <section className="resume-section">
          <h2 className="text-sm uppercase tracking-[0.3em] mb-10 text-[#6c9a8b]">Skills</h2>
          <div className="grid grid-cols-2 gap-4">
            {['React / Next.js', 'GSAP Animation', 'TypeScript', 'Node.js', 'Three.js', 'Tailwind CSS', 'UI/UX Design', 'PostgreSQL'].map((skill) => (
              <div key={skill} className="p-4 border border-white/10 rounded-full text-center hover:bg-white/5 transition-colors">
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section className="resume-section col-span-1 md:col-span-2">
          <h2 className="text-sm uppercase tracking-[0.3em] mb-10 text-[#6c9a8b]">Contact</h2>
          <div className="flex flex-wrap gap-10 text-3xl md:text-5xl font-bold">
            <a href="mailto:hello@example.com" className="hover:text-[#6c9a8b] transition-colors underline decoration-1 underline-offset-8">hello@example.com</a>
            <a href="#" className="hover:text-[#6c9a8b] transition-colors underline decoration-1 underline-offset-8">LinkedIn</a>
            <a href="#" className="hover:text-[#6c9a8b] transition-colors underline decoration-1 underline-offset-8">GitHub</a>
          </div>
        </section>
      </main>

      <footer className="mt-40 pt-10 border-t border-white/10 flex justify-between items-center opacity-30 text-sm">
        <p>© 2025 DIGITAL FOLIO</p>
        <p>BUILT WITH NEXT.JS + GSAP</p>
      </footer>
    </div>
  );
}
