/* eslint-disable react/no-unknown-property */
import React, { useRef, useLayoutEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { noise } from './perlin';

const Terrain = () => {
  const mesh = useRef();

  useLayoutEffect(() => {
    noise.seed(Math.random());
    if (!mesh.current) return;
    const geometry = mesh.current.geometry;
    let pos = geometry.getAttribute('position');
    let pa = pos.array;
    const hVerts = geometry.parameters.heightSegments + 1;
    const wVerts = geometry.parameters.widthSegments + 1;
    for (let j = 0; j < hVerts; j++) {
      for (let i = 0; i < wVerts; i++) {
        const ex = 1.1;
        pa[3 * (j * wVerts + i) + 2] =
          (noise.simplex2(i / 100, j / 100) +
            noise.simplex2((i + 200) / 50, j / 50) * Math.pow(ex, 1) +
            noise.simplex2((i + 400) / 25, j / 25) * Math.pow(ex, 2) +
            noise.simplex2((i + 600) / 12.5, j / 12.5) * Math.pow(ex, 3) +
            +(noise.simplex2((i + 800) / 6.25, j / 6.25) * Math.pow(ex, 4))) /
          2;
      }
    }
    pos.needsUpdate = true;
  });

  //   Raf loop
  useFrame(() => {
    mesh.current.rotation.z += 0.001;
  });

  return (
    <mesh ref={mesh} rotation={[-1.5, 0, 0]}>
      <planeBufferGeometry args={[25, 25, 75, 75]} />
      <meshPhongMaterial
        // wireframe
        color={'hotpink'}
        specular={'hotpink'}
        shininess={3}
        flatShading
      />
    </mesh>
  );
};

export default Terrain;
