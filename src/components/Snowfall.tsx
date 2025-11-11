import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface Snowflake {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export function Snowfall() {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    // Generiere dezente Schneeflocken
    const flakes: Snowflake[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 2 + 1, // 1-3px
      duration: Math.random() * 15 + 15, // 15-30s
      delay: Math.random() * -20, // Gestaffelt
      opacity: Math.random() * 0.3 + 0.1, // 0.1-0.4 sehr dezent
    }));
    setSnowflakes(flakes);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {snowflakes.map((flake) => (
        <motion.div
          key={flake.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${flake.x}%`,
            width: flake.size,
            height: flake.size,
            opacity: flake.opacity,
            filter: 'blur(0.5px)',
          }}
          animate={{
            y: ['0vh', '100vh'],
            x: [0, Math.sin(flake.id) * 50],
          }}
          transition={{
            duration: flake.duration,
            delay: flake.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}
