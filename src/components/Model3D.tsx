import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

export function Model3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const updateSize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    updateSize();
    window.addEventListener('resize', updateSize);

    let angleY = 0;
    let angleX = 0;

    const animate = () => {
      if (!ctx || !canvas) return;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      const centerX = canvas.offsetWidth / 2;
      const centerY = canvas.offsetHeight / 2;
      const scale = Math.min(canvas.offsetWidth, canvas.offsetHeight) * 0.3;

      // Update rotation
      angleY += 0.005;
      angleX = Math.sin(angleY * 0.5) * 0.2;

      // Draw 3D cube with golden edges
      const vertices = [
        [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
        [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1],
      ];

      const edges = [
        [0, 1], [1, 2], [2, 3], [3, 0],
        [4, 5], [5, 6], [6, 7], [7, 4],
        [0, 4], [1, 5], [2, 6], [3, 7],
      ];

      // Rotate and project vertices
      const projectedVertices = vertices.map(([x, y, z]) => {
        // Rotate Y
        let x1 = x * Math.cos(angleY) - z * Math.sin(angleY);
        let z1 = x * Math.sin(angleY) + z * Math.cos(angleY);
        
        // Rotate X
        let y1 = y * Math.cos(angleX) - z1 * Math.sin(angleX);
        let z2 = y * Math.sin(angleX) + z1 * Math.cos(angleX);

        // Project to 2D
        const perspective = 3;
        const scale2d = perspective / (perspective + z2);
        
        return {
          x: centerX + x1 * scale * scale2d,
          y: centerY + y1 * scale * scale2d,
          z: z2,
        };
      });

      // Draw edges
      edges.forEach(([start, end]) => {
        const v1 = projectedVertices[start];
        const v2 = projectedVertices[end];
        
        // Calculate depth for gradient
        const avgZ = (v1.z + v2.z) / 2;
        const opacity = Math.max(0.3, 1 - (avgZ + 1) / 2);
        
        const gradient = ctx.createLinearGradient(v1.x, v1.y, v2.x, v2.y);
        gradient.addColorStop(0, `rgba(229, 192, 104, ${opacity})`);
        gradient.addColorStop(1, `rgba(212, 175, 55, ${opacity * 0.8})`);
        
        ctx.beginPath();
        ctx.moveTo(v1.x, v1.y);
        ctx.lineTo(v2.x, v2.y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'rgba(212, 175, 55, 0.5)';
        ctx.stroke();
      });

      // Draw vertices
      projectedVertices.forEach((v) => {
        const opacity = Math.max(0.4, 1 - (v.z + 1) / 2);
        ctx.beginPath();
        ctx.arc(v.x, v.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${opacity})`;
        ctx.shadowBlur = 15;
        ctx.shadowColor = 'rgba(212, 175, 55, 0.8)';
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateSize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative w-full h-full"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ width: '100%', height: '100%' }}
      />
      
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-gradient-radial from-ice-400/10 via-transparent to-transparent blur-2xl pointer-events-none" />
    </motion.div>
  );
}
