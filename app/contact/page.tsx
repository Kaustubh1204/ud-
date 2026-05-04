"use client";

import React, { useState, useRef } from "react";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import TechMarquee from "@/components/TechMarquee/TechMarquee";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".contact-animate", {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power4.out",
      delay: 0.2
    });
  }, { scope: containerRef });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    
    // Simulate API call
    console.log("Form Data Submitted:", formData);
    
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        subject: "",
        message: "",
      });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <main ref={containerRef} className="bg-[var(--bg)] min-h-screen text-[var(--text)] transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6">
        <NavBar />
      </div>

      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Header & Info */}
          <div className="lg:col-span-5 contact-animate">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--text-muted)] mb-4 block">Get in touch</span>
            <h1 className="text-6xl md:text-8xl font-playfair tracking-tight leading-[0.8] mb-8">
              Let's <br /> 
              <span className="italic opacity-90">Connect.</span>
            </h1>
            <p className="text-[var(--text-muted)] text-base md:text-lg max-w-md leading-relaxed mb-12">
              Have a project in mind or just want to say hi? We're always open to discussing new ideas and creative collaborations.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 pt-8 border-t border-[var(--border-sub)]/30">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] mb-2">Email</p>
                <p className="text-lg font-medium hover:underline cursor-pointer">hello@usualdev.online</p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] mb-2">Office</p>
                <p className="text-lg font-medium">New Delhi, India</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 contact-animate">
            <div className="bg-[var(--text)]/5 p-8 md:p-12 rounded-3xl border border-[var(--border-sub)]/20 shadow-sm">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                {/* Name */}
                <div className="flex flex-col gap-3">
                  <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">
                    Full Name
                  </label>
                  <input
                    required
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="bg-transparent border-b border-[var(--border-sub)]/50 py-2 focus:border-[var(--text)] outline-none transition-all text-base placeholder:opacity-30"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-3">
                  <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="bg-transparent border-b border-[var(--border-sub)]/50 py-2 focus:border-[var(--text)] outline-none transition-all text-base placeholder:opacity-30"
                  />
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-3 md:col-span-2">
                  <label htmlFor="subject" className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">
                    Project Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Web Development"
                    className="bg-transparent border-b border-[var(--border-sub)]/50 py-2 focus:border-[var(--text)] outline-none transition-all text-base placeholder:opacity-30"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-3 md:col-span-2">
                  <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">
                    Your Message
                  </label>
                  <textarea
                    required
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className="bg-transparent border-b border-[var(--border-sub)]/50 py-2 focus:border-[var(--text)] outline-none transition-all text-base resize-none placeholder:opacity-30"
                  />
                </div>

                {/* Submit */}
                <div className="md:col-span-2 pt-4">
                  <button
                    disabled={status === "submitting" || status === "success"}
                    type="submit"
                    className="w-full md:w-auto bg-[var(--text)] text-[var(--bg)] px-12 py-5 rounded-full uppercase text-[10px] font-bold tracking-widest hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 shadow-lg"
                  >
                    {status === "idle" && "Send Message"}
                    {status === "submitting" && "Sending..."}
                    {status === "success" && "Message Sent!"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <TechMarquee />

      <Footer />
    </main>
  );
}
