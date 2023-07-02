/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react';

const Lights = () => {
  const FakeSphere = () => (
    <mesh>
      <sphereBufferGeometry args={[0.7, 30, 30]} />
      <meshStandardMaterial color={0xfff1ef} />
    </mesh>
  );

  const ref = useRef(null);
  const ref2 = useRef(null);
  return (
    <group>
      <FakeSphere />
      {/* This light globally illuminates all objects in the scene equally */}
      <ambientLight ref={ref2} position={[0, 4, 0]} intensity={0.3} />
      <directionalLight color={0xffffff} position={[0, 0, 0]} intensity={0.5} />

      <pointLight ref={ref} intensity={1.9} position={[-6, 3, -6]} color={0xffcc77} />

      <pointLight ref={ref2} intensity={1.9} position={[6, 3, 6]} color={0xffcc77} />
    </group>
  );
};

export default Lights;
