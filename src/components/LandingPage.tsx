import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const subtitles = [
  '3D Artist & Creative Designer',
  'Visual Storyteller',
  'Digital Art Specialist',
  'Motion Graphics Expert',
];

export function LandingPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSubtitle, setCurrentSubtitle] = useState(0);
  
  // Wechselnder Untertitel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubtitle((prev) => (prev + 1) % subtitles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Scroll-basierte Animationen für Ausblenden
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen"
    >
      {/* Sticky Container mit separatem Hintergrund */}
      <div className="sticky top-0 h-screen overflow-hidden">
        
        {/* Separater interessanter Hintergrund - blendet sanft aus beim Scrollen */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ opacity: backgroundOpacity }}
        >
          {/* Dynamischer Verlauf Hintergrund mit weichem Übergang */}
          <div 
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(circle at 20% 30%, rgba(56, 189, 248, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 80% 70%, rgba(125, 211, 252, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.08) 0%, transparent 60%),
                linear-gradient(180deg, #000000 0%, #000000 100%)
              `,
            }}
          />
          
          {/* Weicher Übergang nach unten */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-64"
            style={{
              background: 'linear-gradient(to bottom, transparent 0%, #000000 100%)',
            }}
          />
          
          {/* Subtile Eislinien */}
          <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="iceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#38bdf8', stopOpacity: 0.3 }} />
                <stop offset="100%" style={{ stopColor: '#7dd3fc', stopOpacity: 0.1 }} />
              </linearGradient>
            </defs>
            <path d="M0,200 Q400,150 800,200 T1600,200" stroke="url(#iceGrad)" strokeWidth="2" fill="none" opacity="0.6" />
            <path d="M0,400 Q400,350 800,400 T1600,400" stroke="url(#iceGrad)" strokeWidth="2" fill="none" opacity="0.4" />
            <path d="M0,600 Q400,550 800,600 T1600,600" stroke="url(#iceGrad)" strokeWidth="2" fill="none" opacity="0.3" />
            
            {/* Kristall-Muster */}
            <circle cx="15%" cy="25%" r="2" fill="#38bdf8" opacity="0.6" />
            <circle cx="85%" cy="75%" r="3" fill="#7dd3fc" opacity="0.5" />
            <circle cx="25%" cy="80%" r="2" fill="#38bdf8" opacity="0.4" />
            <circle cx="75%" cy="30%" r="2" fill="#7dd3fc" opacity="0.5" />
          </svg>

          {/* Noise Texture */}
          <div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
            }}
          />
        </motion.div>

        {/* Content Container */}
        <motion.div 
          className="relative h-full z-30 flex items-center"
          style={{ opacity: contentOpacity }}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
            <div className="grid md:grid-cols-2 gap-16 items-center relative">
              
              {/* Linke Seite - Text (hinter den Bildern, z-10) */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, delay: 0.3 }}
                className="space-y-6 relative z-10"
              >
                {/* Wechselnder Subtitle */}
                <motion.div
                  className="inline-block"
                >
                  <div className="px-4 py-2 rounded-full backdrop-blur-md border border-ice-400/30 bg-ice-400/10">
                    <motion.span
                      key={currentSubtitle}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.5 }}
                      className="text-ice-400 tracking-wider text-sm block"
                    >
                      {subtitles[currentSubtitle]}
                    </motion.span>
                  </div>
                </motion.div>

                {/* Main Brand Name - COLDVZN */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <h1 
                    className="text-white leading-none"
                    style={{
                      fontSize: 'clamp(3.5rem, 12vw, 8rem)',
                      fontWeight: 700,
                      letterSpacing: '-0.03em',
                    }}
                  >
                    COLD
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-ice-200 via-ice-400 to-silver-200">
                      VZN.
                    </span>
                  </h1>
                </motion.div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="text-white/80 max-w-md"
                  style={{
                    fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                    lineHeight: '1.7',
                  }}
                >
                  Crafting immersive 3D experiences and visual narratives that push the boundaries of digital art.
                </motion.p>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  <button
                    onClick={() => {
                      const element = document.getElementById('3d-projects');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="group relative px-8 py-4 rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
                    style={{
                      background: 'linear-gradient(135deg, #38bdf8, #7dd3fc)',
                      boxShadow: '0 8px 24px rgba(56, 189, 248, 0.4)',
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-ice-400 to-ice-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative text-black tracking-wide">
                      View Projects
                    </span>
                  </button>
                </motion.div>
              </motion.div>

              {/* Rechte Seite - 2 Freigestellte Rendering Bilder (über dem Text, z-20) */}
              <div className="relative h-[600px] md:h-[700px] z-20">
                {/* Bild 1 - Oben links */}
                <motion.div
                  initial={{ opacity: 0, y: -50, rotateZ: -10 }}
                  animate={{ opacity: 1, y: 0, rotateZ: 0 }}
                  transition={{ duration: 1.2, delay: 0.4 }}
                  className="absolute top-0 left-0 w-3/4"
                  style={{
                    filter: 'drop-shadow(0 20px 40px rgba(56, 189, 248, 0.4))',
                  }}
                >
                  <motion.img
                    src="https://lh3.googleusercontent.com/d/1eOMAFX6AroKdLLr9zqbwSJAuf6EJTqwk"
                    alt="3D Render 1"
                    className="w-full h-auto object-contain"
                    animate={{
                      y: [0, -15, 0],
                      rotateZ: [0, 2, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>

                {/* Bild 2 - Unten rechts */}
                <motion.div
                  initial={{ opacity: 0, y: 50, rotateZ: 10 }}
                  animate={{ opacity: 1, y: 0, rotateZ: 0 }}
                  transition={{ duration: 1.2, delay: 0.6 }}
                  className="absolute bottom-0 right-0 w-3/4"
                  style={{
                    filter: 'drop-shadow(0 20px 40px rgba(125, 211, 252, 0.4))',
                  }}
                >
                  <motion.img
                    src="https://lh3.googleusercontent.com/d/18Q7fjY7dDKFcs49LIFZzmgwwrOIVBCqm"
                    alt="3D Render 2"
                    className="w-full h-auto object-contain"
                    animate={{
                      y: [0, 15, 0],
                      rotateZ: [0, -2, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  />
                </motion.div>

                {/* Glow Effekt hinter den Bildern */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ice-400/20 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ice-500/15 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          style={{ opacity: contentOpacity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-40"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-ice-400/60"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
