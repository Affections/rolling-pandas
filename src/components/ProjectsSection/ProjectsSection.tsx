'use client';

import { useState, useEffect } from 'react';
import './ProjectsSection.css';
import PrimaryButton from '@/components/PrimaryButton/PrimaryButton';

const CloseIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M12.75 0.75L0.75 12.75" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M0.75 0.75L12.75 12.75" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);


const PROJECTS = [
  {
    id: 'bailey-jools',
    image: '/project-1.png',
    title: 'Bailey & Jools',
    desc: 'Beautiful design, scalable development, and fast execution.',
  },
];

export default function ProjectsSection() {
  const [openProject, setOpenProject] = useState<string | null>(null);

  useEffect(() => {
    if (openProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [openProject]);

  return (
    <section className="projects-section">
      <div className="projects-section__inner">
        <div className="projects-section__header">
          <div className="projects-section__header-left">
            <h2 className="projects-section__title">
              Brands we&apos;ve <span className="projects-section__title-accent">helped</span> build and grow
            </h2>
            <p className="projects-section__intro">
              Beautiful design, scalable development, and fast execution.
            </p>
          </div>
          <PrimaryButton className="projects-section__btn projects-section__btn--dark">
            SEE ALL PROJECTS
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="projects-section__btn-icon" aria-hidden>
              <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </PrimaryButton>
        </div>

        <div className="projects-section__slider">
          {PROJECTS.map((project) => (
            <button
              key={project.id}
              type="button"
              className="projects-section__slide"
              onClick={() => setOpenProject(project.id)}
            >
              <div className="projects-section__slide-img-wrap">
                <img src={project.image} alt="" className="projects-section__slide-img" />
              </div>
              <h3 className="projects-section__slide-title">{project.title}</h3>
              <p className="projects-section__slide-desc">{project.desc}</p>
            </button>
          ))}
        </div>
      </div>

      {openProject && (
        <div
          className="projects-popup__backdrop"
          onClick={() => setOpenProject(null)}
          onKeyDown={(e) => e.key === 'Escape' && setOpenProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-title"
        >
          <div
            className="projects-popup"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="projects-popup__inner">
              <div className="projects-popup__left">
                <img src="/project-1.png" alt="" className="projects-popup__img" />
              </div>
              <div className="projects-popup__right">
                <div className="projects-popup__close-row">
                  <button
                    type="button"
                    className="projects-popup__close"
                    onClick={() => setOpenProject(null)}
                    aria-label="Close"
                  >
                    <CloseIcon />
                  </button>
                </div>
                <hr className="projects-popup__divider projects-popup__divider--first" />
                <h2 id="project-title" className="projects-popup__title">Bailey & Jools</h2>
                <p className="projects-popup__desc">Beautiful design, scalable development, and fast execution.</p>
                <hr className="projects-popup__divider" />
                <div className="projects-popup__badge">
                  <img src="/badge-bailey-jools.svg" alt="Bailey & Jools" className="projects-popup__badge-svg" />
                </div>
                <p className="projects-popup__lorem">
                  Lorem ipsum dolor sit amet consectetur. Est arcu sagittis sed potenti scelerisque rhoncus faucibus etiam. Et scelerisque orci iaculis et eros suscipit. Fermentum et cras praesent pellentesque nisl congue. Phasellus amet ac nunc tortor ornare vulputate donec. Urna gravida quis venenatis vitae. Nisi sapien tempor ut purus. Pharetra pretium tincidunt fermentum quam. Tellus at diam cursus fames tortor nibh. Tortor praesent id lacus nisi nulla nisi.
                </p>
                <hr className="projects-popup__divider" />
                <p className="projects-popup__quote">
                  &ldquo; Rolling Pandas&apos; work resulted in a 250–300% increase in sales. They also delivered a user-friendly website that aligned with the client&apos;s brand. Moreover, the team completed tasks on time, responded promptly, and communicated effectively. Their understanding of the client&apos;s goals was also exemplary. &rdquo;
                </p>
                <div className="projects-popup__testimonial">
                  <img src="/avatar-maria.png" alt="" className="projects-popup__avatar" />
                  <div className="projects-popup__testimonial-info">
                    <p className="projects-popup__name">Maria Vargian</p>
                    <p className="projects-popup__role">Founder & Managing Director</p>
                  </div>
                  <div className="projects-popup__testimonial-divider" />
                  <img src="/logo-bailey-jools.png" alt="Bailey & Jools" className="projects-popup__logo" />
                </div>
                <hr className="projects-popup__divider projects-popup__divider--last" />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
