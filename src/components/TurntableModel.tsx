import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';

function Model() {
    const { scene } = useGLTF('/assets/Telefonzelle.glb');
    return <primitive object={scene} />;
}

export default function TurntableModel() {
    return (
        <div className="w-full h-96">
            <Canvas gl={{ alpha: true }} camera={{ position: [0, 1, 3], fov: 45 }}>
                {/* Three‑point lighting */}
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 5, 5]} intensity={0.8} />
                <directionalLight position={[-5, 2, -5]} intensity={0.4} />
                <directionalLight position={[0, -5, 0]} intensity={0.2} />
                <Suspense fallback={null}>
                    <Model />
                </Suspense>
                <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
        </div>
    );
}
