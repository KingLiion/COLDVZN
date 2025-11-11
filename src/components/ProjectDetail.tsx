import { motion } from 'motion/react';
import { ArrowLeft, Calendar, Tag, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { Model3D } from './Model3D';
import { useState, useEffect } from 'react';

interface ProjectDetailProps {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  images: string[];
  technologies: string[];
  show3DModel?: boolean;
}

export function ProjectDetail({
  id,
  title,
  subtitle,
  category,
  date,
  description,
  challenge,
  solution,
  results,
  images,
  technologies,
  show3DModel = false,
}: ProjectDetailProps) {
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  
  // Auto-wechseln der Galerie alle 4 Sekunden
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGalleryIndex((prev) => (prev + 1) % Math.min(images.length, 4));
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const scrollToHome = () => {
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePrevGallery = () => {
    setCurrentGalleryIndex((prev) => (prev - 1 + Math.min(images.length, 4)) % Math.min(images.length, 4));
  };

  const handleNextGallery = () => {
    setCurrentGalleryIndex((prev) => (prev + 1) % Math.min(images.length, 4));
  };

  // Bilder für die Galerie (max 4)
  const galleryImages = images.slice(0, 4);
  
  // Horizontale Bilder im Content (ab Bild 4)
  const horizontalImages = images.slice(4);

  return (
    <div id={id} className="relative min-h-screen bg-black py-24 md:py-32 px-4 md:px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onClick={scrollToHome}
          className="flex items-center gap-2 text-white/60 hover:text-ice-400 transition-colors mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span className="px-4 py-1.5 rounded-full bg-ice-400/20 border border-ice-400/30 text-ice-400">
              {category}
            </span>
            <div className="flex items-center gap-2 text-white/50">
              <Calendar size={16} />
              <span>{date}</span>
            </div>
          </div>

          <h1 className="bg-gradient-to-r from-ice-200 via-ice-400 to-ice-200 bg-clip-text text-transparent mb-3" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            {title}
          </h1>
          <p className="text-ice-400 mb-6" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)' }}>
            {subtitle}
          </p>
          <p className="text-white/70 max-w-3xl" style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' }}>
            {description}
          </p>
        </motion.div>

        {/* Fotogalerie am Anfang - Horizontal durchklickbar */}
        {galleryImages.length > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-16 relative rounded-3xl overflow-hidden group"
          >
            {/* Hauptbild der Galerie */}
            <div className="relative aspect-video bg-zinc-900">
              <motion.img
                key={currentGalleryIndex}
                src={galleryImages[currentGalleryIndex]}
                alt={`${title} - Gallery ${currentGalleryIndex + 1}`}
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Overlay mit Buttons */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* Previous Button */}
                <button
                  onClick={handlePrevGallery}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white transition-all"
                >
                  <ChevronLeft size={24} />
                </button>

                {/* Next Button */}
                <button
                  onClick={handleNextGallery}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white transition-all"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>

            {/* Galerie Indikatoren */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentGalleryIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentGalleryIndex 
                      ? 'bg-ice-400 w-8' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* 3D Model Alternative (wenn aktiviert) */}
        {show3DModel && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-16 rounded-3xl overflow-hidden"
          >
            <div className="relative bg-gradient-to-br from-zinc-900 to-black border border-white/10" style={{ minHeight: '600px' }}>
              <div className="absolute inset-0 bg-gradient-to-tr from-ice-400/10 via-transparent to-ice-400/5 z-10 pointer-events-none" />
              <Model3D />
            </div>
          </motion.div>
        )}

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-16">
          {/* Challenge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2"
          >
            <h3 className="text-white mb-4 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-ice-400/20 flex items-center justify-center">
                <Tag size={16} className="text-ice-400" />
              </div>
              The Challenge
            </h3>
            <p className="text-white/70 leading-relaxed">
              {challenge}
            </p>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-white mb-4">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/80 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Solution */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-white mb-4">The Solution</h3>
          <p className="text-white/70 leading-relaxed max-w-4xl">
            {solution}
          </p>
        </motion.div>

        {/* Horizontale Bilder im Content */}
        {horizontalImages.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 space-y-8"
          >
            {horizontalImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl overflow-hidden"
              >
                <img
                  src={img}
                  alt={`${title} - Detail ${index + 1}`}
                  className="w-full aspect-video object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Results */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-br from-zinc-900 to-black border border-white/10 p-8 md:p-12"
        >
          <h3 className="text-white mb-6">Results & Impact</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {results.map((result, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-ice-400/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <ExternalLink size={14} className="text-ice-400" />
                </div>
                <p className="text-white/70">{result}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
