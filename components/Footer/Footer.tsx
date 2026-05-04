'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[var(--bg)] text-[var(--text)] py-20 px-6 font-sans border-t border-[var(--border-sub)]/30 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-black uppercase tracking-tighter">Usualdev</h2>
            <p className="opacity-60 text-sm leading-relaxed max-w-xs">
              Empowering businesses with innovative solutions. Let's create something amazing together.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/abhiishektyagii/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[var(--text)]/5 flex items-center justify-center hover:bg-[var(--text)]/10 transition-colors border border-[var(--border-sub)]/20"
              >
                {/* Custom LinkedIn SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Sitemap Section */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest opacity-30 mb-6">Sitemap</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/contact" className="hover:opacity-100 opacity-70 transition-opacity">Contact us</Link></li>
              <li><Link href="/about" className="hover:opacity-100 opacity-70 transition-opacity">About us</Link></li>
              <li><Link href="/work" className="hover:opacity-100 opacity-70 transition-opacity">Work</Link></li>
              <li><Link href="/services" className="hover:opacity-100 opacity-70 transition-opacity">Services</Link></li>
              <li><Link href="/pricing" className="hover:opacity-100 opacity-70 transition-opacity">Pricing</Link></li>
            </ul>
          </div>

          {/* Other Pages */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest opacity-30 mb-6">Legal</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/terms" className="hover:opacity-100 opacity-70 transition-opacity">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="hover:opacity-100 opacity-70 transition-opacity">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest opacity-30 mb-6">Get in Touch</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 opacity-60">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Delhi, India - 110092</span>
              </li>
              <li className="flex items-center gap-3 opacity-60">
                <Mail size={16} className="flex-shrink-0" />
                <a href="mailto:hello@usualdev.online" className="hover:opacity-100 transition-opacity">
                  hello@usualdev.online
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-[var(--border-sub)]/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium opacity-20 uppercase tracking-widest">
          <p>©2025 Usualdev. All Rights Reserved</p>
          <div className="flex gap-8">
            <span>Built with precision</span>
            <span>Est. 2024</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
