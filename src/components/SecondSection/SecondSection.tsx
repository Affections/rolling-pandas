'use client';

import './SecondSection.css';

const LOGOS = [
  { src: '/logo-1.png', alt: 'Partner logo' },
  { src: '/logo-2.png', alt: 'Partner logo' },
  { src: '/logo-3.png', alt: 'Partner logo' },
  { src: '/logo-4.png', alt: 'Partner logo' },
];

export default function SecondSection() {
  return (
    <section className="second-section">
      <div className="second-section__inner">
        <p className="second-section__text">Used by the world&apos;s leading companies</p>
        <div className="second-section__grid">
          {LOGOS.map((logo, i) => (
            <div key={i} className="second-section__grid-item">
              <img src={logo.src} alt={logo.alt} className="second-section__img" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
