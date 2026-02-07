'use client';

import PrimaryButton from '@/components/PrimaryButton/PrimaryButton';
import './PartnerSection.css';

export default function PartnerSection() {
  return (
    <section className="partner-section">
      <div className="partner-section__bg-wrap">
        <img src="/partner-bg.png" alt="" className="partner-section__bg" />
      </div>
      <div className="partner-section__content">
        <h2 className="partner-section__title">
          Need a reliable <span className="partner-section__title-accent">Shopify</span> partner?
        </h2>
        <p className="partner-section__intro">
          Let&apos;s talk through your goals and how we can support your design & development needs.
        </p>
        <div className="partner-section__buttons">
          <PrimaryButton href="#audit" className="partner-section__btn">
            GET A FREE STORE AUDIT VIDEO
          </PrimaryButton>
          <button type="button" className="partner-section__btn partner-section__btn--secondary">
            Book a call
          </button>
        </div>
      </div>
    </section>
  );
}
