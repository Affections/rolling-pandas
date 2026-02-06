'use client';

import './HeroLogo.css';

export default function HeroLogo() {
  return (
    <div className="hero-logo" aria-hidden>
      <img src="/hero-logo.svg" alt="Rolling Pandas" width={178} height={42} />
    </div>
  );
}
