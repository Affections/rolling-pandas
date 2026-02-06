'use client';

import { Suspense, useRef, useCallback } from 'react';
import { Canvas } from '@react-three/fiber';
import ParallaxScene from './ParallaxScene';
import './HeroCanvas.css';

export default function HeroCanvas() {
  const mouseRef = useRef({ x: 0, y: 0 });

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth) * 2 - 1;
    const y = -(clientY / window.innerHeight) * 2 + 1;
    mouseRef.current = { x, y };
  }, []);

  return (
    <div
      className="hero-canvas-wrapper"
      onMouseMove={onMouseMove}
      style={{ minHeight: '100lvh' }}
    >
      <div className="hero-canvas-inner">
        <Canvas
          orthographic
          camera={{
            position: [0, 0, 5],
            zoom: 1,
            left: -2,
            right: 2,
            top: 1,
            bottom: -1,
            near: 0.1,
            far: 1000,
          }}
          gl={{ antialias: true, alpha: false }}
          dpr={[1, 2]}
        >
          <Suspense fallback={null}>
            <ParallaxScene mouseRef={mouseRef} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
