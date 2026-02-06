'use client';

import PrimaryButton from '@/components/PrimaryButton/PrimaryButton';
import './HeroContent.css';

export default function HeroContent() {
  return (
    <div className="hero-content">
      <h1 className="hero-content__title">
        Ship Shopify changes <em>faster</em> without downtime or vendor <em>games</em>.
      </h1>
      <p className="hero-content__desc">
        Fast, reliable Shopify design & development shipped daily with enterprise-level quality
        with owner-led communication and full visibility into delivery.
      </p>
      <PrimaryButton href="#contact" className="hero-content__cta">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-content__cta-icon" aria-hidden>
          <path d="M8.33333 3.41663L10 4.99996" stroke="#0A0909" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15.7503 6.66667L18.167 6" stroke="#0A0909" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14.9997 10L16.583 11.6667" stroke="#0A0909" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 1.83337L13.3333 4.25004" stroke="#0A0909" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12.469 8.07496C12.5013 7.99884 12.5101 7.9148 12.4943 7.83362C12.4786 7.75244 12.4389 7.67783 12.3804 7.61935C12.3219 7.56088 12.2473 7.52121 12.1661 7.50543C12.085 7.48965 12.0009 7.49848 11.9248 7.5308L2.75813 11.2808C2.67654 11.3143 2.60768 11.3728 2.56145 11.4478C2.51522 11.5229 2.49401 11.6108 2.50086 11.6987C2.50772 11.7866 2.54229 11.8701 2.5996 11.9371C2.65691 12.0041 2.73401 12.0512 2.81979 12.0716L6.44396 12.9391C6.59357 12.9749 6.73037 13.0513 6.83921 13.16C6.94805 13.2687 7.02469 13.4054 7.06063 13.555L7.92729 17.18C7.94749 17.266 7.99454 17.3435 8.06165 17.401C8.12876 17.4586 8.21244 17.4933 8.30058 17.5002C8.38873 17.5071 8.47678 17.4857 8.55199 17.4392C8.6272 17.3927 8.68568 17.3235 8.71896 17.2416L12.469 8.07496Z" stroke="#0A0909" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        plan your session
      </PrimaryButton>
    </div>
  );
}
