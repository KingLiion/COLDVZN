import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function FloatingMesh() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Generate mesh points
  const meshPoints = [];
  const gridSize = 6;
  const spacing = 100;

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      meshPoints.push({
        x: (i - gridSize / 2) * spacing,
        y: (j - gridSize / 2) * spacing,
        delay: (i + j) * 0.1,
      });
    }
  }

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{
          rotateZ: [0, 360],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <motion.div
          className="relative"
          animate={{
            x: mousePosition.x,
            y: mousePosition.y,
          }}
          transition={{
            type: 'spring',
            stiffness: 50,
            damping: 20,
          }}
          style={{
            width: '600px',
            height: '600px',
          }}
        >
          {/* Mesh vertices and connections */}
          {meshPoints.map((point, index) => {
            const { x, y, delay } = point;
            
            return (
              <motion.div
                key={index}
                className="absolute left-1/2 top-1/2"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                  scale: [0.8, 1.2, 0.8],
                  x: x,
                  y: y,
                }}
                transition={{
                  opacity: {
                    duration: 3,
                    repeat: Infinity,
                    delay: delay,
                    ease: 'easeInOut',
                  },
                  scale: {
                    duration: 3,
                    repeat: Infinity,
                    delay: delay,
                    ease: 'easeInOut',
                  },
                }}
              >
                {/* Vertices */}
                <div className="w-2 h-2 rounded-full bg-gradient-to-br from-ice-400 to-ice-500 blur-[1px]" />
                
                {/* Connecting lines */}
                <div
                  className="absolute top-0 left-0 origin-left h-[1px] bg-gradient-to-r from-ice-400/60 to-transparent"
                  style={{
                    width: `${Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)) * 0.5}px`,
                    transform: `rotate(${Math.atan2(y, x)}rad)`,
                  }}
                />
              </motion.div>
            );
          })}

          {/* Central Core */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(56, 189, 248, 0.3), rgba(56, 189, 248, 0) 70%)',
              filter: 'blur(20px)',
            }}
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Orbital Rings */}
          {[0, 1, 2].map((ring) => (
            <motion.div
              key={ring}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-ice-400/20"
              style={{
                width: `${250 + ring * 60}px`,
                height: `${250 + ring * 60}px`,
                transformStyle: 'preserve-3d',
              }}
              animate={{
                rotateX: ring % 2 === 0 ? [0, 360] : [360, 0],
                rotateZ: ring * 30,
              }}
              transition={{
                rotateX: {
                  duration: 15 + ring * 5,
                  repeat: Infinity,
                  ease: 'linear',
                },
              }}
            >
              {/* Particles on ring */}
              {[0, 1, 2, 3].map((particle) => {
                const particleAngle = (particle / 4) * Math.PI * 2;
                const particleRadius = (250 + ring * 60) / 2;
                
                return (
                  <motion.div
                    key={particle}
                    className="absolute w-1.5 h-1.5 rounded-full bg-ice-400"
                    style={{
                      left: '50%',
                      top: '50%',
                      marginLeft: '-3px',
                      marginTop: '-3px',
                      filter: 'blur(0.5px)',
                      boxShadow: '0 0 8px rgba(56, 189, 248, 0.8)',
                    }}
                    animate={{
                      x: Math.cos(particleAngle) * particleRadius,
                      y: Math.sin(particleAngle) * particleRadius,
                    }}
                    transition={{
                      duration: 0,
                    }}
                  />
                );
              })}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Ambient glow effects */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-ice-400/5 blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-ice-500/5 blur-3xl" />
    </div>
  );
}
