import { LandingPage } from './LandingPage';
import { Gallery3D } from './Gallery3D';
import { FloatingMesh } from './FloatingMesh';

export function Hero() {
  return (
    <section id="home" className="relative bg-black">
      {/* Landing Page mit Parallax */}
      <LandingPage />

      {/* Übergangsbereich - von Landing zu Gallery */}
      <div className="relative bg-black">
        {/* Floating 3D Mesh Background für Gallery */}
        <FloatingMesh />

        {/* Subtle noise texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.015] z-10 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
          }}
        />

        {/* 3D Gallery - Willkommen und Karten */}
        <div className="relative w-full min-h-screen z-20">
          <Gallery3D />
        </div>
      </div>
    </section>
  );
}
