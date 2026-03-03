import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { Suspense, useEffect, useRef } from 'react';
import * as THREE from 'three';

function Model() {
  const { scene } = useGLTF('/assets/Telefonzelle.glb');
  const ref = useRef<THREE.Group>(null);

  // sanfte Turntable-Rotation
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.004;
    }
  });

  // Modell automatisch zentrieren (Bounding Box)
  useEffect(() => {
    if (!ref.current) return;

    const box = new THREE.Box3().setFromObject(ref.current);
    const center = box.getCenter(new THREE.Vector3());

    ref.current.position.sub(center);
  }, []);

  return <primitive ref={ref} object={scene} scale={1.4} />;
}

export default function TurntableModel() {
  return (
    <div className="w-full h-[70vh] md:h-[80vh] relative">
      <Canvas
        gl={{ alpha: true, antialias: true }}
        camera={{ position: [0, 2, 6], fov: 35 }}
      >
        {/* Lights */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.3} />
        <directionalLight position={[-5, 3, 2]} intensity={0.5} />
        <directionalLight position={[0, 5, -5]} intensity={0.8} />

        <Suspense fallback={null}>
          <Model />
        </Suspense>

        <OrbitControls
          enableZoom
          enablePan={false}
          minDistance={4}
          maxDistance={8}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
}