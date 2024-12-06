import './style.css';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
  <Canvas>
    <mesh>
      <sphereGeometry />
      <meshBasicMaterial color="darkgreen" wireframe={true} />
    </mesh>
  </Canvas>
);
