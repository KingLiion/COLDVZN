import { motion } from 'motion/react';
import { ReactNode, useState } from 'react';

interface HoverCardProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  whileHoverScale?: number;
  whileHoverY?: number;
}

export function HoverCard({ 
  children, 
  onClick, 
  className = '', 
  whileHoverScale = 1.03,
  whileHoverY = -8 
}: HoverCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: whileHoverScale, y: whileHoverY }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      className={`relative ${className}`}
    >
      {children}

      {/* Eisiger Menüleisten-Style Hover-Effekt */}
      <div className="absolute inset-0 rounded-3xl pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-0 rounded-3xl transition-all duration-300"
          style={{
            border: isHovered 
              ? 'none'
              : '1px solid rgba(255, 255, 255, 0.1)',
            background: isHovered 
              ? `linear-gradient(180deg, #d4f8ff 0%, #64d2ff 40%, #1ec8ff 100%)`
              : 'transparent',
            boxShadow: isHovered 
              ? `
                  0 2px 12px rgba(100, 210, 255, 0.6),
                  inset 0 1px 0 rgba(255, 255, 255, 0.5),
                  inset 0 -1px 1px rgba(0, 0, 0, 0.15),
                  0 0 20px rgba(100, 210, 255, 0.4),
                  0 0 40px rgba(30, 200, 255, 0.2)
                `
              : 'none',
            opacity: isHovered ? 0.15 : 1,
          }}
        />
      </div>
    </motion.div>
  );
}
