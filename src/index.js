/* eslint-disable react/no-unknown-property */
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Canvas } from '@react-three/fiber';
import Controls from './components/Controls';
import Loader from './components/Loader';
import Scene from './components/Scene';

function App() {
  return (
    <Canvas camera={{ zoom: 40, position: [0, 0, 500] }}>
      <Suspense fallback={<Loader />}>
        <Controls />
        <Scene />
      </Suspense>
    </Canvas>
  );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
