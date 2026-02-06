'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import HeroLogo from '@/components/HeroLogo/HeroLogo';
import HeroShopifyBadge from '@/components/HeroShopifyBadge/HeroShopifyBadge';
import './HeroParallax.css';

const PARALLAX_FAST = 44;
const PARALLAX_SLOW = 14;
const SMOOTH = 0.08;

type MouseRef = { current: { x: number; y: number } };

type HeroParallaxProps = { mouseRef: MouseRef };

export default function HeroParallax({ mouseRef }: HeroParallaxProps) {
  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);
  const layer3Ref = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const current1 = useRef({ x: 0, y: 0 });
  const current2 = useRef({ x: 0, y: 0 });
  const current3 = useRef({ x: 0, y: 0 });
  const raf = useRef<number>(0);

  useEffect(() => {
    const l1 = layer1Ref.current;
    const l2 = layer2Ref.current;
    const l3 = layer3Ref.current;
    if (!l1 || !l2 || !l3) return;

    const tick = () => {
      target.current.x = mouseRef.current.x;
      target.current.y = mouseRef.current.y;
      const tx = target.current.x;
      const ty = target.current.y;

      current3.current.x += (tx * PARALLAX_FAST - current3.current.x) * SMOOTH;
      current3.current.y += (ty * PARALLAX_FAST - current3.current.y) * SMOOTH;
      l3.style.transform = `translate(${current3.current.x}px, ${current3.current.y}px)`;

      current1.current.x += (tx * PARALLAX_SLOW - current1.current.x) * SMOOTH;
      current1.current.y += (ty * PARALLAX_SLOW - current1.current.y) * SMOOTH;
      l1.style.transform = `translate(${current1.current.x}px, ${current1.current.y}px)`;

      current2.current.x += (tx * PARALLAX_FAST - current2.current.x) * SMOOTH;
      current2.current.y += (ty * PARALLAX_FAST - current2.current.y) * SMOOTH;
      l2.style.transform = `translate(${current2.current.x}px, ${current2.current.y}px)`;

      raf.current = requestAnimationFrame(tick);
    };

    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [mouseRef]);

  return (
    <div className="hero-parallax-section">
      <div className="hero-parallax">
        {/* 1st layer = background (jungle/moon) — back, fast */}
        <div ref={layer3Ref} className="hero-parallax__layer hero-parallax__layer--1st">
          <Image src="/layer3.png" alt="" fill className="hero-parallax__image" priority sizes="1440px" />
        </div>
        {/* 2nd layer = hands — middle, slow */}
        <div ref={layer1Ref} className="hero-parallax__layer hero-parallax__layer--2nd">
          <Image src="/layer1.png" alt="" fill className="hero-parallax__image" priority sizes="1440px" />
        </div>
        {/* 3rd layer = flowers — front, fast */}
        <div ref={layer2Ref} className="hero-parallax__layer hero-parallax__layer--3rd">
          <Image src="/layer2.png" alt="Rolling Pandas" fill className="hero-parallax__image" priority sizes="1440px" />
        </div>
        <HeroLogo />
        <HeroShopifyBadge />
      </div>
    </div>
  );
}
