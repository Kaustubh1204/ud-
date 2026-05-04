"use client";

import React, { useState } from "react";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";

export default function ContactPage() {
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
    <main className="bg-[var(--bg)] min-h-screen text-[var(--text)] transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6">
        <NavBar />
      </div>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Header & Info */}
          <div className="lg:w-1/3">
            <h1 className="text-7xl md:text-8xl font-playfair tracking-tight leading-[0.85] mb-8">
              Contact <br /> 
              <span className="italic opacity-90">Us</span>
            </h1>
            <p className="text-[var(--text-muted)] text-lg max-w-sm leading-relaxed mb-12">
              Have a project in mind? Let's build something exceptional together. Reach out and we'll get back to you within 24 hours.
            </p>
            
            <div className="space-y-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] mb-1">Email</p>
                <p className="text-lg font-medium">hello@usualdev.online</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] mb-1">Location</p>
                <p className="text-lg font-medium">Delhi, India</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:w-2/3">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">
                  Name <span className="text-primary">*</span>
                </label>
                <input
                  required
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="bg-transparent border-b border-[var(--border-sub)] py-3 focus:border-[var(--text)] outline-none transition-colors text-lg"
                />
                <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-tight">How should we address you?</p>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">
                  Email <span className="text-primary">*</span>
                </label>
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="hello@example.com"
                  className="bg-transparent border-b border-[var(--border-sub)] py-3 focus:border-[var(--text)] outline-none transition-colors text-lg"
                />
                <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-tight">We'll never share your email.</p>
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 00000 00000"
                  className="bg-transparent border-b border-[var(--border-sub)] py-3 focus:border-[var(--text)] outline-none transition-colors text-lg"
                />
              </div>

              {/* Address */}
              <div className="flex flex-col gap-2">
                <label htmlFor="address" className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="City, Country"
                  className="bg-transparent border-b border-[var(--border-sub)] py-3 focus:border-[var(--text)] outline-none transition-colors text-lg"
                />
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-2 md:col-span-2">
                <label htmlFor="subject" className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this about?"
                  className="bg-transparent border-b border-[var(--border-sub)] py-3 focus:border-[var(--text)] outline-none transition-colors text-lg"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2 md:col-span-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">
                  Message <span className="text-primary">*</span>
                </label>
                <textarea
                  required
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  className="bg-transparent border-b border-[var(--border-sub)] py-3 focus:border-[var(--text)] outline-none transition-colors text-lg resize-none"
                />
                <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-tight">Minimum 10 characters required.</p>
              </div>

              {/* Submit */}
              <div className="md:col-span-2 pt-4">
                <button
                  disabled={status === "submitting" || status === "success"}
                  type="submit"
                  className="bg-[var(--text)] text-[var(--bg)] px-10 py-4 uppercase text-xs font-bold tracking-widest hover:bg-opacity-90 active:scale-95 transition-all disabled:opacity-50"
                >
                  {status === "idle" && "Submit"}
                  {status === "submitting" && "Submitting..."}
                  {status === "success" && "Message Sent!"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
