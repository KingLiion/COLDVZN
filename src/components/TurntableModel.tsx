import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, Stage } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';

function Model() {
    const { scene } = useGLTF('/assets/Telefonzelle.glb');
    const modelRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (modelRef.current) {
            modelRef.current.rotation.y += 0.005;
        }
    });

    return <primitive ref={modelRef} object={scene} scale={1.5} position={[0, -1, 0]} />;
}

export default function TurntableModel() {
    return (
        <div className="w-full h-[500px] md:h-[600px] cursor-grab active:cursor-grabbing">
            <Canvas gl={{ alpha: true, antialias: true }} camera={{ position: [0, 1.5, 4], fov: 40 }}>
                {/* 3-Point Lighting Setup */}
                {/* 1. Key Light: Main light source */}
                <directionalLight position={[5, 5, 5]} intensity={1.5} color="#ffffff" />

                {/* 2. Fill Light: Soften shadows */}
                <directionalLight position={[-5, 2, 2]} intensity={0.5} color="#cbd5e1" />

                {/* 3. Rim Light: Backlighting to separate from background */}
                <directionalLight position={[0, 5, -5]} intensity={0.8} color="#38bdf8" />

                {/* Ambient Light for general visibility */}
                <ambientLight intensity={0.4} />

                <Suspense fallback={null}>
                    <Model />
                </Suspense>
                <OrbitControls
                    enableZoom={true}
                    enablePan={false}
                    minPolarAngle={Math.PI / 4}
                    maxPolarAngle={Math.PI / 1.5}
                />
            </Canvas>
        </div>
    );
}
