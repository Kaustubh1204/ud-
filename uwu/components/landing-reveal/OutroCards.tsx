'use client';

import React from 'react';
import { Check } from 'lucide-react';

const outroCardData = [
  {
    id: 'starter',
    title: 'Starter',
    image: '/img/8605c9db0ed95d59f952df42e3785a7d.jpg',
    description: 'A strong starting point for businesses ready to build their digital foundation. Final pricing is decided after a detailed discussion of your goals and requirements.',
    cta: 'Let’s Collaborate',
    features: [
      'Custom website or application development',
      'UI/UX design using Figma',
      'Backend & database setup',
      'Basic integrations & features',
      'Regular progress updates',
      'Post-launch support'
    ]
  },
  {
    id: 'pro',
    title: 'Pro',
    image: '/img/8079b63abeb541f72ccd9648a7b20833.jpg',
    description: 'Designed for growing products and complex systems that demand scalability and performance. Pricing is finalized after understanding the full scope and technical requirements.',
    cta: 'Let’s Collaborate',
    features: [
      'Advanced web or mobile application',
      'Custom CRM / ERP or business software',
      'Scalable backend architecture',
      'API integrations & automation',
      'Dedicated communication & updates',
      'Priority support & optimization'
    ]
  }
];

interface OutroCardsProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export default function OutroCards({ containerRef }: OutroCardsProps) {
  return (
    <div ref={containerRef} className="lr-outro-cards">
      {outroCardData.map((data, i) => (
        <div key={data.id} className="lr-card">
          {/* FRONT SIDE (Visible at start) */}
          <div className="lr-card-front">
            <div className="lr-card-image-wrapper">
              <img src={data.image} alt={data.title} className="lr-card-image" />
              <div className="lr-card-image-overlay" />
            </div>
            <div className="lr-card-front-content">
              <h3 className="lr-card-title">{data.title}</h3>
            </div>
          </div>

          {/* BACK SIDE (Visible after flip) */}
          <div className="lr-card-back">
            <div className="lr-card-back-inner">
              <h3 className="lr-card-back-title">{data.title}</h3>
              <p className="lr-card-description">{data.description}</p>
              
              <div className="lr-card-features">
                {data.features.map((feature, idx) => (
                  <div key={idx} className="lr-card-feature-item">
                    <Check size={14} className="lr-card-check" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button className="lr-card-cta">
                {data.cta}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
