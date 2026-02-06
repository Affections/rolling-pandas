'use client';

import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

const PARALLAX_STRENGTH = 0.08;
const SMOOTHING = 0.08;

type MouseRef = { current: { x: number; y: number } };

function ImagePlaneCover({ mouseRef }: { mouseRef: MouseRef }) {
  const texture = useTexture('/hero.png');
  if (!texture) return null;

  const image = texture.image as HTMLImageElement | undefined;
  const imageAspect = image?.width && image?.height ? image.width / image.height : 16 / 9;

  const scale = useMemo(() => {
    if (typeof window === 'undefined') return [2, 2, 1] as const;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const viewAspect = vw / vh;
    let sx: number, sy: number;
    if (viewAspect > imageAspect) {
      sx = viewAspect * 2;
      sy = 2;
    } else {
      sx = imageAspect * 2;
      sy = (2 * imageAspect) / viewAspect;
    }
    return [sx, sy, 1] as const;
  }, [imageAspect]);

  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;

  return (
    <mesh scale={scale}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
    </mesh>
  );
}

function CameraRig({ mouseRef }: { mouseRef: MouseRef }) {
  const { camera, size } = useThree();
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const lastSize = useRef({ w: 0, h: 0 });

  useFrame(() => {
    if (!camera || !size || typeof size.width !== 'number' || typeof size.height !== 'number') return;
    const ortho = camera as THREE.OrthographicCamera;
    const w = size.width;
    const h = size.height;
    if (ortho.left !== undefined && (w !== lastSize.current.w || h !== lastSize.current.h)) {
      const aspect = w / h;
      ortho.left = -aspect;
      ortho.right = aspect;
      ortho.top = 1;
      ortho.bottom = -1;
      ortho.updateProjectionMatrix();
      lastSize.current = { w, h };
    }

    const { x, y } = mouseRef.current;
    target.current.x = x * PARALLAX_STRENGTH;
    target.current.y = y * PARALLAX_STRENGTH;
    current.current.x += (target.current.x - current.current.x) * SMOOTHING;
    current.current.y += (target.current.y - current.current.y) * SMOOTHING;
    if (camera.position) {
      camera.position.x = current.current.x;
      camera.position.y = current.current.y;
    }
    camera.lookAt(current.current.x, current.current.y, 0);
    camera.updateProjectionMatrix();
  });

  return null;
}

export default function ParallaxScene({ mouseRef }: { mouseRef: MouseRef }) {
  return (
    <>
      <CameraRig mouseRef={mouseRef} />
      <ImagePlaneCover mouseRef={mouseRef} />
    </>
  );
}
