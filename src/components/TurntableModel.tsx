// TurntableModel.tsx
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { Suspense } from 'react';
import Model from './LondonTelephoneBoxModel'; // Dein 3D-Asset

export default function TurntableModel() {
  return (
    <div
      style={{
        width: '100%',
        height: '600px',       // Höhe des Fensters
        border: '4px solid #E0E7FF', // Rahmen um das Fenster
        borderRadius: '20px',  // Abgerundete Ecken
        overflow: 'hidden',
        margin: '2rem 0',      // Abstand oben/unten
        background: '#000',    // Optional: dunkler Hintergrund
      }}
    >
      <Canvas
        camera={{ position: [0, 2, 5], fov: 50 }} // Kameraposition & Sichtfeld
        style={{ width: '100%', height: '100%' }}
      >
        {/* Lichter */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* 3D-Modell */}
        <Suspense fallback={null}>
          <Model />
        </Suspense>

        {/* Kamera-Steuerung */}
        <OrbitControls enableZoom={true} />

        {/* Environment für realistische Beleuchtung */}
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}