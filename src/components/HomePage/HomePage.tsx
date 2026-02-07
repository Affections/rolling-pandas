'use client';

import { useRef, useCallback, useEffect } from 'react';
import './HomePage.css';
import HeroParallax from '@/components/HeroParallax/HeroParallax';
import HeroContent from '@/components/HeroContent/HeroContent';
import SecondSection from '@/components/SecondSection/SecondSection';
import WhySection from '@/components/WhySection/WhySection';
import HowWeWorkSection from '@/components/HowWeWorkSection/HowWeWorkSection';
import ProjectsSection from '@/components/ProjectsSection/ProjectsSection';

export default function HomePage() {
  const mouseRef = useRef({ x: 0, y: 0 });

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;
    const x = ((e.clientX - rect.left) / w) * 2 - 1;
    const y = -(((e.clientY - rect.top) / h) * 2 - 1);
    mouseRef.current = { x, y };
  }, []);

  const onMouseMoveGlobal = useCallback((e: MouseEvent) => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const x = (e.clientX / w) * 2 - 1;
    const y = -((e.clientY / h) * 2 - 1);
    mouseRef.current = { x, y };
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMoveGlobal);
    return () => window.removeEventListener('mousemove', onMouseMoveGlobal);
  }, [onMouseMoveGlobal]);

  return (
    <>
      <main className="home" onMouseMove={onMouseMove}>
        <HeroParallax mouseRef={mouseRef} />
        <div className="home__content">
          <HeroContent />
        </div>
      </main>
      <SecondSection />
      <WhySection />
      <HowWeWorkSection mouseRef={mouseRef} />
      <ProjectsSection />
    </>
  );
}
