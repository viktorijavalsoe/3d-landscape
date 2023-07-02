import React from 'react';
import { Html } from '@react-three/drei';

const Loader = () => {
  return (
    <Html prepend center>
      <div className='loading'>Loading..</div>
    </Html>
  );
};

export default Loader;
