'use client';
import * as THREE from 'three';
import Plane from './Plane';
import { Canvas } from '@react-three/fiber';




const Three = () => {

  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Plane position={[0, 0, 0]} />
    </Canvas>
  );
};

export default Three;
