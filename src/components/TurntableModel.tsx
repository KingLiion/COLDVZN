import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { Suspense, useEffect, useRef } from 'react';
import * as THREE from 'three';

function Model() {
  const { scene } = useGLTF('/assets/Telefonzelle.glb');
  const ref = useRef<THREE.Group>(null);

  // sanfte Rotation
  useFrame(() => {
    if (ref.current) ref.current.rotation.y += 0.004;
  });

  useEffect(() => {
    if (!ref.current) return;

    // Modell zentrieren
    const box = new THREE.Box3().setFromObject(ref.current);
    const center = box.getCenter(new THREE.Vector3());
    ref.current.position.sub(center);

    // dynamische Skalierung, damit es immer passt
    const size = box.getSize(new THREE.Vector3());
    const maxAxis = Math.max(size.x, size.y, size.z);
    const scale = 3 / maxAxis;
    ref.current.scale.setScalar(scale);
  }, []);

  return <primitive ref={ref} object={scene} />;
}

export default function TurntableModel() {
  return (
    <div className="w-full h-[70vh] md:h-[80vh] min-h-[70vh] md:min-h-[80vh] flex justify-center items-stretch relative cursor-grab active:cursor-grabbing">
      <Canvas
        style={{ width: '100%', height: '100%' }}
        gl={{ alpha: true, antialias: true }}
        camera={{ position: [0, 1.5, 4], fov: 35 }}
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
          minDistance={2}
          maxDistance={8}
          minPolarAngle={0}
          maxPolarAngle={Math.PI}
        />
      </Canvas>
    </div>
  );
}