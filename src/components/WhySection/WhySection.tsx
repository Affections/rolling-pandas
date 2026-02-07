'use client';

import './WhySection.css';

export default function WhySection() {
  return (
    <section className="why-section">
      <div className="why-section__inner">
        <h2 className="why-section__title">Why brands choose Rolling Pandas</h2>
        <div className="why-section__grid">
          <div className="why-section__box why-section__box--1">
            <div className="why-section__glow" aria-hidden />
            <div className="why-section__box-bg" aria-hidden />
            <div className="why-section__box-content">
              <h3 className="why-section__box-title">
                Speed
                <br />
                without chaos
              </h3>
              <p className="why-section__box-desc">
                Daily shipping and fast iteration without breaking what already works.
              </p>
            </div>
          </div>
          <div className="why-section__box why-section__box--2">
            <div className="why-section__glow" aria-hidden />
            <div className="why-section__box-bg" aria-hidden />
            <div className="why-section__box-content">
              <h3 className="why-section__box-title">
                Radical
                <br />
                transparency
              </h3>
              <p className="why-section__box-desc">
                Clear scope, tracked delivery, and weekly reporting. No hidden hours.
              </p>
            </div>
          </div>
          <div className="why-section__box">
            <div className="why-section__glow" aria-hidden />
            <div className="why-section__box-bg" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
