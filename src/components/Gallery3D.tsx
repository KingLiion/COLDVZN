import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { HoverCard } from './HoverCard';

// ⭐ HIER KANNST DU DEINE EIGENEN BILDER EINFÜGEN
export const galleryProjects = [
  {
    id: 'quantum-sphere',
    url: 'https://images.unsplash.com/photo-1749621245916-910ef8a23e9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMHJlbmRlciUyMGFydHxlbnwxfHx8fDE3NjE0MDgwNTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Quantum Sphere',
    subtitle: 'Digital Sculpture',
  },
  {
    id: 'abstract-forms',
    url: 'https://images.unsplash.com/photo-1637246344338-2afcfb02e766?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHNjdWxwdHVyZXxlbnwxfHx8fDE3NjEzNTcwMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Abstract Forms',
    subtitle: 'Modern Design',
  },
  {
    id: 'minimal-aesthetics',
    url: 'https://images.unsplash.com/photo-1646936190308-6faef1ac893c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtaW5pbWFsJTIwYXJ0fGVufDF8fHx8MTc2MTQwODA1M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Minimal Aesthetics',
    subtitle: 'Contemporary Art',
  },
  {
    id: 'geometric-vision',
    url: 'https://images.unsplash.com/photo-1688486134221-dfa7d4c45073?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9tZXRyaWMlMjBkZXNpZ258ZW58MXx8fHwxNzYxNDA1NjE4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Geometric Vision',
    subtitle: 'Precision Design',
  },
  {
    id: 'organic-flow',
    url: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMGFic3RyYWN0JTIwc2hhcGVzfGVufDF8fHx8MTc2MTQ1Njc4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Organic Flow',
    subtitle: 'Fluid Dynamics',
  },
  {
    id: 'crystalline-structure',
    url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMGdlb21ldHJpYyUyMGFydHxlbnwxfHx8fDE3NjE0NTY3ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Crystalline Structure',
    subtitle: 'Mathematical Beauty',
  },
];

export function Gallery3D() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Automatischer Wechsel alle 5 Sekunden

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleThumbnailClick = (index: number) => {
    if (index !== currentIndex && !isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 700);
    }
  };

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % galleryProjects.length);
      setTimeout(() => setIsAnimating(false), 700);
    }
  };

  const handleCardClick = (projectId: string) => {
    const element = document.getElementById(projectId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getCardPosition = (index: number) => {
    const position = (index - currentIndex + galleryProjects.length) % galleryProjects.length;
    return position;
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center py-16">
      {/* Featured Projects Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-6 md:mb-8 px-4 pt-8 md:pt-12"
      >
        <motion.h1
          className="mb-3 bg-gradient-to-r from-ice-200 via-ice-400 to-ice-200 bg-clip-text text-transparent"
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            lineHeight: '1.1',
            letterSpacing: '-0.02em',
          }}
        >
          Feat. Projekte
        </motion.h1>
        <motion.p
          className="text-white/70 max-w-2xl mx-auto"
          style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', lineHeight: '1.6' }}
        >
          Entdecke meine kreativen Projekte und Designs
        </motion.p>
      </motion.div>

      {/* 3D Card Stack Gallery - 16:9 horizontal wie Artikel-Galerie */}
      <div 
        className="relative w-full flex-1 flex items-center justify-center px-3 md:px-6 lg:px-8 mb-16"
        style={{ 
          perspective: '2000px',
          perspectiveOrigin: 'center center',
        }}
      >
        <div 
          className="relative w-full" 
          style={{ aspectRatio: '16/9', maxWidth: '85vw' }}
        >
          {galleryProjects.map((project, index) => {
            const position = getCardPosition(index);
            
            return (
              <motion.div
                key={index}
                className="absolute top-0 left-0 w-full h-full cursor-pointer"
                animate={{
                  x: `${position * 5}%`,
                  y: position * 20,
                  rotateY: position * -6,
                  scale: 1 - position * 0.05,
                  z: -position * 120,
                  zIndex: galleryProjects.length - position,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.32, 0.72, 0, 1],
                }}
                style={{
                  transformStyle: 'preserve-3d',
                }}
                onClick={() => position === 0 && handleCardClick(project.id)}
              >
                <div 
                  className="relative w-full h-full rounded-2xl md:rounded-3xl overflow-hidden group"
                  style={{
                    boxShadow: `
                      0 25px 50px -12px rgba(0, 0, 0, 0.7),
                      0 0 0 1px rgba(255, 255, 255, 0.1)
                    `,
                  }}
                >
                  <img
                    src={project.url}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500"
                    style={{
                      transform: position === 0 ? 'scale(1.02)' : 'scale(1)',
                    }}
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Content - only show on front card */}
                  {position === 0 && (
                    <>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="absolute bottom-0 left-0 right-0 p-4 md:p-6"
                      >
                        <div className="flex items-end justify-between gap-4">
                          <div className="flex-1">
                            <p className="text-white/60 mb-0.5" style={{ fontSize: 'clamp(0.7rem, 2vw, 0.85rem)' }}>
                              {project.subtitle}
                            </p>
                            <h3 className="text-white mb-3" style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)' }}>
                              {project.title}
                            </h3>

                            {/* Thumbnail Previews - IN DER KARTE */}
                            <div className="flex gap-2 md:gap-3">
                              {galleryProjects.map((img, idx) => {
                                const isActive = idx === currentIndex;
                                
                                return (
                                  <motion.button
                                    key={idx}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleThumbnailClick(idx);
                                    }}
                                    className="relative rounded-md overflow-hidden border transition-all duration-300"
                                    style={{
                                      borderColor: isActive ? '#38bdf8' : 'rgba(255, 255, 255, 0.3)',
                                      borderWidth: isActive ? '2px' : '1px',
                                      width: isActive ? 'clamp(50px, 8vw, 70px)' : 'clamp(40px, 6vw, 55px)',
                                      height: isActive ? 'clamp(28px, 4.5vw, 39px)' : 'clamp(22.5px, 3.4vw, 31px)',
                                    }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                  >
                                    <img
                                      src={img.url}
                                      alt={img.title}
                                      className="w-full h-full object-cover"
                                      style={{
                                        filter: isActive ? 'brightness(1)' : 'brightness(0.5)',
                                      }}
                                    />
                                    {isActive && (
                                      <div 
                                        className="absolute inset-0 pointer-events-none"
                                        style={{
                                          boxShadow: 'inset 0 0 0 1px rgba(56, 189, 248, 0.5), 0 0 8px rgba(56, 189, 248, 0.3)',
                                        }}
                                      />
                                    )}
                                  </motion.button>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Hover indicator */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs">
                          Click to view
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>


    </div>
  );
}
