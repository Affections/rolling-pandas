'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import './ClientsSection.css';

const TESTIMONIALS = Array(6).fill({
  name: 'Maria Vargian',
  role: 'Founder & Managing Director',
  avatar: '/testimonial-avatar.png',
  logo: '/testimonial-logo.png',
  quote:
    '" Rolling Pandas" work resulted in a 250–300% increase in sales. They also delivered a user-friendly website that aligned with the client\'s brand. Moreover, the team completed tasks on time, responded promptly, and communicated effectively. Their understanding of the client\'s goals was also exemplary. "',
});

const ButtonIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <rect x="0.15" y="0.15" width="13.7" height="13.7" rx="0.85" fill="#6B33EA" />
    <rect x="0.15" y="0.15" width="13.7" height="13.7" rx="0.85" stroke="#474747" strokeWidth="0.3" />
    <path d="M5.75 4.05029H9.95V8.25029" stroke="white" strokeWidth="0.35" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9.94982 4.05029L4.0498 9.9499" stroke="white" strokeWidth="0.35" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function ClientsSection() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="clients-section">
      <div className="clients-section__inner">
        <header className="clients-section__header">
          <h2 className="clients-section__title">
            What our <span className="clients-section__title-accent">clients</span> say
          </h2>
          <p className="clients-section__intro">
            We don&apos;t aim to &ldquo;impress&rdquo; — we aim to ship consistently, communicate clearly, and feel like part of your team.
          </p>
        </header>

        <div className="clients-section__grid">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`clients-section__thumb ${i === activeIndex ? 'clients-section__thumb--active' : ''}`}
              onClick={() => swiper?.slideTo(i)}
              aria-label={`View testimonial ${i + 1}`}
            >
              <img src="/testimonial-thumb.png" alt="" />
            </button>
          ))}
        </div>

        <div className="clients-section__slider-wrap">
          <div className="clients-section__fade clients-section__fade--left" aria-hidden />
          <div className="clients-section__fade clients-section__fade--right" aria-hidden />
          <Swiper
            onSwiper={setSwiper}
            onSlideChange={(s) => setActiveIndex(s.activeIndex)}
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 80,
              modifier: 2,
              slideShadows: false,
            }}
            modules={[EffectCoverflow]}
            className="clients-section__swiper"
            spaceBetween={32}
            loop
          >
            {TESTIMONIALS.map((t, i) => (
              <SwiperSlide key={i} className="clients-section__slide">
                <div className="clients-section__card">
                  <div className="clients-section__card-img-wrap">
                    <img src={t.avatar} alt="" className="clients-section__card-img" />
                  </div>
                  <div className="clients-section__card-content">
                    <div className="clients-section__card-header">
                      <div className="clients-section__author">
                        <p className="clients-section__author-name">{t.name}</p>
                        <p className="clients-section__author-role">{t.role}</p>
                      </div>
                      <div className="clients-section__card-divider" />
                      <img src={t.logo} alt="" className="clients-section__card-logo" />
                    </div>
                    <p className="clients-section__quote">
                      &ldquo; Rolling Pandas&apos; work resulted in a{' '}
                      <em>250–300% increase in sales</em>. They also delivered a{' '}
                      <em>user-friendly website</em> that aligned with the client&apos;s brand. Moreover, the team{' '}
                      <em>completed tasks on time</em>, responded promptly, and communicated effectively. Their understanding of the client&apos;s goals was also exemplary. &rdquo;
                    </p>
                    <button type="button" className="clients-section__btn">
                      <span className="clients-section__btn-text">Read full case study</span>
                      <ButtonIcon />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
