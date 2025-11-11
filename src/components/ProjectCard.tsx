import { motion } from 'motion/react';
import { useState } from 'react';

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  index: number;
}

export function ProjectCard({ title, category, image, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.03, y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-950 shadow-2xl cursor-pointer"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-tr from-ice-400/0 via-ice-400/0 to-ice-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
      </div>

      {/* Content */}
      <div className="relative p-6 z-20">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-3 py-1 rounded-full bg-ice-400/20 border border-ice-400/30 text-ice-400">
            {category}
          </span>
        </div>
        <h3 className="text-white mb-2 group-hover:text-ice-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-white/60">
          Explore this project
        </p>
      </div>

      {/* Leuchtender Rand mit fahrendem Highlight */}
      <div className="absolute inset-0 rounded-3xl pointer-events-none">
        {/* Basis leuchtender Rand */}
        <div 
          className="absolute inset-0 rounded-3xl transition-all duration-300"
          style={{
            border: isHovered ? '2px solid rgba(56, 189, 248, 0.6)' : '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: isHovered 
              ? '0 0 30px rgba(56, 189, 248, 0.5), inset 0 0 20px rgba(56, 189, 248, 0.1)' 
              : 'none',
          }}
        />
        
        {/* Fahrendes Highlight um den Rand */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 rounded-3xl"
            style={{
              background: `conic-gradient(
                from 0deg,
                transparent 0deg,
                rgba(56, 189, 248, 0.8) 20deg,
                rgba(125, 211, 252, 1) 40deg,
                rgba(224, 242, 254, 0.8) 60deg,
                transparent 80deg,
                transparent 360deg
              )`,
              mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              maskComposite: 'exclude',
              WebkitMaskComposite: 'xor',
              padding: '2px',
            }}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        )}
      </div>

      {/* Shine effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent z-20" />
    </motion.div>
  );
}
