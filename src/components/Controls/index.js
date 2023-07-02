/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react';
import { extend, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from 'three-stdlib';

extend({ OrbitControls });

const Controls = (props) => {
  const ref = useRef();

  const {
    camera,
    gl: { domElement },
  } = useThree();

  useFrame(() => ref.current && ref.current.update());

  return <orbitControls ref={ref} args={[camera, domElement]} {...props} />;
};

export default Controls;
