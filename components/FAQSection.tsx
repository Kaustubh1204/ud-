"use client";

import React, { useState, useCallback } from 'react';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: "What services does Usualdev offer?",
    answer: "Usualdev provides end-to-end digital services including UI/UX design, website and web application development, mobile app development, branding, and custom digital solutions. We help businesses turn ideas into scalable and impactful digital products."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines depend on the scope and complexity of the work. Smaller projects may take a few weeks, while larger or more complex projects can take several months. A clear timeline is shared before the project begins."
  },
  {
    question: "How is pricing structured at Usualdev?",
    answer: "Our pricing is flexible and transparent, based on project requirements, features, and timelines. We provide custom quotes to ensure clients receive solutions that fit their needs and budget."
  },
  {
    question: "Do you offer ongoing support after project completion?",
    answer: "Yes, Usualdev offers ongoing support after project completion. This includes post-launch support, maintenance, updates, and technical assistance to ensure the product continues to perform smoothly."
  },
  {
    question: "How often will I receive updates on my project?",
    answer: "Clients receive regular updates throughout the project lifecycle. Updates are typically shared weekly or at key milestones through email, calls, or scheduled meetings to keep communication clear and transparent."
  }
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = useCallback((index: number) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  }, []);

  return (
    <section className="py-24 bg-[var(--bg)]">
      <div className="max-w-[var(--max-w)] mx-auto px-[var(--pad-h)]">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-[13px] font-medium uppercase tracking-[0.12em] text-[var(--text-muted)]">
            Support
          </span>
          <h2 
            className="text-[32px] md:text-[42px] font-light italic text-[var(--text)] mt-3"
            style={{ fontFamily: "'Instrument Serif', serif", letterSpacing: "-0.03em" }}
          >
            Frequently asked questions
          </h2>
          <p className="text-[16px] text-[var(--text-sec)] mt-2">
            Everything you need to know about working with Usualdev.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            const label = (index + 1).toString().padStart(2, '0');

            return (
              <button
                key={index}
                onClick={() => toggleFAQ(index)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
                className={cn(
                  "group relative flex flex-col items-start p-6 text-left transition-all duration-200 border-[0.5px] rounded-xl cursor-pointer outline-none focus-visible:ring-1 focus-visible:ring-[hsl(var(--primary))]",
                  isOpen 
                    ? "bg-[hsl(var(--secondary))] border-[hsl(var(--primary))]" 
                    : "bg-transparent border-[var(--border-sub)] hover:border-[var(--text-sec)] hover:bg-[hsl(var(--secondary)/0.3)]"
                )}
              >
                {/* Card Header (Numeric Label + Icon) */}
                <div className="w-full flex justify-between items-start mb-6">
                  <span className="text-[13px] font-medium text-[var(--text-muted)] group-hover:text-[var(--text-sec)] transition-colors">
                    {label}
                  </span>
                  <div className={cn(
                    "w-5 h-5 rounded-full border-[0.5px] border-[var(--border-sub)] flex items-center justify-center transition-all duration-300",
                    isOpen ? "rotate-45 border-[hsl(var(--primary))]" : "rotate-0 group-hover:border-[var(--text-sec)]"
                  )}>
                    <Plus className={cn(
                      "w-3 h-3 transition-colors",
                      isOpen ? "text-[hsl(var(--primary))]" : "text-[var(--text)]"
                    )} />
                  </div>
                </div>

                {/* Question */}
                <h3 className="text-[14px] md:text-[15px] font-medium text-[var(--text)] leading-tight">
                  {faq.question}
                </h3>

                {/* Answer Wrapper */}
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className={cn(
                    "w-full overflow-hidden transition-all duration-[350ms] ease-in-out",
                    isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <div className="pt-5">
                    <hr className="border-t-[0.5px] border-[var(--border-sub)] mb-4" />
                    <p className="text-[15px] md:text-[16px] leading-[1.65] text-[var(--text-sec)]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Footer Row */}
        <div className="mt-16 pt-8 border-t-[0.5px] border-[var(--border-sub)] flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-[15px] text-[var(--text-sec)]">
            Still have questions? We're here to help.
          </p>
          <button className="px-6 py-2.5 text-[13px] font-medium border-[0.5px] border-[var(--border-sub)] rounded-full hover:bg-[hsl(var(--secondary))] hover:border-[var(--text-sec)] transition-all active:scale-[0.98]">
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
}
